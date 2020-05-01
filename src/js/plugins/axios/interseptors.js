

function setTocken(req) {

    if (!req.config.url.includes('auth')) {
        const token = localStorage.getItem('lsTocken');
        req.headers['x-access-token'] = token;
    }
    return req;
}

function setTockenOnLogIn(res) {
    const isLoginUrl = res.config.url.includes('login');
    if (isLoginUrl)
        localStorage.setItem('lsTocken', res.data.token);


    return res;
}

function getClearResponse(res) {
    return res.data;
}

export default function (axios) {
    axios.interceptors.response.use(setTocken);
    axios.interceptors.response.use(setTockenOnLogIn);
    axios.interceptors.response.use(getClearResponse);
}
