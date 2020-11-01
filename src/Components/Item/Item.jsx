import React, { useEffect } from 'react'
import Style from './Item.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Item = ({data,url}) =>{
    useEffect(()=>{
       console.log('item: ',data);
    },[])
    return (
        <section className="day-events new">
        <div className={Style.wrapper}>
            <div className={Style.dayCard}>
                <input type="checkbox" id={data} className={Style.more} aria-hidden="true"/>
                <div className={Style.content}>
                    <div className={Style.front} style={{backgroundImage: `url(${url})`}}>
                        <div className={Style.inner}>
                        <h2>PUMPKIN CARVING</h2>
                        <label for={data} className={Style.button} aria-hidden="true">
                            Details
                        </label>
                        </div>
                    </div>
                    <div className={Style.back}>
                        <div className={Style.inner}>
                            <div className={Style.info}>
                                <span>3+</span>
                                <div className={Style.icon}>
                                    <FontAwesomeIcon icon="users" />
                                    {/* <i className="fas fa-users"></i> */}
                                    <span>years</span>
                                </div>
                            </div>
                            <div className={Style.info}>
                                <span>5</span>
                                <div className={Style.icon}>
                                <FontAwesomeIcon icon="door-open" />
                                    {/* <i className="fas fa-door-open"></i> */}
                                    <span>per group</span>
                                </div>
                            </div>
                            <div className={Style.info}>
                                <span>Y </span>
                                <div className={Style.icon}>
                                <FontAwesomeIcon icon="bed" />
                                    {/* <i className="fas fa-bed"></i> */}
                                    <span>book?</span>
                                </div>
                            </div>
                            <div className={Style.info}>
                                <span>1</span>
                                <div className={Style.icon}>
                                <FontAwesomeIcon icon="bath" />
                                    {/* <i className="fas fa-bath"></i> */}
                                    <span>bath</span>
                                </div>
                            </div>
                            <div className={Style.description}>
                                <a href='https://go.echoar.xyz/YigG' target="_blank">Have Fun</a>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates earum nostrum ipsam
                                    ullam, reiciendis nam consectetur? Doloribus voluptate architecto possimus perferendis
                                    tenetur nemo amet temporibus, enim soluta nam, debitis.</p>
                            </div>
                            <div className={Style.location}>Pumpkin Carving</div>
                            <div className={Style.price}>£6 / per person</div>
                            <label for={data} className={Style.button+' '+Style.return} aria-hidden="true">
                                <FontAwesomeIcon icon="arrow-left" />
                                {/* <i className="fas fa-arrow-left"></i> */}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    )
}

export default Item