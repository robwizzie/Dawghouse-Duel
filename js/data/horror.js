/* ══════════════════════════════════════════════════════════════
   CATEGORY: HORROR VILLAINS

   Slashers, hauntings, the Universal monsters and the ones who are
   just people. Every page was confirmed by hand before it went in.

   Searching a villains wiki for a name returns confident nonsense —
   'Billy the Puppet' came back as a SuperMarioLogan character, Damien
   Thorn as the South Park one, the Grady twins as a Smallville
   episode. Anything that couldn't be pinned to the right page was
   left out rather than shipped wrong.

   Artwork: node tools/fetch-wiki-images.js horror
   ══════════════════════════════════════════════════════════════ */
window.DHD_CATEGORIES = window.DHD_CATEGORIES || [];
window.DHD_CATEGORIES.push({
  id: 'horror',
  name: 'Horror Villains',
  blurb: 'The masks, the monsters and the ones who are just people.',
  items: [

    /* ── SLASHERS ── */
    {slug:'freddy-krueger', name:'Freddy Krueger', alt:['Freddy'], note:'Slashers', tier:'easy', clue:'The glove, the jumper, the hat.', wiki:'villains.fandom.com'},
    {slug:'jason-voorhees', name:'Jason Voorhees', alt:['Jason'], note:'Slashers', tier:'easy', clue:'Hockey mask. Camp Crystal Lake.', wiki:'villains.fandom.com'},
    {slug:'michael-myers', name:'Michael Myers', alt:['Michael','The Shape'], note:'Slashers', tier:'easy', clue:'A painted William Shatner mask.', wiki:'villains.fandom.com'},
    {slug:'leatherface', name:'Leatherface', alt:[], note:'Slashers', tier:'easy', clue:'Chainsaw, and a mask made of people.', wiki:'villains.fandom.com'},
    {slug:'ghostface', name:'Ghostface', alt:[], note:'Slashers', tier:'easy', clue:'What’s your favourite scary movie?', wiki:'villains.fandom.com'},
    {slug:'chucky', name:'Chucky', alt:['Charles Lee Ray'], note:'Slashers', tier:'easy', clue:'Good Guy doll. Dungarees.', wiki:'villains.fandom.com'},
    {slug:'tiffany-valentine', name:'Tiffany Valentine', alt:['Tiffany'], note:'Slashers', tier:'mid', clue:'Chucky’s bride.', wiki:'villains.fandom.com'},
    {slug:'pinhead', name:'Pinhead', alt:[], note:'Slashers', tier:'mid', clue:'The nails, in a grid.', wiki:'villains.fandom.com'},
    {slug:'candyman', name:'Candyman', alt:[], note:'Slashers', tier:'mid', clue:'Say it five times.', wiki:'villains.fandom.com', page:'Candyman (Candyman)'},
    {slug:'art-the-clown', name:'Art the Clown', alt:['Art'], note:'Slashers', tier:'mid', clue:'Black and white, and never speaks.', wiki:'horror.fandom.com'},
    {slug:'victor-crowley', name:'Victor Crowley', alt:[], note:'Slashers', tier:'deep', clue:'Hatchet. The swamp.', wiki:'villains.fandom.com'},
    {slug:'vincent-sinclair', name:'Vincent Sinclair', alt:[], note:'Slashers', tier:'deep', clue:'House of Wax.', wiki:'villains.fandom.com'},
    {slug:'angela-baker', name:'Angela Baker', alt:[], note:'Slashers', tier:'deep', clue:'Sleepaway Camp. That ending.', wiki:'villains.fandom.com', page:'Angela Baker (real)'},
    {slug:'benjamin-willis', name:'Ben Willis', alt:['Benjamin Willis'], note:'Slashers', tier:'deep', clue:'The fisherman with the hook.', wiki:'villains.fandom.com', page:'Benjamin Willis'},
    {slug:'charlie-hewitt', name:'Hoyt Sawyer', alt:['Charlie Hewitt'], note:'Slashers', tier:'deep', clue:'The sheriff who isn’t.', wiki:'villains.fandom.com', page:'Charlie Hewitt Jr.'},

    /* ── NIGHTMARES ── */
    {slug:'pennywise', name:'Pennywise', alt:['It'], note:'Nightmares', tier:'easy', clue:'The balloon, the drain.', wiki:'villains.fandom.com'},
    {slug:'pazuzu', name:'Pazuzu', alt:[], note:'Nightmares', tier:'mid', clue:'The demon in The Exorcist.', wiki:'villains.fandom.com'},
    {slug:'regan-macneil', name:'Regan MacNeil', alt:['Regan'], note:'Nightmares', tier:'mid', clue:'The head, the stairs.', wiki:'horror.fandom.com', page:'Regan Teresa MacNeil'},
    {slug:'valak', name:'Valak', alt:['The Nun'], note:'Nightmares', tier:'mid', clue:'The nun with the yellow eyes.', wiki:'horror.fandom.com', page:'Valak (The Conjuring Universe)'},
    {slug:'malthus', name:'Annabelle', alt:['Malthus'], note:'Nightmares', tier:'mid', clue:'The doll in the case.', wiki:'villains.fandom.com', page:'Malthus (The Conjuring Universe)'},
    {slug:'bagul', name:'Bughuul', alt:['Bagul','Mr. Boogie'], note:'Nightmares', tier:'deep', clue:'Sinister. In the home movies.', wiki:'villains.fandom.com', page:'Bagul'},
    {slug:'mister-babadook', name:'The Babadook', alt:['Babadook'], note:'Nightmares', tier:'mid', clue:'If it is in a word.', wiki:'villains.fandom.com', page:'Mister Babadook'},
    {slug:'mama', name:'Mama', alt:[], note:'Nightmares', tier:'deep', clue:'The one in the corner of the room.', wiki:'villains.fandom.com', page:'Mama (Mama)'},
    {slug:'samara-morgan', name:'Samara Morgan', alt:['Samara'], note:'Nightmares', tier:'mid', clue:'Seven days. Out of the well.', wiki:'villains.fandom.com'},
    {slug:'sadako-yamamura', name:'Sadako Yamamura', alt:['Sadako'], note:'Nightmares', tier:'mid', clue:'The original of that.', wiki:'villains.fandom.com'},
    {slug:'kayako-saeki', name:'Kayako Saeki', alt:['Kayako'], note:'Nightmares', tier:'mid', clue:'The Grudge. The stairs, the noise.', wiki:'villains.fandom.com'},
    {slug:'toshio-saeki', name:'Toshio', alt:['Toshio Saeki'], note:'Nightmares', tier:'deep', clue:'The boy, and the cat.', wiki:'villains.fandom.com', page:'Toshio Saeki'},
    {slug:'kuchisake-onna', name:'Kuchisake-onna', alt:['Slit-Mouthed Woman'], note:'Nightmares', tier:'deep', clue:'Am I pretty?', wiki:'villains.fandom.com', page:'Kuchisake Onna'},
    {slug:'asami-yamazaki', name:'Asami Yamazaki', alt:['Asami'], note:'Nightmares', tier:'deep', clue:'Audition. Kiri kiri kiri.', wiki:'villains.fandom.com'},
    {slug:'la-llorona', name:'La Llorona', alt:[], note:'Nightmares', tier:'deep', clue:'The weeping woman.', wiki:'villains.fandom.com'},
    {slug:'slender-man', name:'Slender Man', alt:['Slenderman'], note:'Nightmares', tier:'mid', clue:'Too tall, no face.', wiki:'villains.fandom.com'},
    {slug:'the-grabber', name:'The Grabber', alt:[], note:'Nightmares', tier:'mid', clue:'The Black Phone. The mask comes apart.', wiki:'villains.fandom.com', page:'The Grabber (The Black Phone)'},
    {slug:'m3gan', name:'M3GAN', alt:['Megan'], note:'Nightmares', tier:'mid', clue:'The doll that dances.', wiki:'villains.fandom.com'},

    /* ── CLASSIC MONSTERS ── */
    {slug:'count-dracula', name:'Count Dracula', alt:['Dracula'], note:'Classic monsters', tier:'easy', clue:'The cape, the collar.', wiki:'villains.fandom.com'},
    {slug:'frankensteins-monster', name:'Frankenstein’s Monster', alt:['The Monster','Frankenstein'], note:'Classic monsters', tier:'easy', clue:'Flat head, neck bolts.', wiki:'villains.fandom.com', page:'Frankenstein\'s Monster'},
    {slug:'imhotep', name:'The Mummy', alt:['Imhotep'], note:'Classic monsters', tier:'mid', clue:'Wrapped, and very cross.', wiki:'villains.fandom.com', page:'Imhotep'},
    {slug:'the-wolf-man', name:'The Wolf Man', alt:['Wolfman','Larry Talbot'], note:'Classic monsters', tier:'mid', clue:'Even a man who is pure in heart.', wiki:'villains.fandom.com'},
    {slug:'gill-man', name:'Creature from the Black Lagoon', alt:['Gill-man','Gill man'], note:'Classic monsters', tier:'mid', clue:'The scales, the lagoon.', wiki:'villains.fandom.com', page:'Gill-man'},
    {slug:'count-orlok', name:'Count Orlok', alt:['Nosferatu','Orlok'], note:'Classic monsters', tier:'mid', clue:'Nosferatu. The ears, the fingers.', wiki:'villains.fandom.com'},
    {slug:'griffin', name:'The Invisible Man', alt:['Griffin'], note:'Classic monsters', tier:'mid', clue:'Bandages and dark glasses.', wiki:'horror.fandom.com', page:'Griffin (The Invisible Man)'},

    /* ── FROM ELSEWHERE ── */
    {slug:'xenomorph', name:'Xenomorph', alt:['Alien'], note:'From elsewhere', tier:'easy', clue:'In space, nobody can hear you.', wiki:'villains.fandom.com'},
    {slug:'xenomorph-queen', name:'Alien Queen', alt:['Queen'], note:'From elsewhere', tier:'mid', clue:'Get away from her.', wiki:'villains.fandom.com', page:'Xenomorph Queens'},
    {slug:'predator', name:'Predator', alt:['Yautja'], note:'From elsewhere', tier:'easy', clue:'Dreadlocks and a shoulder cannon.', wiki:'villains.fandom.com'},
    {slug:'the-thing', name:'The Thing', alt:[], note:'From elsewhere', tier:'mid', clue:'It could be any of us.', wiki:'villains.fandom.com', page:'The Thing (Who Goes There?)'},

    /* ── THE HUMAN ONES ── */
    {slug:'hannibal-lecter', name:'Hannibal Lecter', alt:['Hannibal'], note:'The human ones', tier:'easy', clue:'A nice Chianti.', wiki:'villains.fandom.com'},
    {slug:'norman-bates', name:'Norman Bates', alt:['Norman'], note:'The human ones', tier:'mid', clue:'The motel, and his mother.', wiki:'villains.fandom.com'},
    {slug:'john-kramer', name:'Jigsaw', alt:['John Kramer'], note:'The human ones', tier:'mid', clue:'I want to play a game.', wiki:'villains.fandom.com', page:'John Kramer'},
    {slug:'billy-the-puppet', name:'Billy the Puppet', alt:['Billy'], note:'The human ones', tier:'mid', clue:'Red spirals, on a tricycle.', wiki:'horror.fandom.com'},
    {slug:'amanda-young', name:'Amanda Young', alt:['Amanda'], note:'The human ones', tier:'deep', clue:'The reverse bear trap.', wiki:'villains.fandom.com'},
    {slug:'zep-hindle', name:'Zep Hindle', alt:[], note:'The human ones', tier:'deep', clue:'Saw. The orderly.', wiki:'villains.fandom.com'},
    {slug:'jack-torrance', name:'Jack Torrance', alt:['Jack'], note:'The human ones', tier:'easy', clue:'Here’s Johnny.', wiki:'horror.fandom.com'},
    {slug:'buffalo-bill', name:'Buffalo Bill', alt:['Jame Gumb'], note:'The human ones', tier:'mid', clue:'It puts the lotion on its skin.', wiki:'villains.fandom.com'},
    {slug:'patrick-bateman', name:'Patrick Bateman', alt:[], note:'The human ones', tier:'mid', clue:'Business cards, and Huey Lewis.', wiki:'villains.fandom.com'},
    {slug:'anton-chigurh', name:'Anton Chigurh', alt:[], note:'The human ones', tier:'mid', clue:'Call it. The bolt gun.', wiki:'villains.fandom.com'},
    {slug:'nurse-ratched', name:'Nurse Ratched', alt:[], note:'The human ones', tier:'deep', clue:'The ward, the routine.', wiki:'villains.fandom.com'},
    {slug:'captain-spaulding', name:'Captain Spaulding', alt:[], note:'The human ones', tier:'deep', clue:'The clown at the petrol station.', wiki:'villains.fandom.com'},
    {slug:'otis-driftwood', name:'Otis Driftwood', alt:[], note:'The human ones', tier:'deep', clue:'House of 1000 Corpses.', wiki:'villains.fandom.com', page:'Otis B. Driftwood'},
    {slug:'baby-firefly', name:'Baby Firefly', alt:[], note:'The human ones', tier:'deep', clue:'The laugh.', wiki:'villains.fandom.com'},
    {slug:'dr-satan', name:'Dr. Satan', alt:[], note:'The human ones', tier:'deep', clue:'Under the house.', wiki:'villains.fandom.com', page:'Dr. Satan (House of 1000 Corpses)'},
    {slug:'esther-coleman', name:'Esther', alt:['Esther Coleman','Leena Klammer'], note:'The human ones', tier:'mid', clue:'Orphan. Not nine.', wiki:'villains.fandom.com', page:'Esther Coleman'},
    {slug:'damien-thorn', name:'Damien Thorn', alt:['Damien'], note:'The human ones', tier:'mid', clue:'The birthmark.', wiki:'horror.fandom.com'},
    {slug:'carrie-white', name:'Carrie White', alt:['Carrie'], note:'The human ones', tier:'mid', clue:'The prom, the bucket.', wiki:'villains.fandom.com'},
    {slug:'rose-the-hat', name:'Rose the Hat', alt:[], note:'The human ones', tier:'deep', clue:'Doctor Sleep. The hat.', wiki:'villains.fandom.com'},

    /* ── THE REST ── */
    {slug:'deadite', name:'Deadite', alt:[], note:'The rest', tier:'mid', clue:'Evil Dead. Groovy.', wiki:'villains.fandom.com', page:'Deadites'},
    {slug:'cheryl-williams', name:'Cheryl Williams', alt:[], note:'The rest', tier:'deep', clue:'The first one to go, in the cellar.', wiki:'villains.fandom.com'},
    {slug:'pyramid-head', name:'Pyramid Head', alt:[], note:'The rest', tier:'mid', clue:'Silent Hill. The great knife.', wiki:'villains.fandom.com'},
    {slug:'stripe', name:'Stripe', alt:[], note:'The rest', tier:'mid', clue:'The gremlin with the mohawk.', wiki:'horror.fandom.com'},
    {slug:'leprechaun', name:'Leprechaun', alt:[], note:'The rest', tier:'deep', clue:'Wants his gold back.', wiki:'villains.fandom.com'},
    {slug:'pumpkinhead', name:'Pumpkinhead', alt:[], note:'The rest', tier:'deep', clue:'Summoned for revenge.', wiki:'villains.fandom.com'},
    {slug:'the-creeper', name:'The Creeper', alt:[], note:'The rest', tier:'mid', clue:'Jeepers Creepers. Every 23 years.', wiki:'villains.fandom.com'},
    {slug:'sam', name:'Sam', alt:[], note:'The rest', tier:'mid', clue:'Trick ’r Treat. The sack and the lollipop.', wiki:'horror.fandom.com', page:'Sam (Trick \'r Treat)'},
    {slug:'tall-man', name:'Tall Man', alt:[], note:'The rest', tier:'deep', clue:'Phantasm. The spheres.', wiki:'villains.fandom.com'},
    {slug:'bruce-jaws', name:'Bruce', alt:['The shark','Jaws'], note:'The rest', tier:'mid', clue:'You’re gonna need a bigger boat.', wiki:'villains.fandom.com', page:'Bruce (Jaws)'},
    {slug:'cujo', name:'Cujo', alt:[], note:'The rest', tier:'mid', clue:'The St. Bernard.', wiki:'villains.fandom.com'},
    {slug:'christine', name:'Christine', alt:[], note:'The rest', tier:'deep', clue:'A 1958 Plymouth Fury.', wiki:'horror.fandom.com', page:'Christine (1983)'},
    {slug:'kurt-barlow', name:'Kurt Barlow', alt:[], note:'The rest', tier:'deep', clue:'Salem’s Lot.', wiki:'horror.fandom.com', page:'Kurt Barlow'},
    {slug:'overlook-hotel', name:'The Overlook Hotel', alt:['Overlook'], note:'The rest', tier:'mid', clue:'Room 237.', wiki:'villains.fandom.com', page:'Overlook Hotel'}
  ]
});
