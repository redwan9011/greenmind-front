import AboutUs from "../../Components/AboutUs/AboutUs";
import Banner from "../../Components/Banner/Banner";
import Category from "../../Components/CategoryProducts/Category";
import Feature from "../../Components/FeatureProducts/Feature";





const Home = () => {
    return (
        <div>
           
           <Banner></Banner>
         <Feature></Feature>
         <AboutUs></AboutUs>
          <Category></Category>
         
        </div>
    );
};

export default Home;