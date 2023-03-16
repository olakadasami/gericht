"use client"
import Heading from '@/components/Heading/Heading'
import React, { useState } from 'react'

const Newsletter = () => {
    const [email, setEmail] = useState<string>("")

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(email)
    }
    return (
        <section className="flex flex-col text-center justify-center items-center gap-4 px-40 py-20">
            <Heading
                subHeading='Newsletter'
                heading='Subscribe To Our Newsletter'
                center
            />
            <p className='mb-8'>
                And never miss latest Updates!
            </p>
            <form onSubmit={onSubmitHandler} className='flex items-center gap-4' >
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email Address'
                    className='py-3 px-8 w-full bg-primary-dark border border-color-accent'
                />
                <input type="submit" value="Subscribe"
                    className='bg-color-accent text-primary-dark inline-flex items-center justify-center py-2 px-8'
                />
            </form>
        </section>
    )
}

export default Newsletter