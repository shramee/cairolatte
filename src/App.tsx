import React, { useEffect, useState } from "react";
import "./App.scss";
import * as Realm from "realm-web";
import PageLayout from "./components/PageLayout";

const realmApp = new Realm.App({ id: "data-vcjyu" });
function App() {
    let setReady = useState(false)[1];
    useEffect(() => {
        (async () => {
            await realmApp.logIn(Realm.Credentials.anonymous());
            setReady(true);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="App">
            {realmApp.currentUser ? (
                <PageLayout user={realmApp.currentUser} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default App;
