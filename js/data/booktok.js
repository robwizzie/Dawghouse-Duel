/* ══════════════════════════════════════════════════════════════
   CATEGORY: BOOKTOK

   A book goes on the board. Say who wrote it.

   Titles and author names, not cover art — a cover is somebody's
   copyrighted artwork and not ours to ship. The host clue is our own
   writing, never a quoted line from the book.

   No artwork to fetch — this deck is text and stays that way.
   ══════════════════════════════════════════════════════════════ */
window.DHD_CATEGORIES = window.DHD_CATEGORIES || [];
window.DHD_CATEGORIES.push({
  id: 'booktok',
  name: 'BookTok',
  blurb: 'The book goes up. Name who wrote it.',
  text: true,
  glyph: '\u{1F4D6}',
  promptLabel: 'BOOK',
  items: [

    /* ── ROMANCE ── */
    {slug:'it-ends-with-us', prompt:'It Ends with Us', name:'Colleen Hoover', alt:['CoHo'], tier:'easy', clue:'The one that started the whole wave.'},
    {slug:'it-starts-with-us', prompt:'It Starts with Us', name:'Colleen Hoover', alt:['CoHo'], tier:'mid', clue:'The sequel.'},

    /* ── THRILLER ── */
    {slug:'verity', prompt:'Verity', name:'Colleen Hoover', alt:['CoHo'], tier:'easy', clue:'The manuscript in the office.'},

    /* ── ROMANCE ── */
    {slug:'ugly-love', prompt:'Ugly Love', name:'Colleen Hoover', alt:['CoHo'], tier:'mid', clue:'Miles and Tate.'},
    {slug:'november-9', prompt:'November 9', name:'Colleen Hoover', alt:['CoHo'], tier:'deep', clue:'One day a year.'},
    {slug:'reminders-of-him', prompt:'Reminders of Him', name:'Colleen Hoover', alt:['CoHo'], tier:'mid', clue:'Kenna comes back to town.'},

    /* ── FANTASY ── */
    {slug:'acotar', prompt:'A Court of Thorns and Roses', name:'Sarah J. Maas', alt:['SJM'], tier:'easy', clue:'ACOTAR.'},
    {slug:'acomaf', prompt:'A Court of Mist and Fury', name:'Sarah J. Maas', alt:['SJM'], tier:'mid', clue:'The one everyone says is the best.'},
    {slug:'throne-of-glass', prompt:'Throne of Glass', name:'Sarah J. Maas', alt:['SJM'], tier:'mid', clue:'Celaena.'},
    {slug:'crescent-city', prompt:'House of Earth and Blood', name:'Sarah J. Maas', alt:['SJM'], tier:'mid', clue:'Crescent City. Bryce.'},
    {slug:'fourth-wing', prompt:'Fourth Wing', name:'Rebecca Yarros', alt:[], tier:'easy', clue:'Dragons and a war college.'},
    {slug:'iron-flame', prompt:'Iron Flame', name:'Rebecca Yarros', alt:[], tier:'mid', clue:'The second one.'},
    {slug:'onyx-storm', prompt:'Onyx Storm', name:'Rebecca Yarros', alt:[], tier:'mid', clue:'The third.'},

    /* ── FICTION ── */
    {slug:'seven-husbands', prompt:'The Seven Husbands of Evelyn Hugo', name:'Taylor Jenkins Reid', alt:['TJR'], tier:'easy', clue:'The old film star tells all.'},
    {slug:'daisy-jones', prompt:'Daisy Jones & The Six', name:'Taylor Jenkins Reid', alt:['TJR'], tier:'mid', clue:'Written as an oral history.'},
    {slug:'malibu-rising', prompt:'Malibu Rising', name:'Taylor Jenkins Reid', alt:['TJR'], tier:'deep', clue:'One party, one night.'},
    {slug:'carrie-soto', prompt:'Carrie Soto Is Back', name:'Taylor Jenkins Reid', alt:['TJR'], tier:'deep', clue:'Tennis.'},

    /* ── ROMANCE ── */
    {slug:'beach-read', prompt:'Beach Read', name:'Emily Henry', alt:[], tier:'mid', clue:'Two writers swap genres.'},
    {slug:'people-we-meet', prompt:'People We Meet on Vacation', name:'Emily Henry', alt:[], tier:'mid', clue:'Ten summers.'},
    {slug:'book-lovers', prompt:'Book Lovers', name:'Emily Henry', alt:[], tier:'mid', clue:'The literary agent one.'},
    {slug:'happy-place', prompt:'Happy Place', name:'Emily Henry', alt:[], tier:'deep', clue:'They already broke up.'},
    {slug:'twisted-love', prompt:'Twisted Love', name:'Ana Huang', alt:[], tier:'mid', clue:'Alex and Ava.'},
    {slug:'king-of-wrath', prompt:'King of Wrath', name:'Ana Huang', alt:[], tier:'deep', clue:'Kings of Sin.'},
    {slug:'icebreaker', prompt:'Icebreaker', name:'Hannah Grace', alt:[], tier:'mid', clue:'Hockey and figure skating.'},
    {slug:'the-love-hypothesis', prompt:'The Love Hypothesis', name:'Ali Hazelwood', alt:[], tier:'mid', clue:'Fake dating, in a lab.'},

    /* ── FANTASY ── */
    {slug:'happily-never-after', prompt:'The Cruel Prince', name:'Holly Black', alt:[], tier:'mid', clue:'Jude and Cardan.'},
    {slug:'six-of-crows', prompt:'Six of Crows', name:'Leigh Bardugo', alt:[], tier:'mid', clue:'No mourners.'},
    {slug:'shadow-and-bone', prompt:'Shadow and Bone', name:'Leigh Bardugo', alt:[], tier:'mid', clue:'The Grishaverse.'},
    {slug:'caraval', prompt:'Caraval', name:'Stephanie Garber', alt:[], tier:'deep', clue:'Remember, it is only a game.'},
    {slug:'serpent-and-dove', prompt:'Serpent & Dove', name:'Shelby Mahurin', alt:[], tier:'deep', clue:'A witch and a witch hunter.'},
    {slug:'from-blood-and-ash', prompt:'From Blood and Ash', name:'Jennifer L. Armentrout', alt:['JLA'], tier:'mid', clue:'Poppy.'},
    {slug:'powerless', prompt:'Powerless', name:'Lauren Roberts', alt:[], tier:'mid', clue:'2023 BookTok breakout.'},
    {slug:'the-serpent-and-the-wings', prompt:'The Serpent and the Wings of Night', name:'Carissa Broadbent', alt:[], tier:'deep', clue:'Vampire trials.'},
    {slug:'lightlark', prompt:'Lightlark', name:'Alex Aster', alt:[], tier:'deep', clue:'Sold on TikTok before it was written.'},

    /* ── FICTION ── */
    {slug:'the-song-of-achilles', prompt:'The Song of Achilles', name:'Madeline Miller', alt:[], tier:'easy', clue:'It destroyed everyone.'},
    {slug:'circe', prompt:'Circe', name:'Madeline Miller', alt:[], tier:'mid', clue:'The witch of Aiaia.'},

    /* ── THRILLER ── */
    {slug:'the-silent-patient', prompt:'The Silent Patient', name:'Alex Michaelides', alt:[], tier:'mid', clue:'She stopped speaking.'},
    {slug:'the-housemaid', prompt:'The Housemaid', name:'Freida McFadden', alt:[], tier:'mid', clue:'The attic room.'},

    /* ── FICTION ── */
    {slug:'a-little-life', prompt:'A Little Life', name:'Hanya Yanagihara', alt:[], tier:'mid', clue:'Read the warnings first.'},
    {slug:'normal-people', prompt:'Normal People', name:'Sally Rooney', alt:[], tier:'mid', clue:'Connell and Marianne.'},
    {slug:'they-both-die', prompt:'They Both Die at the End', name:'Adam Silvera', alt:[], tier:'mid', clue:'The title is not a twist.'},

    /* ── ROMANCE ── */
    {slug:'red-white-royal-blue', prompt:'Red, White & Royal Blue', name:'Casey McQuiston', alt:[], tier:'mid', clue:'The First Son and the Prince.'},
    {slug:'the-summer-i-turned-pretty', prompt:'The Summer I Turned Pretty', name:'Jenny Han', alt:[], tier:'easy', clue:'Team Conrad or Team Jeremiah.'},
    {slug:'to-all-the-boys', prompt:'To All the Boys I’ve Loved Before', name:'Jenny Han', alt:[], tier:'mid', clue:'The letters got sent.'},
    {slug:'things-we-never-got-over', prompt:'Things We Never Got Over', name:'Lucy Score', alt:[], tier:'deep', clue:'Knockemout.'},
    {slug:'the-spanish-love-deception', prompt:'The Spanish Love Deception', name:'Elena Armas', alt:[], tier:'deep', clue:'A wedding in Spain.'},
    {slug:'punk-57', prompt:'Punk 57', name:'Penelope Douglas', alt:[], tier:'deep', clue:'Pen pals since they were twelve.'},
    {slug:'the-deal', prompt:'The Deal', name:'Elle Kennedy', alt:[], tier:'deep', clue:'Off-Campus.'},

    /* ── THRILLER ── */
    {slug:'haunting-adeline', prompt:'Haunting Adeline', name:'H. D. Carlton', alt:[], tier:'deep', clue:'Check the content warnings.'},

    /* ── FANTASY ── */
    {slug:'the-invisible-life', prompt:'The Invisible Life of Addie LaRue', name:'V. E. Schwab', alt:[], tier:'mid', clue:'Nobody remembers her.'},
    {slug:'the-atlas-six', prompt:'The Atlas Six', name:'Olivie Blake', alt:[], tier:'deep', clue:'Started as a self-published serial.'},
    {slug:'babel', prompt:'Babel', name:'R. F. Kuang', alt:[], tier:'mid', clue:'Oxford, and translation as magic.'},

    /* ── FICTION ── */
    {slug:'yellowface', prompt:'Yellowface', name:'R. F. Kuang', alt:[], tier:'mid', clue:'She takes the manuscript.'},

    /* ── FANTASY ── */
    {slug:'the-poppy-war', prompt:'The Poppy War', name:'R. F. Kuang', alt:[], tier:'deep', clue:'Rin.'},
    {slug:'these-violent-delights', prompt:'These Violent Delights', name:'Chloe Gong', alt:[], tier:'deep', clue:'Romeo and Juliet in 1920s Shanghai.'},
    {slug:'legendborn', prompt:'Legendborn', name:'Tracy Deonn', alt:[], tier:'deep', clue:'Arthuriana at UNC.'},
    {slug:'divine-rivals', prompt:'Divine Rivals', name:'Rebecca Ross', alt:[], tier:'mid', clue:'Typewriters and a war.'},
    {slug:'the-hurricane-wars', prompt:'The Hurricane Wars', name:'Thea Guanzon', alt:[], tier:'deep', clue:'Enemies, and a storm.'},

    /* ── ROMANCE ── */
    {slug:'check-and-mate', prompt:'Check & Mate', name:'Ali Hazelwood', alt:[], tier:'deep', clue:'Chess.'},
    {slug:'funny-story', prompt:'Funny Story', name:'Emily Henry', alt:[], tier:'mid', clue:'Their exes ran off together.'},

    /* ── THRILLER ── */
    {slug:'none-of-this-is-true', prompt:'None of This Is True', name:'Lisa Jewell', alt:[], tier:'deep', clue:'The birthday twin.'},
    {slug:'the-inmate', prompt:'The Inmate', name:'Freida McFadden', alt:[], tier:'deep', clue:'She testified against him.'},

    /* ── FANTASY ── */
    {slug:'quicksilver', prompt:'Quicksilver', name:'Callie Hart', alt:[], tier:'deep', clue:'2024 BookTok everywhere.'},

    /* ── ROMANCE ── */
    {slug:'bride', prompt:'Bride', name:'Ali Hazelwood', alt:[], tier:'deep', clue:'Vampire and werewolf.'},

    /* ── THRILLER ── */
    {slug:'a-soul-to-keep', prompt:'Butcher & Blackbird', name:'Brynne Weaver', alt:[], tier:'deep', clue:'Serial killers, and a competition.'},

    /* ── ROMANCE ── */
    {slug:'just-for-the-summer', prompt:'Just for the Summer', name:'Abby Jimenez', alt:[], tier:'mid', clue:'The Reddit post.'},
    {slug:'happy-ending', prompt:'It Happened One Summer', name:'Tessa Bailey', alt:[], tier:'deep', clue:'Piper goes to Westport.'}
  ]
});
