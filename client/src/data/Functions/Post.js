import API from '../../api/api';

export function Post(url, data) {
    function postData() {
        try {
            const { data: res } = API.post(url, data);
            console.log(res.message);
            return true
        } catch (error) {
            return error
        }

    }
    return (
        postData()
    )
}