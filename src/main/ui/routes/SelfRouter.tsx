import React from 'react';
import {Navigate, Routes, Route} from "react-router-dom";
import {Error404} from "../common/pages/Error404/Error404";
import {Profile} from "../common/pages/profile/Profile";
import {Registration} from "../common/pages/registration/Registration";
import {NewPassword} from "../common/pages/new-password/NewPassword";
import {PasswordRecovery} from "../common/pages/password-recovery/PasswordRecovery";
import {Demonstrate} from "../common/pages/demonstrate/Demonstrate";
import {Login} from "../common/pages/login/Login";

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

