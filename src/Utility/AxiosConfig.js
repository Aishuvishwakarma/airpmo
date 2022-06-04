import axios from 'axios';

const instance = axios.create({
    baseURL:  'https://cl3v9qtjc150790701kaaek10mtt-server-vn57etnuya-ue.a.run.app/',
    headers: {
        "Content-Type": "application/json"
    }
});

export default instance;