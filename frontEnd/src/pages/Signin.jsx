import { Button, TextInput, Label, Alert, Spinner } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {signInStart,signInSuccess,signInFailure} from '../redux/user/userSlice';
import OAuth from "../components/OAuth";

export default function Signin() {

  const [formData, setFormData] = useState({});
  const {loading, error: errorMessage} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
  };
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    if( !formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill all the fields'));
    }
    try{
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if(data.success === false) {
        dispatch(signInFailure(data.message));
      }
   
      
      if(res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    }
    catch(error){
      dispatch(signInFailure(error.message));
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
                
                
                ) : 'Sign In'}
            </Button>
          </div>

          {/* Continue with Google */}
          <OAuth/>

          {/* Already have an account */}
          <p className="text-sm text-gray-500 text-center">
            Don’t have an account?{" "}
            <Link to="/sign-up" className="text-blue-600 hover:underline">
              Sign Up
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
