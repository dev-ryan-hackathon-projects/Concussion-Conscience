import React from "react";
import { sendTestResults } from "../api/tests";
import {
    URL,
    POST_FINISH_AUTH_ROUTE,
    POST_AUTH_USER_ROUTE,
    TARGET_URL
} from "../constants/api";
import { authUser, finishAuth } from "../api/auth";
import TestScreen from "./TestScreen";

//const styles = {};

export default function App(props) {
    const [user, setUser] = React.useState(null);
    const vfp = React.useMemo(
        () => new URLSearchParams(window.location.search).get("vfp"),
        []
    );
    const [payfoneId, setPayfoneId] = React.useState(null);
    React.useEffect(() => {
        if (!vfp) {
            async function fetchUser() {
                const data = await authUser(URL + POST_AUTH_USER_ROUTE, {
                    targetUrl: TARGET_URL
                });
                setUser(data);
            }
            fetchUser();
        } else {
            async function finishUserAuth() {
                const data = await finishAuth(URL + POST_FINISH_AUTH_ROUTE, {
                    vfp: vfp
                });
                setPayfoneId(data);
            }
            finishUserAuth();
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
            {!user || user.Status !== 0 ? (
                <div>waiting for data</div>
            ) : (
                <p>got data</p>
            )}
            {/*<TestScreen user={user} />*/}
            {payfoneId ? payfoneId : "payphoneId"}
            {user ? user.Status : "userStatus"}
            {vfp ? vfp : "vfp"}
        </div>
    );
}
