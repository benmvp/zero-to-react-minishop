import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

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

import Quiz from './quiz/App'

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
          <h4>Step 4 - Lists &amp; Conditionals</h4>
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
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />

      <Route path="/step-1" element={<Step1 />} />
      <Route path="/step-1/teach" element={<Step1Teach />} />
      <Route path="/step-1/answers" element={<Step1Answers />} />
      <Route path="/step-1/answers/bonus-1" element={<Step1AnswersBonus1 />} />
      <Route path="/step-1/answers/bonus-2" element={<Step1AnswersBonus2 />} />

      <Route path="/step-2" element={<Step2 />} />
      <Route path="/step-2/teach" element={<Step2Teach />} />
      <Route path="/step-2/answers" element={<Step2Answers />} />
      <Route path="/step-2/answers/bonus-1" element={<Step2AnswersBonus1 />} />
      <Route path="/step-2/answers/bonus-2" element={<Step2AnswersBonus2 />} />

      <Route path="/step-3" element={<Step3 />} />
      <Route path="/step-3/teach" element={<Step3Teach />} />
      <Route path="/step-3/answers" element={<Step3Answers />} />
      <Route path="/step-3/answers/bonus-1" element={<Step3AnswersBonus1 />} />
      <Route path="/step-3/answers/bonus-2" element={<Step3AnswersBonus2 />} />

      <Route path="/step-4" element={<Step4 />} />
      <Route path="/step-4/teach" element={<Step4Teach />} />
      <Route path="/step-4/answers" element={<Step4Answers />} />
      <Route path="/step-4/answers/bonus-1" element={<Step4AnswersBonus1 />} />

      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  </BrowserRouter>
)

export default App
