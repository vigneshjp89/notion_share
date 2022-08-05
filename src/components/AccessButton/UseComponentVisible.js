import { useState, useEffect, useRef } from 'react';

export default function useComponentVisible(initialIsVisible) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            //fetch('https://webhook.site/d7a0830f-5966-4c2a-9b49-c2b5fc6062a6',{method:"POST",header:{'content-type':'application/json'},body:JSON.stringify({"ref":ref.current.toString(),"event":event.target.toString()})})
            console.log(ref.current);
            console.log(isComponentVisible);
            setIsComponentVisible(!isComponentVisible);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return { ref, isComponentVisible, setIsComponentVisible };
}