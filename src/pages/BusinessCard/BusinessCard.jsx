import { Component } from "react";
import { Profile, Spotify } from "../../components";
import styles from "./BusinessCard.module.scss";

class BusinessCard extends Component {
    render() {
        if(!this.props?.data) {
            return ''
        }
        
        return (
            <main className={styles.block}>
                <Profile user={this.props.data.discord_user} updateTheme={this.props.updateTheme} />
                { this.props.data?.spotify && <Spotify data={this.props.data.spotify} getData={this.props.getData.bind(this)} /> }
            </main>
        )
    }
}

export default BusinessCard