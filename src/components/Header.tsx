import React from "react";
import logo from "../logo.png";
import SearchBar, { SearchBarProps } from "./SearchBar";

export default function Header({ onSearch, query }: SearchBarProps) {
    return (
        <section className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <h1>Cairo Latte</h1>
            <SearchBar {...{ onSearch, query }} />
            <img
                src="https://img.shields.io/badge/v0.1-BETA-orange?style=flat-square"
                alt="Beta v0.1"
                className="sm-dn ml3"
                style={{
                    flex: "0 0 5.5em",
                }}
            />
        </section>
    );
}
