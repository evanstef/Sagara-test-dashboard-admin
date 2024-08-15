"use client"

import React, { useState } from 'react'
import profil from '../../assets/student.png'
import Image from 'next/image'
import ModalFormEdit from './ModalFromEdit'
import {formatDistanceToNow} from 'date-fns';
import { enUS } from 'date-fns/locale' 
import { deleteStudent } from '@/actions/deleteStudent'


interface Props {
    id : any
    username : string
    email : string
    phone_number : string
    instance : string
    created_at : string
}

const DataStudent = ({username, email, phone_number, instance, created_at, id} : Props) => {
    const [isOpen, setIsOpen] = useState(false)
    const active = () => setIsOpen(true)
    const close = () => setIsOpen(false)

    console.log(id);
    

    const pastTime = formatDistanceToNow(created_at, {
        addSuffix: true,
        locale: enUS,
    })
  return (
    <div className='px-2 py-4 xl:px-6 flex border-b border-border text-[8px] gap-8 xl:gap-20 items-center xl:text-sm'>
        <Image className='w-6 h-6 md:w-[40px] md:h-[40px]' src={profil} alt="profil" width={40} height={40} />
        <p className='w-[80px] xl:w-[120px]'>{username}</p>
        <p className='w-[50px] xl:w-[100px] hidden md:block'>{email}</p>
        <p className='w-[70px] xl:w-[140px] hidden md:block'>{phone_number}</p>
        <p className='w-[35px] xl:w-[70px] hidden md:block'>{instance}</p>
        <p>{pastTime}</p>
        <div className='flex'>
            <button onClick={() => deleteStudent(id)}>
                <svg className='w-[24px] h-[24px] md:w-[40px] md:h-[40px]' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 15.0001H14.1667M14.1667 15.0001H27.5M14.1667 15.0001V26.6667C14.1667 27.1088 14.3423 27.5327 14.6548 27.8453C14.9674 28.1578 15.3913 28.3334 15.8333 28.3334H24.1667C24.6087 28.3334 25.0326 28.1578 25.3452 27.8453C25.6577 27.5327 25.8333 27.1088 25.8333 26.6667V15.0001H14.1667ZM16.6667 15.0001V13.3334C16.6667 12.8914 16.8423 12.4675 17.1548 12.1549C17.4674 11.8423 17.8913 11.6667 18.3333 11.6667H21.6667C22.1087 11.6667 22.5326 11.8423 22.8452 12.1549C23.1577 12.4675 23.3333 12.8914 23.3333 13.3334V15.0001M18.3333 19.1667V24.1667M21.6667 19.1667V24.1667" stroke="#C30010" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        
            <button onClick={() => active()}>
                <svg className='w-[24px] h-[24px] md:w-[40px] md:h-[40px]' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_4518)">
                <path d="M24.1667 12.4999C24.3856 12.2811 24.6455 12.1074 24.9314 11.989C25.2174 11.8705 25.5239 11.8096 25.8334 11.8096C26.1429 11.8096 26.4494 11.8705 26.7354 11.989C27.0214 12.1074 27.2812 12.2811 27.5001 12.4999C27.719 12.7188 27.8926 12.9786 28.011 13.2646C28.1295 13.5506 28.1904 13.8571 28.1904 14.1666C28.1904 14.4761 28.1295 14.7826 28.011 15.0686C27.8926 15.3546 27.719 15.6144 27.5001 15.8333L16.2501 27.0833L11.6667 28.3333L12.9167 23.7499L24.1667 12.4999Z" stroke="#F8AF4E" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_1_4518">
                <rect width="20" height="20" fill="white" transform="translate(10 10)"/>
                </clipPath>
                </defs>
                </svg>
            </button>

            <ModalFormEdit username={username} email={email} phone_number={phone_number} instance={instance} id={id} isOpen={isOpen} onClose={close}  />
        </div>
    </div>
  )
}

export default DataStudent
