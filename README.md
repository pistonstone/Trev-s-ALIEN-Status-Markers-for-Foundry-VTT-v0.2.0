# Trev's ALIEN Status Markers

Version 0.2.0 · Foundry VTT 14 · ALIEN RPG system · No module dependencies

Built by **Billy J Jackson**, with development assistance from **Trev (ChatGPT)**,
an AI assistant. Part of the Trev's collection of small Foundry tools.

Adds a permanent bright green **Acid Splash** entry to the ALIEN token status menu.
The entry loads for all connected clients on every world load. No macro needed.
This module does not include a stopwatch. More markers may be added in future.

## Install

1. Close Foundry.
2. Copy **trevs-alien-status-markers** into your Foundry **Data/modules** folder.
3. Confirm **Data/modules/trevs-alien-status-markers/module.json** exists.
4. Restart Foundry, open an ALIEN practice world, then enable **Trev's ALIEN Status
   Markers** in **Game Settings → Manage Modules**. Save and reload.
5. Right-click a token, open its status menu, and toggle **Acid Splash**.

It deliberately adds no markers in other game systems. Enable it in each ALIEN
world where you want it. You do not need Trev's Session Stopwatch installed.

## Replacing the old combined module

Disable **Trev's GM Session Tools** and enable this module instead. Keep the old
folder installed but disabled while any old applied markers still reference its
image. Toggle existing acid effects off and on to use the new module's image.
The acid status identifier remains **acid-splash**, avoiding a duplicate menu entry.
You no longer need the old Add Acid Status macro; running that can overwrite the
new menu entry until you reload.

## Visual reminder only

This marker does not roll damage, alter Health, halve acid dice, or clear itself.
Resolve those rules manually. It uses original SVG artwork, with no copied rules
or licensed ALIEN artwork. This is an unofficial tool, not an official game module.

To change the icon colour, keep a copy and edit **icons/acid-green.svg** in
Notepad: replace **#80ff00** with the colour you want. Refresh afterward. Future
updates may replace bundled artwork, so retain your customised copy separately.

## Sharing

Share this module folder or its ZIP independently under the included MIT licence.
No external account, subscription, network service, or tracking is required.
Foundry 14 is the declared supported edition. Manual installation only for now;
there is no public manifest/update URL yet.

The separated module has passed mocked ALIEN/non-ALIEN startup checks and file
validation. Check the status menu and an applied effect in your practice world
before using it in a live session.
