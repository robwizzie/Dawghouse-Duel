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
    {slug:'krabby-patty',   name:'Krabby Patty',   alt:[],                 note:'Object', tier:'mid',  clue:'The burger the entire show is about.'}
  ]
});
