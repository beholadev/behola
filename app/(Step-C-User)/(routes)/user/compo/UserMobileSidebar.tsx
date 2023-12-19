"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const UserMobileSidebar = () => {
    return (
        <div>
            <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
            </Button>
        </div>
    );
}


export default UserMobileSidebar;
