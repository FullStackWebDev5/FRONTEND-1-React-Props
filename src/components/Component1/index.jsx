import './index.css'

const Component1 = () => {
  // const styles = {
  //   title: { 
  //     backgroundColor: 'green', 
  //     fontSize: '2em',
  //     width: '10em',
  //     padding: '1em',
  //     borderRadius: '1em'
  //   },
  //   description: { 
  //     backgroundColor: 'red', 
  //     fontSize: '2em',
  //     width: '10em',
  //     padding: '1em',
  //     borderRadius: '1em'
  //   }
  // }

  return (
    <div>
      {/* <h1 style={styles.title}>React.js</h1>
      <p style={styles.description}>
        React.js is a FE JavaScript library used for building UI
      </p> */}

      <h1 className='title'>React.js</h1>
      <p className='description'>
        React.js is a FE JavaScript library used for building UI
      </p>
    </div>
  )
}

export default Component1

/*
  # Styling in React
    - Inline styling
      - Syntax:
        - Way 1:
          <p style={{ textAlign: 'center' }}>Test</p>
        - Way 2:
          const pTagStyle = { textAlign: 'center' }
          <p style={pTagStyle}>Test</p>
    - External styling: Similar to external CSS in Web Dev fundamentals
*/