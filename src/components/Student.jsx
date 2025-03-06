import React from 'react'

function Student(props) {
  return (
    <div>
      <h3>{props.name}</h3>

      <ul>
        <li>Batch: {props.batch}</li>
        <li>Course: {props.course}</li>
        <li>Marks: {props.marks}</li>
      </ul>
    </div>
  )
}

export default Student