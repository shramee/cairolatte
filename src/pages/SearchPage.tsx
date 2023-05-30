import React from "react";
import logo from "../logo.png";
import SearchBar, { SearchBarProps } from "../components/SearchBar";
import { FuncDoc } from "../inc/types";
import Header from "../components/Header";
import DocSearchResult from "../components/DocSearchResult";

interface SearchPageProps extends SearchBarProps {
    docs: null | FuncDoc[];
}

export default function SearchPage({ docs, onSearch, query }: SearchPageProps) {
    return (
        <section className="search">
            <Header {...{ onSearch, query }} />
            <section className="main">
                {docs &&
                    docs.map((fn) => (
                        <DocSearchResult key={fn._id} {...{ fn }} />
                    ))}
                {docs && !docs.length && (
                    <h1 style={{ marginTop: "20vh" }}>
                        Sorry, no matches found for '<code>{query}</code>'
                    </h1>
                )}
            </section>
            <footer className="app-footer">
                A catalog of Cairo functions.
            </footer>
        </section>
    );
}
