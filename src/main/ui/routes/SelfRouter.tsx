import React from 'react';
import {Navigate, Routes, Route} from "react-router-dom";
import {Login} from "../pages/login/Login";
import {Demonstrate} from "../pages/demonstrate/Demonstrate";
import {PasswordRecovery} from "../pages/password-recovery/PasswordRecovery";
import {Error404} from "../pages/Error404/Error404";
import {NewPassword} from "../pages/new-password/NewPassword";
import {Profile} from "../pages/profile/Profile";
import {Registration} from "../pages/registration/Registration";


const PATH = {
    LOGIN: '/login',
    PROFILE: '/profile',
    REGISTRATION: '/registration',
    NEW_PASSWORD: '/new-password',
    PASSWORD_RECOVERY: '/password-recovery',
    DEMONSTRATE: '/demonstrate',
}


export const SelfRouter = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.LOGIN}/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                <Route path={PATH.NEW_PASSWORD} element={<NewPassword/>}/>
                <Route path={PATH.PASSWORD_RECOVERY} element={<PasswordRecovery/>}/>
                <Route path={PATH.DEMONSTRATE} element={<Demonstrate/>}/>

                <Route path={'*'} element={<Error404/>}/>
            </Routes>
        </div>
    );
};

