/* ══════════════════════════════════════════════════════════════
   CATEGORY: CARTOON CHARACTERS

   Every big kids' channel, from the Golden Age shorts to what is on
   now. Adult animation lives in the Sitcoms deck (Simpsons, Family
   Guy, South Park, Futurama, Bob's Burgers, King of the Hill) and is
   deliberately not repeated here. Disney *film* characters have their
   own deck too, so this one takes Disney's television side only.
   Artwork: node tools/fetch-wiki-images.js cartoons
   ══════════════════════════════════════════════════════════════ */
window.DHD_CATEGORIES = window.DHD_CATEGORIES || [];
window.DHD_CATEGORIES.push({
  id: 'cartoons',
  name: 'Cartoon Characters',
  blurb: 'Saturday mornings, after school, and whatever the kids watch now.',
  items: [
    /* ── LOONEY TUNES ── */
    {slug:'bugs-bunny',      name:'Bugs Bunny',      alt:[],                  note:'Looney Tunes', tier:'easy', clue:"Grey rabbit with a carrot. What's up, doc.",        wiki:'looneytunes.fandom.com'},
    {slug:'daffy-duck',      name:'Daffy Duck',      alt:[],                  note:'Looney Tunes', tier:'easy', clue:'Black duck with a lisp and a persecution complex.', wiki:'looneytunes.fandom.com'},
    {slug:'porky-pig',       name:'Porky Pig',       alt:[],                  note:'Looney Tunes', tier:'easy', clue:"Th-th-th-that's all folks.",                        wiki:'looneytunes.fandom.com'},
    {slug:'tweety',          name:'Tweety',          alt:['Tweety Bird'],     note:'Looney Tunes', tier:'easy', clue:'Yellow canary. I tawt I taw a puddy tat.',           wiki:'looneytunes.fandom.com'},
    {slug:'sylvester',       name:'Sylvester',       alt:['Sylvester the Cat'],note:'Looney Tunes',tier:'easy', clue:'Black and white cat with a lisp, permanently hungry.',wiki:'looneytunes.fandom.com'},
    {slug:'wile-e-coyote',   name:'Wile E. Coyote',  alt:['Wile E Coyote'],   note:'Looney Tunes', tier:'easy', clue:'Loyal ACME customer. Has never once succeeded.',    wiki:'looneytunes.fandom.com'},
    {slug:'road-runner',     name:'Road Runner',     alt:['Roadrunner'],      note:'Looney Tunes', tier:'easy', clue:'Beep beep.',                                        wiki:'looneytunes.fandom.com'},
    {slug:'taz',             name:'Tasmanian Devil', alt:['Taz'],             note:'Looney Tunes', tier:'easy', clue:'Brown tornado with teeth. Mostly noise.',           wiki:'looneytunes.fandom.com'},
    {slug:'elmer-fudd',      name:'Elmer Fudd',      alt:[],                  note:'Looney Tunes', tier:'mid',  clue:'Hunting hat, shotgun, twouble with his Rs.',        wiki:'looneytunes.fandom.com'},
    {slug:'yosemite-sam',    name:'Yosemite Sam',    alt:[],                  note:'Looney Tunes', tier:'mid',  clue:'Tiny cowboy, enormous red moustache, two pistols.', wiki:'looneytunes.fandom.com'},
    {slug:'marvin-the-martian',name:'Marvin the Martian',alt:['Marvin'],      note:'Looney Tunes', tier:'mid',  clue:'Roman helmet with a brush on top. Wants to blow up Earth.', wiki:'looneytunes.fandom.com'},
    {slug:'foghorn-leghorn', name:'Foghorn Leghorn', alt:[],                  note:'Looney Tunes', tier:'mid',  clue:'Enormous rooster who talks, I say, talks over everyone.', wiki:'looneytunes.fandom.com'},
    {slug:'speedy-gonzales', name:'Speedy Gonzales', alt:[],                  note:'Looney Tunes', tier:'mid',  clue:'Fastest mouse in all Mexico. Ándale.',              wiki:'looneytunes.fandom.com'},

    /* ── HANNA-BARBERA ── */
    {slug:'scooby-doo',      name:'Scooby-Doo',      alt:['Scooby'],          note:'Scooby-Doo',   tier:'easy', clue:'Great Dane detective, blue collar, motivated by snacks.', wiki:'scoobydoo.fandom.com'},
    {slug:'shaggy',          name:'Shaggy Rogers',   alt:['Shaggy'],          note:'Scooby-Doo',   tier:'easy', clue:'Green shirt, goatee, permanently starving. Zoinks.',wiki:'scoobydoo.fandom.com'},
    {slug:'velma',           name:'Velma Dinkley',   alt:['Velma'],           note:'Scooby-Doo',   tier:'easy', clue:'Orange jumper, glasses. Jinkies.',                  wiki:'scoobydoo.fandom.com'},
    {slug:'daphne',          name:'Daphne Blake',    alt:['Daphne'],          note:'Scooby-Doo',   tier:'mid',  clue:'Purple dress, green scarf, red hair.',              wiki:'scoobydoo.fandom.com'},
    {slug:'fred-jones',      name:'Fred Jones',      alt:['Fred'],            note:'Scooby-Doo',   tier:'mid',  clue:'Orange ascot, and he builds the trap.',             wiki:'scoobydoo.fandom.com'},
    {slug:'fred-flintstone', name:'Fred Flintstone', alt:[],                  note:'The Flintstones',tier:'easy',clue:'Orange hide, blue tie. Yabba dabba doo.',          wiki:'hanna-barbera.fandom.com'},
    {slug:'barney-rubble',   name:'Barney Rubble',   alt:[],                  note:'The Flintstones',tier:'mid', clue:'Short, blond, and the neighbour.',                 wiki:'hanna-barbera.fandom.com'},
    {slug:'george-jetson',   name:'George Jetson',   alt:[],                  note:'The Jetsons',  tier:'mid',  clue:'Space-age commuter. His boss is Mr. Spacely.',      wiki:'hanna-barbera.fandom.com'},
    {slug:'yogi-bear',       name:'Yogi Bear',       alt:[],                  note:'Yogi Bear',    tier:'mid',  clue:'Hat and collar, and smarter than the average one.', wiki:'hanna-barbera.fandom.com', page:'Yogi'},
    {slug:'tom-cat',         name:'Tom',             alt:['Tom Cat'],         note:'Tom and Jerry',tier:'easy', clue:'Blue-grey cat who never once catches the mouse.',   wiki:'tomandjerry.fandom.com'},
    {slug:'jerry-mouse',     name:'Jerry',           alt:['Jerry Mouse'],     note:'Tom and Jerry',tier:'easy', clue:'Brown mouse. Wins every single time.',              wiki:'tomandjerry.fandom.com'},

    /* ── NICKELODEON ── */
    {slug:'spongebob',       name:'SpongeBob SquarePants',alt:['SpongeBob'],  note:'SpongeBob',    tier:'easy', clue:'Yellow, absorbent, works the fry cook station.',    wiki:'spongebob.fandom.com', page:'SpongeBob SquarePants (character)'},
    {slug:'patrick-star',    name:'Patrick Star',    alt:['Patrick'],         note:'SpongeBob',    tier:'easy', clue:'Pink starfish who lives under a rock. Literally.',  wiki:'nickelodeon.fandom.com'},
    {slug:'squidward',       name:'Squidward Tentacles',alt:['Squidward'],    note:'SpongeBob',    tier:'easy', clue:'Cyan, big nose, clarinet, hates his job.',          wiki:'nickelodeon.fandom.com'},
    {slug:'mr-krabs',        name:'Mr. Krabs',       alt:['Eugene Krabs'],    note:'SpongeBob',    tier:'mid',  clue:'Red crab who loves money more than anything.',      wiki:'nickelodeon.fandom.com'},
    {slug:'plankton',        name:'Plankton',        alt:['Sheldon Plankton'],note:'SpongeBob',    tier:'mid',  clue:'One green eye, still after the formula.',           wiki:'nickelodeon.fandom.com'},
    {slug:'sandy-cheeks',    name:'Sandy Cheeks',    alt:['Sandy'],           note:'SpongeBob',    tier:'mid',  clue:'Squirrel in a diving suit. From Texas.',            wiki:'nickelodeon.fandom.com'},
    {slug:'tommy-pickles',   name:'Tommy Pickles',   alt:['Tommy'],           note:'Rugrats',      tier:'mid',  clue:'Blue shirt, one hair, and a screwdriver.',          wiki:'nickelodeon.fandom.com'},
    {slug:'chuckie-finster', name:'Chuckie Finster', alt:['Chuckie'],         note:'Rugrats',      tier:'mid',  clue:'Red hair, purple glasses, afraid of everything.',   wiki:'nickelodeon.fandom.com'},
    {slug:'angelica-pickles',name:'Angelica Pickles',alt:['Angelica'],        note:'Rugrats',      tier:'mid',  clue:'Blonde bully in orange, carries Cynthia.',          wiki:'nickelodeon.fandom.com'},
    {slug:'arnold',          name:'Arnold',          alt:['Arnold Shortman'], note:'Hey Arnold!',  tier:'mid',  clue:'Football-shaped head and a tiny blue cap.',         wiki:'nickelodeon.fandom.com'},
    {slug:'helga-pataki',    name:'Helga Pataki',    alt:['Helga'],           note:'Hey Arnold!',  tier:'deep', clue:'Pink dress, one eyebrow, secretly in love.',        wiki:'nickelodeon.fandom.com'},
    {slug:'timmy-turner',    name:'Timmy Turner',    alt:['Timmy'],           note:'Fairly OddParents',tier:'mid',clue:'Pink hat, buck teeth, two fairy godparents.',     wiki:'nickelodeon.fandom.com'},
    {slug:'cosmo',           name:'Cosmo',           alt:[],                  note:'Fairly OddParents',tier:'deep',clue:'Green fairy. Not the clever one.',               wiki:'nickelodeon.fandom.com'},
    {slug:'jimmy-neutron',   name:'Jimmy Neutron',   alt:['Jimmy'],           note:'Jimmy Neutron',tier:'mid',  clue:'Enormous swirl of hair and a robot dog.',           wiki:'jimmyneutron.fandom.com', page:'Jimmy Neutron'},
    {slug:'danny-phantom',   name:'Danny Phantom',   alt:['Danny Fenton'],    note:'Danny Phantom',tier:'mid',  clue:'White hair, green eyes, half ghost.',               wiki:'dannyphantom.fandom.com', page:'Danny Fenton'},
    {slug:'zim',             name:'Zim',             alt:['Invader Zim'],     note:'Invader Zim',  tier:'deep', clue:'Small green invader in a pink shirt with a robot.', wiki:'nickelodeon.fandom.com'},
    {slug:'ren-hoek',        name:'Ren Höek',        alt:['Ren'],             note:'Ren & Stimpy', tier:'deep', clue:'Furious chihuahua. You eeediot.',                   wiki:'nickelodeon.fandom.com'},
    {slug:'stimpy',          name:'Stimpy',          alt:['Stimpson J. Cat'], note:'Ren & Stimpy', tier:'deep', clue:'Red and white cat with a blue nose and no brain.',  wiki:'nickelodeon.fandom.com'},
    {slug:'rocko',           name:'Rocko',           alt:[],                  note:"Rocko's Modern Life",tier:'deep',clue:'Australian wallaby in a blue shirt.',          wiki:'rockosmodernlife.fandom.com', page:'Rocko Rama'},
    {slug:'catdog',          name:'CatDog',          alt:[],                  note:'CatDog',       tier:'deep', clue:'One body, a cat at one end and a dog at the other.',wiki:'nickelodeon.fandom.com'},
    {slug:'aang',            name:'Aang',            alt:[],                  note:'Avatar',       tier:'mid',  clue:'Blue arrow tattoos, orange robes, last airbender.', wiki:'nickelodeon.fandom.com'},
    {slug:'lincoln-loud',    name:'Lincoln Loud',    alt:['Lincoln'],         note:'The Loud House',tier:'mid', clue:'White hair, orange polo, and ten sisters.',         wiki:'nickelodeon.fandom.com'},

    /* ── CARTOON NETWORK ── */
    {slug:'dexter',          name:'Dexter',          alt:[],                  note:"Dexter's Laboratory",tier:'mid',clue:'Orange hair, lab coat, purple gloves, secret lab.',wiki:'dexterslab.fandom.com', page:'Dexter'},
    {slug:'blossom',         name:'Blossom',         alt:[],                  note:'Powerpuff Girls',tier:'mid', clue:'Pink one, red hair, the leader.',                  wiki:'cartoonnetwork.fandom.com'},
    {slug:'bubbles-ppg',     name:'Bubbles',         alt:[],                  note:'Powerpuff Girls',tier:'mid', clue:'Blue one, blonde pigtails, the sweet one.',        wiki:'cartoonnetwork.fandom.com'},
    {slug:'buttercup-ppg',   name:'Buttercup',       alt:[],                  note:'Powerpuff Girls',tier:'mid', clue:'Green one, black hair, the one who fights.',       wiki:'cartoonnetwork.fandom.com'},
    {slug:'johnny-bravo',    name:'Johnny Bravo',    alt:[],                  note:'Johnny Bravo', tier:'mid',  clue:'Blond pompadour, sunglasses, zero success.',        wiki:'johnnybravo.fandom.com', page:'Johnny Bravo (character)'},
    {slug:'courage',         name:'Courage',         alt:['Courage the Cowardly Dog'],note:'Courage',tier:'mid', clue:'Pink dog, permanently terrified, in Nowhere.',      wiki:'courage.fandom.com', page:'Courage'},
    {slug:'ed',              name:'Ed',              alt:[],                  note:'Ed, Edd n Eddy',tier:'deep', clue:'Green jacket, unibrow, the big dim one.',          wiki:'cartoonnetwork.fandom.com'},
    {slug:'samurai-jack',    name:'Samurai Jack',    alt:['Jack'],            note:'Samurai Jack', tier:'mid',  clue:'White robe, topknot, thrown into the future.',      wiki:'samuraijack.fandom.com', page:'Jack'},
    {slug:'finn',            name:'Finn',            alt:['Finn the Human'],  note:'Adventure Time',tier:'mid',  clue:'White bear hat with ears, blue shirt, gold sword.', wiki:'cartoonnetwork.fandom.com'},
    {slug:'jake-the-dog',    name:'Jake',            alt:['Jake the Dog'],    note:'Adventure Time',tier:'mid',  clue:'Yellow dog who can stretch into any shape.',        wiki:'cartoonnetwork.fandom.com'},
    {slug:'mordecai',        name:'Mordecai',        alt:[],                  note:'Regular Show', tier:'deep', clue:'Blue jay who works at the park.',                   wiki:'cartoonnetwork.fandom.com'},
    {slug:'rigby',           name:'Rigby',           alt:[],                  note:'Regular Show', tier:'deep', clue:'Brown raccoon, the shorter half of the pair.',      wiki:'cartoonnetwork.fandom.com'},
    {slug:'gumball',         name:'Gumball Watterson',alt:['Gumball'],        note:'Amazing World of Gumball',tier:'mid',clue:'Blue cat in a jumper. Brother is a goldfish.',wiki:'cartoonnetwork.fandom.com'},
    {slug:'steven-universe', name:'Steven Universe', alt:['Steven'],          note:'Steven Universe',tier:'mid', clue:'Pink star on his shirt and a gem in his navel.',    wiki:'steven-universe.fandom.com', page:'Steven Universe (character)'},
    {slug:'raven-tt',        name:'Raven',           alt:[],                  note:'Teen Titans',  tier:'mid',  clue:'Purple hood, grey skin, extremely dry.',            wiki:'teentitans.fandom.com'},
    {slug:'starfire',        name:'Starfire',        alt:[],                  note:'Teen Titans',  tier:'mid',  clue:'Orange skin, red hair, alien princess.',            wiki:'teentitans.fandom.com'},
    {slug:'beast-boy',       name:'Beast Boy',       alt:[],                  note:'Teen Titans',  tier:'mid',  clue:'Green, and turns into any animal.',                 wiki:'teentitans.fandom.com'},

    /* ── DISNEY TELEVISION ── */
    {slug:'kim-possible',    name:'Kim Possible',    alt:['Kim'],             note:'Kim Possible', tier:'mid',  clue:'Red hair, crop top, and a naked mole rat.',         wiki:'kimpossible.fandom.com', page:'Kim Possible'},
    {slug:'ron-stoppable',   name:'Ron Stoppable',   alt:['Ron'],             note:'Kim Possible', tier:'deep', clue:'Blond sidekick who loses his trousers constantly.', wiki:'disney.fandom.com'},
    {slug:'phineas',         name:'Phineas Flynn',   alt:['Phineas'],         note:'Phineas and Ferb',tier:'mid',clue:'Triangular head, orange hair. Knows what to do today.',wiki:'disney.fandom.com'},
    {slug:'ferb',            name:'Ferb Fletcher',   alt:['Ferb'],            note:'Phineas and Ferb',tier:'mid',clue:'Green hair, purple trousers, barely speaks.',      wiki:'disney.fandom.com'},
    {slug:'perry',           name:'Perry the Platypus',alt:['Perry','Agent P'],note:'Phineas and Ferb',tier:'mid',clue:'Teal platypus. Puts on a fedora and becomes a spy.',wiki:'disney.fandom.com'},
    {slug:'dipper-pines',    name:'Dipper Pines',    alt:['Dipper'],          note:'Gravity Falls',tier:'mid',  clue:'Pine tree cap and a journal with a hand on it.',    wiki:'disney.fandom.com'},
    {slug:'mabel-pines',     name:'Mabel Pines',     alt:['Mabel'],           note:'Gravity Falls',tier:'mid',  clue:'Braces, headband, and a different jumper each time.',wiki:'disney.fandom.com'},
    {slug:'bill-cipher',     name:'Bill Cipher',     alt:['Bill'],            note:'Gravity Falls',tier:'deep', clue:'A yellow triangle with one eye and a top hat.',     wiki:'disney.fandom.com'},
    {slug:'darkwing-duck',   name:'Darkwing Duck',   alt:[],                  note:'Darkwing Duck',tier:'deep', clue:'Purple cape and mask. Let us get dangerous.',       wiki:'darkwingduck.fandom.com', page:'Darkwing Duck (character)'},
    {slug:'launchpad',       name:'Launchpad McQuack',alt:['Launchpad'],      note:'DuckTales',    tier:'deep', clue:'Pilot who has never landed anything successfully.', wiki:'disney.fandom.com'},
    {slug:'tj-detweiler',    name:'T.J. Detweiler',  alt:['TJ Detweiler'],    note:'Recess',       tier:'deep', clue:'Red cap backwards, runs the playground.',           wiki:'disney.fandom.com'},
    {slug:'goofy-goof',      name:'Max Goof',        alt:['Max'],             note:'Goof Troop',   tier:'deep', clue:'Goofy\'s teenage son, in a red cap.',               wiki:'disney.fandom.com'},

    /* ── ANIME ON KIDS TV ── */
    {slug:'ash-ketchum',     name:'Ash Ketchum',     alt:['Ash'],             note:'Pokémon',      tier:'mid',  clue:'Red and white cap, fingerless gloves, ten years old for ever.', wiki:'pokemon.fandom.com'},
    {slug:'goku-dbz',        name:'Goku',            alt:[],                  note:'Dragon Ball Z',tier:'mid',  clue:'Orange gi, spiky black hair, keeps dying.',         wiki:'dragonball.fandom.com'},
    {slug:'vegeta',          name:'Vegeta',          alt:[],                  note:'Dragon Ball Z',tier:'mid',  clue:'Widow\'s peak and a permanent grievance about being second.', wiki:'dragonball.fandom.com'},
    {slug:'naruto',          name:'Naruto Uzumaki',  alt:['Naruto'],          note:'Naruto',       tier:'mid',  clue:'Orange tracksuit, whisker marks, believe it.',      wiki:'naruto.fandom.com'},
    {slug:'sasuke',          name:'Sasuke Uchiha',   alt:['Sasuke'],          note:'Naruto',       tier:'deep', clue:'Blue shirt, duck-tail hair, revenge on the brain.', wiki:'naruto.fandom.com'},
    {slug:'luffy',           name:'Monkey D. Luffy', alt:['Luffy'],           note:'One Piece',    tier:'mid',  clue:'Straw hat, red waistcoat, made of rubber.',         wiki:'onepiece.fandom.com'},
    {slug:'sailor-moon',     name:'Sailor Moon',     alt:['Usagi Tsukino'],   note:'Sailor Moon',  tier:'mid',  clue:'Blonde odango buns and a sailor collar.',           wiki:'sailormoon.fandom.com'},

    /* ── WHAT IS ON NOW ── */
    {slug:'bluey',           name:'Bluey',           alt:['Bluey Heeler'],    note:'Bluey',        tier:'easy', clue:'Blue heeler puppy from Brisbane. Adults cry at it.',wiki:'bluey.fandom.com'},
    {slug:'bingo-heeler',    name:'Bingo',           alt:['Bingo Heeler'],    note:'Bluey',        tier:'mid',  clue:'The orange little sister.',                         wiki:'bluey.fandom.com'},
    {slug:'chase-pp',        name:'Chase',           alt:[],                  note:'PAW Patrol',   tier:'mid',  clue:'Blue police pup. Chase is on the case.',            wiki:'pawpatrol.fandom.com'},
    {slug:'marshall-pp',     name:'Marshall',        alt:[],                  note:'PAW Patrol',   tier:'mid',  clue:'Red dalmatian fire pup who falls over a lot.',      wiki:'pawpatrol.fandom.com'},
    {slug:'skye-pp',         name:'Skye',            alt:[],                  note:'PAW Patrol',   tier:'mid',  clue:'Pink cockapoo with a flight helmet.',               wiki:'pawpatrol.fandom.com'},
    {slug:'peppa-pig',       name:'Peppa Pig',       alt:['Peppa'],           note:'Peppa Pig',    tier:'easy', clue:'Red dress, and she loves jumping in muddy puddles.',wiki:'peppapig.fandom.com'},
    {slug:'george-pig',      name:'George Pig',      alt:['George'],          note:'Peppa Pig',    tier:'mid',  clue:'Blue jumper, little brother, dinosaur.',            wiki:'peppapig.fandom.com'}
  ]
});
