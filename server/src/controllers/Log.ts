import { User } from "../controllers"
import mongoose from "mongoose"
import Log, { ContentType, OperationType } from "../models/log.model"

const log = async (
	userId: mongoose.Types.ObjectId,
	operation: OperationType, 
	type: ContentType, 
	to: string[], 
	from?: string[]
): Promise<void> => {

	const newLog = new Log({
		user: userId,
		operation,
		to,
		type,
		from: from ?? []
	})

	await newLog.save()

	await User.contribute(
		userId.toString(), 
		operation, 
		type
	)
}

export default log