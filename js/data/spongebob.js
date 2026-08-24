/* ══════════════════════════════════════════════════════════════
   CATEGORY: SPONGEBOB
   Bikini Bottom's whole population. From the SpongeBob wiki.
   Artwork: node tools/fetch-wiki-images.js spongebob
   ══════════════════════════════════════════════════════════════ */
window.DHD_CATEGORIES = window.DHD_CATEGORIES || [];
window.DHD_CATEGORIES.push({
  id: 'spongebob',
  name: 'SpongeBob',
  blurb: 'Everyone in Bikini Bottom, not just the obvious five.',
  wiki: 'spongebob.fandom.com',
  items: [
    /* ── EASY ── */
    {slug:'spongebob-squarepants',name:'SpongeBob SquarePants',alt:['SpongeBob'],note:'',tier:'easy',clue:'Yellow, absorbent, porous, and works the fry cook station.', page:'SpongeBob SquarePants (character)'},
    {slug:'patrick-star',   name:'Patrick Star',   alt:['Patrick'],        note:'', tier:'easy', clue:'Pink starfish who lives under a rock. Literally.'},
    {slug:'squidward-tentacles',name:'Squidward Tentacles',alt:['Squidward'],note:'',tier:'easy',clue:'Cyan, big nose, clarinet, hates every second of it.'},
    {slug:'mr-krabs',       name:'Mr. Krabs',      alt:['Eugene Krabs','Eugene H. Krabs'],note:'',tier:'easy',clue:'Red crab who loves money more than his own daughter.'},
    {slug:'sandy-cheeks',   name:'Sandy Cheeks',   alt:['Sandy'],          note:'', tier:'easy', clue:'Squirrel in a diving suit. From Texas, and will tell you.'},
    {slug:'plankton',       name:'Plankton',       alt:['Sheldon Plankton','Sheldon J. Plankton'],note:'',tier:'easy',clue:'One eye, green, still after the formula.'},
    {slug:'gary',           name:'Gary the Snail', alt:['Gary'],           note:'', tier:'easy', clue:'The pet snail. Meow.'},
    {slug:'pearl-krabs',    name:'Pearl Krabs',    alt:['Pearl'],          note:'', tier:'mid',  clue:'A whale, and somehow the daughter of a crab.'},
    {slug:'mrs-puff',       name:'Mrs. Puff',      alt:['Mrs Puff'],       note:'', tier:'mid',  clue:'Boating school teacher who inflates under stress.'},
    {slug:'karen',          name:'Karen',          alt:['Karen Plankton'], note:'', tier:'mid',  clue:'Computer wife, and the smarter half of that marriage.'},

    /* ── MID ── */
    {slug:'squilliam-fancyson',name:'Squilliam Fancyson',alt:['Squilliam'],note:'', tier:'mid',  clue:'Squidward\'s old classmate, with a unibrow and a fortune.'},
    {slug:'larry-the-lobster',name:'Larry the Lobster',alt:['Larry'],      note:'', tier:'mid',  clue:'The lifeguard, and permanently mid-workout.'},
    {slug:'mermaid-man',    name:'Mermaid Man',    alt:[],                 note:'', tier:'mid',  clue:'Elderly superhero in orange. EEEVIL!'},
    {slug:'barnacle-boy',   name:'Barnacle Boy',   alt:[],                 note:'', tier:'mid',  clue:'The sidekick who is well past being a boy.'},
    {slug:'bubble-bass',    name:'Bubble Bass',    alt:[],                 note:'', tier:'mid',  clue:'Ordered it without pickles. There were pickles.'},
    {slug:'flying-dutchman',name:'The Flying Dutchman',alt:['Flying Dutchman'],note:'',tier:'mid',clue:'Green ghost pirate with a beard and a bad temper.'},
    {slug:'man-ray',        name:'Man Ray',        alt:[],                 note:'', tier:'mid',  clue:'Supervillain frozen in tartar sauce.'},
    {slug:'dirty-bubble',   name:'The Dirty Bubble',alt:['Dirty Bubble'],  note:'', tier:'mid',  clue:'A large brown bubble, and somehow a crime lord.'},
    {slug:'patchy-the-pirate',name:'Patchy the Pirate',alt:['Patchy'],     note:'', tier:'mid',  clue:'Live-action president of the fan club.'},
    {slug:'painty-the-pirate',name:'Painty the Pirate',alt:['Painty'],     note:'', tier:'deep', clue:'The painting that sings the theme tune.'},

    /* ── DEEP ── */
    {slug:'old-man-jenkins',name:'Old Man Jenkins', alt:['Old Man Jenkins'],note:'',tier:'deep', clue:'Different character every episode, same name.'},
    {slug:'kevin-c-cucumber',name:'Kevin C. Cucumber',alt:['Kevin'],       note:'', tier:'deep', clue:'President of the jellyfishing club, and a total fraud.'},
    {slug:'perch-perkins', name:'Perch Perkins',   alt:[],                 note:'', tier:'deep', clue:'Bikini Bottom\'s only news reporter.'},
    {slug:'harold-squarepants',name:'Harold SquarePants',alt:['Harold'],   note:'', tier:'deep', clue:'SpongeBob\'s dad. A sponge, but a round one.'},
    {slug:'grandma-squarepants',name:'Grandma SquarePants',alt:['Grandma'],note:'', tier:'deep', clue:'Bakes the cookies and knits the sweater.'},
    {slug:'nat-peterson',   name:'Nat Peterson',   alt:[],                 note:'', tier:'deep', clue:'A background fish so common he got a name.'},
    {slug:'fred',           name:'Fred',           alt:['Fred the Fish'],  note:'', tier:'deep', clue:'MY LEG!'},
    {slug:'bubble-buddy',   name:'Bubble Buddy',   alt:[],                 note:'', tier:'deep', clue:'A friend made of soap who caused a riot.', page:'Bubble Buddy (character)'},
    {slug:'doodlebob',      name:'DoodleBob',      alt:[],                 note:'', tier:'deep', clue:'Drawn with a magic pencil. ME HOY MINOY.'},
    {slug:'flats-the-flounder',name:'Flats the Flounder',alt:['Flats'],    note:'', tier:'deep', clue:'The new kid who just wants to kick your butt.'},
    {slug:'king-neptune',   name:'King Neptune',   alt:['Neptune'],        note:'', tier:'deep', clue:'Trident, crown, and very sensitive about going bald.'},
    {slug:'mindy',          name:'Mindy',          alt:[],                 note:'', tier:'deep', clue:'Neptune\'s daughter, from the first film.'},
    {slug:'dennis',         name:'Dennis',         alt:[],                 note:'', tier:'deep', clue:'The hitman with the spiked boot.'},
    {slug:'bikini-bottom',      name:'Bikini Bottom',alt:[],          note:'Setting',tier:'deep',clue:'The town itself, under a certain atoll.'},
    {slug:'krusty-krab',    name:'The Krusty Krab', alt:['Krusty Krab'],   note:'Setting',tier:'mid',  clue:'A giant lobster trap that serves burgers.'},
    {slug:'chum-bucket',    name:'The Chum Bucket', alt:['Chum Bucket'],   note:'Setting',tier:'mid',  clue:'Across the road, and permanently empty.'},
    {slug:'krabby-patty',   name:'Krabby Patty',   alt:[],                 note:'Object', tier:'mid',  clue:'The burger the entire show is about.'},
    /* ── CREATURES ── */
    {slug:'alaskan-bull-worm', name:'Alaskan Bull Worm', alt:[], note:'Creatures', tier:'mid', clue:'It’s big, it’s pink, you must have seen it.'},
    {slug:'sea-bear', name:'Sea Bear', alt:[], note:'Creatures', tier:'mid', clue:'The circle in the sand does not work.'},
    {slug:'puffy-fluffy', name:'Puffy Fluffy', alt:[], note:'Creatures', tier:'deep', clue:'Started cute.'},
    {slug:'wormy', name:'Wormy', alt:[], note:'Creatures', tier:'deep', clue:'Turned into a butterfly. Chaos followed.'},
    {slug:'mystery', name:'Mystery', alt:[], note:'Creatures', tier:'deep', clue:'Patrick’s seahorse.'},
    {slug:'jellyfish', name:'Jellyfish', alt:[], note:'Creatures', tier:'easy', clue:'Pink, stings, makes jelly.'},

    /* ── VILLAINS ── */
    {slug:'tattletale-strangler', name:'Tattletale Strangler', alt:[], note:'Villains', tier:'deep', clue:'Turned himself in eventually.'},
    {slug:'hash-slinging-slasher', name:'Hash-Slinging Slasher', alt:[], note:'Villains', tier:'mid', clue:'The bus, the phone, the door.'},
    {slug:'nosferatu', name:'Nosferatu', alt:[], note:'Villains', tier:'deep', clue:'The one who flicks the lights.'},

    /* ── CHARACTERS ── */
    {slug:'mama-krabs', name:'Mama Krabs', alt:[], note:'Characters', tier:'deep', clue:'Mr. Krabs’ mother. Blue dress.'},
    {slug:'sadie', name:'Sadie Rechid', alt:[], note:'Characters', tier:'deep', clue:'One of the regulars in the queue.'},
    {slug:'nancy-suzy-fish', name:'Nancy Suzy Fish', alt:[], note:'Characters', tier:'deep', clue:'A background fish with a name.'},
    {slug:'scooter', name:'Scooter', alt:[], note:'Characters', tier:'deep', clue:'Surfer. Goo Lagoon.'},
    {slug:'tom', name:'Tom', alt:[], note:'Characters', tier:'deep', clue:'The one who cries a lot.'},
    {slug:'jack-crazyfish', name:'Jack M. Crazyfish', alt:[], note:'Characters', tier:'deep', clue:'Another one from the crowd.'},

    /* ── PLACES ── */
    {slug:'squidward-house', name:'Squidward’s house', alt:[], note:'Places', tier:'easy', clue:'The Easter Island head.', page:'Squidward\'s house'},
    {slug:'boating-school', name:'Mrs. Puff’s Boating School', alt:[], note:'Places', tier:'mid', clue:'He has never passed.', page:'Mrs. Puff\'s Boating School'},
    {slug:'goo-lagoon', name:'Goo Lagoon', alt:[], note:'Places', tier:'mid', clue:'The beach.'},
    {slug:'jellyfish-fields', name:'Jellyfish Fields', alt:[], note:'Places', tier:'mid', clue:'Where the netting happens.'},
    {slug:'rock-bottom', name:'Rock Bottom', alt:[], note:'Places', tier:'mid', clue:'Wrong bus. No light.'},
    {slug:'shell-city', name:'Shell City', alt:[], note:'Places', tier:'deep', clue:'The gift shop at the end of the film.'},
    {slug:'atlantis', name:'Atlantis', alt:[], note:'Places', tier:'deep', clue:'They found it in a bubble.'},
    {slug:'salty-spitoon', name:'Salty Spitoon', alt:[], note:'Places', tier:'mid', clue:'How tough are ya?'},
    {slug:'weenie-hut', name:'Weenie Hut Jr’s', alt:[], note:'Places', tier:'mid', clue:'Next door, for everyone else.'},
    {slug:'glove-world', name:'Glove World', alt:[], note:'Places', tier:'mid', clue:'The theme park.'},
    {slug:'conch-street', name:'Conch Street', alt:[], note:'Places', tier:'deep', clue:'Where all three of them live.'},
    {slug:'mermalair', name:'Mermalair', alt:[], note:'Places', tier:'deep', clue:'Mermaid Man’s cave.'},
    {slug:'treedome', name:'Sandy’s Treedome', alt:[], note:'Places', tier:'mid', clue:'Bring a helmet.', page:'Sandy\'s Treedome'},

    /* ── OBJECTS ── */
    {slug:'magic-conch', name:'Magic Conch Shell', alt:[], note:'Objects', tier:'mid', clue:'All hail. Neither.'},
    {slug:'secret-formula', name:'Krabby Patty Secret Formula', alt:[], note:'Objects', tier:'mid', clue:'The bottle in the safe.'},
    {slug:'spatula', name:'Spatula', alt:[], note:'Objects', tier:'deep', clue:'His whole career.'},
    {slug:'reef-blower', name:'Reef Blower', alt:[], note:'Objects', tier:'deep', clue:'Episode one, no dialogue.'},
    {slug:'boaty', name:'Boaty', alt:[], note:'Objects', tier:'deep', clue:'The boatmobile.'},
    {slug:'employee-of-month', name:'Employee of the Month', alt:[], note:'Objects', tier:'deep', clue:'The wall of identical photos.'},

    /* ── FOOD ── */
    {slug:'pretty-patties', name:'Pretty Patties', alt:[], note:'Food', tier:'deep', clue:'Coloured, and briefly a business.'},
    {slug:'chum', name:'Chum', alt:[], note:'Food', tier:'mid', clue:'Nobody has ever ordered it.'},
    {slug:'kelp-shake', name:'Kelp Shake', alt:[], note:'Food', tier:'deep', clue:'Took over the whole town.'},
    {slug:'krusty-krab-pizza', name:'Krusty Krab Pizza', alt:[], note:'Food', tier:'mid', clue:'It is the pizza. For you.'},

    /* ── OBJECTS ── */
    {slug:'flying-dutchmans-ship', name:'Flying Dutchman’s ship', alt:[], note:'Objects', tier:'deep', clue:'The green one in the sky.', page:'Flying Dutchman\'s ship'}
  ]
});
