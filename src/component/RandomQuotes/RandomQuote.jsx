import React, { useState } from "react";
import '../RandomQuotes/RandomQuote.css';
import x_icon from '../assets/twitter.png';
import refresh_icon from '../assets/refresh.png';


const RandomQuote = () =>
{

    let quotes = [ ];

    async function loadQuotes () {
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }

    const random = () => {
        const select = quotes[Math.floor(Math.random()*quotes.length)]
        setQuote(select)
    }

    const twitter = () => {
        window.open(`https://twitter.com/intent/tweet?tweet=${quote.text} - ${quote.author}`)
    }

    const [quote, setQuote] = useState ({
        text : "test1",
        author : "author1",
    });

    loadQuotes();

    return (
        <div className="container">
            <div className="quote">
                {quote.text}
            </div>
            <div className="line"></div>
            <div className="bottom">

            <div className="author"> - {quote.author.split(',')[0]}</div>
            <div className="icons">
                <img src={x_icon}  onClick={() => {twitter()}} alt=""/>
                <img src={refresh_icon}  onClick={() => {random()}} alt=""/>
            
            </div>
            
            </div>
        </div>
    );
}

export default  RandomQuote