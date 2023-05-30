import * as Realm from "realm-web";
import { FuncsCollection } from "../inc/types";
import Home from "../pages/Home";
import { useEffect, useState } from "react";
import SearchPage from "../pages/SearchPage";

export default function PageLayout({ user }: { user: Realm.User }) {
    let [query, setQuery] = useState(window.location.search);
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
        url.searchParams.set("foo", "bar");
        window.history.pushState({}, "", url);
        let docs = await collection.aggregate(agg);
        setDocs(docs);
        console.log(query, docs);
    };

    useEffect(() => {
        if (window.location.search) onSearch(window.location.search);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {query ? (
                <SearchPage {...{ onSearch }} />
            ) : (
                <Home {...{ onSearch }} />
            )}
        </div>
    );
}
