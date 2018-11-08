import React from 'react';
import PropTypes from 'prop-types';
import styles from './shortcuts.module.css';
// import NavigationItem from '../../componentsProps/ItemNavigation';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { initializeIcons } from '@uifabric/icons';
initializeIcons();

const Shortcuts = ({shortcutItems}) => {
    return (
        <div>
            <ul className={styles.toolBarContainer}>
                {Object.keys(shortcutItems).map(key=>{
                    return(                
                        <li className={styles.toolBarItem} key = {key}>
                            <a className={styles.navigationItem} href={shortcutItems[key].url} target= {shortcutItems[key].target}>
                                <Icon iconName = {shortcutItems[key].iconName} className = {shortcutItems[key].className} />
                                {/* <i title={shortcutItems[key].name} className={shortcutItems[key].className} aria-hidden="true"></i> */}
                            </a>
                        </li>   
                    );
                })}
            </ul>        
        </div>
    );
}

Shortcuts.propTypes = {
    shortcutItems: PropTypes.array
}

export default Shortcuts;