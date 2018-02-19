
import { PostRepository } from "../postRepository";
import { Post } from "../../models/post";

export class DummyPostRepository implements PostRepository {
    private static posts = [];
    
    add(post: Post) {
        DummyPostRepository.posts.push(post);
    }

    getAll(): Post[]{
        return [...DummyPostRepository.posts];
    }
}