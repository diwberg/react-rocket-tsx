import styles from "./Header.module.css"
import falamaisLogo from "../assets/image/fala_mais_logo.svg";

export function Header() {

    return (
        <header>
            <strong className={styles.header}>
            <img 
            src={falamaisLogo} 
            className={styles.header} 
            alt="logotipo do fala mais" 
            />
            <h1>ICYou Feed</h1> 
            </strong>
        </header>
    )

}