
import { TbAirConditioning } from "react-icons/tb";
import { FaPersonSwimming } from "react-icons/fa6";
import { CgGym } from "react-icons/cg";
import { FaWifi } from "react-icons/fa";
import { Link } from "react-router-dom";

interface AmenitiesData {
    id: number,
    icon: any,
    title: string,
}

const Amenities = () => {

    const amenitiesData: AmenitiesData[] = [
        {
            id: 1,
            icon: <TbAirConditioning />,
            title: "Airport Pick-up Service",
        },
        {
            id: 2,
            icon: <FaPersonSwimming />,
            title: "Laundry Services",
        },
        {
            id: 3,
            icon: <CgGym />,
            title: "Breakfast in Bed",
        },
        {
            id: 4,
            icon: <FaWifi />,
            title: "Housekeeper Services",
        },
        {
            id: 5,
            icon: <FaWifi />,
            title: "Wifi & Internet",
        },
        {
            id: 6,
            icon: <CgGym />,
            title: "Air Conditioning",
        },
    ]

    return (
        <section className="py-14 lg:py-28  bg-Bg_Primary">
            <div className="w-full h-fit  flex flex-col lg:flex-row justify-center items-center gap-5">
                {/* content  */}
                <div className="image w-full h-full flex-1 flex justify-center items-center gap-6">
                    <div className="flex flex-col gap-10">
                        <h3 className='text-2xl sm:text-3xl md:text-6xl font-medium'>The Essentials</h3>
                        <p className="text-base text-justify md:text-xl font-light">Discover the exceptional amenities that make your stay at Aashiyaanaa Villas unforgettable! Whether you're looking to unwind, embark on an adventure, or enjoy a perfect blend of both, our villas provide a thoughtfully curated range of comforts and features, ensuring an extraordinary experience every time.</p>
                        <Link to="/" className="text-primary font-semibold text-sm md:text-2xl">Know More...</Link>
                    </div>
                </div>
                {/* Amenities  */}
                <div className="amenities w-full h-full flex-1 ">
                    <div className='h-full w-full px-3 sm:px-5 flex flex-col gap-4 sm:gap-6 md:gap-8 justify-center items-start'>
                        <div className='icons w-full grid grid-cols-3 gap-5 md:gap-16'>
                            {
                                amenitiesData?.map((item) => {
                                    return (
                                        <>
                                            <div key={item.id} className='flex flex-col gap-3'>
                                                <div className='flex flex-col justify-center items-center gap-2 sm:gap-3 '>
                                                    <span className="text-primary font-xs text-2xl lg:text-4xl">{item.icon}</span>
                                                    <div className="flex flex-col ">
                                                        <p className="font-semibold text-center text-xs lg:text-xl tracking-wide">{item.title}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Amenities