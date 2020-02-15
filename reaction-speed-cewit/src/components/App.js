import React from "react";
import { sendTestResults } from "../api/tests";
import {
    URL,
    PAYFONE_AUTH_URL,
    PORT,
    POST_AUTH_USER_ROUTE,
    TARGET_URL
} from "../constants/api";
import { PHONE_NUMBER_REGEX } from "../constants/regex";
import { authUser } from "../api/auth";
import TestScreen from "./testSceen";

//const styles = {};

export default function App(props) {
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [user, setUser] = React.useState("");

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
        </div>
    );
}
