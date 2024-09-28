'use client'

import CustomInput from "@/src/components/form/CustomInput";
import { Button } from "@nextui-org/button";
import { FieldValues, FormProvider, SubmitHandler, useFieldArray, useForm } from "react-hook-form";

const Createpage = ({}) => {
const methods = useForm()

const { control, handleSubmit } = methods;

const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

const onSubmit : SubmitHandler<FieldValues> = async(data)=>{
    const postData = {
        ...data,
        questions: data.questions.map((que: { value: string }) => que.value),
      };
  
      console.log(postData);

}

const handleFieldAppend = () => {
    append({ name: "questions" });
  };

    return (
        <FormProvider {...methods}>
           <form  onSubmit={handleSubmit(onSubmit)}>
           <CustomInput label="Title" name="title" />
           <div className="flex justify-between items-center">
            <h1 className="text-xl">Owner verification questions</h1>
            <Button onClick={() => handleFieldAppend()}>Append</Button>
          </div>
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center">
              <CustomInput label="Question" name={`questions.${index}.value`} />
              <Button onClick={() => remove(index)}>Remove</Button>
            </div>
          ))}

<Button type="submit">Post</Button>

           </form>
        </FormProvider>
    );
};

export default Createpage;