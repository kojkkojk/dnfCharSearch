import React from 'react'
import { Link } from 'react-router-dom';
import {FiClipboard} from 'react-icons/fi';

function Topbar() {
    return (
        <nav className='topBar'>
            <div className='dfgg_logo'>
                logo
            </div>
            <div className='dfgg_topmenu'>
                <ul>
                    <li><FiClipboard/></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className='poweredByNeople'>
                <a href={"http://developers.neople.co.kr"}
                target={"_blank"} rel="noopener noreferrer">
                    <img src="https://firebasestorage.googleapis.com/v0/b/thorarcv.appspot.com/o/poweredByneople.png?alt=media&token=cc22d16e-b2dd-45ca-b73b-ad0b42f01026" alt="Neople 오픈 API" />
                </a>
            </div>
        </nav>
    )
}

export default Topbar