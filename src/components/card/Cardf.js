import React from 'react'
import styles from "./Card.module.scss"
const Card = ({children, cardClass}) => {
    // console.log(cardClass);
  return (
    <div>
      <div className={`${styles.card} ${cardClass}`}>
        {children}
      </div>
    </div>
  )
}

export default Card
