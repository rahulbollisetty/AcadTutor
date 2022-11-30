import React from 'react'
import './SyllabusDownload.css';
import { FaDownload } from 'react-icons/fa';
const SyllabusDownload = () => {
  return (
    <div className='download_con'>
       <span>ML Syllabus Download</span>
       <a><button><FaDownload/>Download</button></a>
    </div>
  )
}

export default SyllabusDownload