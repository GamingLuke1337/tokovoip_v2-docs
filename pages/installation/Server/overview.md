# TokoVOIP System Overview

## How does it work?

TokoVoIP uses **WebSockets** to bridge FiveM with TeamSpeak.

Because FiveM blocks local WebSocket connections, you must use a remote WebSocket server (`ws-server`), even if it’s hosted on the same machine.

## Overview

### Phase 1: Handshake

* `tokovoip_script` → `ws-server` → `master server` (register handshake)
* `ts3-plugin` → `master server` (fetch handshake) → `ws-server`

Once the handshake is complete, the master server is no longer used.

### Phase 2: Communication

* `tokovoip_script` ↔ `ws-server` ↔ `ts3-plugin`


## What are the individual Parts doing?

### 1. `ws-server`

A WebSocket server that bridges communication between the FiveM client script and TeamSpeak. It can be deployed either:

* As a **FiveM resource** (co-located or separate from the main server)
* As a **standalone Node.js service**


### 2. `tokovoip_script`

The FiveM resource responsible for:

* Connecting to the `ws-server`
* Integrating with the TeamSpeak plugin
* Managing proximity chat, radio channels, and in-game voice logic

### 3. `TokoVOIP Master Server`

A centralized service that manages multiple server instances.
Features include:

* Client and server registration
* Handshake coordination
* Version control and update messages
* Automatic cleanup of inactive entries

---

**Installation and configuration** 
The system is built using Node.js and relies on a correctly configured TeamSpeak environment.

For compatibility and stability, `npm` is the recommended package manager. While Yarn, pnpm, or Bun are going to work, we cannot assure official support for them.
