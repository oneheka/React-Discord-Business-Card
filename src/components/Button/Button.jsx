import { Component } from "react";
import styles from "./Button.module.scss";

export default class Button extends Component {
    render() {
        return (
            <div className={styles.button} onClick={this.onClick.bind(this)}>
                { this.props.icon && <this.props.icon className={styles.icon} /> }
            </div>
        )
    }

    onClick() {
        if(this.props.onClick) {
            this.props.onClick()
        } else if(this.props.href) {
            window.location.href = this.props.href
        }
    }
}