import React from "react";
import { FuncDoc } from "../inc/types";
import ghIcon from "./github.svg";
import Highlight from "react-highlight";

export default function DocSearchResult({ fn }: { fn: FuncDoc }) {
    const shieldRepo = fn.repo.replace("-", "--");
    return (
        <article className="card">
            <header>
                <h4 className="m0 ">
                    <code>fn {fn.name}</code>
                </h4>

                <a
                    href={`https://github.com/${fn.repo}/blob/main/${fn.path}#:~:text=fn%20${fn.name}`}
                    target="_blank"
                    className="sml m0 ml3"
                    rel="noreferrer"
                >
                    {fn.path}
                </a>

                <aside>
                    <a
                        target="_blank"
                        className="sml has-icon"
                        href={`https://github.com/${fn.repo}`}
                        rel="noreferrer"
                    >
                        {fn.repo}
                    </a>
                    <img
                        className="ml3"
                        alt="GitHub stars"
                        src={`https://img.shields.io/github/stars/${fn.repo}?style=for-the-badge`}
                    />
                </aside>
            </header>
            <section>
                <p className="clear-fix">
                    <img
                        className="ml3 fr"
                        alt="GitHub stars"
                        src={`https://img.shields.io/github/last-commit/${fn.repo}?style=for-the-badge`}
                    />
                    {fn.desc}
                </p>
                <Highlight className="rust">{fn.code}</Highlight>
            </section>
        </article>
    );
}
