# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased - 2.5.0]

Changes made by:
- [PinguinPocalypse](https://github.com/GamingLuke1337)
- [Plactrix](https://github.com/Plactrix)

## Note for Contributors:

Every line of code that would need to be changed to itokoyamato repo is already implemented in my Fork and marked with the -- FUTURE end of line comment. 

---

### ws_server

```md
#### Changed
- Updated `ws_server` to use modern dependencies
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
- Updated `master_server` to use modern dependencies
- Switched from CommonJS to ESM
```

---

### tokovoip

```md
#### Added
- New `ws_server` integration with upgraded dependencies
- Added support for IPv6

#### Changed
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