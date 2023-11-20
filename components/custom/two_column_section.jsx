import { Facebook, Linkedin, Share2, Twitter, Youtube } from 'lucide-react';
import { Separator } from '../ui/separator';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const TwoColumnSection = ({
  title=null,
  description=null,
  links=false,
  video=false,
  note=false,
  image=false,
  noteText=null,
  children=null,
  videoData=null,
  imageLink=null,
  background=true,
  reverse=false
}) => {

  const [ expanded, setExpanded ] = useState(false);

  const width = useSelector((state) => state.viewport.width);
  
  return (
    <div className={ `py-12 flex justify-center ${ background ? 'bg-gray-100' : 'bg-white' } mt-8` }>
      <div className="lg:w-[75rem] w-full lg:px-0 px-12">
        <h1 className="lg:text-5xl text-3xl font-bold">{ title }</h1>
        <div className={ `${ width < 1024 ? 'flex-col' : 'flex' } ${ reverse && 'lg:flex-row-reverse flex-col-reverse' } mt-8` }>
          <div className="lg:w-1/2 w-full">
            { description && description.map((para, i) => (
              <div key={ `para_${ i }` } className='text-lg'>
                {
                  typeof para === 'string' && (
                    <p className="mb-4">{ para }</p>
                  )
                }
                {
                  typeof para === 'object' && (
                    <>
                      <p className='font-bold'>{ para.tag }</p>
                      <p className='mb-8'>{ para.value }</p>
                    </>
                  )
                }
              </div>
            )) }
            { children }
          </div>
          <div className={ `lg:w-1/2 w-full ${ reverse ? 'lg:pr-8' : 'lg:pl-8' } mt-8 lg:mt-0` }>
            { video && videoData && (
              <div>
                <iframe width="560" height="315" src={ videoData.link } title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                <h3 className='font-extrabold text-2xl my-4'>{ videoData.title }</h3>
                <p className='text-sm mb-4'>{ videoData.description }</p>
                { videoData.transcript && <a href="#" className="text-blue-600 text-lg hover:underline tracking-wide">View Transcript</a> }
              </div>
            ) }
            { image && (
              <img src={ imageLink } alt='' className='w-full object-cover' />
            ) }
            { note && (
              <div className="border-2 border-[#E3E3E3] relative p-12">
                <p className='text-[2.5rem] leading-[1.2] border-l-4 pl-8 border-l-[#A100FF]'>{ noteText }</p>
                <div className="absolute bg-gray-200 border-2 rounded-[2.5rem] border-[#E3E3E3] flex flex-col items-center" style={{ left: 'calc(100% - 2rem)', top: 'calc(50% - 2rem)' }}>
                  <div className="w-20 h-20 rounded-[2.5rem] flex justify-center items-center shadow-slate-500 cursor-pointer shadow-md" onClick={ () => setExpanded(expanded => !expanded) }>
                    <Share2 className='text-[#4A4A4A] w-8 h-8 mx-auto rounded-full' />
                  </div>
                  <div className={ `px-4 transition-all ${ expanded ? 'h-fit' : 'h-0 overflow-hidden' } flex flex-col items-center` }>
                    <p className='font-bold text-sm pt-8'>SHARE</p>
                    <div className="border-2 border-blue-700 my-4 w-10 h-10 rounded-full flex justify-center items-center">
                      <Linkedin className='text-blue-700' />
                    </div>
                    <div className="border-2 border-blue-700 my-4 w-10 h-10 rounded-full flex justify-center items-center">
                      <Twitter className='text-blue-700' />
                    </div>
                    <div className="border-2 border-blue-700 my-4 w-10 h-10 rounded-full flex justify-center items-center">
                      <Facebook className='text-blue-700' />
                    </div>
                  </div>
                </div>
              </div>
            ) }
          </div>
        </div>
        { links && (
          <>
            <Separator className='bg-[#CCC]' />
            <div className="flex mt-8">
              <p className='font-bold tracking-widest text-xl mr-4'>SHARE</p>
              <div className="w-8 h-8 rounded-full flex justify-center items-center border-blue-700 text-blue-700 border-2 bg-transparent mr-4">
                <Linkedin className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-full flex justify-center items-center border-blue-700 text-blue-700 border-2 bg-transparent mr-4">
                <Twitter className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-full flex justify-center items-center border-blue-700 text-blue-700 border-2 bg-transparent mr-4">
                <Facebook className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-full flex justify-center items-center border-blue-700 text-blue-700 border-2 bg-transparent mr-4">
                <Youtube className="w-4 h-4" />
              </div>
            </div>
          </>
        ) }
      </div>
    </div>
  );
}

export default TwoColumnSection;