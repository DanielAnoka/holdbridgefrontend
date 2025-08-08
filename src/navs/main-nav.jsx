import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Search,
  Moon,
  Sun,
  Bell,
  Home,
  ShoppingCart,
  Wallet,
  Repeat,
  HelpCircle,
  LifeBuoy,
  Settings,
  DollarSign,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const MainNav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };


  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <header className="w-full bg-[#0C0C1E] text-white border-b border-white/10 relative z-40">
      {!showMobileSearch && (
        <div className="max-w-screen-2xl mx-auto px-6 py-4 flex items-center justify-between transition-all duration-300">
          {/* Left Section */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu size={20} />
            </button>

            <a href="/dashboard" className="flex items-center gap-2 font-bold">
              <img
                src="/logo.png"
                alt="HoldBridge"
                className="w-[36px] h-[36px] object-contain"
              />
              <span className="hidden sm:inline-block text-white text-lg font-semibold">
                HoldBridge
              </span>
            </a>

            <nav className="hidden md:flex items-center space-x-4 text-sm font-medium text-white/80">
              <Link to="/dashboard" className="hover:text-white">Dashboard</Link>
              <Link to="/marketplace" className="hover:text-white">Marketplace</Link>
              <Link to="/finance" className="hover:text-white">Finance</Link>
              <Link to="/p2p" className="hover:text-white">P2P</Link>
            </nav>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block relative">
              <Search
                size={16}
                className="absolute top-1/2 left-3 -translate-y-1/2 text-white/50"
              />
              <input
                type="text"
                placeholder="Search"
                className="bg-[#111827] border border-white/10 text-sm text-white placeholder:text-white/50 rounded-md pl-9 pr-3 py-1.5 w-64 focus:outline-none"
              />
            </div>

            <button
              className="md:hidden p-2 rounded-full hover:bg-white/10"
              onClick={() => setShowMobileSearch(true)}
            >
              <Search size={18} />
            </button>

            <button
              className="hidden md:block p-2 rounded-full hover:bg-white/10"
              onClick={toggleTheme}
              title="Toggle Theme"
            >
              {isDark ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <button className="p-2 rounded-full hover:bg-white/10">
              <Bell size={18} />
            </button>

            <div className="w-8 h-8 bg-white/30 rounded-full" />
          </div>
        </div>
      )}

      {/* Mobile Search Bar */}
      {showMobileSearch && (
        <div className="md:hidden w-full px-4 py-4 flex items-center bg-[#0C0C1E] border-b border-white/10 transition-all duration-300">
          <button onClick={() => setShowMobileSearch(false)} className="mr-3">
            <X size={24} className="text-white" />
          </button>

          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute top-1/2 left-3 -translate-y-1/2 text-white/50"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-[#111827] border border-white/10 text-sm text-white placeholder:text-white/50 rounded-md pl-9 pr-3 py-2 focus:outline-none"
            />
          </div>
        </div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 flex transition-opacity duration-300 ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      >
        <div
          className={`w-[260px] bg-[#0C0C1E] h-full p-6 flex flex-col justify-between transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <a href="/dashboard" className="flex items-center gap-2 font-bold">
                <img
                  src="/logo.png"
                  alt="HoldBridge"
                  className="w-[36px] h-[36px] object-contain"
                />
                <span className="text-white text-lg font-semibold">HoldBridge</span>
              </a>
              <button onClick={() => setSidebarOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Links */}
            <nav className="space-y-4 text-white/80 text-sm">
              <Link to="/dashboard" className="flex items-center gap-2 hover:text-white">
                <Home size={16} /> Dashboard
              </Link>
              <Link to="/marketplace" className="flex items-center gap-2 hover:text-white">
                <ShoppingCart size={16} /> Marketplace
              </Link>
              <Link to="/finance" className="flex items-center gap-2 hover:text-white">
                <Wallet size={16} /> Finance
              </Link>
              <Link to="/p2p" className="flex items-center gap-2 hover:text-white">
                <Repeat size={16} /> P2P
              </Link>

              <hr className="my-4 border-white/10" />

              <a href="#" className="flex items-center gap-2 hover:text-white">
                <HelpCircle size={16} /> FAQ
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-white">
                <LifeBuoy size={16} /> Support
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-white">
                <Settings size={16} /> Troubleshooting
              </a>

              <hr className="my-4 border-white/10" />

              {/* Linked Theme Toggle */}
              <div className="flex items-center justify-between">
                <button
                  className="flex items-center gap-2 hover:text-white"
                  onClick={toggleTheme}
                >
                  {isDark ? <Moon size={16} /> : <Sun size={16} />} Dark Mode
                </button>
                <div
                  className={`w-10 h-5 rounded-full cursor-pointer flex items-center p-1 transition-all duration-300 ${isDark ? "bg-white/80" : "bg-white/20"
                    }`}
                  onClick={toggleTheme}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isDark ? "translate-x-5" : "translate-x-0"
                      }`}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <DollarSign size={16} /> Currency (USD)
              </div>
            </nav>
          </div>
        </div>

        {/* Click-outside */}
        <div className="flex-1 bg-black/50" onClick={() => setSidebarOpen(false)} />
      </div>
    </header>
  );
};

export default MainNav;
