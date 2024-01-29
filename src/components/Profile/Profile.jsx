import { Component } from "react";
import { getAvatar, getNickname } from "../../util";
import { Button, Info } from "../index";
import { github } from "../../config";
import styles from "./Profile.module.scss"

import { ReactComponent as IconLight } from "../../assets/svg/Light.svg";
import { ReactComponent as IconDark } from "../../assets/svg/Dark.svg";
import { ReactComponent as IconGitHub } from "../../assets/svg/GitHub.svg";

export default class Profile extends Component {
    render() {
        return (
            <div className={styles.profile}>
                <Info
                image={getAvatar(this.props.user)}
                title={getNickname(this.props.user)}
                description={`@${this.props.user.username}`}
                isProfile={true}
                />
                <div className={styles.buttons}>
                    <Button
                    icon={localStorage.getItem('theme') === 'dark' ? IconDark : IconLight}
                    onClick={this.props.updateTheme}
                    />
                    <Button
                    icon={IconGitHub}
                    href={github}
                    />
                </div>
            </div>
        )
    }
}