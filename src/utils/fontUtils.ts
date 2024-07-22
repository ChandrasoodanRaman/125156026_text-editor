import axios from 'axios';

export const getFonts = async () => {
    const response = await axios.get('fonts.json');
    return response.data;
};
