import JobBanner from "@/components/custom/job_banner";
import NavBar from "./navbar";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import people from '../src/assets/images/people.png';
import tablet from '../src/assets/images/tablet.png';
import documentAlert from '../src/assets/images/document_alert.png';
import OneColumnSection from "@/components/custom/one_column_section";
import Footer from "./footer";

const getJobDetails = async (jobId) => {
  const res = await axios({
    method: 'GET',
    url: `http://localhost:8000/api/jobs/${ jobId }`
  });
  return res.data.data.job;
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

const JobDetails = ({}) => {
  const { jobId } = useParams();
  const [job, setJob] = useState({});
  const [collapsed, setCollapsed] = useState(true);

  const query = useQuery('job', async () => await getJobDetails(jobId));

  if (query.isLoading) return <p>Loading...</p>
  
  return (
    <>
      <NavBar careers={ true } />
      <div className="bg-[#F2F2F2] mt-16">
        <JobBanner jobDetails={ true } jobData={ query.data } />
        <div className="flex p-12 text-lg bg-white w-[75rem] mx-auto shadow-sm">
          <div className="w-8/12">
            <div className={ `${ collapsed ? 'h-[26rem] overflow-hidden' : '' }` }>
              <h3 className="text-4xl font-bold">Job Description</h3>
              <p className="my-8"><span className="font-bold">About Accenture: </span>Accenture is a global professional services company with leading capabilities in digital, cloud and security. Combining unmatched experience and specialized skills across more than 40 industries, we offer Strategy and Consulting, Technology and Operations services and Accenture Song-all powered by the world's largest network of Advanced Technology and Intelligent Operations centers. Our 699,000 people deliver on the promise of technology and human ingenuity every day, serving clients in more than 120 countries. We embrace the power of change to create value and shared success for our clients, people, shareholders, partners and communities. <a href="#" className="text-blue-700">Visit us at accenture.com</a></p>
              <ul className="pl-8">
                <li className="list-disc">
                  <span className="font-bold">Project Role:  </span> { query.data.role }
                </li>
                <li className="list-disc mb-4">
                  <span className="font-bold">Project Role Description:  </span>
                  <ul className="pl-8">
                    { job['description'] && query.data.description.map((desc, i) => (
                        <li className="list-decimal" key={ `description_${ i }` }>{ desc }</li>
                    )) }
                  </ul>
                </li>
                <li className="list-disc mb-4">
                  <span className="font-bold">Management Level:  </span>
                  { query.data.level }
                </li>
                <li className="list-disc mb-4">
                  <span className="font-bold">Work Experience:  </span>
                  { query.data.experience }
                </li>
                <li className="list-disc mb-4">
                  <span className="font-bold">Work location:  </span>
                  { query.data.city }
                </li>
                <li className="list-disc mb-4">
                  <span className="font-bold">Must Have Skills:</span>
                  <ul className="pl-8">
                    { query.data.mustSkills && query.data.mustSkills.map((skill, i) => (
                      <li className="list-decimal" key={ `Must_${ i }` }>{ skill }</li>
                    )) }
                  </ul>
                </li>
                <li className="list-disc mb-4">
                  <span className="font-bold">Good To Have Skills:</span>
                  <ul className="pl-8">
                    { query.data.goodSkill && query.data.goodSkill.map((skill, i) => (
                      <li className="list-decimal" key={ `Must_${ i }` }>{ skill }</li>
                    )) }
                  </ul>
                </li>
                <li className="list-disc mb-4">
                  <span className="font-bold">Job Requirements</span>
                  <ul className="pl-12">
                    <li className="list-disc mb-4">
                      <span className="font-bold">Key Responsibilities:</span>
                      <ul className="pl-8">
                        { query.data.responsibilities && query.data.responsibilities.map((responsibility, i) => (
                          <li className="list-decimal" key={ `Responsibility_${ i }` }>{ responsibility }</li>
                        )) }
                      </ul>
                    </li>
                    <li className="list-disc mb-4">
                      <span className="font-bold">Technical Experience:</span>
                      <ul className="pl-8">
                        { query.data.technicalExperience && query.data.technicalExperience.map((experience, i) => (
                          <li className="list-decimal" key={ `Tech_${ i }` }>{ experience }</li>
                        )) }
                      </ul>
                    </li>
                    <li className="list-disc mb-4">
                      <span className="font-bold">Professional Experience:</span>
                      <ul className="pl-8">
                        { query.data.professionalExperience && query.data.professionalExperience.map((experience, i) => (
                          <li className="list-decimal" key={ `Pro_${ i }` }>{ experience }</li>
                        )) }
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <p className="text-blue-700 text-xl font-bold cursor-pointer pt-12 bg-gradient-to-t from-white" onClick={ () => setCollapsed(collapsed => !collapsed) }>SHOW { collapsed ? 'MORE' : 'LESS' }</p>
          </div>
          <div className="w-4/12"></div>
        </div>
        <OneColumnSection
          title='Stay connected'
          article={ true }
          articleData={ articleData2 }
          articleVariant='2'
        />
      </div>
      <Footer />
    </>
  );
}

export default JobDetails;