import { Component } from "react";
import styles from "./Footer.module.scss";

export default class Footer extends Component {
    render() {
        return (
            <footer className={styles.footer}>
                <p className={styles.text}>
                    Long live in the Wild East <span>{this.props?.username || '???'}</span>.
                </p>
            </footer>
        )
    }
}