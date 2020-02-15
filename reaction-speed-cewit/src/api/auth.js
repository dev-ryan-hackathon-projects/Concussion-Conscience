import axios from "axios";

export async function authUser(url = "", data = {}) {
    let response;
    try {
        response = await axios({
            method: "post",
            url: url,
            data: data
        });
    } catch (e) {
        response = e.response;
    }

    return { ...response.data, alias: "name here pls" }; // parses JSON response into native JavaScript objects
}
