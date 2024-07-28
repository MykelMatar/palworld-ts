# pal-ts

TS wrapper for the Palworld REST API

## Basic Usage
```
import PalworldAPI from pal-ts

// username is optional, default is 'admin'
const api = PalworldAPI('localhost:8212', 'admin_password', 'admin_username')
const playerList = await api.playerList()
```

## Available Functions
`basicInfo()` - returns basic server information

`playerList()` - gets list of online players and their attributes

`settings()` - returns settings from PalWorldSettings.ini

`metrics()` - returns some server metrics

`announce(message: string)` - broadcast a message to the server

`kick(userid: string, message: string)` - kicks a player

`ban(userid: string, message: string)` - bans a player

`unban(userid: string)` - ubands a player

`save()` - saves world and player data

`shutdown(waittime: number, message: string)` - gracefully shutdown the server

`stop()` - force quit the server
