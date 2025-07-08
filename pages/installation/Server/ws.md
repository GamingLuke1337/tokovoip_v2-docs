# `ws-server` Setup Guide

## Option 1: Use the integrated ws_server in the `tokovoip` resource

The `tokovoip` resource includes an integrated `ws_server` that can be used without any additional setup.

## Option 2: Run as a Standalone Node.js Application

The `ws-server` can also be run as an independent Node.js application.

1. **Install Node.js**
   Download and install the latest version of [Node.js](https://nodejs.org/en/).

2. **Configure the server**
   Open the configuration file: [`ws_server/config.js`](https://github.com/Itokoyamato/TokoVoIP_TS3/blob/master/ws_server/config.js)

   - Set the `TSServer` value to the **IP address** of your TeamSpeak server.
   - Set `enableintegratews` to false. that deactivates the integrated `ws_server`
   - If hosting on a separate machine, ensure the `ws-server` is accessible by the FiveM server.

3. **Install dependencies and start the server**

   Open a terminal or command prompt in the `ws-server` directory and run the following commands:

   ```bash
   npm install
   npm start
   ```

4. **(Optional) Run in the background**

   To keep the server running continuously, use a process manager such as:

   * [`pm2`](https://pm2.keymetrics.io/)
   * `screen` (Linux-only)
   * `systemd` (Linux-only)
