import { useQuery } from '@tanstack/react-query';
import { getData } from '../../utils';
import { IData } from '../../models';
import useEventStore from '../use-event-store';

const useGetData = () => {
    const { selectedEvent } = useEventStore(state => state);

    const data = useQuery<Array<IData>, Error>(['data', selectedEvent], () => getData(selectedEvent));

    return data;
}

export default useGetData;
