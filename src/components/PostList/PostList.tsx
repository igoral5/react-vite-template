import { use, type ReactElement } from "react";
import type { TPost } from "../../types";

interface PostListProps {
    postsPromise: Promise<TPost[]>
}

export function PostList({postsPromise}: PostListProps): ReactElement {
    const posts = use(postsPromise);

    return (
        <ol>
          {posts.map((post) => (
            <li key={post.id}>{post.text}</li>
          ))}
        </ol>
    );
}