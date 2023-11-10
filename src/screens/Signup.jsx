import React, { useState, useCallback } from 'react';
import styles from './Login.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/Input';
import SubmitBtn from '../components/Submit';
import Loader from "../components/loader";


function SignupPage() {

    let [userEmail, setUserEmail] = useState("")
    let [userEmailError, setUserEmailError] = useState("")
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

    const toSignup = ()=>{
        navigate('/login')
    }


    let isFormValid = userEmail && !userEmailError 

  

    let setFormDetails = useCallback(e => {
        setIsError(false)
        if (e.formName === "userEmail") {
            let formValue = e.value
            setUserEmail(formValue)
            setUserEmailError(e.error)

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
            email: userEmail,
            password: userPassword
        }

        console.log(data)

        return
        let response = await dispatch(({
            email: userEmail,
            password: userPassword
        }))

        if (!response.bool) {
            setIsLoading(false)
            setIsError(true)
            setIsErrorInfo(response.message)
            setTimeout(() => {
                navigate(`${response.url}`)
            }, 3000)


        }else{
            setIsLoading(false)
            setTimeout(() => {
                navigate(`${response.url}`)
            }, 3000)
        }
    }


    let navigateBackward = ()=>{
        navigate(-1)

    }


    return (<>

        <div className={styles.screenContainer}>
            

            <div className={styles.rightContainer}>

                {isLoading && <Loader />}
                <form className={styles.rightformcontainer} onSubmit={submitHandler}>
                    <div className={styles.navigate}>
                        

                    </div>




                    <div className={styles.inputcontainer}>
                        <h2>Account setup 1/3</h2>

                        <div className={styles.formCard}>
                            <FormInput
                                icon='edit'
                                label='Email'
                                type='email'
                                types="email"
                                className="formcard"
                                formName="userEmail"
                                placeholder='john@gmail.com'
                                setFormDetails={setFormDetails}
                            />

                        </div>

                       

                    </div>





                    <div className={styles.submit}>
                        <SubmitBtn style={{ borderRadius: '8px', marginBottom: '20px' }} text="Login" />

                        {isError && <p className={styles.errorText} >{isErrorInfo}</p>}


                    </div>

                    <p className={styles.alternative}> Already registered ? <span onClick={toSignup}>Login</span></p>



                </form>

            </div>


        </div>
    </>

    );
}

export default SignupPage