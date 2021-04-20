import { useState, useEffect, useRef } from 'react';

export default function useNearScreen ( { distance = '100px', externalRef, once = true } = {} ) {
    const [isNearScreen, setIsNearScreen] = useState(false);
    const fromRef = useRef();
    
    useEffect(function () {
        let observer;

        const visor = externalRef ? externalRef.current : fromRef.current;

        const onChange = (entries, observer) => {
            const element = entries[0];
            if(element.isIntersecting){
                setIsNearScreen(true);
                once && observer.disconnect();
            }
            else{
                !once && setIsNearScreen(false);
            }
        }

        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
            ? IntersectionObserver
            : import('react-intersection-observer')
        )
            .then(() => {
                observer = new IntersectionObserver(onChange, {
                    rootMargin: distance
                });
            
                if(visor) observer.observe(visor);
            })
        
        return () => observer && observer.disconnect();
    })

    return { isNearScreen, fromRef };
}