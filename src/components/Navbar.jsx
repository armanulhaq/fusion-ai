import styles from "./navbar.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            Fusion AI
            <ul className={styles.contactContainer}>
                <div className={styles.contact}>
                    <a
                        href="https://github.com/armanulhaq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.iconLink}
                    >
                        <GitHubIcon
                            fontSize="large"
                            className="transparent-icon"
                        />
                    </a>
                </div>
                <div className={styles.contact}>
                    <a
                        href="https://www.linkedin.com/in/armanulhaq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.iconLink}
                    >
                        <LinkedInIcon
                            fontSize="large"
                            className="transparent-icon"
                        />
                    </a>
                </div>
            </ul>
        </div>
    );
};

export default Navbar;
