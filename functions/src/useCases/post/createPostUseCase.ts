import { Post } from '../../models/post';
import { transformAndValidate } from "class-transformer-validator";
import { ObjectValidationError } from "../../errors/objectValidationError";
import { PostRepository } from "../../repositories/postRepository";
import { DummyPostRepository } from "../../repositories/impl/dummyPostRepository";

export class CreatePostUseCase{   
    
    private postRepository:PostRepository;
    private createdPost: Post;

    constructor(){
        this.postRepository = new DummyPostRepository();
    }
    
    async execute(postData){
        try {
            this.createdPost = await transformAndValidate(Post, postData) as Post;
        }
        catch(err){
            throw new ObjectValidationError(err);
        }

        this.postRepository.add(this.createdPost);
        return this.createdPost;
    }
}