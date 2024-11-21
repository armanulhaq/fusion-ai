import SendRoundedIcon from "@mui/icons-material/SendRounded";
import styles from "./input.module.css";
const Input = ({ query, setQuery, onSubmit }) => {
    return (
        <div className={styles.inputAndSubmit}>
            <input
                placeholder="Ask Fusion AI"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                className={styles.input}
            />
            <SendRoundedIcon
                fontSize="large"
                cursor="pointer"
                onSubmit={onSubmit}
                className="send-icon"
            />
        </div>
    );
};

export default Input;
