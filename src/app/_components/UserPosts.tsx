import React from "react";
import { Post } from "../../../types";

type Props = {
  promise: Promise<Post[]>;
};

async function UserPosts({ promise }: Props) {
  const userPosts = await promise;

  return (
    <div>
      {userPosts.map((post) => {
        return (
          <div key={post.id} className="my-3">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default UserPosts;
