import { useEffect } from 'react';
import { useDispatch, getState, useSelector } from 'react-redux';
import { Day } from './day';
import { useFetchForecast } from '../hooks/useFetchForecast';
import { setState } from '../lib/redux/init/actions';

const applyFilter = (filter, data) => {
    const filtersArr = [];
    let resultedArr = data;

    for (const i in filter) {
        if (filter[ i ]) {
            filtersArr.push(i);
            console.log(i);
        }
    }
    console.log('to chto nuzno', filtersArr);

    if (filtersArr.indexOf('min-temperature') !== -1) {
        resultedArr = resultedArr?.filter((day) => { return day.temperature >= filter[ 'min-temperature' ]; });

        console.log('min', resultedArr);

        // return resultedArr;
    }

    console.log('mezdu', resultedArr);

    if (filtersArr.indexOf('max-temperature') !== -1) {
        resultedArr = resultedArr?.filter((day) => { return day.temperature <= filter[ 'max-temperature' ]; });

        console.log('max', resultedArr);

        // return resultedArr;
    }

    console.log('mezdu2', resultedArr);

    if (filtersArr.indexOf('cloudly') !== -1) {
        resultedArr = resultedArr?.filter((day) => { return day.type === 'rainy' || day.type === 'cloudy'; });

        console.log('cl', resultedArr);

        // return resultedArr;
    }

    console.log('mezdu3', resultedArr);

    if (filtersArr.indexOf('sunny') !== -1) {
        resultedArr = resultedArr?.filter((day) => { return day.type === 'sunny'; });

        console.log('sun', resultedArr);

        // return resultedArr;
    }

    console.log('posle', resultedArr);
    // return data?.filter((day) => { return day.temperature >= filter[ 'min-temperature' ]; });

    if (resultedArr?.length === 0) {
        alert('Нет дней по заданным параметрам');
    }

    return resultedArr;
};

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

    const filter = useSelector((state) => { return state.currentFilter; });

    const filteredArr = applyFilter(filter, initialState);

    const allDays = filteredArr?.map((day) => <Day
        key = { day.id } { ...day }/>);

    return (
        <div className = 'forecast'>
            { allDays }
        </div>
    );
};

