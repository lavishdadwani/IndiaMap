import React from 'react'
import { useParams } from 'react-router-dom'
import Upsvg from '../Statesvgs/Upsvg';
import Gujarat from '../Statesvgs/Gujrat';
import MaharashtraSvg from '../Statesvgs/MaharashtraSvg';
import Himanchalsvg from '../Statesvgs/Himachal';
import Chhattisgarh from "../Statesvgs/Chhattisgarh"
import Jharkhand from "../Statesvgs/Jharkhand"
import Rajsthan from "../Statesvgs/Rajsthan"
import Punjab from "../Statesvgs/Punjab"
import Bihar from "../Statesvgs/Bihar"
import Andhra from '../Statesvgs/Andhra';
import Haryana from "../Statesvgs/Haryana"
import Assam from '../Statesvgs/Assam';
import Arunachal from '../Statesvgs/Arunachal';
import Goa from '../Statesvgs/goa';
import Tamilnadu from '../Statesvgs/tamilnadu';

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
        {params.id === 'Jharkhand' && (
            <Jharkhand />
        )}
        {params.id === 'Rajasthan' && (
            <Rajsthan />
        )}
        
        {params.id === 'Punjab' && (
            <Punjab />
        )}
        {params.id === 'Bihar' && (
            <Bihar />
        )}
        {params.id === 'Andhra Pradesh' && (
            <Andhra />
        )}
        {params.id === 'Chhattisgarh' && (
            <Chhattisgarh />
        )}
        {params.id === 'Haryana' && (
            <Haryana />
        )}
        {params.id === 'Assam' && (
            <Assam />
        )}
        {params.id === 'Arunachal Pradesh' && (
            < Arunachal />
        )}
        {params.id === 'Goa' && (
            < Goa />
        )}
        {params.id === 'Tamil Nadu' && (
            < Tamilnadu />
        )}
        

    </div>
  )
}

export default States;