import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Step1 from './01-jsx/App'
import Step1Teach from './01-jsx/teach/App'
import Step1Answers from './01-jsx/answers/App'
import Step1AnswersBonus1 from './01-jsx/answers/App.bonus-1'
import Step1AnswersBonus2 from './01-jsx/answers/App.bonus-2'

import Step2 from './02-state/App'
import Step2Teach from './02-state/teach/App'
import Step2Answers from './02-state/answers/App'
import Step2AnswersBonus1 from './02-state/answers/App.bonus-1'
import Step2AnswersBonus2 from './02-state/answers/App.bonus-2'

import Step3 from './03-effects/App'
import Step3Teach from './03-effects/teach/App'
import Step3Answers from './03-effects/answers/App'
import Step3AnswersBonus1 from './03-effects/answers/App.bonus-1'
import Step3AnswersBonus2 from './03-effects/answers/App.bonus-2'

import Step4 from './04-lists/App'
import Step4Teach from './04-lists/teach/App'
import Step4Answers from './04-lists/answers/App'
import Step4AnswersBonus1 from './04-lists/answers/App.bonus-1'

// import Quiz from './quiz/App'

const Index = () => (
  <main>
    <h1>Zero to React with Hooks Minishop</h1>
    <nav
      style={{
        marginTop: '2rem',
        display: 'flex',
      }}
    >
      <ul className="vertical menu" style={{ flex: 1 }}>
        <li>
          <h4>Step 1 - JSX &amp; Components</h4>
          <ul className="nested vertical menu">
            <li>
              <Link to="/step-1">Exercises</Link>
            </li>
            <li>
              <Link to="/step-1/answers">Answers</Link>
            </li>
            <li>
              <Link to="/step-1/answers/bonus-1">Answers (Bonus #1)</Link>
            </li>
            <li>
              <Link to="/step-1/answers/bonus-2">Answers (Bonus #2)</Link>
            </li>
            <li>
              <Link to="/step-1/teach">Teach</Link>
            </li>
          </ul>
        </li>

        <li>
          <h4>Step 3 - Effects</h4>
          <ul className="nested vertical menu">
            <li>
              <Link to="/step-3">Exercises</Link>
            </li>
            <li>
              <Link to="/step-3/answers">Answers</Link>
            </li>
            <li>
              <Link to="/step-3/answers/bonus-1">Answers (Bonus #1)</Link>
            </li>
            <li>
              <Link to="/step-3/answers/bonus-2">Answers (Bonus #2)</Link>
            </li>
            <li>
              <Link to="/step-3/teach">Teach</Link>
            </li>
          </ul>
        </li>

        <li>
          <h4>Final Quiz</h4>
          <ul className="nested vertical menu">
            <li>
              <Link to="/quiz">Exercise</Link>
            </li>
          </ul>
        </li>
      </ul>

      <ul className="vertical menu" style={{ flex: 1 }}>
        <li>
          <h4>Step 2 - State</h4>
          <ul className="nested vertical menu">
            <li>
              <Link to="/step-2">Exercises</Link>
            </li>
            <li>
              <Link to="/step-2/answers">Answers</Link>
            </li>
            <li>
              <Link to="/step-2/answers/bonus-1">Answers (Bonus #1)</Link>
            </li>
            <li>
              <Link to="/step-2/answers/bonus-2">Answers (Bonus #2)</Link>
            </li>
            <li>
              <Link to="/step-2/teach">Teach</Link>
            </li>
          </ul>
        </li>

        <li>
          <h4>Step 4 - Lists</h4>
          <ul className="nested vertical menu">
            <li>
              <Link to="/step-4">Exercises</Link>
            </li>
            <li>
              <Link to="/step-4/answers">Answers</Link>
            </li>
            <li>
              <Link to="/step-4/answers/bonus-1">Answers (Bonus #1)</Link>
            </li>
            <li>
              <Link to="/step-4/teach">Teach</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </main>
)

const App = () => (
  <Router>
    <Switch>
      <Route path="/step-1/answers/bonus-1">
        <Step1AnswersBonus1 />
      </Route>
      <Route path="/step-1/answers/bonus-2">
        <Step1AnswersBonus2 />
      </Route>
      <Route path="/step-1/answers">
        <Step1Answers />
      </Route>
      <Route path="/step-1/teach">
        <Step1Teach />
      </Route>
      <Route path="/step-1">
        <Step1 />
      </Route>

      <Route path="/step-2/answers/bonus-1">
        <Step2AnswersBonus1 />
      </Route>
      <Route path="/step-2/answers/bonus-2">
        <Step2AnswersBonus2 />
      </Route>
      <Route path="/step-2/answers">
        <Step2Answers />
      </Route>
      <Route path="/step-2/teach">
        <Step2Teach />
      </Route>
      <Route path="/step-2">
        <Step2 />
      </Route>

      <Route path="/step-3/answers/bonus-1">
        <Step3AnswersBonus1 />
      </Route>
      <Route path="/step-3/answers/bonus-2">
        <Step3AnswersBonus2 />
      </Route>
      <Route path="/step-3/answers">
        <Step3Answers />
      </Route>
      <Route path="/step-3/teach">
        <Step3Teach />
      </Route>
      <Route path="/step-3">
        <Step3 />
      </Route>

      <Route path="/step-4/answers/bonus-1">
        <Step4AnswersBonus1 />
      </Route>
      <Route path="/step-4/answers">
        <Step4Answers />
      </Route>
      <Route path="/step-4/teach">
        <Step4Teach />
      </Route>
      <Route path="/step-4">
        <Step4 />
      </Route>
      {/*}

      <Route path="/quiz">
        <Quiz />
      </Route>
{*/}

      <Route path="/">
        <Index />
      </Route>
    </Switch>
  </Router>
)

export default App
