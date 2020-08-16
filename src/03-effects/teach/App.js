import React, { useState, useEffect } from 'react'

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

const Clock = ({ initialLocale, tickAmount }) => {
  const [time, setTime] = useState(new Date())
  const [locale, setLocale] = useState(initialLocale)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, tickAmount)

    return () => {
      clearInterval(intervalId)
    }
  }, [tickAmount])

  useEffect(() => {
    document.title = locale
  }, [locale])

  return (
    <div>
      <p>The current time is {time.toLocaleTimeString(locale)}.</p>
      <LocaleSelector locale={locale} onLocaleChange={setLocale} />
    </div>
  )
}

const App = () => {
  return (
    <main>
      <Clock initialLocale="en-US" tickAmount={1000} />
    </main>
  )
}

export default App
