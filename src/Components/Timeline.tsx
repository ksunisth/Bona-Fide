import React from 'react';
import styles from '../css/Timeline.module.css'

class Timeline extends React.Component {
    render() {
      return (<div className={styles.steps}>
      <div className={styles.line}>
        <div></div>
      </div>
      <div className={styles.stepsnum}>1</div>
      <div className={styles.stepsinfo}>
        <div className={styles.img}>
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </div>
        <div className={styles.description}>
          <h2 className={styles.heading}>Shooting Stars</h2>
          <p className={styles.para}>VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
        </div>
      </div>
    </div>);
    }
  }
  
export default Timeline;
