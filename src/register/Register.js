import React from 'react'
import { Formik,Form ,Field,ErrorMessage} from 'formik'
import { registerUser } from '../services/userService'
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup'



export default function Register({toggle={toggle}}) {
    const validation=Yup.object({
        fullname:Yup.string().required('نام شما الزامی است'),
        email:Yup.string().required('ایمیل شما الزامی است').email('ایمیل وارد شده معتبر نمی باشد'),
        password:Yup.string().required('وارد کردن  پسورد الزامی است').min(6,'پسورد باید بیشار از 5 کاراکتر باشد')
    })
    const hanelsubmitregister= async (value)=>{
       const {data ,AxiosError } = await registerUser(value)
      if (data.message) {
          toast.success('ثبت نام با موفقیت انجام شد')
        }

    }

    return (
       <>
       <Formik
       initialValues={
        {
            fullname:'',
            email:'',
            password:''
        }
       }
       validationSchema={validation}
       onSubmit={(value)=>hanelsubmitregister(value)}
      
       >
         
               
        <Form style={toggle?{right:"450px"}:{right:"0px"}} id="register" className="input-group">
            
        <Field  name='fullname' type="text" className="input-field" placeholder="نام کاربری"/>
        <ErrorMessage name='fullname' />
        <Field  name='email' type="text" className="input-field" placeholder="نام کاربری یا ایمیل"/>
        <ErrorMessage name='email' />
        <Field  name='password' type="password" className="input-field" placeholder="پسوورد شما"/>
        <ErrorMessage name='password' />
        
        <input type="submit" value="ثبت نام"/>
        </Form>
        </Formik>
        
       </>
    )
}
