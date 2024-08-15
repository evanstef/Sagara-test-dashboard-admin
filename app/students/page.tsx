

import React from 'react'
import Container from '../_component/Container'
import DataStudent from '../_component/DataStudent'
import ModalFormAdd from '../_component/ModalFormAdd'
import HomeStudent from '../_component/HomeStudent'
import { supabase } from '@/utils/supabase'
import AllDataStudents from '../_component/AllDataStudents'

export const revalidate = 0

const Page = async () => {
  const {data, error} = await supabase.from('students').select()

  return (
    <Container>
        <HomeStudent />
    </Container>
    
  )
}

export default Page
