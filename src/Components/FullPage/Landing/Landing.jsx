import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// Styles
import styles from './Landing.module.css'

// Images
import asv from '../../../Images/logo.png'

// Components
import Navbar from '../../Navbar/Navbar';

const Landing = () => {

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

    return ( 
        <div className={styles.Landing_Container}>
            <section className={styles.Navbar_section}>
                <  Navbar/>
            </section>
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
        </div>
     );
}
 
export default Landing;