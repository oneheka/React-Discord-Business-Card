import { Component } from "react";
import styles from "./Loading.module.scss";

export default class Loading extends Component {
    state = { dot: '' }

    render() {
        const text = `Connecting${this.state.dot}`

        if(this.props?.loading) {
            document.getElementById('title').innerText = text
        }

        return (
            <div className={`${styles.wrapper} ${this.props?.loading ? '' : styles.hide}`}>
                <p className={styles.text}>{text}</p>
                <div className={styles.line}></div>
            </div>
        )
    }

    componentDidMount() {
        const int = setInterval(() => this.setState(
            { dot: this.state.dot.length === 3 ? '' : '.'.repeat(this.state.dot.length+1) }
        ), 300)

        this.setState({ int: int })
    }

    componentDidUpdate(props) {
        if(props.loading !== this.props.loading) {
            clearInterval(this.state.int)
        }
    }
}