import React from 'react'

// const Book = (props) => {
//   const { imgSrc, title, author } = props.book
//   return (
//     <article className='book'>
//       <img src={imgSrc} alt='' />
//       <h1>{title}</h1>
//       <h4>{author.toUpperCase()}</h4>
//     </article>
//   )
// }

const Book = ({ imgSrc, title, author, children }) => {
  //attribute, eventHandler

  const clickHandler = () => {
    alert('Hello world')
  }

  const complexExampleHandler = (author) => {
    alert(author)
  }

  const onMouseOverHandler = (title) => {
    console.log(title)
  }

  return (
    <article className='book' onMouseOver={() => onMouseOverHandler(title)}>
      <img src={imgSrc} alt='' />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {children}
      <button type='button' onClick={clickHandler}>
        Reference example
      </button>
      <button type='button' onClick={() => alert(title)}>
        Inline example
      </button>
      <button type='button' onClick={() => complexExampleHandler(author)}>
        More complex example
      </button>
    </article>
  )
}
export default Book
