export const Hero = () => {
    return (
        <>
            <div className = 'head'>
                <div className = 'icon sunny'></div>
                <div className = 'current-date'>
                    <p>какой-то день</p>
                    <span>какое-то число</span>
                </div>
            </div>
            <div className = 'current-weather'>
                <p className = 'temperature'>00</p>
                <p className = 'meta'>
                    <span className = 'rainy'>%90</span>
                    <span className = 'humidity'>%90</span>
                </p>
            </div>
        </>
    );
};
