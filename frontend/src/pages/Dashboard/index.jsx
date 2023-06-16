import React, { useState } from "react";

import Sidebar from "./Sidebar.jsx";
import MiniBar from "./Minibar.jsx";
import Header from "./Header.jsx";

import Content from "./Content.jsx";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex overflow-hidden">
        <MiniBar />
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="w-full px-4">
          <Content />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
