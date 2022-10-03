import {useMemo} from 'react';
import useMapStore from '../../hooks/use-map-store';
import useAgentStore from '../../hooks/use-agent-store';
import useRoleStore from '../../hooks/use-role-store';

import './style.css';

interface Props {
    maps: Array<string>;
    agents: Array<string>;
}

const ROLES = ['controller', 'initiator', 'duelist', 'sentinel'];

const Filters = ({ maps, agents }: Props) => {
    const { selectedMap, setSelectedMap } = useMapStore(state => state);
    const { selectedAgent, setSelectedAgent } = useAgentStore(state => state);
    const { selectedRole, setSelectedRole } = useRoleStore(state => state);

    const selectsWidth = useMemo(() => selectedAgent ? 50 : 33.3, [selectedAgent]);

    const handleMapChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectedMap(e.target.value)

    const handleAgentChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectedAgent(e.target.value)

    const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectedRole(e.target.value)

    return (
	<div className='filters'>
	    <select onChange={handleMapChange} value={selectedMap} style={{ width: `calc(${selectsWidth}% - 20px)` }}>
		<option value=''>Map</option>
		{maps.map(map => (
		    <option value={map} key={map}>{map.charAt(0).toUpperCase() + map.slice(1)}</option>
		))}
	    </select>
	    {!selectedAgent && <select onChange={handleRoleChange} value={selectedRole} style={{ width: `calc(${selectsWidth}% - 20px)` }}>
		<option value=''>Role</option>
		{ROLES.map(role => (
		    <option value={role} key={role}>{role.charAt(0).toUpperCase() + role.slice(1)}</option>
		))}
	    </select>}
	    <select onChange={handleAgentChange} value={selectedAgent} style={{ width: `calc(${selectsWidth}% - 20px)` }}>
		<option value=''>Agent</option>
		{agents.map(agent => (
		    <option value={agent} key={agent}>{agent}</option>
		))}
	    </select>
	</div>
    );
}

export default Filters;
