import { Post } from '../../models/post';
import { PostRepository } from "../../repositories/postRepository";
import { DummyPostRepository } from "../../repositories/impl/dummyPostRepository";

export class GetAllPostsUseCase{   
    
    private postRepository:PostRepository;
    private createdPost: Post;

    constructor(){
        this.postRepository = new DummyPostRepository();
    }
    
    async execute(){
        return this.postRepository.getAll();
    }
}