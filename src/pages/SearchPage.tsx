import React from "react";
import logo from "../logo.png";
import SearchBar, { SearchBarProps } from "../components/SearchBar";
import { FuncDoc } from "../inc/types";
import Header from "../components/Header";

interface SearchPageProps extends SearchBarProps {
    docs: null | FuncDoc[];
}

export default function SearchPage({ docs, onSearch, query }: SearchPageProps) {
    return (
        <section className="search">
            <Header {...{ onSearch, query }} />
            <section>{docs && docs.length}</section>
        </section>
    );
}
