import Banner from "./Banner/index";
import ContactUs from "./ContactUs";
import DownloadSec from "./DownloadSection";
import Features from "./Features";
import Footer from "./Footer";
import Technology from "./Technology";
import VideoSection from "./VideoSection";

const Homepage = () => {
    return (
        <>
            <Banner />
            <VideoSection />
            <Features />
            <Technology />
            <DownloadSec />
            <ContactUs />
            <Footer />
        </>
    )
}

export default Homepage;