/* ══════════════════════════════════════════════════════════════
   CATEGORY: ATTACK ON TITAN
   Characters, the nine Titans, and the things the series is known
   for. All from the Attack on Titan wiki.
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
    {slug:'eren-yeager',    name:'Eren Yeager',    alt:['Eren','Eren Jaeger'],  note:'',        tier:'easy', clue:'Started it all shouting about freedom.'},
    {slug:'mikasa-ackerman',name:'Mikasa Ackerman',alt:['Mikasa'],              note:'',        tier:'easy', clue:'Red scarf. Worth a hundred soldiers.'},
    {slug:'armin-arlelt',   name:'Armin Arlelt',   alt:['Armin','Armin Arlert'],note:'',        tier:'easy', clue:'The one who thinks his way out.'},
    {slug:'levi-ackerman',  name:'Levi Ackerman',  alt:['Levi','Captain Levi'], note:'',        tier:'easy', clue:'Humanity\'s strongest, and obsessed with cleaning.'},
    {slug:'erwin-smith',    name:'Erwin Smith',    alt:['Erwin','Commander Erwin'],note:'',     tier:'easy', clue:'Commander with one arm and a talent for a speech.'},
    {slug:'reiner-braun',   name:'Reiner Braun',   alt:['Reiner'],              note:'',        tier:'easy', clue:'The big blond one carrying a very heavy secret.'},
    {slug:'annie-leonhart', name:'Annie Leonhart', alt:['Annie'],               note:'',        tier:'easy', clue:'Blonde bun, hooded eyes, and a signature ring.'},
    {slug:'historia-reiss', name:'Historia Reiss', alt:['Historia','Krista Lenz'],note:'',      tier:'easy', clue:'Went by another name until the truth came out.'},
    {slug:'sasha-blouse',   name:'Sasha Blouse',   alt:['Sasha','Potato Girl'], note:'',        tier:'easy', clue:'Potato girl.'},
    {slug:'connie-springer',name:'Connie Springer',alt:['Connie'],              note:'',        tier:'mid',  clue:'Shaved head, quick on the gear, slow on the uptake.'},
    {slug:'jean-kirstein',  name:'Jean Kirstein',  alt:['Jean'],                note:'',        tier:'mid',  clue:'Long face, sharp mouth, wanted the Military Police.'},
    {slug:'hange-zoe',      name:'Hange Zoë',      alt:['Hange','Hanji'],       note:'',        tier:'mid',  clue:'Goggles, ponytail, and far too excited about titans.'},

    /* ── THE TITANS ── */
    {slug:'colossal-titan', name:'Colossal Titan', alt:[],                      note:'Titan',   tier:'easy', clue:'Sixty metres of exposed muscle and steam. Kicked the wall in.'},
    {slug:'armored-titan',  name:'Armored Titan',  alt:[],                      note:'Titan',   tier:'easy', clue:'Plated like a tank. Runs through walls rather than over them.'},
    {slug:'female-titan',   name:'Female Titan',   alt:[],                      note:'Titan',   tier:'mid',  clue:'Hardens her skin and can call the others to her.'},
    {slug:'beast-titan',    name:'Beast Titan',    alt:[],                      note:'Titan',   tier:'mid',  clue:'Covered in fur, and it throws rocks with unreasonable accuracy.'},
    {slug:'attack-titan',   name:'Attack Titan',   alt:['Founding Titan'],      note:'Titan',   tier:'mid',  clue:'Pointed ears, permanent snarl, the one at the centre of it.'},
    {slug:'cart-titan',     name:'Cart Titan',     alt:[],                      note:'Titan',   tier:'deep', clue:'On four legs, built to carry equipment for miles.'},
    {slug:'jaw-titan',      name:'Jaw Titan',      alt:[],                      note:'Titan',   tier:'deep', clue:'Small and fast, with a bite that goes through hardening.'},
    {slug:'war-hammer-titan',name:'War Hammer Titan',alt:['Warhammer Titan'],   note:'Titan',   tier:'deep', clue:'Builds weapons out of its own hardened flesh.'},

    /* ── MID: the rest of the cast ── */
    {slug:'zeke-yeager',    name:'Zeke Yeager',    alt:['Zeke'],                note:'',        tier:'mid',  clue:'Bearded, bespectacled, and pitching a very final solution.'},
    {slug:'bertholdt-hoover',name:'Bertholdt Hoover',alt:['Bertholdt','Bertolt'],note:'',       tier:'mid',  clue:'Tall, quiet, apologetic — right up until he wasn\'t.'},
    {slug:'ymir',           name:'Ymir',           alt:[],                      note:'',        tier:'mid',  clue:'Freckles, sharp tongue, devoted to Historia.'},
    {slug:'gabi-braun',     name:'Gabi Braun',     alt:['Gabi'],                note:'',        tier:'mid',  clue:'Marleyan warrior candidate. The most divisive kid in anime.'},
    {slug:'falco-grice',    name:'Falco Grice',    alt:['Falco'],               note:'',        tier:'mid',  clue:'The boy who kept delivering letters he shouldn\'t have.'},
    {slug:'pieck-finger',   name:'Pieck Finger',   alt:['Pieck'],               note:'',        tier:'mid',  clue:'Dark hair over one eye, walks on all fours out of habit.'},
    {slug:'porco-galliard', name:'Porco Galliard', alt:['Porco'],               note:'',        tier:'deep', clue:'Marleyan warrior with a grudge and a lot of teeth.'},
    {slug:'grisha-yeager',  name:'Grisha Yeager',  alt:['Grisha'],              note:'',        tier:'mid',  clue:'The doctor father with the basement.'},
    {slug:'carla-yeager',   name:'Carla Yeager',   alt:['Carla'],               note:'',        tier:'deep', clue:'The mother, in the very first episode.'},
    {slug:'kenny-ackerman', name:'Kenny Ackerman', alt:['Kenny','Kenny the Ripper'],note:'',    tier:'deep', clue:'Bowler hat, two pistols, and Levi\'s uncle.'},
    {slug:'ymir-fritz',     name:'Ymir Fritz',     alt:[],                      note:'',        tier:'deep', clue:'The founder. Two thousand years of building sand.'},
    {slug:'floch-forster',  name:'Floch Forster',  alt:['Floch'],               note:'',        tier:'deep', clue:'Red hair, survived Shiganshina, became the problem.'},
    {slug:'dot-pixis',      name:'Dot Pixis',      alt:['Pixis'],               note:'',        tier:'deep', clue:'Bald commander with a flask and a very cool head.'},
    {slug:'keith-shadis',   name:'Keith Shadis',   alt:['Shadis'],              note:'',        tier:'deep', clue:'Drill instructor who screams an inch from your face.'},
    {slug:'marco-bott',     name:'Marco Bott',     alt:['Marco'],               note:'',        tier:'deep', clue:'Freckled, decent, and it did not help him.'},
    {slug:'petra-ral',      name:'Petra Ral',      alt:['Petra'],               note:'',        tier:'deep', clue:'Levi\'s squad. Ginger, capable, and doomed.'},
    {slug:'miche-zacharias',name:'Miche Zacharias',alt:['Mike Zacharias','Miche'],note:'',      tier:'deep', clue:'Sniffs people when he meets them. Second only to Levi.'},
    {slug:'nile-dok',       name:'Nile Dok',       alt:['Nile'],                note:'',        tier:'deep', clue:'Military Police commander with a permanent frown.'},
    {slug:'yelena',         name:'Yelena',         alt:[],                      note:'',        tier:'deep', clue:'Towering Marleyan defector, unnervingly devoted to Zeke.'},
    {slug:'onyankopon',     name:'Onyankopon',     alt:[],                      note:'',        tier:'deep', clue:'The Anti-Marleyan pilot who flies the airship.'},

    /* ── REFERENCES ── */
    {slug:'survey-corps',   name:'Survey Corps',   alt:['Scout Regiment','Wings of Freedom'],note:'Emblem',tier:'mid', clue:'The blue and white wings on every cloak.'},
    {slug:'military-police-brigade',name:'Military Police Brigade',alt:['Military Police'],note:'Emblem',tier:'deep',clue:'The unicorn. Where the top ten cadets wanted to go.'},
    {slug:'garrison',       name:'Garrison',       alt:['Garrison Regiment'],   note:'Emblem', tier:'deep', clue:'Roses on the back. They man the walls.'},
    {slug:'vertical-maneuvering-equipment',name:'ODM Gear',alt:['Vertical Maneuvering Equipment','Omni-directional mobility gear'],note:'Equipment',tier:'mid',clue:'Grapples, gas canisters, and the reason anyone stands a chance.'},
    {slug:'wall-maria',     name:'Wall Maria',     alt:[],                      note:'The Walls',tier:'deep', clue:'The outermost of the three. First to fall.'},
    {slug:'titan',          name:'Pure Titan',     alt:['Titan'],               note:'',       tier:'mid',  clue:'No mind behind the eyes. Just the grin and the walking.'}
  ]
});
