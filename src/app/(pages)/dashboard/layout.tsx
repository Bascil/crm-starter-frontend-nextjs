"use client";
import Footer from "@/app/components/dashboard/common/Footer";
import Navbar from "@/app/components/dashboard/common/Navbar";
import Sidebar from "@/app/components/dashboard/common/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const scrollToTop = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="grid grid-cols-6 md:grid-cols-10 gap-0 h-full">
      <div className="col-span-1 md:col-span-1 lg:col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-5 md:col-span-9 lg:col-span-8 h-full">
        <div className="relative">
          <Navbar />
          <div className="overflow-y-auto h-screen flex flex-col">
            <div className="flex-shrink-0 p-5" style={{ marginTop: 72 }}>
              {children}
            </div>
            <Footer onScrollTop={scrollToTop} />
          </div>
        </div>
      </div>
    </div>
  );
}
