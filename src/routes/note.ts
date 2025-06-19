import { createNote, deleteNote, getNoteById, getNotes, updateNote } from "@/controllers/note";
import { isAuth } from "@/middleware/isAuthnicated";
import { validate } from "@/middleware/validator";
import { createNoteSchema, updateNoteSchema } from "@/validators/note.schema";
import { Router } from "express";

export const router: Router = Router()

router.use(isAuth)
router.post("/", validate(createNoteSchema), createNote)
router.get("/:projectId", getNotes)
router.get("/note-details/:noteId", getNoteById)
router.patch("/:noteId", validate(updateNoteSchema), updateNote)
router.delete("/:noteId", deleteNote)