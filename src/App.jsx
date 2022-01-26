import './App.css';
import React from 'react'

function App() {
  const [multiplyValue, changeValue] = React.useState(1)

  let btnContainer, lights, lightsTime
  lightsTime = 500 / multiplyValue

  const switchOnFunc = (arr, time) => {
    for(let node of arr){
        (arr.indexOf(node) + 1) % 2 == 0 
        ? node.classList.add('switched-lights')
        : setTimeout(() => {
          node.classList.add('switched-lights')
        }, time);
    }
  }

  const switchOffFunc = (arr) => {
    for(let node of arr){
      node.classList.remove('switched-lights')
    }
  }

  const togglerFunc = () => {
    btnContainer = document.querySelectorAll('.switch-button')
    lights = Array.from(document.querySelector('.lights').childNodes) // Без Array.from() не сработает switchOnFunc()

    btnContainer[0].classList.toggle('switch-button-clicked')
    btnContainer[1].classList.toggle('switch-button-clicked')

    btnContainer[0].classList.contains('switch-button-clicked') 
    ? switchOnFunc(lights, lightsTime) 
    : switchOffFunc(lights)
  }
  
  const applySpeedFunc = () => {
    lights = document.querySelector('.lights').childNodes // С использованием Array.from() не сработает

    for(let node of lights){  
      node.style.animationDuration = `${lightsTime}ms`
    }
      switchOffFunc(Array.from(lights))
      switchOnFunc(Array.from(lights), lightsTime)
  }

  return (
    <div className="App">
      <div className='lights'>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
      </div>
      <div className='switch'>
        <div className='name'>
          Рождественская Гирлянда
        </div>
        <div className='buttons-container'> 
          <div onClick={togglerFunc}>
            <button className='switch-button'>On</button>
            <button className='switch-button switch-button-clicked'>Off</button>
          </div>
        </div>
      </div>
      <div className='speed-management-container'>
        <div>
          <div className='text'>
            Установить скорость
          </div>
          <div className='speed-management'>
            <div className='input-container'>
              <span className='cross'>x</span>
              <input type='text' className='speed-input'
              onChange={e => changeValue(Number(e.target.value))}></input>
            </div>
            <button className='apply-button' onClick={applySpeedFunc}>
              Применить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
