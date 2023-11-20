const NewsBanner = ({ image, title, subTitle, background=true }) => {
  return (
    <div className="mt-8 w-full flex justify-center items-center">
      <div className={ `lg:w-[75rem] w-[50rem] min-h-36 p-4 flex md:flex-row flex-col ${ background ? 'bg-gray-100' : 'bg-white' }` }>
        { image && <img className="lg:w-56 md:w-44 w-full object-cover" src={ image } /> }
        <span className="inline-block w-1 min-h-full bg-gradient-to-t from-[#00baff] to-[#0f0] lg:mx-8 mx-5" />
        <div className="flex lg:mt-0 mt-8 h-full flex-col justify-between items-start">
          <h4 className='font-bold lg:text-lg text-base tracking-widest'>{ title }</h4>
          <h3 className="lg:text-4xl text-2xl mb-4">{ subTitle }</h3>
          <a href="#" className="text-blue-600 font-bold text-lg hover:underline tracking-wide">READ MORE</a>
        </div>
      </div>
    </div>
  );
}

export default NewsBanner;