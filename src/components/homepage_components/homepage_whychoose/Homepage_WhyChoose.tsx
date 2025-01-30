import img1 from '../../../assets/HomePage_banner1.jpg';
import img2 from '../../../assets/HomePage_banner3.jpg';
import { MdOutlineDone } from 'react-icons/md';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

interface FeatureData {
    images: string[]; // Array of image paths (strings)
    title: string;
    description: string;
    features: string[]; // Array of feature descriptions (strings)
}

const Homepage_WhyChoose = () => {
    const featureData: FeatureData = {
        images: [img1, img2],
        title: "Why Choose Lonavala Stays?",
        description: "Gain luxury and comfort at Lonavala Stays, perfect for relaxation, celebration, or adventure.",
        features: [
            "Quick getaways near Lonavala & Pawna.",
            "Ideal majestic villas for any occasion.",
            "Enjoy exquisite cuisine by top chefs.",
            "Perfect for creatives and adventurers.",
            "Tailored experiences for all visitors.",
            "Relax, celebrate, or create memories."
        ]
    };

    return (
        <section className="py-10 lg:py-20">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 px-6 sm:px-10 lg:px-20 tracking-widest">
                {/* Left side - Images */}
                <div className="flex-1 flex justify-center items-center relative">
                    <img
                        src={img1}
                        alt="Pool view with people"
                        className="w-4/5 sm:w-2/3 rounded-lg shadow-lg object-cover"
                    />
                    <img
                        src={img2}
                        alt="Garden swing area"
                        className="w-56 sm:w-72 absolute -bottom-8 right-8 sm:-bottom-10 sm:right-10 rounded-lg shadow-lg object-cover"
                    />
                </div>

                {/* Right side - Content */}
                <div className="flex-1">
                    {featureData?.title && (
                        <h1 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
                            {featureData.title}
                        </h1>
                    )}

                    {featureData?.description && (
                        <p className="text-gray-700 mb-6 text-sm sm:text-base">
                            {featureData.description}
                        </p>
                    )}

                    <ul className="space-y-4 mb-8">
                        {featureData?.features?.map((feature, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <span className="text-primary text-xl sm:text-2xl"><MdOutlineDone /></span>
                                <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex justify-center lg:justify-start">
                        <Link 
                            to={'/contact'} 
                            className="bg-primary text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors hover:bg-primary-dark"
                        >
                            <span>Contact</span>
                            <FaArrowRightLong />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Homepage_WhyChoose;
