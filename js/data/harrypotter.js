/* ══════════════════════════════════════════════════════════════
   CATEGORY: HARRY POTTER

   Students, staff, the dark side, creatures, objects and places.

   Artwork: node tools/fetch-wiki-images.js harrypotter
   ══════════════════════════════════════════════════════════════ */
window.DHD_CATEGORIES = window.DHD_CATEGORIES || [];
window.DHD_CATEGORIES.push({
  id: 'harrypotter',
  name: 'Harry Potter',
  blurb: 'The castle, the creatures and everyone in them.',
  wiki: 'harrypotter.fandom.com',
  items: [

    /* ── STUDENTS ── */
    {slug:'harry-potter', name:'Harry Potter', alt:['Harry'], note:'Students', tier:'easy', clue:'The scar, the glasses.'},
    {slug:'ron-weasley', name:'Ron Weasley', alt:['Ron'], note:'Students', tier:'easy', clue:'Red hair, terrified of spiders.'},
    {slug:'hermione-granger', name:'Hermione Granger', alt:['Hermione'], note:'Students', tier:'easy', clue:'It is leviOsa.'},
    {slug:'draco-malfoy', name:'Draco Malfoy', alt:['Draco'], note:'Students', tier:'easy', clue:'My father will hear about this.'},
    {slug:'neville-longbottom', name:'Neville Longbottom', alt:['Neville'], note:'Students', tier:'mid', clue:'Grew into it.'},
    {slug:'luna-lovegood', name:'Luna Lovegood', alt:['Luna'], note:'Students', tier:'mid', clue:'Radish earrings.'},
    {slug:'ginny-weasley', name:'Ginny Weasley', alt:['Ginny'], note:'Students', tier:'mid', clue:'The youngest Weasley.'},
    {slug:'fred-weasley', name:'Fred Weasley', alt:['Fred'], note:'Students', tier:'mid', clue:'One of the twins.'},
    {slug:'george-weasley', name:'George Weasley', alt:['George'], note:'Students', tier:'mid', clue:'The other one. Holey.'},
    {slug:'percy-weasley', name:'Percy Weasley', alt:['Percy'], note:'Students', tier:'deep', clue:'Prefect, and insufferable.'},
    {slug:'cedric-diggory', name:'Cedric Diggory', alt:['Cedric'], note:'Students', tier:'mid', clue:'Hufflepuff champion.'},
    {slug:'cho-chang', name:'Cho Chang', alt:['Cho'], note:'Students', tier:'deep', clue:'Ravenclaw, and a Quidditch player.'},
    {slug:'viktor-krum', name:'Viktor Krum', alt:['Krum'], note:'Students', tier:'mid', clue:'Durmstrang. Seeker.'},
    {slug:'fleur-delacour', name:'Fleur Delacour', alt:['Fleur'], note:'Students', tier:'mid', clue:'Beauxbatons champion.'},

    /* ── STAFF ── */
    {slug:'albus-dumbledore', name:'Albus Dumbledore', alt:['Dumbledore'], note:'Staff', tier:'easy', clue:'Long beard, half-moon glasses.'},
    {slug:'severus-snape', name:'Severus Snape', alt:['Snape'], note:'Staff', tier:'easy', clue:'Always.'},
    {slug:'minerva-mcgonagall', name:'Minerva McGonagall', alt:['McGonagall'], note:'Staff', tier:'easy', clue:'Green robes, pointed hat, no nonsense.'},
    {slug:'rubeus-hagrid', name:'Rubeus Hagrid', alt:['Hagrid'], note:'Staff', tier:'easy', clue:'Yer a wizard.'},
    {slug:'dolores-umbridge', name:'Dolores Umbridge', alt:['Umbridge'], note:'Staff', tier:'mid', clue:'All in pink. Worse than Voldemort.'},
    {slug:'remus-lupin', name:'Remus Lupin', alt:['Lupin'], note:'Staff', tier:'mid', clue:'Shabby robes, chocolate in his pocket.'},
    {slug:'alastor-moody', name:'Alastor Moody', alt:['Mad-Eye Moody','Mad Eye'], note:'Staff', tier:'mid', clue:'Constant vigilance.'},
    {slug:'gilderoy-lockhart', name:'Gilderoy Lockhart', alt:['Lockhart'], note:'Staff', tier:'mid', clue:'Winning smile, no ability.'},
    {slug:'sybill-trelawney', name:'Sybill Trelawney', alt:['Trelawney'], note:'Staff', tier:'mid', clue:'Enormous glasses, endless death omens.'},
    {slug:'filius-flitwick', name:'Filius Flitwick', alt:['Flitwick'], note:'Staff', tier:'deep', clue:'Charms. Very small.'},
    {slug:'pomona-sprout', name:'Pomona Sprout', alt:['Sprout'], note:'Staff', tier:'deep', clue:'Herbology. Earmuffs.'},
    {slug:'horace-slughorn', name:'Horace Slughorn', alt:['Slughorn'], note:'Staff', tier:'mid', clue:'Collects promising students.'},
    {slug:'quirinus-quirrell', name:'Quirinus Quirrell', alt:['Quirrell'], note:'Staff', tier:'mid', clue:'The turban.'},
    {slug:'argus-filch', name:'Argus Filch', alt:['Filch'], note:'Staff', tier:'mid', clue:'The caretaker.'},

    /* ── DARK ── */
    {slug:'lord-voldemort', name:'Lord Voldemort', alt:['Voldemort','You-Know-Who','Tom Riddle'], note:'Dark', tier:'easy', clue:'No nose.'},
    {slug:'bellatrix-lestrange', name:'Bellatrix Lestrange', alt:['Bellatrix'], note:'Dark', tier:'easy', clue:'Escaped Azkaban and enjoyed it.'},
    {slug:'lucius-malfoy', name:'Lucius Malfoy', alt:['Lucius'], note:'Dark', tier:'mid', clue:'The cane with the snake head.'},
    {slug:'narcissa-malfoy', name:'Narcissa Malfoy', alt:['Narcissa'], note:'Dark', tier:'deep', clue:'Lied to Voldemort for her son.'},
    {slug:'peter-pettigrew', name:'Peter Pettigrew', alt:['Wormtail','Pettigrew'], note:'Dark', tier:'mid', clue:'Twelve years as a rat.'},
    {slug:'gellert-grindelwald', name:'Gellert Grindelwald', alt:['Grindelwald'], note:'Dark', tier:'mid', clue:'Before Voldemort, there was him.'},

    /* ── ORDER ── */
    {slug:'sirius-black', name:'Sirius Black', alt:['Sirius'], note:'Order', tier:'easy', clue:'The dog. Wrongly imprisoned.'},
    {slug:'nymphadora-tonks', name:'Tonks', alt:['Nymphadora Tonks'], note:'Order', tier:'mid', clue:'Changes her hair at will.'},
    {slug:'kingsley-shacklebolt', name:'Kingsley Shacklebolt', alt:['Kingsley'], note:'Order', tier:'deep', clue:'The deep voice.'},

    /* ── WEASLEYS ── */
    {slug:'molly-weasley', name:'Molly Weasley', alt:['Molly'], note:'Weasleys', tier:'mid', clue:'Not my daughter, you—'},
    {slug:'arthur-weasley', name:'Arthur Weasley', alt:['Arthur'], note:'Weasleys', tier:'mid', clue:'Fascinated by plugs.'},
    {slug:'bill-weasley', name:'Bill Weasley', alt:['Bill'], note:'Weasleys', tier:'deep', clue:'Long hair, fang earring, curse-breaker.'},
    {slug:'charlie-weasley', name:'Charlie Weasley', alt:['Charlie'], note:'Weasleys', tier:'deep', clue:'Works with dragons in Romania.'},

    /* ── CREATURES ── */
    {slug:'dobby', name:'Dobby', alt:[], note:'Creatures', tier:'easy', clue:'A free elf.'},
    {slug:'kreacher', name:'Kreacher', alt:[], note:'Creatures', tier:'mid', clue:'The Black family elf.'},
    {slug:'winky', name:'Winky', alt:[], note:'Creatures', tier:'deep', clue:'Crouch’s elf.'},
    {slug:'hedwig', name:'Hedwig', alt:[], note:'Creatures', tier:'easy', clue:'The snowy owl.'},
    {slug:'fawkes', name:'Fawkes', alt:[], note:'Creatures', tier:'mid', clue:'Burns and comes back.'},
    {slug:'buckbeak', name:'Buckbeak', alt:['Witherwings'], note:'Creatures', tier:'mid', clue:'Bow first.'},
    {slug:'crookshanks', name:'Crookshanks', alt:[], note:'Creatures', tier:'mid', clue:'Squashed face. Hermione’s.'},
    {slug:'nagini', name:'Nagini', alt:[], note:'Creatures', tier:'mid', clue:'Voldemort’s snake.'},
    {slug:'aragog', name:'Aragog', alt:[], note:'Creatures', tier:'mid', clue:'Follow the spiders.'},
    {slug:'basilisk', name:'Basilisk', alt:[], note:'Creatures', tier:'mid', clue:'Do not look it in the eye.'},
    {slug:'dementor', name:'Dementor', alt:[], note:'Creatures', tier:'easy', clue:'Sucks the joy out of the room.'},
    {slug:'boggart', name:'Boggart', alt:[], note:'Creatures', tier:'mid', clue:'Riddikulus.'},
    {slug:'thestral', name:'Thestral', alt:[], note:'Creatures', tier:'mid', clue:'Only visible if you have seen death.'},
    {slug:'hippogriff', name:'Hippogriff', alt:[], note:'Creatures', tier:'mid', clue:'Half eagle, half horse.'},
    {slug:'grindylow', name:'Grindylow', alt:[], note:'Creatures', tier:'deep', clue:'In the lake.'},
    {slug:'cornish-pixie', name:'Cornish pixie', alt:['Pixie'], note:'Creatures', tier:'deep', clue:'Lockhart let them out.'},
    {slug:'centaur', name:'Centaur', alt:[], note:'Creatures', tier:'mid', clue:'In the Forbidden Forest.'},
    {slug:'mountain-troll', name:'Mountain troll', alt:['Troll'], note:'Creatures', tier:'mid', clue:'In the girls’ bathroom.'},
    {slug:'niffler', name:'Niffler', alt:[], note:'Creatures', tier:'mid', clue:'Steals anything shiny.'},
    {slug:'bowtruckle', name:'Bowtruckle', alt:[], note:'Creatures', tier:'deep', clue:'Twig with eyes. Pickett.'},
    {slug:'occamy', name:'Occamy', alt:[], note:'Creatures', tier:'deep', clue:'Fills whatever space it is in.'},

    /* ── GHOSTS ── */
    {slug:'nearly-headless-nick', name:'Nearly Headless Nick', alt:['Nick'], note:'Ghosts', tier:'mid', clue:'Nearly.'},
    {slug:'moaning-myrtle', name:'Moaning Myrtle', alt:['Myrtle'], note:'Ghosts', tier:'mid', clue:'Haunts a bathroom.'},
    {slug:'peeves', name:'Peeves', alt:[], note:'Ghosts', tier:'mid', clue:'Poltergeist. Not technically a ghost.'},
    {slug:'fat-lady', name:'The Fat Lady', alt:['Fat Lady'], note:'Ghosts', tier:'deep', clue:'Guards a common room.'},

    /* ── FANTASTIC BEASTS ── */
    {slug:'newt-scamander', name:'Newt Scamander', alt:['Newt'], note:'Fantastic Beasts', tier:'mid', clue:'The suitcase.'},
    {slug:'tina-goldstein', name:'Tina Goldstein', alt:['Porpentina Goldstein','Tina'], note:'Fantastic Beasts', tier:'deep', clue:'Auror.'},
    {slug:'queenie-goldstein', name:'Queenie Goldstein', alt:['Queenie'], note:'Fantastic Beasts', tier:'deep', clue:'Reads minds.'},
    {slug:'jacob-kowalski', name:'Jacob Kowalski', alt:['Jacob'], note:'Fantastic Beasts', tier:'mid', clue:'The No-Maj baker.'},

    /* ── OBJECTS ── */
    {slug:'sorting-hat', name:'Sorting Hat', alt:[], note:'Objects', tier:'easy', clue:'It sings, then it decides.'},
    {slug:'golden-snitch', name:'Golden Snitch', alt:['Snitch'], note:'Objects', tier:'easy', clue:'Worth a hundred and fifty.'},
    {slug:'marauders-map', name:'Marauder’s Map', alt:['Marauders Map'], note:'Objects', tier:'easy', clue:'I solemnly swear.'},
    {slug:'invisibility-cloak', name:'Cloak of Invisibility', alt:['Invisibility Cloak'], note:'Objects', tier:'easy', clue:'One of the three.'},
    {slug:'elder-wand', name:'Elder Wand', alt:[], note:'Objects', tier:'mid', clue:'The most powerful wand there is.'},
    {slug:'resurrection-stone', name:'Resurrection Stone', alt:[], note:'Objects', tier:'mid', clue:'The second Hallow.'},
    {slug:'time-turner', name:'Time-Turner', alt:['Time Turner'], note:'Objects', tier:'mid', clue:'Three turns should do it.'},
    {slug:'pensieve', name:'Pensieve', alt:[], note:'Objects', tier:'mid', clue:'A basin for memories.'},
    {slug:'mirror-of-erised', name:'Mirror of Erised', alt:['Erised'], note:'Objects', tier:'mid', clue:'Shows you what you want.'},
    {slug:'philosophers-stone', name:'Philosopher’s Stone', alt:['Sorcerers Stone','Philosophers Stone'], note:'Objects', tier:'mid', clue:'Turns metal to gold.'},
    {slug:'goblet-of-fire', name:'Goblet of Fire', alt:[], note:'Objects', tier:'mid', clue:'It spits out names.'},
    {slug:'triwizard-cup', name:'Triwizard Cup', alt:[], note:'Objects', tier:'deep', clue:'A portkey, as it turns out.'},
    {slug:'horcrux', name:'Horcrux', alt:[], note:'Objects', tier:'mid', clue:'A piece of a soul.'},
    {slug:'deathly-hallows', name:'Deathly Hallows', alt:[], note:'Objects', tier:'mid', clue:'The triangle, the circle, the line.'},
    {slug:'nimbus-2000', name:'Nimbus 2000', alt:[], note:'Objects', tier:'mid', clue:'His first broom.'},
    {slug:'firebolt', name:'Firebolt', alt:[], note:'Objects', tier:'mid', clue:'From Sirius, anonymously.'},
    {slug:'sword-of-gryffindor', name:'Sword of Gryffindor', alt:[], note:'Objects', tier:'mid', clue:'Comes to a true Gryffindor.'},
    {slug:'deluminator', name:'Deluminator', alt:['Put-Outer'], note:'Objects', tier:'deep', clue:'Takes the lights out.'},
    {slug:'monster-book', name:'Monster Book of Monsters', alt:[], note:'Objects', tier:'deep', clue:'Stroke the spine.'},
    {slug:'remembrall', name:'Remembrall', alt:[], note:'Objects', tier:'deep', clue:'Goes red and never says why.'},
    {slug:'howler', name:'Howler', alt:[], note:'Objects', tier:'mid', clue:'Read it before it explodes.'},
    {slug:'chocolate-frog', name:'Chocolate Frog', alt:[], note:'Objects', tier:'mid', clue:'One hop, then it is gone.'},
    {slug:'butterbeer', name:'Butterbeer', alt:[], note:'Objects', tier:'mid', clue:'Three Broomsticks.'},

    /* ── QUIDDITCH ── */
    {slug:'quaffle', name:'Quaffle', alt:[], note:'Quidditch', tier:'deep', clue:'The one you score with.'},
    {slug:'bludger', name:'Bludger', alt:[], note:'Quidditch', tier:'deep', clue:'The one trying to hurt you.'},

    /* ── PLACES ── */
    {slug:'hogwarts', name:'Hogwarts Castle', alt:['Hogwarts'], note:'Places', tier:'easy', clue:'The castle itself.'},
    {slug:'hogwarts-express', name:'Hogwarts Express', alt:[], note:'Places', tier:'easy', clue:'The red engine.'},
    {slug:'platform-nine', name:'Platform Nine and Three-Quarters', alt:['Platform 9 3/4'], note:'Places', tier:'mid', clue:'Straight at the barrier.'},
    {slug:'diagon-alley', name:'Diagon Alley', alt:[], note:'Places', tier:'mid', clue:'Three up, two across.'},
    {slug:'gringotts', name:'Gringotts Wizarding Bank', alt:['Gringotts'], note:'Places', tier:'mid', clue:'Run by goblins. Dragon in the basement.'},
    {slug:'azkaban', name:'Azkaban', alt:[], note:'Places', tier:'mid', clue:'The prison in the sea.'},
    {slug:'ministry-of-magic', name:'Ministry of Magic', alt:['Ministry'], note:'Places', tier:'mid', clue:'Down the telephone box.'},
    {slug:'room-of-requirement', name:'Room of Requirement', alt:[], note:'Places', tier:'mid', clue:'It is there when you need it.'},
    {slug:'chamber-of-secrets', name:'Chamber of Secrets', alt:[], note:'Places', tier:'mid', clue:'Open it in Parseltongue.'},
    {slug:'forbidden-forest', name:'Forbidden Forest', alt:[], note:'Places', tier:'mid', clue:'The clue is in the name.'},
    {slug:'whomping-willow', name:'Whomping Willow', alt:[], note:'Places', tier:'mid', clue:'It hits back.'},
    {slug:'great-hall', name:'Great Hall', alt:[], note:'Places', tier:'mid', clue:'The ceiling is the sky.'},
    {slug:'the-burrow', name:'The Burrow', alt:[], note:'Places', tier:'mid', clue:'Held up by magic.'},
    {slug:'shrieking-shack', name:'Shrieking Shack', alt:[], note:'Places', tier:'deep', clue:'Not actually haunted.'},
    {slug:'godrics-hollow', name:'Godric’s Hollow', alt:['Godrics Hollow'], note:'Places', tier:'deep', clue:'Where it started.'},
    {slug:'privet-drive', name:'Number four, Privet Drive', alt:['Privet Drive'], note:'Places', tier:'mid', clue:'The cupboard under the stairs.'},
    {slug:'grimmauld-place', name:'Grimmauld Place', alt:[], note:'Places', tier:'deep', clue:'Number twelve, if you can see it.'},
    {slug:'knight-bus', name:'Knight Bus', alt:[], note:'Places', tier:'mid', clue:'Triple-decker, purple.'},
    {slug:'ford-anglia', name:'Ford Anglia', alt:[], note:'Places', tier:'mid', clue:'It flies, badly.'},

    /* ── HOUSES ── */
    {slug:'gryffindor', name:'Gryffindor', alt:[], note:'Houses', tier:'easy', clue:'Lion. Red and gold.'},
    {slug:'slytherin', name:'Slytherin', alt:[], note:'Houses', tier:'easy', clue:'Serpent. Green and silver.'},
    {slug:'hufflepuff', name:'Hufflepuff', alt:[], note:'Houses', tier:'easy', clue:'Badger. Yellow and black.'},
    {slug:'ravenclaw', name:'Ravenclaw', alt:[], note:'Houses', tier:'easy', clue:'Eagle. Blue and bronze.'}
  ]
});
