import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { MdLogout } from 'react-icons/md';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import Pic1 from '../images/1.jpg'

const Profile = () => {
  return (
    <section className='profile'>
        <div className="titleDiv">
            <h2>Your Profile</h2>
            <hr />
            <p>stunning</p>
        </div>

        <Link to="/"><BiArrowBack id='back'/></Link>

        <div className="container">
            <div className="card">
                <img src={Pic1} alt="a friend of a friend" />
                <p className='nickname'>Freddy</p>
            </div>

            <button id='editBtn'>
                Edit Profile <MdOutlineModeEditOutline className='icon'/>
            </button>

            <button id='logoutBtn'>
                Log Out <MdLogout className='icon'/>
            </button>
            <button id='deleteBtn'>
                Delete Account <AiOutlineDelete className='icon'/>
            </button>
        </div>
    </section>
  )
}

export default Profile