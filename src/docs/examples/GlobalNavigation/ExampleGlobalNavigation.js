import React from 'react';
import GlobalNavigation from 'ps-react/GlobalNavigation';

/** Custom message */
export default function ExampleHelloWorld() {
    const globalNavigationItems = {
            "title": "Global Navigation Example",
            "globalNavigationItems": [
                {
                    "name": "News",
                    "url": "https://sirpointdevs.sharepoint.com/sites/news",
                    "description": "Corporate Company News Portal",
                    "target": ""
                },
                {
                    "name": "Human Resources",
                    "url": "https://sirpointdevs.sharepoint.com/sites/hr",
                    "description": "Human Resources Portal",
                    "target": ""
                },
                {
                    "name": "Learning",
                    "url": "https://sirpointdevs.sharepoint.com/sites/learning",
                    "description": "Learning Portal",
                    "target": ""
                }
            ]            
    }

    return <GlobalNavigation props = {globalNavigationItems} />
}