import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// Styles
import styles from './EditPass.module.css'

const EditPass = () => {

    const [data, setData] = useState({
        formerpass: "",
        newpass: "",
        confirm_newpass: ""
    });

    const changeHandler = (event) => {
        setData({
            ...data, [event.target.name]: event.target.value,
        });
    }

    const [buttonDisable, setButtonDisable] = useState(false);
    const Navigate = useNavigate();
    const [welcomeMassage, setWelcomeMassage] = useState(false);

    const [isError_1, setIsError_1] = useState("")

    const submitHandler = (event) => {
        event.preventDefault();
        if (true) {
            const LOGIN_DATA = data;
            setButtonDisable(true)
            axios.post("http://localhost:3000/user/login", LOGIN_DATA)
                .then((response)=> {
                    console.log(response);
                    if (response) {
                        localStorage.setItem('uniwayuser', JSON.stringify(response.data))
                        setWelcomeMassage(true)
                        setTimeout(()=>Navigate("/login"), 2000)
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

    }

    const [active, setActive] = useState();
    useEffect(()=> {
        setActive(true);
    }, [])

    return ( 
        <div>
            <div className={styles.EditPass_Container}>
                <form className={styles.formContainer} onSubmit={submitHandler}>
                    <h2>تغییر رمز عبور</h2>
                    <input
                        className={styles.formInput}
                        type='text'
                        name='formerpass'
                        placeholder='رمز ورود فعلی'
                        value={data.formerpass}
                        onChange={changeHandler}
                    />
                    <section className={styles.input_short_sec}>
                        <input
                            className={styles.formInput_shortened}
                            type='text'
                            name='newpass'
                            placeholder='رمز ورود جدید'
                            value={data.newpass}
                            onChange={changeHandler}
                        />
                        <input
                            className={styles.formInput_shortened}
                            type='text'
                            name='confirm_newpass'
                            placeholder='تکرار رمز ورود'
                            value={data.confirm_newpass}
                            onChange={changeHandler}
                        />
                    </section>
                    <div className={buttonDisable ? styles.formButtonsDisabled : styles.formButtons}>
                        <button type="submit" className={styles.submitButton}><span>ورود به سایت</span></button>
                    </div>
                    { isError_1 &&
                        <div className={isError_1 ? styles.formdiv_Active : styles.formdiv}>
                            <h6>{isError_1}</h6>
                        </div>
                    }
                </form>
            </div>
        </div>
     );
}
 
export default EditPass;