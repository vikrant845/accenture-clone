import { Link } from 'react-router-dom';
import bigLogo from '../../src/assets/images/accenture_big_logo.svg';
import { Info, Share, Star } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import moment from 'moment/moment';

const JobBanner = ({ jobDetails=false, jobData={} }) => {

  const user = useSelector(state => state.user.user);
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    user.applications.map(application => {
      if (application.job === jobData._id) setDisabled(true);
    })
  }, []);
  
  return (
    <div className="max-w-[75rem] mx-auto">
      <div className="flex items-center">
        { !jobDetails && (
          <div className="w-1/2 flex flex-col">
            <h1 className="text-7xl font-extrabold">Careers</h1>
            <h1 className="text-7xl font-extrabold">at Accenture</h1>
            <ul className="flex items-center py-8">
              <li className="text-blue-700 underline">Home</li>
              <li className="px-3">|</li>
              <li className="text-blue-700 underline">Search For Jobs</li>
            </ul>
          </div>
        ) }
        { jobDetails && (
          <div className="w-2/3 flex flex-col">
            <div className="flex items-center">
              <Link to='#' className="text-blue-700 font-bold hover:underline">Back to Previous Job</Link>
              <span className="h-4 w-[2px] mx-2 bg-gray-400"></span>
              <Link to='#' className="text-blue-700 font-bold hover:underline">New Job Search</Link>
            </div>
            <h1 className='text-5xl font-bold my-8'>{ jobData.name }</h1>
            <div className="flex items-center">
              <p className='font-bold text-sm'>{ jobData.city }</p>
              <span className="h-4 w-[2px] mx-4 bg-gray-400"></span>
              <p className='font-bold text-sm'>JOB NO: { Math.floor(jobData.number) }</p>
            </div>
            <div className="flex my-8 items-center justify-between w-5/6">
              <div className="w-[10rem] relative">
                <Link to={ `/job/${ jobData._id }/apply` }>
                  <button disabled={ disabled } className="p-3 w-full text-sm bg-black disabled:pointer-events-none disabled:opacity-50 font-bold z-[3] relative transition-all duration-500 hover:-translate-x-2 hover:-translate-y-2 text-white shadow-sm">
                      APPLY NOW
                      { disabled && <p>Applied On { new Date(user.applications.filter(application => application.job === jobData._id)[0].createdAt).toDateString() }</p> }
                  </button>
                </Link>
                <span className="w-full h-full translate-x-1 translate-y-1 bg-gray-400 z-[2] block absolute top-0"></span>
              </div>
              <div className="flex text-blue-700 items-center font-bold">
                <Star className='mr-2' />
                SAVE JOB
              </div>
              <div className="flex text-blue-700 items-center font-bold">
                <Info className='mr-2' />
                REGISTER FOR JOB ALERTS
              </div>
              <div className="flex text-blue-700 items-center font-bold">
                <Share className='mr-2 w-6 h-6' />
                SHARE
              </div>
            </div>
          </div>
        ) }
        <div className={ `${ jobDetails ? 'w-1/3' : 'w-1/2' } flex justify-end h-96` }>
          <img src={ bigLogo } className="h-full" />
        </div>
      </div>
    </div>
  );
}

export default JobBanner;