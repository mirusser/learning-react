import React from 'react'
import ReactDom from 'react-dom'

//css
import './css/index.css'

//setup vars
const firstBook = {
  author: 'Amelia Hepworth',
  title: 'I Love You to the Moon and Back',
  imgSrc:
    'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg',
}
const secondBook = {
  author: 'Shannon Olsen',
  title: 'Our Class is a Family',
  imgSrc:
    'https://images-na.ssl-images-amazon.com/images/I/510g8NLbpNL._SX384_BO1,204,203,200_.jpg',
}

const BookList = () => {
  return (
    <>
      <section className='booklist'>
        <Book
          imgSrc={firstBook.imgSrc}
          title={firstBook.title}
          author={firstBook.author}
        />
        <Book
          imgSrc={secondBook.imgSrc}
          title={secondBook.title}
          author={secondBook.author}
        />
      </section>
    </>
  )
}

const Book = ({ imgSrc, title, author }) => {
  return (
    <article className='book'>
      <img src={imgSrc} alt='' />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
