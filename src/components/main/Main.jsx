import Carousel from "../carousel/Carousel";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import phone6 from "../../assets/galaxy1.jpg"
import phone7 from "../../assets/image2.png"
import phone8 from "../../assets/image3.png"

function Main(){
    const str = "salom"
    return <>
        <Header/>
        <Carousel/>
        <Hero title={"Mobile & Computing"} desc={"Samsung Galaxy S23 Ultra Amazing camera, excellent battery, premium design. Perfect for flagship lovers"} image={phone6} />
        <Hero title={"Block Friday Is Coming"} desc={"Galaxy Z Fold 5 Innovative design, powerful multitasking, solid battery life, durable hinge"} image={phone8} />
        <Hero title={"TV & Audio"} desc={"Galaxy A54 5G: Great value, vibrant screen, decent performance, long-lasting battery"} image={phone6} />
    </>
}

export default Main;