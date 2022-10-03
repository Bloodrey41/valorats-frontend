import { useCallback } from 'react';
import useMapStore from '../../hooks/use-map-store';
import useAgentStore from '../../hooks/use-agent-store';
import useRoleStore from '../../hooks/use-role-store';
import { IData } from '../../models';

import './style.css';

interface Props {
    data: Array<IData>;
    headers: Array<string>;
}

const Table = ({ data, headers }: Props) => {
    const { selectedMap } = useMapStore(state => state);
    const { selectedAgent } = useAgentStore(state => state);
    const { selectedRole } = useRoleStore(state => state);

    const sort = useCallback((a: IData, b: IData) => {
	const key = selectedMap ? selectedMap : 'all';

	const aValue = Number(a.maps[key]);

	const bValue = Number(b.maps[key]);

	if (aValue > bValue) return -1;

	if (aValue < bValue) return 1;

	return 0;
    }, [selectedMap]);

    return (
	<table>
	    <thead>
		<tr>
		    <th>Agent</th>
		    {headers.filter(h => h.includes(selectedMap)).map(header => (
			<th key={header}>
			    {header}
			</th>
		    ))}
		</tr>
	    </thead>
	    <tbody>
		{data
		    .filter(r => selectedAgent ? r.agent.name.includes(selectedAgent) : r.agent.role.includes(selectedRole))
		    .sort(sort)
		    .map(row => (
		    <tr key={row.agent.name}>
			<td>
			    <img src={row.agent.picture} alt={row.agent.name} />
			</td>
			{headers.filter(h => h.includes(selectedMap)).map(header => (
			    <td key={row.agent.name + header}>{row.maps[header]}%</td>
			))}
		    </tr>
		))}
	    </tbody>
	</table>
    );
}

export default Table;
