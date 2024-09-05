import Nav from "./Nav";
import Service from "./Service";
import SidebarNav from "./SidebarNav";

function ServicesLayout() {
  return (
    <div className="bg-[#f5f6fa]  min-h-screen">

      <div className="flex">
        {/* Sidebar */}

        <SidebarNav />
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Navigation Bar */}
          <Nav />

          {/* Service Component */}
          <div className="flex-grow">
            <Service />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesLayout;
