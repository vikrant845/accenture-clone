import { CarouselIndicator } from "@/components/custom/carousel_indicator";
import image from './assets/images/image 1.jpg';
import image1 from './assets/images/image1.jpeg';
import image2 from './assets/images/image2.jpeg';
import image3 from './assets/images/image3.jpeg';
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/parallax';

export const CarouselSection = () => {
  const data = [
    {
      tag: 'Microsoft1',
      heading: 'Bringing blue-sky thinking to global operations.',
      description: 'Rapid growth of the cloud changed Microsoft’s supply chain network significantly. The solution?&nbsp;Data-led transformation to a supply chain control tower.',
      image
    },
    {
      tag: 'Microsoft2',
      heading: 'Bringing blue-sky thinking to global operations.',
      description: 'Rapid growth of the cloud changed Microsoft’s supply chain network significantly. The solution?&nbsp;Data-led transformation to a supply chain control tower.',
      image: image1
    },
    {
      tag: 'Microsoft3',
      heading: 'Bringing blue-sky thinking to global operations.',
      description: 'Rapid growth of the cloud changed Microsoft’s supply chain network significantly. The solution?&nbsp;Data-led transformation to a supply chain control tower.',
      image: image2
    },
    {
      tag: 'Microsoft4',
      heading: 'Bringing blue-sky thinking to global operations.',
      description: 'Rapid growth of the cloud changed Microsoft’s supply chain network significantly. The solution?&nbsp;Data-led transformation to a supply chain control tower.',
      image: image3
    },
    {
      tag: 'Microsoft5',
      heading: 'Bringing blue-sky thinking to global operations.',
      description: 'Rapid growth of the cloud changed Microsoft’s supply chain network significantly. The solution?&nbsp;Data-led transformation to a supply chain control tower.',
      image: image1
    }
  ];

  const [carouselData, setCarouselData] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  return (
    <>
      <CarouselIndicator />
      <Swiper
        pagination={true}
        modules={[Pagination, Navigation]}
        navigation={ true }
        loop
        loopedSlides={ 2 }
        centeredSlides
        slidesPerView={ 4 }
        className="mySwiper z-[3] h-[80vh]"
        updateOnWindowResize
      >
          { carouselData.map((carouselItem, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <div className="flex flex-col p-4 transition" key={i}>
                  <img src={ carouselItem.image } alt="Image" className="object-cover h-64" />
                  <div className={ `${ isActive ? 'visible': 'hidden' }` }>
                    <p className="text-sm font-semibold my-4">{ carouselItem.tag }</p>
                    <h1 className="text-3xl font-light text-blue-600 w-2/3">{ carouselItem.heading }</h1>
                    <p className="mt-4">{ carouselItem.description }</p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          )) }
      </Swiper>
    </>
      // <div></div>
  );
}