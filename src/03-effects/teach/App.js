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
    const intervalId = window.setInterval(() => {
      setTime(new Date())
    }, tickAmount)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [tickAmount])

  useEffect(() => {
    document.title = `Locale: ${locale}`
  }, [locale])

  return (
    <div>
      <p>
        The current time is <strong>{time.toLocaleTimeString(locale)}</strong>.
      </p>
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
