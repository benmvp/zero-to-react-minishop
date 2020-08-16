import React, { useState } from 'react'

const LocaleSelector = ({ locale, onLocaleChange }) => {
  return (
    <label>
      Locale
      <select value={locale} onChange={(e) => onLocaleChange(e.target.value)}>
        <option value="en-US">United States (English)</option>
        <option value="es-ES">Spain (Spanish)</option>
        <option value="ar-EG">Egypt (Arabic)</option>
      </select>
    </label>
  )
}

const Clock = ({ initialLocale }) => {
  const [time, setTime] = useState(new Date())
  const [locale, setLocale] = useState(initialLocale)

  return (
    <div>
      <p>The current time is {time.toLocaleTimeString(locale)}.</p>
      <LocaleSelector locale={locale} onLocaleChange={setLocale} />
      <button className="button" onClick={() => setTime(new Date())}>
        Update
      </button>
    </div>
  )
}

const App = () => {
  return (
    <main>
      <Clock initialLocale="en-US" />
    </main>
  )
}

export default App
