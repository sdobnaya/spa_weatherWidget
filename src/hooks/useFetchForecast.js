import { useQuery } from 'react-query';

import { api } from '../api/api';

export const useFetchForecast = (days) => {
    const apiData = useQuery('forecast', () => { return api.getWeather(days); });

    return apiData;
};
