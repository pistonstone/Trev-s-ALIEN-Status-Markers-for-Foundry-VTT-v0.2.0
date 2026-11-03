const ID = "trevs-alien-status-markers";

Hooks.once("init", () => {
  game.settings.register(ID, "acidStatus", {
    name: "Green Acid Splash marker",
    hint: "Add a visual reminder to the ALIEN token status menu. Reload after changing.",
    scope: "world", config: true, type: Boolean, default: true, requiresReload: true
  });
});

Hooks.once("setup", () => {
  if (game.system.id !== "alienrpg" || !game.settings.get(ID, "acidStatus")) return;
  // Retain the existing identifier so we don't add a second acid menu entry.
  CONFIG.statusEffects["acid-splash"] = {
    id: "acid-splash", name: "Acid Splash",
    img: `modules/${ID}/icons/acid-green.svg`, hud: true
  };
});

Hooks.once("ready", () => {
  if (game.user.isGM && game.system.id !== "alienrpg") {
    ui.notifications.info("Trev's ALIEN Status Markers only adds markers in ALIEN RPG worlds.");
  }
});
