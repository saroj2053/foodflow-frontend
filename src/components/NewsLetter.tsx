import { Button } from "./ui/button";
import { Input } from "./ui/input";

const NewsLetter = () => {
  return (
    <div className="bg-slate-50 mt-12 py-6">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-slate-800 font-bold">
          Subscribe to our Newsletter
        </h2>
        <div className="py-12 sm:max-w-[70%] md:max-w-[60%] lg:max-w-[40%] mx-auto flex flex-col justify-center items-center gap-6">
          <Input
            type="email"
            className="text-xl py-6"
            placeholder="enter your email"
          />
          <Button
            variant="default"
            className="w-full bg-orange-500 text-white text-lg font-semibold"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
