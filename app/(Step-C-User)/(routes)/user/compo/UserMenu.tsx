"use client";

import { IBM_Plex_Sans } from 'next/font/google';
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";


import { LayoutDashboard, 
    ChevronsRight, 
    Pencil, 
    BookOpen, 
    Share2, 
    Megaphone,
    Search,
    HeartHandshake,
    Layout,
    MailOpen,
    Wallet2,
    CopySlash,
    Lightbulb,
    ImagePlus,
    UserRound,
    LifeBuoy,
    Clapperboard,
    Music,
    Rainbow,
    FileImage,
    Guitar,
    FileVideo2,
    Settings,
    Type,
    Speech,
    Baseline,
    PaintBucket,
    Cog,
    Dices,
    Frame,
    Home,
    MessagesSquare,
    PersonStanding,
    Wand,
    ScrollText,
    ToyBrick,
    Tally4,

} from "lucide-react";


import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"

const ibmplexfont = IBM_Plex_Sans({ weight:"700", subsets: ["latin"] });

const routes = [
    {
        label: "Library",
        href: "/user/library",
        icon:  ChevronsRight,
        color: "text-[#FFC107]",    
    },
    {
        label: "Favourites",
        href: " /user/Favourites",
        icon:  ChevronsRight,
        color: "text-[#FFC107]",    
    },
    {
        label: "AI Chatbots",
        href: "/user/ai-chatbots",
        icon:  ChevronsRight,
        color: "text-[#FFC107]",    
    },
    {
        label: "Code Generator",
        href: "/user/code-generator",
        icon:  ChevronsRight,
        color: "text-[#FFC107]",    
    },
 ];

 const routesmain = [
    {
        label: "Blog Tools",
        href: "/user/blog-tools",
        icon:  Pencil,
        color: "text-[#FFC107]",   
    },
    {
        label: "Book Writing",
        href: "/user/book-writing",
        icon:  BookOpen,
        color: "text-[#FFC107]",   
    },
    {
        label: "Social Media",
        href: "/user/social-media",
        icon:  Share2,
        color: "text-[#FFC107]",   
    },
    {
        label: "Advertisement",
        href: "/user/advertisement",
        icon:  Megaphone,
        color: "text-[#FFC107]",   
    },    
    {
        label: "SEO Tools",
        href: "/user/seo-tools",
        icon:  Search,
        color: "text-[#FFC107]",   
    },    
    {
        label: "Writing Help",
        href: "/user/writing-help",
        icon:  HeartHandshake,
        color: "text-[#FFC107]",   
    },    
    {
        label: "Website Content",
        href: "/user/website-content",
        icon:  Layout,
        color: "text-[#FFC107]",   
    },    
    {
        label: "Email Content",
        href: "/user/email-content",
        icon:  MailOpen,
        color: "text-[#FFC107]",   
    },    
    {
        label: "Sales Tool",
        href: "/user/sales-tool",
        icon:  Wallet2,
        color: "text-[#FFC107]",   
    },    
    {
        label: "Copywriting",
        href: "/user/copywriting",
        icon:  CopySlash,
        color: "text-[#FFC107]",   
    },    
    {
        label: "Ideas",
        href: "/user/ideas",
        icon:  Lightbulb,
        color: "text-[#FFC107]",   
    },    
    {
        label: "Image Prompts",
        href: "/user/image-prompts",
        icon:  ImagePlus,
        color: "text-[#FFC107]",   
    },    
    {
        label: "HR Tool",
        href: "/user/hr-tool",
        icon:  UserRound,
        color: "text-[#FFC107]",   
    },    
    {
        label: "Support",
        href: "/user/support",
        icon:  LifeBuoy,
        color: "text-[#FFC107]",   
    },    
    {
        label: "Film Making",
        href: "/user/film-making",
        icon:  Clapperboard,
        color: "text-[#FFC107]",   
    },    
    {
        label: "Music Tool",
        href: "/user/music-tool",
        icon:  Music,
        color: "text-[#FFC107]",   
    },    
    {
        label: "Other Tools",
        href: "/user/other-tools",
        icon:  Rainbow,
        color: "text-[#FFC107]",   
    },    
];


const routesaccount = [
    {
        label: "Profile",
        href: "/user/profile",
        icon:  ChevronsRight,
        color: "text-white",   
    },    
    {
        label: "Subscription",
        href: "/user/subscription",
        icon:  ChevronsRight,
        color: "text-white",   
    },    
    {
        label: "Payments",
        href: "/user/payments",
        icon:  ChevronsRight,
        color: "text-white",   
    },    
    {
        label: "Settings",
        href: "/user/settings",
        icon:  ChevronsRight,
        color: "text-white",   
    },    
    {
        label: "Help / Support",
        href: "/user/help-support",
        icon:  ChevronsRight,
        color: "text-white",   
    },    
    {
        label: "Logout",
        href: "/user/logout",
        icon:  ChevronsRight,
        color: "text-white",   
    },    
];


const routesallcontents = [
    {
        label: "Branding",
        href: "/user/allbranding",
        icon:  Dices,
        color: "text-white",   
    },    
    {
        label: "Frameworks",
        href: "/user/allcopywriting",
        icon:  Frame,
        color: "text-white",   
    },    
    {
        label: "Homepage",
        href: "/user/allhomepage",
        icon:  Home,
        color: "text-white",   
    },    
    {
        label: "Socialmedia",
        href: "/user/allsocialmedia",
        icon:  MessagesSquare,
        color: "text-white",   
    },    
    {
        label: "Employee",
        href: "/user/allemployee",
        icon:  PersonStanding,
        color: "text-white",   
    },    
];

const routeswizard = [
    {
        label: "Blogging",
        href: "/user/blogwizard",
        icon:  ToyBrick,
        color: "text-white",   
    },    
    {
        label: "Proposal",
        href: "/user/proposalwizard",
        icon:  ScrollText,
        color: "text-white",   
    },    
];


const routescreation = [
    {
        label: "Create Image",
        href: "/user/create-image",
        icon:  FileImage,
        color: "text-white",   
    },    
    {
        label: "Create Music",
        href: "/user/create-music",
        icon:  Guitar,
        color: "text-white",   
    },    
    {
        label: "Create Video",
        href: "/user/create-video",
        icon:  FileVideo2,
        color: "text-white",   
    },    
    {
        label: "Text to Speech",
        href: "/user/text-to-speech",
        icon:  Speech,
        color: "text-white",   
    },    
    {
        label: "Speech to Text",
        href: "/user/speecht-to-text",
        icon:  Type,
        color: "text-white",   
    },                
];





const UserMenu = () => {
    const pathname = usePathname();
    return (
        <div className='flex flex-row items-right justify-end mr-10'>
            <Menubar className='w-fit'>
            <MenubarMenu>
            
            <Link 
                href="/user"
                className="justify-start font-sm cursor-pointer">
                <div>
                <MenubarTrigger>
                <LayoutDashboard className="pr-2" />
                User Dashboard
                </MenubarTrigger>
                </div>
            </Link>
            

            <MenubarContent>
            <div>
            
            {routes.map((route) => (
                <Link 
                href={route.href}
                key={route.href}
                className="text-sm cursor-pointer rounded-lg transition">                
                <MenubarItem>
                <div className="flex items-center">
                <route.icon className="pr-2" />
                {route.label}
                </div>
                </MenubarItem>
                </Link>))}
            
            </div>                
            </MenubarContent>
            </MenubarMenu>    


            <MenubarMenu>
            <div>
            <Link 
                href="/user"
                className="justify-start font-sm cursor-pointer">
                <div>
                <MenubarTrigger>
                <Wand className="pr-2" />
                Wizards
                </MenubarTrigger>    
                </div>
            </Link>
            </div>
          
            <MenubarContent>
            <div>
            {routeswizard.map((routes9) => (
                <Link 
                href={routes9.href}
                key={routes9.href}
                className="text-sm cursor-pointer rounded-lg transition">              
                <MenubarItem>               
                <div className="flex items-center">
                <routes9.icon className="pr-2" />
                {routes9.label}    
                </div>
                </MenubarItem>
                </Link>
            ))}
            </div>
            </MenubarContent>
            

            </MenubarMenu>        


            <MenubarMenu>    
            <div>
            <Link 
                href="/user"
                className="justify-start font-sm cursor-pointer">
                <div>
                <MenubarTrigger>        
                <Baseline className="pr-2" />
                Text Contents
                </MenubarTrigger>    
                </div>
            </Link>
            </div>

            
            <MenubarContent>
            <div>    
            {routesmain.map((route1) => (
                <Link 
                href={route1.href}
                key={route1.href}
                className="text-sm cursor-pointer rounded-lg transition">
                <MenubarItem>                     
                <div className="flex items-center">
                <route1.icon className="pr-2" />
                {route1.label}
                </div>
                </MenubarItem>
                </Link>
            ))}
            </div>  

            </MenubarContent>    
            </MenubarMenu>    

            <MenubarMenu>    
            <div>
            <Link 
                href="/user"
                className="justify-start font-sm cursor-pointer">
                <div>
                <MenubarTrigger>    
                <PaintBucket className="pr-2" />
                Creations
                </MenubarTrigger>    
                </div>
            </Link>
            </div>       


            <MenubarContent>
            <div>
            {routescreation.map((route100) => (
                <Link 
                href={route100.href}
                key={route100.href}
                className="text-sm cursor-pointer rounded-lg transition">
                <MenubarItem>                     
                <div className="flex items-center">
                <route100.icon className="pr-2" />
                {route100.label}
                </div>
                </MenubarItem>
                </Link>
            ))}
            </div>  
            </MenubarContent>
            </MenubarMenu>    

            <MenubarMenu>    
            <div>
            <Link 
                href="/user"
                className="justify-start font-sm cursor-pointer">
                <div>
                <MenubarTrigger>    
                <Tally4 className="pr-2" />
                All Contents
                </MenubarTrigger>    
                </div>
            </Link>
            </div>
          
            <MenubarContent>
            <div>
            {routesallcontents.map((routes99) => (
                <Link 
                href={routes99.href}
                key={routes99.href}
                className="text-sm cursor-pointer rounded-lg transition">
                <MenubarItem>                 
                <div className="flex items-center">
                <routes99.icon className="pr-2" />
                {routes99.label}
                </div>
                </MenubarItem>
                </Link>
            ))}
            </div>
            </MenubarContent>
            </MenubarMenu>        



            <MenubarMenu>    

            <div>
            <Link 
                href="/user"
                className="justify-start font-sm cursor-pointer">
                <div>
                <MenubarTrigger>    
                <Cog className="pr-2" />
                Account
                </MenubarTrigger>    
                </div>
            </Link>
            </div>   

            <MenubarContent>
            <div>
            {routesaccount.map((route2) => (
                <Link 
                href={route2.href}
                key={route2.href}
                className="text-sm cursor-pointer rounded-lg transition">    
                <MenubarItem>         
                <div className="flex items-center">
                <route2.icon className="pr-2" />
                {route2.label}
                </div>
                </MenubarItem>
                </Link>
            ))}
            </div>
            </MenubarContent>
            </MenubarMenu>    





            </Menubar>    
        </div>

    );
}

export default UserMenu;