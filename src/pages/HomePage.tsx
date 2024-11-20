import Layout from "@/layouts/Layout";
import Hero from "@/components/Hero";
import SearchInput, { SearchForm } from "@/components/SearchInput";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import { useNavigate } from "react-router-dom";
import HowItWorks from "@/components/HowItWorks";

const HomePage = () => {
  const navigate = useNavigate();
  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };
  return (
    <Layout>
      <Hero />
      <div className="container mx-auto flex flex-col gap-12 z-20">
        <div className="md:px-32 bg-gradient-to-b from-orange-50 to-white  rounded-lg shadow-md py-8 px-6 flex flex-col gap-5 text-center -mt-16 z-10">
          <h1 className=" text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight font-bold ">
          Delicious Food, <span className="text-orange-600">Delivered</span> To Your Door
          </h1>
          <span className="text-base md:text-xl text-slate-800">
          Order from your favorite restaurants and track your delivery in real-time. Get fresh food delivered within 30 minutes.
          </span>
          <SearchInput
            placeHolder="Search by City or Town"
            onSubmit={handleSearchSubmit}
          />
        </div>
      </div>
      <div>
        <div className="container mx-auto my-12 flex flex-col lg:flex-row justify-between items-center ">
          <Features />
        </div>
      </div>
      <HowItWorks />
      <Testimonials />

      <div className="bg-gradient-to-b from-orange-50 to-white">

      <div className="container mx-auto py-12">
        <div>
        <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Mobile App</span>
            <h2 className="font-bold text-3xl tracking-tighter py-4">
              Order takeaway even faster!
            </h2>
            <span className="text-slate-600 font-semibold">
              Working on the FoodFlow App. For faster ordering, personalised
              recommendations and experiencing the convenience of ordering food from anywhere, anytime Stay tuned for that!
            </span>
        </div>
         
          </div>
        </div>
    </Layout>
  );
};

export default HomePage;
