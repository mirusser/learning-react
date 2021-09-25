import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

const StudyCarousel = ({ group }) => {
  const [showFront, setShowFront] = useState(true)

  return (
    <Carousel
      hidden={!group || group.length === 0}
      onSlide={() => {
        setShowFront(true)
      }}
    >
      {group.map((card, index) => (
        <Carousel.Item key={index} onClick={() => setShowFront(!showFront)}>
          <div
            className={showFront ? 'card card-front' : 'card card-back flip'}
          >
            <h3 className={showFront ? 'content' : 'content flip'}>
              {showFront ? card.front : card.back}
            </h3>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default StudyCarousel
