/* ══════════════════════════════════════════════════════════════
   CATEGORY: CARTOON CHARACTERS

   Everything animated: the Golden Age shorts, every big kids' channel,
   anime, and the adult side — Simpsons, South Park, Family Guy, Rick
   and Morty, Bob's Burgers, Archer and the rest. Those used to sit in
   the Sitcoms deck, which is live action now.

   SpongeBob and Attack on Titan have decks of their own, so neither is
   repeated here. Disney *film* characters do too, so this one takes
   Disney's television side only.
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
    {slug:'george-pig',      name:'George Pig',      alt:['George'],          note:'Peppa Pig',    tier:'mid',  clue:'Blue jumper, little brother, dinosaur.',            wiki:'peppapig.fandom.com'},
    /* ── THE SIMPSONS ── */
    {slug:'homer-simpson',   name:'Homer Simpson',   alt:['Homer'],             note:'The Simpsons',      tier:'easy', clue:'Safety inspector, sector 7-G. D\'oh.',                   wiki:'simpsons.fandom.com'},
    {slug:'marge-simpson',   name:'Marge Simpson',   alt:['Marge'],             note:'The Simpsons',      tier:'easy', clue:'Blue tower of hair and infinite patience.',             wiki:'simpsons.fandom.com'},
    {slug:'bart-simpson',    name:'Bart Simpson',    alt:['Bart'],              note:'The Simpsons',      tier:'easy', clue:'Eat my shorts.',                                        wiki:'simpsons.fandom.com'},
    {slug:'lisa-simpson',    name:'Lisa Simpson',    alt:['Lisa'],              note:'The Simpsons',      tier:'easy', clue:'Saxophone, vegetarian, smartest one in Springfield.',   wiki:'simpsons.fandom.com'},
    {slug:'mr-burns',        name:'Mr. Burns',       alt:['Montgomery Burns','Burns'],note:'The Simpsons',tier:'easy', clue:'Excellent. Releases the hounds.',                        wiki:'simpsons.fandom.com'},
    {slug:'ned-flanders',    name:'Ned Flanders',    alt:['Flanders'],          note:'The Simpsons',      tier:'easy', clue:'Okily dokily, neighbourino.',                           wiki:'simpsons.fandom.com'},
    {slug:'krusty-the-clown',name:'Krusty the Clown',alt:['Krusty'],            note:'The Simpsons',      tier:'mid',  clue:'Green hair, hacking cough, endless merchandise.',       wiki:'simpsons.fandom.com'},
    {slug:'milhouse',        name:'Milhouse',        alt:['Milhouse Van Houten'],note:'The Simpsons',     tier:'mid',  clue:'Blue hair, thick glasses, everything is coming up him.',wiki:'simpsons.fandom.com'},
    {slug:'ralph-wiggum',    name:'Ralph Wiggum',    alt:['Ralph'],             note:'The Simpsons',      tier:'mid',  clue:'Me fail English? That\'s unpossible.',                   wiki:'simpsons.fandom.com'},
    {slug:'moe-szyslak',     name:'Moe Szyslak',     alt:['Moe'],               note:'The Simpsons',      tier:'mid',  clue:'Runs the tavern, takes the prank calls badly.',         wiki:'simpsons.fandom.com'},
    {slug:'principal-skinner',name:'Principal Skinner',alt:['Seymour Skinner','Skinner'],note:'The Simpsons',tier:'deep',clue:'Steamed hams. Lives with his mother.',                wiki:'simpsons.fandom.com'},

    /* ── SOUTH PARK ── */
    {slug:'eric-cartman',    name:'Eric Cartman',    alt:['Cartman'],           note:'South Park',        tier:'easy', clue:'Respect my authoritah.',                                wiki:'southpark.fandom.com'},
    {slug:'stan-marsh',      name:'Stan Marsh',      alt:['Stan'],              note:'South Park',        tier:'easy', clue:'Blue hat with a red pom-pom. The normal one.',           wiki:'southpark.fandom.com'},
    {slug:'kyle-broflovski', name:'Kyle Broflovski', alt:['Kyle'],              note:'South Park',        tier:'easy', clue:'Green ushanka. Cartman\'s permanent target.',            wiki:'southpark.fandom.com'},
    {slug:'kenny-mccormick', name:'Kenny McCormick', alt:['Kenny'],             note:'South Park',        tier:'easy', clue:'Orange parka. You can\'t make out a word.',              wiki:'southpark.fandom.com'},
    {slug:'butters-stotch',  name:'Butters',         alt:['Butters Stotch','Leopold Stotch'],note:'South Park',tier:'mid',clue:'Oh hamburgers. Grounded again.',                      wiki:'southpark.fandom.com'},
    {slug:'randy-marsh',     name:'Randy Marsh',     alt:['Randy'],             note:'South Park',        tier:'mid',  clue:'Geologist, Tegridy Farms, dad of the year he is not.',  wiki:'southpark.fandom.com'},

    /* ── FAMILY GUY ── */
    {slug:'peter-griffin',   name:'Peter Griffin',   alt:['Peter'],             note:'Family Guy',        tier:'easy', clue:'Green trousers, white shirt, hehehehe.',                wiki:'familyguy.fandom.com'},
    {slug:'stewie-griffin',  name:'Stewie Griffin',  alt:['Stewie'],            note:'Family Guy',        tier:'easy', clue:'Football-shaped head, English accent, wants his mother dead.', wiki:'familyguy.fandom.com'},
    {slug:'brian-griffin',   name:'Brian Griffin',   alt:['Brian'],             note:'Family Guy',        tier:'easy', clue:'The dog. Writes a novel nobody reads. Drinks martinis.',wiki:'familyguy.fandom.com'},
    {slug:'lois-griffin',    name:'Lois Griffin',    alt:['Lois'],              note:'Family Guy',        tier:'mid',  clue:'Red hair, piano lessons, married far below herself.',   wiki:'familyguy.fandom.com'},
    {slug:'glenn-quagmire',  name:'Quagmire',        alt:['Glenn Quagmire'],    note:'Family Guy',        tier:'mid',  clue:'Giggity.',                                              wiki:'familyguy.fandom.com'},
    {slug:'meg-griffin',     name:'Meg Griffin',     alt:['Meg'],               note:'Family Guy',        tier:'mid',  clue:'Pink hat, glasses, shut up Meg.',                       wiki:'familyguy.fandom.com'},

    /* ── KING OF THE HILL ── */
    {slug:'hank-hill',       name:'Hank Hill',       alt:['Hank'],              note:'King of the Hill',  tier:'mid',  clue:'Propane and propane accessories. I tell you hwhat.',    wiki:'kingofthehill.fandom.com'},
    {slug:'bobby-hill',      name:'Bobby Hill',      alt:['Bobby'],             note:'King of the Hill',  tier:'mid',  clue:'That boy ain\'t right.',                                wiki:'kingofthehill.fandom.com'},
    {slug:'dale-gribble',    name:'Dale Gribble',    alt:['Dale'],              note:'King of the Hill',  tier:'deep', clue:'Sunglasses, cap, exterminator, deep conspiracy theorist.',wiki:'kingofthehill.fandom.com'},
    {slug:'boomhauer',       name:'Boomhauer',       alt:[],                    note:'King of the Hill',  tier:'deep', clue:'Dang ol\' talk so fast man, you can\'t tell what he\'s sayin\'.', wiki:'kingofthehill.fandom.com'},

    /* ── FUTURAMA ── */
    {slug:'bender',          name:'Bender',          alt:['Bender Rodriguez'],  note:'Futurama',          tier:'easy', clue:'Bite my shiny metal ass.',                              wiki:'futurama.fandom.com'},
    {slug:'philip-fry',      name:'Fry',             alt:['Philip J. Fry'],     note:'Futurama',          tier:'mid',  clue:'Delivery boy, frozen in 1999, own grandfather.',        wiki:'futurama.fandom.com'},
    {slug:'turanga-leela',   name:'Leela',           alt:['Turanga Leela'],     note:'Futurama',          tier:'mid',  clue:'One eye, purple ponytail, captain of the ship.',        wiki:'futurama.fandom.com'},
    {slug:'zoidberg',        name:'Zoidberg',        alt:['Dr. Zoidberg'],      note:'Futurama',          tier:'mid',  clue:'Lobster doctor. Why not Zoidberg?',                     wiki:'futurama.fandom.com'},
    {slug:'professor-farnsworth',name:'Professor Farnsworth',alt:['Farnsworth'],note:'Futurama',          tier:'deep', clue:'Good news, everyone.',                                  wiki:'futurama.fandom.com'},

    /* ── RICK AND MORTY ── */
    {slug:'rick-sanchez', name:'Rick Sanchez', alt:['Rick'], note:'Rick and Morty', tier:'easy', clue:'Blue hair, lab coat, portal gun, permanently drunk.', wiki:'rickandmorty.fandom.com'},
    {slug:'morty-smith', name:'Morty Smith', alt:['Morty'], note:'Rick and Morty', tier:'easy', clue:'Yellow shirt, endless anxiety, dragged through every dimension.', wiki:'rickandmorty.fandom.com'},
    {slug:'summer-smith', name:'Summer Smith', alt:['Summer'], note:'Rick and Morty', tier:'mid', clue:'The older sister who would quite like to come along.', wiki:'rickandmorty.fandom.com'},
    {slug:'jerry-smith', name:'Jerry Smith', alt:['Jerry'], note:'Rick and Morty', tier:'mid', clue:'The dad. Unemployed, insecure, hated by his father-in-law.', wiki:'rickandmorty.fandom.com'},
    {slug:'beth-smith', name:'Beth Smith', alt:['Beth'], note:'Rick and Morty', tier:'mid', clue:'Horse surgeon. Rick’s daughter.', wiki:'rickandmorty.fandom.com'},
    {slug:'mr-meeseeks', name:'Mr. Meeseeks', alt:['Meeseeks'], note:'Rick and Morty', tier:'mid', clue:'Blue, screaming, exists only to do one job.', wiki:'rickandmorty.fandom.com'},
    {slug:'birdperson', name:'Birdperson', alt:[], note:'Rick and Morty', tier:'deep', clue:'Rick’s oldest friend. Very literal about everything.', wiki:'rickandmorty.fandom.com'},

    /* ── BOB’S BURGERS ── */
    {slug:'bob-belcher', name:'Bob Belcher', alt:['Bob'], note:'Bob’s Burgers', tier:'easy', clue:'Moustache, apron, burger of the day.', wiki:'bobs-burgers.fandom.com'},
    {slug:'linda-belcher', name:'Linda Belcher', alt:['Linda'], note:'Bob’s Burgers', tier:'mid', clue:'Red glasses and a song for every occasion. Alright!', wiki:'bobs-burgers.fandom.com'},
    {slug:'tina-belcher', name:'Tina Belcher', alt:['Tina'], note:'Bob’s Burgers', tier:'easy', clue:'Glasses, horses, boys, and a long low groan.', wiki:'bobs-burgers.fandom.com'},
    {slug:'gene-belcher', name:'Gene Belcher', alt:['Gene'], note:'Bob’s Burgers', tier:'mid', clue:'Keyboard, fart noises, yellow shirt.', wiki:'bobs-burgers.fandom.com'},
    {slug:'louise-belcher', name:'Louise Belcher', alt:['Louise'], note:'Bob’s Burgers', tier:'easy', clue:'Pink bunny ears and genuine menace.', wiki:'bobs-burgers.fandom.com'},

    /* ── AMERICAN DAD! ── */
    {slug:'roger-ad', name:'Roger', alt:['Roger Smith','Roger the alien'], note:'American Dad!', tier:'mid', clue:'Grey alien in the attic with a thousand disguises.', wiki:'americandad.fandom.com', page:'Roger'},
    {slug:'stan-smith', name:'Stan Smith', alt:['Stan'], note:'American Dad!', tier:'mid', clue:'CIA, enormous chin, deeply confident and usually wrong.', wiki:'americandad.fandom.com'},
    {slug:'steve-smith', name:'Steve Smith', alt:['Steve'], note:'American Dad!', tier:'deep', clue:'The son. Sings much better than you would guess.', wiki:'americandad.fandom.com'},
    {slug:'klaus-heisler', name:'Klaus', alt:['Klaus Heisler'], note:'American Dad!', tier:'deep', clue:'German skier trapped in a goldfish.', wiki:'americandad.fandom.com'},
    {slug:'francine-smith', name:'Francine Smith', alt:['Francine'], note:'American Dad!', tier:'deep', clue:'The mother. Wilder past than anyone lets on.', wiki:'americandad.fandom.com'},

    /* ── ARCHER ── */
    {slug:'sterling-archer', name:'Sterling Archer', alt:['Archer'], note:'Archer', tier:'mid', clue:'World’s most dangerous spy. Phrasing.', wiki:'archer.fandom.com'},
    {slug:'lana-kane', name:'Lana Kane', alt:['Lana'], note:'Archer', tier:'deep', clue:'The competent one. Enormous hands, per Archer.', wiki:'archer.fandom.com'},
    {slug:'malory-archer', name:'Malory Archer', alt:['Malory'], note:'Archer', tier:'deep', clue:'Runs the agency and her son. Never without a drink.', wiki:'archer.fandom.com'},
    {slug:'pam-poovey', name:'Pam Poovey', alt:['Pam'], note:'Archer', tier:'deep', clue:'HR, dolphin puppet, drift racing.', wiki:'archer.fandom.com'},

    /* ── BOJACK HORSEMAN ── */
    {slug:'bojack-horseman', name:'BoJack Horseman', alt:['BoJack'], note:'BoJack Horseman', tier:'mid', clue:'Washed-up sitcom horse in a very sad Hollywood.', wiki:'bojackhorseman.fandom.com'},
    {slug:'mr-peanutbutter', name:'Mr. Peanutbutter', alt:[], note:'BoJack Horseman', tier:'mid', clue:'Golden retriever who is relentlessly delighted.', wiki:'bojackhorseman.fandom.com'},
    {slug:'princess-carolyn', name:'Princess Carolyn', alt:[], note:'BoJack Horseman', tier:'deep', clue:'Pink cat agent who fixes everyone else’s life.', wiki:'bojackhorseman.fandom.com'},
    {slug:'todd-chavez', name:'Todd Chavez', alt:['Todd'], note:'BoJack Horseman', tier:'deep', clue:'Yellow beanie, sleeps on the couch, hooray.', wiki:'bojackhorseman.fandom.com'},
    {slug:'diane-nguyen', name:'Diane Nguyen', alt:['Diane'], note:'BoJack Horseman', tier:'deep', clue:'The ghostwriter who tells him the truth.', wiki:'bojackhorseman.fandom.com'},

    /* ── BEAVIS AND BUTT-HEAD ── */
    {slug:'beavis', name:'Beavis', alt:[], note:'Beavis and Butt-Head', tier:'mid', clue:'Blonde, AC/DC shirt, becomes Cornholio.', wiki:'beavisandbutthead.fandom.com'},
    {slug:'butt-head', name:'Butt-Head', alt:[], note:'Beavis and Butt-Head', tier:'mid', clue:'Braces, Metallica shirt, uh huh huh.', wiki:'beavisandbutthead.fandom.com'},

    /* ── DARIA ── */
    {slug:'daria-morgendorffer', name:'Daria Morgendorffer', alt:['Daria'], note:'Daria', tier:'deep', clue:'Round glasses, green jacket, total deadpan.', wiki:'daria.fandom.com'},
    {slug:'jane-lane', name:'Jane Lane', alt:['Jane'], note:'Daria', tier:'deep', clue:'The artist friend. Red jacket, black shorts.', wiki:'daria.fandom.com'},

    /* ── BEN 10 ── */
    {slug:'ben-tennyson', name:'Ben Tennyson', alt:['Ben 10','Ben'], note:'Ben 10', tier:'mid', clue:'Ten-year-old with a watch that turns him into aliens.', wiki:'ben10.fandom.com'},
    {slug:'gwen-tennyson', name:'Gwen Tennyson', alt:['Gwen'], note:'Ben 10', tier:'deep', clue:'The cousin. Magic, and far more sensible.', wiki:'ben10.fandom.com'},
    {slug:'heatblast', name:'Heatblast', alt:[], note:'Ben 10', tier:'deep', clue:'Walking magma. One of the ten.', wiki:'ben10.fandom.com'},
    {slug:'four-arms', name:'Four Arms', alt:['Fourarms'], note:'Ben 10', tier:'deep', clue:'Red, enormous, and exactly as many arms as it says.', wiki:'ben10.fandom.com'},

    /* ── BILLY & MANDY ── */
    {slug:'grim', name:'Grim', alt:['The Grim Reaper'], note:'Billy & Mandy', tier:'mid', clue:'The Reaper himself, losing a bet to two children.', wiki:'grimadventures.fandom.com'},
    {slug:'billy-grim', name:'Billy', alt:[], note:'Billy & Mandy', tier:'deep', clue:'Enormous red nose, no thoughts whatsoever.', wiki:'grimadventures.fandom.com'},
    {slug:'mandy', name:'Mandy', alt:[], note:'Billy & Mandy', tier:'deep', clue:'Black headband, permanent scowl, genuinely frightening.', wiki:'grimadventures.fandom.com'},

    /* ── KIDS NEXT DOOR ── */
    {slug:'numbuh-1', name:'Numbuh 1', alt:['Nigel Uno'], note:'Kids Next Door', tier:'deep', clue:'Sunglasses and a red turtleneck. Leader of Sector V.', wiki:'knd.fandom.com'},
    {slug:'numbuh-5', name:'Numbuh 5', alt:['Abigail Lincoln'], note:'Kids Next Door', tier:'deep', clue:'Red cap worn low, blue jumper.', wiki:'knd.fandom.com'},

    /* ── WE BARE BEARS ── */
    {slug:'grizzly-bear', name:'Grizz', alt:['Grizzly','Grizzly Bear'], note:'We Bare Bears', tier:'deep', clue:'The brown one. Oldest brother, top of the stack.', wiki:'webarebears.fandom.com', page:'Grizzly Bear'},
    {slug:'panda-bear', name:'Panda', alt:['Panda Bear'], note:'We Bare Bears', tier:'deep', clue:'The anxious middle brother with a phone.', wiki:'webarebears.fandom.com', page:'Panda Bear'},
    {slug:'ice-bear', name:'Ice Bear', alt:[], note:'We Bare Bears', tier:'deep', clue:'Speaks in the third person. Ice Bear has a basement.', wiki:'webarebears.fandom.com'},

    /* ── ADVENTURE TIME ── */
    {slug:'ice-king', name:'Ice King', alt:[], note:'Adventure Time', tier:'mid', clue:'Blue skin, white beard, steals princesses.', wiki:'adventuretime.fandom.com'},
    {slug:'princess-bubblegum', name:'Princess Bubblegum', alt:['Bubblegum','PB'], note:'Adventure Time', tier:'mid', clue:'Ruler of the Candy Kingdom. Also a scientist.', wiki:'adventuretime.fandom.com'},
    {slug:'marceline', name:'Marceline', alt:['Marceline Abadeer','Marceline the Vampire Queen'], note:'Adventure Time', tier:'mid', clue:'Vampire queen with a bass made from an axe.', wiki:'adventuretime.fandom.com', page:'Marceline'},
    {slug:'bmo', name:'BMO', alt:['Beemo'], note:'Adventure Time', tier:'mid', clue:'Small living games console.', wiki:'adventuretime.fandom.com'},
    {slug:'lumpy-space-princess', name:'Lumpy Space Princess', alt:['LSP'], note:'Adventure Time', tier:'deep', clue:'Purple, lumpy, and furious about it.', wiki:'adventuretime.fandom.com'},

    /* ── STEVEN UNIVERSE ── */
    {slug:'garnet', name:'Garnet', alt:[], note:'Steven Universe', tier:'mid', clue:'Visor, afro, two gems in one.', wiki:'steven-universe.fandom.com'},
    {slug:'amethyst', name:'Amethyst', alt:[], note:'Steven Universe', tier:'deep', clue:'Purple, white hair, whip.', wiki:'steven-universe.fandom.com'},
    {slug:'pearl', name:'Pearl', alt:[], note:'Steven Universe', tier:'deep', clue:'Pointed nose, spear, deeply anxious.', wiki:'steven-universe.fandom.com'},
    {slug:'peridot', name:'Peridot', alt:[], note:'Steven Universe', tier:'deep', clue:'Small, green, triangular hair.', wiki:'steven-universe.fandom.com'},

    /* ── TEEN TITANS ── */
    {slug:'robin-tt', name:'Robin', alt:[], note:'Teen Titans', tier:'mid', clue:'Cape, mask, leader of the Titans.', wiki:'teentitans.fandom.com'},
    {slug:'cyborg-tt', name:'Cyborg', alt:[], note:'Teen Titans', tier:'mid', clue:'Half machine. Booyah.', wiki:'teentitans.fandom.com'},

    /* ── POWERPUFF GIRLS ── */
    {slug:'mojo-jojo', name:'Mojo Jojo', alt:[], note:'Powerpuff Girls', tier:'mid', clue:'Monkey in a cape with an enormous exposed brain.', wiki:'powerpuffgirls.fandom.com'},
    {slug:'professor-utonium', name:'Professor Utonium', alt:['Utonium'], note:'Powerpuff Girls', tier:'deep', clue:'Sugar, spice, everything nice, and Chemical X.', wiki:'powerpuffgirls.fandom.com'},

    /* ── DEXTER’S LABORATORY ── */
    {slug:'dee-dee', name:'Dee Dee', alt:[], note:'Dexter’s Laboratory', tier:'mid', clue:'Ooh, what does this button do?', wiki:'dexterslab.fandom.com'},
    {slug:'mandark', name:'Mandark', alt:[], note:'Dexter’s Laboratory', tier:'deep', clue:'Rival genius with the laugh.', wiki:'dexterslab.fandom.com'},

    /* ── REGULAR SHOW ── */
    {slug:'benson', name:'Benson', alt:[], note:'Regular Show', tier:'deep', clue:'Gumball machine who is always about to fire you.', wiki:'regularshow.fandom.com'},
    {slug:'pops-maellard', name:'Pops', alt:['Pops Maellard'], note:'Regular Show', tier:'deep', clue:'Enormous head, top hat, good show.', wiki:'regularshow.fandom.com', page:'Pops'},
    {slug:'muscle-man', name:'Muscle Man', alt:[], note:'Regular Show', tier:'deep', clue:'You know who else? My mom.', wiki:'regularshow.fandom.com'},
    {slug:'skips', name:'Skips', alt:[], note:'Regular Show', tier:'deep', clue:'Immortal yeti who skips everywhere.', wiki:'regularshow.fandom.com'},

    /* ── CHOWDER ── */
    {slug:'chowder', name:'Chowder', alt:[], note:'Chowder', tier:'deep', clue:'Purple apprentice cook who eats everything.', wiki:'chowder.fandom.com'},

    /* ── TOTAL DRAMA ── */
    {slug:'chris-mclean', name:'Chris McLean', alt:['Chris'], note:'Total Drama', tier:'deep', clue:'The host. Enjoys the suffering far too much.', wiki:'totaldrama.fandom.com', page:'Chris'},

    /* ── TMNT ── */
    {slug:'leonardo-tmnt', name:'Leonardo', alt:['Leo'], note:'TMNT', tier:'mid', clue:'Blue mask, two katana, the leader.', wiki:'tmnt.fandom.com'},
    {slug:'donatello-tmnt', name:'Donatello', alt:['Donnie'], note:'TMNT', tier:'mid', clue:'Purple mask and a bo staff. Does machines.', wiki:'tmnt.fandom.com'},
    {slug:'raphael-tmnt', name:'Raphael', alt:['Raph'], note:'TMNT', tier:'mid', clue:'Red mask, sai, permanent bad mood.', wiki:'tmnt.fandom.com'},
    {slug:'michelangelo-tmnt', name:'Michelangelo', alt:['Mikey'], note:'TMNT', tier:'mid', clue:'Orange mask, nunchucks, pizza.', wiki:'tmnt.fandom.com'},
    {slug:'splinter', name:'Splinter', alt:['Master Splinter'], note:'TMNT', tier:'mid', clue:'The rat who taught them.', wiki:'tmnt.fandom.com'},
    {slug:'shredder', name:'Shredder', alt:[], note:'TMNT', tier:'mid', clue:'Bladed armour and a grudge.', wiki:'tmnt.fandom.com'},
    {slug:'april-oneil', name:'April O’Neil', alt:['April'], note:'TMNT', tier:'deep', clue:'Yellow jumpsuit, camera, only human friend.', wiki:'tmnt.fandom.com', page:'April O\'Neil'},

    /* ── PEANUTS ── */
    {slug:'charlie-brown', name:'Charlie Brown', alt:[], note:'Peanuts', tier:'easy', clue:'Zigzag shirt. Good grief.', wiki:'peanuts.fandom.com'},
    {slug:'snoopy', name:'Snoopy', alt:[], note:'Peanuts', tier:'easy', clue:'Beagle on a red kennel roof.', wiki:'peanuts.fandom.com'},
    {slug:'woodstock', name:'Woodstock', alt:[], note:'Peanuts', tier:'mid', clue:'Small yellow bird, unreadable handwriting.', wiki:'peanuts.fandom.com'},
    {slug:'lucy-van-pelt', name:'Lucy van Pelt', alt:['Lucy'], note:'Peanuts', tier:'mid', clue:'Psychiatric help, five cents. Moves the football.', wiki:'peanuts.fandom.com'},
    {slug:'linus-van-pelt', name:'Linus van Pelt', alt:['Linus'], note:'Peanuts', tier:'mid', clue:'Blue blanket, waits for the Great Pumpkin.', wiki:'peanuts.fandom.com'},

    /* ── ANIMANIACS ── */
    {slug:'yakko-warner', name:'Yakko', alt:['Yakko Warner'], note:'Animaniacs', tier:'deep', clue:'The tall one in the water tower.', wiki:'animaniacs.fandom.com', page:'Yakko Warner'},
    {slug:'wakko-warner', name:'Wakko', alt:['Wakko Warner'], note:'Animaniacs', tier:'deep', clue:'Red cap, blue jumper, enormous appetite.', wiki:'animaniacs.fandom.com', page:'Wakko Warner'},
    {slug:'dot-warner', name:'Dot', alt:['Dot Warner'], note:'Animaniacs', tier:'deep', clue:'The sister. Call her Dottie and see what happens.', wiki:'animaniacs.fandom.com', page:'Dot Warner'},
    {slug:'pinky', name:'Pinky', alt:[], note:'Animaniacs', tier:'mid', clue:'Narf. The tall daft one.', wiki:'animaniacs.fandom.com'},
    {slug:'the-brain', name:'The Brain', alt:['Brain'], note:'Animaniacs', tier:'mid', clue:'Same thing we do every night — try to take over the world.', wiki:'animaniacs.fandom.com'},

    /* ── GARFIELD ── */
    {slug:'garfield', name:'Garfield', alt:[], note:'Garfield', tier:'easy', clue:'Orange, striped, hates Mondays, loves lasagne.', wiki:'garfield.fandom.com', page:'Garfield (character)'},
    {slug:'odie', name:'Odie', alt:[], note:'Garfield', tier:'mid', clue:'The dog. Tongue permanently out.', wiki:'garfield.fandom.com'},

    /* ── AVATAR ── */
    {slug:'katara', name:'Katara', alt:[], note:'Avatar', tier:'mid', clue:'Waterbender from the Southern Water Tribe.', wiki:'avatar.fandom.com'},
    {slug:'sokka', name:'Sokka', alt:[], note:'Avatar', tier:'mid', clue:'Boomerang, sarcasm, no bending at all.', wiki:'avatar.fandom.com'},
    {slug:'toph-beifong', name:'Toph', alt:['Toph Beifong'], note:'Avatar', tier:'mid', clue:'Blind earthbender who invented metalbending.', wiki:'avatar.fandom.com', page:'Toph Beifong'},
    {slug:'zuko', name:'Zuko', alt:[], note:'Avatar', tier:'mid', clue:'Scarred prince chasing his honour.', wiki:'avatar.fandom.com'},
    {slug:'iroh', name:'Iroh', alt:['Uncle Iroh'], note:'Avatar', tier:'deep', clue:'Tea, proverbs, and a terrifying past.', wiki:'avatar.fandom.com'},
    {slug:'appa', name:'Appa', alt:[], note:'Avatar', tier:'deep', clue:'Six-legged flying bison. Yip yip.', wiki:'avatar.fandom.com'},

    /* ── LEGEND OF KORRA ── */
    {slug:'korra', name:'Korra', alt:[], note:'Legend of Korra', tier:'mid', clue:'The Avatar after Aang.', wiki:'avatar.fandom.com'},

    /* ── RUGRATS ── */
    {slug:'susie-carmichael', name:'Susie Carmichael', alt:['Susie'], note:'Rugrats', tier:'deep', clue:'The neighbour who can actually sing.', wiki:'rugrats.fandom.com'},
    {slug:'reptar', name:'Reptar', alt:[], note:'Rugrats', tier:'mid', clue:'The green dinosaur on everything they own.', wiki:'rugrats.fandom.com', page:'Reptar (character)'},

    /* ── HEY ARNOLD! ── */
    {slug:'gerald-johanssen', name:'Gerald', alt:['Gerald Johanssen'], note:'Hey Arnold!', tier:'deep', clue:'High flat-top and the city’s best stories.', wiki:'heyarnold.fandom.com', page:'Gerald Johanssen'},

    /* ── FAIRLY ODDPARENTS ── */
    {slug:'wanda-fop', name:'Wanda', alt:[], note:'Fairly OddParents', tier:'mid', clue:'Pink hair, the sensible fairy.', wiki:'fairlyoddparents.fandom.com'},
    {slug:'vicky', name:'Vicky', alt:[], note:'Fairly OddParents', tier:'deep', clue:'The babysitter. Genuinely evil.', wiki:'fairlyoddparents.fandom.com'},

    /* ── GRAVITY FALLS ── */
    {slug:'grunkle-stan', name:'Grunkle Stan', alt:['Stan Pines'], note:'Gravity Falls', tier:'mid', clue:'Fez, eyepatch glasses, runs the Mystery Shack.', wiki:'gravityfalls.fandom.com', page:'Stan Pines'},
    {slug:'soos-ramirez', name:'Soos', alt:['Soos Ramirez'], note:'Gravity Falls', tier:'deep', clue:'Handyman in a question-mark shirt.', wiki:'gravityfalls.fandom.com', page:'Soos Ramirez'},

    /* ── PHINEAS AND FERB ── */
    {slug:'candace-flynn', name:'Candace Flynn', alt:['Candace'], note:'Phineas and Ferb', tier:'mid', clue:'Mom! Phineas and Ferb are making a title sequence!', wiki:'phineasandferb.fandom.com'},
    {slug:'doofenshmirtz', name:'Dr. Doofenshmirtz', alt:['Heinz Doofenshmirtz','Doof'], note:'Phineas and Ferb', tier:'mid', clue:'Behold! The ‑inator.', wiki:'phineasandferb.fandom.com', page:'Heinz Doofenshmirtz'},

    /* ── KIM POSSIBLE ── */
    {slug:'shego', name:'Shego', alt:[], note:'Kim Possible', tier:'deep', clue:'Green and black, glowing hands, all the good lines.', wiki:'kimpossible.fandom.com'},

    /* ── THE OWL HOUSE ── */
    {slug:'luz-noceda', name:'Luz Noceda', alt:['Luz'], note:'The Owl House', tier:'deep', clue:'Human girl who talked her way into a demon realm.', wiki:'theowlhouse.fandom.com'},

    /* ── THE SMURFS ── */
    {slug:'papa-smurf', name:'Papa Smurf', alt:[], note:'The Smurfs', tier:'mid', clue:'Red hat and trousers, white beard.', wiki:'smurfs.fandom.com'},
    {slug:'smurfette', name:'Smurfette', alt:[], note:'The Smurfs', tier:'mid', clue:'White dress, yellow hair.', wiki:'smurfs.fandom.com'},

    /* ── TRANSFORMERS ── */
    {slug:'optimus-prime', name:'Optimus Prime', alt:[], note:'Transformers', tier:'easy', clue:'Red and blue lorry. Autobots, roll out.', wiki:'transformers.fandom.com'},

    /* ── HE-MAN ── */
    {slug:'he-man', name:'He-Man', alt:[], note:'He-Man', tier:'mid', clue:'By the power of Grayskull.', wiki:'he-man.fandom.com'},
    {slug:'skeletor', name:'Skeletor', alt:[], note:'He-Man', tier:'mid', clue:'Purple hood, bare skull, endless schemes.', wiki:'he-man.fandom.com'},

    /* ── THUNDERCATS ── */
    {slug:'lion-o', name:'Lion-O', alt:[], note:'ThunderCats', tier:'deep', clue:'Red mane and the Sword of Omens.', wiki:'thundercats.fandom.com'},

    /* ── LOONEY TUNES ── */
    {slug:'pepe-le-pew', name:'Pepé Le Pew', alt:['Pepe Le Pew'], note:'Looney Tunes', tier:'mid', clue:'Skunk who will not take a hint.', wiki:'looneytunes.fandom.com', page:'Pepé Le Pew'},
    {slug:'lola-bunny', name:'Lola Bunny', alt:['Lola'], note:'Looney Tunes', tier:'mid', clue:'Blonde ears and a jump shot.', wiki:'looneytunes.fandom.com'},

    /* ── ARTHUR ── */
    {slug:'arthur-read', name:'Arthur', alt:['Arthur Read'], note:'Arthur', tier:'mid', clue:'Aardvark in a yellow jumper and round glasses.', wiki:'arthur.fandom.com', page:'Arthur Read'},

    /* ── MY HERO ACADEMIA ── */
    {slug:'izuku-midoriya', name:'Deku', alt:['Izuku Midoriya','Midoriya'], note:'My Hero Academia', tier:'mid', clue:'Green hair, freckles, broken fingers.', wiki:'myheroacademia.fandom.com', page:'Izuku Midoriya'},
    {slug:'all-might', name:'All Might', alt:[], note:'My Hero Academia', tier:'mid', clue:'Symbol of Peace. Two enormous fringe spikes.', wiki:'myheroacademia.fandom.com'},

    /* ── DEMON SLAYER ── */
    {slug:'tanjiro-kamado', name:'Tanjiro Kamado', alt:['Tanjiro'], note:'Demon Slayer', tier:'mid', clue:'Checked haori and a scar on his forehead.', wiki:'kimetsu-no-yaiba.fandom.com'},
    {slug:'nezuko-kamado', name:'Nezuko', alt:['Nezuko Kamado'], note:'Demon Slayer', tier:'mid', clue:'Bamboo muzzle, pink ribbon.', wiki:'kimetsu-no-yaiba.fandom.com', page:'Nezuko Kamado'},

    /* ── DEATH NOTE ── */
    {slug:'light-yagami', name:'Light Yagami', alt:['Light','Kira'], note:'Death Note', tier:'mid', clue:'Honour student with a notebook.', wiki:'deathnote.fandom.com'},

    /* ── FULLMETAL ALCHEMIST ── */
    {slug:'edward-elric', name:'Edward Elric', alt:['Ed Elric'], note:'Fullmetal Alchemist', tier:'mid', clue:'Red coat, metal arm, very touchy about his height.', wiki:'fma.fandom.com'},

    /* ── STUDIO GHIBLI ── */
    {slug:'totoro', name:'Totoro', alt:[], note:'Studio Ghibli', tier:'mid', clue:'Enormous grey forest spirit at a bus stop.', wiki:'ghibli.fandom.com'},
    {slug:'no-face', name:'No-Face', alt:['Kaonashi'], note:'Studio Ghibli', tier:'deep', clue:'White mask, black body, swallows everything.', wiki:'ghibli.fandom.com'}
  ]
});
