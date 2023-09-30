import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

// Stylse
import styles from './FullPage.module.css'

// Components
import Landing from './Landing/Landing';
import Latest from './Lateset/Lateset';
import QandaPage from './QandaPage/QandaPage';
import Footer from '../Footer/Footer';

const FullPage = () => {

    return ( 
        <div className={styles.fullpage_container}>
            <section className={styles.Landing_section}>
                <  Landing/>
            </section>
            <section className={styles.Latest_section}>
                <  Latest/>
            </section>
            <section className={styles.QandaPage_section}>
                <  QandaPage/>
            </section>
            <section className={styles.Footer_section}>
                <  Footer/>
            </section>
        </div>
     );
}
 
export default FullPage;
