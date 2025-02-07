import { Link, useNavigate } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // Importing icons for menu
import { useEffect, useState } from 'react';
import './navbar.css'
import { IoIosMail } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { navbarData } from '../../../data';
import { propertyData } from '../../../data';

const Navbar = () => {
    const navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleNavigate = (property: any) => {
        navigate(`/property_details/${property?.id}`, { state: { property } })
    }

    console.log(propertyData);

    useEffect(() => {
        // scroll effect for changing navbar  background  color
        const onLoadfunction = () => {
            const navbar = document.getElementById('navbar_container');
            const navlinks = document.getElementById('navlinks');
            if (navbar && navlinks) {
                if (window.scrollY > 20) {
                    navbar.classList.add('bg-black', 'border-b-1', 'border-bg-primary');
                    navbar.classList.remove('bg-transparent', 'border-transparent');
                    navlinks.classList.add('text-white');
                    navlinks.classList.remove('text-black');
                } else {
                    navbar.classList.add('bg-transparent', 'border-transparent');
                    navbar.classList.remove('bg-black', 'border-b-1', 'border-bg-primary');
                    navlinks.classList.add('text-black');
                    navlinks.classList.remove('text-white');
                }
            }
        }

        window.addEventListener('scroll', onLoadfunction)

        onLoadfunction();

        return () => {
            window.removeEventListener('scroll', onLoadfunction);
        };

    }, [])


    return (
        <>
            <section className=''>
                <section className='navbar-container w-full h-fit  fixed top-0 z-50'>
                    {/* Email and Phone  */}
                    <div className='flex justify-center bg-Bg_secondary items-center gap-4  p-4'>
                        <div className='flex items-center gap-2 font-semibold md:font-medium'>
                            <span className='text-base md:text-2xl'><IoIosMail /></span>
                            <span className='text-sm md:text-xl'>Lonavalastays@gmail.com</span>
                        </div>
                        <span className='text-slate-400 text-xl'>{'|'}</span>
                        <div className='flex items-center gap-2 font-semibold md:font-medium'>
                            <span className='text-base md:text-xl'><IoIosCall /></span>
                            <span className='text-sm md:text-xl'>9394607407</span>
                        </div>
                    </div>
                    {/* Main Nav  */}
                    <div id='navbar_container' className='bg-transparent transition-all duration-300 border-b border-transparent w-full h-full flex items-center justify-between px-4 py-3 md:px-12'>
                        {/* Menu Toggle Button (for mobile) */}
                        <button className='md:hidden text-primary text-2xl' onClick={toggleMenu}>
                            {isMenuOpen ? <HiX /> : <HiMenuAlt3 />} {/* X for closing, Menu icon for opening */}
                        </button>
                        {/* Logo  */}
                        <div className=''>
                            <Link to='/'>
                                <img className='w-16 h-16 rounded-full' src={navbarData.logo[0].image} alt="Logo" />
                            </Link>
                        </div>
                        {/* Nav Links (Desktop) */}
                        <div id='navlinks' className='hidden md:flex  items-center gap-4 text-black md:gap-8'>
                            <ul className='flex items-center gap-4 md:gap-8'>
                                {navbarData?.navmenu?.map((item: any) => {
                                    return (
                                        <div key={item.id} className="relative">
                                            {item.title === "Villas" ? (
                                                <div className="relative group flex flex-col items-start gap-2">
                                                    <li key={item.id}>
                                                        <Link
                                                            onClick={closeMenu}
                                                            to={item.link}
                                                            className="hover:text-primary after-effect text-sm md:text-xl font-bold cursor-pointer"
                                                        >
                                                            {item.title}
                                                        </Link>
                                                        {/* Dropdown appears on hover */}
                                                        <div className="absolute top-full left-0 hidden group-hover:block bg-white border shadow-md rounded-md min-w-[200px] z-10 transition-all duration-300">
                                                            <ul className="py-2">
                                                                {propertyData?.map((property: any, index: any) => (
                                                                    <li key={index} className="px-4 py-2 hover:bg-gray-100">
                                                                        <div
                                                                            onClick={() => handleNavigate(property)}
                                                                            className="block text-black">
                                                                            {property.property_name}
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </div>
                                            ) : (
                                                <li key={item.id}>
                                                    <Link
                                                        onClick={closeMenu}
                                                        to={item.link}
                                                        className="hover:text-primary after-effect text-sm md:text-xl font-bold cursor-pointer"
                                                    >
                                                        {item.title}
                                                    </Link>
                                                </li>
                                            )}
                                        </div>
                                    );
                                })}

                            </ul>
                        </div>
                        {/* BookNow Btn */}
                        <button className='hidden md:block px-4 py-2 text-sm md:text-base bg-primary text-white font-bold rounded-md duration-200 hover:bg-opacity-80'>
                            Book Now
                        </button>
                    </div >

                    {/* Mobile Menu */}
                    {
                        isMenuOpen && (
                            <div className='md:hidden bg-Bg_secondary w-full absolute top-40 left-0 z-50'>
                                <ul className='flex flex-col items-start gap-4 p-4'>
                                    {navbarData?.navmenu?.map((item: any) => (
                                        <li key={item.id}>
                                            <Link onClick={closeMenu} to={item.link} className='after-effect text-sm md:text-xl font-bold cursor-pointer'>
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    }
                </section >
            </section >
        </>
    );
};

export default Navbar;