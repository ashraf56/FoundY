
'use client'

import CustomForm from '@/src/components/form/CustomForm';

import { Button } from '@nextui-org/button';
import Link from 'next/link';
import React from 'react';
import { FieldValues, SubmitErrorHandler } from 'react-hook-form';

import CustomInput from '@/src/components/form/CustomInput';

const page = () => {

const onSubmit : SubmitErrorHandler<FieldValues>= async (data)=> {
    console.log(data);
    
}


    return (
        <div>
          <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
      <h3 className="my-2 text-2xl font-bold">Login with FoundX</h3>
      <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
      <div className="w-[35%]">
        <CustomForm
          onSubmit={onSubmit}
          
        >
          <div className="py-3">
            <CustomInput label="Email" name="email" type="email" />
          </div>
          <div className="py-3">
            <CustomInput label="Password" name="password" type="password" />
          </div>

          <Button
            className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
            size="lg"
            type="submit"
          >
            Login
          </Button>
        </CustomForm>
        <div className="text-center">
          Don&lsquo;t have account ? <Link href={"/register"}>Register</Link>
        </div>
      </div>
    </div>
        </div>
    );
};

export default page;