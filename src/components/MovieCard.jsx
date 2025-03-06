function MovieCard(props) {
  return (
    <div 
      style={{ 
        position: 'relative', 
        cursor: 'pointer' 
      }}
    >
      <img src={props.imgSrc} height={300} />
      <h1
        style={{
          margin: 0,
          position: 'absolute',
          bottom: 0,
          fontSize: '8em'
        }}
      >
        {props.trendingNo}
      </h1>
    </div>
  )
}

export default MovieCard