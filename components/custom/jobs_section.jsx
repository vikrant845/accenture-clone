import { FileText, Filter } from "lucide-react";
import { Button } from "../ui/button";
import JobCard from "./job_card";
import { useState } from "react";
import { Link } from "react-router-dom";

const jobData = [
  {
    country: 'INDIA',
    city: 'PUNE',
    jobName: 'SAP BASIS Administration Application Developer',
    industry: 'Software Engineering',
    businessArea: 'Technology',
    postedOn: '2023/10/20'
  },
  {
    country: 'INDIA',
    city: 'PUNE',
    jobName: 'SAP BASIS Administration Application Developer',
    industry: 'Software Engineering',
    businessArea: 'Technology',
    postedOn: '2023/10/25'
  },
  {
    country: 'INDIA',
    city: 'PUNE',
    jobName: 'SAP ABAP Development Application Developer',
    industry: 'Software Engineering',
    businessArea: 'Technology',
    postedOn: '2023/10/27'
  },
  {
    country: 'INDIA',
    city: 'PUNE',
    jobName: 'SAP ABAP Development Application Developer',
    industry: 'Software Engineering',
    businessArea: 'Technology',
    postedOn: '2023/10/27'
  },
  {
    country: 'INDIA',
    city: 'PUNE',
    jobName: 'Microsoft SQL Server Analysis Services (SSAS) Application Developer',
    industry: 'Software Engineering',
    businessArea: 'Technology',
    postedOn: '2023/10/19'
  }
];

const JobsSection = ({ children, background, title, description, explore=false, recents=true, recentData={}, jobs={}, actions=false }) => {
  
  const [listView, setListView] = useState(false);
  return (
    <div>
      <div className='flex justify-between items-center '>
        <h1 className="text-5xl">{ title }</h1>
        { explore && <Link to="/careers/job_search" className="text-lg text-blue-700">EXPLORE MORE JOBS</Link> }
      </div>
      { description && <p className="my-4 text-lg font-normal">{ description }</p> }
      { actions && (
        <div className="flex lg:flex-row flex-col font-normal justify-between my-6 items-start">
          <div className="flex items-center">
            <p className="mr-4">SORT BY:</p>
            <p className="font-bold">MOST RECENT</p>
            <span className="h-4 w-px bg-black mx-2" />
            <p className="text-blue-700">MOST RELEVANT</p>
          </div>
          <div className="flex lg:flex-row flex-col lg:items-center">
            <Button className='lg:min-w-[8rem] px-4 py-2 border-2 border-black rounded-none bg-transparent text-black hover:bg-transparent hover:border-gray-400 font-bold lg:mr-4 mb-4 lg:mb-0 lg:mt-0 mt-4'>NEW JOB SEARCH</Button>
            <Button className='lg:min-w-[8rem] px-4 py-2 border-2 border-black rounded-none bg-transparent text-black hover:bg-transparent hover:border-gray-400 font-bold lg:mr-4 mb-4 lg:mb-0' onClick={ () => setListView(listView => !listView) }>
              <FileText className="mr-2" />
              LIST VIEW
            </Button>
            <Button className='lg:min-w-[8rem] px-4 py-2 border-2 border-black rounded-none bg-transparent text-black hover:bg-transparent hover:border-gray-400 font-bold lg:mr-4 mb-4 lg:mb-0'>
              <Filter className="mr-2" />
              FILTER RESULTS
            </Button>
          </div>
        </div>
      ) }
      <div className="flex justify-between flex-wrap">
        { jobs.map(job => (
          <JobCard listView={ listView } key={ job._id } data={ job } border={ !background } />
        )) }
      </div>
      { recents && (
        <div className="mt-8">
          <h1 className="text-5xl">Recently Viewd Jobs</h1>
          <p className="font-normal my-6">Continue your application to one of your recently viewed jobs, or <a href="#" className="text-blue-700 underline">search all jobs.</a></p>
          <div className="flex justify-between flex-wrap">
            <JobCard data={ jobData[0] } border={ !background } />
            <JobCard data={ jobData[2] } border={ !background } />
            <JobCard data={ jobData[4] } border={ !background } />
          </div>
        </div>
      ) }
    </div>
  );
}

export default JobsSection;