/* ══════════════════════════════════════════════════════════════
   CATEGORY: DUNGEONS & DRAGONS

   Monsters, mostly — they are the part of D&D with a picture and a
   name everyone at the table already argues about. A beholder or a
   mimic is instant to anyone who plays and meaningless to anyone who
   doesn't, which is exactly what makes this deck worth having.

   Sorted roughly by how early you meet them, with the deep tier
   holding the ones only players will get: flumph, grell, nothic.

   Artwork: node tools/fetch-wiki-images.js dnd
   ══════════════════════════════════════════════════════════════ */
window.DHD_CATEGORIES = window.DHD_CATEGORIES || [];
window.DHD_CATEGORIES.push({
  id: 'dnd',
  name: 'Dungeons & Dragons',
  blurb: 'Name the monster. Adventurers only.',
  wiki: 'forgottenrealms.fandom.com',
  items: [

    /* ── SIGNATURE MONSTERS ── */
    {slug:'beholder', name:'Beholder', alt:[], note:'Signature monsters', tier:'easy', clue:'Floating ball of eyes. Ten stalks and a big one.'},
    {slug:'mind-flayer', name:'Mind Flayer', alt:['Illithid'], note:'Signature monsters', tier:'easy', clue:'Purple, tentacled face. Eats brains.'},
    {slug:'owlbear', name:'Owlbear', alt:[], note:'Signature monsters', tier:'easy', clue:'Exactly what it sounds like.'},
    {slug:'gelatinous-cube', name:'Gelatinous Cube', alt:[], note:'Signature monsters', tier:'easy', clue:'A corridor-sized block of transparent digestion.', page:'Gelatinous cube'},
    {slug:'displacer-beast', name:'Displacer Beast', alt:[], note:'Signature monsters', tier:'mid', clue:'Panther with tentacles. Never where it looks.', page:'Displacer beast'},
    {slug:'mimic', name:'Mimic', alt:[], note:'Signature monsters', tier:'easy', clue:'That chest is not a chest.'},
    {slug:'rust-monster', name:'Rust Monster', alt:[], note:'Signature monsters', tier:'mid', clue:'Eats your armour. Worse than losing hit points.', page:'Rust monster'},
    {slug:'tarrasque', name:'Tarrasque', alt:[], note:'Signature monsters', tier:'mid', clue:'The one at the back of the book.'},
    {slug:'lich', name:'Lich', alt:[], note:'Signature monsters', tier:'easy', clue:'A wizard who refused to die properly.'},
    {slug:'bulette', name:'Bulette', alt:['Land shark'], note:'Signature monsters', tier:'deep', clue:'Land shark. Comes up through the floor.'},
    {slug:'umber-hulk', name:'Umber Hulk', alt:[], note:'Signature monsters', tier:'deep', clue:'Four eyes, mandibles, confusing to look at.', page:'Umber hulk'},
    {slug:'aboleth', name:'Aboleth', alt:[], note:'Signature monsters', tier:'deep', clue:'Ancient fish thing that remembers everything.'},

    /* ── DRAGONS ── */
    {slug:'red-dragon', name:'Red Dragon', alt:[], note:'Dragons', tier:'easy', clue:'Fire, and the worst temper of the chromatics.'},
    {slug:'black-dragon', name:'Black Dragon', alt:[], note:'Dragons', tier:'mid', clue:'Acid. Lives in a swamp.', page:'Black dragon'},
    {slug:'blue-dragon', name:'Blue Dragon', alt:[], note:'Dragons', tier:'mid', clue:'Lightning. Deserts.', page:'Blue dragon'},
    {slug:'green-dragon', name:'Green Dragon', alt:[], note:'Dragons', tier:'mid', clue:'Poison. Forests. Manipulative.'},
    {slug:'white-dragon', name:'White Dragon', alt:[], note:'Dragons', tier:'mid', clue:'Cold, and the least clever of them.', page:'White dragon'},
    {slug:'gold-dragon', name:'Gold Dragon', alt:[], note:'Dragons', tier:'deep', clue:'The best of the metallics.'},
    {slug:'silver-dragon', name:'Silver Dragon', alt:[], note:'Dragons', tier:'deep', clue:'Likes people enough to live among them.', page:'Silver dragon'},
    {slug:'dracolich', name:'Dracolich', alt:[], note:'Dragons', tier:'deep', clue:'A dragon that also refused to die.'},
    {slug:'tiamat', name:'Tiamat', alt:[], note:'Dragons', tier:'mid', clue:'Five heads, five colours, one very bad day.'},
    {slug:'bahamut', name:'Bahamut', alt:[], note:'Dragons', tier:'deep', clue:'The platinum one. The other side of that coin.'},

    /* ── HUMANOIDS ── */
    {slug:'kobold', name:'Kobold', alt:[], note:'Humanoids', tier:'easy', clue:'Small, scaly, always in numbers.'},
    {slug:'goblin', name:'Goblin', alt:[], note:'Humanoids', tier:'easy', clue:'The first thing most parties ever kill.'},
    {slug:'hobgoblin', name:'Hobgoblin', alt:[], note:'Humanoids', tier:'mid', clue:'The organised, armoured one.'},
    {slug:'bugbear', name:'Bugbear', alt:[], note:'Humanoids', tier:'mid', clue:'The big hairy one that sneaks.'},
    {slug:'gnoll', name:'Gnoll', alt:[], note:'Humanoids', tier:'mid', clue:'Hyena-headed, and it laughs.'},
    {slug:'drow', name:'Drow', alt:['Dark elf'], note:'Humanoids', tier:'mid', clue:'Dark elf. From very far down.'},
    {slug:'githyanki', name:'Githyanki', alt:[], note:'Humanoids', tier:'deep', clue:'Yellow-skinned, red-armoured, rides a dragon.'},
    {slug:'yuan-ti', name:'Yuan-ti', alt:[], note:'Humanoids', tier:'deep', clue:'Snake people. Never trust the diplomacy.'},

    /* ── GIANTS AND BEASTS ── */
    {slug:'troll', name:'Troll', alt:[], note:'Giants and beasts', tier:'easy', clue:'Regenerates. Bring fire.'},
    {slug:'ogre', name:'Ogre', alt:[], note:'Giants and beasts', tier:'easy', clue:'Big, slow, hits hard.'},
    {slug:'hill-giant', name:'Hill Giant', alt:[], note:'Giants and beasts', tier:'mid', clue:'The stupid, hungry one.'},
    {slug:'fire-giant', name:'Fire Giant', alt:[], note:'Giants and beasts', tier:'deep', clue:'Smiths. Black armour.', page:'Fire giant'},
    {slug:'storm-giant', name:'Storm Giant', alt:[], note:'Giants and beasts', tier:'deep', clue:'The top of the ordning.', page:'Storm giant'},
    {slug:'purple-worm', name:'Purple Worm', alt:[], note:'Giants and beasts', tier:'deep', clue:'Swallows you whole. Underdark.', page:'Purple worm'},
    {slug:'remorhaz', name:'Remorhaz', alt:[], note:'Giants and beasts', tier:'deep', clue:'Arctic centipede that glows red-hot.'},
    {slug:'roc', name:'Roc', alt:[], note:'Giants and beasts', tier:'deep', clue:'A bird that carries off cattle.'},

    /* ── CLASSIC BESTIARY ── */
    {slug:'basilisk', name:'Basilisk', alt:[], note:'Classic bestiary', tier:'mid', clue:'Don’t meet its eyes.'},
    {slug:'cockatrice', name:'Cockatrice', alt:[], note:'Classic bestiary', tier:'deep', clue:'The smaller, sillier version of that problem.'},
    {slug:'chimera', name:'Chimera', alt:[], note:'Classic bestiary', tier:'mid', clue:'Lion, goat and dragon, all arguing.'},
    {slug:'manticore', name:'Manticore', alt:[], note:'Classic bestiary', tier:'mid', clue:'Lion body, human face, spikes it throws.'},
    {slug:'hydra', name:'Hydra', alt:[], note:'Classic bestiary', tier:'mid', clue:'Cut one off, get two back.'},
    {slug:'wyvern', name:'Wyvern', alt:[], note:'Classic bestiary', tier:'mid', clue:'Dragon, two legs, stinger. Not a dragon.'},
    {slug:'griffon', name:'Griffon', alt:[], note:'Classic bestiary', tier:'mid', clue:'Eagle in front, lion behind.'},
    {slug:'hippogriff', name:'Hippogriff', alt:[], note:'Classic bestiary', tier:'deep', clue:'Eagle in front, horse behind.'},
    {slug:'sphinx', name:'Sphinx', alt:[], note:'Classic bestiary', tier:'mid', clue:'Riddles, and a lot of hit points.'},
    {slug:'unicorn', name:'Unicorn', alt:[], note:'Classic bestiary', tier:'easy', clue:'Yes, it is in the book.'},
    {slug:'pegasus', name:'Pegasus', alt:[], note:'Classic bestiary', tier:'mid', clue:'The winged horse.'},
    {slug:'treant', name:'Treant', alt:[], note:'Classic bestiary', tier:'mid', clue:'An angry tree.'},
    {slug:'dryad', name:'Dryad', alt:[], note:'Classic bestiary', tier:'deep', clue:'Bound to a tree, and charming about it.'},
    {slug:'shambling-mound', name:'Shambling Mound', alt:[], note:'Classic bestiary', tier:'deep', clue:'A pile of vegetation that suffocates you.', page:'Shambling mound'},

    /* ── UNDEAD ── */
    {slug:'ghoul', name:'Ghoul', alt:[], note:'Undead', tier:'mid', clue:'Paralysing claws.'},
    {slug:'ghast', name:'Ghast', alt:[], note:'Undead', tier:'deep', clue:'The ghoul’s worse cousin. The stench.'},
    {slug:'wight', name:'Wight', alt:[], note:'Undead', tier:'mid', clue:'Drains your maximum hit points.'},
    {slug:'wraith', name:'Wraith', alt:[], note:'Undead', tier:'mid', clue:'Incorporeal, and it walks through walls.'},
    {slug:'banshee', name:'Banshee', alt:[], note:'Undead', tier:'mid', clue:'The wail. Save or die.'},
    {slug:'mummy-lord', name:'Mummy Lord', alt:[], note:'Undead', tier:'deep', clue:'Bandages, curses, a very bad tomb.', page:'Mummy lord'},
    {slug:'vampire-spawn', name:'Vampire Spawn', alt:[], note:'Undead', tier:'deep', clue:'The ones the vampire made.', page:'Vampire spawn'},
    {slug:'death-knight', name:'Death Knight', alt:[], note:'Undead', tier:'deep', clue:'A paladin who fell all the way.', page:'Death knight'},

    /* ── FIENDS ── */
    {slug:'balor', name:'Balor', alt:[], note:'Fiends', tier:'mid', clue:'Whip, sword, wings, on fire. Explodes when it dies.'},
    {slug:'pit-fiend', name:'Pit Fiend', alt:[], note:'Fiends', tier:'mid', clue:'The top of the devil ladder.', page:'Pit fiend'},
    {slug:'erinyes', name:'Erinyes', alt:[], note:'Fiends', tier:'deep', clue:'Fallen angel with a rope.'},
    {slug:'marilith', name:'Marilith', alt:[], note:'Fiends', tier:'deep', clue:'Six arms, six swords, snake below.'},
    {slug:'vrock', name:'Vrock', alt:[], note:'Fiends', tier:'deep', clue:'The vulture demon. Spores.'},
    {slug:'hezrou', name:'Hezrou', alt:[], note:'Fiends', tier:'deep', clue:'The toad demon. The smell.'},
    {slug:'nalfeshnee', name:'Nalfeshnee', alt:[], note:'Fiends', tier:'deep', clue:'Boar-headed and enormous.'},
    {slug:'succubus', name:'Succubus', alt:[], note:'Fiends', tier:'mid', clue:'The kiss.'},

    /* ── DEEP CUTS ── */
    {slug:'flumph', name:'Flumph', alt:[], note:'Deep cuts', tier:'deep', clue:'A friendly floating jellyfish. Genuinely nice.'},
    {slug:'intellect-devourer', name:'Intellect Devourer', alt:[], note:'Deep cuts', tier:'deep', clue:'A brain that walks on four legs and takes your skull.', page:'Intellect devourer'},
    {slug:'grell', name:'Grell', alt:[], note:'Deep cuts', tier:'deep', clue:'A floating brain with a beak and tentacles.'},
    {slug:'chuul', name:'Chuul', alt:[], note:'Deep cuts', tier:'deep', clue:'Lobster thing that serves the aboleths.'},
    {slug:'nothic', name:'Nothic', alt:[], note:'Deep cuts', tier:'deep', clue:'One enormous eye. Knows your secrets.'},
    {slug:'otyugh', name:'Otyugh', alt:[], note:'Deep cuts', tier:'deep', clue:'Lives in the rubbish. Eats the rubbish.'},
    {slug:'roper', name:'Roper', alt:[], note:'Deep cuts', tier:'deep', clue:'That stalagmite is not a stalagmite.'},
    {slug:'carrion-crawler', name:'Carrion Crawler', alt:[], note:'Deep cuts', tier:'deep', clue:'Ceiling centipede with paralysing tentacles.', page:'Carrion crawler'},
    {slug:'ankheg', name:'Ankheg', alt:[], note:'Deep cuts', tier:'deep', clue:'Burrowing insect. Acid spray.'},
    {slug:'myconid', name:'Myconid', alt:[], note:'Deep cuts', tier:'deep', clue:'Mushroom folk. Talk in spores.'},
    {slug:'modron', name:'Modron', alt:[], note:'Deep cuts', tier:'deep', clue:'Geometric clockwork bureaucrats of law.'},
    {slug:'slaad', name:'Slaad', alt:[], note:'Deep cuts', tier:'deep', clue:'Chaos frogs. Do not let one implant you.'},

    /* ── LEGENDS ── */
    {slug:'drizzt', name:'Drizzt Do’Urden', alt:['Drizzt'], note:'Legends', tier:'mid', clue:'Two scimitars, a panther, and a lot of novels.', page:'Drizzt Do\'Urden'},
    {slug:'strahd', name:'Strahd von Zarovich', alt:['Strahd'], note:'Legends', tier:'mid', clue:'The vampire who owns the castle and the module.'},
    {slug:'vecna', name:'Vecna', alt:[], note:'Legends', tier:'mid', clue:'The hand and the eye.'},
    {slug:'elminster', name:'Elminster', alt:[], note:'Legends', tier:'deep', clue:'The Sage of Shadowdale.'},
    {slug:'mordenkainen', name:'Mordenkainen', alt:[], note:'Legends', tier:'deep', clue:'His name is on half your spells.'},
    {slug:'lolth', name:'Lolth', alt:[], note:'Legends', tier:'mid', clue:'The Spider Queen. The drow answer to her.'},

    /* ── ITEMS ── */
    {slug:'bag-of-holding', name:'Bag of Holding', alt:[], note:'Items', tier:'mid', clue:'Do not put it inside another one.', page:'Bag of holding'},
    {slug:'deck-of-many-things', name:'Deck of Many Things', alt:[], note:'Items', tier:'mid', clue:'The single worst idea in the game.', page:'Deck of many things'}
  ]
});
