export const Filter = () => {
    return (
        <div className = 'filter'>
            <span className = 'checkbox'>Облачно</span>
            <span className = 'checkbox'>Солнечно</span>
            <p className = 'custom-input'>
                <label htmlFor = 'min-temperature'>Минимальная температура</label>
                <input id = 'min-temperature' type = 'number'></input>
            </p>
            <p className = 'custom-input'>
                <label htmlFor = 'max-temperature'>Максимальная температура</label>
                <input id = 'max-temperature' type = 'number'></input>
            </p>
            <button>Отфильтровать</button>
        </div>
    );
};
