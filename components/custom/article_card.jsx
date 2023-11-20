const ArticleCard = ({ data, variant, background=false }) => {
  return (
    <div className="lg:w-1/3 relative w-1/2 pr-4 lg:mb-8 mb-32">
      <div className={ `w-full relative ${ variant === '1' ? 'border-t-4 border-[#a100ff]' : 'border border-gray-300 shadow-md' } pt-24 relative ${ background ? 'bg-[#F2F2F2]' : 'bg-white' } min-h-full flex flex-col p-5` }>
        <div className={ `w-11/12 absolute left-0 right-0 mx-auto ${ variant === '2' ? '-top-[5rem]' : '-top-[8rem]' } max-h-[12rem]` }>
          <img src={ data.image } className="object-cover" />
        </div>
        <h2 className="text-2xl font-extrabold">{ data.title }</h2>
        <p className="font-normal my-4">{ data.description }</p>
        <a href="#" className="text-lg font-bold text-blue-700 underline mt-auto">{ data.link ? data.link : 'LEARN MORE' }</a>
      </div>
    </div>
  );
}

export default ArticleCard;