import Link from "next/link";
const Home = () => {
  return (
    <>
      <h1>This is HomePage</h1>
      <Link href={"/dashboard"} scroll={true}>
        Go to Dashboard
      </Link>
      <Link href={"/users"}>Go to Users</Link>
    </>
  );
};

export default Home;
