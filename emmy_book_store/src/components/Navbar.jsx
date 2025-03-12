import React, { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";  
import { FaBlog } from "react-icons/fa6"; 
import { FaBarsStaggered, FaXmark } from "react-icons/fa6"; 

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    
    // toggle menu
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen); // Toggle menu properly
    };
    
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) { // Scroll condition
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
    
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll); // Remove event listener properly
      };
    }, []);
    
    // navItems here
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
              <Link className="text-2xl font-bold text-blue-700 flex items-center gap-2" to="/"><FaBlog className="inline-block"/>Books</Link>
              {/* Nav items for large devices */}
              <ul className="md:flex space-x-12 hidden">
                {
                    navItems.map(({link, path}) => (
                      <li key={path}>
                        <Link to={path} className="block text-black text-base uppercase cursor-pointer hover:text-blue-700">{link}</Link>
                      </li>
                    ))
                }
              </ul>
              {/* btn for lg devices */}
              <div className='space-x-12 hidden lg:flex items-center'>
                <button>
                  <FaBarsStaggered className='w-5 hover:text-black' />
                </button>
              </div>

              {/* menu btn for the mobile devices */}
              <div className='md:hidden'>
                <button onClick={toggleMenu} className='text-black'>
                  {isMenuOpen ? (
                    <FaXmark className='h-5 w-5 text-black' />
                  ) : (
                    <FaBarsStaggered className='h-5 w-5 text-black' />
                  )}
                </button>
              </div>
          </div>
          
          {/* nav items for small device */}
          {isMenuOpen && (
            <div className={` bg-blue-700 mt-16 py-7  px-4 space-y-4`}>
              {navItems.map(({ link, path }) => (
                <Link 
                  key={path} 
                  to={path} 
                  className="block text-white text-lg uppercase "
                  onClick={() => setIsMenuOpen(false)} // Close the menu after clicking
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
