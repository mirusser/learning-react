import React from 'react'
import ReactDom from 'react-dom'

//css
import './css/index.css'

import { books } from './books'
import Book from './Book'

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

ReactDom.render(<BookList />, document.getElementById('root'))
