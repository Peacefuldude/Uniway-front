import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// Functions
import { FormsValidate } from '../../../Validation/FormsValidate';

// Styles
import styles from './Login.module.css'

const Login = () => {

    const [data, setData] = useState({
        username: "",
        password: ""
    });

    const changeHandler = (event) => {
        setData({
            ...data, [event.target.name]: event.target.value,
        });
    }

    const [errors, setErrors] = useState({});
    useEffect(() => {
        setErrors(FormsValidate(data, "login"))
    }, [data])

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
        if (!Object.keys(errors).length) {
            const LOGIN_DATA = data;
            setButtonDisable(true)
            axios.post("https://uniway.vip4care.ir/user/login", LOGIN_DATA)
                .then((response)=> {
                    console.log(response);
                    if (response) {
                        console.log("ssss");
                        localStorage.setItem('uniwayuser', JSON.stringify(response.data))
                        setWelcomeMassage(true)
                        setTimeout(()=>Navigate("/home"), 2000)
                    }
                })

                .catch((errors)=> {
                    console.log(errors);
                    if (errors) {
                        setIsError_1(errors.response.data.errors.message)
                        setButtonDisable(false)
                    }
                })
        } else {
            setTouched({
                username: true,
                password: true
            })
        }

    }

    const [active, setActive] = useState();
    useEffect(()=> {
        setActive(true);
    }, [])

    return ( 
        <div>
            <div className={styles.Login_Container}>
                <form className={styles.formContainer} onSubmit={submitHandler}>
                    <h2>به سامانه Uniway خوش آمدید</h2>
                    <input
                        className={styles.formInput}
                        type='text'
                        name='username'
                        placeholder='نام کاربری'
                        value={data.username}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        onBlur={unFocusHandler}
                    />
                    <div className={(errors.username && touched.username) ? styles.formdiv_Active : styles.formdiv}>
                        {<h6>{errors.username}</h6>}
                    </div>
                    <input 
                        className={styles.formInput}
                        type='password'
                        name='password'
                        placeholder='رمز عبور'
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        onBlur={unFocusHandler}
                    />
                    <div className={(errors.password && touched.password) ? styles.formdiv_Active : styles.formdiv}>
                        {<h6>{errors.password}</h6>}
                    </div>
                    <Link>
                        <button className={styles.forgot_pass_btn}>رمز عبور خود را فراموش کردید؟</button>
                    </Link>
                    <div className={buttonDisable ? styles.formButtonsDisabled : styles.formButtons}>
                        <button type="submit" className={styles.submitButton}><span>ورود به سایت</span></button>
                    </div>
                    { isError_1 &&
                        <div className={isError_1 ? styles.formdiv_Active : styles.formdiv}>
                            <h6>{isError_1}</h6>
                        </div>
                    }
                    { welcomeMassage &&
                        <div className={welcomeMassage ? styles.formdiv_Active : styles.formdiv}>
                            <h6>خوش آمدید! منتظر بازنشانی صفحه بمانید</h6>
                        </div>
                    }
                    <div className={styles.signup_div}>
                        <p>حساب کاربری ندارید؟</p>
                        <Link to='/signup'>
                            <button className={styles.signup_btn}><span>ثبت نام کنید</span></button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Login;