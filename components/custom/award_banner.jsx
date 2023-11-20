const AwardBanner = ({ children, icon, title, description }) => {
  return (
    <div className="my-12">
      <div className='flex lg:flex-row flex-col lg:items-center items-start justify-between mx-auto p-4 bg-gray-200 h-24 w-[75vw] shadow-lg'>
        <div className="flex lg:items-center items-start h-full">
          <img src={ icon } className="object-cover md:block hidden h-4/5 mr-8" />
          <h4 className="font-bold lg:text-xl text-base mr-8">{ title }</h4>
          <p className="lg:text-xl text-base">{ description }</p>
        </div>
        <div className="flex justify-end lg:items-center lg:ml-0 md:ml-20 ml-0 items-start">
          <a href="#" className="lg:text-xl text-base text-blue-700 font-bold">READ MORE</a>
        </div>
      </div>
    </div>
  );
}

export default AwardBanner;