import { Component } from "react";
import styles from "./Button.module.scss";

export default class Button extends Component {
    render() {
        return (
            <div className={`${styles.button} ${this.props.width === 'max' ? styles.button__max : ''}`} onClick={this.onClick.bind(this)}>
                { this.props.icon && <this.props.icon className={styles.icon} /> }
                { this.props.text && <p className={styles.text}>{this.props.text}</p> }
            </div>
        )
    }

    onClick() {
        if(this.props.onClick) {
            this.props.onClick()
        } else if(this.props.href) {
            window.open(this.props.href)
        }
    }
}