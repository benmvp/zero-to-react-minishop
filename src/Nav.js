import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Nav = ({ crumbs }) => (
  <nav
    aria-label="You are here"
    role="navigation"
    style={{ marginBottom: '2rem' }}
  >
    <ul className="breadcrumbs">
      <li>
        <Link to="/">Home</Link>
      </li>
      {crumbs.map((crumb) =>
        typeof crumb === 'string' ? (
          <li key={crumb}>{crumb}</li>
        ) : (
          <li key={crumb.to}>
            <Link {...crumb} />
          </li>
        ),
      )}
    </ul>
  </nav>
)
Nav.propTypes = {
  crumbs: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        to: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired,
      }),
      PropTypes.string,
    ]),
  ).isRequired,
}

export default Nav
