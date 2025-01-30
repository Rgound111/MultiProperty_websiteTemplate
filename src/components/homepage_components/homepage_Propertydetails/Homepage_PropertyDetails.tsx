import { useLocation } from 'react-router-dom';
import { FaBed, FaShower, FaSwimmingPool, FaCar } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

const PropertyDetails = () => {
    const location = useLocation();
    const propertyData = location.state?.property;
    console.log(propertyData)
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

    // Add a check to handle cases where property data might not exist
    if (!propertyData) {
        return <div>Property not found</div>;
    }

    return (
        <section className="pt-40  tracking-wide">
            <div className='bg-Bg_Primary '>
                {/* First div ( title , Images , Amenities ) */}
                <div className='flex flex-col gap-3  px-8 lg:px-32 '>
                    {/* property name  */}
                    <div className=''>
                        <p className='text-3xl capitalize font-medium'>{propertyData.property_name}</p>
                    </div>
                    {/* property image section */}
                    <div className="flex flex-wrap gap-4">
                        {/* First Column with Swiper */}
                        <div className="w-full h-[250px] md:h-[500px] "> {/* Fixed height for better control */}
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                spaceBetween={0}
                                slidesPerView={1}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev'
                                }}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                className="w-full h-full rounded-lg"
                            >
                                {/* Custom navigation buttons */}
                                <div className="swiper-button-prev !w-8 !h-8 !bg-white/50 hover:!bg-white !rounded-full !text-gray-800 after:!text-sm transition-all duration-200 "></div>
                                <div className="swiper-button-next !w-8 !h-8 !bg-white/50 hover:!bg-white !rounded-full !text-gray-800 after:!text-sm transition-all duration-200 "></div>


                                {propertyData.property_img.map((image: string, index: number) => (
                                    <SwiperSlide key={index}>
                                        <div className=" w-full h-full">
                                            <img
                                                src={image}
                                                alt={`Property Image ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                    </div>
                    {/* Second Column */}
                    <div className="w-full h-[150px] md:h-[300px] grid grid-cols-2  gap-4">
                        {propertyData.property_img.slice(1, 3).map((amenity: string, index: number) => (
                            <div
                                key={index}
                                className="relative overflow-hidden " // Half of main image height (400/2 - gap)
                            >
                                <img
                                    className="w-full h-full object-cover rounded-lg"
                                    src={amenity}
                                    alt={`Property Image ${index + 4}`}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Amenities        */}
                    <div className="grid grid-cols-2 place-items-center md:grid-cols-4 gap-6 md:gap-4 py-4">
                        {
                            propertyData?.property_amenities?.map((amenity: any, index: any) => {
                                return (
                                    <>
                                        <div key={index} className="flex flex-col items-center gap-1">
                                            <div className='flex items-center gap-2'>
                                                <span className='text-xl'>
                                                    {renderIcon(amenity.amenities_icon)}
                                                </span>
                                                <span>
                                                    {amenity.amenities_count || amenity.amenities_availablity}
                                                </span>
                                            </div>
                                            <span className='font-light'>
                                                {amenity.amenities_type}
                                            </span>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>

                {/* Second div (contain remaining detail)  */}
                <div className='bg-Bg_secondary px-8 lg:px-32 py-8 flex flex-col justify-center gap-16 items-start'>
                    {/* Description Section */}
                    <div className="flex-1 w-full rounded-md bg-white flex flex-col gap-8 p-6">
                        <h2 className="text-xl font-semibold mb-4">Description</h2>
                        <hr />
                        <p className="text-gray-700 leading-relaxed text-justify">
                            {propertyData.description || `${propertyData.property_name} offers a luxurious retreat in the scenic beauty of ${propertyData.location}. 
                            One of the beautiful villas with private pool, a fun games room, and a beautifully landscaped garden for a 
                            relaxing stay. This villa blends comfort with elegance, providing gourmet meal options, high-speed Wi-Fi, and 
                            personalized service.`}
                        </p>
                    </div>

                    {/* Features Section */}
                    <div className="flex-1 w-full rounded-md bg-white p-6  flex flex-col gap-8">
                        <h2 className="text-xl font-semibold mb-4">Features</h2>
                        <hr />
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {propertyData.property_features?.map((feature: string, index: number) => (
                                <div key={index} className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="flex-1 flex flex-col gap-10 py-10 w-full rounded-md bg-white p-6">
                        {/* Details  */}
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Details</h2>
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {
                                        propertyData?.property_details?.map((details: any, index: any) => {
                                            return (
                                                <>
                                                    <div key={index} className="flex flex-col justify-start gap-3">
                                                        <div>
                                                            <span className="font-medium">{details.type} </span>
                                                            <span>: {details.value}  </span>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        {/* Additional Details Section */}
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Additional Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {
                                    propertyData?.property_aditional_details?.map((aditional_detail: any, index: any) => {
                                        return (
                                            <>
                                                <div key={index} className="flex justify-start gap-3">
                                                    <span className="font-medium">{aditional_detail.type}</span>
                                                    <span>{aditional_detail.value}</span>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    {/* Address Section */}
                    <div className="flex-1 w-full rounded-md bg-white p-6  flex flex-col gap-8">
                        <h2 className="text-xl font-semibold mb-4">Address</h2>
                        <hr />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {propertyData.property_address?.map((address: any, index: any) => (
                                <>
                                    <div key={index} className="flex justify-start gap-3">
                                        <span className="font-medium">{address.type}{' :'} <hr /></span>
                                        <span>{address.value}  <hr /> </span>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </section >
    );
};

export default PropertyDetails;