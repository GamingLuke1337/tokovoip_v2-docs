# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased - 2.1.0 or 3.0.0]

Changes made by:
- [PinguinPocalypse](https://github.com/GamingLuke1337)

## Note for Contributors:

TokoVoIP_v2, my Fork and the original TokoVoIP_TS3 repository are going to be merged into one repository in the future.
This means that all changes made to the TokoVoIP_v2 + my repository will be merged into the original TokoVoIP_TS3 repository.
I plan on renaming the original TokoVoIP_TS3 repository to TokoVoIP.
Every line of code that would need to be changed to itokoyamato repo is already implemented in my Fork and marked with the -- FUTURE end of line comment. 

---

### ws_server

```md
#### Changed
- Chore: Updated `ws_server` to use modern dependencies
- Switched from CommonJS to ESM

#### Added
- Included support for IPv6
- New integration into the `tokovoip` resource
- Added the option to change the master server addresses
```

---

### master_server

```md
#### Changed
- Chore: Updated `master_server` to use modern dependencies
- Switched from CommonJS to ESM
```

---

### tokovoip

```md
#### Added
- New `ws_server` integration with upgraded dependencies
- Chore: Adding support for IPv6

#### Changed
- Rebranded from `tokovoip_script` to `tokovoip`
- Updated the update check to use the `ox_lib` versionCheck system
- Updated the HTML UI to a more modern design
```

---

### ts3_plugin

```md
#### Planned
- Chore: Completely rewrite the plugin to use modern modules
- Chore: Adding support for IPv6
- Chore: Making sure the plugin works with the latest TeamSpeak version (API 26)
```

---

### Documentation

```md
#### Added
- Created this documentation with my sweat and tears
- Added hate for Nextra and Next.js

#### Removed
- Somehow managed to remove the entire functionality of turbopack in dev mode

#### Security
- Honestly, I don't know how to secure this documentation, so if you find a way, please let me know
- Everything breaks when you try to use turbopack, so I guess that's a security feature?
- Everything breaks when you update the dependencies
- The documentation code is so bad that it might scare away potential attackers
- On the other hand it´s so bad that it might attract potential developers that could clean up the mess
- If i see one more " ⚠ Fast Refresh had to perform a full reload." message, I will lose it
- Anyways, if you find a solution, please open a Pull Request and save me from this misery: https://github.com/GamingLuke1337/tokovoip-docs/pulls
```