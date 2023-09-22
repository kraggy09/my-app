"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const DashboardPage = () => {
  //
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div>
      <Link href={"/dashboard#div"}>Scroll to div</Link>

      <h1 className="h-[15000px]">Hello, Dashboard Page</h1>
      <div id="div" className="h-[1600px]">
        Scroll to thisL
      </div>
    </div>
  );
};

export default DashboardPage;
