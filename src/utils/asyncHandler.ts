import { Request, Response, NextFunction, RequestHandler } from "express";

export const asyncHandler = (
  requestHandler: (req: Request, res: Response, next: NextFunction) => any,
): RequestHandler => {
  return function (req, res, next) {
    Promise.resolve(requestHandler(req, res, next)).catch(next);
  };
};
