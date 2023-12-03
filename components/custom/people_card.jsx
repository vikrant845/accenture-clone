const PeopleCard = ({ data }) => {
  return (
    <div className="lg:w-1/3 md:w-1/2 w-full pr-8 mb-8 min-h-full flex flex-col items-end lg:mb-0">
      <div className="w-full bg-white flex flex-col">
        <img src={ data.image } className="w-full min-h-[12rem] object-cover" />
      </div>
      <div className="flex relative p-6 h-full bg-white w-11/12 flex-col before:content-[''] before:absolute before:top-0 before:-left-[2rem] before:border-b-[1rem] before:border-l-[1rem] before:border-t-[1rem] before:border-r-[1rem] before:border-b-transparent before:border-l-transparent before:border-t-black before:border-r-black">
        <h3 className="font-bold text-3xl">{ data.title }</h3>
        <p className="my-4">{ data.description }</p>
        <a href="#" className="text-lg font-normal text-blue-700 mt-auto">LEARN MORE</a>
      </div>
    </div>
  );
}

export default PeopleCard;