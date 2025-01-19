import { Navbar, TextInput, Button } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path = useLocation().pathname;

  return (
    <header className="border-b-2">
      <Navbar fluid={true} rounded={true} className="px-6 py-4">
        {/* Left Section: Logo */}
        <div className="flex items-center justify-between md:w-auto">
          <Link to="/" className="flex flex-col">
            <h1 className="text-3xl font-bold text-blue-700 tracking-tight">
              TEC TALK
            </h1>
            <h3 className="text-sm font-medium text-gray-500">
              The Technology Is Arrival
            </h3>
          </Link>
        </div>

        {/* Right Section: Search, Theme Toggle, and Sign-In */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <form className="hidden lg:block">
            <div className="relative">
              <TextInput
                type="text"
                placeholder="Search"
                className="w-64 rounded-lg border-gray-300 pl-4 pr-10 focus:ring-2 focus:ring-blue-500"
              />
              <AiOutlineSearch className="absolute top-2/4 right-3 transform -translate-y-2/4 text-gray-500" />
            </div>
          </form>

          <div className="flex gap-2 md:order-2">
            {/* Mobile Search Icon */}
            <Button className="w-10 h-10 lg:hidden " color="gray">
              <AiOutlineSearch className="text-xl" />
            </Button>

            {/* Theme Toggle */}
            <Button
              className="w-10 h-10 hidden sm:flex items-center "
              color="gray"
            >
              <FaMoon className="text-lg " />
            </Button>

            {/* Sign-In Button */}
            <Link to="/sign-in">
              <Button className="text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                Sign In
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Navbar.Toggle />
          </div>

          {/* Mobile Menu Collapse */}
          <Navbar.Collapse>
            <Navbar.Link
              active={path === "/"}
              className="block text-base font-medium"
              as={"div"}
            >
              <Link to="/">Home</Link>
            </Navbar.Link>

            <Navbar.Link
              active={path === "/about"}
              className="block text-base font-medium"
              as={"div"}
            >
              <Link to="/about">About</Link>
            </Navbar.Link>

            <Navbar.Link
              active={path === "/projects"}
              className="block text-base font-medium"
              as={"div"}
            >
              <Link to="/projects">Projects</Link>
            </Navbar.Link>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}
