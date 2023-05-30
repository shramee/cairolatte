import * as Realm from "realm-web";
import { FuncsCollection } from "../inc/types";
import Home from "../pages/Home";
import { useEffect, useState } from "react";
import SearchPage from "../pages/SearchPage";

let initialSearchDone = false;

export default function PageLayout({ user }: { user: Realm.User }) {
    let [query, setQuery] = useState("");
    let [docs, setDocs] = useState([]);
    let collection: FuncsCollection = user
        .mongoClient("cairofoo")
        .db("cairo_latte")
        .collection("funcs");

    const onSearch = async (query: string) => {
        setQuery(query);
        const agg = [
            {
                $search: {
                    text: {
                        query,
                        // 'fuzzy': {},
                        path: { wildcard: "*" },
                    },
                },
            },
            { $limit: 10 },
        ];
        const url = new URL(window.location.toString());
        url.searchParams.set("q", query);
        window.history.pushState({}, "", url);
        let docs = await collection.aggregate(agg);
        console.error("Called");
        setDocs(docs);
        console.log(query, docs);
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get("q");
        if (query && !initialSearchDone) onSearch(query);
        initialSearchDone = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {query ? (
                <SearchPage {...{ docs, query, onSearch }} />
            ) : (
                <Home {...{ query, onSearch }} />
            )}
        </div>
    );
}
