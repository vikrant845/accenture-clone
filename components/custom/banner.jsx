import { useNavigate } from "react-router-dom";

const Banner = ({ data, children, buttons=false }) => {

  const navigate = useNavigate();
  
  return (
    <div className={ `${ data.bigVideo ? 'h-[34rem]' : 'h-[26rem]' }` }>
      <video loop autoPlay src={ data.video } className="h-full w-full object-cover z-[2]" />
      <div className="absolute z-[3] text-white lg:left-44 lg:top-36 top-32 left-12">
        { data.title && <h1 className="lg:text-6xl text-4xl font-extrabold mb-6">{ data.title }</h1> }
        { children && children }
        { data.tagLine && <p className={ `text-xl ${ buttons && 'mb-4' }` }>{ data.tagLine }</p> }
        { buttons && (
          <div className="flex flex-wrap">
            <div className="w-fit relative lg:mb-0 mb-4 mr-3" onClick={ () => navigate('./job_search') }>
              <button className="p-3 text-sm min-w-[12rem] bg-white font-bold z-[3] relative transition-all duration-500 hover:-translate-x-2 hover:-translate-y-2 text-black shadow-sm">SEARCH JOBS</button>
              <span className="w-full h-full translate-x-1 translate-y-1 bg-gray-400 z-[2] block absolute top-0"></span>
            </div>
            <div className="w-fit relative lg:mb-0 mb-4 mr-3">
              <button className="p-3 text-sm min-w-[12rem] bg-white font-bold z-[3] relative transition-all duration-500 hover:-translate-x-2 hover:-translate-y-2 text-black shadow-sm">SEARCH BY BUSINESS AREA</button>
              <span className="w-full h-full translate-x-1 translate-y-1 bg-gray-400 z-[2] block absolute top-0"></span>
            </div>
            <div className="w-fit relative lg:mb-0 mb-4">
              <button className="p-3 text-sm min-w-[12rem] bg-white font-bold z-[3] relative transition-all duration-500 hover:-translate-x-2 hover:-translate-y-2 text-black shadow-sm">ACCESS EXISTING APPLICATION</button>
              <span className="w-full h-full translate-x-1 translate-y-1 bg-gray-400 z-[2] block absolute top-0"></span>
            </div>
          </div>
        ) }
      </div>
    </div>
  );
}

export default Banner;