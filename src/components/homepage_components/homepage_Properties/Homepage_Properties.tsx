import { FaBed, FaShower, FaSwimmingPool, FaCar } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

// import img1 from '../../../assets/HomePage_banner1.jpg'
// import img2 from '../../../assets/HomePage_banner1.jpg'
// import img3 from '../../../assets/HomePage_banner1.jpg'
import Heading from "../../commonComponents/heading/Heading";
import { useNavigate } from "react-router-dom";
import { propertyData } from "../../../data";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import PropertyModal from "../propertymodal/PropertyModal";
import { useState } from "react";
// All Properties Data
// const propertyData = [
//     {
//         id: 1,
//         property_name: "Rhythm Villa",
//         property_description: "Rhythm Villa is a beautiful property located in the heart of Lonavala. The property is surrounded by lush greenery and offers a serene environment for a relaxing stay. The property is equipped with modern amenities and offers a comfortable stay for guests. The property is ideal for families, couples, and groups looking for a peaceful getaway in Lonavala. The property is located close to the market area and offers easy access to popular tourist spots in Lonavala. The property is ideal for guests looking for a comfortable stay in Lonavala.",
//         property_location: "Malavali, Lonavala",
//         property_img: [img1, img2, img3],
//         property_amenities: [
//             {
//                 amenities_type: "Bedrooms",
//                 amenities_count: 6,
//                 amenities_icon: "bed", // Changed to string identifier instead of React element
//             },
//             {
//                 amenities_type: "Washrooms",
//                 amenities_count: 6,
//                 amenities_icon: "shower",
//             },
//             {
//                 amenities_type: "Pools",
//                 amenities_availablity: 'available',
//                 amenities_icon: "pool",
//             },
//             {
//                 amenities_type: "Parking",
//                 amenities_count: 5,
//                 amenities_icon: "car",
//             }
//         ],
//         property_features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
//         status: "Available",
//         property_details: [
//             {
//                 type: "Bedrooms",
//                 value: "6"
//             },
//             {
//                 type: "Property_Size",
//                 value: "5000 sqft"
//             },
//             {
//                 type: "parking",
//                 value: "Pawna Lake, Lonavala"
//             },
//             {
//                 type: "Private_Swimming_Pool",
//                 value: "Available"
//             }
//         ],
//         property_aditional_details: [
//             {
//                 type: "smoking",
//                 value: "Not Allowed"
//             },
//             {
//                 type: "Drinking ",
//                 value: "Not Allowed"
//             },
//         ],
//         property_address: [
//             {
//                 type: "Place",
//                 value: "Lonavala"
//             },
//             {
//                 type: "City",
//                 value: "Pune"
//             },
//             {
//                 type: "Area",
//                 value: "Pawna Lake"
//             },
//             {
//                 type: "State",
//                 value: "Maharashtra"
//             },
//             {
//                 type: "Postal Code",
//                 value: "410401"
//             },
//             {
//                 type: "Country",
//                 value: "India"
//             }
//         ]
//     },
//     {
//         id: 2,
//         property_name: "Anjum Villa",
//         property_description: "Anjum Villa is a luxurious property located in the scenic Lonavala. The villa offers an intimate retreat with modern amenities and a tranquil atmosphere, making it perfect for families, groups, or couples.",
//         property_location: "Jevrewadi Village, Lonavala .",
//         property_img: [img1, img2, img3],
//         property_amenities: [
//             {
//                 amenities_type: "Bedrooms",
//                 amenities_count: 5,
//                 amenities_icon: "bed", // Changed to string identifier instead of React element
//             },
//             {
//                 amenities_type: "Washrooms",
//                 amenities_count: 5,
//                 amenities_icon: "shower",
//             },
//             {
//                 amenities_type: "Pools",
//                 amenities_availablity: 'available',
//                 amenities_icon: "pool",
//             },
//             {
//                 amenities_type: "Parking",
//                 amenities_count: 5,
//                 amenities_icon: "car",
//             }
//         ],
//         property_features: ["Feature A", "Feature B", "Feature C", "Feature D", "Feature E"],
//         status: "Available",
//         property_details: [
//             {
//                 type: "Bedrooms",
//                 value: "4"
//             },
//             {
//                 type: "Property_Size",
//                 value: "4500 sqft"
//             },
//             {
//                 type: "parking",
//                 value: "Near Sunset Point, Lonavala"
//             },
//             {
//                 type: "Private_Swimming_Pool",
//                 value: "Available"
//             }
//         ],
//         property_aditional_details: [
//             {
//                 type: "smoking",
//                 value: "Not Allowed"
//             },
//             {
//                 type: "Drinking ",
//                 value: "Not Allowed"
//             },
//         ],
//         property_address: [
//             {
//                 type: "Place",
//                 value: "Lonavala"
//             },
//             {
//                 type: "City",
//                 value: "Pune"
//             },
//             {
//                 type: "Area",
//                 value: "Malshej Ghat"
//             },
//             {
//                 type: "State",
//                 value: "Maharashtra"
//             },
//             {
//                 type: "Postal Code",
//                 value: "410405"
//             },
//             {
//                 type: "Country",
//                 value: "India"
//             }
//         ]

//     },
//     {
//         id: 3,
//         property_name: "Serene Escape Villa",
//         property_description: "Serene Escape Villa is a luxurious villa offering the perfect escape from the hustle and bustle of city life. Surrounded by nature, it provides a peaceful and private atmosphere for guests.",
//         property_location: "Malshej Ghat, Lonavala",
//         property_img: [img1, img2, img3],
//         property_amenities: [
//             {
//                 amenities_type: "Bedrooms",
//                 amenities_count: 5,
//                 amenities_icon: "bed", // Changed to string identifier instead of React element
//             },
//             {
//                 amenities_type: "Washrooms",
//                 amenities_count: 5,
//                 amenities_icon: "shower",
//             },
//             {
//                 amenities_type: "Pools",
//                 amenities_availablity: 'available',
//                 amenities_icon: "pool",
//             },
//             {
//                 amenities_type: "Parking",
//                 amenities_count: 5,
//                 amenities_icon: "car",
//             }
//         ],
//         property_features: ["Feature X", "Feature Y", "Feature Z", "Feature W", "Feature V"],
//         status: "Available",
//         property_details: [
//             {
//                 type: "Bedrooms",
//                 value: "6"
//             },
//             {
//                 type: "Property_Size",
//                 value: "6000 sqft"
//             },
//             {
//                 type: "parking",
//                 value: "Malshej Ghat, Lonavala"
//             },
//             {
//                 type: "Private_Swimming_Pool",
//                 value: "Available"
//             }
//         ],
//         property_aditional_details: [
//             {
//                 type: "smoking",
//                 value: "Not Allowed"
//             },
//             {
//                 type: "Drinking ",
//                 value: "Not Allowed"
//             },
//         ],
//         property_address: [
//             {
//                 type: "Place",
//                 value: "Lonavala"
//             },
//             {
//                 type: "City",
//                 value: "Pune"
//             },
//             {
//                 type: "Area",
//                 value: "Sunset Point"
//             },
//             {
//                 type: "State",
//                 value: "Maharashtra"
//             },
//             {
//                 type: "Postal Code",
//                 value: "410401"
//             },
//             {
//                 type: "Country",
//                 value: "India"
//             }
//         ]

//     },
// ];

const Homepage_Properties = () => {
    const navigate = useNavigate();

    const [selectedProperty, setSelectedProperty] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to render the correct icon based on the string identifier
    const renderIcon = (iconName: string) => {
        switch (iconName) {
            case 'bed':
                return <FaBed />;
            case 'shower':
                return <FaShower />;
            case 'pool':
                return <FaSwimmingPool />;
            case 'car':
                return <FaCar />;
            default:
                return null;
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProperty(null);
    };

    const handleNavigate = (property: any) => {
        navigate(`/property_details/${property?.id}`, { state: { property } })
    }

    const handleModal = (property: any) => () => {
        setSelectedProperty(property);
        setIsModalOpen(true);
    }


    return (
        <>
            <section className="px-4 lg:px-20 py-8 pb-10 md:pb-20">
                <Heading title='Explore Our Villas' />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10'>
                    {propertyData.map((property: any) => (
                        <div key={property.id} className="bg-white shadow-xl rounded-md overflow-hidden">
                            {/* Image Container */}
                            <div
                                className="relative"
                            >
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                    spaceBetween={0}
                                    navigation={{
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev'
                                    }}
                                    loop={true}
                                    className="h-full w-full group  cursor-pointer"
                                >
                                    {/* Custom navigation buttons */}
                                    <div className="swiper-button-prev !w-8 !h-8 !bg-white/50 hover:!bg-white !rounded-full !text-gray-800 after:!text-sm transition-all duration-200 "></div>
                                    <div className="swiper-button-next !w-8 !h-8 !bg-white/50 hover:!bg-white !rounded-full !text-gray-800 after:!text-sm transition-all duration-200 "></div>

                                    {property?.property_img.map((image: any, index: number) => (
                                        <SwiperSlide key={index}>
                                            <div
                                                onClick={() => handleNavigate(property)}
                                                className="h-full w-full"
                                            >
                                                <img
                                                    src={image}
                                                    alt={`${property.property_name} - Image ${index + 1}`}
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                {/* Modal view button  */}
                                <span
                                    onClick={handleModal(property)}
                                    className="absolute right-2 bottom-2 cursor-pointer z-10 text-2xl text-white h-8 w-8 bg-[rgba(0,0,0,0.4)] flex justify-center items-center">
                                    <RxOpenInNewWindow />
                                </span>
                            </div>

                            {/* Content Container */}
                            <div
                                className="p-4 sm:p-5 flex flex-col gap-3"
                            >
                                <h2 className="text-base sm:text-lg font-medium text-gray-800">
                                    {property.property_name}
                                </h2>

                                {/* Amenities */}
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                                    {property?.property_amenities.slice(0, 3).map((amenity: any, index: number) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <span className="text-lg sm:text-xl text-gray-600">
                                                {renderIcon(amenity.amenities_icon)}
                                            </span>
                                            <span className="text-sm text-gray-600">
                                                {amenity.amenities_type}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Location */}
                                <p className="text-sm text-gray-500 mt-1">
                                    {property.property_location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>

            {/* Modal */}
            {isModalOpen && (
                <PropertyModal property={selectedProperty} onClose={closeModal} handleNavigate={handleNavigate} />
            )}

        </>
    );
};


export default Homepage_Properties