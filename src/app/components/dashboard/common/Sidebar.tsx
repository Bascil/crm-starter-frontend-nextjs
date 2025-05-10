import {
  HomeIcon,
  DocumentTextIcon,
  CogIcon,
  TableCellsIcon,
  CpuChipIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

function SideMenu() {
  const pathname = usePathname();
  const iconClass = "w-7 h-7";

  return (
    <div className="bg-gray-800 h-screen">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-gray-900">
        <CpuChipIcon className="w-10 h-10 text-indigo-500" />
        <h2 className="text-white text-xl font-semibold ml-3">CRM</h2>
      </div>

      {/* Navigation */}
      <nav className="mt-4 space-y-2 px-3">
        <Link
          href="/dashboard"
          className={`p-3 flex items-center space-x-3 rounded-md ${
            pathname === "/dashboard"
              ? "bg-gray-900 text-white"
              : "text-gray-400 hover:bg-gray-700 hover:text-white"
          }`}
        >
          <HomeIcon className={iconClass} />
          <span>Dashboard</span>
        </Link>

        <Link
          href="/dashboard/users"
          className={`p-3 flex items-center space-x-3 rounded-md ${
            pathname === "dashboard/users"
              ? "bg-gray-900 text-white"
              : "text-gray-400 hover:bg-gray-700 hover:text-white"
          }`}
        >
          <UserIcon className={iconClass} />
          <span>Users</span>
        </Link>

        <Link
          href="/dashboard/tasks"
          className={`p-3 flex items-center space-x-3 rounded-md ${
            pathname === "/dashboard/tasks"
              ? "bg-gray-900 text-white"
              : "text-gray-400 hover:bg-gray-700 hover:text-white"
          }`}
        >
          <DocumentTextIcon className={iconClass} />
          <span>Tasks</span>
        </Link>

        <div className="border-b border-gray-900 my-4"></div>

        <Link
          href="/dashboard/profile"
          className={`p-3 flex items-center space-x-3 rounded-md ${
            pathname === "/dashboard/profile"
              ? "bg-gray-900 text-white"
              : "text-gray-400 hover:bg-gray-700 hover:text-white"
          }`}
        >
          <CogIcon className={iconClass} />
          <span>Profile</span>
        </Link>
      </nav>
    </div>
  );
}

export default SideMenu;
