import Link from "next/link";

const login = () => {
  return (
    <div>
      login
      <Link href={"/signup"}>Signup</Link>
    </div>
  );
};

export default login;
