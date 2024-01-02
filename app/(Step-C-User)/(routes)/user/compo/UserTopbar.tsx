"use client";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import UserMobileSidebar from "./UserMobileSidebar";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

const UserTopbar = () => {
  return (
    <>
      <div className="flex flex-1">
        <UserMobileSidebar />
      </div>
      <div className="space-x-2 py-3 flex flex-row h-full bg-[#111827] text-white">
        <div className="flex flex-1">
          <Link href="/user">
            <div className="relative items-center mt-1 ">
              <Image src="/behola.png" height={80} width={160} alt="logo" />
            </div>
          </Link>
        </div>
        <div className="flex flex-1 w-full justify-end pr-10">
          <div className="mr-5 pt-2">Offer!</div>
          <Button variant="outline" className="bg-[#111827]">
            Upgrade Plan
          </Button>
        </div>
      </div>
    </>
  );
};

export default UserTopbar;
