import React, { useState, useEffect } from 'react'
import { getResults } from '../../api'

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
  const [results, setResults] = useState([])

  useEffect(() => {
    getResults({ query }).then(
      (apiResults) => {
        setResults(apiResults)
      },
      (err) => {
        console.error(err)
      },
    )
  }, [query])

  return (
    <main>
      <h1>Giphy Search!</h1>

      <SearchForm query={query} onQueryChange={setQuery} />

      <p>
        You are searching for <strong>{query}</strong> on Giphy.
      </p>

      {results.length > 0 && (
        <div className="callout primary">
          {results.map((result) => {
            return (
              <Result
                key={result.id}
                title={result.title}
                url={result.url}
                previewUrl={result.previewUrl}
                rating={result.rating}
              />
            )
          })}
        </div>
      )}
    </main>
  )
}

const App = () => <GiphySearch initialQuery="cats" />

export default App
