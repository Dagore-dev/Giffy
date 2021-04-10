import React, { Suspense } from 'react';

import useNearScreen from 'hooks/useNearScreen';
import Form from 'components/FormSVG';

const TrendingSearches = React.lazy(
    () => import('components/LazyTrending/TrendingSearches') 
)

export default function LazyTrending () {
    const { isNearScreen, fromRef } = useNearScreen( { distance: '200px' } );
 
    return (
    <div ref={fromRef}>
        <Suspense fallback={<Form />}>
            {isNearScreen ? <TrendingSearches /> : null}
        </Suspense>
    </div>
    )
}