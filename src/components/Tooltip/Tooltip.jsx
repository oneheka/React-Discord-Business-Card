import { Component } from "react";
import styles from "./Tooltip.module.scss";

export default class Tooltip extends Component {
    state = { show: false, editied: false }

    render() {
        return (
            <div style={{ position: 'relative' }} onClick={this.onClick.bind(this)}>
                { this.props.children }
                {
                    <div
                    className={`${styles.content} ${this.state.show ? styles.open : styles.close}`}
                    style={!this.state.editied ? { animation: 'unset' } : undefined}
                    >
                        <p className={styles.text}>{this.props.text}</p>
                    </div>
                }
            </div>
        )
    }

    onClick() {
        if(this.state.show) return
        
        this.setState({ show: true, editied: true })
        setTimeout(() => this.setState({ show: false }), 1000)
    }
}