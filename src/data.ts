import logo from "../src/assets/logo.jpeg";

import img1 from './assets/HomePage_banner1.jpg'
import img2 from './assets/HomePage_banner1.jpg'
import img3 from './assets/HomePage_banner1.jpg'

// All Properties Data
export const propertyData = [
    {
        id: 1,
        property_name: "Rhythm Villa",
        property_description: "Rhythm Villa is a beautiful property located in the heart of Lonavala. The property is surrounded by lush greenery and offers a serene environment for a relaxing stay. The property is equipped with modern amenities and offers a comfortable stay for guests. The property is ideal for families, couples, and groups looking for a peaceful getaway in Lonavala. The property is located close to the market area and offers easy access to popular tourist spots in Lonavala. The property is ideal for guests looking for a comfortable stay in Lonavala.",
        property_location: "Malavali, Lonavala",
        property_img: [img1, img2, img3],
        property_amenities: [
            {
                amenities_type: "Bedrooms",
                amenities_count: 6,
                amenities_icon: "bed", // Changed to string identifier instead of React element
            },
            {
                amenities_type: "Washrooms",
                amenities_count: 6,
                amenities_icon: "shower",
            },
            {
                amenities_type: "Pools",
                amenities_availablity: 'available',
                amenities_icon: "pool",
            },
            {
                amenities_type: "Parking",
                amenities_count: 5,
                amenities_icon: "car",
            }
        ],
        property_features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
        status: "Available",
        property_details: [
            {
                type: "Bedrooms",
                value: "6"
            },
            {
                type: "Property_Size",
                value: "5000 sqft"
            },
            {
                type: "parking",
                value: "Pawna Lake, Lonavala"
            },
            {
                type: "Private_Swimming_Pool",
                value: "Available"
            }
        ],
        property_aditional_details: [
            {
                type: "smoking",
                value: "Not Allowed"
            },
            {
                type: "Drinking ",
                value: "Not Allowed"
            },
        ],
        property_address: [
            {
                type: "Place",
                value: "Lonavala"
            },
            {
                type: "City",
                value: "Pune"
            },
            {
                type: "Area",
                value: "Pawna Lake"
            },
            {
                type: "State",
                value: "Maharashtra"
            },
            {
                type: "Postal Code",
                value: "410401"
            },
            {
                type: "Country",
                value: "India"
            }
        ]
    },
    {
        id: 2,
        property_name: "Anjum Villa",
        property_description: "Anjum Villa is a luxurious property located in the scenic Lonavala. The villa offers an intimate retreat with modern amenities and a tranquil atmosphere, making it perfect for families, groups, or couples.",
        property_location: "Jevrewadi Village, Lonavala .",
        property_img: [img1, img2, img3],
        property_amenities: [
            {
                amenities_type: "Bedrooms",
                amenities_count: 5,
                amenities_icon: "bed", // Changed to string identifier instead of React element
            },
            {
                amenities_type: "Washrooms",
                amenities_count: 5,
                amenities_icon: "shower",
            },
            {
                amenities_type: "Pools",
                amenities_availablity: 'available',
                amenities_icon: "pool",
            },
            {
                amenities_type: "Parking",
                amenities_count: 5,
                amenities_icon: "car",
            }
        ],
        property_features: ["Feature A", "Feature B", "Feature C", "Feature D", "Feature E"],
        status: "Available",
        property_details: [
            {
                type: "Bedrooms",
                value: "4"
            },
            {
                type: "Property_Size",
                value: "4500 sqft"
            },
            {
                type: "parking",
                value: "Near Sunset Point, Lonavala"
            },
            {
                type: "Private_Swimming_Pool",
                value: "Available"
            }
        ],
        property_aditional_details: [
            {
                type: "smoking",
                value: "Not Allowed"
            },
            {
                type: "Drinking ",
                value: "Not Allowed"
            },
        ],
        property_address: [
            {
                type: "Place",
                value: "Lonavala"
            },
            {
                type: "City",
                value: "Pune"
            },
            {
                type: "Area",
                value: "Malshej Ghat"
            },
            {
                type: "State",
                value: "Maharashtra"
            },
            {
                type: "Postal Code",
                value: "410405"
            },
            {
                type: "Country",
                value: "India"
            }
        ]

    },
    {
        id: 3,
        property_name: "Serene Escape Villa",
        property_description: "Serene Escape Villa is a luxurious villa offering the perfect escape from the hustle and bustle of city life. Surrounded by nature, it provides a peaceful and private atmosphere for guests.",
        property_location: "Malshej Ghat, Lonavala",
        property_img: [img1, img2, img3],
        property_amenities: [
            {
                amenities_type: "Bedrooms",
                amenities_count: 5,
                amenities_icon: "bed", // Changed to string identifier instead of React element
            },
            {
                amenities_type: "Washrooms",
                amenities_count: 5,
                amenities_icon: "shower",
            },
            {
                amenities_type: "Pools",
                amenities_availablity: 'available',
                amenities_icon: "pool",
            },
            {
                amenities_type: "Parking",
                amenities_count: 5,
                amenities_icon: "car",
            }
        ],
        property_features: ["Feature X", "Feature Y", "Feature Z", "Feature W", "Feature V"],
        status: "Available",
        property_details: [
            {
                type: "Bedrooms",
                value: "6"
            },
            {
                type: "Property_Size",
                value: "6000 sqft"
            },
            {
                type: "parking",
                value: "Malshej Ghat, Lonavala"
            },
            {
                type: "Private_Swimming_Pool",
                value: "Available"
            }
        ],
        property_aditional_details: [
            {
                type: "smoking",
                value: "Not Allowed"
            },
            {
                type: "Drinking ",
                value: "Not Allowed"
            },
        ],
        property_address: [
            {
                type: "Place",
                value: "Lonavala"
            },
            {
                type: "City",
                value: "Pune"
            },
            {
                type: "Area",
                value: "Sunset Point"
            },
            {
                type: "State",
                value: "Maharashtra"
            },
            {
                type: "Postal Code",
                value: "410401"
            },
            {
                type: "Country",
                value: "India"
            }
        ]

    },
];

console.log(propertyData[0].property_name)


export const navbarData = {
    details: [
        {
            id: 1,
            icon: 'IoIosMail',
            data: 'SSGRANDSIRCILLA@gmail.com'
        },
        {
            id: 2,
            icon: 'IoIosCall',
            data: '9394607407'
        },
    ],
    logo: [
        {
            id: 1,
            image: logo, // Replace with the actual logo image path
            alt: "Company Logo"
        }
    ],
    navmenu: [
        {
            id: 1,
            title: "Home",
            link: "/",
            submenu: []
        },
        {
            id: 2,
            title: "About",
            link: "/about",
            submenu: []
        },
        {
            id: 3,
            title: "Villas",
            link: "/villas",
            submenu: [propertyData[0].property_name , propertyData[1].property_name, propertyData[2].property_name]
        },
        {
            id: 4,
            title: "Contact",
            link: "/contact",
            submenu: []
        },

    ],
    button: [
        {
            id: 1,
            type: "primary",
            text: "Login"
        }

    ]
};


import {
    FaFacebook, FaTwitter, FaInstagram, FaYoutube
} from 'react-icons/fa';
import { ImGithub } from 'react-icons/im';
import { IoIosMail, IoIosCall, IoIosArrowForward } from 'react-icons/io';
// import ExclusiveService_Card from "./components/homepage_components/homepage_exclusiveservice/ExclusiveService_Card";

// Define icon keys as a union type
export type IconKey =
    | 'FaFacebook'
    | 'FaTwitter'
    | 'FaInstagram'
    | 'FaYoutube'
    | 'ImGithub'
    | 'IoIosMail'
    | 'IoIosCall'
    | 'IoIosArrowForward';

// Icon mapping interface
export interface IconMapping {
    [key: string]: React.ComponentType<{ className?: string }>;
}

// Social Links Interface
export interface SocialLink {
    icon: IconKey;
    link: string;
}

// Contact Info Interface
export interface ContactInfo {
    icon: IconKey;
    text: string;
}

// Villa Links Interface
export interface VillaLink {
    icon: IconKey;
    text: string;
    link: string;
}

// Footer Data Interface
export interface FooterDataInterface {
    socialLinks: SocialLink[];
    contactInfo: ContactInfo[];
    villaLinks: VillaLink[];
    mapSrc: string;
}

// Icon Mapping
export const iconMap: IconMapping = {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    ImGithub,
    IoIosMail,
    IoIosCall,
    IoIosArrowForward
};

export const footerData: FooterDataInterface = {
    socialLinks: [
        { icon: 'FaFacebook', link: 'https://facebook.com' },
        { icon: 'FaTwitter', link: 'https://twitter.com' },
        { icon: 'FaInstagram', link: 'https://instagram.com' },
        { icon: 'FaYoutube', link: 'https://youtube.com' },
        { icon: 'ImGithub', link: 'https://github.com' },
    ],
    contactInfo: [
        { icon: 'IoIosMail', text: 'SSGRANDSIRCILLA@gmail.com' },
        { icon: 'IoIosCall', text: '+91 9394607407' },
    ],
    villaLinks: [
        { icon: 'IoIosArrowForward', text: 'RHYTHM VILLA', link: '/' },
        { icon: 'IoIosArrowForward', text: 'ANJUM VILLA', link: '/' },
    ],
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.9509296179685!2d73.40650077471328!3d18.755728761949747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8017bf29288b7%3A0xb3e6b7d75f3d2473!2sBest%20Villa%20In%20Lonavala!5e0!3m2!1sen!2sin!4v1737640678147!5m2!1sen!2sin'
};


// Property  Data object

// {
//     id: 1,
//     property_name: "Sunset By Aashiyaanaa",
//     property_description: " Aashiyaanaa Villa is a beautiful property located in the heart of Lonavala. The property is surrounded by lush greenery and offers a serene environment for a relaxing stay. The property is equipped with modern amenities and offers a comfortable stay for guests. The property is ideal for families, couples, and groups looking for a peaceful getaway in Lonavala. The property is located close to the market area and offers easy access to popular tourist spots in Lonavala. The property is ideal for guests looking for a comfortable stay in Lonavala.",
//     property_location: "Pawna Lake, Lonavala",
//     property_img: ["path_to_image_1.jpg", "path_to_image_2.jpg", "path_to_image_3.jpg"],
//     property_amenities: [
//         {
//             amenities_type: "Bedrooms",
//             amenities_count: 5,
//             amenities_icon: <FaBed />,
//         },
//         {
//             amenities_type: "Washrooms",
//             amenities_count: 5,
//             amenities_icon: <FaShower />,
//         },
//         {
//             amenities_type: "Pools",
//             amenities_availablity: 'available',
//             amenities_icon: <FaSwimmingPool />,
//         },
//         {
//             amenities_type: "Parking",
//             amenities_count: 5,
//             amenities_icon: <FaCar />,
//         }
//     ],
//     property_features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
//     status: "Available",
//     property_details: [
//         {
//             type: "Bedrooms",
//             value: "6"
//         },
//         {
//             type: "Property_Size",
//             value: "5000 sqft"
//         },
//         {
//             type: "parking",
//             value: "Pawna Lake, Lonavala"
//         },
//         {
//             type: "Private_Swimming_Pool",
//             value: "Available"
//         }
//     ],
//     property_aditional_details: [
//         {
//             type: "Bedrooms",
//             value: "6"
//         },
//         {
//             type: "Property_Size",
//             value: "5000 sqft"
//         },
//     ],
//     property_address: {
//         place: "Lonavala",
//         city: "Pune",
//         Area: "Pawna Lake",
//         state: "Maharashtra",
//         Postal_Code: "410401",
//         country: "India"
//     }
//     ,
// },