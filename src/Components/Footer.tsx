import React from 'react';
import { BrowserRouter, Link} from 'react-router-dom';
import styles from '../css/Footer.module.css';

export default (): React.ReactElement => (
    <footer className={styles.Footer}>
        <div className={styles.Title}>
            <p>&copy; 2020 Bona Fide</p>
        </div>
        <hr/>
        <div className={styles.Items}>
        <BrowserRouter>
            <Link to="/">
                <span className={styles.NavBarItems}><a href="/">Home</a></span>
            </Link>
            <Link to="/about">
                    <span className={styles.NavBarItems}><a href="/">About</a></span>
            </Link>
            <Link to="/contact">
                <span className={styles.NavBarItems}><a href="/">Contact</a></span>
            </Link>
        </BrowserRouter>
        </div>
    </footer>
);