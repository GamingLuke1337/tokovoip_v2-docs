# Integrating TokoVoIP into other Resources

## QBCore

### `qb-hud` Integration

To integrate TokoVoIP with `qb-hud`, replace these lines in the `client.lua`:

- Replace (around line 719)
```lua
local talking = NetworkIsPlayerTalking(playerId)
```

- With:
```lua
local talking = exports["tokovoip_script"]:getPlayerData(GetPlayerServerId(PlayerId()), "voip:talking") or 0
```

- Replace (around line 722)
```lua
voice = LocalPlayer.state['proximity'].distance
```

- With:
```lua
voice = exports["tokovoip_script"]:getPlayerData(GetPlayerServerId(PlayerId()), "voip:mode") or 0
```

- Replace (around lines 746 and 790)
```lua
LocalPlayer.state['radioChannel']
```

- With:
```lua
exports["tokovoip_script"]:getPlayerData(GetPlayerServerId(PlayerId()), "radio:channel")
```
