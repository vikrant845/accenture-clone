import NavBar from "./navbar";
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import Footer from "./footer";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "./slices/userSlice";
import { useNavigate, useParams } from "react-router-dom";

const formSchema = zod.object({
  email: zod.string().email({
    message: 'Please enter a valid email'
  }),
  password: zod.string().min(8, { message: 'The password should be at least 8 characters long' })
});

const LoginCandidate = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { jobApply } = useParams();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (values, e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const res = await axios({
        method: 'POST',
        url: 'http://localhost:8000/api/users/login',
        data: values
      });
      form.reset();
      dispatch(setUser({ user: res.data.data.user, token: res.data.data.token }));
      localStorage.setItem('token', res.data.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.data.user));
      navigate('/candidate');
    } catch (err) {
      console.log(err);
    }
  }
  
  return (
    <div className="bg-white mt-16">
      <NavBar login={ true } />
      <div className="w-[70vw] mx-auto">
        <div className="flex items-center">
          <div className="w-3/4 flex flex-col py-12">
            <h1 className="text-7xl font-extrabold">Start or complete your application</h1>
            <p className="mt-8 text-lg">Already registered? Sign in with e-mail and password below.</p>
            <p className="text-lg">Starting a new application? Sign up below.</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-lg mb-6">Sign in using your existing account.</p>
          <Form { ...form }>
            <form className="w-1/2" onSubmit={ form.handleSubmit(onSubmit) }>
              <FormField
                control={ form.control }
                name='email'
                render={ ({ field }) => (
                  <FormItem className='mb-4'>
                    <FormLabel className='font-bold text-base'>Email Address</FormLabel>
                    <FormControl>
                      <Input { ...field } className='border border-black rounded-none h-12' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                ) }
              />
              <FormField
                control={ form.control }
                name='password'
                render={ ({ field }) => (
                  <FormItem className='mb-4'>
                    <FormLabel className='font-bold text-base'>Password</FormLabel>
                    <FormControl>
                      <Input { ...field } className='border border-black rounded-none h-12' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                ) }
              />
              <div className="w-[16rem] my-4 relative">
                <button className="p-3 w-full text-sm bg-black font-bold z-[3] relative transition-all duration-500 hover:-translate-x-2 hover:-translate-y-2 text-white shadow-sm">SIGN IN</button>
                <span className="w-full h-full translate-x-1 translate-y-1 bg-gray-400 z-[2] block absolute top-0"></span>
              </div>
            </form>
          </Form>
          <div className="my-4">
            <Checkbox id='show_password' className='mr-2' />
            <label htmlFor="show_password">
              Show Password
            </label>
          </div>
          <div className="flex w-1/2 justify-between">
            <a href="#" className="text-blue-700 underline">Forgot Password?</a>
            <div>
              <Checkbox id='show_password' className='mr-2' />
              <label htmlFor="show_password">
                Remember Me
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Footer subscription={ false } />
      </div>
    </div>
  );
}

export default LoginCandidate;