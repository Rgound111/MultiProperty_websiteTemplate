

interface parallaxprops {
    image: string;
    title: string;
    description: string
}

const Parallax: React.FC<parallaxprops> = ({ image, title, description }) => {
    return (
        <div
            className="relative h-[70vh] bg-fixed bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-center px-6">
                <div className="text-white max-w-lg">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
                    <p className="text-lg lg:text-xl">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Parallax;