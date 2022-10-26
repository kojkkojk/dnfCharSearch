import React from 'react'

function Topbar() {
    return (
        <div className='topBar'>
            <div className='menus'>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </div>
            <div className='loginBx'>
                <div>Login</div>
                <div>Register</div>
                {/* <div class="lds-dual-ring"></div> */}
            </div>
        </div>
    )
}

export default Topbar