import React, { useState } from 'react'

import { Box } from '@mui/material'

import HeroBanner from '../Component/HeroBanner'
import SearchExercise from '../Component/SearchExercise'
import Exercises from '../Component/Exercises'

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercise />
      <Exercises />
    </Box>
  )
}

export default Home