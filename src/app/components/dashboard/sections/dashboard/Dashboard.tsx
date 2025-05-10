import Stats from "@/app/components/dashboard/common/Stats";
import {
  UserGroupIcon,
  SwatchIcon,
  UserIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import BarChart from "@/app/components/dashboard/common/Barchart";

function Dashboard() {
  const iconClass = "w-10 h-10 text-gray-400";
  return (
    <div className="flex flex-col space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Stats title="Customers" total="234">
          <UserIcon className={iconClass} />
        </Stats>
        <Stats title="Projects" total="325">
          <SwatchIcon className={iconClass} />
        </Stats>
        <Stats title="Leads" total="621">
          <UserGroupIcon className={iconClass} />
        </Stats>
        <Stats title="Tasks" total="452">
          <DocumentTextIcon className={iconClass} />
        </Stats>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-3 space-y-4">
          <BarChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
