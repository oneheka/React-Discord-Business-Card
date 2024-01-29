import { Component } from "react";
import { Info, Trackline } from "../index";
import { getArtits } from "../../util";
import Cover from "../../assets/img/SpotifyCover.webp";
import styles from "./Spotify.module.scss";

export default class Spotify extends Component {
    render() {
        return (
            <div className={styles.spotify}>
                <p className={styles.listening}>Listening now:</p>
                <div className={styles.song}>
                    <Info
                    image={this.props.data.album_art_url || Cover}
                    title={this.props.data.song}
                    description={getArtits(this.props.data.artist).join(', ')}
                    isProfile={false}
                    />
                    <Trackline timestamps={this.props.data.timestamps} getData={this.props.getData} />
                </div>
            </div>
        )
    }
}