import React, { useState, useEffect } from 'react'

const LOCALES = [
  { value: 'en-US', display: 'United States (English)' },
  { value: 'es-ES', display: 'Spain (Spanish)' },
  { value: 'ar-EG', display: 'Egypt (Arabic)' },
]

const LocaleSelector = ({ locale, onLocaleChange }) => {
  return (
    <label>
      Locale
      <select value={locale} onChange={(e) => onLocaleChange(e.target.value)}>
        {LOCALES.map((localeInfo) => {
          return (
            <option key={localeInfo.value} value={localeInfo.value}>
              {localeInfo.display}
            </option>
          )
        })}
      </select>
    </label>
  )
}

const Clock = ({ initialLocale, tickAmount, allowLocaleSwitch }) => {
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
      <p>
        The current time is <strong>{time.toLocaleTimeString(locale)}</strong>.
      </p>
      {allowLocaleSwitch && (
        <LocaleSelector locale={locale} onLocaleChange={setLocale} />
      )}
    </div>
  )
}

const App = () => {
  return (
    <main>
      <Clock initialLocale="en-US" tickAmount={1000} allowLocaleSwitch />
    </main>
  )
}

export default App
