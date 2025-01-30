import Parallax from "../../components/commonComponents/parallax/Parallax"
import Amenities from "../../components/homepage_components/amenities/Amenities"
import Homepage_ExclusiveService from "../../components/homepage_components/homepage_exclusiveservice/Homepage_ExclusiveService"
import Homepage_LetUsGuide from "../../components/homepage_components/homepage_letusguide/Homepage_LetUsGuide"
import Homepage_Properties from "../../components/homepage_components/homepage_Properties/Homepage_Properties"
import Homepage_Testimonial from "../../components/homepage_components/homepage_testimonial/Homepage_Testimonial"
import Homepage_WhyChoose from "../../components/homepage_components/homepage_whychoose/Homepage_WhyChoose"
import Slider from "../../components/homepage_components/slider/Slider"
import img from '../../assets/HomePage_banner3.jpg'

const Home = () => {
    // Slider Images 
    return (
        <section className="relative font-roboto">
            <div className="w-full h-screen">
                <Slider />
            </div>
            <div>
                <Homepage_Properties />
            </div>
            <div>
                <Parallax image={img} title={'Title'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aperiam, recusandae dolore illum, perferendis ipsum soluta assumenda vitae, esse tempore magnam molestias reiciendis? Nisi ad commodi quibusdam asperiores ab dolorum?'} />
            </div>
            <div className=" px-4 lg:px-20 ">
                <Amenities />
            </div>
            <div className="">
                <Homepage_LetUsGuide />
            </div>
            <div className="">
                <Homepage_ExclusiveService />
            </div>
            <div className="">
                <Homepage_WhyChoose />
            </div>
            <div className="">
                <Homepage_Testimonial />
            </div>
        </section>
    )
}

export default Home