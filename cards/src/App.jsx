import React from 'react'
import './App.css'
import profileImg from './assets/uppara charan.png'

function App() {
  return (
    <div className='cards'>
      <div className="card">
        <div className='top'></div>
        <div className='links'>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-github"></i>
        </div>
        <div className='circle'>
          <img src={profileImg} alt="Profile" />
        </div>
        <div className='text'>
          <p className='h1'>Love Kumar</p>
          <p className='h2'>Web Developer</p>
          <div className='star'>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
          </div>
        </div>
        <div className='btn'>
          <button>About me</button>
          <button>Hire me</button>
        </div>
      </div>



      <div className="card">
        <div className='top'></div>
        <div className='links'>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-github"></i>
        </div>
        <div className='circle'>
          <img src={profileImg} alt="Profile" />
        </div>
        <div className='text'>
          <p className='h1'>Raj Mahesh</p>
          <p className='h2'>CTO</p>
          <div className='star'>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
          </div>
        </div>
        <div className='btn'>
          <button>About me</button>
          <button>Hire me</button>
        </div>
      </div>



      <div className="card">
        <div className='top'></div>
        <div className='links'>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-github"></i>
        </div>
        <div className='circle'>
          <img src={profileImg} alt="Profile" />
        </div>
        <div className='text'>
          <p className='h1'>Kowshik </p>
          <p className='h2'>Ethical hacker</p>
          <div className='star'>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
          </div>
        </div>
        <div className='btn'>
          <button>About me</button>
          <button>Hire me</button>
        </div>
      </div>
    </div>
  )
}

export default App
