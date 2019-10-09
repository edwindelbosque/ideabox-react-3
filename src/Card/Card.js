import React from 'react';
import PropTypes from 'prop-types'
import './Card.css'

const Card = ({ id, title, description, removeIdea, isFavorite }) => {
  const favoriteClass = isFavorite ? 'favorite' : 'card'

  return (
    <section className={favoriteClass}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => removeIdea(id)}>🗑</button>
    </section>
  )
}

export default Card;

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
  removeIdea: PropTypes.func,
  isFavorite: PropTypes.bool
}

Card.defaultProps = {
  isFavorite: false
}