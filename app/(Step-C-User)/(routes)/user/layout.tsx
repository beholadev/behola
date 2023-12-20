import UserTopbar from "@/app/(Step-C-User)/(routes)/user/compo/UserTopbar";
import UserSidebar from "@/app/(Step-C-User)/(routes)/user/compo/UserSidebar";

const UserLayout = ({
    children
}:{
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md-inset-y-0 z-[80] bg-gray-900 md:justify-between">
                <UserSidebar />
            </div>
            <main className="md:pl-72">
                <div>
                <UserTopbar />    
                </div>
                <div>{children}</div>
            </main>
        </div>
    );
}

export default UserLayout;