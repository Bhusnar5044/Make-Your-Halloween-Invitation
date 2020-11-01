import React from 'react'
import Style from './Poster.module.scss'
import pic1 from '../../Assets/PostersImages/BlackandOrangeVintageHorrorHalloweenPoster.png'
import pic2 from '../../Assets/PostersImages/Green and Orange Vintage Horror Halloween Poster.jpg'
import pic3 from '../../Assets/PostersImages/Orange and Beige Illustration Wicked Cute Halloween Circle Sticker.jpg'
import pic4 from '../../Assets/PostersImages/Orange Skulls Pattern Halloween Party Poster.jpg'
import pic5 from '../../Assets/PostersImages/Orange Spooky Graveyard Halloween Poster.jpg'
import pic6 from '../../Assets/PostersImages/Red and Black Woman Edgy Monochrome Halloween Party Poster.jpg'


const Poster = () =>{
    const parr = [
        {
            "id":1,"data":{pic1}
        },
        {
            "id":2,"data":{pic2}
        },
        {
            "id":3,"data":{pic3}
        },
        {
            "id":4,"data":{pic4}
        },
        {
            "id":5,"data":{pic5}
        },
        {
            "id":6,"data":{pic6}
        }
    ]

    return(
        <div className={Style.main}>
            <div className={Style.search}>
                <input type='text' placeholder='Hack or Treat' />
                <button>Visualize</button>
            </div>
            <div className={Style.posters}>
                <img src={pic1}/>
                <img src={pic2}/>
                <img src={pic3}/>
                <img src={pic4}/>
                <img src={pic5}/>
                <img src={pic6}/>
            </div>
        </div>
    )
}

export default Poster