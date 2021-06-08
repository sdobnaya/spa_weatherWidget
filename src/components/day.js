import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { setId } from '../lib/redux/init/actions';


export const Day = ({
    day, id, temperature, type,
}) => {
    const dispatch = useDispatch();
    // Обработка данных дня
    const deLocale = ru;
    const today = format(day, 'dd MMMM yyyy', { locale: deLocale });
    console.log(today);

    const dayOfWeek = new Date(day).toLocaleDateString('ru-RU', {
        weekday: 'long',
    });

    // переменная для айди
    let thisDayId;

    // привязываем к переменной элемент
    const thisDay = useRef();

    // Возможно удалить
    // const focusOnClick = () => {
    //    return thisDay.current.focus();
    // };

    // Получить айди элемента и поставить фокус по клику
    const idOnClick = () => {
        thisDay.current.focus();
        thisDayId = thisDay.current.id;
        console.log('ВОТ ОНА', thisDayId);
        dispatch(setId(thisDayId));

        return thisDay.current.id;
    };

    // Ставим условие для экшена (если переменная thisDayId не пустая, то закидываем ее в стор)!! Почему все работает без него?
    // useEffect(() => {
    //     if (thisDayId) {
    //         console.log('this CURRENT', thisDayId);
    //         dispatch(setId(thisDayId));
    //     }
    // }, [thisDayId]);

    // Автоматический фокус на сегодня (при первом рендере) - это точно не работает, но почему?
    useEffect(() => {
        idOnClick();
    }, []);

    console.log('CURRENT', thisDayId);

    return (
        <div
            ref = { thisDay }
            id = { id }
            onClick = { idOnClick }
            className = { `day ${type}` }>
            <p>{ dayOfWeek }</p>
            <span>{ temperature }</span>
        </div>
    );
};
