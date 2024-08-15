import Image from 'next/image'
import React from 'react'
import gambar from '../../assets/profile.png'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between px-3 py-2 xl:px-[41px] xl:py-[17px] border-b border-text-sidebar'>
      <div>

      </div>

      <div className='flex items-center gap-[15px]'>
        <div className='text-right'>
          <h1 className='text-nama text-xs md:text-base'>Evan Stefanus Candra</h1>
          <p className='text-konten text-xs md:text-base'>Admin</p>
        </div>
        <Image className='rounded-full' src={gambar} alt='' width={46} height={46} />
      </div>
    </div>
  )
}

export default Navbar
