import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
// import profite from "../assets/profile.jpeg";
import { useContext } from "react";
import { AuthContext } from "../contects/AuthProvider";

const SideBar = () => {
  const {user} = useContext(AuthContext)
  console.log(user)
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="h-screen w-48 bg-gray-100 text-gray-800 shadow-md fixed">
        <Sidebar aria-label="Sidebar with contect separator example">
          {/* Profile Section with Image and Text in One Line */}
          <div className="flex items-center pl-4 py-3 space-x-2">
          <img
  src={user?.photoURL
}
  alt="Flowbite Logo" // Changed from imgAlt to alt
  className="w-8 h-8 rounded-full"
/>
            <p className="text-sm font-medium">
              {
                user?.displayName || "Demo user"
              }
            </p>
          </div>

          <Sidebar.Items className="space-y-1">
            {/* Main Navigation */}
            <Sidebar.ItemGroup>
              <Sidebar.Item 
                href="/admin/dashboard" 
                icon={HiChartPie} 
                className=" rounded-md p-2 flex items-center space-x-2"
              >
                <span className="text-sm text-black">Dashboard</span>
              </Sidebar.Item>
              <Sidebar.Item 
                href="/admin/dashboard/upload" 
                icon={HiOutlineCloudUpload} 
                className=" rounded-md p-2 flex items-center space-x-2"
              >
                <span className="text-sm text-black">Upload Book</span>
              </Sidebar.Item>
              <Sidebar.Item 
                href="/admin/dashboard/manage" 
                icon={HiInbox} 
                className="rounded-md p-2 flex items-center space-x-2"
              >
                <span className="text-sm text-black">Manage Books</span>
              </Sidebar.Item>
              <Sidebar.Item 
                href="#" 
                icon={HiUser} 
                className=" rounded-md p-2 flex items-center space-x-2"
              >
                <span className="text-sm text-black">Users</span>
              </Sidebar.Item>
              <Sidebar.Item 
                href="#" 
                icon={HiShoppingBag} 
                className="rounded-md p-2 flex items-center space-x-2"
              >
                <span className="text-sm text-black">Products</span>
              </Sidebar.Item>
              <Sidebar.Item 
                href="/logout" 
                icon={HiArrowSmRight} 
                className=" rounded-md p-2 flex items-center px-[-100] space-x-2"
              >
                <span className="text-sm text-black">Log Out</span>
              </Sidebar.Item>
              <Sidebar.Item 
                href="#" 
                icon={HiTable} 
                className=" rounded-md p-2 flex items-center space-x-2"
              >
                <span className="text-sm text-black">Sign Up</span>
              </Sidebar.Item>
            </Sidebar.ItemGroup>

            {/* Additional Navigation */}
            <Sidebar.ItemGroup>
              <Sidebar.Item 
                href="#" 
                icon={HiChartPie} 
                className=" rounded-md p-2 flex items-center space-x-2"
              >
                <span className="text-sm text-black">Upgrade to Pro</span>
              </Sidebar.Item>
              <Sidebar.Item 
                href="#" 
                icon={HiViewBoards} 
                className=" rounded-md p-2 flex items-center space-x-2"
              >
                <span className="text-sm text-black">Documentation</span>
              </Sidebar.Item>
              <Sidebar.Item 
                href="#" 
                icon={BiBuoy} 
                className=" rounded-md p-2 flex items-center space-x-2"
              >
                <span className="text-sm text-black">Help</span>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
};

export default SideBar