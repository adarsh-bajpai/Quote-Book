import React from 'react'
import QuotesItem from './QuotesItem'

const QuotesList = (props) => {
    const { quotes } = props
    return (
        <div>
            {
                quotes.length === 0 ? (
                    <div><h2>No Quotes Found</h2>
                        <p> Add you First Quote </p>
                    </div>
                ) : (
                        <div>
                            <h2> My Quotes - {quotes.length}</h2>
                            { quotes.map((quote)=>{
                                return <QuotesItem key={quote.id} {...quote}/>
                            })
                            }
                        </div>
                    )

            }
        </div>
    )
}

export default QuotesList