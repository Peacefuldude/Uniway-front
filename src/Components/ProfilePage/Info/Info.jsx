import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// styles
import styles from './Info.module.css'

// Functions
import { FormsValidate } from '../../../Validation/FormsValidate';

// Images
import pass from '../../../Images/pass.png'
import edit from '../../../Images/edit.png'

const Info = () => {

    const [data, setData] = useState({
        username: "",
        password: ""
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

    }

    // buttons const and funcs
    const [editActive, setEditActive] = useState();
    const editProfHandler = () => {
        setEditActive(!editActive)
    }

    // Edit Password const and funcs
    const editPassHandler = () => {
        setTimeout(()=>Navigate("/editpass"))
    }

    return ( 
        <div className={styles.Info_Container}>
            <section className={editActive ? styles.sec_not_active : styles.Info_top_sec}>
                <div>
                    <p>نام و نام خانوادگی</p>
                    <h3>نام کاربر این قسمت</h3>
                </div>
                <div>
                    <p>نام کاربری</p>
                    <h3>نام نام کاربری در این قسمت</h3>
                </div>
                <div>
                    <p>شماره دانشجویی</p>
                    <h3>9961270xx</h3>
                </div>
                <div>
                    <p>شماره همراه</p>
                    <h3>09123821746</h3>
                </div>
            </section>
            <section className={editActive ? styles.sec_not_active : styles.Info_bottom_sec}>
                <button className={styles.profile_info_btn} onClick={editPassHandler}><img src={pass} alt="cup icon" />ویرایش رمز عبور</button>
                <button className={styles.profile_info_btn} onClick={editProfHandler}><img src={edit} alt="cup icon" />ویرایش اطلاعات کاربری</button>
            </section>
            <section className={editActive ? styles.edit_Info_top_sec : styles.sec_not_active}>
                <form className={styles.formContainer} onSubmit={submitHandler}>
                    <input
                        className={styles.formInput}
                        type='text'
                        name='username'
                        placeholder='نام'
                        value={data.username}
                        onChange={changeHandler}
                    />
                    <input
                        className={styles.formInput}
                        type='text'
                        name='username'
                        placeholder='نام خانوادگی'
                        value={data.username}
                        onChange={changeHandler}
                    />
                    <input
                        className={styles.formInput}
                        type='text'
                        name='username'
                        placeholder='نام کاربری'
                        value={data.username}
                        onChange={changeHandler}
                    />
                    <input 
                        className={styles.formInput}
                        type='password'
                        name='password'
                        placeholder='شماره همراه'
                        value={data.password}
                        onChange={changeHandler}
                    />
                    { isError_1 &&
                        <div className={isError_1 ? styles.formdiv_Active : styles.formdiv}>
                            <h6>{isError_1}</h6>
                        </div>
                    }
                </form>
            </section>
            <section className={editActive ? styles.edit_bottom_sec : styles.sec_not_active}>
                <button className={styles.profile_edit_info_btn} onClick={editProfHandler}>انصراف</button>
                <button className={styles.profile_edit_info_done_btn} onClick={submitHandler}>ثبت تغییرات</button>
            </section>
        </div>
     );
}
 
export default Info;