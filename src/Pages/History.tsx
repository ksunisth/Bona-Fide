import React from 'react';
import { NavBar } from '../Components/NavBar';
import Footer from '../Components/Footer';
import Timeline from '../Components/Timeline';
import styles from '../css/History.module.css';
export default (): React.ReactElement =>(
    <div className={styles.App}>
        <NavBar />
        <Timeline />
        <Footer />
    </div>
)