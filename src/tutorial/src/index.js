import React from 'react'
import ReactDom from 'react-dom'

//css
import './css/index.css'

//setup vars
const author = 'Amelia Hepworth'
const title = 'I Love You to the Moon and Back'
const imgSrc =
  'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg'

const BookList = () => {
  return (
    <>
      <section className='booklist'>
        <Book job='developer' />
        <Book title='random title' number={22} />
      </section>
    </>
  )
}

const Book = (props) => {
  return (
    <article className='book'>
      <img src={imgSrc} alt='' />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
