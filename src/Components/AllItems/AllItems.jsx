import React from 'react'
import Item from '../Item/Item'
import Poster from '../Posters/Poster'
import Style from './AllItems.module.scss'

const AllItems = () =>{
    let arr = [
        {"id":1,"url":'https://media.giphy.com/media/5oWpOD8Thsmo8/giphy.gif'},
        {"id":2,"url":'https://media.giphy.com/media/aCRTblAWKJroc/giphy.gif'},
        {"id":3,"url":'https://media.giphy.com/media/5fOiRnJOUnTMY/giphy.gif'},
        {"id":4,"url":'https://media.giphy.com/media/9VhbMwQUgXliE/giphy.gif'},
        {"id":5,"url":'https://media.giphy.com/media/7POJztfj4s3vO/giphy.gif'},
        {"id":6,"url":'https://media.giphy.com/media/I45vYOHGvWK2I/giphy.gif'},
        {"id":7,"url":'https://media.giphy.com/media/hfylnKvnV24LK/giphy.gif'},
        {"id":8,"url":'https://media.giphy.com/media/aCRTblAWKJroc/giphy.gif'},
        {"id":9,"url":'https://media.giphy.com/media/aCRTblAWKJroc/giphy.gif'},
        {"id":10,"url":'https://media.giphy.com/media/aCRTblAWKJroc/giphy.gif'},
    ]
    // let items = [];
    // for(let i=0;i<=10;i++)
    // items.push(<Item key={i} data={i}/>)
    return(
        <div className={Style.main}>
            <div className={Style.allItems}>
            {
                arr.map(i => <Item data={i.id} url={i.url}/>)
            }
            </div>
            <Poster/>
        </div>
    )
}

export default AllItems