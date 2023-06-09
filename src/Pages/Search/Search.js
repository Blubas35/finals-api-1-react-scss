import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../../Components/container/Container'
import AuthorsSearch from './items/AuthorsSearch'
import BookSearch from './items/BookSearch'
import ReviewSearch from './items/ReviewSearch'

const Search = () => {

    const { keyword } = useParams()

    const [bookSearch, setBookSearch] = useState([])
    const [reviewsSearch, setReviewsSearch] = useState([])
    const [authorsSearch, setAuthorsSearch] = useState([])
    const [bookTitle, setBookTitle] = useState('')
    const [isLoading, SetIsLoading] = useState(true)


    useEffect(() => {
        if (keyword) {
            fetch(`https://my-json-server.typicode.com/Blubas35/data.json/books?q=${keyword}`)
                .then((res) => res.json())
                .then((results) => {
                    setBookSearch(results);
                    setBookTitle(results.map((result) => result.title));
                    SetIsLoading(false);
                });

            fetch(`https://my-json-server.typicode.com/Blubas35/data.json/reviews?q=${keyword}`)
                .then((res) => res.json())
                .then((results) => {
                    setReviewsSearch(results);
                    SetIsLoading(false);
                });

            fetch(`https://my-json-server.typicode.com/Blubas35/data.json/authors?q=${keyword}`)
                .then((res) => res.json())
                .then((results) => {
                    setAuthorsSearch(results);
                    SetIsLoading(false);
                });
        } else {
            setBookSearch([]);
            setReviewsSearch([]);
            setAuthorsSearch([]);
            SetIsLoading(false);
        }
    }, [keyword]);

    return (
        <Container>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                keyword && keyword.length > 0 && (
                    <>
                        <Link to={'/books'} className='button'>
                            Back to the last page
                        </Link>
                        <BookSearch data={bookSearch} keyword={keyword}></BookSearch>

                        <ReviewSearch data={reviewsSearch} keyword={keyword}></ReviewSearch>

                        <AuthorsSearch
                            data={authorsSearch}
                            keyword={keyword}
                            bookTitle={bookTitle}
                        ></AuthorsSearch>
                    </>
                )
            )}
            {!isLoading && bookSearch.length === 0 && reviewsSearch.length === 0 && authorsSearch.length === 0 && (
                <>
                    <h2> No results found... </h2>
                    <Link to={'/books'} className='button'>
                        Back to the last page
                    </Link>
                </>
            )}
        </Container>
    )
}

export default Search