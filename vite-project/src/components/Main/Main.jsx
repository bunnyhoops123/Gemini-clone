import React from 'react'
import './Main.css';
import { assets } from '../../assets/assets';

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
    <div className="main-container">
        <div className="greet">
            <p><span>Hello, Sumukh</span></p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest beautiful places to see in Bangalore</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Briefly summarize this concept: Urban planning</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Brainstorm team bonding activites for our work retreat</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>
        <div className='main-bottom'>
            
        </div>
    </div>
    </div>
  )
}

export default Main