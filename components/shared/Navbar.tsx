"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown, FiUser } from "react-icons/fi";

interface DropdownItem {
  id: number;
  name: string;
  href: string;
}

interface MenuItem {
  id: number;
  name: string;
  href: string;
  dropdown?: DropdownItem[];
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

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
    { id: 5, name: "About", href: "/about" },
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
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-100">
      <div className="w-[95%] mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="text-2xl font-bold flex items-center gap-2"
          >
            The GO Tour
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
                className="flex items-center py-2 text-gray-800 hover:text-green-600 transition-colors duration-300 font-semibold text-[15px]"
              >
                {item.name}
                {item.dropdown && <FiChevronDown className="ml-1 text-sm" />}
              </Link>

              {/* Dropdown Menu */}
              {item.dropdown && (
                <div
                  className={`absolute top-full left-0 w-56 bg-white rounded-xl shadow-2xl py-3 transition-all duration-300 z-50 border border-gray-100 ${
                    activeDropdown === item.id
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
              <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
                <FiUser className="text-sm" />
                My Account
              </button>
            </Link>
          ) : (
            <>
              <Link href="/signin">
                <button className="cursor-pointer px-5 py-2.5 text-gray-700 font-semibold hover:text-green-600 transition-colors duration-300">
                  Sign In
                </button>
              </Link>
              <Link href="/signup">
                <button className="cursor-pointer px-6 py-2.5 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-full hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Get Started
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
            className="p-3 rounded-xl bg-gray-50 hover:bg-green-50 text-gray-700 transition-colors duration-300 border border-gray-200"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden bg-white overflow-hidden transition-all duration-500 ease-in-out border-t border-gray-100 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4 font-medium">
          {menubar.map((item) => (
            <div key={item.id} className="border-b border-gray-100 last:border-b-0">
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-4 px-3 text-gray-800 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors duration-200 font-semibold"
              >
                {item.name}
                {item.dropdown && <FiChevronDown className="text-gray-400" />}
              </Link>

              {item.dropdown && (
                <div className="pl-5 mb-2 space-y-1 bg-gray-50 rounded-lg py-2">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.id}
                      href={dropdownItem.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 px-3 text-sm text-gray-600 rounded-lg hover:bg-green-100 hover:text-green-600 transition-colors duration-200 border-l-2 border-transparent hover:border-green-500"
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Buttons */}
          <div className="mt-6 pt-4 border-t border-gray-200 space-y-3">
            {user ? (
              <Link href="/dashboard" className="block">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3.5 px-4 text-center bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg cursor-pointer"
                >
                  My Account
                </button>
              </Link>
            ) : (
              <>
                <Link href="/signin" className="block">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full py-3.5 px-4 text-center text-gray-700 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
                  >
                    Sign In
                  </button>
                </Link>
                <Link href="/signup" className="block">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full py-3.5 px-4 text-center bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-lg"
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