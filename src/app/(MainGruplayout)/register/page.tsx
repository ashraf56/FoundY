'use client'
import React from 'react';

import CustomForm from '@/src/components/form/CustomForm';

import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { FieldValues, SubmitErrorHandler } from 'react-hook-form';

import CustomInput from '@/src/components/form/CustomInput';
import { useRegisterUser } from '@/src/hooks/auth.hook';
const Registerpage = () => {
      const {mutate:handleUserRegitration} = useRegisterUser()

const onSubmit : SubmitErrorHandler<FieldValues>= async (data)=> {

  const userdata = {
    ...data,
    profilePhoto:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  }

    handleUserRegitration(userdata)
}


    return (
        <div>
          <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
      <h3 className="my-2 text-2xl font-bold">Register with FoundX</h3>
      <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
      <div className="w-[35%]">
        <CustomForm
          onSubmit={onSubmit}
          
        >
          <div className="py-3">
            <CustomInput label="Name" name="name" type="text" />
          </div>
          <div className="py-3">
            <CustomInput label="Email" name="email" type="email" />
          </div>
          <div className="py-3">
            <CustomInput label="Password" name="password" type="password" />
          </div>
          <div className="py-3">
            <CustomInput label="MobilecNumber" name="mobileNumber" type="number" />
          </div>

          <Button
            className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
            size="lg"
            type="submit"
          >
            Register
          </Button>
        </CustomForm>
        <div className="text-center">
          Don&lsquo;t have account ? <Link href={"/login"}>Login</Link>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Registerpage;