import { useSelector } from 'react-redux';

export const useCurrentDayData = () => {
    const currentDayId = useSelector((state) => { return state.currentId; });
    const daysArray = useSelector((state) => { return state.pushInitData; });

    // потом убрать
    console.log(currentDayId);
    console.log(daysArray[ 0 ]);

    function getDay(dayId) {
        return (day) => day.id === dayId;
    }

    // потом убрать
    console.log(daysArray[ 0 ]?.find(getDay(currentDayId)));

    return daysArray[ 0 ]?.find(getDay(currentDayId));
};
