import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { loginUser } from '../services/userService'
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from 'react-redux';
import { adduser } from '../action/adduser';
import * as Yup from 'yup'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function Login({ toggle }) {
    const dispatch = useDispatch()
    const [force, setforce] = useState(0)

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const datatoken = jwt_decode(token);
            const dateNow = Date.now() / 1000;


            if (datatoken.exp < dateNow)
                localStorage.removeItem("token");
            else { dispatch(adduser(datatoken.user)) }
        }
    }, [force]);



    const state = useSelector(state => state)



    const hendelsubmitlogin = async (user) => {
        const { data } = await loginUser(user)

        window.localStorage.setItem('token', data.token)
        
            
      
        
        setforce(c => c + 1)
    }
    const validation=Yup.object({
       
        email:Yup.string().required('ایمیل شما الزامی است').email('ایمیل وارد شده معتبر نمی باشد'),
        password:Yup.string().required('وارد کردن رمز عبور الزامی میباشد').min(6,'رمر عبور باید بیشار از 5 کاراکتر باشد')
    })


    return (
        <>
            <Formik
                initialValues={
                    {
                        email: '',
                        password: ''
                    }
                }
                validationSchema={validation}
                onSubmit={(value) => hendelsubmitlogin(value)}
            >
                <Form style={toggle ? { right: "0px" } : { right: "-450px" }} id="login" className="input-group">
                    <Field name='email' type="email" className="input-field" placeholder="ایمیل" />
                    <ErrorMessage name='email'/>
                    <Field name='password' type="password" className="input-field" placeholder="پسوورد شما" />
                    <ErrorMessage name='password'/>
                    <Field className='logout' type="submit" value="ورود" />
                </Form>
            </Formik>
            
            
        </>
    )
}
