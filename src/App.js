import React , {useState,useEffect} from 'react';
import SearchBar from './SearchBar';
import BookCard from './BookCard';
import axios from 'axios';
import "./App.css"
const App = () => {

  const [bookQuery , setBookQuery] = useState("");
  // const [filterBook , setfilterBook] = useState([]);
  const [books, setBooks] = useState([]);
  const [results, setResults] = useState([]);

  const handleDataFromSearch = (data)=>{
    setBookQuery(data);
  }


  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get('https://gutendex.com/books/');
      setBooks(response.data.results);
    };

    fetchBooks();
  }, []);
  console.log(books);


  const filteredBooks = books.filter(book => {
    const lowerCaseQuery = bookQuery.toLocaleLowerCase();
    const regex = new RegExp(lowerCaseQuery, 'i');
    const titleMatched = book.title.toLocaleLowerCase().includes(regex.test(lowerCaseQuery));
    console.log(titleMatched) 
    return titleMatched;
    })
    
  
    
  console.log(filteredBooks);
  return (
    <>
      <SearchBar onBookQuery={handleDataFromSearch}/>
    
       {bookQuery && filteredBooks.map((book) => (
          <BookCard  {...book} />
        ))}
      </>
  );
};

export default App;