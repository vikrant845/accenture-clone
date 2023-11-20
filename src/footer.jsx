import { Separator } from "@/components/ui/separator";
import { Facebook, Linkedin, MoveRight, Twitter, Youtube } from "lucide-react";
import logo from '../src/assets/images/logo_without_text.svg';

const Footer = ({ findJobs, subscription=true }) => {
  return (
    <div className={ `lg:px-44 px-24 py-8 bg-black ${ findJobs ? 'pb-24' : '' }` }>
      { subscription && (
        <>
          <h1 className="text-2xl text-white">Visit our Subscription and Preference Center</h1>
          <button className="text-4xl text-white font-medium flex h-12 relative my-8 before:content-[''] before:p-4 before:w-12 before:rounded-full before:bg-transparent before:border-2 before:border-white before:transition-all before:top-0 before:bottom-0 before:my-auto hover:before:w-[105%] before:absolute before:-left-1 px-4">
            <MoveRight className='mr-4 mt-auto mb-auto w-12 h-12 font-light' />
            Subscribe
          </button>
          <Separator className='bg-gray-400' />
        </>
      ) }
      <div className="flex flex-wrap justify-between underline text-gray-400 items-center py-8">
        <div className="flex justify-between items-center flex-wrap lg:w-4/6 w-full">
          <img src={ logo } alt="Logo Without Text" className="object-cover w-12 h-12" />
          <p className="hover:text-white">ABOUT US</p>
          <p className="hover:text-white">CONTACT US</p>
          <p className="hover:text-white">CAREERS</p>
          <p className="hover:text-white">LOCATIONS</p>
        </div>
        <div className="flex justify-between items-center lg:w-1/6 w-1/3 lg:mt-0 mt-6">
          <div className="w-10 h-10 rounded-full border flex justify-center items-center hover:border-white hover:text-white cursor-pointer border-gray-400 bg-transparant">
            <Linkedin className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 rounded-full border flex justify-center items-center hover:border-white hover:text-white cursor-pointer border-gray-400 bg-transparant">
            <Twitter className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 rounded-full border flex justify-center items-center hover:border-white hover:text-white cursor-pointer border-gray-400 bg-transparant">
            <Facebook className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 rounded-full border flex justify-center items-center hover:border-white hover:text-white cursor-pointer border-gray-400 bg-transparant">
            <Youtube className="w-5 h-5" />
          </div>
        </div>
      </div>
      <Separator className='bg-gray-400' />
      <div className="flex justify-between underline text-xs flex-wrap text-gray-400 items-center pt-8">
        <div className="flex justify-between items-center lg:w-3/6 w-full flex-wrap">
          <p className="hover:text-white cursor-pointer">Privacy Statement</p>
          <p className="hover:text-white cursor-pointer">Terms & Conditions</p>
          <p className="hover:text-white cursor-pointer">Cookie Policy/Settings</p>
          <p className="hover:text-white cursor-pointer">Accessibility Statement</p>
          <p className="hover:text-white cursor-pointer">Sitemap</p>
        </div>
        <div className="flex justify-end items-center lg:w-2/6 w-full">
          <p>© 2023 Accenture. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;