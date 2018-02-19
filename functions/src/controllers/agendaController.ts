import { Request, Response, json } from "express";

export let getAll = (req: Request, res: Response) => {
  res.json({message: 'get all called'});
};