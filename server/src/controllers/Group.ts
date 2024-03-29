import express from "express"
import { CrudController } from "./CrudController"
import { createGroup, findElementWithId, findElementWithIdFingerPrint, updateGroup } from "./schemas"
import GroupModel from "../models/group.model"
import Mongoose from "mongoose"
import Log from "../controllers/Log"
import { ContentType, OperationType } from "../models/log.model"

export default class GroupController extends CrudController {
	public async create(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
		const { error } = createGroup.validate(req.body)
		if (error) {
			super.fail(res, error.message, 400, next)
			return
		}

		const parent = await GroupModel.findOne({
			_id: req.body.parentGroup
		})
		if (parent == null) {
			res.status(404).json({
				message: "The specified group does not exist"
			})
			return
		}

		// Create group
		const object: {
			name?: string,
			split: boolean,
			column: boolean,
			depth: number
		} = {
			split: req.body.split,
			column: req.body.column,
			depth: parent.depth + 1
		}

		if (req.body.name != null)
			object.name = req.body.name

		const newGroup = new GroupModel(object)

		// Assign group to parent
		const groupId = new Mongoose.Types.ObjectId().toHexString()
		try {
			await GroupModel.updateOne({
				_id: req.body.parentGroup
			}, {
				$push: {
					content: {
						$each: [{
							_id: groupId,
							placement: req.body.placement ?? 0,
							group: newGroup._id
						}],
						$position: req.body.placement
					}
				}
			})
		} catch (error) {
			res.status(400).json({
				message: "The action could not be performed, probably because the positional argument exceeds the object count"
			})
			return
		}

		await newGroup.save().catch(() => {
			res.status(500).json({
				message: "Internal error"
			})
		})

		// Notify logg			
		Log(
			req.user!.id,
			OperationType.CREATE,
			ContentType.GROUP,
			[
				req.body.parentGroup,
				groupId,
				req.body.name
			],
			[
				req.body.parentGroup,
				"",
				""
			]
		)

		if (!res.headersSent)
			res.status(201).json({
				message: "Successfully created group",
				group: newGroup
			})
		next()
	}
	public async read(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {

		// ? req.body is probably wrong since this is a get request it should be req.query right?
		const { error } = findElementWithId.validate(req.body)
		if (error) {
			super.fail(res, error.message, 400, next)
			return
		}

		const response = await GroupModel.find({
			_id: req.body.id
		}).populate("group")

		if (response != null)
			res.status(404).json({})
		else
			res.status(200).json(response)
		next()
	}
	public async update(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
		const { error } = updateGroup.validate(req.body)
		if (error) {
			super.fail(res, error.message, 400, next)
			return
		}

		const updateObject: {
			name?: string,
			column?: boolean,
			split?: boolean,
			placement?: number
		} = {}

		if (req.body.name != null)
			updateObject.name = req.body.name
		if (req.body.column != null)
			updateObject.column = req.body.column
		if (req.body.split != null)
			updateObject.split = req.body.split
		if (req.body.placement != null)
			updateObject.placement = req.body.placement
		

		try {
			await GroupModel.updateOne({
				_id: req.body.id
			}, updateObject)
		} catch (error) {
			res.status(500).json({
				message: "Could not perform request, internal error"
			})
			return
		}

		// Notify logg			
		Log(
			req.user!.id,
			OperationType.UPDATE,
			ContentType.GROUP,
			[
				"",
				req.body.id,
				req.body.name ?? "",
				req.body.column ?? "",
				req.body.split ?? "",
				req.body.placement ?? ""
			],
			[
				"",
				req.body.id,
				"",
				"",
				"",
				""
			]
		)

		res.status(200).json({
			message: "Resource updated",
			group: {
				_id: req.body.id,
				name: req.body.name ?? undefined,
				split: req.body.split,
				column: req.body.column,
				placement: req.body.placement,
			}
		})
	}
	public async delete(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
		const { error } = findElementWithIdFingerPrint.validate(req.body)
		if (error) {
			super.fail(res, error.message, 400, next)
			return
		}

		try {
			await GroupModel.updateOne({
				"content.group": req.body.id
			}, {
				$pull: {
					content: {
						group: req.body.id
					}
				}
			})
		} catch (error) {
			res.status(500).json({
				message: "Internal error"
			})
			return
		}

		const deletions = await GroupController.recursiveDelete(req.body.id)		

		// Notify log			
		Log(
			req.user!.id,
			OperationType.DELETE,
			ContentType.GROUP,
			[
				"",
				req.body.id
			],
			[
				"",
				req.body.id
			]
		)

		res.status(200).json({
			message: `Successfully deleted ${deletions} groups`
		})
		next()
	}

	// Recursivly deletes all groups
	public static async recursiveDelete(id: string): Promise<number> {
		if (id.length <= 0)
			return 0

		const group = await GroupModel.findOne({
			_id: id
		})

		if (group == null)
			return 0

		const deletions = []
		let deleteCount = 1

		if (group.content != null) {
			for (let i = 0; i < group.content.length; i++) {
				if (group.content[i].group != undefined)
					deletions.push(this.recursiveDelete(group.content[i].group!.toString()))
			}
		}

		deleteCount += deletions.length
		await Promise.all(deletions)

		await GroupModel.deleteOne({
			_id: id
		})
		return deleteCount
	}
}
