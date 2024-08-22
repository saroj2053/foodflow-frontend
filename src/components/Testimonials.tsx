import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <>
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-12 text-slate-800 ">
        Customer Testimonials
      </h2>
      <div className="container mx-auto py-10 rounded-md">
        <Swiper
          className="flex justify-center items-center h-64"
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="flex flex-col gap-8 justify-center items-center">
              <img
                src="https://picsum.photos/id/23/100/100"
                alt=""
                className="rounded-full"
              />
              <p className="w-1/2 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, asperiores iste culpa officiis pariatur ea quae illum
                eaque atque numquam!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-8 justify-center items-center">
              <img
                src="https://picsum.photos/id/5/100/100"
                alt=""
                className="rounded-full"
              />
              <p className="w-1/2 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, asperiores iste culpa officiis pariatur ea quae illum
                eaque atque numquam!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-8 justify-center items-center">
              <img
                src="https://picsum.photos/id/56/100/100"
                alt=""
                className="rounded-full"
              />
              <p className="w-1/2 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, asperiores iste culpa officiis pariatur ea quae illum
                eaque atque numquam!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-8 justify-center items-center">
              <img
                src="https://picsum.photos/id/72/100/100"
                alt=""
                className="rounded-full"
              />
              <p className="w-1/2 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, asperiores iste culpa officiis pariatur ea quae illum
                eaque atque numquam!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-8 justify-center items-center">
              <img
                src="https://picsum.photos/id/12/100/100"
                alt=""
                className="rounded-full"
              />
              <p className="w-1/2 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, asperiores iste culpa officiis pariatur ea quae illum
                eaque atque numquam!
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
