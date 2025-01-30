import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.jpeg';
import {
    FaFacebook, FaTwitter, FaYoutube, FaInstagram
} from 'react-icons/fa';
import { ImGithub } from 'react-icons/im';
import {
    IoIosMail, IoIosCall, IoIosArrowForward
} from "react-icons/io";
import { footerData } from '../../../data';

const iconMap = {
    ImGithub,
    FaTwitter,
    FaFacebook,
    FaInstagram,
    FaYoutube,
    IoIosMail,
    IoIosCall,
    IoIosArrowForward
};

// type IconKey = keyof typeof iconMap;

const Footer = () => {
    return (
        <div className='py-10 md:py-10 px-4 lg:px-8 bg-black text-[#949494]'>
            <div className='max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {/* Logo Section */}
                <div className='flex flex-col gap-7 items-center lg:items-center'>
                    <img className='w-24 rounded-md' src={logo} alt="paymentlogo" />
                    <div className='flex text-lg gap-6'>
                        {footerData.socialLinks.map(({ icon, link }, index) => {
                            const IconComponent = iconMap[icon];
                            return (
                                <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                                    <IconComponent className='hover:text-white duration-300 cursor-pointer' />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Contact Information */}
                <div className='text-center lg:text-left'>
                    <h2 className='text-2xl text-white font-semibold mb-4'>Locate Us</h2>
                    <div className='text-base flex flex-col gap-3'>
                        {footerData.contactInfo.map(({ icon, text }, index) => {
                            const IconComponent = iconMap[icon];
                            return (
                                <p
                                    key={index}
                                    className='hover:text-white flex gap-2 justify-center lg:justify-start items-center cursor-pointer'
                                >
                                    <span><IconComponent /></span>
                                    <span>{text}</span>
                                </p>
                            );
                        })}
                    </div>
                </div>

                {/* Villas Links */}
                <div className='text-center lg:text-left'>
                    <h2 className='text-2xl text-white font-semibold mb-4'>Villas at a glance</h2>
                    <div className='flex flex-col gap-3 text-base'>
                        {footerData.villaLinks.map(({ icon, text, link }, index) => {
                            const IconComponent = iconMap[icon];
                            return (
                                <Link
                                    key={index}
                                    to={link}
                                    className='hover:text-white flex gap-2 justify-center lg:justify-start items-center cursor-pointer'
                                >
                                    <IconComponent />{text}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Google Maps */}
                <div className='flex flex-col items-center lg:items-start'>
                    <iframe
                        src={footerData.mapSrc}
                        loading="lazy"
                        className="w-full h-40"
                    ></iframe>
                </div>
            </div>

            {/* Copyright */}
            <div className='text-base text-slate-300 text-center mt-10'>
                © 2025 The Lonavala Stays All rights reserved | Designed By RateBotAi
            </div>
        </div>
    );
};

export default Footer;