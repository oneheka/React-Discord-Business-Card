import { Component } from "react";
import { Tooltip } from "../index";
import styles from "./Info.module.scss";

export default class Info extends Component {
    render() {
        return (
            <div className={styles.info}>
                <div className={styles.image}>
                    <img alt='file' src={this.props.image} />
                </div>
                <div className={styles.content}>
                    <p className={styles.title}>
                        { this.props.title }
                    </p>
                    <Tooltip text='Copied!'>
                        <p
                        className={styles.description}
                        onClick={
                            this.onCopy.bind(
                                this, (
                                    this.props?.isProfile ? this.props.description
                                    : `${this.props.description} - ${this.props.title}`
                                )
                            )
                        }
                    >
                        { this.props.description }
                    </p>
                    </Tooltip>
                </div>
            </div>
        )
    }

    onCopy(text) {
        return navigator.clipboard.writeText(text)
    }
}