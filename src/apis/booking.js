import axiosClient from '../config/axios.config';

const CreateABookingOnlineAll = async (accessToken, user_id, room_id, costume_id, payment_status, booking_time, price_list_id, status, messenger, time_try_customer) => {

    try {
        const response = await axiosClient.post('/createNewBookingDetail',
            {
                user_id: user_id,
                room_id: room_id,
                costume_id: costume_id,
                payment_status: payment_status,
                booking_time: booking_time,
                price_list_id: price_list_id,
                status: status,
                messenger: messenger,
                time_try_customer: time_try_customer,

            }, {
            headers: {

                Authorization: `Bearer ${accessToken}`,
            },
        });
        return {
            //id: response.data.id,
            //response: response.data,
            statusCode: response.status,
        };
    } catch (e) {
        return {
            error: e.response.data,
            status: e.response.status,
        };
    }
};
const CreateABookingAlbums = async (accessToken, user_id, payment_status, price, booking_time, price_list_id, status, messenger) => {

    try {
        const response = await axiosClient.post('/createNewBookingDetail',
            {
                user_id: user_id,
                payment_status: payment_status,
                price: price,
                booking_time: booking_time,
                price_list_id: price_list_id,
                status: status,
                messenger: messenger,

            }, {
            headers: {

                Authorization: `Bearer ${accessToken}`,
            },
        });
        return {
            //id: response.data.id,
            //response: response.data,
            statusCode: response.status,
        };
    } catch (e) {
        return {
            error: e.response.data,
            status: e.response.status,
        };
    }
};
const updateBlogPost = async (accessToken, id, title, content, author, date) => {

    try {
        const response = await axiosClient.put(`/updateBlogPostById/${id}`, { title: title, content: content, author: author, date: date }, {
            headers: {

                Authorization: `Bearer ${accessToken}`,
            },
        });
        return {
            id: response.data.id,
            response: response.data,
            statusCode: response.status,
        };
    } catch (e) {
        return {
            error: e.response.data,
            status: e.response.status,
        };
    }
};
const deleteBlogPost = async (accessToken, id) => {
    try {
        const response = await axiosClient.delete(`/deleteBlogPostById/${id}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return {
            statusCode: response.status
        }

    } catch (error) {
        console.error('Lỗi khi lấy danh sách ảnh:', error);
        throw error;
    }
};
const getAllBookingDetails = async (accessToken) => {
    try {
        const response = await axiosClient.get(`/getAllBookingDetails`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        //console.log(response);
        return response.data;
    } catch (error) {
        return {
            error,
            statusCode: error.status,
        };
    }
};
export {
    CreateABookingOnlineAll,
    CreateABookingAlbums,
    getAllBookingDetails,
    updateBlogPost,
    deleteBlogPost
};