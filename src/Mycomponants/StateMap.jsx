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
import JammuKashmir from '../Statesvgs/JammuKashmir';
import Karnataka from '../Statesvgs/Karnataka';
import Kerala from '../Statesvgs/Kerala';
import Manipur from '../Statesvgs/Manipur';
import Meghalaya from '../Statesvgs/Meghalaya';
import MpSvg from '../Statesvgs/MpSvg';
import Odisha from '../Statesvgs/Odisha';
import Sikkim from '../Statesvgs/Sikkim';
import Tripura from '../Statesvgs/Tripura';
import Uttarakhand from '../Statesvgs/Uttarakhand';
import WestBengal from '../Statesvgs/WestBengal';

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
        {params.id === 'Jammu and Kashmir' && (
            < JammuKashmir />
        )}
        {params.id === 'Uttarakhand' && (
            < Uttarakhand />
        )}
        {params.id === 'Manipur' && (
            < Manipur />
        )}
        {params.id === 'Tripura' && (
            < Tripura />
        )}
        {params.id === 'Kerala' && (
            < Kerala />
        )}
        {params.id === 'Madhya Pradesh' && (
            < MpSvg />
        )}
        {params.id === 'Odisha' && (
            < Odisha />
        )}
        {params.id === 'Karnataka' && (
            < Karnataka />
        )}
        {params.id === 'Sikkim' && (
            < Sikkim />
        )}
        {params.id === 'West Bengal' && (
            < WestBengal />
        )}
        {params.id === 'Meghalaya' && (
            < Meghalaya />
        )}
        

    </div>
  )
}

export default States;