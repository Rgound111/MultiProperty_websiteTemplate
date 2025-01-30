import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// import { MdOutlineNavigateNext } from "react-icons/md";
// import { GrFormPrevious } from "react-icons/gr";
import '../../../App.css'


import img1 from '../../../assets/HomePage_banner1.jpg'
import img2 from '../../../assets/HomePage_banner2.jpg'
import img3 from '../../../assets/HomePage_banner3.jpg'

const Slider = ({ }) => {

    //  images object
    const images = [
        { id: 1, src: img1, alt: 'Image 1' },
        { id: 2, src: img2, alt: 'Image 2' },
        { id: 3, src: img3, alt: 'Image 3' },
    ];

    return (
        <section className="relative text-black  w-full flex justify-center items-center">
            <div className=' h-screen w-full'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={10}
                    // effect="fade"
                    // navigation
                    // pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    loop={true}
                    className=""
                >
                    {images.map((image) => (
                        <SwiperSlide key={image.id}>
                            <div className="h-screen w-full">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* overlay text */}
            <div className='z-20 font-sans absolute inset-0 w-full h-full bg-black bg-opacity-15 flex items-center justify-center'>
                <div className=' flex flex-col items-center gap-5 text-[#fff] text-center tracking-wide capitalize'>
                    <p className='text-[2.5rem] font-medium '>Your Dream Escape Awaits</p>
                    {/* <p>Lonavala stays</p> */}
                </div>
            </div>
        </section>
    )
}

export default Slider