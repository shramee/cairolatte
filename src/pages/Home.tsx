import React from "react";
import logo from "../logo.png";
import SearchBar, { SearchBarProps } from "../components/SearchBar";

export default function Home({ onSearch }: SearchBarProps) {
    return (
        <section className="app-home">
            <img src={logo} className="app-logo" alt="logo" />
            <h1>Cairo Latte</h1>
            <SearchBar onSearch={onSearch} />
            <p></p>
            <p>
                A Cairo functions catalog built with{" "}
                <a href="https://github.com/shramee/hanji">Hanji</a> and OpenAI.
            </p>
        </section>
    );
}
