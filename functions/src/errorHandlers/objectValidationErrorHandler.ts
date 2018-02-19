import { ObjectValidationError } from "../errors/objectValidationError";

export let objectValidationErrorHandler = (err, req, res, next) => {
  
  if( err instanceof ObjectValidationError ) {
    res.status(422).json(err);
  } else {
    next(err);
  }
}