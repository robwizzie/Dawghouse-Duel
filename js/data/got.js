/* ══════════════════════════════════════════════════════════════
   CATEGORY: GAME OF THRONES

   The television version, so the pictures are the actors — which is
   what people actually picture when you say the name.

   Artwork: node tools/fetch-wiki-images.js got
   ══════════════════════════════════════════════════════════════ */
window.DHD_CATEGORIES = window.DHD_CATEGORIES || [];
window.DHD_CATEGORIES.push({
  id: 'got',
  name: 'Game of Thrones',
  blurb: 'Westeros, and everyone who wanted the chair.',
  wiki: 'gameofthrones.fandom.com',
  items: [

    /* ── STARK ── */
    {slug:'jon-snow', name:'Jon Snow', alt:['Jon'], note:'Stark', tier:'easy', clue:'Knows nothing. Lord Commander.'},
    {slug:'eddard-stark', name:'Ned Stark', alt:['Eddard Stark','Ned'], note:'Stark', tier:'easy', clue:'Winter is coming. Did not last long.', page:'Eddard Stark'},
    {slug:'arya-stark', name:'Arya Stark', alt:['Arya'], note:'Stark', tier:'easy', clue:'The list. No one.'},
    {slug:'sansa-stark', name:'Sansa Stark', alt:['Sansa'], note:'Stark', tier:'easy', clue:'Learned the game from the worst people alive.'},
    {slug:'bran-stark', name:'Bran Stark', alt:['Bran','Three-Eyed Raven'], note:'Stark', tier:'easy', clue:'Fell from a tower, ended up on the throne.'},
    {slug:'robb-stark', name:'Robb Stark', alt:['Robb','The Young Wolf'], note:'Stark', tier:'mid', clue:'The King in the North. The Red Wedding.'},
    {slug:'catelyn-stark', name:'Catelyn Stark', alt:['Catelyn'], note:'Stark', tier:'mid', clue:'Ned’s wife. Never trusted Littlefinger enough.'},
    {slug:'rickon-stark', name:'Rickon Stark', alt:['Rickon'], note:'Stark', tier:'deep', clue:'The youngest. Should have run in zigzags.'},
    {slug:'hodor', name:'Hodor', alt:[], note:'Stark', tier:'mid', clue:'Hodor.'},
    {slug:'osha', name:'Osha', alt:[], note:'Stark', tier:'deep', clue:'Wildling who looked after the Stark boys.'},

    /* ── LANNISTER ── */
    {slug:'tyrion-lannister', name:'Tyrion Lannister', alt:['Tyrion','The Imp'], note:'Lannister', tier:'easy', clue:'Drinks and knows things.'},
    {slug:'cersei-lannister', name:'Cersei Lannister', alt:['Cersei'], note:'Lannister', tier:'easy', clue:'You win or you die.'},
    {slug:'jaime-lannister', name:'Jaime Lannister', alt:['Jaime','Kingslayer'], note:'Lannister', tier:'easy', clue:'The Kingslayer. Lost a hand.'},
    {slug:'tywin-lannister', name:'Tywin Lannister', alt:['Tywin'], note:'Lannister', tier:'mid', clue:'Never on the toilet, apparently.'},
    {slug:'joffrey-baratheon', name:'Joffrey', alt:['Joffrey Baratheon'], note:'Lannister', tier:'easy', clue:'Everyone’s least favourite king.', page:'Joffrey Baratheon'},
    {slug:'tommen-baratheon', name:'Tommen', alt:['Tommen Baratheon'], note:'Lannister', tier:'deep', clue:'The gentler brother. Also a king, briefly.', page:'Tommen Baratheon'},
    {slug:'myrcella-baratheon', name:'Myrcella', alt:['Myrcella Baratheon'], note:'Lannister', tier:'deep', clue:'Sent to Dorne for safety. It did not work.', page:'Myrcella Baratheon'},

    /* ── TARGARYEN ── */
    {slug:'daenerys-targaryen', name:'Daenerys Targaryen', alt:['Daenerys','Dany','Khaleesi'], note:'Targaryen', tier:'easy', clue:'Mother of Dragons. All the titles.'},
    {slug:'viserys-targaryen', name:'Viserys Targaryen', alt:['Viserys'], note:'Targaryen', tier:'deep', clue:'Got his crown, in a manner of speaking.', page:'Viserys Targaryen (son of Aerys II)'},
    {slug:'khal-drogo', name:'Khal Drogo', alt:['Drogo'], note:'Targaryen', tier:'mid', clue:'Dothraki khal.'},
    {slug:'missandei', name:'Missandei', alt:[], note:'Targaryen', tier:'mid', clue:'Translator and closest friend.'},
    {slug:'grey-worm', name:'Grey Worm', alt:[], note:'Targaryen', tier:'mid', clue:'Commander of the Unsullied.'},
    {slug:'jorah-mormont', name:'Jorah Mormont', alt:['Jorah'], note:'Targaryen', tier:'mid', clue:'The friend-zoned knight.'},
    {slug:'daario-naharis', name:'Daario Naharis', alt:['Daario'], note:'Targaryen', tier:'deep', clue:'Sellsword. Changed face between seasons.'},
    {slug:'drogon', name:'Drogon', alt:[], note:'Targaryen', tier:'mid', clue:'The black one.'},

    /* ── BARATHEON ── */
    {slug:'robert-baratheon', name:'Robert Baratheon', alt:['Robert'], note:'Baratheon', tier:'mid', clue:'The king who would rather be hunting.'},
    {slug:'stannis-baratheon', name:'Stannis Baratheon', alt:['Stannis'], note:'Baratheon', tier:'mid', clue:'It is Ser Davos. The one true king, allegedly.'},
    {slug:'davos-seaworth', name:'Davos Seaworth', alt:['Davos','The Onion Knight'], note:'Baratheon', tier:'mid', clue:'The Onion Knight. Can barely read.'},
    {slug:'melisandre', name:'Melisandre', alt:['The Red Woman'], note:'Baratheon', tier:'mid', clue:'The night is dark and full of terrors.'},

    /* ── KNIGHTS ── */
    {slug:'brienne-of-tarth', name:'Brienne of Tarth', alt:['Brienne'], note:'Knights', tier:'mid', clue:'Oathkeeper. Taller than everyone.'},
    {slug:'sandor-clegane', name:'The Hound', alt:['Sandor Clegane','Hound'], note:'Knights', tier:'easy', clue:'Hates fire, loves chicken.', page:'Sandor Clegane'},
    {slug:'gregor-clegane', name:'The Mountain', alt:['Gregor Clegane','Mountain'], note:'Knights', tier:'mid', clue:'The big one. Do not fight him.', page:'Gregor Clegane'},
    {slug:'bronn', name:'Bronn', alt:[], note:'Knights', tier:'mid', clue:'Sellsword who kept getting promoted.'},
    {slug:'podrick-payne', name:'Podrick Payne', alt:['Pod'], note:'Knights', tier:'deep', clue:'Squire. Famously good at something.'},
    {slug:'beric-dondarrion', name:'Beric Dondarrion', alt:['Beric'], note:'Knights', tier:'deep', clue:'Kept coming back. Flaming sword.'},
    {slug:'thoros-of-myr', name:'Thoros of Myr', alt:['Thoros'], note:'Knights', tier:'deep', clue:'The red priest who kept reviving him.'},

    /* ── THE COURT ── */
    {slug:'varys', name:'Varys', alt:['The Spider'], note:'The Court', tier:'mid', clue:'The Spider. Little birds everywhere.'},
    {slug:'petyr-baelish', name:'Littlefinger', alt:['Petyr Baelish','Baelish'], note:'The Court', tier:'mid', clue:'Chaos is a ladder.', page:'Petyr Baelish'},
    {slug:'qyburn', name:'Qyburn', alt:[], note:'The Court', tier:'deep', clue:'The maester who lost his chain.'},
    {slug:'high-sparrow', name:'The High Sparrow', alt:['High Sparrow'], note:'The Court', tier:'deep', clue:'Shame. Shame. Shame.', page:'High Sparrow'},
    {slug:'shae', name:'Shae', alt:[], note:'The Court', tier:'deep', clue:'Tyrion’s. It ended badly.'},

    /* ── GREYJOY ── */
    {slug:'theon-greyjoy', name:'Theon Greyjoy', alt:['Theon','Reek'], note:'Greyjoy', tier:'mid', clue:'Reek. Redeemed himself at the end.'},
    {slug:'yara-greyjoy', name:'Yara Greyjoy', alt:['Yara'], note:'Greyjoy', tier:'deep', clue:'His sister. Runs the fleet.'},
    {slug:'euron-greyjoy', name:'Euron Greyjoy', alt:['Euron'], note:'Greyjoy', tier:'deep', clue:'The uncle. Enjoys himself far too much.'},

    /* ── BOLTON ── */
    {slug:'ramsay-bolton', name:'Ramsay Bolton', alt:['Ramsay'], note:'Bolton', tier:'mid', clue:'If you think this has a happy ending.'},
    {slug:'roose-bolton', name:'Roose Bolton', alt:['Roose'], note:'Bolton', tier:'deep', clue:'The father. The Red Wedding.'},
    {slug:'walder-frey', name:'Walder Frey', alt:['Frey'], note:'Bolton', tier:'deep', clue:'The Rains of Castamere.'},

    /* ── TYRELL ── */
    {slug:'olenna-tyrell', name:'Olenna Tyrell', alt:['Olenna','Queen of Thorns'], note:'Tyrell', tier:'mid', clue:'Tell Cersei it was me.'},
    {slug:'margaery-tyrell', name:'Margaery Tyrell', alt:['Margaery'], note:'Tyrell', tier:'mid', clue:'Wanted to be THE queen.'},

    /* ── THE WALL ── */
    {slug:'samwell-tarly', name:'Samwell Tarly', alt:['Sam'], note:'The Wall', tier:'mid', clue:'Read his way to the answers.'},
    {slug:'gilly', name:'Gilly', alt:[], note:'The Wall', tier:'deep', clue:'Escaped Craster’s Keep with Sam.'},
    {slug:'ygritte', name:'Ygritte', alt:[], note:'The Wall', tier:'mid', clue:'You know nothing, Jon Snow.'},
    {slug:'tormund-giantsbane', name:'Tormund Giantsbane', alt:['Tormund'], note:'The Wall', tier:'mid', clue:'Wildling. Very taken with Brienne.'},
    {slug:'night-king', name:'The Night King', alt:['Night King'], note:'The Wall', tier:'easy', clue:'Blue eyes. Walked south.', page:'Night King'},
    {slug:'ghost-direwolf', name:'Ghost', alt:[], note:'The Wall', tier:'deep', clue:'Jon’s direwolf. White, silent.', page:'Ghost'},

    /* ── DORNE ── */
    {slug:'oberyn-martell', name:'Oberyn Martell', alt:['Oberyn','The Red Viper'], note:'Dorne', tier:'mid', clue:'The Red Viper. Should have finished it.'},
    {slug:'ellaria-sand', name:'Ellaria Sand', alt:['Ellaria'], note:'Dorne', tier:'deep', clue:'His paramour. Took revenge badly.'},

    /* ── BRAAVOS ── */
    {slug:'jaqen-hghar', name:'Jaqen H\'ghar', alt:['Jaqen'], note:'Braavos', tier:'mid', clue:'A man has a name.', page:'Jaqen H\'ghar'},

    /* ── THE NORTH ── */
    {slug:'lyanna-mormont', name:'Lyanna Mormont', alt:['Lyanna'], note:'The North', tier:'mid', clue:'Ten years old and scarier than everyone.'},
    {slug:'meera-reed', name:'Meera Reed', alt:['Meera'], note:'The North', tier:'deep', clue:'Dragged Bran across the North.'}
  ]
});
