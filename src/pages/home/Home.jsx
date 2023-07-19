import AboutUs from "./components/AboutUs/AboutUs";
import AccordionComponent from "./components/AccordionComponent/AccordionComponent";
import ContactUs from "./components/ContactUs/ContactUs";
import CreativeSpeakersComponents from "./components/CreativeSpeakers/CreativeSpeakers";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import OurPrograms from "./components/OurPrograms/OurPrograms";
import OurSponsorsComponents from "./components/Oursponsors/OurSponsors";
import Overview from "./components/Overview/Overview";
import RegisterHere from "./components/RegisterHere/RegisterHere";
import Venue from "./components/Venue/Venue";
import WatchVideo from "./components/WatchVideo/WatchVideo";

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <AboutUs />
            <Overview />
            <WatchVideo />
            <CreativeSpeakersComponents />
            <OurPrograms />
            <RegisterHere />
            <AccordionComponent />
            <Venue />
            <OurSponsorsComponents />
            <ContactUs />
            <Footer />
        </>
    )
}
