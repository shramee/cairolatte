import { useState } from "react";

export interface SearchBarProps {
    onSearch: (t: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [qry, setQry] = useState("");
    return (
        <div className="search-wrap">
            <form
                className="search-bar"
                onSubmit={(e) => {
                    e.preventDefault();
                    onSearch(qry);
                }}
            >
                <input
                    placeholder="Search Cairo Functions..."
                    value={qry}
                    onChange={(e) => setQry(e.currentTarget.value)}
                />
                <button>
                    <i className="gg-search" />
                </button>
            </form>
        </div>
    );
}
