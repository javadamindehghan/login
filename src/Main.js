import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearuser } from './action/adduser';

import './a.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Main({ toggle }) {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const logout = () => {
        localStorage.removeItem("token");
        dispatch(clearuser())

    }

    return (
        <div>
            <div className="hero">
                <div className="form-box">
                    <form id="login" className="input-group">
                        <input disabled value={state.fullname} name='email' type="email" className="input-field" placeholder="ایمیل" />
                        <input disabled value={state.email} name='email' type="email" className="input-field" placeholder="ایمیل" />

                        <input className='logout' type='button' onClick={logout} value='خروج' />
                    </form>

                </div>
            </div>
           
        </div>


    )
}
