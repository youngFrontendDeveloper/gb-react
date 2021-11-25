import { useDispatch, useSelector } from "react-redux";
import { selectBooksError, selectBooksList, selectBooksLoading } from "../../store/books/selectors";
import { useCallback, useEffect } from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import Spinners from "../Spinners/Spinners";
import "./BooksList.css";
import { getBooks } from "../../store/books/actions";


function BooksList() {
  // const [ books, setBooks ] = useState( [] );
  // const [ error, setError ] = useState( false );
  // const [ loading, setLoading ] = useState( false );
  // const url = "http://myjson.dit.upm.es/api/bins/f6dr";
  const dispatch = useDispatch();
  const books = useSelector( selectBooksList );
  const isLoading = useSelector( selectBooksLoading );
  const error = useSelector( selectBooksError );

  const requestBooksList = async() => {
    dispatch( getBooks() );
  };

  // const requestBooksList = () => {
  //   setError( false );
  //   setLoading( true );
  //   fetch( url )
  //     .then( (response) => {
  //       if( !response.ok ) {
  //         throw new Error( `Request failed with status ${ response.status }` );
  //       }
  //       return response.json();
  //     } )
  //     .then( (result) => setBooks( result ) )
  //     .catch( (err) => {
  //       setError( true );
  //       console.log( err );
  //     } )
  //     .finally( () => setLoading( false ) );
  // };

  // const requestBooksList = async() => {
  //   setError( false );
  //   setLoading( true );
  //
  //   try {
  //     const response = await fetch( url );
  //
  //     if( !response.ok ) {
  //       throw new Error( `Request failed with status ${ response.status }` );
  //     }
  //     const result = await response.json();
  //     setBooks( result );
  //   } catch( err ) {
  //     setError( true );
  //     console.warn( err );
  //   } finally {
  //     setLoading( false );
  //   }
  // };

  useEffect( () => {
    requestBooksList();
  }, [] );

  // const renderBooksList = useCallback( (book) => (
  //     <ListGroup.Item key={ book.id } className="d-flex book">
  //       <img src={ book.src } alt="Изображение книги" className="d-block book__img"/>
  //       <div>
  //         <p className="books__author"><span className="d-block">Автор: </span>{ book.author } </p>
  //         <p className="books__title"><span className="d-block">Название книги: </span>{ book.title }</p>
  //       </div>
  //     </ListGroup.Item>
  //   ), []
  // );

  const renderBooksList = (book) => (
    <ListGroup.Item key={ book.id } className="d-flex book">
      <img src={ book.src } alt="Изображение книги" className="d-block book__img"/>
      <div className="flex-fill flex-wrap">
        <p className="books__author"><span className="fw-bold d-block">Автор: </span>{ book.author } </p>
        <p className="book__title"><span className="fw-bold d-block">Название книги: </span>{ book.title }</p>
      </div>
    </ListGroup.Item>
  );

  // if( error ) {
  //   return (
  //     <>
  //       <h3>Error</h3>
  //       <Button onClick={ requestBooksList }>Retry</Button>
  //     </>
  //   );
  // }
  //
  // if( loading ) {
  //   return (
  //     <Spinners/>   // Спиннер во время загрузки
  //   );
  // }

  return (
    <Container>
     <Row>
       <h2 className="mb-3 books__title">List of books</h2>
     </Row>
      {/*{ isLoading ? (*/ }
      {/*  <Spinners/>*/ }
      {/*) : (*/ }
      {/*  <>*/ }
      {/*    <Button onClick={ requestBooksList }>Retry</Button>*/ }
      {/*    { !!error && <h4>ERROR: { error }</h4> }*/ }
      {/*    <ListGroup className="books mx-auto">*/ }
      {/*      { books.map( renderBooksList ) }*/ }
      {/*    </ListGroup>*/ }
      {/*  </>*/ }
      {/*) }*/ }

      <Row className="mb-5">
        <Col sm={10} md={8} lg={6}>

          { isLoading ? (
            <Spinners/>
          ) : error ? (
              <>
                <Button onClick={ requestBooksList } className="mb-3">Retry</Button>
                { !!error && <h4>{ error }</h4> }
              </>
            )
            : (
              <>
                <ListGroup className="books mx-auto" >
                  { books.map( renderBooksList ) }
                </ListGroup>
              </>
            ) }
        </Col>
      </Row>


    </Container>
  );
}

export default BooksList;


// [
//   {
//     "title": "The Adventures of Oliver Twist" ,
//     "author": "Charles John Huffam Dickens ",
//     "src": "https://s1.livelib.ru/boocover/1002954961/o/de5b/Charlz_Dikkens__Priklyucheniya_Olivera_Tvista.jpeg"
//   },
//   {
//     "title": "The Gentle Grafter" ,
//     "author": "O'Henry William",
//     "src": "https://www.litmir.me/data/Book/0/538000/538673/BC3_1583426977.jpg"
//   },
//   {
//     "title": "Eugene Onegin" ,
//     "author": "Alexander Pushkin",
//     "src": "https://www.litmir.me/data/Book/0/67000/67765/BC3_1490543671.jpg"
//   },
//   {
//     "title": "Kashtanka" ,
//     "author": "Anton Chekhov",
//     "src": "https://mishka-knizhka.ru/wp-content/uploads/2020/08/kashtanka3.jpg.webp"
//   },
//   {
//     "title": "Moron" ,
//     "author": "Fyodor Dostoevsky",
//     "src": "https://cdn1.ozone.ru/s3/multimedia-7/6008818891.jpg"
//   },
//   {
//     "title": "Alexander III" ,
//     "author": "Ivan Turgenev",
//     "src": "https://www.litmir.me/data/Book/0/222000/222179/BC4_1490697840.jpg"
//   }
// ]
