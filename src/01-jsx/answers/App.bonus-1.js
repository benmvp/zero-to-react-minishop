import React from 'react'

const GiphySearch = () => {
  const title = "I'm Ready Lets Go GIF by Leroy Patterson"
  const url =
    'https://giphy.com/gifs/leroypatterson-cat-glasses-CjmvTCZf2U3p09Cn0h'
  const previewUrl =
    'https://media2.giphy.com/media/CjmvTCZf2U3p09Cn0h/giphy-preview.mp4?cid=376dcdd944vhe2rsqwiiqnrfkuh6v7qw9cuermk7bsxburuv&rid=giphy-preview.mp4'
  const rating = 'G'

  return (
    <main>
      <h1>Giphy Search!</h1>

      <div
        className="card"
        style={{
          width: '300px',
          display: 'inline-block',
          marginRight: '16px',
        }}
      >
        <video src={previewUrl} alt={title} loop autoPlay />
        <section className="card-section">
          <h5>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>{' '}
            ({rating})
          </h5>
        </section>
      </div>
    </main>
  )
}

const App = () => <GiphySearch />

export default App
