"use client"
import React from 'react'
import DataStudent from './DataStudent'

const AllDataStudents = ({data} : any) => {
  return (
    <div>
      {data?.map((item : any,i : any) => {
        return (
            <DataStudent id={item.id} key={i} username={item.username} email={item.email} phone_number={item.phone_number} instance={item.instance} created_at={item.created_at} />
        )
      })}
    </div>
  )
}

export default AllDataStudents
