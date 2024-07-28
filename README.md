# pal-ts

TS wrapper for the Palworld REST API

## Basic Usage

```
import PalworldAPI from pal-ts

// optionally can also pass port (default is 8212) and username (default is admin)
// i.e. new PalworldAPI('localhost', 'admin_password', 8213, 'admin_username')
const api = new PalworldAPI('localhost', 'admin_password')
const playerList = await api.playerList()
```

## Available Functions

`status()` - returns server status and basic server information (if online)

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
