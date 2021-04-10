import { useState, useEffect, useRef } from 'react';

export default function useNearScreen ( { distance = '100px' } = {} ) {
    const [isNearScreen, setIsNearScreen] = useState(false);
    const fromRef = useRef()

    useEffect(function () {
        let observer;
        const onChange = (entries, observer) => {
            const element = entries[0];
            if(element.isIntersecting){
                setIsNearScreen(true)
                observer.disconnect()
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
            
                observer.observe(fromRef.current);
            })
        
        return () => observer && observer.disconnect();
    })

    return { isNearScreen, fromRef };
}