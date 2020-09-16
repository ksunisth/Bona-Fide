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
                            <span className={styles.NavBarSubscribe}><a className={styles.SignOut} href="/">Sign Out</a></span>
                        </Link>
                        <Link to="/history">
                            <span className={styles.NavBarItems}><a href="/">Transaction History</a></span>
                        </Link>
                        <Link to="/register">
                            <span className={styles.NavBarItems}><a href="/">Product Registration</a></span>
                        </Link>
                        <Link to="/auth">
                            <span className={styles.NavBarItems}><a href="/">Authenticity Check</a></span>
                        </Link>
                    </BrowserRouter>
                </h1>
            </div>
    );
}
