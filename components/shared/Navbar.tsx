"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown, FiUser } from "react-icons/fi";




// Global use for width
// w-[95%] lg:w-[1100px] xl:w-[1200px] 2xl:w-[1700px] mx-auto

interface dropdownItem {
  id: number;
  name: string;
  href: string;
}

interface MenuItem {
  id: number;
  name: string;
  href: string;
  dropdown?: dropdownItem[];
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const menubar: MenuItem[] = [
    { id: 1, name: "Home", href: "/" },
    {
      id: 2,
      name: "Destinations",
      href: "/destinations",
      dropdown: [
        { id: 21, name: "Sundarbans", href: "/destinations/sundarbans" },
        { id: 22, name: "Cox's Bazar", href: "/destinations/coxs-bazar" },
        { id: 23, name: "Sylhet", href: "/destinations/sylhet" },
        { id: 24, name: "Bandarban", href: "/destinations/bandarban" },
        { id: 25, name: "Saint Martin", href: "/destinations/saint-martin" },
        { id: 26, name: "Rangamati", href: "/destinations/rangamati" },
      ],
    },
    {
      id: 3,
      name: "Tour Packages",
      href: "/packages",
      dropdown: [
        { id: 31, name: "Weekend Getaways", href: "/packages/weekend" },
        { id: 32, name: "Adventure Tours", href: "/packages/adventure" },
        { id: 33, name: "Cultural Heritage", href: "/packages/cultural" },
        { id: 34, name: "Beach Holidays", href: "/packages/beach" },
        { id: 35, name: "Hill Station Tours", href: "/packages/hill-station" },
      ],
    },
    {
      id: 4,
      name: "Services",
      href: "/services",
      dropdown: [
        { id: 41, name: "Hotel Booking", href: "/services/hotels" },
        { id: 42, name: "Transport", href: "/services/transport" },
        { id: 43, name: "Tour Guide", href: "/services/guide" },
      ],
    },
    { id: 5, name: "About", href: "/AboutUs" },
    { id: 6, name: "Contact", href: "/contact" },
  ];

  const user = true; // mock user

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
         !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
      if (
        mobileMenuRef.current &&
         !mobileMenuRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
        setMobileDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMobileDropdown = (id: number) => {
    setMobileDropdown(mobileDropdown ===id? null : id);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileDropdown(null);
  };

  return (
    <nav className="fixed w-full mx-auto z-50 bg-black text-white shadow-lg border-b border-gray-800">
      <div className="w-[95%] lg:w-[1100px] xl:w-[1200px] 2xl:w-[1700px]     h-20 mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-3 lg:py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="text-2xl font-bold flex items-center gap-2"
          >
            <h1 className="text-2xl sm:text-3xl text-[#FA6741] font-extrabold">The GoTour</h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div
          className="hidden lg:flex gap-6 font-medium items-center"
          ref={dropdownRef}
        >
          {menubar.map((item) => (
            <div
              key={item.id}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center py-2 hover:text-[#FA6741] transition-colors duration-300 font-semibold text-[15px]"
              >
                {item.name}
                {item.dropdown && <FiChevronDown className="ml-1 text-sm" />}
              </Link>

              {/* Dropdown Menu */}
              {item.dropdown && (
                <div
                  className={`absolute top-full left-0 w-56 bg-white rounded-xl shadow-2xl py-3 transition-all duration-300 z-50 border border-gray-100 ${activeDropdown === item.id
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                    }`}
                >
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.id}
                      href={dropdownItem.href}
                      className="block px-5 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200 border-b border-gray-50 last:border-b-0"
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <Link href="/dashboard">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-[#FA6741] text-white font-semibold rounded-full hover:bg-[#e55a34] transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
                <FiUser className="text-sm" />
                My Account
              </button>
            </Link>
          ) : (
            <>
              <Link href="/signup">
                <button className="cursor-pointer px-6 py-2.5 bg-[#FA6741] rounded-full hover:bg-[#e55a34] transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="p-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-white transition-colors duration-300 border border-gray-700"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar Menu */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
          <Link href="/" onClick={closeMobileMenu}>
            <h1 className="text-2xl text-[#FA6741] font-extrabold">The GoTour</h1>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <FiX size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className="h-full overflow-y-auto pb-24">
          <div className="flex flex-col py-4">
            {menubar.map((item) => (
              <div key={item.id} className="border-b border-gray-100 last:border-b-0">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleMobileDropdown(item.id)}
                      className="flex items-center justify-between w-full py-4 px-6 text-gray-800 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors duration-200 font-semibold text-left"
                    >
                      {item.name}
                      <FiChevronDown
                        className={`text-gray-400 transition-transform duration-200 ${mobileDropdown === item.id ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {mobileDropdown === item.id && (
                      <div className="bg-gray-50 py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.id}
                            href={dropdownItem.href}
                            onClick={closeMobileMenu}
                            className="block py-3 px-10 text-sm text-gray-600 rounded-lg hover:bg-green-100 hover:text-green-600 transition-colors duration-200 border-l-2 border-transparent hover:border-green-500"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="flex items-center py-4 px-6 text-gray-800 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors duration-200 font-semibold"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Buttons */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-200 space-y-3">
            {user ? (
              <Link href="/dashboard" className="block">
                <button
                  onClick={closeMobileMenu}
                  className="w-full py-3.5 px-4 text-center bg-[#FA6741] text-white font-semibold rounded-xl hover:bg-[#e55a34] transition-all duration-300 shadow-lg cursor-pointer"
                >
                  My Account
                </button>
              </Link>
            ) : (
              <>
                <Link href="/signin" className="block">
                  <button
                    onClick={closeMobileMenu}
                    className="w-full py-3.5 px-4 text-center text-gray-700 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
                  >
                    Sign In
                  </button>
                </Link>
                <Link href="/signup" className="block">
                  <button
                    onClick={closeMobileMenu}
                    className="w-full py-3.5 px-4 text-center bg-[#FA6741] text-white font-semibold rounded-xl hover:bg-[#e55a34] transition-all duration-300 shadow-lg"
                  >
                    Create Account
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;