import SearchSection from "@/components/custom/search_section";
import NavBar from "./navbar";
import JobsSection from "@/components/custom/jobs_section";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import OneColumnSection from "@/components/custom/one_column_section";
import people from '../src/assets/images/people.png';
import tablet from '../src/assets/images/tablet.png';
import documentAlert from '../src/assets/images/document_alert.png';
import Footer from "./footer";

async function getJobData() {
  try {
    const res = await axios({
      method: 'GET',
      url: import.meta.env.VITE_ENVIRONMENT === 'development' ? `${ import.meta.env.VITE_DEV_BASE_URL }/jobs` : `${ import.meta.env.VITE_PROD_BASE_URL }/jobs`,
    });
    return res.data.data.jobs;
  } catch(err) {
    return err;
  }
}

const articleData2 = [
  {
    image: people,
    title: 'Join Our Team',
    description: 'Search open positions that match your skills and interest. We look for passionate, curious, creative and solution-driven team players.',
    link: 'SEARCH ACCENTURE JOBS',
    variant: '2'
  },
  {
    image: tablet,
    title: 'Keep Up to Date',
    description: 'Stay ahead with careers tips, insider perspectives, and industry-leading insights you can put to use today–all from the people who work here.',
    link: 'READ CAREERS BLOG',
    variant: '2'
  },
  {
    image: documentAlert,
    title: 'Job Alert Emails',
    description: "Personalize your subscription to receive job alerts, latest news and insider tips tailored to your preferences. See what exciting and rewarding opportunities await.",
    link: 'REGISTER FOR JOB ALERTS',
    variant: '2'
  }
];

const JobSearch = () => {
  const [jobs, setJobs] = useState([]);
  const query = useQuery('jobs', getJobData);
  
  return (
    <div className="mt-16">
      <NavBar careers={ true } />
      <SearchSection setJobs={ setJobs } />
      <div className="flex items-center justify-center min-h-[30rem]">
        { query.isLoading ?
          <p className="text-6xl text-[#A100FF]">Loading....</p>
          :
          <div className='py-10 font-bold'>
            <div className="lg:w-[75rem] lg:px-0 w-full mx-auto px-16">
              <JobsSection title='Latest Jobs' jobs={ query.data } recents={ false } actions={ true } />
            </div>
          </div>
        }
      </div>
      <OneColumnSection
        title='Stay connected'
        article={ true }
        articleData={ articleData2 }
        articleVariant='2'
      />
      <Footer subscription={ false } />
    </div>
  );
}

export default JobSearch;