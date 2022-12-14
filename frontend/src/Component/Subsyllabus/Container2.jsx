import React from 'react'
import './Container2.css';
import youtube from '../../Images/YouTube.png'
const Container2 = () => {
  return (
    <div className='sub_con'>
      <div className='row'>
      <div className='ImgBx'>
          <img src={youtube}/>
      </div>
      <div className='sub_detail'>
        Machine learning (ML) is a field of inquiry devoted to understanding and building methods that 'learn', that is, methods that leverage data to improve performance on some set of tasks. It is seen as a part of artificial intelligence. Machine learning algorithms build a model based on sample data, known as training data, in order to make predictions or decisions without being explicitly programmed to do so. Machine learning algorithms are used in a wide variety of applications, such as in medicine, email filtering, speech recognition, and computer vision, where it is difficult or unfeasible to develop conventional algorithms to perform the needed tasks.
      </div>
      </div>
    </div>
  )
}

export default Container2