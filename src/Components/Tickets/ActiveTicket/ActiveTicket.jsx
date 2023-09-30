import React from "react";

// Styles
import styles from './ActiveTicket.module.css'

// Images
import vip from '../../../Images/vip.png'
import ticket from '../../../Images/ticket.png'

const ActiveTicket = ({productData}) => {
    return ( 
        <div className={styles.Ticket_Container}>
            <section className={styles.left_sec}>
                <div>
                    <p>{productData.driverCode}</p>
                    <span>کد راننده</span>
                </div>
                <button><img src={ticket} alt="ticket icon" />استرداد بلیط</button>
                <h4>{productData.CarCode} پلاک</h4>
                <h4>{productData.trackingNum} شماره پیگیری</h4>
            </section>
            <section className={styles.right_sec}>
                <div className={styles.right_top}>
                    <div className={styles.bus_info}>
                        <h1>{productData.company}</h1>
                        <div>
                            <p>{productData.driver}</p>
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
                            <img src="" alt="arrow indicating where the bus goes." />
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
 
export default ActiveTicket;