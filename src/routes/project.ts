import { addMemberToProject, createProject, deleteMember, deleteProject, getProjectById, getProjectMembers, getProjects, updateMemberRole, updateProject } from "@/controllers/project";
import { isAuth } from "@/middleware/isAuthnicated";
import { isAuthorized } from "@/middleware/isAutorized";
import { validate } from "@/middleware/validator";
import { memberRoleSchema, projectSchema, updateProjectSchema } from "@/validators/project.schema";
import { Router } from "express";

export const router: Router = Router()

router.use(isAuth)
router.post("/", validate(projectSchema), isAuthorized, createProject)
router.get("/", getProjects)
router.get("/:projectId", getProjectById)
router.patch("/:projectId", validate(updateProjectSchema), isAuthorized, updateProject)
router.delete("/:projectId", isAuth, deleteProject)
router.post("/add-member/:projectId/:memberId", validate(memberRoleSchema), addMemberToProject)
router.get("/members/:projectId", getProjectMembers)
router.post("/update-member-role/:projectId/:userId", validate(memberRoleSchema), updateMemberRole)
router.delete("/delete-member/:projectId/:userId", deleteMember)
