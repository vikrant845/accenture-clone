import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let ran = true;

const InsightCard = ({ data, trigger }) => {

  gsap.registerPlugin(ScrollTrigger);
  
  useEffect(() => {
    if (ran) {
      gsap.from(trigger.current.children, {
        opacity: 0,
        y: '-4rem',
        stagger: 0.2,
        scrollTrigger: {
          trigger: trigger.current,
          start: 'top 30%'
        }
      });
      ran = false;
    }
  }, []);
  
  return (
    data.map((cardData, i) => (
      <div className={ `lg:w-1/4 ${ cardData.class } md:w-full` } key={ `${ cardData.tag }_${ i }` }>
        <img src={ cardData.image } alt={ cardData.tag } className='w-full min-h-[12rem] object-cover' />
        <p className='font-medium text-sm mt-4'>{ cardData.tag }</p>
        <p className='font-light text-3xl mt-4'>{ cardData.title }</p>
        <p className='font-light text-lg mt-4'>{ cardData.description }</p>
      </div>
    ))
  );
}

export default InsightCard;