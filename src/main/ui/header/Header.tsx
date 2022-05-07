import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

export const Header = () => {
    return (
        <div>
            <nav>
                <div className={s.main}>
                    <div>
                        <NavLink className={(data) => data.isActive ? s.active__link : ''}
                                 to={'/registration'}>Registration</NavLink>
                    </div>
                    <div>
                        <NavLink className={(data) => data.isActive ? s.active__link : ''}
                                 to={'/password-recovery'}>Reset password</NavLink>
                    </div>
                    <div>
                        <NavLink className={(data) => data.isActive ? s.active__link : ''}
                                 to={'/demonstrate'}> Super Компоненты</NavLink>
                    </div>
                    <div>
                        <NavLink className={(data) => data.isActive ? s.active__link : ''}
                                 to={'/qwerty'}>Error</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    );
};

