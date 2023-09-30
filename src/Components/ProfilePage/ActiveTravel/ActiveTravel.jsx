import React from "react";

// Styles
import styles from './ActiveTravel.module.css'

// Components
import ActiveTicket from "../../Tickets/ActiveTicket/ActiveTicket";
import UsedTicket from "../../Tickets/UsedTicket/UsedTicket";

const ActiveTravel = () => {

    // Mocking data
    const card13 = {
        id: "0925",
        company: "شرکت تعاونی قزوین ایران تهران",
        type: "مارال تخت شو 25 نفره",
        vip: true,
        time: "5:30",
        from: "تهران",
        to: "قزوین",
        station: "پایانه بیقی",
        uni: "دانشگاه بین المللی قزوین",
        stops: "پایانه اول، پایانه دوم پایانه سوم",
        price: "7.000.000",
        seats: "16",
        driver: "سعید سعیدبنا",
        driverCode: "11345",
        CarCode: "99-895K55",
        trackingNum: "24587621"
    }

    const card14 = {
        id: "0925",
        company: "شرکت تعاونی قزوین ایران تهران",
        type: "مارال تخت شو 25 نفره",
        vip: true,
        time: "5:30",
        from: "تهران",
        to: "قزوین",
        station: "پایانه بیقی",
        uni: "دانشگاه بین المللی قزوین",
        stops: "پایانه اول، پایانه دوم پایانه سوم",
        price: "7.000.000",
        seats: "16",
        driver: "سعید سعیدبنا",
        driverCode: "11345",
        CarCode: "99-895K55",
        trackingNum: "24587621"
    }

    const card15 = {
        id: "0925",
        company: "شرکت تعاونی قزوین ایران تهران",
        type: "مارال تخت شو 25 نفره",
        vip: true,
        time: "5:30",
        from: "تهران",
        to: "قزوین",
        station: "پایانه بیقی",
        uni: "دانشگاه بین المللی قزوین",
        stops: "پایانه اول، پایانه دوم پایانه سوم",
        price: "7.000.000",
        seats: "16",
        driver: "سعید سعیدبنا",
        driverCode: "11345",
        CarCode: "99-895K55",
        trackingNum: "24587621"
    }

    const details = [
        card13,
    ]

    const useddetails = [
        card13,
        card14,
        card15,
    ]

    return ( 
        <div className={styles.ActiveTravel_Container}>
            <section className={styles.ActiveTicket_sec}>
                <h2>بلیط های فعال</h2>
                {
                    details?.map(service => <  ActiveTicket key={service.id} productData={service}/>)
                }
            </section>
            <section className={styles.UsedTickets_sec}>
                <h2>سفرهای انجام شده</h2>
                {
                    useddetails?.map(service => <  UsedTicket key={service.id} productData={service}/>)
                }
            </section>
        </div>  
     );
}
 
export default ActiveTravel;