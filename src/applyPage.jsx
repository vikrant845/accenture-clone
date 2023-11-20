import JobBanner from "@/components/custom/job_banner";
import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "./navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronDown, Folder } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Footer from "./footer";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { useSelector } from "react-redux";

const getJobDetails = async (jobId) => {
  const res = await axios({
    method: 'GET',
    url: `http://localhost:8000/api/jobs/${ jobId }`
  });
  return res.data.data.job;
}

const formSchema = z.object({
  resume: z.string(),
  firstName: z.string({ required_error: 'First Name Is Required' }),
  middleName: z.string(),
  lastName: z.string({ required_error: 'Last Name Is Required' }),
  gender: z.enum(['Male', 'Female', 'Transgender Male', 'Transgender Female', 'Others']),
  dob: z.string({ required_error: 'Date of birth is required' }),
  email: z.string({ required_error: 'Email is required' }).email({ message: 'Invalid email' }),
  prevWorked: z.enum(['Yes', 'No']),
  pincode: z.string({ required_error: 'Pin code is required' }),
  presentAddress: z.string({ required_error: 'Address is required' }),
  residentialNumber: z.string({ required_error: 'Residential or mobile number is required' }),
  mobileNumber: z.string({ required_error: 'Residential or mobile number is required' }),
  country: z.string({ required_error: 'Country Is Required' }),
  state: z.string({ required_error: 'State Is Required' }),
  city: z.string({ required_error: 'City Is Required' }),
  nationality: z.string({ required_error: 'Nationality Is Required' }),
  notice: z.enum(['0-15 days', '16-30 days', '31-60 days', '61-90 days', '90+ days']),
  relevantExp: z.string({ required_error: 'Experience is required' }),
  currSalary: z.string(),
  expectedSalary: z.string(),
  primarySkill: z.string(),
  skillPutInPractice: z.string(),
  additionalSkills: z.object({
    skill: z.string(),
    experience: z.string(),
    yearPutInPractice: z.string()
  }).array(),
  totalExperience: z.string(),
  highestEducationalQualification: z.string({ required_error: 'Educational Qualification Required' }),
  graduationYear: z.string(),
  specialization: z.string({ required_error: 'Specialization is required' }),
  panAvailable: z.enum(['Yes', 'No']),
  panNumber: z.string(),
  passportAvailable: z.enum(['Yes', 'No']),
  collegeName: z.string(),
  organizationName: z.string(),
  howDidYouHear: z.string(),
  disability: z.string(),
  whatsappAlerts: z.boolean()
});

const ApplyPage = () => {
  const { jobId } = useParams();
  const query = useQuery('job', async () => await getJobDetails(jobId));
  const {user, token} = useSelector(state => state.user);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('Select Gender');
  const [prevWorkedOpen, setPrevWorkedOpen] = useState(false);
  const [prevWorked, setPrevWorked] = useState('Select Yes Or No');
  const [noticeOpen, setNoticeOpen] = useState(false);
  const [notice, setNotice] = useState('Select Notice Period');
  const [panOpen, setPanOpen] = useState(false);
  const [pan, setPan] = useState('Select Notice Period');
  const [passportOpen, setPassportOpen] = useState(false);
  const [passport, setPassport] = useState('Select Notice Period');
  const [loading, setLoading] = useState(false);
  const [additionalSkills, setAdditionalSkills] = useState([{ skill: '', experience: '', yearPutInPractice: '' }]);
  const fileInput = useRef(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      resume: '',
      country: '',
      state: '',
      city: '',
      nationality: '',
      notice: '0-15 days',
      relevantExp: '',
      currSalary: '',
      expectedSalary: '',
      primarySkill: '',
      skillPutInPractice: '',
      additionalSkills: [{}],
      totalExperience: '',
      highestEducationalQualification: '',
      graduationYear: '',
      specialization: '',
      panAvailable: 'No',
      panNumber: '',
      passportAvailable: 'No',
      collegeName: '',
      organizationName: '',
      howDidYouHear: '',
      disability: '',
      whatsappAlerts: false,
      firstName: '',
      middleName: '',
      lastName: '',
      gender: '',
      dob: '',
      email: '',
      prevWorked: '',
      pincode: 0,
      presentAddress: '',
      residentialNumber: '',
      mobileNumber: ''
    }
  });

  const onSubmit = async (values, e) => {
    try {
      const res = await axios({
        url: 'http://localhost:8000/api/application',
        method: 'POST',
        data: { ...values, user: user._id, job: query.data._id },
        headers: {
          'Authorization': `Bearer ${ token }`
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  const onSelect = (form, field, value, openFn, valueFn) => {
    valueFn(value);
    form.setValue(field, value);
    openFn(false);
  }
  const [activeTab, setActiveTab] = useState('resume');

  const uploadFile = async (e) => {
    let file;
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.current.files[0]);
    reader.onload = async () => { 
      file = reader.result;
      setLoading(true);
      try {
        const res = await axios({
          url: 'http://localhost:8000/api/file_upload',
          method: 'POST',
          data: {
            file
          },
          headers: {
            'Authorization': `Bearer ${ token }`
          }
        });
        form.setValue('resume', res.data.data.uploadedData.secure_url);
        setActiveTab('basic');
      } catch(err) {
        if (err.response.data.message === 'jwt expired') navigate('/login');
      } finally {
        setLoading(false);
      }
    };
  }
  
  useEffect(() => { if (!user) navigate('/login') }, []);
  
  if (query.isLoading) return <p>Loading....</p>;
  
  return (
    <div className="mt-16 bg-[#F2F2F2]">
      <NavBar job={ true } />
      <JobBanner />
      <div className="w-[75rem] mx-auto bg-white shadow-sm p-12">
        <h1 className="text-3xl font-bold">Apply for job</h1>
        <p className="my-6">Fill in the form below for your application to be considered for the position of { query.data.name }</p>
        <Tabs value={ activeTab } defaultValue='resume'>
          <TabsList className='rounded-none bg-transparent'>
            <TabsTrigger value='resume' onClick={ () => setActiveTab('resume') } className='data-[state=active]:border-l-[#F2F2F2] data-[state=active]:border-r-[#F2F2F2] data-[state=active]:border-t-[#F2F2F2] data-[state=active]:border-t-2 data-[state=active]:border-l-2 data-[state=active]:border-r-2 text-blue-700'>Resume Upload</TabsTrigger>
            <TabsTrigger value='basic' onClick={ () => setActiveTab('basic') } className='data-[state=active]:border-l-[#F2F2F2] data-[state=active]:border-r-[#F2F2F2] data-[state=active]:border-t-[#F2F2F2] data-[state=active]:border-t-2 data-[state=active]:border-l-2 data-[state=active]:border-r-2 text-blue-700'>Basic Details</TabsTrigger>
            <TabsTrigger value='advanced' onClick={ () => setActiveTab('advanced') } className='data-[state=active]:border-l-[#F2F2F2] data-[state=active]:border-r-[#F2F2F2] data-[state=active]:border-t-[#F2F2F2] data-[state=active]:border-t-2 data-[state=active]:border-l-2 data-[state=active]:border-r-2 text-blue-700'>Advance Details</TabsTrigger>
          </TabsList>
          <Form { ...form }>
            <form onSubmit={ form.handleSubmit(onSubmit) }>
              <TabsContent value='resume'>
                <FormField
                  control={ form.control }
                  name='resume'
                  render={ ({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-[#4A4A4A]">Upload Resume/CV *</FormLabel>
                      <div className="flex h-12 my-8 w-[45rem]">
                        <FormControl>
                          <Input disabled={ loading } ref={ fileInput } type='file' className='w-full rounded-none focus-visible:ring-0 focus-visible:ring-offset-0' />
                        </FormControl>
                        <Button disabled={ loading } onClick={ () => fileInput.current.click() } type='button' className='flex rounded-none bg-black'>
                          <Folder className="w-5 h-5 mr-2" />
                          Browse
                        </Button>
                      </div>
                      <p className="text-sm">Note : Only .doc, .docx, .rtf, .txt, .pdf are allowed.</p>
                      <FormMessage />
                    </FormItem>
                  ) }
                />
                <p className="text-sm font-bold w-[45rem] my-8">Please verify the fields containing values automatically extracted from the resume. You may have to manually correct some of the details or fill in some missing information.</p>
                <Button disabled={ loading } className='rounded-none bg-black' type='button' onClick={ uploadFile }>UPLOAD</Button>
              </TabsContent>
              <TabsContent value='basic' className='w-4/6'>
                <FormField
                  control={ form.control }
                  name='firstName'
                  className='w-full'
                  render={ ({ field }) => (
                    <FormItem className='mb-4'>
                      <FormLabel className='font-bold mb-4'>First Name *</FormLabel>
                      <FormControl>
                        <Input { ...field } className='border-2 rounded-none border-gray-400' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  ) }
                />
                <div className="flex justify-between mb-4">
                  <FormField
                    control={ form.control }
                    name='middleName'
                    render={ ({ field }) => (
                      <FormItem className='w-[48%]'>
                        <FormLabel className='font-bold mb-4'>Middle Name</FormLabel>
                        <FormControl>
                          <Input { ...field } className='border-2 rounded-none border-gray-400' />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    ) }
                  />
                  <FormField
                    control={ form.control }
                    name='lastName'
                    render={ ({ field }) => (
                      <FormItem className='w-[48%]'>
                        <FormLabel className='font-bold mb-4'>Last Name *</FormLabel>
                        <FormControl>
                          <Input { ...field } className='border-2 rounded-none border-gray-400' />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    ) }
                  />
                </div>
                <div className="flex justify-between mb-4">
                  <FormField
                    control={ form.control }
                    name='gender'
                    render={ ({ field }) => (
                      <FormItem className='w-[48%]'>
                        <FormLabel className='font-bold mb-4'>Gender *</FormLabel>
                        <FormControl className='w-full'>
                          <Popover open={ open } onOpenChange={ setOpen }>
                            <PopoverTrigger asChild>
                              <Button className="flex justify-between bg-transparent w-full text-black hover:bg-transparent border-2 border-gray-400 rounded-none">
                                { value }
                                <ChevronDown className="w-5 h-5" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className='p-0'>
                              <Command>
                                <CommandGroup>
                                  <CommandItem value='Male' onSelect={ () => onSelect(form, 'gender', 'Male', setOpen, setValue) }>Male</CommandItem>
                                  <CommandItem value='Female' onSelect={ () => onSelect(form, 'gender', 'Female', setOpen, setValue) }>Female</CommandItem>
                                  <CommandItem value='Transgender Male' onSelect={ () => onSelect(form, 'gender', 'Transgender Male', setOpen, setValue) }>Transgender Male</CommandItem>
                                  <CommandItem value='Transgender Female' onSelect={ () => onSelect(form, 'gender', 'Transgender Female', setOpen, setValue) }>Transgender Female</CommandItem>
                                  <CommandItem value='Other' onSelect={ () => onSelect(form, 'gender', 'Other', setOpen, setValue) }>Other</CommandItem>
                                </CommandGroup>
                              </Command>
                            </PopoverContent>
                          </Popover>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    ) }
                  />
                  <FormField
                    control={ form.control }
                    name='dob'
                    render={ ({ field }) => (
                      <FormItem className='w-[48%]'>
                        <FormLabel className='font-bold mb-4'>Date of birth *</FormLabel>
                        <FormControl>
                          <Input { ...field } type='date' className='border-2 rounded-none border-gray-400' />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    ) }
                  />
                </div>
                <div className="flex justify-between">
                  <FormField
                    control={ form.control }
                    name='email'
                    render={ ({ field }) => (
                      <FormItem className='w-[48%] mb-4'>
                        <FormLabel className='font-bold mb-4'>Email *</FormLabel>
                        <FormControl>
                          <Input { ...field } className='border-2 rounded-none border-gray-400' />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    ) }
                  />
                  <FormField
                    control={ form.control }
                    name='prevWorked'
                    render={ ({ field }) => (
                      <FormItem className='w-[48%] mb-4'>
                        <FormLabel className='font-bold mb-4'>Previously worked at Accenture *</FormLabel>
                        <FormControl>
                          <Popover open={ prevWorkedOpen } onOpenChange={ setPrevWorkedOpen }>
                            <PopoverTrigger asChild>
                              <Button className="flex justify-between bg-transparent w-full text-black hover:bg-transparent border-2 border-gray-400 rounded-none">
                                { prevWorked }
                                <ChevronDown className="w-5 h-5" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className='p-0'>
                              <Command>
                                <CommandGroup>
                                  <CommandItem value='Yes' onSelect={ () => onSelect(form, 'prevWorked', 'Yes', setPrevWorkedOpen, setPrevWorked) }>Yes</CommandItem>
                                  <CommandItem value='No' onSelect={ () => onSelect(form, 'prevWorked', 'No', setPrevWorkedOpen, setPrevWorked) }>No</CommandItem>
                                </CommandGroup>
                              </Command>
                            </PopoverContent>
                          </Popover>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    ) }
                  />
                </div>
                <div className="flex justify-between">
                  <FormField
                    control={ form.control }
                    name='pincode'
                    render={ ({ field }) => (
                      <FormItem className='w-1/2 mb-4'>
                        <FormLabel className='font-bold mb-4'>Pincode *</FormLabel>
                        <FormControl>
                          <Input { ...field } className='border-2 rounded-none border-gray-400' />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    ) }
                  />
                </div>
                <FormField
                  control={ form.control }
                  name='presentAddress'
                  render={ ({ field }) => (
                    <FormItem className='mb-4'>
                      <FormLabel className='font-bold mb-4'>Present Addresss *</FormLabel>
                      <FormControl>
                        <Input { ...field } className='border-2 rounded-none border-gray-400' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  ) }
                />
                <div className="w-full flex justify-end">
                  <Button type='button' onClick={ () => setActiveTab('advanced') } className="rounded-none bg-black">NEXT</Button>
                </div>
              </TabsContent>
              <TabsContent value='advanced' className='w-4/6'>
                <FormField
                  control={ form.control }
                  name='country'
                  className='w-full'
                  render={ ({ field }) => (
                    <FormItem className='mb-4'>
                      <FormLabel className='font-bold mb-4'>Country/Territory *</FormLabel>
                      <FormControl>
                        <Input { ...field } className='border-2 rounded-none border-gray-400' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  ) }
                />
                <div className="flex justify-between mb-4">
                  <FormField
                    control={ form.control }
                    name='state'
                    render={ ({ field }) => (
                      <FormItem className='w-[48%]'>
                        <FormLabel className='font-bold mb-4'>State *</FormLabel>
                        <FormControl>
                          <Input { ...field } className='border-2 rounded-none border-gray-400' />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    ) }
                  />
                  <FormField
                    control={ form.control }
                    name='city'
                    render={ ({ field }) => (
                      <FormItem className='w-[48%]'>
                        <FormLabel className='font-bold mb-4'>City *</FormLabel>
                        <FormControl>
                          <Input { ...field } className='border-2 rounded-none border-gray-400' />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    ) }
                  />
                </div>
                <FormField
                  control={ form.control }
                  name='nationality'
                  className='w-full'
                  render={ ({ field }) => (
                    <FormItem className='mb-4'>
                      <FormLabel className='font-bold mb-4'>Nationality *</FormLabel>
                      <FormControl>
                        <Input { ...field } className='border-2 rounded-none border-gray-400' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  ) }
                />
                <div className="flex justify-between mb-4">
                  <FormField
                    control={ form.control }
                    name='notice'
                    render={ ({ field }) => (
                      <FormItem className='w-[48%]'>
                        <FormLabel className='font-bold mb-4'>Notice Period *</FormLabel>
                        <FormControl className='w-full'>
                          <Popover open={ noticeOpen } onOpenChange={ setNoticeOpen }>
                            <PopoverTrigger asChild>
                              <Button className="flex justify-between bg-transparent w-full text-black hover:bg-transparent border-2 border-gray-400 rounded-none">
                                { notice }
                                <ChevronDown className="w-5 h-5" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className='p-0'>
                              <Command>
                                <CommandGroup>
                                  <CommandItem value='0-15 days' onSelect={ () => onSelect(form, 'notice', '0-15 days', setNoticeOpen, setNotice) }>0-15 days</CommandItem>
                                  <CommandItem value='16-30 days' onSelect={ () => onSelect(form, 'notice', '16-30 days', setNoticeOpen, setNotice) }>16-30 days</CommandItem>
                                  <CommandItem value='31-60 days' onSelect={ () => onSelect(form, 'notice', '31-60 days', setNoticeOpen, setNotice) }>31-60 days</CommandItem>
                                  <CommandItem value='61-90 days' onSelect={ () => onSelect(form, 'notice', '61-90 days', setNoticeOpen, setNotice) }>61-90 days</CommandItem>
                                  <CommandItem value='90+ days' onSelect={ () => onSelect(form, 'notice', '90+ days', setNoticeOpen, setNotice) }>90+ days</CommandItem>
                                </CommandGroup>
                              </Command>
                            </PopoverContent>
                          </Popover>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    ) }
                  />
                  <FormField
                    control={ form.control }
                    name='relevantExp'
                    render={ ({ field }) => (
                      <FormItem className='w-[48%]'>
                        <FormLabel className='font-bold mb-4'>Relevant Experience (in months) *</FormLabel>
                        <FormControl>
                          <Input { ...field } className='border-2 rounded-none border-gray-400' />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    ) }
                  />
                </div>
                <div className="flex justify-between">
                  <FormField
                    control={ form.control }
                    name='currSalary'
                    render={ ({ field }) => (
                      <FormItem className='w-[48%] mb-4'>
                        <FormLabel className='font-bold mb-4'>Current Annual Salary</FormLabel>
                        <FormControl>
                          <Input { ...field } className='border-2 rounded-none border-gray-400' />
                        </FormControl>
                        <p className="text-sm text-[#4A4A4A] mt-2">Note:The salary can be mentioned as fixed annual pay</p>
                        <FormMessage />
                      </FormItem>
                    ) }
                  />
                  <FormField
                    control={ form.control }
                    name='expectedSalary'
                    render={ ({ field }) => (
                      <FormItem className='w-[48%] mb-4'>
                        <FormLabel className='font-bold mb-4'>Expected Annual salary</FormLabel>
                        <FormControl>
                          <Input { ...field } className='border-2 rounded-none border-gray-400' />
                        </FormControl>
                        <p className="text-sm text-[#4A4A4A] mt-2">Note:The salary can be mentioned as fixed annual pay</p>
                        <FormMessage />
                      </FormItem>
                    ) }
                  />
                </div>
                <div className="flex justify-between">
                  <FormField
                    control={ form.control }
                    name='primarySkill'
                    render={ ({ field }) => (
                      <FormItem className='w-1/2 mb-4'>
                        <FormLabel className='font-bold mb-4'>Primary skill *</FormLabel>
                        <FormControl>
                          <Input { ...field } className='border-2 rounded-none border-gray-400' />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    ) }
                  />
                  <FormField
                    control={ form.control }
                    name='skillPutInPractice'
                    render={ ({ field }) => (
                      <FormItem className='w-1/2 mb-4'>
                        <FormLabel className='font-bold mb-4'>Year it was last put in practice *</FormLabel>
                        <FormControl>
                          <Input { ...field } className='border-2 rounded-none border-gray-400' />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    ) }
                  />
                </div>
                <div className="flex flex-col">
                  { additionalSkills.map((additionalSkill, i) => (
                    <div className="flex justify-between mb-4" key={ i }>
                      <FormField
                        control={ form.control }
                        name={ `additionalSkills` }
                        render={ ({ field }) => (
                          <FormItem className='w-3/12'>
                            <FormLabel className='font-bold mb-4'>Additional skill { i + 1 }</FormLabel>
                            <FormControl>
                              <Input { ...form.register(`additionalSkills.${ i }.skill`) } className='border-2 rounded-none border-gray-400' />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        ) }
                      />
                      <FormField
                        control={ form.control }
                        name={ `additionalSkills.${ i }.experience` }
                        render={ ({ field }) => (
                          <FormItem className='w-3/12'>
                            <FormLabel className='font-bold mb-4'>Experience(months)</FormLabel>
                            <FormControl>
                              <Input { ...form.register(`additionalSkills.${ i }.experience`) } className='border-2 rounded-none border-gray-400' />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        ) }
                      />
                      <FormField
                        control={ form.control }
                        name={ `additionalSkills` }
                        render={ ({ field }) => (
                          <FormItem className='w-5/12'>
                            <FormLabel className='font-bold mb-4'>Year it was last put in practice</FormLabel>
                            <FormControl>
                              <Input { ...form.register(`additionalSkills.${ i }.yearPutInPractice`) } className='border-2 rounded-none border-gray-400' />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        ) }
                      />
                    </div>
                  )) }
                </div>
                <Button className='p-0 bg-transparent text-blue-700 underline hover:bg-transparent focus:bg-transparent' onClick={ () => setAdditionalSkills(additionalSkills => [...additionalSkills, { skill: '', experience: '', yearPutInPractice: '' }]) }>Add Skill</Button>
                <div className="flex justify-between">
                  <FormField
                    control={ form.control }
                    name='totalExperience'
                    render={ ({ field }) => (
                      <FormItem className='w-[48%] mb-4'>
                        <FormLabel className='font-bold mb-4'>Total experience</FormLabel>
                        <FormControl>
                          <Input { ...field } className='border-2 rounded-none border-gray-400' />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    ) }
                  />
                  <FormField
                    control={ form.control }
                    name='highestEducationalQualification'
                    render={ ({ field }) => (
                      <FormItem className='w-[48%] mb-4'>
                        <FormLabel className='font-bold mb-4'>Highest Educational Qualification *</FormLabel>
                        <FormControl>
                          <Input { ...field } className='border-2 rounded-none border-gray-400' />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    ) }
                  />
                </div>
                <div className="flex justify-between">
                  <FormField
                    control={ form.control }
                    name='graduationYear'
                    render={ ({ field }) => (
                      <FormItem className='w-[48%] mb-4'>
                        <FormLabel className='font-bold mb-4'>Year graduated</FormLabel>
                        <FormControl>
                          <Input { ...field } className='border-2 rounded-none border-gray-400' />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    ) }
                  />
                  <FormField
                    control={ form.control }
                    name='specialization'
                    render={ ({ field }) => (
                      <FormItem className='w-[48%] mb-4'>
                        <FormLabel className='font-bold mb-4'>Specialization *</FormLabel>
                        <FormControl>
                          <Input { ...field } className='border-2 rounded-none border-gray-400' />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    ) }
                  />
                </div>
                <div className="flex justify-between">
                  <FormField
                    control={ form.control }
                    name='panNumber'
                    render={ ({ field }) => (
                      <FormItem className='w-[48%] mb-4'>
                        <FormLabel className='font-bold mb-4'>PAN Number *</FormLabel>
                        <FormControl>
                          <Input { ...field } className='border-2 rounded-none border-gray-400' />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    ) }
                  />
                  <FormField
                    control={ form.control }
                    name='panAvailable'
                    render={ ({ field }) => (
                      <FormItem className='w-[48%] mb-4'>
                        <FormLabel className='font-bold mb-4'>Is PAN card available *</FormLabel>
                        <FormControl>
                          <Popover open={ panOpen } onOpenChange={ setPanOpen }>
                            <PopoverTrigger asChild>
                              <Button className="flex justify-between bg-transparent w-full text-black hover:bg-transparent border-2 border-gray-400 rounded-none">
                                { pan }
                                <ChevronDown className="w-5 h-5" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className='p-0'>
                              <Command>
                                <CommandGroup>
                                  <CommandItem value='Yes' onSelect={ () => onSelect(form, 'panAvailable', 'Yes', setPanOpen, setPan) }>Yes</CommandItem>
                                  <CommandItem value='No' onSelect={ () => onSelect(form, 'panAvailable', 'No', setPanOpen, setPan) }>No</CommandItem>
                                </CommandGroup>
                              </Command>
                            </PopoverContent>
                          </Popover>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    ) }
                  />
                </div>
                <div className="flex justify-between">
                  <FormField
                    control={ form.control }
                    name='passportAvailable'
                    render={ ({ field }) => (
                      <FormItem className='w-[48%] mb-4'>
                        <FormLabel className='font-bold mb-4'>Passport Available *</FormLabel>
                        <FormControl>
                          <Popover open={ passportOpen } onOpenChange={ setPassportOpen }>
                            <PopoverTrigger asChild>
                              <Button className="flex justify-between bg-transparent w-full text-black hover:bg-transparent border-2 border-gray-400 rounded-none">
                                { passport }
                                <ChevronDown className="w-5 h-5" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className='p-0'>
                              <Command>
                                <CommandGroup>
                                  <CommandItem value='Yes' onSelect={ () => onSelect(form, 'passportAvailable', 'Yes', setPassportOpen, setPassport) }>Yes</CommandItem>
                                  <CommandItem value='No' onSelect={ () => onSelect(form, 'passportAvailable', 'No', setPassportOpen, setPassport) }>No</CommandItem>
                                </CommandGroup>
                              </Command>
                            </PopoverContent>
                          </Popover>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    ) }
                  />
                </div>
                <p className="mb-4 text-sm text-[#4A4A4A]">{`College Name* (Select the institution name from the list.`}</p>
                <FormField
                  control={ form.control }
                  name='collegeName'
                  className='w-full'
                  render={ ({ field }) => (
                    <FormItem className='mb-4'>
                      <FormLabel className='font-bold mb-4'>{`If your institution name is unavailable in the list select "Others").`}</FormLabel>
                      <FormControl>
                        <Input { ...field } className='border-2 rounded-none border-gray-400' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  ) }
                />
                <p className="mb-4 text-sm text-[#4A4A4A]">{`Organization Name* (Please select organization name from the list provided.`}</p>
                <FormField
                  control={ form.control }
                  name='organizationName'
                  className='w-full'
                  render={ ({ field }) => (
                    <FormItem className='mb-4'>
                      <FormLabel className='font-bold mb-4'>{`If your organization is unavailable in the list then please select "others").`}</FormLabel>
                      <FormControl>
                        <Input { ...field } className='border-2 rounded-none border-gray-400' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  ) }
                />
                <FormField
                  control={ form.control }
                  name='howDidYouHear'
                  className='w-full'
                  render={ ({ field }) => (
                    <FormItem className='mb-4'>
                      <FormLabel className='font-bold mb-4'>How did you hear about us? *</FormLabel>
                      <FormControl>
                        <Input { ...field } className='border-2 rounded-none border-gray-400' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  ) }
                />
                <p className="text-sm text-[#4A4A4A]">Do you have a Disability (as recognized by the India Rights of Persons with Disabilities Act 2016 or the United Nations)?</p>
                <p>A disability may be anything that hinders a person’s full and effective participation in society on an equal basis with others. The new Rights of Persons with Disabilities Act, 2016 recognizes 21 types of disabilities. We go beyond—covering more than 60 disabilities.</p>
                <FormField
                  control={ form.control }
                  name='disability'
                  className='w-full'
                  render={ ({ field }) => (
                    <FormItem className='mb-4'>
                      <FormControl>
                        <Input { ...field } className='border-2 rounded-none border-gray-400' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  ) }
                />
                <p>This census is voluntary and the data/information will be used to serve lawful purposes, including enabling accessibility and assistive support for persons with disabilities based on the need and as maybe reasonably provided by Accenture. This information will not be used to influence hiring decisions and will be maintained confidential as per Accenture's Data Privacy Policy.</p>
                <div className="flex">
                  { console.log(form.formState.errors) }
                </div>
                <div className="w-full flex justify-end">
                  <Button type='submit' className="rounded-none bg-black">Apply</Button>
                </div>
              </TabsContent>
            </form>
          </Form>
        </Tabs>
        <Separator className='h-0.5 bg-[#F2F2F2] my-16' />
        <h6 className="text-xl">Accenture Disclaimer</h6>
        <p className="my-6 text-sm">Accenture is committed to protecting your personal information. Your information will be collected, used and may be shared by Accenture with third party service providers to serve lawful purposes, for Accenture recruitment process, including processing of data by third party when required. Your information shall be held only as long as necessary to achieve the purpose for which it is collected. The use and transfer of your information will be strictly in accordance with the applicable data privacy law and in line with our privacy policy available at <a href="#" className="text-blue-700 underline">https://www.accenture.com/privacy-policy</a>. Further, you agree and acknowledge that you have read Accenture’s privacy policy and fully understand your rights to access, correct or withdraw your information anytime.</p>
      </div>
      <Footer />
    </div>
  );
}

export default ApplyPage;