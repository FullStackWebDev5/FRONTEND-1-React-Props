import MovieCard from "./MovieCard"

function Movies() {
  return (
    <div>
      <h1>Movies</h1>
      <div style={{ display: 'flex', gap: '1em' }}>
        <MovieCard
          imgSrc="https://i.pinimg.com/736x/c5/bf/2e/c5bf2e92733fdc1f7af044b5a4b7032c.jpg"
          trendingNo={1}
        />
        <MovieCard
          imgSrc="https://i.pinimg.com/236x/e9/ca/e2/e9cae25b44580be1de3f904821fa851e.jpg"
          trendingNo={2}
        />
        <MovieCard
          imgSrc="https://rukminim2.flixcart.com/image/850/1000/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg?q=20&crop=false"
          trendingNo={3}
        />
      </div>
    </div>
  )
}

export default Movies