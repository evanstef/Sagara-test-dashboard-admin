import React from 'react'


interface Props {
    children: React.ReactNode
}

const Container = ({children} : Props) => {
  return (
    <div className='container w-full px-4 xl:px-[43px] mx-auto'>
        {children}
    </div>
  )
}

export default Container
