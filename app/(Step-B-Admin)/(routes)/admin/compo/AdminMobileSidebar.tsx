"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import UserSidebar from "./AdminSidebar";
import { useEffect, useState } from "react";

const UserMobileSidebar = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    },[]);

    if (!isMounted){
        return null;
    }

    return (
        <Sheet>
        <SheetTrigger>    
        <div>
            <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
            </Button>
        </div>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-fit">
            <UserSidebar />
        </SheetContent>
        </Sheet>
    );
}


export default UserMobileSidebar;
