import { Component } from "react";
import styles from "./Circle.module.scss";

export default class Circle extends Component {
    render() {
        return (
            <span className={styles.circle}></span>
        )
    }
}