import React from 'react'

function Courses(p) {
  return (
    <div className="border-top border-2 border-danger rounded p-4 m-2 bg-light"
    style={{height:"300px",width:"300px"}}
    >
      <h3 className='border-start border-2 border-info p-2'>{p.children}</h3>
      <p>This course is for both Fresher's and Experienced.</p>
      <p>
        <b className='border-bottom border-2 border-success'>Trainer: {p.trainer}</b>
      </p>
      <p>
        <b className=' border border-1 border-secondary p-1 rounded'>Price: {p.price}</b>
      </p>
      <p>
        <b className='border-end border-2 p-1 border-info   '>Hrs: {p.hours}</b>
      </p>
    </div>
  )
}

export default Courses
