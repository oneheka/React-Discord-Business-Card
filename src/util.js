export const getAvatar = (user) => {
    return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${user.avatar.startsWith('a_') ? 'gif' : 'webp'}?size=128`
}

export const getNickname = (user) => {
    return (user?.global_name || user.username)
}

export const getArtits = (str) => {
    return str.split('; ')
}

export const getSpotifyTime = (data, start) => {
    const seconds = Math.trunc(((start ? Date.now() : data.end) - data.start) / 1000)

    const m = Math.trunc(seconds / 60)
    const s = Math.trunc(seconds % 60)

    return `${m}:${s > 9 ? s : `0${s}`}`
}