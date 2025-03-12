import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import Profile from "../assets/profile.jpeg";
import { 
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards 
} from "react-icons/hi";

const SideBar = () => {
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="h-screen w-48 bg-gray-100 text-gray-800 shadow-md fixed">
        <Sidebar aria-label="Sidebar with navigation">
          {/* Profile Section */}
          <div className="flex items-center pl-4 py-3 space-x-2">
            <img src={Profile} alt="User Profile" className="w-8 h-8 rounded-full" />
            <h2 className="text-sm font-medium">Flowbite</h2>
          </div>

          <Sidebar.Items>
            {/* Main Navigation */}
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
                <div className="rounded-md p-2 flex items-center space-x-2">
                  <span className="text-sm">Dashboard</span>
                </div>
              </Sidebar.Item>
              <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
                <div className="rounded-md p-2 flex items-center space-x-2">
                  <span className="text-sm">Upload Book</span>
                </div>
              </Sidebar.Item>
              <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
                <div className="rounded-md p-2 flex items-center space-x-2">
                  <span className="text-sm">Manage Books</span>
                </div>
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiUser}>
                <div className="rounded-md p-2 flex items-center space-x-2">
                  <span className="text-sm">Users</span>
                </div>
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiShoppingBag}>
                <div className="rounded-md p-2 flex items-center space-x-2">
                  <span className="text-sm">Products</span>
                </div>
              </Sidebar.Item>
              <Sidebar.Item href="/logout" icon={HiArrowSmRight}>
                <div className="rounded-md p-2 flex items-center space-x-2">
                  <span className="text-sm">Log Out</span>
                </div>
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiTable}>
                <div className="rounded-md p-2 flex items-center space-x-2">
                  <span className="text-sm">Sign Up</span>
                </div>
              </Sidebar.Item>
            </Sidebar.ItemGroup>

            {/* Additional Navigation */}
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiChartPie}>
                <div className="rounded-md p-2 flex items-center space-x-2">
                  <span className="text-sm">Upgrade to Pro</span>
                </div>
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiViewBoards}>
                <div className="rounded-md p-2 flex items-center space-x-2">
                  <span className="text-sm">Documentation</span>
                </div>
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={BiBuoy}>
                <div className="rounded-md p-2 flex items-center space-x-2">
                  <span className="text-sm">Help</span>
                </div>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
};

export default SideBar;