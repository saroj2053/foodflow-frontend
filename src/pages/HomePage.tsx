import landingImg from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import Layout from "@/layouts/Layout";
import Hero from "@/components/Hero";
import SearchInput, { SearchForm } from "@/components/SearchInput";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import NewsLetter from "@/components/NewsLetter";
import { useNavigate } from "react-router-dom";
import DeliveryLottie from "@/components/DeliveryLottie";

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
        <div className="md:px-32 bg-slate-50  rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16 z-10">
          <h1 className=" text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight font-bold text-orange-600">
            Indulge into a takeout today
          </h1>
          <span className="text-xl text-slate-800">
            Food is just a click away!
          </span>
          <SearchInput
            placeHolder="Search by City or Town"
            onSubmit={handleSearchSubmit}
          />
        </div>
      </div>
      <div className="bg-slate-50">
        <div className="container mx-auto my-12 py-12 flex flex-col lg:flex-row justify-between items-center ">
          <Features />
          <DeliveryLottie />
        </div>
      </div>
      <Testimonials />

      <div className="container mx-auto py-12">
        <div className="grid md:grid-cols-2 gap-5">
          <img src={landingImg} alt="" />
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <span className="font-bold text-3xl tracking-tighter">
              Order takeaway even faster!
            </span>
            <span className="text-slate-600 font-semibold">
              Download the EzyEats App for faster ordering and personalised
              recommendations
            </span>
            <img src={appDownloadImage} alt="" />
          </div>
        </div>
      </div>
      <NewsLetter />
    </Layout>
  );
};

export default HomePage;
