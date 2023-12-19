"use client";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import UserMobileSidebar from "./UserMobileSidebar";


const UserTopbar = () => {
    return (
        <><div className="flex items-center p-4">
            <UserMobileSidebar />
        </div>
        <div className="flex w-full justify-end pr-10">
        <Button variant="outline">
            Upgrade Plan 
        </Button>
        </div>    
        </>
    );
}

export default UserTopbar;