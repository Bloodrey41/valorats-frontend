import axios from 'axios';
import { API_URI } from '../../config';

export const getData = async () => {
    const { data } = await axios.get(API_URI);
    return data;
}
