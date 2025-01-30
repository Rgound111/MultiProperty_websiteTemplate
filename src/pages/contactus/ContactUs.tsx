import CommonBanner from "../../components/commonComponents/banner/CommonBanner"
import img from '../../assets/HomePage_banner3.jpg'
import Homepage_Properties from "../../components/homepage_components/homepage_Properties/Homepage_Properties";

const contactInfo = [
    {
        icon: "📍",
        text: "Aashiyaanaa Villas, House No 118, opposite ZP school, Aapti Dhamandara, Lonavala, Maharashtra - 410106",
    },
    { icon: "📞", text: "+91-9820636957" },
    { icon: "📞", text: "+91-9833412095" },
    { icon: "📞", text: "+91-9619434981" },
    { icon: "📞", text: "+91-9819487056" },
    { icon: "✉️", text: "aashiyaanaavillas@gmail.com" },
];

const ContactUs = () => {
    return (
        <section className=''>
            {/* Banner  */}
            <div>
                <CommonBanner image={img} PageName={'Contact Us'} />
            </div>
            {/* Contact Info Section  */}
            <div className="flex flex-col md:flex-row gap-8 px-4 lg:px-20 py-8">
                {/* Left Section */}
                <div className="md:w-1/2 text-gray-600 text-lg leading-relaxed">
                    <span>
                        Looking for the perfect villa on rent in Lonavala, Pawna Lake, or Madh
                        Island? At Aashiyaanaa Villas, we offer luxury escapes with private
                        pools, breathtaking views, and unforgettable experiences.
                    </span>
                </div>

                {/* Right Section */}
                <div className="md:w-1/2 text-gray-800 text-lg leading-relaxed space-y-4">
                    {contactInfo.map((info, index) => (
                        <div key={index} className="flex items-start">
                            <span className="text-orange-500 mr-4">{info.icon}</span>
                            <span>{info.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Homepage Property section  */}
            <div>
                <Homepage_Properties />
            </div>
        </section>
    )
}

export default ContactUs