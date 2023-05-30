import React from "react";
import logo from "../logo.png";
import SearchBar, { SearchBarProps } from "./SearchBar";

export default function Header({ onSearch, query }: SearchBarProps) {
    return (
        <section className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <h1>Cairo Latte</h1>
            <SearchBar {...{ onSearch, query }} />
        </section>
    );
}
