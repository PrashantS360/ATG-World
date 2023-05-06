import Image from 'next/image'
import React from 'react'
import { MdCastForEducation } from 'react-icons/md';
import { BsCalendar2Event,BsThreeDots } from 'react-icons/bs';
import { GrArticle } from 'react-icons/gr';
import { HiOutlineEye } from 'react-icons/hi';
import { FaShareAlt } from 'react-icons/fa';

const Card = ({ imgLink, type, heading, content, authorDp, author, views }) => {
    return (
        <div className='-z-10 md:w-[45vw] border-2 border-gray-300 rounded-md my-3'>
            <div className='-z-30'>
            <Image src={imgLink} width={800} height={300} />
            </div>
            <p className='flex space-x-2 items-center p-2 font-[630]'>
                {
                    type != "Article" ? type == "Education" ? <MdCastForEducation /> : <BsCalendar2Event /> : <GrArticle />
                }
                <span>{type}</span>
            </p>
            <div className='flex justify-between items-center my-1'>
            <p className='px-2 text-xl font-bold w-3/4'>{heading}</p>
            <BsThreeDots className='mr-3'/>
            </div>
            <p className='px-2 text-gray-500 text-sm my-2'>{content}</p>
            <div className='flex justify-between items-center px-2 py-3'>
                <div className='flex items-center space-x-2'>
                    <Image className='rounded-full mr-2' src={authorDp} width={40} height={40} />
                    <span className='font-[500]'>{author}</span>
                </div>
                <div className='flex items-center space-x-2'>
                    <HiOutlineEye className='text-gray-500'/>
                    <span className='text-sm text-gray-500'>{views}</span>
                    <button className='p-2 rounded-md bg-gray-300'><FaShareAlt/></button>
                </div>
            </div>
        </div>
    )
}

export default Card