import { Star } from "lucide-react";
import moment from "moment/moment";
import { Link } from "react-router-dom";

const JobCard = ({ data, border, listView=false }) => {
  
  return (
    <div className={ `${ listView ? 'lg:w-full w-full' : 'lg:w-1/3 sm:w-1/2 w-full' } pr-4 mb-4` }>
      <div className="w-full border-t-4 border-l-2 border-r-2 border-b-2 border-l-[#F2F2F2] border-r-[#F2F2F2] border-b-[#F2F2F2] min-h-full bg-white border-[#a100ff] flex flex-col p-5">
        <div className="flex justify-between">
          <div className="flex items-center">
            <p className="text-xs font-bold">{ data.country }</p>
            <span className="block mx-3 h-3 w-px bg-[#000]" />
            <p className="text-xs font-bold">{ data.city }</p>
          </div>
          <div className="flex flex-col justify-center">
            <Star />
            <p className="text-xs font-bold mt-2">SAVE</p>
          </div>
        </div>
        <Link className="text-2xl font-extrabold hover:underline" to={ `/careers/job/${ data._id }` }>{ data.name }</Link>
        <div className="mt-auto">
          <p className="font-bold mt-4">{ data.experience }</p>
          <p className="font-bold my-2">Business Area: <span className="font-normal">{ data.role }</span></p>
          <p className="text-sm font-light italic">Posted { `${ moment(data.datePosted).fromNow() }` }</p>
          {/* <p className="text-sm font-light italic">Posted { `${ processDate(data.datePosted) }` }</p> */}
        </div>
      </div>
    </div>
  );
}

export default JobCard;