import express from "express"
import { Content, Group, Subject, Contributors, Program, User } from "../controllers"
import { blockIfNotAuthorized, requiresAdminEditToken, requiresModeratorPrivilege } from "../middlewares/verify_auth"

const router = express.Router({
	strict: true
})

router.all("/", (req: express.Request, res: express.Response) => {
	res.status(200).json({
		message: "Welcome to datasektionen.link API v1"
	})
})

router.post("/program", requiresAdminEditToken, Program.create)
router.get("/program", Program.read)
router.post("/program/subject", requiresAdminEditToken, Program.addSubject)
router.post("/program/contributor", requiresAdminEditToken, Program.addContributor)
router.post("/subject", requiresAdminEditToken, Subject.create)
router.get("/subject", Subject.read)
router.patch("/subject", requiresAdminEditToken, Subject.update)
router.delete("/subject", requiresAdminEditToken, Subject.delete)
router.post("/group", blockIfNotAuthorized, Group.create)
router.get("/group", Group.read)
router.patch("/group", blockIfNotAuthorized, Group.update)
router.delete("/group", blockIfNotAuthorized, Group.delete)
router.post("/group/textcontent", blockIfNotAuthorized, Content.createText)
router.post("/group/linkcontent", blockIfNotAuthorized, Content.createLink)
router.post("/group/deadlinecontent", blockIfNotAuthorized, Content.createDeadline)
router.patch("/group/textcontent", blockIfNotAuthorized, Content.updateText)
router.patch("/group/linkcontent", blockIfNotAuthorized, Content.updateLink)
router.patch("/group/deadlinecontent", blockIfNotAuthorized, Content.updateDeadline)
router.patch("/group/order", blockIfNotAuthorized, Content.updateContentPosition)
//router.post("/group/groupcontent", Content.createGroup)
router.get("/group/content", Content.read)
router.delete("/group/content", blockIfNotAuthorized, Content.delete)
/* router.post("/contributor/name", Contributors.nameContributor)
router.patch("/contributors/merge", Contributors.mergeContributors) */

router.get("/user", User.read)
router.get("/login", User.getAuthSession)
router.get("/contributors", Contributors.getContributors)

export default router