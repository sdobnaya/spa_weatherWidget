import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// Components
import { Hero } from './components/hero';
import { Days } from './components/days';
import { Filter } from './components/filter';

// Instruments
import { useFetchForecast } from './hooks/useFetchForecast';
import { setId, setState } from './lib/redux/init/actions';


export const App = () => {
    return (
        <main>
            <Hero />
            <Days />
            <Filter />
        </main>
    );
};

