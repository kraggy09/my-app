import React, { Suspense } from "react";
import getUsers from "../libs/getUsers";
import { User } from "../../../types";
import Link from "next/link";

export default async function UsersPage() {
  const user: Promise<User[]> = await getUsers();
  const users = await user;
  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold"> Users Pages</h1>
      <Suspense fallback={<>Loading....</>}>
        {" "}
        {users.map((item) => {
          return (
            <div key={item.id} className="text-xl mt-5">
              <Link href={`/users/${item.id}`}>
                <p>{item.name}</p>
              </Link>
            </div>
          );
        })}
      </Suspense>
    </div>
  );
}
