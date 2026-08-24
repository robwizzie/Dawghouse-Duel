/* ══════════════════════════════════════════════════════════════
   CATEGORY: MINECRAFT

   Mobs, animals, blocks and items. Blocky and instantly readable,
   which is exactly what this game wants.

   Artwork: node tools/fetch-wiki-images.js minecraft
   ══════════════════════════════════════════════════════════════ */
window.DHD_CATEGORIES = window.DHD_CATEGORIES || [];
window.DHD_CATEGORIES.push({
  id: 'minecraft',
  name: 'Minecraft',
  blurb: 'Mobs, blocks and the things you dig for.',
  wiki: 'minecraft.fandom.com',
  /* Item art on this wiki is a 32px sprite of a few hundred bytes. That is
     the correct picture, not a broken one, so the size floor comes down and
     the board renders it with pixelated scaling rather than blurring it. */
  minBytes: 90,
  pixelArt: true,
  items: [

    /* ── MOBS ── */
    {slug:'creeper', name:'Creeper', alt:[], note:'Mobs', tier:'easy', clue:'That hiss.'},
    {slug:'enderman', name:'Enderman', alt:[], note:'Mobs', tier:'easy', clue:'Do not look at it.'},
    {slug:'zombie', name:'Zombie', alt:[], note:'Mobs', tier:'easy', clue:'Groans, burns at dawn.'},
    {slug:'skeleton', name:'Skeleton', alt:[], note:'Mobs', tier:'easy', clue:'Shoots from a distance.'},
    {slug:'spider', name:'Spider', alt:[], note:'Mobs', tier:'easy', clue:'Climbs walls.'},
    {slug:'witch', name:'Witch', alt:[], note:'Mobs', tier:'mid', clue:'Throws potions.'},
    {slug:'slime', name:'Slime', alt:[], note:'Mobs', tier:'mid', clue:'Splits when you hit it.'},
    {slug:'ghast', name:'Ghast', alt:[], note:'Mobs', tier:'mid', clue:'Cries, then fires.'},
    {slug:'blaze', name:'Blaze', alt:[], note:'Mobs', tier:'mid', clue:'Rods, and it floats.'},
    {slug:'wither-skeleton', name:'Wither Skeleton', alt:[], note:'Mobs', tier:'mid', clue:'The tall black one in the fortress.'},
    {slug:'piglin', name:'Piglin', alt:[], note:'Mobs', tier:'mid', clue:'Wear gold or else.'},
    {slug:'hoglin', name:'Hoglin', alt:[], note:'Mobs', tier:'deep', clue:'Charges you in the Nether.'},
    {slug:'drowned', name:'Drowned', alt:[], note:'Mobs', tier:'mid', clue:'Zombie that went under.'},
    {slug:'husk', name:'Husk', alt:[], note:'Mobs', tier:'deep', clue:'The desert one.'},
    {slug:'stray', name:'Stray', alt:[], note:'Mobs', tier:'deep', clue:'Skeleton with slowness arrows.'},
    {slug:'phantom', name:'Phantom', alt:[], note:'Mobs', tier:'mid', clue:'Sleep, and it goes away.'},
    {slug:'silverfish', name:'Silverfish', alt:[], note:'Mobs', tier:'deep', clue:'Out of the stone.'},
    {slug:'guardian', name:'Guardian', alt:[], note:'Mobs', tier:'mid', clue:'The eye, in the monument.'},
    {slug:'elder-guardian', name:'Elder Guardian', alt:[], note:'Mobs', tier:'deep', clue:'Gives you mining fatigue.'},
    {slug:'shulker', name:'Shulker', alt:[], note:'Mobs', tier:'mid', clue:'A box that shoots.'},
    {slug:'vex', name:'Vex', alt:[], note:'Mobs', tier:'deep', clue:'Small, flies through walls.'},
    {slug:'evoker', name:'Evoker', alt:[], note:'Mobs', tier:'mid', clue:'Summons fangs.'},
    {slug:'vindicator', name:'Vindicator', alt:[], note:'Mobs', tier:'deep', clue:'The axe.'},
    {slug:'pillager', name:'Pillager', alt:[], note:'Mobs', tier:'mid', clue:'Crossbow, and a raid.'},
    {slug:'ravager', name:'Ravager', alt:[], note:'Mobs', tier:'mid', clue:'The raid beast.'},
    {slug:'warden', name:'Warden', alt:[], note:'Mobs', tier:'easy', clue:'Blind, and it hears you.'},
    {slug:'wither', name:'Wither', alt:[], note:'Mobs', tier:'easy', clue:'Three heads. You built it.'},
    {slug:'ender-dragon-mc', name:'Ender Dragon', alt:[], note:'Mobs', tier:'easy', clue:'The end of the game.'},
    {slug:'villager', name:'Villager', alt:[], note:'Mobs', tier:'easy', clue:'Hmm.'},
    {slug:'iron-golem', name:'Iron Golem', alt:[], note:'Mobs', tier:'easy', clue:'Guards the village.'},
    {slug:'snow-golem', name:'Snow Golem', alt:[], note:'Mobs', tier:'mid', clue:'Throws snowballs, melts in the rain.'},

    /* ── ANIMALS ── */
    {slug:'cow', name:'Cow', alt:[], note:'Animals', tier:'easy', clue:'Leather and beef.'},
    {slug:'pig', name:'Pig', alt:[], note:'Animals', tier:'easy', clue:'Ride it with a carrot.'},
    {slug:'sheep', name:'Sheep', alt:[], note:'Animals', tier:'easy', clue:'Shear, do not kill.'},
    {slug:'chicken', name:'Chicken', alt:[], note:'Animals', tier:'easy', clue:'Feathers, eggs.'},
    {slug:'wolf', name:'Wolf', alt:[], note:'Animals', tier:'easy', clue:'Bones make it yours.'},
    {slug:'cat-mc', name:'Cat', alt:[], note:'Animals', tier:'mid', clue:'Keeps creepers away.'},
    {slug:'fox', name:'Fox', alt:[], note:'Animals', tier:'mid', clue:'Steals what it picks up.'},
    {slug:'panda', name:'Panda', alt:[], note:'Animals', tier:'mid', clue:'Bamboo jungles.'},
    {slug:'bee', name:'Bee', alt:[], note:'Animals', tier:'mid', clue:'Do not break the nest.'},
    {slug:'axolotl', name:'Axolotl', alt:[], note:'Animals', tier:'mid', clue:'Plays dead and heals.'},
    {slug:'allay', name:'Allay', alt:[], note:'Animals', tier:'mid', clue:'Fetches what you show it.'},
    {slug:'goat', name:'Goat', alt:[], note:'Animals', tier:'mid', clue:'Rams you off the mountain.'},
    {slug:'llama', name:'Llama', alt:[], note:'Animals', tier:'mid', clue:'Spits, and carries chests.'},
    {slug:'parrot', name:'Parrot', alt:[], note:'Animals', tier:'deep', clue:'Copies mob sounds.'},
    {slug:'turtle', name:'Turtle', alt:[], note:'Animals', tier:'deep', clue:'Scute, and a helmet.'},
    {slug:'dolphin', name:'Dolphin', alt:[], note:'Animals', tier:'deep', clue:'Leads you to treasure.'},
    {slug:'glow-squid', name:'Glow Squid', alt:[], note:'Animals', tier:'deep', clue:'It won a vote.'},
    {slug:'mooshroom', name:'Mooshroom', alt:[], note:'Animals', tier:'mid', clue:'A cow with mushrooms on it.'},
    {slug:'sniffer', name:'Sniffer', alt:[], note:'Animals', tier:'deep', clue:'Digs up ancient seeds.'},
    {slug:'camel', name:'Camel', alt:[], note:'Animals', tier:'deep', clue:'Two people can ride it.'},
    {slug:'armadillo', name:'Armadillo', alt:[], note:'Animals', tier:'deep', clue:'Scutes for wolf armour.'},

    /* ── MOBS ── */
    {slug:'breeze', name:'Breeze', alt:[], note:'Mobs', tier:'deep', clue:'The trial chamber one.'},

    /* ── PLAYERS ── */
    {slug:'alex', name:'Alex', alt:[], note:'Players', tier:'easy', clue:'The other default.'},

    /* ── ITEMS ── */
    {slug:'diamond', name:'Diamond', alt:[], note:'Items', tier:'easy', clue:'The one everyone digs for.'},
    {slug:'diamond-sword', name:'Diamond Sword', alt:[], note:'Items', tier:'easy', clue:'The icon of the whole game.'},
    {slug:'diamond-pickaxe', name:'Diamond Pickaxe', alt:[], note:'Items', tier:'mid', clue:'Gets you obsidian.'},
    {slug:'netherite-ingot', name:'Netherite Ingot', alt:[], note:'Items', tier:'mid', clue:'Better than diamond.'},
    {slug:'elytra', name:'Elytra', alt:[], note:'Items', tier:'mid', clue:'Wings from the End.'},
    {slug:'totem-of-undying', name:'Totem of Undying', alt:[], note:'Items', tier:'mid', clue:'Hold it and survive.'},
    {slug:'enchanted-golden-apple', name:'Enchanted Golden Apple', alt:[], note:'Items', tier:'mid', clue:'The god apple.'},
    {slug:'ender-pearl', name:'Ender Pearl', alt:[], note:'Items', tier:'mid', clue:'Throw it and follow.'},
    {slug:'eye-of-ender', name:'Eye of Ender', alt:[], note:'Items', tier:'mid', clue:'Points at the stronghold.'},
    {slug:'blaze-rod', name:'Blaze Rod', alt:[], note:'Items', tier:'mid', clue:'Half of a brewing stand.'},
    {slug:'redstone-dust', name:'Redstone Dust', alt:[], note:'Items', tier:'mid', clue:'The wiring.'},
    {slug:'tnt', name:'TNT', alt:[], note:'Items', tier:'easy', clue:'Flint and steel, then run.'},

    /* ── BLOCKS ── */
    {slug:'crafting-table', name:'Crafting Table', alt:[], note:'Blocks', tier:'easy', clue:'Three by three.'},
    {slug:'furnace', name:'Furnace', alt:[], note:'Blocks', tier:'easy', clue:'Smelting.'},
    {slug:'anvil', name:'Anvil', alt:[], note:'Blocks', tier:'mid', clue:'Repairs, renames, falls on you.'},
    {slug:'enchanting-table', name:'Enchanting Table', alt:[], note:'Blocks', tier:'mid', clue:'The book floats above it.'},
    {slug:'brewing-stand', name:'Brewing Stand', alt:[], note:'Blocks', tier:'mid', clue:'Three bottles.'},
    {slug:'beacon', name:'Beacon', alt:[], note:'Blocks', tier:'mid', clue:'A pyramid under a beam.'},
    {slug:'conduit', name:'Conduit', alt:[], note:'Blocks', tier:'deep', clue:'Underwater, made of shells.'},
    {slug:'bed', name:'Bed', alt:[], note:'Blocks', tier:'easy', clue:'Skips the night. Explodes in the Nether.'},
    {slug:'chest', name:'Chest', alt:[], note:'Blocks', tier:'easy', clue:'Twenty-seven slots.'},
    {slug:'ender-chest', name:'Ender Chest', alt:[], note:'Blocks', tier:'mid', clue:'The same chest everywhere.'},
    {slug:'nether-portal', name:'Nether Portal', alt:[], note:'Blocks', tier:'easy', clue:'Obsidian frame, purple middle.'},
    {slug:'obsidian', name:'Obsidian', alt:[], note:'Blocks', tier:'easy', clue:'Water on lava.'},
    {slug:'bedrock', name:'Bedrock', alt:[], note:'Blocks', tier:'mid', clue:'The floor of the world.'},
    {slug:'grass-block', name:'Grass Block', alt:[], note:'Blocks', tier:'easy', clue:'The most famous cube in gaming.'},
    {slug:'cobblestone', name:'Cobblestone', alt:[], note:'Blocks', tier:'easy', clue:'What stone becomes.'},
    {slug:'torch', name:'Torch', alt:[], note:'Blocks', tier:'easy', clue:'Stops things spawning.'},
    {slug:'cake', name:'Cake', alt:[], note:'Blocks', tier:'mid', clue:'Seven slices.'},
    {slug:'jack-o-lantern', name:'Jack o’Lantern', alt:[], note:'Blocks', tier:'mid', clue:'Pumpkin and a torch.', page:'Jack o\'Lantern'},
    {slug:'sea-lantern', name:'Sea Lantern', alt:[], note:'Blocks', tier:'deep', clue:'From the monument.'},
    {slug:'glowstone', name:'Glowstone', alt:[], note:'Blocks', tier:'mid', clue:'Nether ceiling.'},
    {slug:'amethyst-cluster', name:'Amethyst Cluster', alt:[], note:'Blocks', tier:'deep', clue:'It chimes.'},
    {slug:'sculk', name:'Sculk', alt:[], note:'Blocks', tier:'mid', clue:'The deep dark.'},
    {slug:'bookshelf', name:'Bookshelf', alt:[], note:'Blocks', tier:'mid', clue:'Fifteen for level thirty.'},
    {slug:'jukebox', name:'Jukebox', alt:[], note:'Blocks', tier:'mid', clue:'Put a disc in.'},
    {slug:'note-block', name:'Note Block', alt:[], note:'Blocks', tier:'mid', clue:'Depends what is underneath.'},
    {slug:'piston', name:'Piston', alt:[], note:'Blocks', tier:'mid', clue:'Pushes. The sticky one pulls.'},
    {slug:'hopper', name:'Hopper', alt:[], note:'Blocks', tier:'deep', clue:'Moves items along.'},

    /* ── ITEMS ── */
    {slug:'minecart', name:'Minecart', alt:[], note:'Items', tier:'mid', clue:'On rails.'},
    {slug:'boat', name:'Boat', alt:[], note:'Items', tier:'easy', clue:'Also a good way to trap a mob.'},
    {slug:'shield', name:'Shield', alt:[], note:'Items', tier:'mid', clue:'Right click.'},
    {slug:'bow', name:'Bow', alt:[], note:'Items', tier:'easy', clue:'Hold to draw.'},
    {slug:'crossbow', name:'Crossbow', alt:[], note:'Items', tier:'mid', clue:'Loads, then holds.'},
    {slug:'trident', name:'Trident', alt:[], note:'Items', tier:'mid', clue:'From a drowned. Riptide.'},
    {slug:'flint-and-steel', name:'Flint and Steel', alt:[], note:'Items', tier:'easy', clue:'Lights the portal.'},
    {slug:'compass', name:'Compass', alt:[], note:'Items', tier:'mid', clue:'Points at spawn.'},
    {slug:'spyglass', name:'Spyglass', alt:[], note:'Items', tier:'deep', clue:'Zooms in.'},
    {slug:'nether-star', name:'Nether Star', alt:[], note:'Items', tier:'mid', clue:'Off the Wither.'},
    {slug:'dragon-egg', name:'Dragon Egg', alt:[], note:'Items', tier:'mid', clue:'You cannot mine it normally.'},
    {slug:'nether-wart', name:'Nether Wart', alt:[], note:'Items', tier:'mid', clue:'Every potion starts here.'},
    {slug:'chorus-fruit', name:'Chorus Fruit', alt:[], note:'Items', tier:'deep', clue:'Teleports you a bit.'},
    {slug:'shulker-box', name:'Shulker Box', alt:[], note:'Items', tier:'mid', clue:'A chest you can carry.'},
    {slug:'lodestone', name:'Lodestone', alt:[], note:'Items', tier:'deep', clue:'Locks a compass to it.'},

    /* ── BLOCKS ── */
    {slug:'respawn-anchor', name:'Respawn Anchor', alt:[], note:'Blocks', tier:'deep', clue:'Sleep in the Nether, sort of.'},
    {slug:'crying-obsidian', name:'Crying Obsidian', alt:[], note:'Blocks', tier:'deep', clue:'Purple drips.'},
    {slug:'ancient-debris', name:'Ancient Debris', alt:[], note:'Blocks', tier:'mid', clue:'Netherite starts here.'},
    {slug:'cherry-blossom', name:'Cherry Blossom', alt:[], note:'Blocks', tier:'mid', clue:'Pink petals.'}
  ]
});
