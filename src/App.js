import './App.css';
import InputAge from './InputAge';
import ResultCard from './ResultCard';
import {useState} from 'react';
import React from 'react';


function App() {

  const [age, setAge] = useState({
    DD: '- -',
    MM: '- -',
    YYYY:'- -'
  });

  const [ageClick, setAgeClick] = useState({
    DD: '- -',
    MM: '- -',
    YYYY:'- -'
  })

  const [isHoverButton, setIsHoverButton] = useState(false);
  const [clickedButton,  setOnClickButton] = useState(false);

  const handleAgeChange = (newAge, category) => {
    setAge((prevAge) => ({
      ...prevAge,
      [category]: newAge
    }));
  };

  const currentDate = new Date();

  // Get year, month, and day components
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
 
 var totaldays = Math.abs(day - ageClick.DD);
 var totalmonth = Math.abs(month - ageClick.MM);
 var totalyear = Math.abs(year - ageClick.YYYY);
 
 
  function onButtonHover (){
    setIsHoverButton(!isHoverButton)
  }

  function onClickButton(){
    setOnClickButton(true)
    setAgeClick(age)

    totaldays  = Math.abs(day  - ageClick.DD  );
    totalmonth = Math.abs(day  - ageClick.MM  );
    totalyear  = Math.abs(year - ageClick.YYYY);
  }
  



  return (
    <div className='Calc-Container'>

      <div className= 'S1-container'>

        <div className='Input-Container'>
            <InputAge time = 'DAY'   Empty = 'DD'   onAgeChange = {handleAgeChange} />
            <InputAge time = 'MONTH' Empty = 'MM'   onAgeChange = {handleAgeChange} />
            <InputAge time = 'YEAR'  Empty = 'YYYY' onAgeChange = {handleAgeChange}/>
        </div>

        <div className='button-Container'>
          <div className="horizontal-line"></div>
       
        </div>

      </div>

      <div className='circleContainer-Container'>

          <div onClick ={onClickButton} onMouseEnter={onButtonHover} onMouseLeave={onButtonHover} className= {`circle-Container ${isHoverButton ? "blackcircle-Style" : " "}`}>        
               <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" stroke-width="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
          </div> 

      </div>

      <div className='result-Container'>

          <ResultCard value = {clickedButton ? totalyear  : '-- ' } time = 'years'/>
          <ResultCard value = {clickedButton ? totalmonth : '-- '  }     time = 'months'/>
          <ResultCard value = {clickedButton ? totaldays  : '-- '  }     time = 'days'/>

      </div>

    </div>
  );
}

export default App;
