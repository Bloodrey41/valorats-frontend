import { useQuery } from '@tanstack/react-query';
import { getData } from '../../utils';
import { IData } from '../../models';

const useGetData = () => {
    const data = useQuery<Array<IData>, Error>(['data'], getData);
    return data;
}

export default useGetData;
