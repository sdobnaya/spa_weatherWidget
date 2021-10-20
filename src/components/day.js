import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

    const dayOfWeek = new Date(day).toLocaleDateString('ru-RU', {
        weekday: 'long',
    });

    // Получить айди элемента и поставить фокус по клику
    const onClick = () => {
        dispatch(setId(id));
    };

    const data = useSelector((state) => { return state; });

    // Автоматический фокус на сегодня (при первом рендере) - это точно не работает, но почему?
    useEffect(() => {
        onClick();
    }, []);

    const isSelected = data.currentId === id;

    return (
        <div
            id = { id }
            onClick = { onClick }
            className = { `day ${type} ${isSelected ? 'selected' : ''}` }>
            <p>{ dayOfWeek }</p>
            <span>{ temperature }</span>
        </div>
    );
};
