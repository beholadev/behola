import AdminSidebar from "./compo/AdminSidebar";

const Admin = () => {
    return (
        <div className="h-full relative">
        <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md-inset-y-0 z-[80] bg-gray-900 md:justify-between">
         <AdminSidebar />
        </div>
        <div  className="md:pl-72">
            
        </div>
        </div>
    );
}

export default Admin;