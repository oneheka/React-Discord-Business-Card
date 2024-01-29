# Example
![example]('https://i.imgur.com/2c0GXsK.png')

# Starting
1. Download the repository to your computer.
2. Join the [lanyard](https://discord.gg/UrXF2cfJ7F) server, as this business card is based on their [API](https://github.com/phineas/lanyard).
3. Fill in the `src/config.js` file with id, github url and default theme.

# Start the application
To run the application, type `npm run start` in the console.

# How to host using Nginx and PM2
1. Type `npm run build` in the console.
2. Start the perpetual process via the `pm2 start node app/index.js` command, after which the website will be hovered on port 3000.
3. Populate the nginx config for the website port.