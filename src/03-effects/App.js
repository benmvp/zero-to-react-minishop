import React, { useState /*, useEffect*/ } from 'react'

// 👇🏾 Uncomment when implementing
// import { getResults } from '../api'

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
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
    </div>
  )
}

const GiphySearch = ({ initialQuery }) => {
  const [query, setQuery] = useState(initialQuery)

  // 👇🏾 New results state (uncomment when implementing)
  const [results /*, setResults*/] = useState([])

  const title = "I'm Ready Lets Go GIF by Leroy Patterson"
  const url =
    'https://giphy.com/gifs/leroypatterson-cat-glasses-CjmvTCZf2U3p09Cn0h'
  const previewUrl =
    'https://media2.giphy.com/media/CjmvTCZf2U3p09Cn0h/giphy-preview.mp4?cid=376dcdd944vhe2rsqwiiqnrfkuh6v7qw9cuermk7bsxburuv&rid=giphy-preview.mp4'
  const rating = 'G'

  // 👇🏾 Using the `useEffect` hook, make the following API
  // 👇🏾 call whenever the query changes and update the results state
  // 👇🏾 NOTE: Don't forget to import `useEffect` at the top
  // getResults({ query }).then(
  //   (apiResults) => {
  //     // 👈🏾 Call `setResults` with the `apiResults` to update the state
  //   },
  //   (err) => {
  //     console.error(err)
  //   },
  // )

  // Log `results` for now. We'll render in Step 4.
  console.log(results)

  return (
    <main>
      <h1>Giphy Search!</h1>

      <SearchForm query={query} onQueryChange={setQuery} />

      <p>
        You are searching for <strong>{query}</strong> on Giphy.
      </p>

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
