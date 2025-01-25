import { Button, TextInput, Label, Alert, Spinner } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {

  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
  };
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Plese fill out all fields');
    }
    try{
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if(data.success === false) {
        return setErrorMessage(data.message)
      }
      setLoading(false);
      
      if(res.ok) {
        navigate('/sign-in');
      }
    }
    catch(error){
      setErrorMessage(error.message);
      setLoading(false);
    }
  }

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
        <form onSubmit={handleSubmit}>
          {/* Username Input */}
          <div className="mb-4">
            <Label htmlFor="username" className="mb-2 block">
              Your username
            </Label>
            <TextInput
              id="username"
              type="text"
              placeholder="Enter your username"
              onChange={handleChange}
                
              
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
              onChange={handleChange}
              
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
              onChange={handleChange}
              
            />
          </div>

         

          {/* Sign Up Button */}
          <div className="mb-4">
            <Button type="submit" className="w-full bg-blue-700 "
            disabled ={loading}>
              {loading ? (
                <>
                <Spinner/>
                <span>Loading...</span>
                </>
                
                
                ) : 'Sign Up'}
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
          {
        errorMessage && (
          <Alert className="flex items-center mt-2">
            {errorMessage}
          </Alert>
        )
      }
        </form>
      </div>
     
    </div>
  )
}
