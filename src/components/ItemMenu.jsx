import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as FcIcons from 'react-icons/fc';

export function Item({u1,u2,u3}) {
    const isInternal = u1.startsWith('/');

    if (isInternal) {
        return (
            <Link to={u1} className='zoom iconnMenu'>
                <ItemContent icon={u3} label={u2} />
            </Link>
        );
    } else {
        return (
            <a href={u1} className='zoom iconnMenu'>
                <ItemContent icon={u3} label={u2} />
            </a>
        );
    }
}

function ItemContent({icon, label}) {
    return (
        <>
            <p>{React.createElement(FcIcons[icon])}</p>
            <h3> {label} </h3>
        </>
    );
}