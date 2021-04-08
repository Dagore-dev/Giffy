import { useEffect, useState } from "react";

import getTrendingTerms from '../../services/getTrendingTerms';
import Category from '../Category';

export default function TrendingSearches () {
    const [trends, setTrends] = useState([]);

    useEffect(function () {
        getTrendingTerms()
            .then(res => setTrends(res))
    },[])

    return <Category name='Tendencias' options={trends} />
}