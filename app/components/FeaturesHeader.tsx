'use client'
import React from 'react'
import { Button } from './ui/button'

const FeaturesHeader = () => {
    return (
        <div className='flex my-16 flex-col items-center justify-center'>
            <Button text='many features,wow' />
            <p className='text-4xl mt-[-20px] font-semibold'> What's in DevXClub?</p>
            <p className='text-gray-400 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    )
}

export default FeaturesHeader