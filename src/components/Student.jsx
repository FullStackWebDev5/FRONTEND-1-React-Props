import React from 'react'

const Student = ({ 
  name = 'John Doe', 
  batch = 'January', 
  course = 'DSA', 
  marks = 100 
}) => {
  return (
    <div>
      <h3>{ name }</h3>

      <ul>
        <li>Batch: { batch }</li>
        <li>Course: { course }</li>
        <li>Marks: { marks }</li>
      </ul>
    </div>
  )
}

export default Student