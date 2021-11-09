# Step 1 - JSX & Components

[JSX](https://reactjs.org/docs/jsx-in-depth.html) is syntactic sugar for the plain JavaScript function [`React.createElement()`](https://reactjs.org/docs/react-api.html#createelement). React elements are the smallest building blocks of React apps that describe what you want to see on the screen.

Unlike browser DOM elements, React elements are plain objects, and are cheap to create. [`ReactDOM`](https://reactjs.org/docs/react-dom.html) takes care of updating the DOM to match the React elements.

[React components](https://reactjs.org/docs/components-and-props.html) let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen, etc. In React apps, all of these are commonly expressed as components.

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.

🏅 The goal of this step is to practice with JSX and creating components.

## ⭐ Concepts

- Rendering elements with JSX
- Handling special element attribute names
- Adding inline styles
- Creating and composing React components
- Configuring components via passing props

## 💡 Exercises

In [`App.js`](./App.js), convert the HTML markup for a Giphy search result to JSX and render within the `App` component.

_Reminder:_ The `style` attribute in JSX takes an object.

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

      {}
    </main>
  )
}
```

### 2. Create a component

Extract the JSX markup for the Giphy search result card into a `Result` component and pass the variables as props to `<Result />`.

## 🧠 Elaboration & Feedback

After you're done with the exercise and before jumping to the next step, please fill out the [elaboration & feedback form](https://docs.google.com/forms/d/e/1FAIpQLScRocWvtbrl4XmT5_NRiE8bSK3CMZil-ZQByBAt8lpsurcRmw/viewform?usp=pp_url&entry.1671251225=Zero+to+React+with+Hooks+Minishop&entry.1984987236=Step+1+-+JSX+and+Components). It will help seal in what you've learned.

## 📕 Resources

- [Rendering Elements](https://reactjs.org/docs/rendering-elements.html)
- [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
- [JSX in Depth](https://reactjs.org/docs/jsx-in-depth.html)
- [JSX Tips and Gotchas for Beginners](https://ui.dev/jsx/)
- [Components and Props](https://reactjs.org/docs/components-and-props.html)
- [Typechecking with PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
- [Custom Prop Types](https://github.com/airbnb/prop-types)
- [React without JSX](https://reactjs.org/docs/react-without-jsx.html)
- [Babel REPL](http://babeljs.io/repl/)
- [Inline Styles](https://reactjs.org/docs/dom-elements.html#style)
  - [MUI](https://mui.com/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Chakra UI](https://chakra-ui.com/)
  - [React Bootstrap](https://react-bootstrap.github.io/)

## 👉🏾 Next Step

Go to [Step 2 - State](../02-state).
