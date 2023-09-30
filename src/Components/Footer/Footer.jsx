import React from 'react'

// Styles
import styles from './Footer.module.css'

// images
import enamad from '../../Images/enamad.png'
import unilogo from '../../Images/unilogo.png'
import footerline from '../../Images/footerline.png'
import footerline2 from '../../Images/footerline2.png'
import arrowleft from '../../Images/arrowleft.png'

const Footer = () => {
    return ( 
        <div className={styles.Footer_Container}>
            <section className={styles.footer_top_sec}>
                <section className={styles.right_sec}>
                    <section className={styles.footer_caption_sec}>
                        <img src={footerline2} alt="simple line differentionating between options" />
                        <div>
                            <h1>سامانه Uniway</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatem iure magni, ut architecto aliquam fuga! Aut dolorem eos ipsum.</p>
                        </div>
                    </section>
                    <section className={styles.footer_links_sec}>
                        <div>
                            <img src={footerline} alt="simple line differentionating between options" />
                            <h1>درباره ما</h1>
                        </div>
                        <button>صفحه اصلی</button>
                        <button>سفر های من</button>
                        <button>قوانین استرداد</button>
                        <button>قوانین و مقررات</button>
                    </section>
                    <section className={styles.footer_links_sec}>
                        <div>
                            <img src={footerline} alt="simple line differentionating between options" />
                            <h1>درباره ما</h1>
                        </div>
                        <button>تماس با ما</button>
                        <button>تیم اکما</button>
                    </section>
                </section>
                <section className={styles.left_sec}>
                    <img src={unilogo} alt="" />
                    <img src={enamad} alt="" />
                </section>
            </section>
            <section className={styles.footer_bottom_sec}>
                <div className={styles.bottom_sec_div}>
                    <div>
                        <h3>آیا شکایت یا پیشنهادی دارید؟</h3>
                        <p>با خیال راحت نظرات، پیشنهادات یا حتی شکایات خود را ثبت کنید.</p>
                    </div>
                    <button>ثبت نظر یا شکایت<img src={arrowleft} alt="cup icon" /></button>
                </div>
                <div className={styles.made_by_div}>
                    <p>کلیه حقوق این سایت متعلق به گروه اکما می باشد</p>
                </div>
            </section>
        </div>
     );
}
 
export default Footer;