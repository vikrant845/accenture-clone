import image1 from '../src/assets/images/image1.jpeg';
import image2 from '../src/assets/images/image2.jpeg';
import image3 from '../src/assets/images/image3.jpeg';
import heroVideo from './assets/videos/hero.mp4';
import { ChevronRight, MoveRight } from 'lucide-react';
import { CarouselSection } from './carousel';
import dancingGirlVideo from './assets/videos/Accenture-dancing-girl.mp4';
import video from './assets/videos/video_reveal.mp4';
import { useEffect, useRef, useState} from 'react';
import { gsap } from 'gsap';
import Footer from './footer';
import IndexSection from '@/components/custom/index_section';
import InsightsSection from '@/components/custom/insights_section';
import NavBar from './navbar';
import { useSelector } from 'react-redux';

const indexData = {
  image: true,
  centered: false,
  progress: true,
  links: ['Case studies & stories', 'Join our team', 'Ideas that make an impact', 'Leading through change']
};

const insightCardData = [
  {
    image: image1,
    tag: 'Technology',
    title: 'Technology Vision 2023',
    description: 'When Atoms meet Bits: The foundations of our new reality.',
    class: ''
  },
  {
    image: image2,
    tag: 'Talent & Organization',
    title: 'Refocus your talent lens',
    description: 'Discover how multinational companies can unlock the potential of more labor markets and access highly skilled talent.',
    class: 'mt-[3rem]'
  },
  {
    image: image3,
    tag: 'Song',
    title: 'A life-centric approach to growth',
    description: 'Accenture Song identifies challenges and opportunities for growth across key areas across the front office.',
    class: 'mt-[6rem]'
  },
  {
    image: image2,
    tag: 'Cloud',
    title: 'Five practices to thrive on the Cloud Continuum',
    description: 'Accenture details 5 cloud transformation practices to help companies extract maximum value.',
    class: 'mt-[9rem]'
  },
];

const Home = () => {
  const imageReveal = useRef(null);
  const title = useRef(null);
  const videoReveal = useRef(null);
  const videoTitle = useRef(null);
  const scaleVideo = useRef(null);
  const [revealTextVisible, setRevealTextVisible] = useState(false);
  
  useEffect(() => {
    const containerTop = imageReveal.current.offsetTop;
    const scaleRatio = Math.pow(10, 4/imageReveal.current.clientHeight);
    const videoScaleRatio = Math.pow(10, 4/videoReveal.current.clientHeight);
    const videoTop = videoReveal.current.offsetTop;
    
    const handleScroll = () => {
      if (window.scrollY > containerTop && window.scrollY < containerTop + imageReveal.current.getBoundingClientRect().height) {
        let scrollPosition = window.scrollY - containerTop;
        let scaleAmount = Math.pow(scaleRatio, scrollPosition);
        title.current.style.transform = `scale(${ scaleAmount })`;
        if (scaleAmount > 2) {
          title.current.style.transform = `scale(25)`;
          if (window.scrollY > containerTop + 300 && !revealTextVisible) setRevealTextVisible(true);
        }
      } if (window.scrollY > videoTop) {
        let scrollPosition = window.scrollY - videoTop;
        let scaleAmount = Math.pow(videoScaleRatio, scrollPosition);
        videoTitle.current.style.transform = `scale(${ 25 - scaleAmount })`;
        if (scaleAmount > 16) {
          videoTitle.current.style.transform = `scale(1)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (revealTextVisible) {
      gsap.from('.reveal_text', {
        y: '4rem',
        opacity: 0,
        stagger: 0.2
      });
    }
  }, [revealTextVisible]);
  
  return (
    <>
      <NavBar />
      <IndexSection data={ indexData } />
      <div className="overflow-hidden">
        <video muted loop autoPlay src={ heroVideo } className='min-h-screen min-w-full h-[80vh] object-cover' />
      </div>
      <CarouselSection />
      <div className="w-full xl:h-[160vh] mt-12" ref={ imageReveal }>
        <div className='h-[90vh] overflow-hidden xl:sticky xl:top-32 bg-white flex xl:flex-row flex-col justify-center items-start'>
          <ChevronRight className='w-[45rem] h-[45rem] xl:absolute origin-[62%_50%]' ref={ title } />
          <div className='relative'>
            <video src={ dancingGirlVideo } alt="" className='xl:mix-blend-screen' />
            { revealTextVisible && (
              <div className="flex absolute w-80 left-20 top-20 flex-col text-white text-xl z-[4]">
                <p className="text-3xl h-fit reveal_text">Reimagine your career</p>
                <p className='my-4 h-fit reveal_text'>Your career is about what you want to be and who you want to be. It’s about bringing your skills, your curiosity and  your best true self to your work.</p>
                <p className='h-fit reveal_text'>Here, you’ll match your ingenuity with the latest technology to make incredible things.</p>
                <p className='my-4 h-fit reveal_text'>Together, let’s create positive, long-lasting value.</p>
                <button className="flex h-fit reveal_text relative before:content-[''] before:p-4 before:w-0 before:rounded-full before:bg-transparent before:border before:border-white before:transition-all before:top-0 before:bottom-0 before:my-auto hover:before:w-[105%] before:absolute before:-left-1 px-4">
                  <MoveRight className='mr-4 text-white font-light' />
                  search and apply
                </button>
              </div>
            ) }
          </div>
        </div>
      </div>
      <InsightsSection data={ insightCardData } centered={ true } title='Insights to help you stay ahead of change' description='From insights to action, the path to 360° value starts here.' />
      <div className="w-full xl:h-[160vh] mt-12" ref={ videoReveal }>
        <div className={ `flex xl:flex-row flex-col justify-center items-start w-full h-[90vh] overflow-hidden xl:sticky xl:top-[120px] bg-white` } ref={ scaleVideo } >
          <ChevronRight className={ `w-[45rem] h-[45rem] border-5 border-black xl:absolute origin-[62%_50%] scale-[25]` } ref={ videoTitle } />
          <div className="relative">
            <video src={ video } autoPlay loop className='xl:mix-blend-screen object-fill w-full' />
            { revealTextVisible && (
              <div className="flex absolute w-80 left-20 bottom-20 flex-col text-white text-xl">
                <p className="text-3xl h-fit reveal_text">Reimagine your career</p>
                <p className='my-4 h-fit reveal_text'>Your career is about what you want to be and who you want to be. It’s about bringing your skills, your curiosity and  your best true self to your work.</p>
                <p className='h-fit reveal_text'>Here, you’ll match your ingenuity with the latest technology to make incredible things.</p>
                <p className='my-4 h-fit reveal_text'>Together, let’s create positive, long-lasting value.</p>
                <button className="flex h-fit reveal_text relative before:content-[''] before:p-4 before:w-0 before:rounded-full before:bg-transparent before:border before:border-white before:transition-all before:top-0 before:bottom-0 before:my-auto hover:before:w-[105%] before:absolute before:-left-1 px-4">
                  <MoveRight className='mr-4 text-white font-light' />
                  search and apply
                </button>
              </div>
            ) }
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;