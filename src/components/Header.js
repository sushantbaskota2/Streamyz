import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
            <Link to='' className='item'>
                Streamy
            </Link>
            <div className='right menu'>
                <Link to='/' className='item'>
                    All Streams
                </Link>
                <GoogleAuth />
            </div>
        </div>
    );
};

export default Header;
//765802466752-72l44mpsrne7freu9sm1r1gdp45nbjlg.apps.googleusercontent.com
