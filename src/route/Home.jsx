import AddNew from "../components/AddNew";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Community from "../components/Community";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";


const Home = () => {
    return (
        <div>
           <Banner/>
           <Cards/>
           <AddNew/>
           <Testimonials/>
           <Community/>
           <Footer/>
        </div>
    );
};

export default Home;