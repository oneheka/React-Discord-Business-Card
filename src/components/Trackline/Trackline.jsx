import { Component, createRef } from "react";
import { getSpotifyTime } from "../../util";
import styles from "./Trackline.module.scss";

export default class Trackline extends Component {
    state = { lineWidth: 0, ref: createRef() }

    render() {
        return (
            <div className={styles.trackline}>
                <p className={styles.time}>
                    { getSpotifyTime(this.props.timestamps, true) }
                </p>
                <div className={styles.line} ref={this.state.ref}>
                    <div
                    className={styles.highlighted}
                    style={{ width: this.state.lineWidth }}
                    ></div>
                </div>
                <p className={styles.time}>
                    { getSpotifyTime(this.props.timestamps, false) }
                </p>
            </div>
        )
    }

    async componentDidMount() {
        setInterval(async () => await this.updateTime(), 1000)
        await this.updateTime()
    }

    async updateTime() {
        if(this.state.ref?.current) {
            const rect = this.state.ref?.current.getBoundingClientRect()

            const current = Math.trunc((Date.now() - this.props.timestamps.start) / 1000)
            const end = Math.trunc((this.props.timestamps.end - this.props.timestamps.start) / 1000)

            if(current > end) {
                await this.props.getData()
                return this.setState({ lineWidth: 0 })
            }
            
            return this.setState({ lineWidth: Math.trunc((current / end) * rect.width) })
        }
    }
}