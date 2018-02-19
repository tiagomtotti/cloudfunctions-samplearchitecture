import { Request, Response, json } from "express";
import { CreatePostUseCase } from "../useCases/post/createPostUseCase";
import { GetAllPostsUseCase } from "../useCases/post/getAllPostsUseCase";

export let createPost = (req: Request, res: Response, next) => {
    
    const useCase = new CreatePostUseCase();
    useCase.execute(req.body)
        .then(result=> { res.json(result); })
        .catch(next);
};

export let getAllPosts =  (req: Request, res: Response, next) => {
    const useCase = new  GetAllPostsUseCase();
    useCase.execute()
        .then(result=> { res.json(result); })
        .catch(next);
};