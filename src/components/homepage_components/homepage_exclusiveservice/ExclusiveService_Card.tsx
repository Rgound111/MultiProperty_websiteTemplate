import img1 from '../../../assets/HomePage_banner1.jpg'
import img2 from '../../../assets/HomePage_banner2.jpg'
import img3 from '../../../assets/HomePage_banner3.jpg'

interface Room {
    title: string,
    thumbnail: string,
    description: string,
}

const ExclusiveService_Card = () => {
    //  Card Data 
    const data: Room[] = [
        {
            title: "Your Paradise Awaits",
            thumbnail: img1,
            description: "Escape to a tranquil haven where luxury meets serenity, offering the ultimate retreat from everyday life."
        },
        {
            title: "A Home for Every Heart",
            thumbnail: img2,
            description: "Discover a place that feels like home, designed to suit every style, story, and dream."
        },
        {
            title: "Sip, Relax, Repeat. ",
            thumbnail: img3,
            description: "Start your day with the perfect brew, because great coffee fuels great moments."
        },
        {
            title: "Celebrations That Last a Lifetime. ",
            thumbnail: img1,
            description: "Create unforgettable memories with events tailored to make your special day truly extraordinary."
        },
    ];

    return (
        <section>
            <div className='h-full w-full'>
                {/* mapping Card  */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 '>
                    {data?.map((item) => {
                        return (
                            <div
                                key={item.title}
                                className="group relative h-[50vh] md:h-[65vh] w-full mb-3  rounded-lg overflow-hidden"
                            >
                                <img
                                    className="object-cover h-4/6 w-full  rounded-lg "
                                    src={item.thumbnail}
                                    alt="BackgroundImage"
                                />
                                <div className="h-2/6 flex flex-col justify-start items-center gap-1 text-center px-5 py-4">
                                    <p className="text-base font-light lg:text-xl ">{item.description}</p>
                                </div>
                                <span className="cursor-pointer text-xl md:text-2xl font-bold absolute inset-0 flex justify-center items-center text-white  text-center group-hover:-top-20 transform duration-200 px-4 py-[6px]">
                                    {item.title}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ExclusiveService_Card;
