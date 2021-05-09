import { useState, useEffect } from 'react';

const Route = ({path, children}) => {

    const [location, setLocation] = useState(window.location.pathname);

    useEffect(() => {

        const onLocationChange = () => {
            setLocation(window.location.pathname);
        }

        window.addEventListener('popstate', onLocationChange, {capture: true});

        return () => {
            window.removeEventListener('popstate', onLocationChange, {capture: true});
        }

    }, [])
    return (location === path ? children : null);
}

export default Route;