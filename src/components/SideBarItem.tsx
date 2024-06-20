"use client";

import Link from "next/link";
import { PropsSideBarItem } from "@/types";
import { usePathname } from "next/navigation";

export const SideBarItem = ({ icon, path, title }: PropsSideBarItem) => {
  const pathName = usePathname();

  return (
    <>
      <ul className="space-y-2 tracking-wide mt-2">
        <li>
          <Link
            href={path}
            className={`
                relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400
                hover:bg-gradient-to-r hover:from-sky-700 hover:to-cyan-500
                ${
                  path === pathName
                } ? text-white bg-gradient-to-r from-sky-600 to-cyan-400 : ''
              `}>
            {icon}
            <span className="-mr-1 font-medium">{title}</span>
          </Link>
        </li>
      </ul>
    </>
  );
};
