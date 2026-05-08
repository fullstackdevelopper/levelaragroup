"use client"

import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

export default function Variants() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, 
        gap: 3,
        height: '100vh',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      {/* Rectangle gauche */}
      <Skeleton
        variant="rectangular"
        sx={{
          width: { xs: '100%', md: 200 },
          height: { xs: 120, md: 300 },
        }}
      />

      {/* 3 rectangles droite */}
      <Stack
        spacing={1}
        sx={{
          width: { xs: '100%', md: 300 },
        }}
      >
        <Skeleton variant="rectangular" height={40} />
        <Skeleton variant="rectangular" height={40} />
        <Skeleton variant="rectangular" height={40} />
      </Stack>
    </Box>
  )
}