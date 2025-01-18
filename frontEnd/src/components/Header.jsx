import {Navbar, TextInput, Button} from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'


export default function Header() {
  const path = useLocation().pathname;

  return (
    <Navbar className='border-b-2'>
      <Link to="/" className='self-center '>
      <h1 className='text-lg self-center font-bold' >TEC TALK</h1> 
      <h3>The Technology Is Arrival </h3>
      </Link>

      <form>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch} 
          className='hidden lg:inline' 
        
        />

      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray'>
        <AiOutlineSearch/>
      </Button>

      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='gray'>
          <FaMoon/>
        </Button>

        <Link to='/sign-in'>
          <Button>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle/>
        </div>


      <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as= {'div'}>
            <Link to='/'>
              Home
            </Link>
          </Navbar.Link>

          <Navbar.Link active={path === "/about"} as= {'div'}>
            <Link to='/about'>
              About
            </Link>
          </Navbar.Link>

          <Navbar.Link active={path === "/projects"} as= {'div'}>
            <Link to='/projects'>
              Projects
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
    
  )
}
