import { useSelector } from 'react-redux';

export const useCurrentDayData = () => {
    const currentDayId = useSelector((state) => { return state.currentId; });
    const daysArray = useSelector((state) => { return state.pushInitData; });

    function getDay(dayId) {
        return (day) => day.id === dayId;
    }

    return daysArray[ 0 ]?.find(getDay(currentDayId));
};
