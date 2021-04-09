import { useEffect, useState, useRef } from "react";

import getTrendingTerms from 'services/getTrendingTerms';
import Category from 'components/Category';

function TrendingSearches () {
    const [trends, setTrends] = useState([]);

    useEffect(function () {
        getTrendingTerms()
            .then(res => setTrends(res))
    },[])

    return <Category name='Tendencias' options={trends} />
}

export default function LazyTrending () {
    const elementRef = useRef();
    const [show, setShow] = useState(false);
    
    useEffect(function () {
        let observer;
        const onChange = (entries, observer) => {
            const element = entries[0];
            if(element.isIntersecting){
                setShow(true)
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
                    rootMargin: '100px'
                });
            
                observer.observe(elementRef.current);
            })
        
        return () => observer && observer.disconnect();
    },[])

    return <div ref={elementRef}>
        {show ? <TrendingSearches /> : null}
    </div>
}