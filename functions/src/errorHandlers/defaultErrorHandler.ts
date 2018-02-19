import { Request, Response, NextFunction } from "express";

export let defaultErrorHandler = (err, req, res, next) => {
  res.status(500);
  res.json(err);
}