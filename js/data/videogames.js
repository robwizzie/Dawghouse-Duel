/* ══════════════════════════════════════════════════════════════
   CATEGORY: VIDEO GAME CHARACTERS

   Sourced per franchise, because that's where the good cut-out
   renders live. `keepAlpha` pulls the original PNG rather than the
   CDN's flattened copy, so SILHOUETTE mode works on this deck.
   Artwork: node tools/fetch-wiki-images.js videogames
   ══════════════════════════════════════════════════════════════ */
window.DHD_CATEGORIES = window.DHD_CATEGORIES || [];
window.DHD_CATEGORIES.push({
  id: 'videogames',
  name: 'Video Game Characters',
  blurb: 'Consoles, arcades and everything since.',
  keepAlpha: true,
  silhouette: true,
  items: [
    /* ── NINTENDO ── */
    {slug:'mario',        name:'Mario',        alt:[],                 note:'Super Mario',   tier:'easy', clue:'Red cap, blue dungarees, plumber by trade.',            wiki:'mario.fandom.com'},
    {slug:'luigi',        name:'Luigi',        alt:[],                 note:'Super Mario',   tier:'easy', clue:'Taller, greener, permanently second.',                  wiki:'mario.fandom.com'},
    {slug:'princess-peach',name:'Princess Peach',alt:['Peach'],        note:'Super Mario',   tier:'easy', clue:'Pink gown, and she is in another castle.',              wiki:'mario.fandom.com'},
    {slug:'bowser',       name:'Bowser',       alt:['King Koopa'],     note:'Super Mario',   tier:'easy', clue:'Spiked shell, horns, does the kidnapping.',             wiki:'mario.fandom.com'},
    {slug:'yoshi',        name:'Yoshi',        alt:[],                 note:'Super Mario',   tier:'easy', clue:'Green dinosaur with a very long tongue and a saddle.',  wiki:'mario.fandom.com'},
    {slug:'toad-mario',   name:'Toad',         alt:[],                 note:'Super Mario',   tier:'easy', clue:'Mushroom cap, blue waistcoat, high voice.',             wiki:'mario.fandom.com'},
    {slug:'wario',        name:'Wario',        alt:[],                 note:'Super Mario',   tier:'mid',  clue:'Yellow and purple, zigzag moustache, motivated by garlic and money.', wiki:'mario.fandom.com'},
    {slug:'waluigi',      name:'Waluigi',      alt:[],                 note:'Super Mario',   tier:'mid',  clue:'Tall, purple, and has never had his own game.',         wiki:'mario.fandom.com'},
    {slug:'donkey-kong',  name:'Donkey Kong',  alt:['DK'],             note:'Donkey Kong',   tier:'easy', clue:'Red tie with his own initials on it.',                  wiki:'mario.fandom.com'},
    {slug:'diddy-kong',   name:'Diddy Kong',   alt:[],                 note:'Donkey Kong',   tier:'mid',  clue:'Red cap and shirt, and a peanut popgun.',               wiki:'mario.fandom.com'},
    {slug:'bowser-jr',    name:'Bowser Jr.',   alt:[],                 note:'Super Mario',   tier:'mid',  clue:'Small Bowser with a bib and a paintbrush.',             wiki:'mario.fandom.com'},
    {slug:'rosalina',     name:'Rosalina',     alt:[],                 note:'Super Mario',   tier:'mid',  clue:'Pale blue gown, wand, looks after the Lumas.',          wiki:'mario.fandom.com'},
    {slug:'princess-daisy',name:'Princess Daisy',alt:['Daisy'],        note:'Super Mario',   tier:'mid',  clue:'Orange and yellow. From Sarasaland, and much louder.',  wiki:'mario.fandom.com'},
    {slug:'shy-guy',      name:'Shy Guy',      alt:[],                 note:'Super Mario',   tier:'mid',  clue:'White mask, red robe, never speaks.',                   wiki:'mario.fandom.com'},
    {slug:'goomba',       name:'Goomba',       alt:[],                 note:'Super Mario',   tier:'mid',  clue:'Brown mushroom with angry eyebrows. The first thing you jump on.', wiki:'mario.fandom.com'},
    {slug:'boo-mario',    name:'Boo',          alt:[],                 note:'Super Mario',   tier:'mid',  clue:'White ghost that covers its face when you look at it.', wiki:'mario.fandom.com'},
    {slug:'kirby',        name:'Kirby',        alt:[],                 note:'Kirby',         tier:'easy', clue:'Pink sphere that eats things and steals their powers.', wiki:'kirby.fandom.com'},
    {slug:'king-dedede',  name:'King Dedede',  alt:['Dedede'],         note:'Kirby',         tier:'mid',  clue:'Blue penguin king with an enormous hammer.',            wiki:'kirby.fandom.com'},
    {slug:'meta-knight',  name:'Meta Knight',  alt:[],                 note:'Kirby',         tier:'mid',  clue:'Masked, caped, sword. Same shape as Kirby underneath.', wiki:'kirby.fandom.com'},
    {slug:'link',         name:'Link',         alt:[],                 note:'Zelda',         tier:'easy', clue:'Green tunic, pointed hat, and it is not Zelda.',        wiki:'zelda.fandom.com'},
    {slug:'zelda',        name:'Princess Zelda',alt:['Zelda'],         note:'Zelda',         tier:'easy', clue:'The one the series is actually named after.',           wiki:'zelda.fandom.com'},
    {slug:'ganondorf',    name:'Ganondorf',    alt:['Ganon'],          note:'Zelda',         tier:'mid',  clue:'Gerudo king, red hair, permanently returning.',         wiki:'zelda.fandom.com'},
    {slug:'samus-aran',   name:'Samus Aran',   alt:['Samus'],          note:'Metroid',       tier:'mid',  clue:'Orange power suit with an arm cannon.',                 wiki:'metroid.fandom.com', flat:true},
    {slug:'fox-mccloud',  name:'Fox McCloud',  alt:['Fox'],            note:'Star Fox',      tier:'mid',  clue:'Do a barrel roll.',                                     wiki:'starfox.fandom.com'},
    {slug:'captain-falcon',name:'Captain Falcon',alt:[],               note:'F-Zero',        tier:'mid',  clue:'Blue helmet, red suit. FALCON PUNCH.',                  wiki:'mario.fandom.com'},
    {slug:'isabelle',     name:'Isabelle',     alt:[],                 note:'Animal Crossing',tier:'mid', clue:'Yellow dog secretary with a bell in her hair.',         wiki:'animalcrossing.fandom.com'},
    {slug:'tom-nook',     name:'Tom Nook',     alt:[],                 note:'Animal Crossing',tier:'mid', clue:'Raccoon dog who owns your mortgage.',                   wiki:'animalcrossing.fandom.com'},
    {slug:'inkling',      name:'Inkling',      alt:[],                 note:'Splatoon',      tier:'mid',  clue:'Squid kid that turns into ink and swims through it.',   wiki:'splatoon.fandom.com'},

    /* ── SEGA ── */
    {slug:'sonic',        name:'Sonic the Hedgehog',alt:['Sonic'],     note:'Sonic',         tier:'easy', clue:'Blue, spiky, red trainers, gotta go fast.',             wiki:'sonic.fandom.com'},
    {slug:'tails',        name:'Tails',        alt:['Miles Prower'],   note:'Sonic',         tier:'easy', clue:'Yellow fox with two tails he uses as a rotor.',         wiki:'sonic.fandom.com'},
    {slug:'knuckles',     name:'Knuckles the Echidna',alt:['Knuckles'],note:'Sonic',         tier:'easy', clue:'Red, dreadlocks, spikes on the fists.',                 wiki:'sonic.fandom.com'},
    {slug:'shadow-hedgehog',name:'Shadow the Hedgehog',alt:['Shadow'], note:'Sonic',         tier:'mid',  clue:'Black and red, permanently brooding.',                  wiki:'sonic.fandom.com'},
    {slug:'amy-rose',     name:'Amy Rose',     alt:['Amy'],            note:'Sonic',         tier:'mid',  clue:'Pink hedgehog with an enormous mallet.',                wiki:'sonic.fandom.com'},
    {slug:'doctor-eggman',name:'Doctor Eggman',alt:['Eggman','Dr. Robotnik'],note:'Sonic',   tier:'mid',  clue:'Egg-shaped, enormous moustache, builds robots.',        wiki:'sonic.fandom.com'},

    /* ── FIGHTING ── */
    {slug:'ryu',          name:'Ryu',          alt:[],                 note:'Street Fighter',tier:'easy', clue:'White gi, red headband, hadouken.',                     wiki:'streetfighter.fandom.com'},
    {slug:'ken-masters',  name:'Ken Masters',  alt:['Ken'],            note:'Street Fighter',tier:'mid',  clue:'Blond, red gi. The other one.',                         wiki:'streetfighter.fandom.com'},
    {slug:'chun-li',      name:'Chun-Li',      alt:[],                 note:'Street Fighter',tier:'easy', clue:'Blue qipao, ox horns, lightning kicks.',                wiki:'streetfighter.fandom.com'},
    {slug:'m-bison',      name:'M. Bison',     alt:['Bison'],          note:'Street Fighter',tier:'mid',  clue:'Red military coat and a peaked cap. Psycho Power.',     wiki:'streetfighter.fandom.com'},
    {slug:'blanka',       name:'Blanka',       alt:[],                 note:'Street Fighter',tier:'mid',  clue:'Green, orange hair, electrifies himself.',              wiki:'streetfighter.fandom.com'},
    {slug:'guile',        name:'Guile',        alt:[],                 note:'Street Fighter',tier:'mid',  clue:'Flat-top hair and a sonic boom.',                       wiki:'streetfighter.fandom.com'},
    {slug:'akuma',        name:'Akuma',        alt:['Gouki'],          note:'Street Fighter',tier:'mid',  clue:'Red hair, prayer beads, the kanji on his back.',        wiki:'streetfighter.fandom.com'},
    {slug:'scorpion',     name:'Scorpion',     alt:[],                 note:'Mortal Kombat', tier:'easy', clue:'Yellow ninja. GET OVER HERE.',                          wiki:'mortalkombat.fandom.com', page:'Hanzo Hasashi'},
    {slug:'sub-zero',     name:'Sub-Zero',     alt:[],                 note:'Mortal Kombat', tier:'easy', clue:'Blue ninja who freezes you first.',                     wiki:'mortalkombat.fandom.com', page:'Kuai Liang', flat:true},
    {slug:'raiden-mk',    name:'Raiden',       alt:[],                 note:'Mortal Kombat', tier:'mid',  clue:'Straw hat, white eyes, thunder god.',                   wiki:'mortalkombat.fandom.com'},
    {slug:'liu-kang',     name:'Liu Kang',     alt:[],                 note:'Mortal Kombat', tier:'mid',  clue:'Shaolin monk with the bicycle kick.',                   wiki:'mortalkombat.fandom.com'},
    {slug:'kitana',       name:'Kitana',       alt:[],                 note:'Mortal Kombat', tier:'mid',  clue:'Blue mask and a pair of steel fans.',                   wiki:'mortalkombat.fandom.com', flat:true},
    {slug:'heihachi',     name:'Heihachi Mishima',alt:['Heihachi'],    note:'Tekken',        tier:'deep', clue:'Two spikes of grey hair and a habit of throwing family off cliffs.', wiki:'tekken.fandom.com', flat:true},
    {slug:'jin-kazama',   name:'Jin Kazama',   alt:['Jin'],            note:'Tekken',        tier:'deep', clue:'Black flame trousers and a devil gene.',                wiki:'tekken.fandom.com', flat:true},

    /* ── SHOOTERS & ACTION ── */
    {slug:'master-chief', name:'Master Chief', alt:['John-117'],       note:'Halo',          tier:'easy', clue:'Green Mjolnir armour, gold visor, never takes the helmet off.', wiki:'halo.fandom.com'},
    {slug:'cortana',      name:'Cortana',      alt:[],                 note:'Halo',          tier:'mid',  clue:'Blue hologram in his ear.',                             wiki:'halo.fandom.com'},
    {slug:'kratos',       name:'Kratos',       alt:[],                 note:'God of War',    tier:'easy', clue:'Ash-white skin, red tattoo, extremely angry.',          wiki:'godofwar.fandom.com'},
    {slug:'lara-croft',   name:'Lara Croft',   alt:[],                 note:'Tomb Raider',   tier:'easy', clue:'Twin pistols, plait, archaeologist by claim.',          wiki:'tombraider.fandom.com', flat:true},
    {slug:'solid-snake',  name:'Solid Snake',  alt:['Snake'],          note:'Metal Gear',    tier:'mid',  clue:'Bandana, sneaking suit, hides in a cardboard box.',     wiki:'metalgear.fandom.com', flat:true},
    {slug:'doom-slayer',  name:'Doom Slayer',  alt:['Doomguy'],        note:'DOOM',          tier:'mid',  clue:'Green armour and no interest in conversation.',         wiki:'doom.fandom.com'},
    {slug:'gordon-freeman',name:'Gordon Freeman',alt:[],               note:'Half-Life',     tier:'mid',  clue:'Glasses, goatee, crowbar, never says a word.',          wiki:'half-life.fandom.com'},
    {slug:'leon-kennedy', name:'Leon S. Kennedy',alt:['Leon Kennedy'], note:'Resident Evil', tier:'mid',  clue:'Rookie cop on his first day in Raccoon City.',          wiki:'residentevil.fandom.com'},
    {slug:'jill-valentine',name:'Jill Valentine',alt:['Jill'],         note:'Resident Evil', tier:'mid',  clue:'S.T.A.R.S. member. The master of unlocking.',           wiki:'residentevil.fandom.com'},
    {slug:'nemesis-re',   name:'Nemesis',      alt:[],                 note:'Resident Evil', tier:'deep', clue:'Trench coat, stitched face, says one word.',            wiki:'residentevil.fandom.com'},
    {slug:'pyramid-head', name:'Pyramid Head', alt:[],                 note:'Silent Hill',   tier:'deep', clue:'Rusted metal pyramid for a head, drags a great blade.', wiki:'silenthill.fandom.com'},
    {slug:'geralt',       name:'Geralt of Rivia',alt:['Geralt'],       note:'The Witcher',   tier:'mid',  clue:'White hair, cat eyes, two swords.',                     wiki:'witcher.fandom.com', flat:true},
    {slug:'ezio',         name:'Ezio Auditore',alt:['Ezio'],           note:"Assassin's Creed",tier:'mid',clue:'Florentine noble in a white hood with a hidden blade.', wiki:'assassinscreed.fandom.com'},
    {slug:'big-daddy',    name:'Big Daddy',    alt:[],                 note:'BioShock',      tier:'deep', clue:'Diving suit with a drill, protecting a Little Sister.', wiki:'bioshock.fandom.com', flat:true},
    {slug:'vault-boy',    name:'Vault Boy',    alt:[],                 note:'Fallout',       tier:'mid',  clue:'Blond cartoon mascot giving a cheerful thumbs up.',     wiki:'fallout.fandom.com'},
    {slug:'tracer',       name:'Tracer',       alt:[],                 note:'Overwatch',     tier:'mid',  clue:'Orange goggles, spiky hair, blinks through time.',      wiki:'overwatch.fandom.com'},
    {slug:'reinhardt',    name:'Reinhardt',    alt:[],                 note:'Overwatch',     tier:'deep', clue:'Enormous German crusader with a rocket hammer.',        wiki:'overwatch.fandom.com'},

    /* ── PLATFORMERS & MASCOTS ── */
    {slug:'crash-bandicoot',name:'Crash Bandicoot',alt:['Crash'],      note:'Crash',         tier:'easy', clue:'Orange marsupial in blue shorts who spins.',            wiki:'crashbandicoot.fandom.com'},
    {slug:'spyro',        name:'Spyro',        alt:[],                 note:'Spyro',         tier:'mid',  clue:'Small purple dragon with orange horns.',                wiki:'spyro.fandom.com'},
    {slug:'rayman',       name:'Rayman',       alt:[],                 note:'Rayman',        tier:'mid',  clue:'No arms or legs. The hands just float there.',          wiki:'rayman.fandom.com'},
    {slug:'mega-man',     name:'Mega Man',     alt:['Megaman','Rockman'],note:'Mega Man',    tier:'mid',  clue:'Blue helmet and an arm cannon. Takes the boss weapon.', wiki:'megaman.fandom.com'},
    {slug:'pac-man',      name:'Pac-Man',      alt:['Pacman'],         note:'Pac-Man',       tier:'easy', clue:'A yellow circle with a wedge missing.',                 wiki:'pacman.fandom.com'},
    {slug:'banjo',        name:'Banjo',        alt:['Banjo-Kazooie'],  note:'Banjo-Kazooie', tier:'deep', clue:'Honey bear with a blue rucksack and a bird in it.',     wiki:'banjokazooie.fandom.com'},
    {slug:'sly-cooper',   name:'Sly Cooper',   alt:['Sly'],            note:'Sly Cooper',    tier:'deep', clue:'Raccoon thief in a blue cap with a cane.',              wiki:'slycooper.fandom.com'},
    {slug:'ratchet',      name:'Ratchet',      alt:[],                 note:'Ratchet & Clank',tier:'deep',clue:'Yellow Lombax mechanic with a wrench.',                 wiki:'ratchetandclank.fandom.com'},
    {slug:'clank',        name:'Clank',        alt:[],                 note:'Ratchet & Clank',tier:'deep',clue:'Small robot with green eyes who rides on his back.',    wiki:'ratchetandclank.fandom.com'},
    {slug:'cuphead',      name:'Cuphead',      alt:[],                 note:'Cuphead',       tier:'mid',  clue:'A 1930s cartoon with a teacup for a head.',             wiki:'cuphead.fandom.com', page:'Cuphead (character)'},
    {slug:'sackboy',      name:'Sackboy',      alt:[],                 note:'LittleBigPlanet',tier:'deep',clue:'Knitted, zipped up the front, permanently surprised.',  wiki:'littlebigplanet.fandom.com'},

    /* ── RPG & MODERN ── */
    {slug:'cloud-strife', name:'Cloud Strife', alt:['Cloud'],          note:'Final Fantasy', tier:'mid',  clue:'Spiky blond hair and a sword bigger than he is.',       wiki:'finalfantasy.fandom.com'},
    {slug:'sephiroth',    name:'Sephiroth',    alt:[],                 note:'Final Fantasy', tier:'mid',  clue:'Silver hair to the floor and one black wing.',          wiki:'finalfantasy.fandom.com'},
    {slug:'tifa',         name:'Tifa Lockhart',alt:['Tifa'],           note:'Final Fantasy', tier:'deep', clue:'Black hair, white top, fights with her fists.',         wiki:'finalfantasy.fandom.com'},
    {slug:'chocobo',      name:'Chocobo',      alt:[],                 note:'Final Fantasy', tier:'deep', clue:'Big yellow bird you ride instead of a horse.',          wiki:'finalfantasy.fandom.com'},
    {slug:'sora',         name:'Sora',         alt:[],                 note:'Kingdom Hearts',tier:'mid',  clue:'Spiky brown hair, enormous shoes, key for a sword.',    wiki:'kingdomhearts.fandom.com'},
    {slug:'steve-minecraft',name:'Steve',      alt:[],                 note:'Minecraft',     tier:'easy', clue:'Blue shirt, blocky, punches trees.',                    wiki:'minecraft.fandom.com'},
    {slug:'creeper',      name:'Creeper',      alt:[],                 note:'Minecraft',     tier:'easy', clue:'Green, four legs, that face, and then a hiss.',         wiki:'minecraft.fandom.com'},
    {slug:'enderman',     name:'Enderman',     alt:[],                 note:'Minecraft',     tier:'mid',  clue:'Tall, black, purple eyes. Do not look at it.',          wiki:'minecraft.fandom.com'},
    {slug:'freddy-fazbear',name:'Freddy Fazbear',alt:['Freddy'],       note:"Five Nights at Freddy's",tier:'mid',clue:'Animatronic bear in a top hat and bow tie.',      wiki:'freddy-fazbears-pizza.fandom.com'},
    {slug:'sans',         name:'Sans',         alt:[],                 note:'Undertale',     tier:'deep', clue:'Short skeleton in a blue hoodie. Bad time.',            wiki:'undertale.fandom.com', flat:true},
    {slug:'2b',           name:'2B',           alt:['YoRHa No.2 Type B'],note:'NieR:Automata',tier:'deep',clue:'Blindfolded android in black with a sword on her back.',wiki:'nier.fandom.com'},
    {slug:'dante-dmc',    name:'Dante',        alt:[],                 note:'Devil May Cry', tier:'deep', clue:'White hair, red coat, half demon, very smug.',          wiki:'devilmaycry.fandom.com'},
    {slug:'alucard',      name:'Alucard',      alt:[],                 note:'Castlevania',   tier:'deep', clue:'Dhampir son of Dracula, blond, in a long coat.',        wiki:'castlevania.fandom.com', flat:true}
  ]
});
