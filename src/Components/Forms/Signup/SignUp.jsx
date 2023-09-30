import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// Functions
import { FormsValidate } from '../../../Validation/FormsValidate';

// Styles
import styles from './SignUp.module.css'

const SignUp = () => {

    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        username: "",
        phone: "",
        password: "",
        confirm_password: "",
    });

    const changeHandler = (event) => {
        setData({
            ...data, [event.target.name]: event.target.value,
        });
    }

    const [errors, setErrors] = useState({});
    useEffect(() => {
        setErrors(FormsValidate(data, "signup"))
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

    const axiosConficPost = {
        headers: {
            "Dev": "vip4c@reDevelop3r",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":"*",
            "Access-Control-Allow-Methods":"*"
        },
    };

    const [isError_1, setIsError_1] = useState("");
    
    const submitHandler = (event) => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            const SIGN_UP_DATA = data;
            setButtonDisable(true)
            console.log("sass");
            axios.post("https://uniway.vip4care.ir/user/register", SIGN_UP_DATA, axiosConficPost)
                .then((response)=> {
                    if (response) {
                        setWelcomeMassage(true)
                        setTimeout(()=>Navigate("/login"), 2000)
                        // localStorage.setItem('uniwayuser', JSON.stringify(response.data))
                    }

                })

                .catch((errors)=> {
                    if (errors) {
                        setIsError_1(errors.response.data.errors.message)
                        setButtonDisable(false)
                    }
                })

            } else {
                setTouched({
                first_name: true,
                last_name: true,
                username: true,
                phone: true,
                password: true,
                confirm_password: true,
                student_code: true
            })
        }
        
    }

    const [active, setActive] = useState();
    useEffect(()=> {
        setActive(true);
    }, [])

    return ( 
        <div>
            <div className={styles.Signup_Container}>
                <form className={styles.formContainer} onSubmit={submitHandler}>
                    <h2>برای ثبت نام اطلاعات زیر را وارد کنید</h2>
                    <section>
                        <div>
                            <input
                                className={styles.formInput}
                                type='text'
                                name='first_name'
                                placeholder='نام'
                                value={data.first_name}
                                onChange={changeHandler}
                                onFocus={focusHandler}
                                onBlur={unFocusHandler}
                            />
                            {/* <input
                                className={styles.formInput}
                                type='text'
                                name='student_code'
                                placeholder='شماره دانشجویی'
                                value={data.student_code}
                                onChange={changeHandler}
                                onFocus={focusHandler}
                                onBlur={unFocusHandler}
                            /> */}
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
                            <input
                                className={styles.formInput}
                                type='password'
                                name='password'
                                placeholder='رمز ورود'
                                value={data.password}
                                onChange={changeHandler}
                                onFocus={focusHandler}
                                onBlur={unFocusHandler}
                            />
                        </div>
                        <div>
                            <input 
                                className={styles.formInput}
                                type='text'
                                name='last_name'
                                placeholder='نام خانوادگی'
                                value={data.last_name}
                                onChange={changeHandler}
                                onFocus={focusHandler}
                                onBlur={unFocusHandler}
                            />
                            <input
                                className={styles.formInput}
                                type='text'
                                name='phone'
                                placeholder='تلفن همراه'
                                value={data.phone}
                                onChange={changeHandler}
                                onFocus={focusHandler}
                                onBlur={unFocusHandler}
                            />
                            <input
                                className={styles.formInput}
                                type='password'
                                name='confirm_password'
                                placeholder='تکرار رمز عبور'
                                value={data.confirm_password}
                                onChange={changeHandler}
                                onFocus={focusHandler}
                                onBlur={unFocusHandler}
                            />
                            <div className={buttonDisable ? styles.formButtonsDisabled : styles.formButtons}>
                                <button type="submit" className={styles.submitButton}><span>ثبت اطلاعات</span></button>
                            </div>
                        </div>
                    </section>
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
                    <div className={styles.login_div}>
                        <p>حساب کاربری دارید؟</p>
                        <Link to='/signup'>
                            <button className={styles.login_btn}><span>وارد شوید</span></button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default SignUp;