# `tokovoip` resource Setup Guide

1. **Download the script**
   Download the latest version of `tokovoip_script` from the [GitHub Releases page](https://github.com/Itokoyamato/TokoVoIP_TS3/releases/latest).

2. **Extract the archive**
   Extract the contents into the `resources` folder of your FiveM server.

3. **Edit the configuration**
   Open the configuration file: [`tokovoip_script/config.lua`](https://github.com/Itokoyamato/TokoVoIP_TS3/blob/master/tokovoip_script/config.lua)

   Update the following values:

   * `wsServer`: Enter the `IP:PORT` from the WebSocket server console output (when you start your server).

   * `TSChannel`: Set this to match your TeamSpeak server channel configuration.

   * Adjust other settings as needed based on your preferences.

4. **Update your TeamSpeak waiting channel**
   Ensure that your **waiting channel name on the TeamSpeak server** contains the string `TokoVoIP`.

   > Note: This is [case-insensitive](https://www.yourdictionary.com/case-insensitive).
