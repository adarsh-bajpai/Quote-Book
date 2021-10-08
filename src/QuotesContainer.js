import React,{ useState } from 'react'
import QuotesList from './QuotesList'
import QuotesForm from './QuotesForm'

const QuotesContainer = (props) =>{
    const [quotes, setQuotes] = useState([])

    const addItem = (quote) =>{
        const result = [...quotes,quote]
        setQuotes(result)
    }


    return (
        <div>
            QuotesContainer
            <QuotesList quotes={quotes}/>
            <QuotesForm addItem={addItem}/>
        </div>
    )
}

export default QuotesContainer