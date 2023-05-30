import React, { useEffect, useState } from "react";
import * as Realm from "realm-web";
import PageLayout from "./components/PageLayout";

const realmApp = new Realm.App({ id: "data-vcjyu" });
function App() {
    let [ready, setReady] = useState(false);
    useEffect(() => {
        (async () => {
            if (!realmApp.currentUser) {
                await realmApp.logIn(Realm.Credentials.anonymous());
            }
            setReady(true);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="App">
            {ready &&
                (realmApp.currentUser ? (
                    <PageLayout user={realmApp.currentUser} />
                ) : (
                    <p>Loading...</p>
                ))}
        </div>
    );
}

export default App;
