import { useDispatch, useSelector } from "react-redux";
import {
  selectBooksError,
  selectBooksList,
  selectBooksLoading,
} from "../../store/books/selectors";
import { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Spinners from "../Spinners/Spinners";
import "./BooksList.css";
import { getBooks } from "../../store/books/actions";

function BooksList() {
  // const [ books, setBooks ] = useState( [] );
  // const [ error, setError ] = useState( false );
  // const [ loading, setLoading ] = useState( false );
  // const url = "http://myjson.dit.upm.es/api/bins/f6dr";
  const dispatch = useDispatch();
  const books = useSelector(selectBooksList);
  const isLoading = useSelector(selectBooksLoading);
  const error = useSelector(selectBooksError);

  const requestBooksList = async () => {
    dispatch(getBooks());
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

  useEffect(() => {
    requestBooksList();
    // eslint-disable-next-line
  }, []);

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
    <Card key={book.id} className=" mb-3 book">
      <div className="d-block mx-auto pt-3 mb-2 book__img-wrapper">
        <Card.Img
          src={book.src}
          alt="Изображение книги"
          className=" book__img"
        />
      </div>
      <Card.Body className="flex-fill flex-wrap">
        <Card.Title className="books__author">
          <span className="fw-bold d-block">Автор: </span>
          {book.author}{" "}
        </Card.Title>
        <Card.Text className="book__title">
          <span className="fw-bold d-block">Название книги: </span>
          {book.title}
        </Card.Text>
      </Card.Body>
    </Card>
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
        <h1 className="page__title">List of books</h1>
      </Row>
      {/*{ isLoading ? (*/}
      {/*  <Spinners/>*/}
      {/*) : (*/}
      {/*  <>*/}
      {/*    <Button onClick={ requestBooksList }>Retry</Button>*/}
      {/*    { !!error && <h4>ERROR: { error }</h4> }*/}
      {/*    <ListGroup className="books mx-auto">*/}
      {/*      { books.map( renderBooksList ) }*/}
      {/*    </ListGroup>*/}
      {/*  </>*/}
      {/*) }*/}

      <Row className="mb-5">
        <Col className="mx-auto" sm={10} md={11}>
          {isLoading ? (
            <Spinners />
          ) : error ? (
            <>
              <Button onClick={requestBooksList} className="mb-3">
                Retry
              </Button>
              {!!error && <h4>{error}</h4>}
            </>
          ) : (
            <>
              <div className="books mx-auto d-flex flex-wrap justify-content-evenly">
                {books.map(renderBooksList)}
              </div>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default BooksList;

