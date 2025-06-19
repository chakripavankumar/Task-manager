import { createSubTask, createTask, deleteSubTask, deleteTask, getTaskById, getTasks, updateSubTask, updateTask } from "@/controllers/task";
import { isAuth } from "@/middleware/isAuthnicated";
import { upload } from "@/middleware/multer";
import { validate } from "@/middleware/validator";
import { createSubTaskSchema, createTaskSchema, updateSubTaskSchema, updateTaskSchema } from "@/validators/task.schema";
import { Router } from "express";

export const router: Router = Router()

router.use(isAuth)
router.post("/" , upload.single("attachments") , validate(createTaskSchema), createTask) 
router.get("/:projectId" , getTasks)
router.get("/task-details/:taskId" , getTaskById)
router.patch("/:taskId" , validate(updateTaskSchema), updateTask)
router.delete("/:taskId" , deleteTask)
router.post("/create-subtask" , validate(createSubTaskSchema) , createSubTask)
router.delete("/delete-subtask/:subtaskId" , deleteSubTask)
router.patch("/update-subtask/:subtaskId" , validate(updateSubTaskSchema),updateSubTask)
