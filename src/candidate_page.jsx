import JobBanner from "@/components/custom/job_banner";
import NavBar from "./navbar";
import Footer from "./footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import JobsSection from "@/components/custom/jobs_section";
import axios from "axios";
import { useQuery } from "react-query";

const CandidatePage = () => {

  const { user, token } = useSelector(state => state.user);
  const navigate = useNavigate();
  const [appliedJobs, setAppliedJobs] = useState([]);

  const query = useQuery('appliedJobs', async () => await getAppliedJobs(user._id, token));
  
  const getAppliedJobs = async (userId, token) => {
    const res = await axios({
      method: 'GET',
      url: import.meta.env.VITE_ENVIRONMENT === 'development' ? `${ import.meta.env.VITE_DEV_BASE_URL }/users/appliedJobs/${ userId }` : `${ import.meta.env.VITE_DEV_PROD_URL }/users/appliedJobs/${ userId }`,
      headers: {
        'Authorization': `Bearer ${ token }`
      }
    });
    setAppliedJobs(res.data.data.appliedJobs.map(application => application.job));
  }
  
  useEffect(() => {
    if (!user) navigate('/login');
  }, [user]);

  if (query.isLoading) return <p>Loading...</p>
  
  return (
    user && (
      <>
        <NavBar login={ true } job={ true } />
        <div className="mt-16 bg-[#F2F2F2]">
          <div className="w-[75rem] mx-auto">
            <JobBanner />
            <div className="bg-white shadow-sm p-12 min-h-screen">
              <p>Hi { user.firstName }, Thank you for your interest in Accenture. Use our "Search for jobs" option to look for opportunities that suit you.</p>
              <JobsSection recents={ false } jobs={ appliedJobs } />
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  );
}

export default CandidatePage;