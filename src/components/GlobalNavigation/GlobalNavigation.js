import React from 'react';
import PropTypes from 'prop-types';
import styles from './globalNavigation.module.css';
// import styled from 'styled-components';

import NavigationItem from '../../componentsProps/ItemNavigation';

const GlobalNavigation = (props) => {
    return (
        <div className={styles.divContainer}>
        <div className={styles.marginDiv}>
            <span className= {`ms-Icon ms-Icon--Family ${styles.menuIcon}`} title={props.props.name}></span>
        </div>
        <ul className={styles.navigationBar}>
            {props.props.globalNavigationItems.map((i)=>{
                if(props.props.currentUrl === i.url){
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
    title: PropTypes.string,
    globalNavigationItems: PropTypes.arrayOf(NavigationItem)
}


export default GlobalNavigation;