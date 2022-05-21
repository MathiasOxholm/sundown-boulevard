import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Lazy } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/lazy";

const swipes = [
  { id: 1, heading: "Sandwiches and stuff", img: "/images/sandwich.jpg" },
  { id: 2, heading: "Cakes and pies", img: "/images/cake.jpg" },
  { id: 3, heading: "Thai and Asian", img: "/images/thai.jpg" },
];

const GallerySlider = () => {
  return (
    <div className="flex w-full relative aspect-video bg-white overflow-hidden rounded-2xl">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        grabCursor={true}
        navigation={true}
        lazy={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation, Lazy]}
      >
        {swipes.map((swipe) => {
          return (
            <SwiperSlide key={swipe.id}>
              <figure className="flex w-full h-full relative">
                <Image
                  src={swipe.img}
                  className="object-cover"
                  alt={swipe.heading}
                  layout="fill"
                  priority
                />
              </figure>
              <div className="absolute w-full h-full inset-0 bg-dark opacity-50"></div>
              <h2 className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-white text-5xl text-center">
                {swipe.heading}
              </h2>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default GallerySlider;
