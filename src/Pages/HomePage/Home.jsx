import AboutUs from "../../Components/AboutUs/AboutUs";
import Banner from "../../Components/Banner/Banner";
import Category from "../../Components/CategoryProducts/Category";
import ClientReview from "../../Components/ClientReview/ClientReview";
import Feature from "../../Components/FeatureProducts/Feature";





const Home = () => {
    return (
        <div>
           
           <Banner></Banner>
         <Feature></Feature>
         <AboutUs></AboutUs>

          <Category></Category>
          <ClientReview></ClientReview>
         
        </div>
    );
};

export default Home;