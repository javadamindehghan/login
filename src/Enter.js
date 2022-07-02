import React, { useState } from 'react'
import Login from './login/Login'
import Register from './register/Register'
import { useDispatch, useSelector } from 'react-redux';
export default function Enter() {

    const [toggle, settoggle] = useState(true)
    return (
        <div>
            <div className="hero">
                <div className="form-box">
                    <div className="button-box">
                        <div style={toggle ? { right: "0px" } : { right: "110px" }} id="btn"></div>
                        <button className="toggle-btn" onClick={() => settoggle(true)} >ورود</button>
                        <button className="toggle-btn" onClick={() => settoggle(false)} >ثبت نام</button>
                    </div>

                    <Login toggle={toggle} />


                    <Register toggle={toggle} />

                </div>
            </div>
        </div>
    )
}
