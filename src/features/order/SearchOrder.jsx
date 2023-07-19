import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchOrder() {

    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    //we are saying when we search for the order # we navigate to the order ${query}
    function handleSubmit(e) {
        e.preventDefault()
        if(!query) return;
        navigate(`/order/${query}`)
        setQuery('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder='Search For #'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className='bg-yellow-100 rounded-full px-4 py-2
                text-sm placeholder:text-stone-500 w-28 sm:w-64
                sm:focus:w-72 transition-all duration-300 focus:outline-none
                focus:ring focus:ring-yellow focus:ring-opacity-50'
            />
        </form>
    )
}

export default SearchOrder