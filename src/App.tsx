import React, { useEffect, useState } from "react";
import "./App.scss";
import * as Realm from "realm-web";

const realmApp = new Realm.App({ id: "data-vcjyu" });
function App() {
    let setReady = useState(false)[1];
    useEffect(() => {
        (async () => {
            await realmApp.logIn(Realm.Credentials.anonymous());
            setReady(true);
        })();
    }, [setReady]);

}

export default App;
