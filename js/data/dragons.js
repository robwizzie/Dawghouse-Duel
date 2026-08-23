/* ══════════════════════════════════════════════════════════════
   CATEGORY: DRAGONS

   Every dragon anybody can name, from Toothless to Trogdor.

   A hard deck, and deliberately so. The famous few are instant —
   Toothless, Falkor, Mushu, Shrek's dragon, Trogdor — but a great
   many dragons are, honestly, a big scaly reptile in a cave, and
   telling Smaug from Alduin from Deathwing from Rathalos is the
   whole challenge. The easy tier carries the silhouettes anyone
   knows; the deep tier is for people who will argue about it.

   Some of these also live in their own decks — Drogon in Game of
   Thrones, Charizard in Pokemon, Spyro in Video Game Characters.
   That is fine: you only ever play one deck at a time.

   Artwork: node tools/fetch-wiki-images.js dragons
   ══════════════════════════════════════════════════════════════ */
window.DHD_CATEGORIES = window.DHD_CATEGORIES || [];
window.DHD_CATEGORIES.push({
  id: 'dragons',
  name: 'Dragons',
  blurb: 'Every dragon anybody can name. Harder than it sounds.',
  items: [

    /* ── HOW TO TRAIN YOUR DRAGON ── */
    {slug:'toothless', name:'Toothless', alt:['Night Fury'], note:'How to Train Your Dragon', tier:'easy', clue:'Black, enormous eyes, retractable teeth.', wiki:'dreamworks.fandom.com', page:'Toothless'},
    {slug:'light-fury', name:'Light Fury', alt:[], note:'How to Train Your Dragon', tier:'mid', clue:'The white one he leaves with.', wiki:'dreamworks.fandom.com', page:'Light Fury'},
    {slug:'stormfly', name:'Stormfly', alt:['Deadly Nadder'], note:'How to Train Your Dragon', tier:'mid', clue:'Blue Nadder. Astrid’s.', wiki:'howtotrainyourdragon.fandom.com', page:'Stormfly (Franchise)'},
    {slug:'hookfang', name:'Hookfang', alt:['Monstrous Nightmare'], note:'How to Train Your Dragon', tier:'deep', clue:'Red Nightmare. Sets itself on fire.', wiki:'howtotrainyourdragon.fandom.com', page:'Hookfang (Franchise)'},
    {slug:'meatlug', name:'Meatlug', alt:['Gronckle'], note:'How to Train Your Dragon', tier:'deep', clue:'The round brown one. Fishlegs’.', wiki:'howtotrainyourdragon.fandom.com', page:'Meatlug (Franchise)'},
    {slug:'barf-and-belch', name:'Barf and Belch', alt:['Hideous Zippleback'], note:'How to Train Your Dragon', tier:'deep', clue:'Two heads, one gas, one spark.', wiki:'howtotrainyourdragon.fandom.com', page:'Barf and Belch (Franchise)'},
    {slug:'red-death', name:'Red Death', alt:[], note:'How to Train Your Dragon', tier:'deep', clue:'The mountain-sized one from the first film.', wiki:'howtotrainyourdragon.fandom.com', page:'Red Death (Franchise)'},
    {slug:'cloudjumper', name:'Cloudjumper', alt:[], note:'How to Train Your Dragon', tier:'deep', clue:'Four wings. Valka’s.', wiki:'howtotrainyourdragon.fandom.com'},
    {slug:'bewilderbeast', name:'Bewilderbeast', alt:[], note:'How to Train Your Dragon', tier:'deep', clue:'The alpha with the tusks.', wiki:'howtotrainyourdragon.fandom.com'},

    /* ── FILM ── */
    {slug:'falkor', name:'Falkor', alt:['Luck Dragon'], note:'Film', tier:'easy', clue:'The luck dragon with a dog’s face.', wiki:'neverendingstory.fandom.com'},
    {slug:'shrek-dragon', name:'Dragon', alt:['Shrek Dragon'], note:'Film', tier:'easy', clue:'Pink, eyelashes, in love with a donkey.', wiki:'shrek.fandom.com'},
    {slug:'elliott', name:'Elliott', alt:[], note:'Film', tier:'mid', clue:'Green, chubby, mostly invisible.', wiki:'disney.fandom.com'},
    {slug:'draco', name:'Draco', alt:[], note:'Film', tier:'mid', clue:'Dragonheart. Sean Connery’s voice.', wiki:'dragonheart.fandom.com'},
    {slug:'vermithrax', name:'Vermithrax Pejorative', alt:['Vermithrax'], note:'Film', tier:'deep', clue:'Dragonslayer. Still the best dragon effects work.', wiki:'villains.fandom.com'},
    {slug:'maleficent-dragon', name:'Maleficent', alt:[], note:'Film', tier:'easy', clue:'The purple and black one at the end of Sleeping Beauty.', wiki:'disney.fandom.com'},
    {slug:'mushu', name:'Mushu', alt:[], note:'Film', tier:'easy', clue:'Small, red, extremely loud.', wiki:'disney.fandom.com'},
    {slug:'sisu', name:'Sisu', alt:[], note:'Film', tier:'mid', clue:'Raya’s. Blue and purple, more fur than scale.', wiki:'disney.fandom.com'},
    {slug:'haku', name:'Haku', alt:[], note:'Film', tier:'mid', clue:'White river dragon from Spirited Away.', wiki:'ghibli.fandom.com'},

    /* ── BOOKS ── */
    {slug:'smaug', name:'Smaug', alt:[], note:'Books', tier:'easy', clue:'The Lonely Mountain. One bare patch.', wiki:'hobbit.fandom.com'},
    {slug:'ancalagon', name:'Ancalagon', alt:['Ancalagon the Black'], note:'Books', tier:'deep', clue:'The biggest thing Tolkien ever wrote.', wiki:'lotr.fandom.com'},
    {slug:'glaurung', name:'Glaurung', alt:[], note:'Books', tier:'deep', clue:'The first of them. No wings.', wiki:'lotr.fandom.com'},
    {slug:'saphira', name:'Saphira', alt:[], note:'Books', tier:'mid', clue:'Eragon’s. Sapphire blue.', wiki:'inheritance.fandom.com'},
    {slug:'thorn', name:'Thorn', alt:[], note:'Books', tier:'deep', clue:'Murtagh’s. Red.', wiki:'inheritance.fandom.com'},
    {slug:'glaedr', name:'Glaedr', alt:[], note:'Books', tier:'deep', clue:'Gold, and missing a leg.', wiki:'inheritance.fandom.com'},

    /* ── HARRY POTTER ── */
    {slug:'hungarian-horntail', name:'Hungarian Horntail', alt:[], note:'Harry Potter', tier:'mid', clue:'The Triwizard one. Spiked tail.', wiki:'harrypotter.fandom.com'},
    {slug:'norwegian-ridgeback', name:'Norbert', alt:['Norwegian Ridgeback'], note:'Harry Potter', tier:'mid', clue:'Hagrid raised it in a hut made of wood.', wiki:'harrypotter.fandom.com', page:'Norwegian Ridgeback'},
    {slug:'ukrainian-ironbelly', name:'Ukrainian Ironbelly', alt:[], note:'Harry Potter', tier:'deep', clue:'The blind one under Gringotts.', wiki:'harrypotter.fandom.com'},
    {slug:'chinese-fireball', name:'Chinese Fireball', alt:[], note:'Harry Potter', tier:'deep', clue:'Krum drew this one.', wiki:'harrypotter.fandom.com'},
    {slug:'common-welsh-green', name:'Common Welsh Green', alt:[], note:'Harry Potter', tier:'deep', clue:'Fleur’s.', wiki:'harrypotter.fandom.com'},
    {slug:'swedish-short-snout', name:'Swedish Short-Snout', alt:[], note:'Harry Potter', tier:'deep', clue:'Cedric’s.', wiki:'harrypotter.fandom.com'},

    /* ── GAME OF THRONES ── */
    {slug:'drogon', name:'Drogon', alt:[], note:'Game of Thrones', tier:'easy', clue:'The black one Dany rides.', wiki:'gameofthrones.fandom.com'},
    {slug:'rhaegal', name:'Rhaegal', alt:[], note:'Game of Thrones', tier:'mid', clue:'The green one.', wiki:'gameofthrones.fandom.com'},
    {slug:'viserion', name:'Viserion', alt:[], note:'Game of Thrones', tier:'mid', clue:'The cream one. Then the blue one.', wiki:'gameofthrones.fandom.com'},
    {slug:'balerion', name:'Balerion', alt:['Balerion the Black Dread'], note:'Game of Thrones', tier:'deep', clue:'The Black Dread. Melted the throne.', wiki:'gameofthrones.fandom.com'},

    /* ── TELEVISION ── */
    {slug:'kilgharrah', name:'Kilgharrah', alt:['The Great Dragon'], note:'Television', tier:'deep', clue:'The Great Dragon under Camelot.', wiki:'merlin.fandom.com'},
    {slug:'aithusa', name:'Aithusa', alt:[], note:'Television', tier:'deep', clue:'The white one Merlin named.', wiki:'merlin.fandom.com'},

    /* ── GAMES ── */
    {slug:'charizard', name:'Charizard', alt:[], note:'Games', tier:'easy', clue:'Orange, flame tail. Not actually Dragon type.', wiki:'pokemon.fandom.com'},
    {slug:'dragonite', name:'Dragonite', alt:[], note:'Games', tier:'easy', clue:'Orange, round, oddly friendly.', wiki:'pokemon.fandom.com'},
    {slug:'rayquaza', name:'Rayquaza', alt:[], note:'Games', tier:'mid', clue:'Green serpent from the ozone layer.', wiki:'pokemon.fandom.com'},
    {slug:'salamence', name:'Salamence', alt:[], note:'Games', tier:'deep', clue:'Blue, red wings, extremely angry.', wiki:'pokemon.fandom.com'},
    {slug:'garchomp', name:'Garchomp', alt:[], note:'Games', tier:'deep', clue:'Land shark with jet wings.', wiki:'pokemon.fandom.com'},
    {slug:'spyro', name:'Spyro', alt:[], note:'Games', tier:'easy', clue:'Small purple dragon, orange horns.', wiki:'spyro.fandom.com', page:'Spyro the Dragon (character)'},
    {slug:'cynder', name:'Cynder', alt:[], note:'Games', tier:'deep', clue:'The black one from the later games.', wiki:'spyro.fandom.com'},
    {slug:'ender-dragon', name:'Ender Dragon', alt:[], note:'Games', tier:'easy', clue:'The one at the end. Black, purple particles.', wiki:'minecraft.fandom.com', page:'Ender dragon'},
    {slug:'alduin', name:'Alduin', alt:[], note:'Games', tier:'mid', clue:'Skyrim. The World-Eater.', wiki:'elderscrolls.fandom.com'},
    {slug:'paarthurnax', name:'Paarthurnax', alt:[], note:'Games', tier:'deep', clue:'The old grey one on the mountain.', wiki:'elderscrolls.fandom.com'},
    {slug:'odahviing', name:'Odahviing', alt:[], note:'Games', tier:'deep', clue:'The red one you trap in a palace.', wiki:'elderscrolls.fandom.com'},
    {slug:'deathwing', name:'Deathwing', alt:[], note:'Games', tier:'mid', clue:'Warcraft. Metal plates bolted to his jaw.', wiki:'wowpedia.fandom.com'},
    {slug:'alexstrasza', name:'Alexstrasza', alt:[], note:'Games', tier:'deep', clue:'The Life-Binder. Red.', wiki:'wowpedia.fandom.com'},
    {slug:'onyxia', name:'Onyxia', alt:[], note:'Games', tier:'deep', clue:'Whelps. Many whelps.', wiki:'wowpedia.fandom.com'},
    {slug:'nefarian', name:'Nefarian', alt:[], note:'Games', tier:'deep', clue:'Her brother. Blackwing Lair.', wiki:'wowpedia.fandom.com'},
    {slug:'rathalos', name:'Rathalos', alt:[], note:'Games', tier:'mid', clue:'Monster Hunter’s poster boy. Red.', wiki:'monsterhunter.fandom.com'},
    {slug:'rathian', name:'Rathian', alt:[], note:'Games', tier:'deep', clue:'The green one. His mate.', wiki:'monsterhunter.fandom.com'},
    {slug:'fatalis', name:'Fatalis', alt:[], note:'Games', tier:'deep', clue:'The black legend. Ruins kingdoms.', wiki:'monsterhunter.fandom.com'},
    {slug:'ridley', name:'Ridley', alt:[], note:'Games', tier:'mid', clue:'Metroid. Space pirate, purple, very thin.', wiki:'metroid.fandom.com'},
    {slug:'bahamut-ff', name:'Bahamut', alt:[], note:'Games', tier:'mid', clue:'Final Fantasy. Megaflare.', wiki:'finalfantasy.fandom.com', page:'Bahamut (Final Fantasy VII)'},

    /* ── ANIME ── */
    {slug:'blue-eyes', name:'Blue-Eyes White Dragon', alt:['Blue Eyes'], note:'Anime', tier:'easy', clue:'Kaiba has three of them.', wiki:'yugioh.fandom.com', page:'Blue-Eyes White Dragon (character)'},
    {slug:'slifer', name:'Slifer the Sky Dragon', alt:['Slifer'], note:'Anime', tier:'mid', clue:'Red, two mouths, an Egyptian God card.', wiki:'yugioh.fandom.com'},
    {slug:'shenron', name:'Shenron', alt:[], note:'Anime', tier:'easy', clue:'Green, serpentine, grants one wish.', wiki:'dragonball.fandom.com'},
    {slug:'porunga', name:'Porunga', alt:[], note:'Anime', tier:'deep', clue:'The Namekian one. Grants three.', wiki:'dragonball.fandom.com'},
    {slug:'igneel', name:'Igneel', alt:[], note:'Anime', tier:'deep', clue:'Natsu’s father. Fairy Tail.', wiki:'fairytail.fandom.com'},
    {slug:'acnologia', name:'Acnologia', alt:[], note:'Anime', tier:'deep', clue:'The black dragon of the apocalypse.', wiki:'fairytail.fandom.com'},

    /* ── KAIJU ── */
    {slug:'king-ghidorah', name:'King Ghidorah', alt:['Ghidorah'], note:'Kaiju', tier:'easy', clue:'Three golden heads, no arms.', wiki:'godzilla.fandom.com', page:'King Ghidorah (MonsterVerse)'},

    /* ── INTERNET ── */
    {slug:'trogdor', name:'Trogdor', alt:['Trogdor the Burninator'], note:'Internet', tier:'mid', clue:'Consummate V’s. And a beefy arm.', wiki:'villains.fandom.com'},

    /* ── COMICS ── */
    {slug:'fin-fang-foom', name:'Fin Fang Foom', alt:[], note:'Comics', tier:'deep', clue:'Marvel. Wears purple shorts.', wiki:'marvel.fandom.com'},
    {slug:'lockheed', name:'Lockheed', alt:[], note:'Comics', tier:'deep', clue:'Kitty Pryde’s tiny purple one.', wiki:'marvel.fandom.com'},

    /* ── CARTOONS ── */
    {slug:'spike-mlp', name:'Spike', alt:[], note:'Cartoons', tier:'mid', clue:'Purple and green. Twilight’s assistant.', wiki:'mlp.fandom.com'}
  ]
});
