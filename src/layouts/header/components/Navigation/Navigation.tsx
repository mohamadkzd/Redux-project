"use client";

import sidebar from "@/data/Sidebar";
import { Box } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathName = usePathname();

  return (
    <ul className="flex justify-center items-center gap-x-7">
      {sidebar?.map((item) => (
        <Box>
          <Link href={item.linkAddress}>
            <li
              className={`transition-all ease-in ${
                pathName === item.linkAddress
                  ? "flex justify-center items-center gap-x-2 text-cyan-600 font-bold"
                  : "flex justify-center items-center gap-x-2 text-black"
              }`}
            >
              <Box>{item.icon}</Box>
              {item.name}
            </li>
          </Link>
        </Box>
      ))}
    </ul>
  );
};

export default Navigation;
