import { BrowserRouter, Route, Routes } from "react-router-dom";
import { id, theme as defaultTheme } from "./config";
import { Component } from "react";

import { Circle, Footer, Loading } from "./components";
import { BusinessCard, NotFound } from "./pages";
import { getAvatar, getNickname } from "./util";
import "./assets/scss/App.scss";

export default class App extends Component {
    state = { theme: 'dark', data: null }

    render() {
        return (
            <BrowserRouter>
                <Circle />
                <Loading loading={!this.state?.data} />
                <Routes>
                    <Route path='/' element={
                        <BusinessCard updateTheme={this.updateTheme.bind(this)} data={this.state.data} getData={this.getData.bind(this)} />
                    } />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer username={this.state?.data?.discord_user?.username} />
           </BrowserRouter>
        )
    }

    async componentDidMount() {
        const theme = this.getTheme()
        
        this.setState({ theme })
        document.documentElement.setAttribute('data-theme', theme)

        await new Promise((resolve, _) => setTimeout(() => resolve(), 1000))
        
        const data = await this.getData()

        if(!data) return

        setInterval(async () => await this.getData(), 30_000)

        document.getElementById('title').innerText = getNickname(data.discord_user)
        document.getElementById('icon').href = getAvatar(data.discord_user)
    }

    async getData() {
        const res = await fetch(
            `https://api.lanyard.rest/v1/users/${id}`
        ).then(async (r) => await r.json()).catch(() => null)

        if(res?.data) {
            this.setState({ data: res.data })
            return res.data
        }
    }

    getTheme() {
        let theme = localStorage.getItem('theme')
        if(!theme) {
            localStorage.setItem('theme', defaultTheme)
            theme = defaultTheme
        }

        return this.isTheme(theme)
    }

    updateTheme() {
        const theme = localStorage.getItem('theme')
        const update = this.isTheme(theme) === 'dark' ? 'light' : 'dark'
        localStorage.setItem('theme', update)
        this.setState({ theme: update })
        return document.documentElement.setAttribute('data-theme', update)
    }

    isTheme(theme) {
        return ['dark', 'light'].includes(theme) ? theme : defaultTheme
    }
}