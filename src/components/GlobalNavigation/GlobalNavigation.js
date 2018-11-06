import React from 'react';
import PropTypes from 'prop-types';
import styles from './globalNavigation.css';

const GlobalNavigation = ({globalNavProps}) => {
    return (
        <div className={styles.divContainer}>
        <div className={styles.marginDiv}>
            <span className= {`ms-Icon ms-Icon--Family ${styles.menuIcon}`} title="Global Navigation Menu"></span>
        </div>
        <ul className={styles.navigationBar}>
            {this.props.globalNavigationItems.map((i)=>{
                if(this.props.currentUrl === i.url){
                    return(
                        <li className={styles.navigationItemSelected}>
                            <span>{i.name}</span>
                        </li>
                    );
                }else{
                    return(
                        <li className={styles.navigationItem}>
                            <a className={styles.navigationItem} href={i.url}>{i.name}</a>
                        </li>   
                    );
                }
            })}
        </ul>
    </div> 
    )
}

GlobalNavigation.propTypes = {
    globalNavigationItems: PropTypes.array
}


export default GlobalNavigation;