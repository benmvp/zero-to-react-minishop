import React /*, { useState }*/ from 'react'

const Result = ({ title, url, previewUrl, rating }) => {
  return (
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
  )
}

const SearchForm = ({ query, onQueryChange }) => {
  return (
    <div style={{ maxWidth: 400, margin: '20px auto' }}>
      <input
        type="search"
        placeholder="Search Giphy"
        // 👈🏾 3. Set `query` prop as `value` attribute
        // 👈🏾 Call `onQueryChange` prop from the `onChange` attribute of the input
      />
    </div>
  )
}

const GiphySearch = ({ initialQuery }) => {
  const query = initialQuery
  // 👆🏾 1. Replace constant with `useState` hook initialized to `initialQuery`
  // 👆🏾 (`query` & `setQuery`)
  // 👆🏾 NOTE: Don't forget to import `useState` at the top

  const title = "I'm Ready Lets Go GIF by Leroy Patterson"
  const url =
    'https://giphy.com/gifs/leroypatterson-cat-glasses-CjmvTCZf2U3p09Cn0h'
  const previewUrl =
    'https://media2.giphy.com/media/CjmvTCZf2U3p09Cn0h/giphy-preview.mp4?cid=376dcdd944vhe2rsqwiiqnrfkuh6v7qw9cuermk7bsxburuv&rid=giphy-preview.mp4'
  const rating = 'G'

  return (
    <main>
      <h1>Giphy Search!</h1>

      {/* 👇🏾 2. call `setQuery` update function in `onQueryChange` prop */}
      <SearchForm query={query} />

      <div className="callout primary">
        <Result
          title={title}
          url={url}
          previewUrl={previewUrl}
          rating={rating}
        />
      </div>
    </main>
  )
}

const App = () => <GiphySearch initialQuery="cats" />

export default App
