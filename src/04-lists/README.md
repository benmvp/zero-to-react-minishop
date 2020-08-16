# Step 4 - Lists & Conditionals

Because JSX is "Just JavaScript"™ there is no special template syntax for looping nor conditionals. We can use JavaScript to convert an array of data into an array of components and include them in JSX. Similarly we can use JavaScript to conditional render a component.

🏅 The goal of this step is to learn how to do logic within JSX.

<details>
  <summary><b>Help! I didn't finish the previous step! 🚨</b></summary>

If you didn't successfully complete the previous step, that's okay! The steps are meant to push you. 😄

However, you may find yourself in a position where you app is not compiling, and it's preventing you from working on this step. No problem! Stash your changes **in a new terminal window**, and you should be good to continue:

```sh
git stash push -m "In-progress Step 3 exercises"
```

Your app should automatically reset and you should be able to continue on with the current step.

</details>

## ⭐ Concepts

- Rendering dynamic lists of data
- Handling special `key` prop
- Conditionally rendering components

## 💡 Exercises

In [`App.js`](./App.js), map over the `results` state and render a `<Result>` for each item.

> NOTE: Don't forget the `key` prop on the `<Result>` components

Only render the entire results `<div>` when there are results.

## 🤓 Bonus!

### 1. Add limit filter

Add a `<select>` element to the `SearchForm` to change the number of Giphy images displayed.

- Declare a `const LIMITS = ['6', '12', '18', '24', '30']` constant and map over it to generate the `<option value={limit}>` elements within the `<select>`
- Add an `initialLimit` prop to `GiphySearch` and set it to 12
- The `getResults` API call takes a property called `limit` to control the number of results returned

## 🧠 Elaboration & Feedback

After you're done with the exercise and before jumping to the next step, please fill out the [elaboration & feedback form](https://docs.google.com/forms/d/e/1FAIpQLScRocWvtbrl4XmT5_NRiE8bSK3CMZil-ZQByBAt8lpsurcRmw/viewform?usp=pp_url&entry.1671251225=Zero+to+React+with+Hooks+Minishop&entry.1984987236=Step+4+-+Lists+and+Conditionals). It will help seal in what you've learned.

## 📕 Resources

- [Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)
- [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
- [`Array.prototype.map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

## 👉🏾 Next Step

Go to the [End](../end).
