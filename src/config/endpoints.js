const BASE_URL = "http://localhost:8080";

export const URL = {
    GET_CATEGORY_LIST: `${BASE_URL}/product/get/categoryList`,
    GET_ITEM_BY_CATEGORY: `${BASE_URL}/product/getItemByCategory/`,
    GET_ITEM_BY_SUBCATEGORY: `${BASE_URL}/product/getItemBySubCategory/`,

    GET_ITEM_BY_ID: `${BASE_URL}/product/`,

    SEND_EMAIL: `${BASE_URL}/user/send/email`,

    LOGIN_USER: `${BASE_URL}/user/login`,
    REGISTER_USER: `${BASE_URL}/user/register`,
    FETCH_USER: `${BASE_URL}/user/`,

    ORDER_ITEM: `${BASE_URL}/order/placeOrder`
}