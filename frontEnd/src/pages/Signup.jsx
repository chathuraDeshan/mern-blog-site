import { Button, TextInput, Label } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Left Section: Logo */}
      <div className="bg-blue-700 text-white flex flex-col justify-center items-center p-10 rounded-lg shadow-lg md:flex-col md:items-center">
        <h1 className="text-6xl font-bold tracking-wider">T</h1>
        <h1 className="text-6xl font-bold tracking-wider mt-2">E</h1>
        <h1 className="text-6xl font-bold tracking-wider mt-2">C</h1>
        <h1 className="text-6xl font-bold tracking-wider mt-2">TALK</h1>
        <h3 className="text-sm font-medium mt-4">The Technology Is Arrival</h3>
      </div>

      {/* Right Section: Sign Up Form */}
      <div className="bg-white p-10 rounded-lg shadow-lg ml-10 w-full max-w-md">
        <form>
          {/* Username Input */}
          <div className="mb-4">
            <Label htmlFor="username" className="mb-2 block">
              Your username
            </Label>
            <TextInput
              id="username"
              type="text"
              placeholder="Enter your username"
                
              
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <Label htmlFor="password" className="mb-2 block">
              Your password
            </Label>
            <TextInput
              id="password"
              type="password"
              placeholder="Enter your password"
              
            />
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <Label htmlFor="email" className="mb-2 block">
              Your email
            </Label>
            <TextInput
              id="email"
              type="email"
              placeholder="Enter your email"
              
            />
          </div>

          {/* Sign Up Button */}
          <div className="mb-4">
            <Button type="submit" className="w-full bg-blue-700 ">
              Sign Up
            </Button>
          </div>

          {/* Continue with Google */}
          <div className="mb-6">
            <Button
              type="button"
              className="w-full bg-gray-300 text-black hover:bg-gray-200 border border-gray-300"
            >
              Continue with Google
            </Button>
          </div>

          {/* Already have an account */}
          <p className="text-sm text-gray-500 text-center">
            Don’t have an account?{" "}
            <Link to="/sign-in" className="text-blue-600 hover:underline">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
