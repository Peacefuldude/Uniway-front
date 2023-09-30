import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// Styles
import styles from './Latest.module.css'

// Components
import Ticket from "../../Tickets/Ticket";

const Lateset = () => {

    // url check
    const [pathIsTravelPage, setPathIsTravelPage] = useState(false);
    useEffect(()=> {
        if (window.location.pathname === "/travelpage") {
            setPathIsTravelPage(!pathIsTravelPage)
        }
    }, [])

    // Gathering data
    const [data, setData] = useState({
        from: "",
        To: "",
        date: ""
    });

    const changeHandler = (event) => {
        setData({
            ...data, [event.target.name]: event.target.value,
        });
    }

    const [touched, setTouched] = useState({});
    const focusHandler = (event) => {
        setTouched({
            ...touched, [event.target.name]: true,
    })
    }
    const unFocusHandler = (event) => {
        setTouched({
            ...touched, [event.target.name]: false,
        })
    }

    const [buttonDisable, setButtonDisable] = useState(false);
    const Navigate = useNavigate();
    const [welcomeMassage, setWelcomeMassage] = useState(false);

    const [isError_1, setIsError_1] = useState("")

    const submitHandler = (event) => {
        event.preventDefault();
        const LOGIN_DATA = data;
        setButtonDisable(true)
        axios.post("http://localhost:3000/user/login", LOGIN_DATA)
            .then((response)=> {
                console.log(response);
                if (response) {
                    localStorage.setItem('uniwayuser', JSON.stringify(response.data))
                    setWelcomeMassage(true)
                    setTimeout(()=>Navigate("/home"), 2000)
                }
            })

            .catch((errors)=> {
                console.log(errors)
                if (errors) {
                    setIsError_1(errors.response.data.errors.message)
                    setButtonDisable(false)
                }
            })
    }

    const [active, setActive] = useState();
    useEffect(()=> {
        setActive(true);
    }, [])

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
        seats: "16"
    }
    const card14 = {
        id: "5401",
        company: "شرکت تعاونی قزوین ایران تهران",
        type: "مارال تخت شو 25 نفره",
        vip: true,
        time: "5:30",
        from: "تهران",
        to: "قزوین",
        station: "بیهقی",
        uni: "دانشگاه بین المللی قزوین",
        stops: "پایانه اول، پایانه دوم پایانه سوم",
        price: "7.000.000",
        seats: "16"
    }
    const card15 = {
        id: "3698",
        company: "شرکت تعاونی قزوین ایران تهران",
        type: "مارال تخت شو 25 نفره",
        vip: true,
        time: "5:30",
        from: "تهران",
        to: "قزوین",
        station: "بیهقی",
        uni: "دانشگاه بین المللی قزوین",
        stops: "پایانه اول، پایانه دوم پایانه سوم",
        price: "7.000.000",
        seats: "16"
    }

    const details = [
        card13,
        card14,
        card15,
    ]

    return ( 
        <div className={styles.Lateset_Container}>
            { pathIsTravelPage ? 
                undefined
                :
                <section className={styles.header_sec}>
                    <h1>اتوبوس های امروز</h1>
                </section>
            }
            { pathIsTravelPage ? 
                <section className={styles.Search_section}>
                    <form className={styles.formContainer} onSubmit={submitHandler}>
                        <input
                            className={styles.formInput_from}
                            type='text'
                            name='from'
                            placeholder='مبدا'
                            value={data.from}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            onBlur={unFocusHandler}
                        />
                        <input 
                            className={styles.formInput_To}
                            type='text'
                            name='To'
                            placeholder='مقصد'
                            value={data.To}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            onBlur={unFocusHandler}
                        />
                        <input 
                            className={styles.formInput_date}
                            type='text'
                            name='date'
                            placeholder='تاریخ'
                            value={data.date}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                            onBlur={unFocusHandler}
                        />
                        <div className={buttonDisable ? styles.formButtonsDisabled : styles.formButtons}>
                            <button type="submit" className={styles.submitButton}><span>جست و جو</span></button>
                        </div>
                    </form>
                </section>
            : undefined
            }
            <section className={styles.btn_sec}>
                <div className={styles.btn_div_left}>
                    <select>
                        <option value="none" selected disabled hidden>لیست سفرهای آماده</option>
                        <option value="AZARBAIJANSHARGHI">قزوین به تهران</option>
                        <option value="AZARBAIJANSHARGHI">تهران به قزوین</option>
                    </select>
                </div>
                <div className={styles.btn_div_right}>
                    <button>کمترین قیمت</button>
                    <button>زودترین زمان حرکت</button>
                </div>
            </section>
            <section className={styles.ticket_sec}>
                {
                    details?.map(service => <  Ticket key={service.id} productData={service}/>)
                }
            </section>
        </div>
     );
}
 
export default Lateset;