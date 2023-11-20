import JobBanner from "@/components/custom/job_banner";
import NavBar from "./navbar";
import Footer from "./footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CandidatePage = () => {

  const user = useSelector(state => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/login');
  }, [user]);
  
  return (
    user && (
      <>
        <NavBar login={ true } job={ true } />
        <div className="mt-16 bg-[#F2F2F2]">
          <div className="w-[75rem] mx-auto">
            <JobBanner />
            <div className="bg-white shadow-sm p-12 min-h-screen">
              <p>Hi { user.firstName }, Thank you for your interest in Accenture. Use our "Search for jobs" option to look for opportunities that suit you.</p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  );
}

export default CandidatePage;