"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IBM_Plex_Sans } from 'next/font/google';
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

} from "lucide-react";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const ibmplexfont = IBM_Plex_Sans({ weight:"700", subsets: ["latin"] });



const routes = [
    {
        label: "Library",
        href: "/user/Library",
        icon:  ChevronsRight,
        color: "text-[#FFC107]",    
    },
    {
        label: "Favourites",
        href: "//user/Favourites",
        icon:  ChevronsRight,
        color: "text-[#FFC107]",    
    },
    {
        label: "AI Chatbots",
        href: "//user/ai-chatbots",
        icon:  ChevronsRight,
        color: "text-[#FFC107]",    
    },
    {
        label: "Code Generator",
        href: "//user/code-generator",
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

const UserSidebar = () => {
    
    return (
     <ScrollArea className={cn("space-y-2 py-2 flex flex-col h-full bg-[#111827] text-white", ibmplexfont.className)}>
            
            <div className="px-12 py-3 pt-4 flex-1">
            <Link href="/user" className="flex items-center pl-3 pr-2 pt-2 pb-2">
                <div className="relative w-full h-10 mr-4">
                <Image fill src="/behola.png" alt="logo"/> 
                </div>    
            </Link>

            <Link href="/user" className="flex flex-1">
                <div className="relative text-sm w-full pl-4 mb-6 text-[#FFC107] pb-4">
                 <p>An AI content generator!</p>
                </div>    
            </Link>


            <div className="pt-2 pb-2">
            <Link 
                href="/user"
                className="text-sm group border border-[#FFC107] flex p-2 w-full justify-start font-medium tracking-widest cursor-pointer hover:text-white hover:bg-white/10 transition">
                <div className="flex items-center flex-1 text-[#FFC107]">
                <LayoutDashboard className="h-5 w-5 mr-3 text-[#FFC107]" />
                User Dashboard
                </div>
            </Link>
            </div>

            <div className="pt-1 mt-2">
            {routes.map((route) => (
                <Link 
                href={route.href}
                key={route.href}
                className="text-sm group flex p-1 w-full justify-start font-medium tracking-widest cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition">                
                <div className="flex items-center ml-2 flex-1 text-white">
                <route.icon className={"h-5 w-5 mr-3 text-white"} />
                {route.label}
                </div>
                </Link>
            ))}
            </div>

            

            <div className="pt-4 pb-2 mt-2">
            <Link 
                href="/user"
                className="text-sm border border-[#FFC107] group flex p-2 w-full justify-start font-medium tracking-widest cursor-pointer hover:text-white hover:bg-white/10 transition">
                <div className="flex items-center flex-1 text-[#FFC107]">
                <Baseline className="h-5 w-5 mr-3 text-[#FFC107]" />
                Text Contents
                </div>
            </Link>
            </div>

            

            <div className=" mt-2">
            {routesmain.map((route1) => (
                <Link 
                href={route1.href}
                key={route1.href}
                className="text-sm group flex p-1 w-full justify-start font-medium tracking-widest cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition">                
                <div className="flex items-center ml-2 flex-1 text-white">
                <route1.icon className={"h-5 w-5 mr-3 text-white"} />
                {route1.label}
                </div>
                </Link>
            ))}
            </div>  

            <div className="pt-4 pb-2 mt-2">
            <Link 
                href="/user"
                className="text-sm group border border-[#FFC107] flex p-2 w-full justify-start font-medium tracking-widest cursor-pointer hover:text-white hover:bg-white/10 transition">
                <div className="flex items-center flex-1 text-[#FFC107]">
                <PaintBucket className="h-5 w-5 mr-3 text-[#FFC107]" />
                Creations
                </div>
            </Link>
            </div>           

            <div className=" mt-2">
            <Link 
                href="/user/create-image"
                className="text-sm group flex p-1 w-full justify-start font-medium tracking-widest cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition">
                <div className="flex items-center ml-2 flex-1 text-white">
                <FileImage className="h-5 w-5 mr-3 text-white" />
                Create Image
                </div>
            </Link>
            </div>        

            <div>
            <Link 
                href="/user/create-music"
                className="text-sm group flex p-1 w-full justify-start font-medium tracking-widest cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition">
                <div className="flex items-center ml-2 flex-1 text-white">
                <Guitar className="h-5 w-5 mr-3 text-white" />
                Create Music
                </div>
            </Link>
            </div>        

            <div>
            <Link 
                href="/user/create-video"
                className="text-sm group flex p-1 w-full justify-start font-medium tracking-widest cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition">
                <div className="flex items-center ml-2 flex-1 text-white">
                <FileVideo2 className="h-5 w-5 mr-3 text-white" />
                Create Video
                </div>
            </Link>
            </div>                    

            <div>
            <Link 
                href="/user/text-to-speech"
                className="text-sm group flex p-1 w-full justify-start font-medium tracking-widest cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition">
                <div className="flex items-center ml-2 flex-1 text-white">
                <Speech className="h-5 w-5 mr-3 text-white" />
                Text to speech
                </div>
            </Link>
            </div>   

            <div>
            <Link 
                href="/user/speech-to-text"
                className="text-sm group flex p-1 w-full justify-start font-medium tracking-widest cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition">
                <div className="flex items-center ml-2 flex-1 text-white">
                <Type className="h-5 w-5 mr-3 text-white" />
                Speech to Text
                </div>
            </Link>
            </div>   

            <div className="pt-4 pb-2 mt-2">
            <Link 
                href="/user"
                className="text-sm group border border-[#FFC107] flex p-2 w-full justify-start font-medium tracking-widest cursor-pointer hover:text-white hover:bg-white/10 transition">
                <div className="flex items-center flex-1 text-[#FFC107]">
                <Cog className="h-5 w-5 mr-3 text-[#FFC107]" />
                Account
                </div>
            </Link>
            </div>   

            <div className=" mt-2">
            {routesaccount.map((route2) => (
                <Link 
                href={route2.href}
                key={route2.href}
                className="text-sm group flex p-1 w-full justify-start font-medium tracking-widest cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition">                
                <div className="flex items-center ml-2 flex-1 text-white">
                <route2.icon className={"h-5 w-5 mr-3 text-white"} />
                {route2.label}
                </div>
                </Link>
            ))}
            </div>

            </div>
        </ScrollArea>
    );
}

export default UserSidebar;