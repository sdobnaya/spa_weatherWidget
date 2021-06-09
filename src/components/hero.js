import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useCurrentDayData } from '../hooks/useCurrentDayData';

export const Hero = () => {
    const theDay = useCurrentDayData();
    let today;

    if (theDay) {
        const deLocale = ru;
        today = format(theDay?.day, 'dd MMMM yyyy', { locale: deLocale });
        console.log(today);
    }

    const dayOfWeek = new Date(theDay?.day).toLocaleDateString('ru-RU', {
        weekday: 'long',
    });


    return (
        <>
            <div className = 'head'>
                <div className = { `icon ${theDay?.type}` }></div>
                <div className = 'current-date'>
                    <p>{ dayOfWeek }</p>
                    <span>{ today }</span>
                </div>
            </div>
            <div className = 'current-weather'>
                <p className = 'temperature'>{ theDay?.temperature }</p>
                <p className = 'meta'>
                    <span className = 'rainy'>%{ theDay?.rain_probability }</span>
                    <span className = 'humidity'>%{ theDay?.humidity }</span>
                </p>
            </div>
        </>
    );
};
