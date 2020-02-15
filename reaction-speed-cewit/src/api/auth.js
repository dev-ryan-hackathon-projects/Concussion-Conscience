import axios from "axios";

export async function authUser(url = "", data = {}) {
<<<<<<< Updated upstream
    // const response = await fetch(url, {
    //     method: "POST", // *GET, POST, PUT, DELETE, etc.
    //     headers: {
    //         "Content-Type": "application/json"
    //         // 'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     body: JSON.stringify(data) // body data type must match "Content-Type" header
    // });
    // return await response.json(); // parses JSON response into native JavaScript objects

    return { alias: "Smitty", verified: "true" };
=======
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

    return await { ...response.data, alias: "name here pls" }; // parses JSON response into native JavaScript objects
>>>>>>> Stashed changes
}
