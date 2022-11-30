import React from 'react'
import './Branch.css'
import Semester from '../Semester/Semester'
import Container from './Container'
const Branch = (props) => {
  return (
    <div className='branch'>
       <Container/>
       <Semester subData = {props.subData} sem = '7th' fade='fade-up-left'/>
       <Semester subData = {props.subData} sem = '6th' fade="fade-up-right"/> 
       <Semester subData = {props.subData} sem = '5th' fade='fade-up-left'/> 
       <Semester subData = {props.subData} sem = '4th' fade="fade-up-right"/> 
       <Semester subData = {props.subData} sem = '3rd' fade='fade-up-left'/> 
       <Semester subData = {props.subData} sem = '2nd' fade="fade-up-right"/> 
       <Semester subData = {props.subData} sem = '1st' fade='fade-up-left'/>  
    </div>
  )
}

export default Branch