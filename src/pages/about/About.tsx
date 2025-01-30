import CommonBanner from "../../components/commonComponents/banner/CommonBanner"
import img from '../../assets/HomePage_banner1.jpg'
import img1 from '../../assets/HomePage_banner2.jpg'
import Parallax from "../../components/commonComponents/parallax/Parallax"
import NearByPlaces from "../../components/aboutpage_component/nearbyplaces/NearByPlaces"

const About = () => {
    return (
        <section>
            <div>
                <CommonBanner image={img} PageName={'About Us'} />
            </div>
            <div className=" tracking-wide py-20 px-8 lg:px-32 flex flex-col gap-8 text-justify">
                {/* title  */}
                <div>
                    <span className="text-4xl font-medium">
                        How it feels at Lonavala stays
                    </span>
                </div>
                {/* description  */}
                <div className="text-base font-thin  flex flex-col gap-4">
                    <span className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ad animi saepe perferendis harum, cupiditate ducimus, nobis quis quas ex explicabo consequatur porro error laboriosam officia nam, voluptas repellat corrupti! Iusto nihil voluptate in neque explicabo quibusdam deserunt quidem illo, suscipit dolorem, dolores, eius cum asperiores aut! Optio, perferendis ea.
                    </span>
                    <span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit ipsa fugiat esse debitis fuga laborum voluptatem vero nostrum quis labore delectus fugit, deserunt repellat beatae obcaecati veritatis praesentium quidem. Sapiente fuga laudantium mollitia eligendi et? Fugiat sed veniam doloribus assumenda veritatis molestias inventore eaque perspiciatis optio! Velit dolorum repellat, blanditiis quis doloremque similique vel magnam maxime et provident soluta voluptates cum beatae nostrum.
                    </span>

                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nisi fugit tempora sunt reprehenderit impedit et voluptates qui ea commodi velit inventore odio, eveniet similique tenetur eos? Mollitia, fugit nam deleniti esse quaerat at eaque dolore dicta molestias libero impedit inventore quia veniam ipsum magni vitae minima in odio nulla quibusdam! Facilis distinctio quam, dolorem placeat id eaque voluptate iusto fuga accusantium, impedit quo sit quia qui porro vitae officia exercitationem tempora vero laborum, repellendus nesciunt sequi? Facere assumenda asperiores sapiente fuga iusto minima, quisquam harum ab earum at provident expedita blanditiis exercitationem nobis, facilis ipsa recusandae quas deserunt eius eligendi id velit? Placeat quia, et repellat ab obcaecati iusto voluptatem nulla commodi consequuntur possimus quos, ratione officiis quisquam quis?
                    </span>

                </div>
                <span>

                </span>
            </div>
            <div>
                <Parallax image={img1} title={'Title'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aperiam, recusandae dolore illum, perferendis ipsum soluta assumenda vitae, esse tempore magnam molestias reiciendis? Nisi ad commodi quibusdam asperiores ab dolorum?'} />
            </div>
            <div>
                <NearByPlaces />
            </div>
        </section>
    )
}

export default About