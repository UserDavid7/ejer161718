import React from 'react'
import { useEffect } from 'react';
import { useNavigate , NavLink } from 'react-router-dom'
import "../../styles/pages/navegation.css"

export default function Navegations({ logout, user }) {

    useEffect(() => {
        console.log(user);
    }, [user]);

    const Navigate = useNavigate();


    const login = () => {
        alert("need login");
        Navigate('/login')
    }

    console.log(user)

    return (

        <div className='container-nav'>
            <header>
                <nav>
                    <div className='logoContainer'>
                        <NavLink className="logo">  <h1>MyPage17</h1>  </NavLink>
                    </div>

                    <div>
                        <ul>
                            <li>
                                <NavLink className={({ isActive }) => (isActive ? 'links LinkActive' : "links")} to='/'> Home </NavLink>
                            </li>

                            <li>
                                <NavLink className={({ isActive }) => (isActive ? 'links LinkActive' : "links")} to="/tasks"> Task </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => (isActive ? 'links LinkActive' : "links")} to="/kjhkljd"> No lleva a nda</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => (isActive ? 'links LinkActive' : "links")} to="/kjhkljd"> No lleva a nda</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div>
                        {
                            user ? (
                                <button className='logout' onClick={() => logout()}> Log out </button>
                            ) :
                                (
                                    <button className='logout' onClick={login}> Log in </button>
                                )

                      
                        }
                    </div>
                </nav>
            </header>
        </div>
    )
}
