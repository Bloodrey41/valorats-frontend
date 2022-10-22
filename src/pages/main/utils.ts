import axios from 'axios';
import { API_URI } from '../../config';

export const getData = async (event: string) => {
    const { data } = await axios.get(API_URI + '?url=' + event);
    return data;
}
