import React from "react";
import { sendTestResults } from "../api/tests";
import { URL, PAYFONE_AUTH_URL } from "../constants/api";
import { PHONE_NUMBER_REGEX } from "../constants/regex";
import { authUser } from "../api/auth";
import TestScreen from "./testSceen";

//const styles = {};

const findUser = (phoneNumber, setUser) => {
    if (PHONE_NUMBER_REGEX.test(phoneNumber)) {
        console.log("good regex");
        authUser(URL, { phoneNumber }).then(data => {
            setUser(data); // JSON data parsed by `response.json()` call
        });
    } else {
        console.log("bad regex");
    }
};

export default function App(props) {
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [user, setUser] = React.useState(null);
<<<<<<< Updated upstream

    return (
        <div>
            {!user ? (
                <div>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        id="phone-number"
                        name="phone-number"
                    />
                    <button onClick={() => findUser(phoneNumber, setUser)}>
                        Submit
                    </button>
                </div>
            ) : (
                <TestScreen user={user} />
            )}
=======

    React.useEffect(() => {
        async function fetchUser() {
            const data = await authUser(URL + POST_AUTH_USER_ROUTE, {
                targetUrl: TARGET_URL
            });
            setUser(data);
        }
        fetchUser();
    }, []);

    return (
        <div>
            {!user ? <div>waiting for data</div> : <TestScreen user={user} />}
>>>>>>> Stashed changes
        </div>
    );
}
