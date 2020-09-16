import React from 'react';
import { NavBar } from '../Components/NavBar';
import Footer from '../Components/Footer';
import styles from '../css/App.module.css';

export default (): React.ReactElement => (
    <div className={styles.App}>
        <NavBar />
        <div>
        <h1 className={styles.Title}>
          Bona Fide
        </h1>
        <p className={styles.SubText}>
        Simply the Best
        </p>
        <p>
        Above and Beyond
        </p>
        <p className={styles.SubText}>
        Bona fide means genuine. We aim to provide all our customers with authentic product details and a platform where they can authenticate their products.
        Our aim is to provide you with best and thus we ensure best services. 
        Do register!
        Cause the world is here and you are yet to come.
        </p>

        <p>
        Strive For
        </p>
        <p className={styles.SubText}>
        People are being hoodwinked in every stage of their life. But when it happens in bussiness it costs you your meal.
        Thus we strive to curb these malpractices to zero and help people from reach from nadir to zenith in their bussiness. 
        </p>

        <p>
        We Fix For You
        </p>
        <p className={styles.SubText}>
        In today’s era of rat race the hunt for genuine products is far from reality. One gets trapped in the mirage of anonymous websites put on the internet and cannot differentiate between actual and fake product. 
        Thus we come for your savior and have built this website using blockchain which keeps your each detail in blocks and  help your product being identified as genuine and true.
        What makes us much more interesting is that “Even the developers of the website can’t change your transaction history adding an extra layer of protection for you”.
 
        </p>
      </div>
        <Footer />
    </div>
);