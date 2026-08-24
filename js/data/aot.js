/* ══════════════════════════════════════════════════════════════
   CATEGORY: ATTACK ON TITAN
   Characters, the nine Titans, and the things the series is known
   for. All from the Attack on Titan wiki.
   Anime stills only, pinned page by page. The wiki keeps a separate
   article per character for the anime, and its lead image is a screen
   grab rather than a manga panel — but they are spelled differently
   there (Eren Jaeger, Mikasa Ackermann, Sasha Braus), which is why the
   page is named explicitly on every single entry rather than left to
   resolve by name.

   Artwork: node tools/fetch-wiki-images.js aot
   ══════════════════════════════════════════════════════════════ */
window.DHD_CATEGORIES = window.DHD_CATEGORIES || [];
window.DHD_CATEGORIES.push({
  id: 'aot',
  name: 'Attack on Titan',
  blurb: 'Walls, titans, and everyone who lied to you.',
  wiki: 'attackontitan.fandom.com',
  items: [
    /* ── EASY: anyone who watched it ── */
    {slug:'eren-yeager',    name:'Eren Yeager',    alt:['Eren','Eren Jaeger'],  note:'',        tier:'easy', clue:'Started it all shouting about freedom.', page:'Eren Jaeger (Anime)'},
    {slug:'mikasa-ackerman',name:'Mikasa Ackerman',alt:['Mikasa'],              note:'',        tier:'easy', clue:'Red scarf. Worth a hundred soldiers.', page:'Mikasa Ackermann (Anime)'},
    {slug:'armin-arlelt',   name:'Armin Arlelt',   alt:['Armin','Armin Arlert'],note:'',        tier:'easy', clue:'The one who thinks his way out.', page:'Armin Arlelt (Anime)'},
    {slug:'levi-ackerman',  name:'Levi Ackerman',  alt:['Levi','Captain Levi'], note:'',        tier:'easy', clue:'Humanity\'s strongest, and obsessed with cleaning.', page:'Levi Ackermann (Anime)'},
    {slug:'erwin-smith',    name:'Erwin Smith',    alt:['Erwin','Commander Erwin'],note:'',     tier:'easy', clue:'Commander with one arm and a talent for a speech.', page:'Erwin Smith (Anime)'},
    {slug:'reiner-braun',   name:'Reiner Braun',   alt:['Reiner'],              note:'',        tier:'easy', clue:'The big blond one carrying a very heavy secret.', page:'Reiner Braun (Anime)'},
    {slug:'annie-leonhart', name:'Annie Leonhart', alt:['Annie'],               note:'',        tier:'easy', clue:'Blonde bun, hooded eyes, and a signature ring.', page:'Annie Leonhart (Anime)'},
    {slug:'historia-reiss', name:'Historia Reiss', alt:['Historia','Krista Lenz'],note:'',      tier:'easy', clue:'Went by another name until the truth came out.', page:'Historia Reiss (Anime)'},
    {slug:'sasha-blouse',   name:'Sasha Blouse',   alt:['Sasha','Potato Girl'], note:'',        tier:'easy', clue:'Potato girl.', page:'Sasha Braus (Anime)'},
    {slug:'connie-springer',name:'Connie Springer',alt:['Connie'],              note:'',        tier:'mid',  clue:'Shaved head, quick on the gear, slow on the uptake.', page:'Conny Springer (Anime)'},
    {slug:'jean-kirstein',  name:'Jean Kirstein',  alt:['Jean'],                note:'',        tier:'mid',  clue:'Long face, sharp mouth, wanted the Military Police.', page:'Jean Kirschtein (Anime)'},
    {slug:'hange-zoe',      name:'Hange Zoë',      alt:['Hange','Hanji'],       note:'',        tier:'mid',  clue:'Goggles, ponytail, and far too excited about titans.', page:'Hange Zoë (Anime)'},

    /* ── THE TITANS ── */
    {slug:'colossal-titan', name:'Colossal Titan', alt:[],                      note:'Titan',   tier:'easy', clue:'Sixty metres of exposed muscle and steam. Kicked the wall in.', page:'Colossal Titan (Anime)'},
    {slug:'armored-titan',  name:'Armored Titan',  alt:[],                      note:'Titan',   tier:'easy', clue:'Plated like a tank. Runs through walls rather than over them.', page:'Armored Titan (Anime)'},
    {slug:'female-titan',   name:'Female Titan',   alt:[],                      note:'Titan',   tier:'mid',  clue:'Hardens her skin and can call the others to her.', page:'Female Titan (Anime)'},
    {slug:'beast-titan',    name:'Beast Titan',    alt:[],                      note:'Titan',   tier:'mid',  clue:'Covered in fur, and it throws rocks with unreasonable accuracy.', page:'Beast Titan (Anime)'},
    {slug:'attack-titan',   name:'Attack Titan',   alt:['Founding Titan'],      note:'Titan',   tier:'mid',  clue:'Pointed ears, permanent snarl, the one at the centre of it.', page:'Attack Titan (Anime)'},
    {slug:'cart-titan',     name:'Cart Titan',     alt:[],                      note:'Titan',   tier:'deep', clue:'On four legs, built to carry equipment for miles.', page:'Cart Titan (Anime)'},
    {slug:'jaw-titan',      name:'Jaw Titan',      alt:[],                      note:'Titan',   tier:'deep', clue:'Small and fast, with a bite that goes through hardening.', page:'Jaw Titan (Anime)'},
    {slug:'war-hammer-titan',name:'War Hammer Titan',alt:['Warhammer Titan'],   note:'Titan',   tier:'deep', clue:'Builds weapons out of its own hardened flesh.', page:'War Hammer Titan (Anime)'},

    /* ── MID: the rest of the cast ── */
    {slug:'zeke-yeager',    name:'Zeke Yeager',    alt:['Zeke'],                note:'',        tier:'mid',  clue:'Bearded, bespectacled, and pitching a very final solution.', page:'Zeke Jaeger (Anime)'},
    {slug:'bertholdt-hoover',name:'Bertholdt Hoover',alt:['Bertholdt','Bertolt'],note:'',       tier:'mid',  clue:'Tall, quiet, apologetic — right up until he wasn\'t.', page:'Bertholdt Hoover (Anime)'},
    {slug:'ymir',           name:'Ymir',           alt:[],                      note:'',        tier:'mid',  clue:'Freckles, sharp tongue, devoted to Historia.', page:'Ymir Fritz (Anime)'},
    {slug:'gabi-braun',     name:'Gabi Braun',     alt:['Gabi'],                note:'',        tier:'mid',  clue:'Marleyan warrior candidate. The most divisive kid in anime.', page:'Gabi Braun (Anime)'},
    {slug:'falco-grice',    name:'Falco Grice',    alt:['Falco'],               note:'',        tier:'mid',  clue:'The boy who kept delivering letters he shouldn\'t have.', page:'Falco Grice (Anime)'},
    {slug:'pieck-finger',   name:'Pieck Finger',   alt:['Pieck'],               note:'',        tier:'mid',  clue:'Dark hair over one eye, walks on all fours out of habit.', page:'Finger (Anime)'},
    {slug:'porco-galliard', name:'Porco Galliard', alt:['Porco'],               note:'',        tier:'deep', clue:'Marleyan warrior with a grudge and a lot of teeth.', page:'Porco Galliard (Anime)'},
    {slug:'grisha-yeager',  name:'Grisha Yeager',  alt:['Grisha'],              note:'',        tier:'mid',  clue:'The doctor father with the basement.', page:'Grisha Jaeger (Anime)'},
    {slug:'carla-yeager',   name:'Carla Yeager',   alt:['Carla'],               note:'',        tier:'deep', clue:'The mother, in the very first episode.', page:'Carla Jaeger (Anime)'},
    {slug:'kenny-ackerman', name:'Kenny Ackerman', alt:['Kenny','Kenny the Ripper'],note:'',    tier:'deep', clue:'Bowler hat, two pistols, and Levi\'s uncle.', page:'Kenny Ackermann (Anime)'},
    {slug:'ymir-fritz',     name:'Ymir Fritz',     alt:[],                      note:'',        tier:'deep', clue:'The founder. Two thousand years of building sand.', page:'Fritz (Anime)'},
    {slug:'floch-forster',  name:'Floch Forster',  alt:['Floch'],               note:'',        tier:'deep', clue:'Red hair, survived Shiganshina, became the problem.', page:'Floch Forster (Anime)'},
    {slug:'dot-pixis',      name:'Dot Pixis',      alt:['Pixis'],               note:'',        tier:'deep', clue:'Bald commander with a flask and a very cool head.', page:'Dot Pyxis (Anime)'},
    {slug:'keith-shadis',   name:'Keith Shadis',   alt:['Shadis'],              note:'',        tier:'deep', clue:'Drill instructor who screams an inch from your face.', page:'Keith Sadies (Anime)'},
    {slug:'marco-bott',     name:'Marco Bott',     alt:['Marco'],               note:'',        tier:'deep', clue:'Freckled, decent, and it did not help him.', page:'Marco Bodt (Anime)'},
    {slug:'petra-ral',      name:'Petra Ral',      alt:['Petra'],               note:'',        tier:'deep', clue:'Levi\'s squad. Ginger, capable, and doomed.', page:'Petra Rall (Anime)'},
    {slug:'miche-zacharias',name:'Miche Zacharias',alt:['Mike Zacharias','Miche'],note:'',      tier:'deep', clue:'Sniffs people when he meets them. Second only to Levi.', page:'Miche Zacharius (Anime)'},
    {slug:'nile-dok',       name:'Nile Dok',       alt:['Nile'],                note:'',        tier:'deep', clue:'Military Police commander with a permanent frown.', page:'Nile Dawk (Anime)'},
    {slug:'yelena',         name:'Yelena',         alt:[],                      note:'',        tier:'deep', clue:'Towering Marleyan defector, unnervingly devoted to Zeke.', page:'Yelena (Anime)'},
    {slug:'onyankopon',     name:'Onyankopon',     alt:[],                      note:'',        tier:'deep', clue:'The Anti-Marleyan pilot who flies the airship.', page:'Onyankopon (Anime)'},

    /* ── REFERENCES ── */
    {slug:'survey-corps',   name:'Survey Corps',   alt:['Scout Regiment','Wings of Freedom'],note:'Emblem',tier:'mid', clue:'The blue and white wings on every cloak.', page:'Scout Regiment (Anime)'},
    {slug:'military-police-brigade',name:'Military Police Brigade',alt:['Military Police'],note:'Emblem',tier:'deep',clue:'The unicorn. Where the top ten cadets wanted to go.', page:'Military Police Regiment (Anime)'},
    {slug:'garrison',       name:'Garrison',       alt:['Garrison Regiment'],   note:'Emblem', tier:'deep', clue:'Roses on the back. They man the walls.', page:'Garrison Regiment (Anime)'},
    {slug:'vertical-maneuvering-equipment',name:'ODM Gear',alt:['Vertical Maneuvering Equipment','Omni-directional mobility gear'],note:'Equipment',tier:'mid',clue:'Grapples, gas canisters, and the reason anyone stands a chance.', page:'Omni-directional mobility gear (Anime)'},
    {slug:'wall-maria',     name:'Wall Maria',     alt:[],                      note:'The Walls',tier:'deep', clue:'The outermost of the three. First to fall.', page:'Fall of Wall Maria (Anime)'},
    {slug:'titan',          name:'Pure Titan',     alt:['Titan'],               note:'',       tier:'mid',  clue:'No mind behind the eyes. Just the grin and the walking.', page:'Titan (Anime)'},
    /* ── GARRISON ── */
    {slug:'hannes', name:'Hannes', alt:[], note:'Garrison', tier:'mid', clue:'Drank on duty, carried Eren out of Shiganshina.', wiki:'attackontitan.fandom.com', page:'Hannes (Anime)'},
    {slug:'rico-brzenska', name:'Rico Brzenska', alt:[], note:'Garrison', tier:'deep', clue:'Glasses, white hair, Trost.', wiki:'attackontitan.fandom.com', page:'Rico Brzenska (Anime)'},
    {slug:'ian-dietrich', name:'Ian Dietrich', alt:[], note:'Garrison', tier:'deep', clue:'Led the squad defending Eren in Titan form.', wiki:'attackontitan.fandom.com', page:'Ian Dietrich (Anime)'},
    {slug:'mitabi-jarnach', name:'Mitabi Jarnach', alt:[], note:'Garrison', tier:'deep', clue:'Died holding the boulder operation together.', wiki:'attackontitan.fandom.com', page:'Mitabi Jarnach (Anime)'},
    {slug:'anka-rheinberger', name:'Anka Rheinberger', alt:[], note:'Garrison', tier:'deep', clue:'Always at Pyxis’ shoulder.', wiki:'attackontitan.fandom.com', page:'Anka Rheinberger (Anime)'},

    /* ── MILITARY POLICE ── */
    {slug:'hitch-dreyse', name:'Hitch Dreyse', alt:[], note:'Military Police', tier:'deep', clue:'Annie’s roommate. Sharp tongue.', wiki:'attackontitan.fandom.com', page:'Hitch Dreyse (Anime)'},
    {slug:'djel-sannes', name:'Djel Sannes', alt:[], note:'Military Police', tier:'deep', clue:'Interrogator for the First Interior Squad.', wiki:'attackontitan.fandom.com', page:'Djel Sannes (Anime)'},
    {slug:'traute-carven', name:'Traute Carven', alt:[], note:'Military Police', tier:'deep', clue:'Kenny’s second.', wiki:'attackontitan.fandom.com', page:'Traute Carven (Anime)'},

    /* ── SURVEY CORPS ── */
    {slug:'moblit-berner', name:'Moblit Berner', alt:[], note:'Survey Corps', tier:'deep', clue:'Hange’s assistant, and their brakes.', wiki:'attackontitan.fandom.com', page:'Moblit Berner (Anime)'},

    /* ── 104TH CADETS ── */
    {slug:'mina-carolina', name:'Mina Carolina', alt:[], note:'104th Cadets', tier:'deep', clue:'Black pigtails. Trost.', wiki:'attackontitan.fandom.com', page:'Mina Carolina (Anime)'},
    {slug:'thomas-wagner', name:'Thomas Wagner', alt:[], note:'104th Cadets', tier:'deep', clue:'The first of the class to go.', wiki:'attackontitan.fandom.com', page:'Thomas Wagner (Anime)'},
    {slug:'franz-kefka', name:'Franz Kefka', alt:[], note:'104th Cadets', tier:'deep', clue:'Always with Hannah.', wiki:'attackontitan.fandom.com', page:'Franz Kefka (Anime)'},
    {slug:'samuel-linke', name:'Samuel Linke-Jackson', alt:[], note:'104th Cadets', tier:'deep', clue:'Fell from the wall in Trost.', wiki:'attackontitan.fandom.com', page:'Samuel Linke-Jackson (Anime)'},

    /* ── REISS FAMILY ── */
    {slug:'rod-reiss', name:'Rod Reiss', alt:[], note:'Reiss family', tier:'mid', clue:'The real king. Historia’s father.', wiki:'attackontitan.fandom.com', page:'Rod Reiss (Anime)'},
    {slug:'frieda-reiss', name:'Frieda Reiss', alt:[], note:'Reiss family', tier:'deep', clue:'Historia’s half-sister. Held the Founder.', wiki:'attackontitan.fandom.com', page:'Frieda Reiss (Anime)'},
    {slug:'uri-reiss', name:'Uri Reiss', alt:[], note:'Reiss family', tier:'deep', clue:'Kenny knelt to him.', wiki:'attackontitan.fandom.com', page:'Uri Reiss (Anime)'},

    /* ── MARLEY ── */
    {slug:'willy-tybur', name:'Willy Tybur', alt:[], note:'Marley', tier:'mid', clue:'Declared war on stage.', wiki:'attackontitan.fandom.com', page:'Willy Tybur (Anime)'},
    {slug:'lara-tybur', name:'Lara Tybur', alt:[], note:'Marley', tier:'deep', clue:'His sister. The War Hammer.', wiki:'attackontitan.fandom.com', page:'Lara Tybur (Anime)'},
    {slug:'theo-magath', name:'Theo Magath', alt:[], note:'Marley', tier:'mid', clue:'Marleyan commander who changed his mind.', wiki:'attackontitan.fandom.com', page:'Theo Magath (Anime)'},
    {slug:'colt-grice', name:'Colt Grice', alt:[], note:'Marley', tier:'deep', clue:'Falco’s brother.', wiki:'attackontitan.fandom.com', page:'Colt Grice (Anime)'},
    {slug:'udo', name:'Udo', alt:[], note:'Marley', tier:'deep', clue:'Warrior candidate. Glasses.', wiki:'attackontitan.fandom.com', page:'Udo (Anime)'},
    {slug:'zofia', name:'Zofia', alt:[], note:'Marley', tier:'deep', clue:'Warrior candidate, quiet.', wiki:'attackontitan.fandom.com', page:'Zofia (Anime)'},
    {slug:'marcel-galliard', name:'Marcel Galliard', alt:[], note:'Marley', tier:'deep', clue:'Porco’s brother. Ate by the Jaw.', wiki:'attackontitan.fandom.com', page:'Marcel Galliard (Anime)'},
    {slug:'karina-braun', name:'Karina Braun', alt:[], note:'Marley', tier:'deep', clue:'Reiner’s mother.', wiki:'attackontitan.fandom.com', page:'Karina Braun (Anime)'},
    {slug:'mr-leonhart', name:'Mr. Leonhart', alt:[], note:'Marley', tier:'deep', clue:'Annie’s father. Apologised too late.', wiki:'attackontitan.fandom.com', page:'Mr. Leonhart (Anime)'},

    /* ── ELDIA ── */
    {slug:'eren-kruger', name:'Eren Kruger', alt:['The Owl'], note:'Eldia', tier:'deep', clue:'The Owl. The first Attack Titan we meet.', wiki:'attackontitan.fandom.com', page:'Eren Kruger (Anime)'},
    {slug:'dina-fritz', name:'Dina Fritz', alt:[], note:'Eldia', tier:'deep', clue:'Grisha’s first wife. The Smiling Titan.', wiki:'attackontitan.fandom.com', page:'Dina Fritz (Anime)'},
    {slug:'tom-ksaver', name:'Tom Ksaver', alt:[], note:'Eldia', tier:'deep', clue:'Beast Titan before Zeke. Taught him baseball.', wiki:'attackontitan.fandom.com', page:'Tom Ksaver (Anime)'},

    /* ── UNDERGROUND ── */
    {slug:'kuchel-ackermann', name:'Kuchel Ackerman', alt:[], note:'Underground', tier:'deep', clue:'Levi’s mother.', wiki:'attackontitan.fandom.com', page:'Kuchel Ackermann (Anime)'},
    {slug:'isabel-magnolia', name:'Isabel Magnolia', alt:[], note:'Underground', tier:'deep', clue:'Levi’s from the underground. Red hair.', wiki:'attackontitan.fandom.com', page:'Isabel Magnolia (Anime)'},
    {slug:'furlan-church', name:'Furlan Church', alt:[], note:'Underground', tier:'deep', clue:'The other one who came up with Levi.', wiki:'attackontitan.fandom.com', page:'Furlan Church (Anime)'},

    /* ── PARADIS ── */
    {slug:'nicolo', name:'Nicolo', alt:[], note:'Paradis', tier:'deep', clue:'Marleyan cook. Sasha.', wiki:'attackontitan.fandom.com', page:'Nicolo (Anime)'},
    {slug:'louise', name:'Louise', alt:[], note:'Paradis', tier:'deep', clue:'Mikasa saved her. She never got over it.', wiki:'attackontitan.fandom.com', page:'Louise (Anime)'},
    {slug:'kiyomi-azumabito', name:'Kiyomi Azumabito', alt:[], note:'Paradis', tier:'deep', clue:'Hizuru. Mikasa’s blood.', wiki:'attackontitan.fandom.com', page:'Kiyomi Azumabito (Anime)'},

    /* ── INSTRUCTORS ── */

    /* ── THE WALLS ── */
    {slug:'wall-rose', name:'Wall Rose', alt:[], note:'The Walls', tier:'mid', clue:'The middle one.', wiki:'attackontitan.fandom.com', page:'Wall Rose (Anime)'},
    {slug:'wall-sina', name:'Wall Sina', alt:[], note:'The Walls', tier:'mid', clue:'The innermost. Where the king lived.', wiki:'attackontitan.fandom.com', page:'Wall Sina (Anime)'},

    /* ── PLACES ── */
    {slug:'shiganshina', name:'Shiganshina District', alt:[], note:'Places', tier:'mid', clue:'Where it starts, and where it ends.', wiki:'attackontitan.fandom.com', page:'Shiganshina District (Anime)'},
    {slug:'trost', name:'Trost District', alt:[], note:'Places', tier:'mid', clue:'The boulder.', wiki:'attackontitan.fandom.com', page:'Trost District (Anime)'},
    {slug:'marley', name:'Marley', alt:[], note:'Places', tier:'mid', clue:'Across the sea.', wiki:'attackontitan.fandom.com', page:'Marley (Anime)'},
    {slug:'paradis', name:'Paradis Island', alt:[], note:'Places', tier:'mid', clue:'The island itself.', wiki:'attackontitan.fandom.com', page:'Paradis Island (Anime)'},

    /* ── EQUIPMENT ── */
    {slug:'thunder-spear', name:'Thunder Spear', alt:[], note:'Equipment', tier:'mid', clue:'Built for armour.', wiki:'attackontitan.fandom.com', page:'Thunder Spear (Anime)'},

    /* ── INSIGNIA ── */
    {slug:'cadet-corps', name:'Cadet Corps', alt:[], note:'Insignia', tier:'deep', clue:'Two crossed swords.', wiki:'attackontitan.fandom.com', page:'Cadet Corps (Anime)'},

    /* ── THE NINE ── */
    {slug:'founding-titan', name:'Founding Titan', alt:[], note:'The Nine', tier:'mid', clue:'The one that can change everything.', wiki:'attackontitan.fandom.com', page:'Founding Titan (Anime)'},

    /* ── LORE ── */
    {slug:'paths', name:'Paths', alt:[], note:'Lore', tier:'deep', clue:'Where every Eldian is connected.', wiki:'attackontitan.fandom.com', page:'Paths (Anime)'}
  ]
});
