import { useEffect, useRef } from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import styles from "./input.module.css";

const Input = ({ query, setQuery, onSubmit }) => {
    const textareaRef = useRef(null);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    useEffect(() => {
        if (textareaRef.current) {
            // This clears any previously set height and Prevents the height from "sticking" to a larger size when text is deleted.
            textareaRef.current.style.height = "auto";
            // Dynamically adjusts the height to match the current content and Ensures the <textarea> grows as new text is added.
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [query]);

    return (
        <div className={styles.inputAndSubmit}>
            <div className={styles.textareaContainer}>
                <textarea
                    ref={textareaRef}
                    placeholder="Ask Fusion AI"
                    value={query}
                    onChange={handleInputChange}
                    className={styles.input}
                    rows={1} // Start with one row
                    style={{ maxHeight: "200px" }} // Set your max height here
                />
                <SendRoundedIcon
                    cursor="pointer"
                    onClick={onSubmit} // Call onSubmit when clicked
                    className={styles.sendIcon}
                />
            </div>
        </div>
    );
};

export default Input;
