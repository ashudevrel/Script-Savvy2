

import React from 'react'
import { Link } from "react-router-dom"

import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
      <img src="https://blog.bit.ai/wp-content/uploads/2020/09/screenshot-venturebeat.com-2020.09.08-10_52_46.jpg" alt="" />
      <div className="user">
        <img src="https://images.pexels.com/photos/10990278/pexels-photo-10990278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />      
      <div className="info">
        <span>John</span>
        <p>Posted Few Days Ago</p>
        </div>
        <div className="edit">
          <Link to={'/write?edit=2'}>
          <img src={Edit} alt="" />
          </Link>
          <img src={Delete} alt="" />
        </div>
      </div>
      <h1>VentureBeat</h1>
      <p>VentureBeat is one of the leading tech blogs for transformative tech events and news. It reports breaking news on comprehensive content about prime tech businesses along with incisive coverage of the gaming industry. The blog comprises a series of tech-related articles, newsletters, general news, and businesses.</p>
      <p>The company’s latest offering, the Hailo-15, can be embedded in a camera, can target massive camera deployments, and can offload the expensive work of cloud vision analytics, while conserving power. Behind this is the thought that it’s not helpful to push this kind of work to the cloud — not if the IoT is to make progress.</p>
      </div>
      <div>
        <Menu/>
      </div>
    </div>
  )
}

export default Single

