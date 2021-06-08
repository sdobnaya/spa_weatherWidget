import { useEffect } from 'react';
import { useDispatch, getState } from 'react-redux';
import { Day } from './day';
import { useFetchForecast } from '../hooks/useFetchForecast';
import { store } from '../lib/redux/init/store';
import { setState } from '../lib/redux/init/actions';


export const Days = () => {
    const days = 7;
    const data = useFetchForecast(days);
    const initialState = data.data;
    const dispatch = useDispatch();

    useEffect(() => {
        if (data.data) {
            dispatch(setState(initialState));
        }
    }, [data.data]);

    const allDays = data.data?.map((day) => <Day
        key = { day.id } { ...day }/>);

    return (
        <div className = 'forecast'>
            { allDays }
        </div>
    );
};
