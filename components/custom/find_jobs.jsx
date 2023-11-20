import { Files, Search, Users2 } from "lucide-react";

const FindJobs = () => {
  return (
    <div className="h-16 text-white font-bold fixed bottom-0 left-0 w-full flex bg-gradient-to-t from-[#003fbd] to-[#004dff]">
      <a href="#" className="text-xl w-4/12 flex items-center justify-center border-r-2 border-white">
        <Search className="mr-4" />
        Search All Jobs
      </a>
      <a href="#" className="text-base w-4/12 flex items-center justify-center border-r-2 border-white">
        <Files className="mr-4" />
        READ CAREERS BLOG
      </a>
      <a href="#" className="text-base w-4/12 flex items-center justify-center border-r-2 border-white">
        <Users2 className="mr-4" />
        REGISTER FOR JOB ALERTS
      </a>
    </div>
  );
}

export default FindJobs;