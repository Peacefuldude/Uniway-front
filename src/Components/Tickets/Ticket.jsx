import React from "react";

// Styles
import styles from './Ticket.module.css'

// Images
import vip from '../../Images/vip.png'
import ticket from '../../Images/ticket.png'

const Ticket = ({productData}) => {
    return ( 
        <div className={styles.Ticket_Container}>
            <section className={styles.left_sec}>
                <div>
                    <p>{productData.price}</p>
                    <span>ریال</span>
                </div>
                <button><img src={ticket} alt="ticket icon" />انتخاب بلیط</button>
                <h4>{productData.seats} صندلی باقی مانده</h4>
            </section>
            <section className={styles.right_sec}>
                <div className={styles.right_top}>
                    <div className={styles.bus_info}>
                        <h1>{productData.company}</h1>
                        <div>
                            <p>{productData.type}</p>
                            {productData.vip ? <img src={vip} alt="vip sign" /> : undefined}
                        </div>
                    </div>
                    <div className={styles.travel_info}>
                        <h1>{productData.time}</h1>
                        <div className={styles.travel_pic}>
                            <div>
                                <p>{productData.from}</p>
                                <h5>{productData.station}</h5>
                            </div>
                            <img src="" alt="arrow" />
                            <div>
                                <p>{productData.to}</p>
                                <h5>{productData.uni}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.right_bottom}>
                    <h1>پایانه های کرج: </h1>
                    <p>{productData.stops}</p>
                </div>
            </section>
        </div>
     );
}
 
export default Ticket;