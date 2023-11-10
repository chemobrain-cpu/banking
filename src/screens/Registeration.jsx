import React, { useState, useEffect, useCallback } from 'react';
import styles from './Login.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/Input';
import SubmitBtn from '../components/Submit';
import Loader from "../components/loader";


function RegisterationPage() {
    let [preloader, setPreloader] = useState(true)
    let [usertext, setUsertext] = useState("")
    let [usertextError, setUsertextError] = useState("")
    let [userPassword, setUserPassword] = useState("")
    let [userPasswordError, setUserPasswordError] = useState("")

    let [isError, setIsError] = useState(false)
    let [isErrorInfo, setIsErrorInfo] = useState('')
    let [isLoading, setIsLoading] = useState(false)
    //initialising reduzx
    let dispatch = useDispatch()
    let { color } = useSelector(state => state.userAuth)
    //initialise router
    let navigate = useNavigate()
    //loaders state

    const toSignup = () => {
        navigate('/signup')
    }


    let isFormValid = usertext && !usertextError

    useEffect(() => {
        setTimeout(() => {
            setPreloader(false)
        }, 5000)

    }, [])



    let setFormDetails = useCallback(e => {
        setIsError(false)
        if (e.formName === "usertext") {
            let formValue = e.value
            setUsertext(formValue)
            setUsertextError(e.error)

        } else if (e.formName === "userPassword") {
            let formValue = e.value
            setUserPassword(formValue)
            setUserPasswordError(e.error)

        }


    }, [])


    const submitHandler = async (e) => {
        e.preventDefault()
        if (!isFormValid) {
            return
        }
        setIsLoading(true)

        let data = {
            text: usertext,
            password: userPassword
        }

        console.log(data)

        return
        let response = await dispatch(({
            text: usertext,
            password: userPassword
        }))

        if (!response.bool) {
            setIsLoading(false)
            setIsError(true)
            setIsErrorInfo(response.message)
            setTimeout(() => {
                navigate(`${response.url}`)
            }, 3000)


        } else {
            setIsLoading(false)
            setTimeout(() => {
                navigate(`${response.url}`)
            }, 3000)
        }
    }


    let navigateBackward = () => {
        navigate(-1)

    }


    return (<>
        {preloader ? <div className="preloader">
            <div className="loader">
                <div className="shadow"></div>
                <div className="box"></div>
            </div>
        </div> : ""}

        <div className={styles.screenContainer}>


            <div className={styles.rightContainer}>

                {isLoading && <Loader />}
                <form className={styles.rightformcontainer} onSubmit={submitHandler}>
                    <div className={styles.navigate}>
                    </div>




                    <div className={styles.inputcontainer}>
                        <h2>Complete your registeration</h2>

                        <div className={styles.formCard}>
                            <FormInput
                                icon='edit'
                                label='Full Name'
                                type='text'
                                types="text"
                                className="formcard"
                                formName="usertext"
                                placeholder=''
                                setFormDetails={setFormDetails}
                            />

                        </div>




                        <div className={styles.formCard}>
                            <FormInput
                                icon='edit'
                                label='Address'
                                type='text'
                                types="text"
                                className="formcard"
                                formName="usertext"
                                placeholder=''
                                setFormDetails={setFormDetails}
                            />

                        </div>


                        <div className={styles.formCard}>
                            <FormInput
                                icon='edit'
                                label='Country'
                                type='text'
                                types="text"
                                className="formcard"
                                formName="usertext"
                                placeholder=''
                                setFormDetails={setFormDetails}
                            />

                        </div>

                        <div className={styles.formCard}>
                            <FormInput
                                icon='edit'
                                label='Phone Number'
                                type='text'
                                types="text"
                                className="formcard"
                                formName="usertext"
                                placeholder=''
                                setFormDetails={setFormDetails}
                            />

                        </div>

                        <div className={styles.formCard}>
                            <FormInput
                                icon='edit'
                                label='Password'
                                type='password'
                                className="formcard"
                                setFormDetails={setFormDetails}
                                formName="userPassword"
                                placeholder=''
                            />
                        </div><div className={styles.formCard}>
                            <FormInput
                                icon='edit'
                                label='Confirm Password'
                                type='password'
                                className="formcard"
                                setFormDetails={setFormDetails}
                                formName="userPassword"
                                placeholder=''
                            />
                        </div>

                    </div>




                    <div className={styles.submit}>
                        <SubmitBtn style={{ borderRadius: '8px', marginBottom: '20px' }} text="Login" />

                        {isError && <p className={styles.errorText} >{isErrorInfo}</p>}
                    </div>





                </form>

            </div>


        </div>
    </>

    );
}

export default RegisterationPage