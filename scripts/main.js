const ID = "trevs-alien-status-markers";

Hooks.once("init", () => {
  for (const [key, name, hint] of [
    ["acidStatus", "Green Acid Splash marker", "Add an Acid Splash visual reminder to the ALIEN token status menu."],
    ["actionStatuses", "Full and Quick Action Spent markers", "Add manual action-spent reminders. Clear them yourself when actions refresh."]
  ]) {
    game.settings.register(ID, key, {
      name, hint: `${hint} Reload after changing.`,
      scope: "world", config: true, type: Boolean, default: true, requiresReload: true
    });
  }
});

Hooks.once("setup", () => {
  if (game.system.id !== "alienrpg") return;
  const add = (id, name, icon) => {
    CONFIG.statusEffects[id] = {
      id, name, img: `modules/${ID}/icons/${icon}.svg`, hud: true
    };
  };
  if (game.settings.get(ID, "acidStatus")) add("acid-splash", "Acid Splash", "acid-green");
  if (game.settings.get(ID, "actionStatuses")) {
    add("trevs-full-action-spent", "Full Action Spent", "full-action-spent");
    add("trevs-quick-action-spent", "Quick Action Spent", "quick-action-spent");
  }
});

Hooks.once("ready", () => {
  if (game.user.isGM && game.system.id !== "alienrpg") {
    ui.notifications.info("Trev's ALIEN Status Markers only adds markers in ALIEN RPG worlds.");
  }
});
