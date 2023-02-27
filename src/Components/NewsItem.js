import PropTypes from 'prop-types'
import React, { Component } from 'react'

// export class NewsItem extends Component {
//     static propTypes = {}
//     render() {
const NewsItem=(props)=>{

    let { title, description, imageUrl ,Url} = props;

    return (
        <div>
            <div className="card border-dark" style={{width:"18rem"}}>
                <img style={{height:"11rem"}} src={imageUrl?imageUrl:"https://media.istockphoto.com/id/1300296533/vector/background-screen-saver-on-breaking-news-stock-illustrations.jpg?s=612x612&w=0&k=20&c=habX0aPq_P147Hv03tdCVO57TcwCTNkSZZ0XCx28T3k="} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description?description.slice(0,Math.min(30,description.length))+"...":""}</p>
                    <a href={Url} target="_blank" className="btn btn-primary">Read More...</a>
                </div>
            </div>
        </div>
    )
}
//     }
// }

export default NewsItem