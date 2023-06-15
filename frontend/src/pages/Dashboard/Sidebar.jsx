import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
  );

  const ticketLinks = [
    "All Tickets",
    "Priority",
    "Unresponded",
    "Pending",
    "Open",
    "Closed",
    "Todays",
  ];
  const statuses = ["New", "Open", "On Hold", "Resolved", "Closed"];
  const categories = [
    "General",
    "Technical",
    "Finance and Billing",
    "HR",
    "Sales & Marketing",
    "Customer Service",
  ];

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-neutral bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-full overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-base-200 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden hover:opacity-50"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
        </div>

        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                Pages
              </span>
            </h3>
            <ul className="mt-3 flex flex-col">
              {ticketLinks.map((link, index) => (
                <li
                  className="px-3 py-2 rounded-sm mb-0.5 last:mb-0"
                  key={index}
                >
                  <NavLink
                    end
                    to="#"
                    className="block truncate transition duration-150"
                  >
                    <div className="flex items-center">
                      <span className="text-sm font-medium ms-3 duration-200 opacity-50 hover:opacity-100">
                        {link}
                      </span>
                    </div>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                Statuses
              </span>
            </h3>
            <ul className="mt-3 flex flex-col">
              {statuses.map((link, index) => (
                <li
                  className="px-3 py-2 rounded-sm mb-0.5 last:mb-0"
                  key={index}
                >
                  <NavLink
                    end
                    to="#"
                    className="block truncate transition duration-150"
                  >
                    <div className="flex items-center">
                      <span className="text-sm font-medium ms-3 duration-200 opacity-50 hover:opacity-100">
                        {link}
                      </span>
                    </div>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                Categories
              </span>
            </h3>
            <ul className="mt-3 flex flex-col">
              {categories.map((link, index) => (
                <li
                  className="px-3 py-2 rounded-sm mb-0.5 last:mb-0"
                  key={index}
                >
                  <NavLink
                    end
                    to="#"
                    className="block truncate transition duration-150"
                  >
                    <div className="flex items-center">
                      <span className="text-sm font-medium ms-3 duration-200 opacity-50 hover:opacity-100">
                        {link}
                      </span>
                    </div>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
