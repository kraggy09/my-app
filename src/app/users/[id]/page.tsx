import React, { Suspense } from "react";
import getUser from "@/app/libs/getUser";
import { Post, User } from "../../../../types";
import getUserPosts from "@/app/libs/getUserPosts";
import UserPosts from "@/app/_components/UserPosts";

type Params = {
  params: { id: string };
};

export default async function page({ params }: Params) {
  const userData: Promise<User> = await getUser(params.id);
  const userPostsData: Promise<Post[]> = await getUserPosts(params.id);
  const user: User = await userData;

  return (
    <div className="text-xl text-white">
      {params.id}
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <Suspense fallback={<div className="w-full bg-gray-400 h-9"></div>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </div>
  );
}
