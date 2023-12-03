import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import JobsSection from "./jobs_section";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const formSchema = z.object({
  searchQuery: z.string({ required_error: 'Please enter a search term' })
});

let timer = undefined;
const SearchSection = ({ setJobs }) => {

  const [ fetched, setFetched ] = useState(false);
  const [ searchedJobs, setSearchedJobs ] = useState([]);
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery: ''
    }
  });

  const debounce = (fn, e) => {
    console.log(e);
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn(e);
    }, 1000);
  }

  const queryDB = async (e) => {
    const res = await axios({
      method: 'GET',
      url: `http://localhost:8000/api/jobs/search/${ e.target.value !== '' ? e.target.value : 'all' }`
    });
    if (res.data.message === 'success') {
      setJobs(res.data.data.job);
    }
  }

  const onSubmit = (values, e) => {
    e.preventDefault();
  }
  
  return (
    <>
      <div className="flex justify-center items-center bg-[#F2F2F2] py-20">
        <div className="w-[75rem] md:px-0 mx-14">
          <h1 className="text-7xl font-extrabold mb-8">Search Jobs at Accenture</h1>
          <Form { ...form }>
            <form onSubmit={ form.handleSubmit(onSubmit) }>
              <FormField
                control={ form.control }
                name='searchQuery'
                render={ ({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex lg:flex-row flex-col mb-4">
                        <Input { ...field } onKeyDown={ (event) => debounce(queryDB, event) } placeholder='Use quotation marks for exact matches' className='bg-white border-2 h-12 border-gray-400 rounded-none p-4 text-lg focus-visible:ring-0 focus-visible:ring-offset-0 lg:mb-0 mb-4' />
                        <Button className='bg-black text-white rounded-none h-12 lg:w-auto w-fit lg:mb-0 mb-4' onClick={ queryDB }>
                          <Search className="mr-4 w-5 h-5" />
                          SEARCH
                        </Button>
                        <Button className='bg-black text-white rounded-none lg:ml-4 lg:w-auto w-fit h-12 lg:mb-0 mb-4'>ACCESS EXISTING APPLICATION</Button>
                      </div>
                    </FormControl>
                  </FormItem>
                ) }
              />
            </form>
          </Form>
          <div className="flex md:flex-row flex-col items-center flex-wrap mb-4 font-medium">
            <p className="text-lg mr-2">Popular Searches</p>
            <p className="text-blue-700 border border-blue-700 mr-2 p-1 rounded-3xl md:w-auto w-full text-center lg:mb-0 mb-2">Entry Level Technology Careers</p>
            <p className="text-blue-700 border border-blue-700 mr-2 p-1 rounded-3xl md:w-auto w-full text-center lg:mb-0 mb-2">Entry Level Operations Careers</p>
            <p className="text-blue-700 border border-blue-700 mr-2 p-1 rounded-3xl md:w-auto w-full text-center lg:mb-0 mb-2">Cloud</p>
            <p className="text-blue-700 border border-blue-700 mr-2 p-1 rounded-3xl md:w-auto w-full text-center lg:mb-0 mb-2">SAP</p>
            <p className="text-blue-700 border border-blue-700 mr-2 p-1 rounded-3xl md:w-auto w-full text-center lg:mb-0 mb-2">Salesforce</p>
            <p className="text-blue-700 border border-blue-700 mr-2 p-1 rounded-3xl md:w-auto w-full text-center lg:mb-0 mb-2">Data</p>
            <p className="text-blue-700 border border-blue-700 mr-2 p-1 rounded-3xl md:w-auto w-full text-center lg:mb-0 mb-2">Analytics</p>
            <p className="text-blue-700 border border-blue-700 mr-2 p-1 rounded-3xl md:w-auto w-full text-center lg:mb-0 mb-2">Finance Operations</p>
            <p className="text-blue-700 border border-blue-700 mr-2 p-1 rounded-3xl md:w-auto w-full text-center lg:mb-0 mb-2">Supply Chain</p>
          </div>
          <div className="flex md:flex-row flex-col items-center flex-wrap font-medium">
            <p className="text-lg mr-2">Popular Cities</p>
            <p className="text-blue-700 border border-blue-700 mr-2 p-1 rounded-3xl md:w-auto w-full text-center lg:mb-0 mb-2">Bengaluru</p>
            <p className="text-blue-700 border border-blue-700 mr-2 p-1 rounded-3xl md:w-auto w-full text-center lg:mb-0 mb-2">Chennai</p>
            <p className="text-blue-700 border border-blue-700 mr-2 p-1 rounded-3xl md:w-auto w-full text-center lg:mb-0 mb-2">Coimbatore</p>
            <p className="text-blue-700 border border-blue-700 mr-2 p-1 rounded-3xl md:w-auto w-full text-center lg:mb-0 mb-2">Delhi-NCR</p>
            <p className="text-blue-700 border border-blue-700 mr-2 p-1 rounded-3xl md:w-auto w-full text-center lg:mb-0 mb-2">Hyderabad</p>
            <p className="text-blue-700 border border-blue-700 mr-2 p-1 rounded-3xl md:w-auto w-full text-center lg:mb-0 mb-2">Indore</p>
            <p className="text-blue-700 border border-blue-700 mr-2 p-1 rounded-3xl md:w-auto w-full text-center lg:mb-0 mb-2">Jaipur</p>
            <p className="text-blue-700 border border-blue-700 mr-2 p-1 rounded-3xl md:w-auto w-full text-center lg:mb-0 mb-2">Kolkata</p>
            <p className="text-blue-700 border border-blue-700 mr-2 p-1 rounded-3xl md:w-auto w-full text-center lg:mb-0 mb-2">Mumbai</p>
            <p className="text-blue-700 border border-blue-700 mr-2 p-1 rounded-3xl md:w-auto w-full text-center lg:mb-0 mb-2">Pune</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchSection;