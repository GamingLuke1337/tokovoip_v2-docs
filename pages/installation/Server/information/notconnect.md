
**TS3 plugin says "Not connected":**

* Ensure the TeamSpeak **waiting channel** name contains `TokoVoIP`
* Confirm the **handshake completed successfully**
* Check that your WebSocket server is correctly configured with:

  * IP address of your TS3 server
  * IP of your FiveM server
* Try connecting manually: `Plugins → TokoVoIP → Connect`

**Error: Could not find dependency `yarn` for resource `ws_server`:**

* Download and install the `yarn` resource from [cfx-server-data](https://github.com/citizenfx/cfx-server-data/tree/master/resources/%5Bsystem%5D/%5Bbuilders%5D)
