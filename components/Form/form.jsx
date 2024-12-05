// Import necessary dependencies
import React, { use } from 'react';
import { useFormik } from 'formik';
import { init } from 'next/dist/compiled/webpack/webpack';




export const Form = () => {
  // Use Formik hook
const Formik = useFormik({
    initialValues: initialValues,
    onSubmit:  (values) => {
        console.log("file : registration.jsx  values", values);
    }
});

console.log("file : registration.jsx  values", Formik);

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col gap-2  mt-10 '>
                       <div className='flex  gap-2'>
                       <h4 className='gradient-text text-[25px]'>My name is </h4>
                       <input className=' gradient-text w-[250px] border-gradient bg-transparent border-b-2 ' name='name' type="name" id='name' autoComplete='off' placeholder='Jazzy@ Example' />
                       </div>
                       <div className='flex  gap-2'>
                       <h4 className='gradient-text text-[25px]'>i'm interested in </h4>
                       <input className=' gradient-text w-[250px] border-gradient bg-transparent border-b-2 ' name='text' type="text" placeholder='service name' />
                       </div>
                       <div className='flex  gap-2'>
                       <h4 className='gradient-text text-[25px]'>Please, contact me at </h4>
                       <input className=' gradient-text w-[250px] border-gradient bg-transparent border-b-2 ' name='email' type="email" placeholder='name@example.com' />
                       </div>
                       <div className='flex  gap-2'>
                       <h4 className='gradient-text text-[25px]'>Optionally, i'm sharing more : detailes </h4>
                      <textarea className=' gradient-text w-[250px] border-gradient bg-transparent border-b-2' name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                       </div>
                    </div> 
                  
      {/* Submit Button */}
      <button type='submit'>Submit</button>
    </form>
  );
};