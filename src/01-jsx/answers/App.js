import React from 'react'

const GiphySearch = () => {
  return (
    <main>
      <h1>Giphy Search!</h1>

      <div className="callout primary">
        <div
          className="card"
          style={{
            width: '300px',
            display: 'inline-block',
            marginRight: '16px',
          }}
        >
          <video
            src="https://media2.giphy.com/media/CjmvTCZf2U3p09Cn0h/giphy-preview.mp4?cid=376dcdd944vhe2rsqwiiqnrfkuh6v7qw9cuermk7bsxburuv&rid=giphy-preview.mp4"
            alt="I'm Ready Lets Go GIF by Leroy Patterson"
            loop
            autoPlay
          />
          <section className="card-section">
            <h5>
              <a
                href="https://giphy.com/gifs/leroypatterson-cat-glasses-CjmvTCZf2U3p09Cn0h"
                target="_blank"
                rel="noopener noreferrer"
              >
                I'm Ready Lets Go GIF by Leroy Patterson
              </a>{' '}
              (G)
            </h5>
          </section>
        </div>
      </div>
    </main>
  )
}

const App = () => <GiphySearch />

export default App
