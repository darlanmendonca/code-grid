import React from 'react'
import { GridContext } from '../components/Grid'

const useGrid = () => {
  const context = React.useContext(GridContext)
  
  if (!context) {
    throw new Error('useGrid must be used within a GridProvider')
  }
  return context
}

export default useGrid