# Final Quiz!

🏅 The goal of this final step, the quiz, is to apply what you've learned by putting all of the pieces together to create an auto-typist component.

<details>
  <summary><b>Help! I didn't finish the previous step! 🚨</b></summary>

If you didn't successfully complete the previous step, that's okay! The steps are meant to push you. 😄

However, you may find yourself in a position where you app is not compiling, and it's preventing you from working on the quiz. No problem! Stash your changes **in a new terminal window**, and you should be good to continue:

```sh
git stash push -m "In-progress Step 4 exercises"
```

Your app should automatically reset and you should be able to continue on with the quiz.

</details>

## 💡 Exercise

The auto-typist component will look something like [this example](./example-auto-typist.mp4) (from https://fizbuz.com/). The component will accept a `phrases` prop which is an array of strings representing the phrases to "type" in a loop. It'll also take optional `typeSpeed` & `backspaceSpeed` props, representing how fast the auto-typist types the characters and then deletes them. They will default to something reasonable.

See the [`App.js`](./App.js) for starter code of the component. There are no answers for the quiz. 🙃

Some guidance:

- Use `useState` to maintain the state of the current phrase as well as the current partial phrase being typed
- Use `useEffect` to set and clear timeouts for typing and backspacing each phrase

Share your working app with me on [Twitter](https://twitter.com/benmvp)!

## 🧠 Elaboration & Feedback

After you're done with the quiz, please fill out the [elaboration & feedback form](https://docs.google.com/forms/d/e/1FAIpQLScRocWvtbrl4XmT5_NRiE8bSK3CMZil-ZQByBAt8lpsurcRmw/viewform?usp=pp_url&entry.1671251225=Zero+to+React+with+Hooks+Minishop&entry.1984987236=Final+Quiz). It will help seal in what you've learned.

## 💲 Minishop discount

Hopefully you enjoyed working on the quiz to help you apply everything you learned. As a bonus for completing the quiz, you will receive a one-time **25% discount** to apply to any future minishop. Just send an email to team@benmvp.com before you register for the minishop, and you will receive your a discount code. Congratulations! 🎉
