"use client"

import Image from 'next/image'
import React from 'react'
import logo from "../../assets/logo 2.png"
import Link from 'next/link'
import dash from "../../assets/dash.png"
import student from "../../assets/icons8_student.png"
import { usePathname } from 'next/navigation'


const Sidebar = () => {

  const pathname = usePathname()

  return (
    <div className='bg-siderbar w-full h-screen px-2 py-3 xl:py-[42px] xl:px-[25px]'>
      <Image className='mb-[20px] xl:mb-[50px] w-[70px] h-[25px] xl:w-[178px] xl:h-[64px]' src={logo} alt="logo" width={1920} height={1080} />
      <h1 className='mb-[15px] text-[8px] xl:text-sm text-text-sidebar'>MENU</h1>
      <div className='flex flex-col gap-[6px] font-bold'>

        <div className={`flex items-center gap-[10px] pl-1 py-1 xl:pl-[15px] xl:pr-[105px]  xl:py-2 rounded-[5px] ${pathname === "/" ? "bg-primary text-white" : "text-text-sidebar"}`}>
           <Image className='hidden md:block w-[18px] h-[18px]' src={dash} alt="dash" width={1920} height={1080} />
           <Link className='text-[10px] xl:text-base' href="/">Dashboard</Link> 
        </div>
        
        <div className={`flex items-center gap-[10px] pl-2 py-1 xl:pl-[15px] xl:pr-[105px] xl:py-2 rounded-[5px] ${pathname === "/students" ? "bg-primary text-white" : "text-text-sidebar"}`}>
          <Image className='hidden md:block w-[18px] h-[18px]' src={student} alt="student" width={1920} height={1080} />
          <Link className='text-[10px] xl:text-base' href="/students">Students</Link>  
        </div>
        
      </div>
      
    </div>
  )
}

export default Sidebar
