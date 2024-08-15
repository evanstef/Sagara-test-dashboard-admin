"use client"

import React, { useEffect, useState } from 'react'
import ModalFormAdd from './ModalFormAdd'
import { searchUsers, supabase } from '@/utils/supabase'
import { log } from 'console'
import AllDataStudents from './AllDataStudents'

const HomeStudent = () => {
  const [openModal, setOpenModal] = useState(false)
  const [data, setData] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const active = () => setOpenModal(true)
  const close = () => setOpenModal(false)


  // pencarian User berdasarkan username

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm !== '') {
        const results = await searchUsers(searchTerm);
        setData(results);
      } else {
        const {data, error} = await supabase.from('students').select("*");
        setData(data);
      }
    };
  


    fetchData();
  }, [searchTerm]);

  // pencarian user

  

  return (
    <>
      <div className='mt-[25px] xl:mt-[45px]'>
        <h1 className='text-lg xl:text-2xl font-bold mb-[27px]'>Data Student</h1>
        {/* bagian filter add search settings */}
        <div className='flex flex-col md:flex-row gap-3 md:gap-0 justify-between'>
          <div className='flex gap-2'>
            <button className='flex gap-2 items-center bg-white border px-2 py-2 border-border xl:px-[16px] xl:py-[10px] rounded-[5px]'>
              <svg className='hidden md:block' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h1 className='text-nama font-bold text-[10px] xl:text-base'>
                Filters
              </h1>
            </button>
            <button onClick={() => active()} className='bg-primary text-white px-2 xl:px-[16px] xl:py-[10px] rounded-[5px] text-[10px] xl:text-base'>
              + Add User
            </button>
            <ModalFormAdd isOpen={openModal} onClose={close} />
          </div>
          
          
          <div className='flex gap-1 xl:gap-2'>
            <div className='relative'>
              <input  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder='Search Username' className='bg-white border border-border xl:pl-[30px] xl:pr-[14px] xl:py-[10px] rounded-[5px] text-[10px] xl:text-base' />
              <svg className='absolute top-3 left-2 hidden md:block' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
              
            <button className='bg-white border border-border xl:px-[10px] xl:py-[10px] rounded-[5px]'>
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.749 5.99 10.049 5.452 10.325 4.317Z" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12Z" stroke="#344054" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
          </div>
        </div>

        {/* akhir bagina filter add search settings */}
        <div className='mt-[25px] bg-white h-full text-[10px] text-left xl:text-base'>
          <div className='flex justify-around bg-border py-3 border border-border rounded-[5px]'>
            {/* Profil */}
            <div className='flex gap-2 items-center'>
              <h1 className='text-neutral-600 font-bold'>Profil</h1>
              <svg className='hidden md:block' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.66667 9.66675V1.66675M3.66667 1.66675L1 4.33341M3.66667 1.66675L6.33333 4.33341M10.3333 4.33341V12.3334M10.3333 12.3334L13 9.66675M10.3333 12.3334L7.66667 9.66675" stroke="#8A92A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

            {/* uSername */}
            <div className='flex gap-2 items-center'>
              <h1 className='text-neutral-600 font-bold'>Username</h1>
              <svg className='hidden md:block' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.66667 9.66675V1.66675M3.66667 1.66675L1 4.33341M3.66667 1.66675L6.33333 4.33341M10.3333 4.33341V12.3334M10.3333 12.3334L13 9.66675M10.3333 12.3334L7.66667 9.66675" stroke="#8A92A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

            {/* Email */}
            <div className='gap-2 items-center hidden md:flex'>
              <h1 className='text-neutral-600 font-bold'>Email</h1>
              <svg className='hidden md:block' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.66667 9.66675V1.66675M3.66667 1.66675L1 4.33341M3.66667 1.66675L6.33333 4.33341M10.3333 4.33341V12.3334M10.3333 12.3334L13 9.66675M10.3333 12.3334L7.66667 9.66675" stroke="#8A92A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

            {/* No HP */}
            <div className='md:flex gap-2 items-center hidden'>
              <h1 className='text-neutral-600 font-bold'>Phone Number</h1>
              <svg className='hidden md:block' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.66667 9.66675V1.66675M3.66667 1.66675L1 4.33341M3.66667 1.66675L6.33333 4.33341M10.3333 4.33341V12.3334M10.3333 12.3334L13 9.66675M10.3333 12.3334L7.66667 9.66675" stroke="#8A92A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

            {/* Instance */}
            <div className='md:flex gap-2 items-center hidden'>
              <h1 className='text-neutral-600 font-bold'>Instance</h1>
              <svg className='hidden md:block' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.66667 9.66675V1.66675M3.66667 1.66675L1 4.33341M3.66667 1.66675L6.33333 4.33341M10.3333 4.33341V12.3334M10.3333 12.3334L13 9.66675M10.3333 12.3334L7.66667 9.66675" stroke="#8A92A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

            {/* Created At */}
            <div className='flex gap-2 items-center'>
              <h1 className='text-neutral-600 font-bold'>Created At</h1>
              <svg className='hidden md:block' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.66667 9.66675V1.66675M3.66667 1.66675L1 4.33341M3.66667 1.66675L6.33333 4.33341M10.3333 4.33341V12.3334M10.3333 12.3334L13 9.66675M10.3333 12.3334L7.66667 9.66675" stroke="#8A92A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>


            {/* Actions */}
            <div className='flex gap-2 items-center'>
              <h1 className='text-neutral-600 font-bold'>Actions</h1>
            </div>
          </div>
          {data?.length === 0 ? (
            <h1 className='text-center text-nama font-bold text-2xl'>No Student Data</h1>
          ) : (
            <AllDataStudents data={data} />
          )}
        </div>
    </div>
    </>
  )
}

export default HomeStudent
