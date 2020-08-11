# Step 1 - JSX & Components

[JSX](https://reactjs.org/docs/jsx-in-depth.html) is syntactic sugar for the plain JavaScript function [`React.createElement()`](https://reactjs.org/docs/react-api.html#createelement). React elements are the smallest building blocks of React apps that describe what you want to see on the screen.

Unlike browser DOM elements, React elements are plain objects, and are cheap to create. [`ReactDOM`](https://reactjs.org/docs/react-dom.html) takes care of updating the DOM to match the React elements.

[React components](https://reactjs.org/docs/components-and-props.html) let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen, etc. In React apps, all of these are commonly expressed as components.

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.

🏅 The goal of this step is to practice with JSX and creating components.

## 🐇 Jump Around

[Concepts](#-concepts) | [Learn](#-learn) | [Exercises](#-exercises) | [Elaboration & Feedback](#-elaboration--feedback) | [Resources](#-resources)

## ⭐ Concepts

- Rendering elements with JSX
- Handling special element attribute names
- Adding inline styles
- Creating and composing React components
- Configuring components via passing props

## 📝 Learn

We bare-bones file that defines a component that renders nothing:

```js
import React from 'react'

const App = () => null

export default App
```

We can add JSX markup:

```js
const App = () => {
  return <main>Learn React!</main>
}
```

Add nested JSX markup. For example:

```js
const App = () => {
  return (
    <main>
      <h1>Learn React!</h1>
      <p>This is a paragraph of text written in React</p>
    </main>
  )
}
```

Add attributes to the nested JSX markup. For example:

```js
const App = () => {
  return (
    <main>
      <h1>Learn React!</h1>
      <p>This is a paragraph of text written in React</p>
      <aside>
        <input type="text" id="input" placeholder="Search 3 items" />
      </aside>
    </main>
  )
}
```

Try adding classes to JSX markup, or a `<label>` to connect inputs:

```js
const App = () => {
  return (
    <main>
      <h1>Learn React!</h1>
      <p className="text-center">
        This is a paragraph of text written in React
      </p>
      <label htmlFor="input">Input label</label>
      <input type="text" id="input" placeholder="Search 3 items" />
    </main>
  )
}
```

Notice the special `className` & `htmlFor` attribute names.

There is a slightly different syntax to pass variables to props:

```js
const App = () => {
  const contents = 'This is a paragraph of text written in React'
  const inputId = 'input'
  const numItems = 3

  return (
    <main>
      <h1>Learn React!</h1>
      <p className="text-center">{contents}</p>
      <label htmlFor={inputId}>Input label</label>
      <input
        type="text"
        id={inputId}
        placeholder={`Search ${numItems} items`}
      />
    </main>
  )
}
```

You can add inline styles to some elements by passing an object to the `style` prop:

```js
const App = () => {
  const contents = 'This is a paragraph of text written in React'
  const inputId = 'input'
  const numItems = 3

  return (
    <main style={{ maxWidth: '750px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '5em' }}>Learn React!</h1>
      <p className="text-center">{contents}</p>
      <label htmlFor={inputId}>Input label</label>
      <input
        type="text"
        id={inputId}
        placeholder={`Search ${numItems} items`}
        style={{ color: '#00008b', marginTop: 30 }}
      />
    </main>
  )
}
```

Notice the use of camelCase style properties (`maxWidth`, `fontSize`, `marginTop`, etc)

We can create our own custom `TextInput` component to wrap the `<input />`:

```js
const TextInput = (props) => {
  const { id, placeholder, color } = props

  return (
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      style={{ color: color, marginTop: 30 }}
    />
  )
}

const App = () => {
  const contents = 'This is a paragraph of text written in React'
  const inputId = 'input'
  const numItems = 3

  return (
    <main style={{ maxWidth: '750px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '5em' }}>Learn React!</h1>
      <p className="text-center">{contents}</p>
      <label htmlFor={inputId}>Input label</label>
      <TextInput
        id={inputId}
        placeholder={`Search ${numItems} items`}
        color="#00008b"
      />
    </main>
  )
}
```

Use the React Developer Tools to inspect the component hierarchy of the `App`.

## 💡 Exercises

In [`App.js`](./App.js), convert the HTML markup for a Giphy search result to JSX and render within the `App` component.

(If at any point you get stuck, you can take a peek at the [answers](./answers/App.js))

## 🤓 Bonus!

### 1. Use variables

Within the `App` component, extract variables for the data fields and use them within the JSX:

```js
const App = () => {
  const title = "I'm Ready Lets Go GIF by Leroy Patterson"
  const url =
    'https://giphy.com/gifs/leroypatterson-cat-glasses-CjmvTCZf2U3p09Cn0h'
  const previewUrl =
    'https://media2.giphy.com/media/CjmvTCZf2U3p09Cn0h/giphy-preview.mp4?cid=376dcdd944vhe2rsqwiiqnrfkuh6v7qw9cuermk7bsxburuv&rid=giphy-preview.mp4'
  const rating = 'G'

  return (
    <main>
      <h1>Giphy Search!</h1>

      {/* Use variables within JSX markup here */}
    </main>
  )
}
```

### 2. Create a component

Extract the JSX markup for the Giphy search result into a `Result` component and pass the variables as props to `<Result />`.

## 🧠 Elaboration & Feedback

After you're done with the exercise and before jumping to the next step, please fill out the [elaboration & feedback form](https://docs.google.com/forms/d/e/1FAIpQLScRocWvtbrl4XmT5_NRiE8bSK3CMZil-ZQByBAt8lpsurcRmw/viewform?usp=pp_url&entry.1671251225=Zero+to+React+with+Hooks+Minishop&entry.1984987236=Step+1+-+JSX+and+Components). It will help seal in what you've learned.

## 📕 Resources

- [Rendering Elements](https://reactjs.org/docs/rendering-elements.html)
- [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
- [JSX in Depth](https://reactjs.org/docs/jsx-in-depth.html)
- [JSX Tips and Gotchas for Beginners](https://ui.dev/jsx/)
- [Components and Props](https://reactjs.org/docs/components-and-props.html)
- [Inline Styles](https://reactjs.org/docs/dom-elements.html#style)
- [Material-UI](https://material-ui.com/)
- [React + Foundation](https://react.foundation/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React without JSX](https://reactjs.org/docs/react-without-jsx.html)
- [Babel REPL](http://babeljs.io/repl/)

## ❓ Questions

Got questions after the minishop? Need further clarification? Feel free to post a question in [Ben Ilegbodu's AMA](https://www.benmvp.com/ama/)!

## 👉🏾 Next Step

Go to [Step 2 - State](../02-state).
