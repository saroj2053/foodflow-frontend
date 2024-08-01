import carouselImage1 from "../assets/carousel-image-1.jpg";
import carouselImage2 from "../assets/carousel-image-2.jpg";
import carouselImage3 from "../assets/carousel-image-3.jpg";
import carouselImage5 from "../assets/carousel-image-5.jpg";
import carouselImage6 from "../assets/carousel-image-6.jpg";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  const carouselImages: string[] = [
    carouselImage1,
    carouselImage2,
    carouselImage3,
    carouselImage5,
    carouselImage6,
  ];
  return (
    <Carousel
      className="z-10"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent className="z-10">
        {carouselImages.map((crsImg, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full max-h-[600px]">
              <img
                src={crsImg}
                alt="burger on a plate with french fries"
                className="w-full max-h-[600px] object-cover "
              />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-transparent to-orange-500 opacity-70"></div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Hero;
