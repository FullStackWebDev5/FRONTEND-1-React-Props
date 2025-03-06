import React, { Component } from 'react'

export class Student extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
  
        <ul>
          <li>Batch: {this.props.batch}</li>
          <li>Course: {this.props.course}</li>
          <li>Marks: {this.props.marks}</li>
        </ul>
      </div>
    )
  }
}

Student.defaultProps = { 
  name: 'John Doe', 
  batch: 'January', 
  course: 'DSA', 
  marks: 100 
}
export default Student