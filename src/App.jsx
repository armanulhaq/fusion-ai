import { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import Input from "./components/Input";
import Response from "./components/Response";
import Navbar from "./components/Navbar";

function App() {
    function handleSubmit() {
        setSubmittedQuery(query);
        setQuery("");
    }

    const [query, setQuery] = useState("");
    const [submittedQuery, setSubmittedQuery] = useState("");
    return (
        <>
            <div className="navbar">
                <Navbar />
            </div>

            <div className="top">
                {submittedQuery === "" ? (
                    <Welcome />
                ) : (
                    <Response query={submittedQuery} />
                )}
            </div>
            <div className="bottom">
                <Input
                    setQuery={setQuery}
                    query={query}
                    onSubmit={handleSubmit}
                />
            </div>
        </>
    );
}

export default App;
