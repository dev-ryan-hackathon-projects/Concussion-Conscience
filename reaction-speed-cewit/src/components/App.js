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

    return (
        <div>
            <button
                onClick={() =>
                    setUser(() =>
                        authUser(`${URL}:${PORT}${POST_AUTH_USER_ROUTE}`, {
                            targetUrl: TARGET_URL
                        }).then(data => data)
                    )
                }
            >
                get user
            </button>
            {/* {!user ? <div>waiting for data</div> : <TestScreen user={user} />} */}
        </div>
    );
}
