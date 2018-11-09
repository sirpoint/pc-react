module.exports = /* eslint-disable */ [{"name":"GlobalNavigation","description":"","props":{"title":{"type":{"name":"string"},"required":false,"description":"Title of Global Navigation"},"currentUrl":{"type":{"name":"string"},"required":false,"description":"Current Url Global Navigation"},"globalNavigationItems":{"type":{"name":"array"},"required":false,"description":"Global Navigation Items"}},"code":"import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport styles from './globalNavigation.module.css';\r\n// import styled from 'styled-components';\r\n\r\nimport NavigationItem from '../../componentsProps/ItemNavigation';\r\n\r\nconst GlobalNavigation = ({title, currentUrl, globalNavigationItems}) => {\r\n    return (\r\n        <div className={styles.divContainer}>\r\n        <div className={styles.marginDiv}>\r\n            <span className= {`ms-Icon ms-Icon--Family ${styles.menuIcon}`} title={title}></span>\r\n        </div>\r\n        <ul className={styles.navigationBar}>\r\n            {Object.keys(globalNavigationItems).map(key=> {\r\n                if(currentUrl === globalNavigationItems[key].url){\r\n                    return(\r\n                        <li className={styles.navigationItemSelected} key={key}>\r\n                            <span>{globalNavigationItems[key].name}</span>\r\n                        </li>\r\n                    );\r\n                }else{\r\n                    return(\r\n                        <li className={styles.navigationItem} key={key}>\r\n                            <a className={styles.navigationItem} href={globalNavigationItems[key].url}>{globalNavigationItems[key].name}</a>\r\n                        </li>   \r\n                    );\r\n                }\r\n            })}\r\n        </ul>\r\n    </div> \r\n    )\r\n}\r\n\r\nGlobalNavigation.propTypes = {\r\n    /** Title of Global Navigation */\r\n    title: PropTypes.string,\r\n\r\n    /** Current Url Global Navigation */\r\n    currentUrl: PropTypes.string,\r\n    \r\n    /** Global Navigation Items*/\r\n    globalNavigationItems: PropTypes.array\r\n}\r\n\r\n\r\nexport default GlobalNavigation;","examples":[{"name":"ExampleGlobalNavigation","description":"Custom message","code":"import React from 'react';\r\nimport GlobalNavigation from 'ps-react/GlobalNavigation';\r\n\r\n/** Custom message */\r\nexport default function ExampleHelloWorld() {\r\n    const globalNavigationItems = \r\n    [\r\n        {\r\n            \"name\": \"News\",\r\n            \"url\": \"https://sirpointdevs.sharepoint.com/sites/news\",\r\n            \"description\": \"Corporate Company News Portal\",\r\n            \"target\": \"\",\r\n            \"className\" : \"\"\r\n        },\r\n        {\r\n            \"name\": \"Human Resources\",\r\n            \"url\": \"https://sirpointdevs.sharepoint.com/sites/hr\",\r\n            \"description\": \"Human Resources Portal\",\r\n            \"target\": \"\",\r\n            \"className\" : \"\"\r\n        },\r\n        {\r\n            \"name\": \"Learning\",\r\n            \"url\": \"https://sirpointdevs.sharepoint.com/sites/learning\",\r\n            \"description\": \"Learning Portal\",\r\n            \"target\": \"\",\r\n            \"className\" : \"\"\r\n        }\r\n    ] \r\n    \r\n    return <GlobalNavigation title=\"Global Navigation Example\" currentUrl =\"#\" globalNavigationItems = {globalNavigationItems} />\r\n}"}]},{"name":"HelloWorld","description":"A super lame component that says Hello with a custom message.","props":{"message":{"type":{"name":"string"},"required":false,"description":"Message to display","defaultValue":{"value":"'World'","computed":false}}},"code":"import React from 'react';\r\nimport PropTypes from 'prop-types';\r\n\r\n/** A super lame component that says Hello with a custom message. */\r\nfunction HelloWorld ({message}) {\r\n    return <div>Hello {message}</div>\r\n}\r\n\r\nHelloWorld.propTypes = {\r\n    /** Message to display */\r\n    message: PropTypes.string\r\n};\r\n\r\nHelloWorld.defaultProps = {\r\n    message: 'World'\r\n}\r\n\r\nexport default HelloWorld;","examples":[{"name":"ExampleHelloWorld","description":"Custom message","code":"import React from 'react';\r\nimport HelloWorld from 'ps-react/HelloWorld';\r\n\r\n/** Custom message */\r\nexport default function ExampleHelloWorld() {\r\n  return <HelloWorld message=\"Pluralsight viewers!\" />\r\n}"}]},{"name":"Shortcuts","description":"Component to show shortcuts with an icon","props":{"alignment":{"type":{"name":"string"},"required":false,"description":"Alignment"},"shortcutItems":{"type":{"name":"array"},"required":false,"description":"Array of shortcuts to show"}},"code":"import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport styles from './shortcuts.module.css';\r\nimport { Icon } from 'office-ui-fabric-react/lib/Icon';\r\nimport { initializeIcons } from '@uifabric/icons';\r\ninitializeIcons();\r\n\r\n/** Component to show shortcuts with an icon */\r\nfunction Shortcuts ({alignment, shortcutItems}) {\r\n    const containerAlign = () => {\r\n        if (alignment === \"center\"){\r\n            return styles.center;\r\n        }\r\n        if (alignment === \"left\"){\r\n            return styles.left;\r\n        }\r\n        if (alignment === \"right\"){\r\n            return styles.right;\r\n        }        \r\n    }\r\n\r\n    return (\r\n        <div>\r\n            <ul className= {`${styles.toolBarContainer} ${containerAlign()}`} >\r\n                {Object.keys(shortcutItems).map(key=>{\r\n                    return(                \r\n                        <li className={styles.toolBarItem} key = {key}>\r\n                            <a className={styles.navigationItem} href={shortcutItems[key].url} target= {shortcutItems[key].target}>\r\n                                <Icon iconName = {shortcutItems[key].iconName} className = {shortcutItems[key].className} title = {shortcutItems[key].name}/>\r\n                            </a>\r\n                        </li>   \r\n                    );\r\n                })}\r\n            </ul>        \r\n        </div>\r\n    );\r\n}\r\n\r\nShortcuts.propTypes = {\r\n    /** Alignment */\r\n    alignment: PropTypes.string,\r\n    /** Array of shortcuts to show */\r\n    shortcutItems: PropTypes.array\r\n}\r\n\r\nexport default Shortcuts;","examples":[{"name":"ExampleShortcuts","description":"Custom message","code":"import React from 'react';\r\nimport Shortcuts from 'ps-react/Shortcuts';\r\n\r\n/** Custom message */\r\nexport default function ExampleShortcuts() {\r\n    const shorCuts = \r\n    [\r\n        {\r\n            \"name\": \"My site\",\r\n            \"url\": \"https://sirpointdevs-my.sharepoint.com\",\r\n            \"description\": \"Onedrive\",\r\n            \"target\": \"\",\r\n            \"iconName\": \"OneDrive\",\r\n            \"className\" : \"ms-Icon ms-Icon--OneDrive\"\r\n        },\r\n        {\r\n            \"name\": \"Office 365 Delve\",\r\n            \"url\": \"https://nam.delve.office.com/\",\r\n            \"description\": \"Office 365 Delve site\",\r\n            \"target\": \"\",\r\n            \"iconName\": \"DelveLogo\",\r\n            \"className\" : \"ms-Icon ms-Icon--DelveLogo\"\r\n        },\r\n        {\r\n            \"name\": \"All Users Directory\",\r\n            \"url\": \"https://outlook.office.com/owa/?realm=sirpoint.com&exsvurl=1&ll-cc=1033&modurl=0&path=/people\",\r\n            \"description\": \"All Users Directory\",\r\n            \"target\": \"\",\r\n            \"iconName\": \"CompanyDirectory\",\r\n            \"className\" : \"ms-Icon ms-Icon--CompanyDirectory\"\r\n        }\r\n    ] \r\n    \r\n    return <Shortcuts alignment = \"right\" shortcutItems = {shorCuts} />\r\n}"}]},{"name":"TestComponent","description":"Another simple component to test how react-gen-doc could work with tsx component","props":{"title":{"type":{"name":"string"},"required":false,"description":"TestComponent title"},"content":{"type":{"name":"string"},"required":false,"description":"TestComponent content"}},"code":"import React from 'react';\r\nimport PropTypes from 'prop-types';\r\n\r\n/** Another simple component to test how react-gen-doc could work with tsx component */\r\nconst TestComponent = ({title, content}) =>\r\n<div>\r\n    <h1>{title}</h1>\r\n    <p>{content}</p>\r\n</div>\r\n\r\nTestComponent.propTypes = {\r\n    /** TestComponent title */\r\n\r\n    title: PropTypes.string,\r\n\r\n    /** TestComponent content */\r\n    content: PropTypes.string,\r\n};\r\n\r\nexport default TestComponent;","examples":[{"name":"ExampleTestComponent","description":"Custom message","code":"import React from 'react';\r\nimport TestComponent from 'ps-react/TestComponent';\r\n\r\n/** Custom message */\r\nexport default function ExampleTestComponent() {\r\n  return <TestComponent title=\"test!\" content =\"test\" />\r\n}"}]}]