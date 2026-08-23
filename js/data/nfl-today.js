/* ══════════════════════════════════════════════════════════════
   CATEGORY: NFL — TODAY

   Everyone currently in the league. Names change fast at this
   position, so this deck is the one to refresh each season.

   Artwork: node tools/fetch-wiki-images.js nfl-today
   ══════════════════════════════════════════════════════════════ */
window.DHD_CATEGORIES = window.DHD_CATEGORIES || [];
window.DHD_CATEGORIES.push({
  id: 'nfl-today',
  name: 'NFL — Today',
  blurb: 'The guys playing right now.',
  wiki: 'en.wikipedia.org',
  items: [

    /* ── QUARTERBACK ── */
    {slug:'patrick-mahomes', name:'Patrick Mahomes', alt:['Mahomes'], note:'Quarterback', tier:'easy', clue:'Chiefs. Sidearm throws nobody else attempts.'},
    {slug:'josh-allen', name:'Josh Allen', alt:['Allen'], note:'Quarterback', tier:'easy', clue:'Bills. Runs people over as a quarterback.', page:'Josh Allen (quarterback)'},
    {slug:'joe-burrow', name:'Joe Burrow', alt:['Burrow'], note:'Quarterback', tier:'easy', clue:'Bengals. Sunglasses and a cigar after the title.'},
    {slug:'lamar-jackson', name:'Lamar Jackson', alt:['Lamar'], note:'Quarterback', tier:'easy', clue:'Ravens. Two MVPs, impossible to catch.'},
    {slug:'jalen-hurts', name:'Jalen Hurts', alt:['Hurts'], note:'Quarterback', tier:'easy', clue:'Eagles. The tush push.'},
    {slug:'justin-herbert', name:'Justin Herbert', alt:['Herbert'], note:'Quarterback', tier:'mid', clue:'Chargers. Enormous arm, permanently in a losing position.'},
    {slug:'trevor-lawrence', name:'Trevor Lawrence', alt:['Lawrence'], note:'Quarterback', tier:'mid', clue:'Jaguars. The hair.'},
    {slug:'cj-stroud', name:'C.J. Stroud', alt:['Stroud'], note:'Quarterback', tier:'mid', clue:'Texans. Rookie year nobody saw coming.', page:'C. J. Stroud'},
    {slug:'jayden-daniels', name:'Jayden Daniels', alt:['Daniels'], note:'Quarterback', tier:'mid', clue:'Commanders. Won the job in a week.'},
    {slug:'brock-purdy', name:'Brock Purdy', alt:['Purdy'], note:'Quarterback', tier:'mid', clue:'49ers. Mr Irrelevant, and then not.'},
    {slug:'dak-prescott', name:'Dak Prescott', alt:['Dak'], note:'Quarterback', tier:'mid', clue:'Cowboys.'},
    {slug:'tua-tagovailoa', name:'Tua Tagovailoa', alt:['Tua'], note:'Quarterback', tier:'mid', clue:'Dolphins. Lefty.'},
    {slug:'kyler-murray', name:'Kyler Murray', alt:['Kyler'], note:'Quarterback', tier:'mid', clue:'Cardinals. Also drafted by baseball.'},
    {slug:'baker-mayfield', name:'Baker Mayfield', alt:['Baker'], note:'Quarterback', tier:'deep', clue:'Buccaneers. Planted a flag once.'},
    {slug:'jared-goff', name:'Jared Goff', alt:['Goff'], note:'Quarterback', tier:'deep', clue:'Lions.'},

    /* ── WIDE RECEIVER ── */
    {slug:'justin-jefferson', name:'Justin Jefferson', alt:['Jefferson'], note:'Wide receiver', tier:'easy', clue:'Vikings. The Griddy.'},
    {slug:'jamarr-chase', name:'Ja\'Marr Chase', alt:['Chase'], note:'Wide receiver', tier:'easy', clue:'Bengals. Burrow’s college roommate.', page:'Ja\'Marr Chase'},
    {slug:'ceedee-lamb', name:'CeeDee Lamb', alt:['Lamb'], note:'Wide receiver', tier:'easy', clue:'Cowboys.'},
    {slug:'tyreek-hill', name:'Tyreek Hill', alt:['Hill','Cheetah'], note:'Wide receiver', tier:'easy', clue:'Dolphins. Nobody is faster.'},
    {slug:'aj-brown', name:'A.J. Brown', alt:['Brown'], note:'Wide receiver', tier:'mid', clue:'Eagles. Reads books on the sideline.', page:'A.J. Brown'},
    {slug:'amon-ra-st-brown', name:'Amon-Ra St. Brown', alt:['St. Brown'], note:'Wide receiver', tier:'mid', clue:'Lions. Sun God.'},
    {slug:'puka-nacua', name:'Puka Nacua', alt:['Nacua'], note:'Wide receiver', tier:'mid', clue:'Rams. Broke rookie records immediately.'},
    {slug:'davante-adams', name:'Davante Adams', alt:['Adams'], note:'Wide receiver', tier:'mid', clue:'Best route runner of his era.'},
    {slug:'stefon-diggs', name:'Stefon Diggs', alt:['Diggs'], note:'Wide receiver', tier:'mid', clue:'The Minneapolis Miracle.'},
    {slug:'dk-metcalf', name:'DK Metcalf', alt:['Metcalf'], note:'Wide receiver', tier:'mid', clue:'Built like nothing else at the position.'},
    {slug:'garrett-wilson', name:'Garrett Wilson', alt:['Wilson'], note:'Wide receiver', tier:'deep', clue:'Jets.'},

    /* ── TIGHT END ── */
    {slug:'travis-kelce', name:'Travis Kelce', alt:['Kelce'], note:'Tight end', tier:'easy', clue:'Chiefs. The most famous tight end alive.'},
    {slug:'george-kittle', name:'George Kittle', alt:['Kittle'], note:'Tight end', tier:'mid', clue:'49ers. Blocks like a lineman, celebrates like nobody else.'},
    {slug:'sam-laporta', name:'Sam LaPorta', alt:['LaPorta'], note:'Tight end', tier:'deep', clue:'Lions.'},

    /* ── RUNNING BACK ── */
    {slug:'christian-mccaffrey', name:'Christian McCaffrey', alt:['CMC','McCaffrey'], note:'Running back', tier:'easy', clue:'49ers. Does everything.'},
    {slug:'saquon-barkley', name:'Saquon Barkley', alt:['Saquon'], note:'Running back', tier:'easy', clue:'Eagles. The backwards hurdle.'},
    {slug:'derrick-henry', name:'Derrick Henry', alt:['King Henry','Henry'], note:'Running back', tier:'easy', clue:'Ravens. Stiff-arms people into the ground.'},
    {slug:'bijan-robinson', name:'Bijan Robinson', alt:['Bijan'], note:'Running back', tier:'mid', clue:'Falcons.'},
    {slug:'jahmyr-gibbs', name:'Jahmyr Gibbs', alt:['Gibbs'], note:'Running back', tier:'deep', clue:'Lions.'},

    /* ── DEFENCE ── */
    {slug:'micah-parsons', name:'Micah Parsons', alt:['Parsons'], note:'Defence', tier:'easy', clue:'Cowboys. Rushes from anywhere.'},
    {slug:'myles-garrett', name:'Myles Garrett', alt:['Garrett'], note:'Defence', tier:'easy', clue:'Browns. Writes poetry, ends quarterbacks.'},
    {slug:'tj-watt', name:'T.J. Watt', alt:['Watt'], note:'Defence', tier:'easy', clue:'Steelers. One of three brothers.', page:'T. J. Watt'},
    {slug:'nick-bosa', name:'Nick Bosa', alt:['Bosa'], note:'Defence', tier:'mid', clue:'49ers.'},
    {slug:'aidan-hutchinson', name:'Aidan Hutchinson', alt:['Hutchinson'], note:'Defence', tier:'mid', clue:'Lions.'},
    {slug:'maxx-crosby', name:'Maxx Crosby', alt:['Crosby'], note:'Defence', tier:'mid', clue:'Raiders. Motor never stops.'},
    {slug:'sauce-gardner', name:'Sauce Gardner', alt:['Sauce'], note:'Defence', tier:'mid', clue:'Jets. Nobody throws at him.'},
    {slug:'patrick-surtain', name:'Patrick Surtain II', alt:['Surtain'], note:'Defence', tier:'deep', clue:'Broncos.'},
    {slug:'derwin-james', name:'Derwin James', alt:['James'], note:'Defence', tier:'deep', clue:'Chargers.'},

    /* ── OFFENSIVE LINE ── */
    {slug:'trent-williams', name:'Trent Williams', alt:['Williams'], note:'Offensive line', tier:'deep', clue:'49ers. Best left tackle in football.'},
    {slug:'lane-johnson', name:'Lane Johnson', alt:['Johnson'], note:'Offensive line', tier:'deep', clue:'Eagles.'},
    {slug:'penei-sewell', name:'Penei Sewell', alt:['Sewell'], note:'Offensive line', tier:'deep', clue:'Lions.'},
    {slug:'tyron-smith', name:'Tyron Smith', alt:['Smith'], note:'Offensive line', tier:'deep', clue:'Long-time Cowboys tackle.'}
  ]
});
