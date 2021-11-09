# Step 3 - Effects

Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of _side effects_. They are not part of the main render loop of a component, but are very common in React components.

🏅 The goal of this step is to learn how to use the `useEffect` hook for managing side effects.

<details>
  <summary><b>Help! I didn't finish the previous step! 🚨</b></summary>

If you didn't successfully complete the previous step, that's okay! The steps are meant to push you. 😄

However, you may find yourself in a position where you app is not compiling, and it's preventing you from working on this step. No problem! Stash your changes **in a new terminal window**, and you should be good to continue:

```sh
git stash push -m "In-progress Step 2 exercises"
```

Your app should automatically reset and you should be able to continue on with the current step.

</details>

## ⭐ Concepts

- Handling effects with and without cleanup using `useEffect`
- Optimizing `useEffect` performance by skipping redundant effects
- Making API calls with the `useEffect` hook

## 💡 Exercises

In [`App.js`](./App.js), use the `useEffect` hook to make an API request for Giphy results whenever the query changes and update the new `results` state with the API response.

> NOTE: The API results are only logged to the console for now. We will render the results in [Step 4](../04-lists/).

(If at any point you get stuck, you can take a peek at the [answers](./answers/App.js))

## 🤓 Bonus!

### 1. Polling

Add polling to `GiphySearch` such that it will continually retrieve new Giphy results after a configurable amount of seconds. Add a `pollInterval` prop to `GiphySearch` and set it to 5 seconds in `App`. Verify that if you change `pollInterval` in the React Developer Tools the previous interval is cleaned up and a new one is created.

### 2. Async `useEffect`

Use an `async` function for the call to `await getResults()` within `useEffect()` instead of calling `.then()` on its return Promise value.

🔑 _HINT:_ Remember that an `async` function **always** returns a `Promise`, but the only return value allowed for `useEffect()` is the cleanup function callback.

## 🧠 Elaboration & Feedback

After you're done with the exercise and before jumping to the next step, please fill out the [elaboration & feedback form](https://docs.google.com/forms/d/e/1FAIpQLScRocWvtbrl4XmT5_NRiE8bSK3CMZil-ZQByBAt8lpsurcRmw/viewform?usp=pp_url&entry.1671251225=Zero+to+React+with+Hooks+Minishop&entry.1984987236=Step+3+-+Effects). It will help seal in what you've learned.

## 📕 Resources

- [Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)
- [`useEffect` API Reference](https://reactjs.org/docs/hooks-reference.html#useeffect)
- [React Hooks](https://www.youtube.com/watch?v=jd8R0a2Ur8Q) 📺
- [Successfully using async functions in React useEffect](https://www.benmvp.com/blog/successfully-using-async-functions-useeffect-react/)
- [Object & array dependencies in the React useEffect Hook](https://www.benmvp.com/blog/object-array-dependencies-react-useEffect-hook/)
- [Helper functions in the React useEffect hook](https://www.benmvp.com/blog/helper-functions-react-useeffect-hook/)
- [Handling async React component effects after unmount](https://www.benmvp.com/blog/handling-async-react-component-effects-after-unmount/)
- [Introducing Hooks](https://www.youtube.com/watch?v=dpw9EHDh2bM) 📺
- [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)
- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) & Github's [`fetch` polyfill](https://github.com/github/fetch)
  - [Learning ES6: Promises](http://www.benmvp.com/learning-es6-promises/)
  - [Async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
  - [HTTP Methods](http://restfulapi.net/http-methods/)
  - [Postman](https://www.getpostman.com/)

## 👉🏾 Next Step

Go to [Step 4 - Lists & Conditionals](../04-lists).
