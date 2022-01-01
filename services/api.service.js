import axios from 'axios';
import { getKeyValue, TOKEN_OBJECT } from './storage.service.js';

const getWeather = async () => {
    const token = process.env.TOKEN ?? (await getKeyValue(TOKEN_OBJECT.token));
    const city = process.env.CITY ?? (await getKeyValue(TOKEN_OBJECT.city));
    if (!token) throw new Error('Need Token. Enter -t [API_KEY]');
    if (!city) throw new Error('Need City. Enter -c [CITY]');
    const { data } = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather',
        {
            params: {
                q: city,
                appid: token,
                lang: 'ru',
                units: 'metric',
            },
        }
    );
    return data;
};

export { getWeather };
