# Step 2 - State

We make an application feel interactive by changing how it looks when the user interacts with it. In React, we don't directly update the UI after user interactions. Instead, we update the state of a component, which causes the component to re-render.

And re-rendering the component with the new value of state causes the UI to change. So what a component renders depends on the value of the **props** passed into it and the internal **state** it maintains.

🏅 The goal of this step is to learn how to maintain state within a component.

<details>
  <summary><b>Help! I didn't finish the previous step! 🚨</b></summary>

If you didn't successfully complete the previous step, that's okay! The steps are meant to push you. 😄

However, you may find yourself in a position where you app is not compiling, and it's preventing you from working on this step. No problem! Stash your changes **in a new terminal window**, and you should be good to continue:

```sh
git stash push -m "In-progress Step 1 exercises"
```

Your app should automatically reset and you should be able to continue on with the current step.

</details>

## ⭐ Concepts

- Maintaining component state with the `useState` hook
- Handling user interaction
- Handling HTML form elements
- Passing data back up the component tree

## 💡 Exercises

In [App.js](./App.js):

1. Update `GiphySearch` to maintain the query value using the `useState` hook
1. Call the `setQuery` update function in the `onQueryChange` prop of `SearchForm`
1. Update the text input in the `SearchForm` to set its `value` based on the `query` value and call the `onQueryChange` prop with the changed text value

(If at any point you get stuck, you can take a peek at the [answers](./answers/App.js))

## 🤓 Bonus!

### 1. Display the query

Add a `<p>` below the `<SearchForm>` that will display "You are searching for **[query]** on Giphy." (with the query in bold).

### 2. Capitalize the message

Add a button that when clicked will toggle the entire query message between being upper-case and normal case.

## 🧠 Elaboration & Feedback

After you're done with the exercise and before jumping to the next step, please fill out the [elaboration & feedback form](https://docs.google.com/forms/d/e/1FAIpQLScRocWvtbrl4XmT5_NRiE8bSK3CMZil-ZQByBAt8lpsurcRmw/viewform?usp=pp_url&entry.1671251225=Zero+to+React+with+Hooks+Minishop&entry.1984987236=Step+2+-+State). It will help seal in what you've learned.

## 📕 Resources

- [Using the State Hook](https://reactjs.org/docs/hooks-state.html)
- [React Hooks: Array Destructuring Fundamentals](https://kentcdodds.com/blog/react-hooks-array-destructuring-fundamentals)
- [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)
- [Why React hooks?](https://ui.dev/why-react-hooks/)
- [Handling Events](https://reactjs.org/docs/handling-events.html)
- [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)
- [`useState` API Reference](https://reactjs.org/docs/hooks-reference.html#usestate)
- [Four characters can optimize your React component](https://www.benmvp.com/blog/four-characters-optimize-react-component/?utm_source=github&utm_medium=minishop-code&utm_campaign=zero-to-react-minishop)
- [`SyntheticEvent`](https://reactjs.org/docs/events.html)
- [Forms](https://reactjs.org/docs/forms.html)
- [DOM Elements](https://reactjs.org/docs/dom-elements.html)
- [React Hooks](https://www.youtube.com/watch?v=jd8R0a2Ur8Q) 📺
- [Introducing Hooks](https://www.youtube.com/watch?v=dpw9EHDh2bM) 📺
- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)

## 👉🏾 Next Step

Go to [Step 3 - Effects](../03-effects).
