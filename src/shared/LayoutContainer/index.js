import { Box } from '@mui/material'
import React from 'react'

const LayoutContainer = ({ children }) => {
    return (
        <Box sx={{ px: { xs: 2, sm: 10 }, }}>{children}</Box>
    )
}

export default LayoutContainer