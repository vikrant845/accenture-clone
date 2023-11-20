import image from '../../src/assets/images/image 1.jpg';
import { SwiperSlide } from "swiper/react";

const CarouselItem = ({ carouselItem }) => {
  return (
    <SwiperSlide>
      <div className="flex flex-col p-4 transition">
        <img src={ image } alt="Image" className="object-cover" />
        <div>
          <p className="text-sm font-semibold my-4">{ carouselItem.tag }</p>
          <h1 className="text-3xl font-light text-blue-600 w-2/3">{ carouselItem.heading }</h1>
          <p className="mt-4">{ carouselItem.description }</p>
        </div>
      </div>
    </SwiperSlide>
  );
}

export default CarouselItem;