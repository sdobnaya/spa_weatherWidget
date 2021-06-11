import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setFilter } from '../lib/redux/init/actions';

let theFlag = 0;

export const Filter = () => {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { isSubmitSuccessful, isSubmitted, isDirty },
    } = useForm();

    const dispatch = useDispatch();

    const submitForm = handleSubmit((values) => {
        dispatch(setFilter(values));
        console.log(values);
    });

    const fullSubmit = () => {
        submitForm();
        theFlag = 1;
    };

    const undoFilter = handleSubmit(() => {
        theFlag = 0;
        const initialState = {
            sunny: '',
            cloudly: '',
            'min-temperature': '',
            'max-temperature': '',
        };

        dispatch(setFilter(initialState));
        reset({
            cloudly: '', sunny: '', 'max-temperature': '', 'min-temperature': '',
        });
    });

    const setCloudDay = () => {
        setValue('cloudly', true);
        setValue('sunny', false);
    };

    const setSunDay = () => {
        setValue('cloudly', false);
        setValue('sunny', true);
    };

    const hideBtn = () => {
        if (isSubmitted) {
            return <button
                style = { { marginTop: '20px' } }
                onClick = { undoFilter }
                type = 'reset'>Сбросить фильтр</button>;
        }
    };

    return (
        <div className = 'filter'>
            <span
                { ...register('cloudly', { required: false }) }
                onClick = { setCloudDay }
                className = { watch('cloudly') === true ? 'checkbox selected' : 'checkbox' }>Облачно</span>
            <span
                { ...register('sunny', { required: false }) }
                onClick = { setSunDay }
                className = { watch('sunny') === true ? 'checkbox selected' : 'checkbox' }>Солнечно</span>
            <p className = 'custom-input'>
                <label htmlFor = 'min-temperature'>Минимальная температура</label>
                <input
                    { ...register('min-temperature', { required: false }) }
                    id = 'min-temperature'
                    type = 'number'></input>
            </p>
            <p className = 'custom-input'>
                <label htmlFor = 'max-temperature'>Максимальная температура</label>
                <input
                    { ...register('max-temperature', { required: false }) }
                    id = 'max-temperature'
                    type = 'number'></input>
            </p>
            <button
                disabled = { theFlag }
                onClick = { fullSubmit }
                type = 'submit'>Отфильтровать</button>
            <button
                disabled = { !theFlag }
                style = { { marginTop: '20px' } }
                onClick = { undoFilter }
                type = 'reset'>Сбросить фильтр</button>
        </div>
    );
};
