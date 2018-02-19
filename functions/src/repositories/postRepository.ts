import { Post } from "../models/post";

export interface PostRepository {
    add(post:Post);
    getAll():Post[];
}