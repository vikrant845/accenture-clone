import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import NavBar from "./navbar";
import z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import Footer from "./footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "./slices/userSlice";

const formSchema = z.object({
  firstName: z.string({ required_error: 'First Name Is Required' }),
  lastName: z.string({ required_error: 'Last Name Is Required' }),
  email: z.string({ required_error: 'Email Is Required' }).email({ message: 'Please enter a valid email' }),
  password: z.string({ required_error: 'Password Is Required' }),
  confirmPassword: z.string({ required_error: 'Confirm Password Is Required' }),
});

const SignupPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const onSubmit = async (values, e) => {
    e.preventDefault();
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:8000/api/users',
      data: values
    });
    if (res.data.message === 'success') {
      form.reset();
      dispatch(setUser({ user: res.data.data.user, token: res.data.data.token }));
      navigate('/candidate');
    }
  }
  
  return (
    <>
      <NavBar login={ true } />
      <div className="my-16">
        <div className="w-[75rem] mx-auto">
          <div className="w-3/5 py-16">
            <h1 className="text-7xl font-extrabold">Sign up for Accenture Careers Subscription</h1>
            <p className="mt-8 text-lg w-11/12">Customize job alerts, receive insider news/tips, personalize your site experience and save job preferences.</p>
          </div>
          <h3 className="text-5xl font-bold">Sign In Details</h3>
          <p className="font-bold text-lg my-8">* INDICATES REQUIRED FIELD</p>
          <p className="text-lg">Verification is necessary. Please select the Send Verification Code button.</p>
          <Form { ...form }>
            <form onSubmit={ form.handleSubmit(onSubmit) }>
              <FormField
                control={ form.control }
                name='email'
                render={ ({ field }) => (
                  <FormItem className='mb-6'>
                    <FormLabel className='text-lg'>Email</FormLabel>
                    <FormControl>
                      <Input { ...field } className='focus-visible:ring-0 focus-visible:ring-offset-0 border-gray-400 border-2 rounded-none w-1/2 h-12  ' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                ) }
              />
              <FormField
                control={ form.control }
                name='firstName'
                render={ ({ field }) => (
                  <FormItem className='mb-6'>
                    <FormLabel className='text-lg'>First Name</FormLabel>
                    <FormControl>
                      <Input { ...field } className='focus-visible:ring-0 focus-visible:ring-offset-0 border-gray-400 border-2 rounded-none w-1/2 h-12  ' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                ) }
              />
              <FormField
                control={ form.control }
                name='lastName'
                render={ ({ field }) => (
                  <FormItem className='mb-6'>
                    <FormLabel className='text-lg'>Last Name</FormLabel>
                    <FormControl>
                      <Input { ...field } className='focus-visible:ring-0 focus-visible:ring-offset-0 border-gray-400 border-2 rounded-none w-1/2 h-12  ' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                ) }
              />
              <FormField
                control={ form.control }
                name='password'
                render={ ({ field }) => (
                  <FormItem className='mb-6'>
                    <FormLabel className='text-lg'>Password</FormLabel>
                    <FormControl>
                      <Input type='password' { ...field } className='focus-visible:ring-0 focus-visible:ring-offset-0 border-gray-400 border-2 rounded-none w-1/2 h-12  ' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                ) }
              />
              <FormField
                control={ form.control }
                name='confirmPassword'
                render={ ({ field }) => (
                  <FormItem className='mb-6'>
                    <FormLabel className='text-lg'>Confirm Password</FormLabel>
                    <FormControl>
                      <Input type='password' { ...field } className='focus-visible:ring-0 focus-visible:ring-offset-0 border-gray-400 border-2 rounded-none w-1/2 h-12  ' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                ) }
              />
              <div className="flex">
                <div className="w-fit relative mr-8">
                  <button className="p-3 text-sm bg-black font-bold z-[3] relative transition-all duration-500 hover:-translate-x-2 hover:-translate-y-2 text-white shadow-sm">SUBMIT</button>
                  <span className="w-full h-full translate-x-1 translate-y-1 bg-gray-400 z-[2] block absolute top-0"></span>
                </div>
                <div className="w-fit relative">
                  <button className="p-3 text-sm bg-black font-bold z-[3] relative transition-all duration-500 hover:-translate-x-2 hover:-translate-y-2 text-white shadow-sm">CANCEL</button>
                  <span className="w-full h-full translate-x-1 translate-y-1 bg-gray-400 z-[2] block absolute top-0"></span>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignupPage;