# Introduction to TokoVoIP V2

TokoVoIP V2 is a continuation of the original [TokoVoIP project by Itokoyamato](https://github.com/Itokoyamato/TokoVOIP_TS3).
**Disclaimer:** I am not the original creator of the code. I am simply maintaining and improving it so that server owners can continue using it with modern FiveM setups.

TokoVoIP is a FiveM voice plugin that leverages TeamSpeak to provide **high-quality**, **realistic** proximity-based voice communication. After observing high community demand, [Plactrix](https://github.com/Plactrix) decided to maintain and improve the original project, leading to the creation of **TokoVoIP V2**.

---

## Key Features

* High-quality audio over TeamSpeak
* Radio and phone call effects (with [RadioFX](https://www.myteamspeak.com/addons/f2e04859-d0db-489b-a781-19c2fab29def) integration)
* Simple TeamSpeak plugin integration
* Player-specific proximity voice chat
* Ongoing development and maintenance
* Highly customizable configuration
* Clean and modern UI
* And more

---

## To-Do List

* [ ] Config option to reposition the `[TokoVoIP]` watermark (top-left, bottom-right, etc.)
* [ ] Create a standalone app for radio frequency control (useful for dispatch)
* [ ] Rebuild the TS3 plugin with modern modules
* [ ] Rewrite `ws_server` using up-to-date dependencies
* [ ] Add command to mute specific players via ACE permissions
* [ ] Add export to enable/disable player voice (e.g., while dead)
* [ ] Support fractional radio channels (e.g., `1.25`)
* [ ] Add echo effects for large interior spaces
* [ ] Remove all vulnerable events
* [ ] Implement fix for users with the same IP (e.g., siblings on the same network)

---

## Known Issues

* `ws_server` contains outdated dependencies and may not install properly. A full rewrite is planned for improved stability and performance.

---

## Support

For help with installation, bugs, or configuration, you can:

* Open an [Issue on GitHub](https://github.com/Plactrix/TokoVoIP_v2/issues)
* Join the community Discord: [discord.gg/DEQ95eVmQ3](https://discord.gg/DEQ95eVmQ3)

---

## Support the Original Creator

TokoVoIP was originally developed by [Itokoyamato](https://github.com/Itokoyamato/TokoVOIP_TS3).
If you find the plugin useful, consider supporting them:

[![Patreon](https://img.shields.io/badge/Become%20a-patron-orange)](https://www.patreon.com/Itokoyamato)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=H2UXEZBF5KQBL)

---

### Common Issues

---

## Framework Integration


Or use the pre-integrated fork:

> Note: May be outdated from the official `qb-hud` repo.

---

## Terms & Conditions (from Itokoyamato)

* A visible **TokoVOIP watermark** must be shown in-game
  (You may move or redesign it, but it must remain visible.)

* Refer to the [LICENSE](https://github.com/Itokoyamato/TokoVOIP_TS3/blob/master/LICENSE.md) for full terms.

---

## Credits & Dependencies

* [Itokoyamato (Original Creator)](https://github.com/Itokoyamato/TokoVOIP_TS3)
* [RadioFX](https://github.com/thorwe/teamspeak-plugin-radiofx) by Thorwe
* [Simple-WebSocket-Server](https://gitlab.com/eidheim/Simple-WebSocket-Server) by eidheim
* [JSON for Modern C++](https://github.com/nlohmann/json) by nlohmann
* [cpp-httplib](https://github.com/yhirose/cpp-httplib) by yhirose
* [Task Force Arma 3 Radio](https://github.com/michail-nikolaev/task-force-arma-3-radio) by michail-nikolaev
