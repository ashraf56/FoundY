'use client'
import React, { ReactNode } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

interface formConfig {
    resolver?: any;
}

interface IProps extends formConfig {
    children: ReactNode;
    onSubmit: SubmitHandler<any>;
}



const CustomForm = ({ children, onSubmit, resolver }: IProps) => {
    const formConfig: formConfig = {}
    const methods = useForm(formConfig)

    if (!!resolver) {
        formConfig["resolver"] = resolver;
    }

    const handlesubmit = methods.handleSubmit

    return (
        <FormProvider {...methods}>
            <form onSubmit={handlesubmit(onSubmit)}>{children}</form>
        </FormProvider>
    );
};

export default CustomForm;