import React from "react";
import { sendTestResults } from "../api/tests";
import {
    URL,
    PAYFONE_AUTH_URL,
    PORT,
    POST_AUTH_USER_ROUTE,
    TARGET_URL
} from "../constants/api";
import { authUser } from "../api/auth";
import TestScreen from "./TestScreen";

//const styles = {};


export default function App(props) {
    const [user, setUser] = React.useState("");
    const vfp = React.useMemo(
        () => new URLSearchParams(window.location.search).get("vfp"),
        []
    );
    React.useEffect(() => {
        if (!vfp) {
            async function fetchUser() {
                const data = await authUser(URL + POST_AUTH_USER_ROUTE, {
                    targetUrl: TARGET_URL
                });
                setUser(data);
            }
            fetchUser();
        }
    }, []);

    React.useEffect(() => {
        if (
            !window.location.search &&
            user &&
            user.Status === 0 &&
            user.Response.RedirectTargetUrl
        ) {
            //if there is not a parameter in querystring, user status is 0 and there is a redirect

            window.location.href = user.Response.RedirectTargetUrl;
        }
    }, [user]);

    return (
        <div>
            {!user || user.Status !== 0 ? <div>waiting for data</div> : null}
            {/*<TestScreen user={user} />*/}
            {user ? user.Status : null}
            {vfp}
        </div>
    );
}
