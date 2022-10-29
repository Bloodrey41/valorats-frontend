import Table from './components/table';
import Filters from './components/filters';
import useGetData from './hooks/use-get-data';
import useEventStore from './hooks/use-event-store';
import { IData } from './models';

import './style.css';
import {useMemo} from 'react';


const Main = () => {
    const { data, isLoading, error } = useGetData();

    const { selectedEvent, setSelectedEvent } = useEventStore(state => state);

    const handleEventChange = (e: React.ChangeEvent<HTMLInputElement>) => setSelectedEvent(e.target.value);

    return (
	<div className='main'>
	    <h1 className='title'>Valorant stats</h1>
	    <hr />
	    <input 
		onChange={handleEventChange}
		value={selectedEvent}
		type='url' 
		placeholder='thespike.gg event stats URL'
	    />
	    {isLoading ? 'Loading...' : error ? error.message : (() => {
		const maps = Object.keys(data[0].maps).map((map: string) => map);
		const agents = data.map((row: IData) => row.agent.name)
		return (
		    <>
			<Filters maps={maps} agents={agents} />
			<hr />
			<Table data={data} headers={maps} />
		    </>
		);
	    })()}
	</div>
    );
}

export default Main;
