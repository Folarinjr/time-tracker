import React, {useState} from 'react'

import Contents from '../contents/Contents';
import SideBar from '../sidebar/SideBar';

//import getData from '../data/Data';
import './Container-style.js'
import { ContainerStyle } from './Container-style.js';

const Container = () => {
    const [timeOfTheDay, setTimeOfTheDay] = useState('daily');

  return (
    <ContainerStyle>
      <div>
      <SideBar timeOfTheDay={timeOfTheDay} setTimeOfTheDay={setTimeOfTheDay}/>
      </div>
      <div>
        <Contents timeOfTheDay={timeOfTheDay}/>
      </div>  
    </ContainerStyle>
  )
}

export default Container