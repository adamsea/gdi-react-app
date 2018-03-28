import axios from 'axios';

import { MEMES_API } from '../constants';

export default {

    createMeme: function (textFields) {
        return axios.post(MEMES_API, textFields, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

}