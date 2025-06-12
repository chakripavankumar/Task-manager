import { changepassword ,forgetPassword , getUser , loginUser,logoutUser,refreshAccessToken,registerUser,resendVerification,resetPassword ,verifyUser } from "@/controllers/auth";
import { isAuth } from "@/middleware/isAuthnicated";
import { upload } from "@/middleware/multer";
import { validate } from "@/middleware/validator";
import { changePasswordSchema, loginSchema, registerUserSchema, resendVerificationSchema, resetPasswordSchema, verifyEmailSchema } from "@/validators/user.schema";
import { Router } from "express";

export const router :Router =  Router();

router.get("/" , isAuth, getUser);
router.post("/", upload.single("avatar"), validate(registerUserSchema), registerUser);
router.post("/login", validate(loginSchema), loginUser);
router.post("/logout", isAuth, logoutUser);
router.post("/verify", validate(verifyEmailSchema), verifyUser);
router.post("/resend-verification", validate(resendVerificationSchema), resendVerification);
router.post("/reset-password", validate(resetPasswordSchema), resetPassword);router.post("/refresh-accesstoken", refreshAccessToken);
router.post("/refresh-accesstoken", refreshAccessToken);
router.post("/forget-password", validate(resendVerificationSchema), forgetPassword);
router.post("/change-password", isAuth, validate(changePasswordSchema), changepassword)
