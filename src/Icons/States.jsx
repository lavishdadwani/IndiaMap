import React from 'react'
import { useParams } from 'react-router-dom'
import Upsvg from "./statesSvg/Upsvg"
import MaharashtraSvg from './statesSvg/MaharashtraSvg'
const States = () => {
    const params = useParams()

  return (
    <div>
        {params.id === 'Uttar Pradesh' && (
            <Upsvg />
        )}
          {params.id === 'Maharashtra' && (
            <MaharashtraSvg />
        )}
    </div>
  )
}

export default States