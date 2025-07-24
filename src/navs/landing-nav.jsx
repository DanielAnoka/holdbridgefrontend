import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import ComingSoonModal from "../app/404";
import Button from "../components/ui/button";

const navItems = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
];

const LandingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleComingSoon = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      <header className="w-full bg-nav text-white z-50 relative">
        <div className="flex items-center justify-between px-4 py-3 gap-4 md:px-10">
          <div className="flex items-center gap-7">
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-1 rounded hover:bg-white/10"
            >
              <Menu size={22} />
            </button>

            <a href="/" className="flex items-center gap-2 font-bold">
              <img
                src="/logo.png"
                alt="HoldBridge"
                className="w-[36px] h-[36px] object-contain"
              />
              <span className="hidden sm:inline-block text-white text-lg font-semibold">
                HoldBridge
              </span>
            </a>

            <nav className="hidden md:flex items-start gap-6 text-sm text-white/80">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-primary dark:hover:text-white transition"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="secondary" href="/login" onClick={handleComingSoon}>
              Sign in
            </Button>
            <Button variant="primary" href="/register" onClick={handleComingSoon}>
              Sign up
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="fixed inset-0 z-40 md:hidden flex">
            <aside className="bg-[#0F0F0F] w-[260px] h-full p-6 relative shadow-2xl">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 p-1 rounded hover:bg-white/10"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-2 mb-6 font-bold text-cyan-600 text-lg">
                <img
                  src="/logo.png"
                  alt="HoldBridge"
                  className="h-6 w-6 object-contain"
                />
                HoldBridge
              </div>

              <h3 className="text-xs font-semibold uppercase text-white/40 mb-3">
                Shortcuts
              </h3>
              <nav className="flex flex-col gap-3 text-sm text-white/80">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="hover:text-white transition"
                     onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-6 flex flex-col gap-3">
                <Button
                  href="/login"
                  onClick={handleComingSoon}
                  variant="secondary"
                  className="text-sm"
                >
                  Sign In
                </Button>

                <Button
                  href="/register"
                  onClick={handleComingSoon}
                  variant="primary"
                  className="text-sm"
                >
                  Sign Up
                </Button>
              </div>
            </aside>

            <div
              className="flex-1 bg-black/50"
              onClick={() => setIsOpen(false)}
            />
          </div>
        )}
      </header>

      {showModal && <ComingSoonModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default LandingNav;
