import React, { useState, useEffect, useContext } from "react"; 
import { Link } from "react-router-dom";  
import { FaBlog, FaBarsStaggered, FaXmark } from "react-icons/fa6"; 
import { AuthContext } from "../contects/AuthProvider";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const { user } = useContext(AuthContext);
    console.log(user)
    // toggle menu
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    
    useEffect(() => {
      const handleScroll = () => {
        setIsSticky(window.scrollY > 100);
      };
    
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    // navItems
    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Shop", path: "/shop" },
        { link: "Sell Your Book", path: "/admin/dashboard" },
        { link: "Blog", path: "/blog" },
    ];
   
    return (
     <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 z-10">
      <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300":""}`}>
          <div className="flex justify-between items-center text-base gap-8">
              {/* Logo */}
              <Link className="text-2xl font-bold text-blue-700 flex items-center gap-2" to="/">
                <FaBlog className="inline-block"/>Books
              </Link>

              {/* Nav items for large devices */}
              <ul className="md:flex space-x-12 hidden">
                {navItems.map(({link, path}) => (
                  <li key={path}>
                    <Link to={path} className="block text-black text-base uppercase cursor-pointer hover:text-blue-700">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* User Email and Menu Icon for Large Screens */}
              <div className='space-x-6 hidden lg:flex items-center'>
                <button>
                  <FaBarsStaggered className='w-5 hover:text-black' />
                </button>
             
              </div>

              {/* Mobile Menu Button */}
              <div className='md:hidden flex items-center'>
                <button onClick={toggleMenu} className='text-black'>
                  {isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered className='h-5 w-5 text-black' />}
                </button>
               
              </div>
          </div>
          
          {/* Nav items for small screens */}
          {isMenuOpen && (
            <div className={`bg-blue-700 mt-16 py-7 px-4 space-y-4`}>
              {navItems.map(({ link, path }) => (
                <Link 
                  key={path} 
                  to={path} 
                  className="block text-white text-lg uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link}
                </Link>
              ))}
            </div>
          )}
      </nav>
     </header>
    );
};

export default Navbar;
