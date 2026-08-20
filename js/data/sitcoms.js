/* ══════════════════════════════════════════════════════════════
   CATEGORY: SITCOM CHARACTERS

   Name the character, not the show — a show's own wiki page leads with
   its logo, which has the answer written across it. Characters it is.

   Each answer carries its own `wiki`, because sitcom characters live on
   one wiki per show. `show` is context for the host, not an answer.
   Artwork: node tools/fetch-wiki-images.js sitcoms
   ══════════════════════════════════════════════════════════════ */
window.DHD_CATEGORIES = window.DHD_CATEGORIES || [];
window.DHD_CATEGORIES.push({
  id: 'sitcoms',
  name: 'Sitcom Characters',
  blurb: 'Name the character. The show is the easy half.',
  items: [
    /* ── THE OFFICE ── */
    {slug:'michael-scott',   name:'Michael Scott',   alt:['Steve Carell'],      show:'The Office',        tier:'easy', clue:'World\'s Best Boss, on a mug he bought himself.',      wiki:'theoffice.fandom.com'},
    {slug:'dwight-schrute',  name:'Dwight Schrute',  alt:['Dwight'],            show:'The Office',        tier:'easy', clue:'Assistant to the Regional Manager. Beets, bears, Battlestar.', wiki:'theoffice.fandom.com'},
    {slug:'jim-halpert',     name:'Jim Halpert',     alt:['Jim','John Krasinski'],show:'The Office',      tier:'easy', clue:'Stapler, jelly, and a look straight down the camera.',  wiki:'theoffice.fandom.com'},
    {slug:'pam-beesly',      name:'Pam Beesly',      alt:['Pam'],               show:'The Office',        tier:'easy', clue:'Receptionist who married the guy at the desk opposite.', wiki:'theoffice.fandom.com'},
    {slug:'kevin-malone',    name:'Kevin Malone',    alt:['Kevin'],             show:'The Office',        tier:'mid',  clue:'Accountant. Famous chili, carried in a pot.',           wiki:'theoffice.fandom.com'},
    {slug:'creed-bratton',   name:'Creed Bratton',   alt:['Creed'],             show:'The Office',        tier:'mid',  clue:'Quality assurance. Nobody knows what he actually does.',wiki:'theoffice.fandom.com'},
    {slug:'stanley-hudson',  name:'Stanley Hudson',  alt:['Stanley'],           show:'The Office',        tier:'mid',  clue:'Crossword, pretzel day, and nothing else.',             wiki:'theoffice.fandom.com'},
    {slug:'angela-martin',   name:'Angela Martin',   alt:['Angela'],            show:'The Office',        tier:'mid',  clue:'Head of the Party Planning Committee. Many cats.',      wiki:'theoffice.fandom.com'},
    {slug:'andy-bernard',    name:'Andy Bernard',    alt:['Andy','The Nard Dog'],show:'The Office',       tier:'mid',  clue:'Cornell graduate. He will mention it.',                 wiki:'theoffice.fandom.com'},
    {slug:'toby-flenderson', name:'Toby Flenderson', alt:['Toby'],              show:'The Office',        tier:'deep', clue:'HR. The very worst thing about the whole place.',       wiki:'theoffice.fandom.com'},

    /* ── FRIENDS ── */
    {slug:'ross-geller',     name:'Ross Geller',     alt:['Ross','David Schwimmer'],show:'Friends',       tier:'easy', clue:'Palaeontologist. They were on a break.',                wiki:'friends.fandom.com'},
    {slug:'rachel-green',    name:'Rachel Green',    alt:['Rachel','Jennifer Aniston'],show:'Friends',    tier:'easy', clue:'Ran out on a wedding, ended up making coffee.',         wiki:'friends.fandom.com'},
    {slug:'monica-geller',   name:'Monica Geller',   alt:['Monica','Courteney Cox'],show:'Friends',       tier:'easy', clue:'Chef. The apartment is spotless and it is not up for discussion.', wiki:'friends.fandom.com'},
    {slug:'chandler-bing',   name:'Chandler Bing',   alt:['Chandler','Matthew Perry'],show:'Friends',     tier:'easy', clue:'Could he BE any more sarcastic.',                       wiki:'friends.fandom.com'},
    {slug:'joey-tribbiani',  name:'Joey Tribbiani',  alt:['Joey','Matt LeBlanc'],show:'Friends',          tier:'easy', clue:'How you doin\'. Does not share food.',                   wiki:'friends.fandom.com'},
    {slug:'phoebe-buffay',   name:'Phoebe Buffay',   alt:['Phoebe','Lisa Kudrow'],show:'Friends',         tier:'easy', clue:'Smelly Cat. Also a massage therapist.',                  wiki:'friends.fandom.com'},
    {slug:'gunther',         name:'Gunther',         alt:[],                    show:'Friends',           tier:'deep', clue:'Bleached hair behind the Central Perk counter, quietly in love.', wiki:'friends.fandom.com'},

    /* ── SEINFELD ── */
    {slug:'jerry-seinfeld',  name:'Jerry Seinfeld',  alt:['Jerry'],             show:'Seinfeld',          tier:'easy', clue:'Comedian in a very clean apartment.',                   wiki:'seinfeld.fandom.com'},
    {slug:'george-costanza', name:'George Costanza', alt:['George'],            show:'Seinfeld',          tier:'easy', clue:'Short, stocky, slow-witted, bald. His words.',          wiki:'seinfeld.fandom.com'},
    {slug:'cosmo-kramer',    name:'Kramer',          alt:['Cosmo Kramer'],      show:'Seinfeld',          tier:'easy', clue:'Enters by sliding through the door.',                   wiki:'seinfeld.fandom.com'},
    {slug:'elaine-benes',    name:'Elaine Benes',    alt:['Elaine'],            show:'Seinfeld',          tier:'easy', clue:'Get OUT. Also a truly terrible dancer.',                wiki:'seinfeld.fandom.com'},
    {slug:'newman',          name:'Newman',          alt:[],                    show:'Seinfeld',          tier:'mid',  clue:'Postal worker across the hall. Hello, Jerry.',          wiki:'seinfeld.fandom.com'},
    {slug:'frank-costanza',  name:'Frank Costanza',  alt:[],                    show:'Seinfeld',          tier:'deep', clue:'Serenity now. Inventor of Festivus.',                   wiki:'seinfeld.fandom.com'},

    /* ── THE SIMPSONS ── */
    {slug:'homer-simpson',   name:'Homer Simpson',   alt:['Homer'],             show:'The Simpsons',      tier:'easy', clue:'Safety inspector, sector 7-G. D\'oh.',                   wiki:'simpsons.fandom.com'},
    {slug:'marge-simpson',   name:'Marge Simpson',   alt:['Marge'],             show:'The Simpsons',      tier:'easy', clue:'Blue tower of hair and infinite patience.',             wiki:'simpsons.fandom.com'},
    {slug:'bart-simpson',    name:'Bart Simpson',    alt:['Bart'],              show:'The Simpsons',      tier:'easy', clue:'Eat my shorts.',                                        wiki:'simpsons.fandom.com'},
    {slug:'lisa-simpson',    name:'Lisa Simpson',    alt:['Lisa'],              show:'The Simpsons',      tier:'easy', clue:'Saxophone, vegetarian, smartest one in Springfield.',   wiki:'simpsons.fandom.com'},
    {slug:'mr-burns',        name:'Mr. Burns',       alt:['Montgomery Burns','Burns'],show:'The Simpsons',tier:'easy', clue:'Excellent. Releases the hounds.',                        wiki:'simpsons.fandom.com'},
    {slug:'ned-flanders',    name:'Ned Flanders',    alt:['Flanders'],          show:'The Simpsons',      tier:'easy', clue:'Okily dokily, neighbourino.',                           wiki:'simpsons.fandom.com'},
    {slug:'krusty-the-clown',name:'Krusty the Clown',alt:['Krusty'],            show:'The Simpsons',      tier:'mid',  clue:'Green hair, hacking cough, endless merchandise.',       wiki:'simpsons.fandom.com'},
    {slug:'milhouse',        name:'Milhouse',        alt:['Milhouse Van Houten'],show:'The Simpsons',     tier:'mid',  clue:'Blue hair, thick glasses, everything is coming up him.',wiki:'simpsons.fandom.com'},
    {slug:'ralph-wiggum',    name:'Ralph Wiggum',    alt:['Ralph'],             show:'The Simpsons',      tier:'mid',  clue:'Me fail English? That\'s unpossible.',                   wiki:'simpsons.fandom.com'},
    {slug:'moe-szyslak',     name:'Moe Szyslak',     alt:['Moe'],               show:'The Simpsons',      tier:'mid',  clue:'Runs the tavern, takes the prank calls badly.',         wiki:'simpsons.fandom.com'},
    {slug:'principal-skinner',name:'Principal Skinner',alt:['Seymour Skinner','Skinner'],show:'The Simpsons',tier:'deep',clue:'Steamed hams. Lives with his mother.',                wiki:'simpsons.fandom.com'},

    /* ── PARKS AND RECREATION ── */
    {slug:'leslie-knope',    name:'Leslie Knope',    alt:['Leslie','Amy Poehler'],show:'Parks and Recreation',tier:'easy',clue:'Pawnee Parks Department. Waffles and binders.',      wiki:'parksandrecreation.fandom.com'},
    {slug:'ron-swanson',     name:'Ron Swanson',     alt:['Ron','Nick Offerman'],show:'Parks and Recreation',tier:'easy',clue:'Moustache, breakfast meats, hates government.',       wiki:'parksandrecreation.fandom.com'},
    {slug:'andy-dwyer',      name:'Andy Dwyer',      alt:['Andy','Chris Pratt'],show:'Parks and Recreation',tier:'mid', clue:'Shoeshine stand, Mouse Rat, alter ego Burt Macklin.',  wiki:'parksandrecreation.fandom.com'},
    {slug:'april-ludgate',   name:'April Ludgate',   alt:['April','Aubrey Plaza'],show:'Parks and Recreation',tier:'mid',clue:'Intern who would rather you did not speak to her.',   wiki:'parksandrecreation.fandom.com'},
    {slug:'tom-haverford',   name:'Tom Haverford',   alt:['Tom','Aziz Ansari'],show:'Parks and Recreation',tier:'mid',  clue:'Treat yo self. Every business idea fails.',            wiki:'parksandrecreation.fandom.com'},
    {slug:'ben-wyatt',       name:'Ben Wyatt',       alt:['Ben'],               show:'Parks and Recreation',tier:'deep',clue:'State auditor. Once bankrupted a town at eighteen.',   wiki:'parksandrecreation.fandom.com'},

    /* ── HOW I MET YOUR MOTHER ── */
    {slug:'barney-stinson',  name:'Barney Stinson',  alt:['Barney','Neil Patrick Harris'],show:'How I Met Your Mother',tier:'easy',clue:'Suit up. Legen — wait for it — dary.',       wiki:'howimetyourmother.fandom.com'},
    {slug:'ted-mosby',       name:'Ted Mosby',       alt:['Ted'],               show:'How I Met Your Mother',tier:'mid', clue:'Architect telling his kids an extremely long story.',  wiki:'howimetyourmother.fandom.com'},
    {slug:'marshall-eriksen',name:'Marshall Eriksen',alt:['Marshall'],          show:'How I Met Your Mother',tier:'mid', clue:'Enormous Minnesotan lawyer. Lawyered.',                wiki:'howimetyourmother.fandom.com'},
    {slug:'robin-scherbatsky',name:'Robin Scherbatsky',alt:['Robin'],           show:'How I Met Your Mother',tier:'mid', clue:'Canadian news anchor, formerly a teen pop star.',      wiki:'howimetyourmother.fandom.com'},
    {slug:'lily-aldrin',     name:'Lily Aldrin',     alt:['Lily'],              show:'How I Met Your Mother',tier:'deep',clue:'Kindergarten teacher with a shopping problem.',        wiki:'howimetyourmother.fandom.com'},

    /* ── THE BIG BANG THEORY ── */
    {slug:'sheldon-cooper',  name:'Sheldon Cooper',  alt:['Sheldon','Jim Parsons'],show:'The Big Bang Theory',tier:'easy',clue:'That is his spot. Bazinga.',                          wiki:'bigbangtheory.fandom.com'},
    {slug:'leonard-hofstadter',name:'Leonard Hofstadter',alt:['Leonard'],       show:'The Big Bang Theory',tier:'mid',  clue:'Experimental physicist, glasses, lactose intolerant.', wiki:'bigbangtheory.fandom.com'},
    {slug:'penny-bbt',       name:'Penny',           alt:[],                    show:'The Big Bang Theory',tier:'mid',  clue:'Across the hall. Cheesecake Factory.',                  wiki:'bigbangtheory.fandom.com'},
    {slug:'howard-wolowitz', name:'Howard Wolowitz', alt:['Howard'],            show:'The Big Bang Theory',tier:'mid',  clue:'Engineer, bowl cut, belt buckles, been to space.',      wiki:'bigbangtheory.fandom.com'},
    {slug:'raj-koothrappali',name:'Raj Koothrappali',alt:['Raj'],               show:'The Big Bang Theory',tier:'deep', clue:'Astrophysicist who could not speak to women sober.',    wiki:'bigbangtheory.fandom.com'},

    /* ── BROOKLYN NINE-NINE ── */
    {slug:'jake-peralta',    name:'Jake Peralta',    alt:['Jake','Andy Samberg'],show:'Brooklyn Nine-Nine',tier:'easy', clue:'Noice. Toit. Cool cool cool cool cool.',               wiki:'brooklyn99.fandom.com'},
    {slug:'captain-holt',    name:'Captain Holt',    alt:['Raymond Holt','Holt'],show:'Brooklyn Nine-Nine',tier:'easy', clue:'Deadpan captain. Owns a dog named Cheddar.',           wiki:'brooklyn99.fandom.com'},
    {slug:'amy-santiago',    name:'Amy Santiago',    alt:['Amy'],               show:'Brooklyn Nine-Nine',tier:'mid',  clue:'Binders, labels, and an unhealthy love of rules.',       wiki:'brooklyn99.fandom.com'},
    {slug:'terry-jeffords',  name:'Terry Jeffords',  alt:['Terry'],             show:'Brooklyn Nine-Nine',tier:'mid',  clue:'Terry loves yogurt. Enormous arms.',                     wiki:'brooklyn99.fandom.com'},
    {slug:'rosa-diaz',       name:'Rosa Diaz',       alt:['Rosa'],              show:'Brooklyn Nine-Nine',tier:'mid',  clue:'Leather jacket, motorbike, tells you nothing.',          wiki:'brooklyn99.fandom.com'},
    {slug:'charles-boyle',   name:'Charles Boyle',   alt:['Boyle'],             show:'Brooklyn Nine-Nine',tier:'deep', clue:'Food blogger. Devoted to his partner to an alarming degree.', wiki:'brooklyn99.fandom.com'},
    {slug:'gina-linetti',    name:'Gina Linetti',    alt:['Gina'],              show:'Brooklyn Nine-Nine',tier:'deep', clue:'Civilian administrator. The human form of the 100 emoji.',wiki:'brooklyn99.fandom.com'},

    /* ── IT'S ALWAYS SUNNY ── */
    {slug:'charlie-kelly',   name:'Charlie Kelly',   alt:['Charlie'],           show:"It's Always Sunny in Philadelphia",tier:'mid', clue:'Illiterate, eats cat food, an expert at Charlie Work.', wiki:'itsalwayssunny.fandom.com',
      image:'https://static.wikia.nocookie.net/itsalwayssunny/images/f/f0/Charlie.jpg/revision/latest/scale-to-width-down/700'},
    {slug:'dennis-reynolds', name:'Dennis Reynolds', alt:['Dennis'],            show:"It's Always Sunny in Philadelphia",tier:'mid', clue:'He is a five-star man. The implication.',   wiki:'itsalwayssunny.fandom.com',
      image:'https://static.wikia.nocookie.net/itsalwayssunny/images/7/76/Dennis.jpg/revision/latest/scale-to-width-down/700'},
    {slug:'frank-reynolds',  name:'Frank Reynolds',  alt:['Frank','Danny DeVito'],show:"It's Always Sunny in Philadelphia",tier:'mid',clue:'Sleeps on a pull-out couch with Charlie. Rum ham.', wiki:'itsalwayssunny.fandom.com',
      image:'https://static.wikia.nocookie.net/itsalwayssunny/images/d/da/Frank.jpg/revision/latest/scale-to-width-down/700'},
    {slug:'mac-sunny',       name:'Mac',             alt:['Ronald McDonald (Mac)'],show:"It's Always Sunny in Philadelphia",tier:'deep',clue:'Head of security at a bar with no security problem.', wiki:'itsalwayssunny.fandom.com',
      image:'https://static.wikia.nocookie.net/itsalwayssunny/images/2/23/Mac.jpg/revision/latest/scale-to-width-down/700'},
    {slug:'dee-reynolds',    name:'Dee Reynolds',    alt:['Dee','Sweet Dee'],   show:"It's Always Sunny in Philadelphia",tier:'deep',clue:'Aspiring actress. The gang calls her a bird.', wiki:'itsalwayssunny.fandom.com',
      image:'https://static.wikia.nocookie.net/itsalwayssunny/images/3/32/Sweetdee.jpg/revision/latest/scale-to-width-down/700'},

    /* ── SOUTH PARK ── */
    {slug:'eric-cartman',    name:'Eric Cartman',    alt:['Cartman'],           show:'South Park',        tier:'easy', clue:'Respect my authoritah.',                                wiki:'southpark.fandom.com'},
    {slug:'stan-marsh',      name:'Stan Marsh',      alt:['Stan'],              show:'South Park',        tier:'easy', clue:'Blue hat with a red pom-pom. The normal one.',           wiki:'southpark.fandom.com'},
    {slug:'kyle-broflovski', name:'Kyle Broflovski', alt:['Kyle'],              show:'South Park',        tier:'easy', clue:'Green ushanka. Cartman\'s permanent target.',            wiki:'southpark.fandom.com'},
    {slug:'kenny-mccormick', name:'Kenny McCormick', alt:['Kenny'],             show:'South Park',        tier:'easy', clue:'Orange parka. You can\'t make out a word.',              wiki:'southpark.fandom.com'},
    {slug:'butters-stotch',  name:'Butters',         alt:['Butters Stotch','Leopold Stotch'],show:'South Park',tier:'mid',clue:'Oh hamburgers. Grounded again.',                      wiki:'southpark.fandom.com'},
    {slug:'randy-marsh',     name:'Randy Marsh',     alt:['Randy'],             show:'South Park',        tier:'mid',  clue:'Geologist, Tegridy Farms, dad of the year he is not.',  wiki:'southpark.fandom.com'},

    /* ── FAMILY GUY ── */
    {slug:'peter-griffin',   name:'Peter Griffin',   alt:['Peter'],             show:'Family Guy',        tier:'easy', clue:'Green trousers, white shirt, hehehehe.',                wiki:'familyguy.fandom.com'},
    {slug:'stewie-griffin',  name:'Stewie Griffin',  alt:['Stewie'],            show:'Family Guy',        tier:'easy', clue:'Football-shaped head, English accent, wants his mother dead.', wiki:'familyguy.fandom.com'},
    {slug:'brian-griffin',   name:'Brian Griffin',   alt:['Brian'],             show:'Family Guy',        tier:'easy', clue:'The dog. Writes a novel nobody reads. Drinks martinis.',wiki:'familyguy.fandom.com'},
    {slug:'lois-griffin',    name:'Lois Griffin',    alt:['Lois'],              show:'Family Guy',        tier:'mid',  clue:'Red hair, piano lessons, married far below herself.',   wiki:'familyguy.fandom.com'},
    {slug:'glenn-quagmire',  name:'Quagmire',        alt:['Glenn Quagmire'],    show:'Family Guy',        tier:'mid',  clue:'Giggity.',                                              wiki:'familyguy.fandom.com'},
    {slug:'meg-griffin',     name:'Meg Griffin',     alt:['Meg'],               show:'Family Guy',        tier:'mid',  clue:'Pink hat, glasses, shut up Meg.',                       wiki:'familyguy.fandom.com'},

    /* ── KING OF THE HILL ── */
    {slug:'hank-hill',       name:'Hank Hill',       alt:['Hank'],              show:'King of the Hill',  tier:'mid',  clue:'Propane and propane accessories. I tell you hwhat.',    wiki:'kingofthehill.fandom.com'},
    {slug:'bobby-hill',      name:'Bobby Hill',      alt:['Bobby'],             show:'King of the Hill',  tier:'mid',  clue:'That boy ain\'t right.',                                wiki:'kingofthehill.fandom.com'},
    {slug:'dale-gribble',    name:'Dale Gribble',    alt:['Dale'],              show:'King of the Hill',  tier:'deep', clue:'Sunglasses, cap, exterminator, deep conspiracy theorist.',wiki:'kingofthehill.fandom.com'},
    {slug:'boomhauer',       name:'Boomhauer',       alt:[],                    show:'King of the Hill',  tier:'deep', clue:'Dang ol\' talk so fast man, you can\'t tell what he\'s sayin\'.', wiki:'kingofthehill.fandom.com'},

    /* ── BOB'S BURGERS ── */
    {slug:'bob-belcher',     name:'Bob Belcher',     alt:['Bob'],               show:"Bob's Burgers",     tier:'mid',  clue:'Moustache, apron, burger of the day.',                  wiki:'bobs-burgers.fandom.com'},
    {slug:'louise-belcher',  name:'Louise Belcher',  alt:['Louise'],            show:"Bob's Burgers",     tier:'mid',  clue:'Pink bunny ears. Never takes them off.',                wiki:'bobs-burgers.fandom.com'},
    {slug:'tina-belcher',    name:'Tina Belcher',    alt:['Tina'],              show:"Bob's Burgers",     tier:'mid',  clue:'Glasses, blue skirt, and a long groan.',                wiki:'bobs-burgers.fandom.com'},
    {slug:'gene-belcher',    name:'Gene Belcher',    alt:['Gene'],              show:"Bob's Burgers",     tier:'deep', clue:'Yellow shirt and a keyboard he will not stop playing.', wiki:'bobs-burgers.fandom.com'},
    {slug:'linda-belcher',   name:'Linda Belcher',   alt:['Linda'],             show:"Bob's Burgers",     tier:'deep', clue:'Alriiiight. Red glasses and a glass of wine.',          wiki:'bobs-burgers.fandom.com'},

    /* ── FUTURAMA ── */
    {slug:'bender',          name:'Bender',          alt:['Bender Rodriguez'],  show:'Futurama',          tier:'easy', clue:'Bite my shiny metal ass.',                              wiki:'futurama.fandom.com'},
    {slug:'philip-fry',      name:'Fry',             alt:['Philip J. Fry'],     show:'Futurama',          tier:'mid',  clue:'Delivery boy, frozen in 1999, own grandfather.',        wiki:'futurama.fandom.com'},
    {slug:'turanga-leela',   name:'Leela',           alt:['Turanga Leela'],     show:'Futurama',          tier:'mid',  clue:'One eye, purple ponytail, captain of the ship.',        wiki:'futurama.fandom.com'},
    {slug:'zoidberg',        name:'Zoidberg',        alt:['Dr. Zoidberg'],      show:'Futurama',          tier:'mid',  clue:'Lobster doctor. Why not Zoidberg?',                     wiki:'futurama.fandom.com'},
    {slug:'professor-farnsworth',name:'Professor Farnsworth',alt:['Farnsworth'],show:'Futurama',          tier:'deep', clue:'Good news, everyone.',                                  wiki:'futurama.fandom.com'},

    /* ── CHEERS & FRASIER ── */
    {slug:'sam-malone',      name:'Sam Malone',      alt:['Sam'],               show:'Cheers',            tier:'mid',  clue:'Ex-ballplayer behind the bar where everybody knows your name.', wiki:'cheers.fandom.com'},
    {slug:'norm-peterson',   name:'Norm Peterson',   alt:['Norm'],              show:'Cheers',            tier:'mid',  clue:'The whole bar shouts his name when he walks in.',       wiki:'cheers.fandom.com'},
    {slug:'cliff-clavin',    name:'Cliff Clavin',    alt:['Cliff'],             show:'Cheers',            tier:'deep', clue:'Postman with a little-known fact for every occasion.',  wiki:'cheers.fandom.com',
      image:'https://static.wikia.nocookie.net/cheers/images/a/a0/Cliffclavin.jpg/revision/latest/scale-to-width-down/700'},
    {slug:'frasier-crane',   name:'Frasier Crane',   alt:['Frasier'],           show:'Frasier',           tier:'mid',  clue:'Radio psychiatrist. I\'m listening.',                    wiki:'frasier.fandom.com',
      image:'https://static.wikia.nocookie.net/frasier/images/d/d5/Dr_Frasier_Crane.jpg/revision/latest/scale-to-width-down/700'},
    {slug:'niles-crane',     name:'Niles Crane',     alt:['Niles'],             show:'Frasier',           tier:'deep', clue:'The fussier brother. Wipes the chair before sitting.',  wiki:'frasier.fandom.com'},
    {slug:'martin-crane',    name:'Martin Crane',    alt:['Martin'],            show:'Frasier',           tier:'deep', clue:'Ex-cop, cane, and that hideous armchair.',              wiki:'frasier.fandom.com'},

    /* ── MODERN FAMILY ── */
    {slug:'phil-dunphy',     name:'Phil Dunphy',     alt:['Phil'],              show:'Modern Family',     tier:'mid',  clue:'Realtor. Peerless dad jokes. Phil\'s-osophy.',           wiki:'modernfamily.fandom.com'},
    {slug:'gloria-delgado',  name:'Gloria',          alt:['Gloria Pritchett','Sofía Vergara'],show:'Modern Family',tier:'mid',clue:'Colombian, loud, and always right.',             wiki:'modernfamily.fandom.com'},
    {slug:'cameron-tucker',  name:'Cameron Tucker',  alt:['Cam'],               show:'Modern Family',     tier:'mid',  clue:'Farm boy, drama teacher, alter ego Fizbo the clown.',   wiki:'modernfamily.fandom.com'},
    {slug:'jay-pritchett',   name:'Jay Pritchett',   alt:['Jay'],               show:'Modern Family',     tier:'deep', clue:'Closet company, much younger wife, very dry.',          wiki:'modernfamily.fandom.com'},
    {slug:'claire-dunphy',   name:'Claire Dunphy',   alt:['Claire'],            show:'Modern Family',     tier:'deep', clue:'Wound tight, and the only adult in the house.',         wiki:'modernfamily.fandom.com'},

    /* ── COMMUNITY ── */
    {slug:'jeff-winger',     name:'Jeff Winger',     alt:['Jeff'],              show:'Community',         tier:'mid',  clue:'Disbarred lawyer who gives the speech at the end.',     wiki:'community-sitcom.fandom.com'},
    {slug:'abed-nadir',      name:'Abed Nadir',      alt:['Abed'],              show:'Community',         tier:'mid',  clue:'Cool. Cool cool cool. Narrates the show from inside it.',wiki:'community-sitcom.fandom.com'},
    {slug:'troy-barnes',     name:'Troy Barnes',     alt:['Troy'],              show:'Community',         tier:'deep', clue:'Former quarterback, air conditioning repair prodigy.',  wiki:'community-sitcom.fandom.com'},
    {slug:'dean-pelton',     name:'Dean Pelton',     alt:['The Dean'],          show:'Community',         tier:'deep', clue:'Any excuse for a costume. Deantastic.',                 wiki:'community-sitcom.fandom.com'},

    /* ── 30 ROCK ── */
    {slug:'liz-lemon',       name:'Liz Lemon',       alt:['Liz','Tina Fey'],    show:'30 Rock',           tier:'mid',  clue:'Head writer. Wants to go to there. Night cheese.',      wiki:'30rock.fandom.com'},
    {slug:'jack-donaghy',    name:'Jack Donaghy',    alt:['Jack','Alec Baldwin'],show:'30 Rock',          tier:'mid',  clue:'VP of East Coast Television and Microwave Oven Programming.', wiki:'30rock.fandom.com'},
    {slug:'tracy-jordan',    name:'Tracy Jordan',    alt:['Tracy'],             show:'30 Rock',           tier:'deep', clue:'Unhinged film star. Live every week like it\'s Shark Week.', wiki:'30rock.fandom.com'},
    {slug:'kenneth-parcell', name:'Kenneth Parcell', alt:['Kenneth'],           show:'30 Rock',           tier:'deep', clue:'The page. Possibly immortal.',                          wiki:'30rock.fandom.com'},

    /* ── ARRESTED DEVELOPMENT ── */
    {slug:'michael-bluth',   name:'Michael Bluth',   alt:['Michael'],           show:'Arrested Development',tier:'mid', clue:'The one son who had no choice but to keep them together.', wiki:'arresteddevelopment.fandom.com'},
    {slug:'gob-bluth',       name:'GOB',             alt:['Gob Bluth','George Oscar Bluth'],show:'Arrested Development',tier:'deep',clue:'Illusions, Michael. And a segway.',        wiki:'arresteddevelopment.fandom.com'},
    {slug:'tobias-funke',    name:'Tobias Fünke',    alt:['Tobias'],            show:'Arrested Development',tier:'deep',clue:'Analrapist. Never nude. Blue paint.',                  wiki:'arresteddevelopment.fandom.com'},
    {slug:'buster-bluth',    name:'Buster Bluth',    alt:['Buster'],            show:'Arrested Development',tier:'deep',clue:'Mother\'s boy who lost a hand to a seal.',              wiki:'arresteddevelopment.fandom.com'},

    /* ── SCRUBS ── */
    {slug:'jd-scrubs',       name:'J.D.',            alt:['John Dorian','JD'],  show:'Scrubs',            tier:'mid',  clue:'Narrates everything, daydreams constantly.',            wiki:'scrubs.fandom.com'},
    {slug:'dr-cox',          name:'Dr. Cox',         alt:['Perry Cox','Cox'],   show:'Scrubs',            tier:'mid',  clue:'Rants in paragraphs. Calls him girls\' names.',          wiki:'scrubs.fandom.com'},
    {slug:'turk',            name:'Turk',            alt:['Christopher Turk'],  show:'Scrubs',            tier:'deep', clue:'Surgeon, and one half of the greatest bromance on TV.', wiki:'scrubs.fandom.com'},
    {slug:'janitor-scrubs',  name:'The Janitor',     alt:['Janitor'],           show:'Scrubs',            tier:'deep', clue:'Torments one doctor exclusively. Name never confirmed.',wiki:'scrubs.fandom.com'},

    /* ── NEW GIRL ── */
    {slug:'jess-day',        name:'Jess Day',        alt:['Jess','Zooey Deschanel'],show:'New Girl',      tier:'mid',  clue:'Teacher who moved in with three men off an ad.',        wiki:'newgirl.fandom.com'},
    {slug:'nick-miller',     name:'Nick Miller',     alt:['Nick'],              show:'New Girl',          tier:'mid',  clue:'Bartender. Owns a box of dead things and no bank account.', wiki:'newgirl.fandom.com'},
    {slug:'schmidt',         name:'Schmidt',         alt:[],                    show:'New Girl',          tier:'mid',  clue:'That goes in the douchebag jar.',                       wiki:'newgirl.fandom.com'},
    {slug:'winston-bishop',  name:'Winston Bishop',  alt:['Winston'],           show:'New Girl',          tier:'deep', clue:'Terrible at pranks. Loves a cat named Ferguson.',       wiki:'newgirl.fandom.com'},

    /* ── FRESH PRINCE & MALCOLM ── */
    {slug:'carlton-banks',   name:'Carlton Banks',   alt:['Carlton'],           show:'The Fresh Prince of Bel-Air',tier:'mid',clue:'Sweater vest, and that dance to Tom Jones.',      wiki:'freshprince.fandom.com'},
    {slug:'uncle-phil',      name:'Uncle Phil',      alt:['Philip Banks'],      show:'The Fresh Prince of Bel-Air',tier:'deep',clue:'Judge. Throws Jazz out of the front door weekly.',wiki:'freshprince.fandom.com'},
    {slug:'malcolm',         name:'Malcolm',         alt:['Frankie Muniz'],     show:'Malcolm in the Middle',tier:'mid', clue:'Genius kid who talks to the camera about his family.', wiki:'malcolminthemiddle.fandom.com'},
    {slug:'hal-malcolm',     name:'Hal',             alt:['Bryan Cranston'],    show:'Malcolm in the Middle',tier:'deep',clue:'The dad. Every hobby taken to a frightening extreme.', wiki:'malcolminthemiddle.fandom.com'},

    /* ── GOLDEN GIRLS, MARRIED WITH CHILDREN ── */
    {slug:'sophia-petrillo', name:'Sophia Petrillo', alt:['Sophia'],            show:'The Golden Girls',  tier:'deep', clue:'Picture it: Sicily. Handbag over the arm.',             wiki:'goldengirls.fandom.com'},
    {slug:'blanche-devereaux',name:'Blanche Devereaux',alt:['Blanche'],         show:'The Golden Girls',  tier:'deep', clue:'Southern belle who owns the house and the room.',       wiki:'goldengirls.fandom.com'},
    {slug:'dorothy-zbornak', name:'Dorothy Zbornak', alt:['Dorothy'],           show:'The Golden Girls',  tier:'deep', clue:'Substitute teacher. Withering stare.',                  wiki:'goldengirls.fandom.com'},
    {slug:'al-bundy',        name:'Al Bundy',        alt:['Al'],                show:'Married... with Children',tier:'deep',clue:'Shoe salesman, hand in waistband, four touchdowns in one game.', wiki:'marriedwithchildren.fandom.com'},

    /* ── SCHITT'S CREEK, TED LASSO, ABBOTT ── */
    {slug:'moira-rose',      name:'Moira Rose',      alt:['Moira','Catherine O\'Hara'],show:"Schitt's Creek",tier:'mid',clue:'Wigs, an unplaceable accent, and bébé.',               wiki:'schitts-creek.fandom.com'},
    {slug:'david-rose',      name:'David Rose',      alt:['David','Dan Levy'],  show:"Schitt's Creek",    tier:'mid',  clue:'Black jumpers, big sweaters, ew.',                      wiki:'schitts-creek.fandom.com'},
    {slug:'alexis-rose',     name:'Alexis Rose',     alt:['Alexis'],            show:"Schitt's Creek",    tier:'deep', clue:'A little bit Alexis. Hand flick.',                      wiki:'schitts-creek.fandom.com'},
    {slug:'ted-lasso',       name:'Ted Lasso',       alt:['Jason Sudeikis'],    show:'Ted Lasso',         tier:'mid',  clue:'American football coach managing an English club. Believe.', wiki:'tedlasso.fandom.com'},
    {slug:'roy-kent',        name:'Roy Kent',        alt:['Roy'],               show:'Ted Lasso',         tier:'mid',  clue:'He\'s here, he\'s there, he\'s every-bleeding-where.',    wiki:'tedlasso.fandom.com'},
    {slug:'rebecca-welton',  name:'Rebecca Welton',  alt:['Rebecca'],           show:'Ted Lasso',         tier:'deep', clue:'Club owner who hired him to make it fail.',             wiki:'tedlasso.fandom.com'},
    {slug:'janine-teagues',  name:'Janine Teagues',  alt:['Janine'],            show:'Abbott Elementary', tier:'deep', clue:'Second-grade teacher with relentless optimism.',        wiki:'abbottelementary.fandom.com'},
    {slug:'ava-coleman',     name:'Ava Coleman',     alt:['Ava'],               show:'Abbott Elementary', tier:'deep', clue:'Principal who got the job through the superintendent.', wiki:'abbottelementary.fandom.com'}
  ]
});
