import Table from './components/table';
import Filters from './components/filters';
import useGetData from './hooks/use-get-data';
import { IData } from './models';

import './style.css';


const Main = () => {
    const { data, isLoading, error } = useGetData();

    if (isLoading) return <>Loading...</>;

    if (error) return <>{error.message}</>;

    const maps = Object.keys(data[0].maps).map((map: string) => map); 

    const agents = data.map((row: IData) => row.agent.name);

    return (
	<div className='main'>
	    <h1 className='title'>Valorant stats</h1>
	    <hr />
	    <Filters maps={maps} agents={agents} />
	    <hr />
	    <Table data={data} headers={maps} />
	</div>
    );
}

export default Main;
