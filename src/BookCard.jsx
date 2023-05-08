import React from 'react'
import './Book.css'
const BookCard = (props) => {
    // const {id ,title,authors,download_count} = props
    console.log(props)
    
  return (
    <>
  <div class="book-card" id={props.id}>
  <img src={`${props.formats["image/jpeg"]}`} alt="Book Cover"/>
  <div class="book-info">
    <h3 class="book-title">{props.title}</h3>
    {/* <p class="book-author">{props.authors}</p> */}
    <div class="book-stats">
      <div class="book-download">
        <a href="#" class="download-link">Download TXT</a>
      </div>
      <div class="book-audio">
        <button class="play-button">Play Audio Book</button>
      </div>
      <div class="book-count">
        <p class="count-label">Downloads:</p>
        <p class="count-number">{props.download_count}</p>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default BookCard;