import React from 'react';
import { BrowserRouter, Link} from 'react-router-dom';
import styles from '../css/NavBar.module.css';

export const NavBar = (): React.ReactElement => {
    return ( <div className={styles.NavBar}>
                <h1 className={styles.NavBarTitle}>
                    <a href="/">
                        Bona Fide
                    </a>
                    <BrowserRouter>
                        <Link to="/">
                            <span className={styles.NavBarSubscribe}><a className={styles.SignIn} href="/">Sign In</a></span>
                        </Link>
                    </BrowserRouter>
                </h1>
            </div>
    );
}
