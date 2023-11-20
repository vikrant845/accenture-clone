import { MoveRight } from 'lucide-react';
import InsightCard from '@/components/custom/insight_card';
import { useRef } from 'react';

const InsightsSection = ({ data, centered, title, description=null }) => {
  const trigger = useRef();
  
  return (
    <div>
      <div className={ `flex w-full flex-col ${ centered ? 'justify-center items-center' : '' } py-12` }>
        { title && <h1 className='text-center lg:text-5xl md:text-4xl font-bold w-3/5'>{ title }</h1> }
        { description && <p className='font-light mt-6 lg:text-xl md:text-lg'>{ description }</p> }
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex lg:flex-row sm:flex-col lg:w-4/6 sm:w-5/6 w-5/6 flex-col " ref={ trigger }>
          <InsightCard data={ data } trigger={ trigger } />
        </div>
        <div className="py-8 w-4/6 flex justify-end">
          <button className="flex relative before:content-[''] before:p-4 before:w-0 before:rounded-full before:bg-transparent before:border before:border-blue-500 before:transition-all before:top-0 before:bottom-0 before:my-auto hover:before:w-[105%] before:absolute before:-left-1 px-4">
            <MoveRight className='mr-4 text-blue-500 font-light' />
            explore latest insights
          </button>
        </div>
      </div>
    </div>
  );
}

export default InsightsSection;