import landingImg from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import Layout from "@/layouts/Layout";
import Hero from "@/components/Hero";
import SearchInput from "@/components/SearchInput";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <div className="container mx-auto flex flex-col gap-12 z-20">
        <div className="bg-slate-50  rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16 z-10">
          <h1 className="text-4xl tracking-tight font-bold text-orange-600">
            Indulge into a takeout today
          </h1>
          <span className="text-xl">Food is just a click away!</span>
          <div className="w-[80%] mx-auto">
            <SearchInput />
          </div>
        </div>
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
    </Layout>
  );
};

export default HomePage;
