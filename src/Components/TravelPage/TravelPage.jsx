import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

// Stylse
import styles from './TravelPage.module.css'

// Components
import Navbar from '../Navbar/Navbar';
import Latest from '../FullPage/Lateset/Lateset';
import Footer from '../Footer/Footer';

const TravelPage = () => {

    return ( 
        <div className={styles.TravelPage_container}>
            <section className={styles.Navbar_section}>
                <  Navbar/>
            </section>
            <section className={styles.Latest_section}>
                <  Latest/>
            </section>
            <section className={styles.Footer_section}>
                <  Footer/>
            </section>
        </div>
     );
}
 
export default TravelPage;
