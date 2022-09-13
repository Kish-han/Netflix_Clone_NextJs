import { signInAnonymously } from 'firebase/auth';
import Image from 'next/image'
import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from '../hooks/useAuth';

interface Inputs {
    email: string,
    password: string,
};

const Loginhome = () => {

    const [isLogin, setIsLogin] = useState(false)
    const {signIn, signUp} = useAuth()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async ({ email, password}) => {
        if(isLogin){
            await signIn(email, password)
        } else {
            await signUp(email, password)
        }
    };

    return (
        <section className='relative h-screen w-screen flex flex-col md:items-center md:justify-center md:bg-transparent'>
            <img
                src='https://assets.nflxext.com/ffe/siteui/vlv3/701eec50-4b87-4dc0-9d00-b0f54025dc36/028e62d2-2a59-4fc3-adaa-a0756a0512b9/IN-en-20220905-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                // layout='fill'
                className='-z-10 opacity-60 object-cover w-full h-full'
            // objectFit='cover'
            />

            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt=""
                // width={100}
                // height={100}
                className='absolute top-5 left-4 cursor-pointer object-contain md:left-10 md:top-6 w-32 md:w-48'
            />

            <form
                onSubmit={handleSubmit(onSubmit)}
                className='absolute mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14 w-full' >
                <h1 className='text-4xl font-semibold'>Sign In</h1>
                <div className="space-y-4 text-black">
                    <label className='inline-block w-full' >
                        <input type={'email'} {...register("email", { required: true })} placeholder='Email' className='input' />
                        {errors.email && <p className='p-1 text-[13px] font-light text-orange-500'>Please enter valid email</p>}
                    </label>
                    <label className='inline-block w-full'>
                        <input type={'password'} {...register("password", { required: true })} placeholder='Password' className='input' />
                        {errors.email && <p className='p-1 text-[13px] font-light text-orange-500'>Your password must contain between 4 and 60 characters</p>}
                    </label>
                </div>
                <button className='w-full rounded bg-[#e50914] py-3 font-semibold' onClick={()=> setIsLogin(true)} >Sign In</button>

                <div className='text-[gray]'>
                    New to Netflix? {''}
                    <button type='submit' className='text-white hover:underline cursor-pointer' onClick={()=> setIsLogin(false)} >Sign up now.</button>
                </div>
            </form>
        </section>
    )
}

export default Loginhome