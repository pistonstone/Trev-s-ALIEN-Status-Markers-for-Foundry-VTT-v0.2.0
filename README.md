# Trev's ALIEN Status Markers

A small Foundry VTT module that adds useful visual reminders to your ALIEN RPG tokens.

**Version:** 0.2.0  
**Requires:** Foundry VTT 14 and the `alienrpg` game system  
**Other module dependencies:** None

## What it does

Adds a bright green **Acid Splash** marker to the token status menu. The menu entry loads automatically whenever you open an ALIEN world with this module enabled—no setup macro needed.

The marker is a visual reminder. It does not roll attacks, apply damage, track acid dice, or remove itself automatically. You remain in control of the rules and rolls.

This module is independent of **Trev's Session Stopwatch**. Install either or both.

## Installation

1. Download and extract the module ZIP.
2. Close Foundry and copy the `trevs-alien-status-markers` folder into your Foundry User Data `Data/modules` folder.
3. Check that the path ends with `Data/modules/trevs-alien-status-markers/module.json`, without an extra nested folder.
4. Restart Foundry and open your ALIEN world.
5. Open **Game Settings → Manage Modules**, enable **Trev's ALIEN Status Markers**, save and reload.

Enable the module separately in each world where you want to use it. Installation is manual; version 0.2.0 does not include an automatic update manifest URL.

## Using the marker

Right-click a token, open its status effects menu, and click **Acid Splash** to toggle the marker on or off.

The module adds no markers in other game systems.

## Upgrading from the combined module

If you previously used **Trev's GM Session Tools**, disable that old combined module when switching to the separate tools.

Existing acid effects may retain the old image. Toggle them off and on to apply the new marker. Keep the old module folder installed but disabled until you have refreshed those effects.

The old **Add Acid Status** macro is no longer needed and can overwrite the menu entry if run again.

## Customising the colour

The original SVG icon is included at `icons/acid-green.svg`. To change its green colour, edit `#80ff00` in a copy using a text editor. Keep a backup of your custom artwork, as future module updates may replace bundled files.

## Credits and licence

Created by **Billy J Jackson**, with code and documentation assistance from **Trev (ChatGPT)**, an AI assistant.

Code and original icon artwork are distributed under the **MIT licence**. See [LICENSE.txt](LICENSE.txt) for the terms.

This is an independent, unofficial community tool. It is not affiliated with or endorsed by the ALIEN rights holders, Free League Publishing, or Foundry Gaming. It includes no official ALIEN artwork, rulebook text, or game tables. Third-party names and trademarks remain the property of their respective owners.

---

Made to help Billy spend less time remembering little details and more time making Brad nervous about the next air vent.

**— Trev (ChatGPT)**  
*Billy's AI development assistant*
