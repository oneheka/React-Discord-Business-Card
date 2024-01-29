import { Component } from "react";

class NotFound extends Component {
    render() {
        return ''
    }

    componentDidMount() {
        window.location.href = window.origin
    }
}

export default NotFound