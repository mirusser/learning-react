import React from 'react'
import ReactDom from 'react-dom'

//css
import './css/index.css'

//setup vars
const books = [
  {
    id: 1,
    author: 'Amelia Hepworth',
    title: 'I Love You to the Moon and Back',
    imgSrc:
      'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg',
  },
  {
    id: 2,
    author: 'Shannon Olsen',
    title: 'Our Class is a Family',
    imgSrc:
      'https://images-na.ssl-images-amazon.com/images/I/510g8NLbpNL._SX384_BO1,204,203,200_.jpg',
  },
  {
    id: 3,
    author: 'James Clear',
    title:
      'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    imgSrc:
      'https://images-na.ssl-images-amazon.com/images/I/51CPNIRSWeL._SX339_BO1,204,203,200_.jpg',
  },
]

const BookList = () => {
  return (
    <>
      <section className='booklist'>
        {books.map((book) => {
          return <Book key={book.id} {...book}></Book>
        })}
      </section>
    </>
  )
}

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
  return (
    <article className='book'>
      <img src={imgSrc} alt='' />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {children}
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
