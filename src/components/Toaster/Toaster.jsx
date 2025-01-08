import { Button } from "../index";
import { Component } from "react";
import styles from "./Toaster.module.scss";

import { ReactComponent as IconXMark } from "../../assets/svg/XMark.svg";

export default class Toaster extends Component {
    state = { isClosed: false }

    render() {
        if(this.props.hide) return ''
        
        return (
            <div className={`${styles.toaster} ${this.state.isClosed ? styles.toaster__closed : ''}`}>
                <div className={styles.top}>
                    <p className={styles.title}>{this.props.data.title}</p>
                    <Button icon={IconXMark} onClick={this.onClose.bind(this)}/>
                </div>
                <Button width='max' text='Subscribe' href={this.props.data.url}/>
            </div>
        )
    }

    onClose() {
        this.setState({ isClosed: true })
    }
}