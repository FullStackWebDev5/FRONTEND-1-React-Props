import './App.css'
// import Student from './components/Student'
import Movies from './components/Movies'

function App() {
  return (
    <div>

      <Movies />

      {/* <h1>Students</h1>
      <Student 
        name='Omkar'
        batch="April" 
        course='Full Stack Web Dev'
        marks={96}
      />
      <Student 
        name='Pankaj'
        batch="January" 
        course='Frontend Web Dev'
        marks={98}
      />
      <Student 
        name='Poornima'
        batch="December" 
        course='Backend Web Dev'
        marks={97}
      />
      <Student 
        name='Sanchay'
        batch="March" 
        course='Android Dev'
        marks={99}
      /> */}
    </div>
  )
}

export default App




/*
  # Props (Properties)
    - Data received by the component from it's parent (Data passed down to child components)
    - Props are immutable (cannot be changed by the child component)
      - Props are 'read-only' data for child components
    - Whenever any prop of the component changes, the component automatically re-renders
    - Syntax:
      - Parent component (Pass)
        <Child1 prop1='value1' prop2={value2} ... />
        - Data type:
          - String: "", ''
          - Any non string value: {}
      - Child components (Access)
        - Class components
          - this.props
        - Functional components
          - 'props' can be accessed as the first parameter of the function
    - Additional notes:
      - Using props, we can reuse components dynamically!
      - Relate props to attributes in HTML (which were be used to pass additional properties to tags)
*/