import NavBar from "./navbar";
import bigLogo from '../src/assets/images/accenture_big_logo.svg';
import Footer from "./footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import JobBanner from "@/components/custom/job_banner";

const Login = () => {
  return (
    <div className="bg-[#F2F2F2] mt-16">
      <NavBar login={ true } />
      <div className="w-[70vw] mx-auto">
        <JobBanner />
        <div className="flex bg-white shadow-sm p-8">
          <div className="w-1/2">
            <h4 className="font-extrabold text-3xl">Welcome to the Accenture job portal!</h4>
            <p className="my-4">Accenture is always on the lookout for talented people who will help drive 360° Value for our clients, people, shareholders, partners and communities. If you want to solve some of the world's biggest challenges, then Accenture is the place to be.</p>
            <p>Whether you are applying directly, submitting a resume via our employee referral program, or you are one of Accenture's preferred agencies, you can submit your application through this portal and ensure that your application gets immediate attention.</p>
            <h5 className="my-4 font-bold text-2xl">About Accenture</h5>
            <p>We help the world’s leading businesses, governments and other organizations build their digital core, optimize their operations, accelerate revenue growth and enhance citizen services—creating tangible value at speed and scale. We are uniquely able to deliver tangible outcomes because of our broad range of services, solutions and assets across Strategy & Consulting, Technology, Operations, Industry X and Accenture Song.</p>
            <h5 className="my-4 font-bold text-2xl">The work you will do</h5>
            <p>Bring your skills, curiosity and best true self to work. Here, you’ll match your ingenuity with the latest technology to make real, impactful change happen.</p>
            <h5 className="my-4 font-bold text-2xl">The people you will work with</h5>
            <p>With more than 738,000 people serving clients in more than 120 countries, the skills we have are as varied as the cultures, beliefs and backgrounds we represent. You will work with exceptional people in pursuit of one common goal: to create 360° Value by embracing change.</p>
            <h5 className="my-4 font-bold text-2xl">Learn and grow</h5>
            <p>Immerse yourself in unique life-long learning opportunities to grow your skills, industry knowledge and capabilities.</p>
            <h5 className="my-4 font-bold text-2xl">Work environment</h5>
            <p>Discover exceptional next generation learning experiences tailored for forward-thinking individuals at a highly esteemed company that has been honored with a place on Fortune's "100 Best Companies to Work For" list for 14 consecutive years. Accenture received the distinction of being a "Great Place to Work" in nine countries in 2022, including India. We’re also ranked No.1 on Refinitiv Index of World’s Most Diverse and Inclusive Companies, a testimony to how we foster a culture of equality in the workplace.</p>
          </div>
          <div className="w-1/2 pl-24 flex flex-col">
              <h4 className="font-extrabold text-3xl">Sign in as</h4>
              <Tabs defaultValue='candidate' className="my-4 w-full">
                <TabsList className='bg-transparent'>
                  <TabsTrigger value='candidate' className='bg-white border border-gray-400 rounded-none'>Candidate</TabsTrigger>
                  <TabsTrigger value='agency' className='bg-white border border-gray-400 rounded-none'>Agency</TabsTrigger>
                  <TabsTrigger value='employee' className='bg-white border border-gray-400 rounded-none'>Employee</TabsTrigger>
                </TabsList>
                <TabsContent value='candidate'>
                  <div className="w-[16rem] relative">
                    <Link to='/login/candidate'>
                      <button className="p-3 w-full text-sm bg-black font-bold z-[3] relative transition-all duration-500 hover:-translate-x-2 hover:-translate-y-2 text-white shadow-sm">LOGIN</button>
                    </Link>
                    <span className="w-full h-full translate-x-1 translate-y-1 bg-gray-400 z-[2] block absolute top-0"></span>
                  </div>
                  <div className="flex w-[16rem] mt-4 justify-between">
                    <Link to="/signup" className="text-blue-700">Sign Up</Link>
                    <Link to="#" className="text-blue-700">Reset Password</Link>
                  </div>
                </TabsContent>
                <TabsContent value='employee'>
                  <div className="w-[16rem] relative">
                    <button className="p-3 w-full text-sm bg-black font-bold z-[3] relative transition-all duration-500 hover:-translate-x-2 hover:-translate-y-2 text-white shadow-sm">LOGIN</button>
                    <span className="w-full h-full translate-x-1 translate-y-1 bg-gray-400 z-[2] block absolute top-0"></span>
                  </div>
                </TabsContent>
              </Tabs>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Footer subscription={ false } />
      </div>
    </div>
  );
}

export default Login;