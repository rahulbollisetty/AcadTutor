import React from 'react'
import './Branch.css'
import Semester from '../Semester/Semester'
const Branch = (props) => {
  return (
    <div className='branch'>
       <Semester subData = {props.subData} sem = '7th'/>
       <Semester subData = {props.subData} sem = '6th'/> 
       <Semester subData = {props.subData} sem = '5th'/> 
       <Semester subData = {props.subData} sem = '4th'/> 
       <Semester subData = {props.subData} sem = '3rd'/> 
       <Semester subData = {props.subData} sem = '2nd'/> 
       <Semester subData = {props.subData} sem = '1st'/>  
    </div>
  )
}

export default Branch