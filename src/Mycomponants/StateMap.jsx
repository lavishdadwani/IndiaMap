import React from 'react'
import { useParams } from 'react-router-dom'
import Upsvg from '../Statesvgs/Upsvg';
import Gujarat from '../Statesvgs/Gujrat';
import MaharashtraSvg from '../Statesvgs/MaharashtraSvg';
import Himanchalsvg from '../Statesvgs/himanchalsvg';
const States = () => {
    const params = useParams()

  return (
    <div>
        {params.id === 'Uttar Pradesh' && (
            <Upsvg />
        )}
        {params.id === 'Gujarat' && (
            <Gujarat />
        )}
        {params.id === 'Maharashtra' && (
            <MaharashtraSvg />
        )}
        {params.id === 'Himachal Pradesh' && (
            <Himanchalsvg />
        )}
       
        

    </div>
  )
}

export default States;