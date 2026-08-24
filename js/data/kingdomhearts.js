/* ══════════════════════════════════════════════════════════════
   CATEGORY: KINGDOM HEARTS

   The trio, the Disney side, Organization XIII, the Heartless, the
   Keyblades and the worlds.

   Artwork: node tools/fetch-wiki-images.js kingdomhearts
   ══════════════════════════════════════════════════════════════ */
window.DHD_CATEGORIES = window.DHD_CATEGORIES || [];
window.DHD_CATEGORIES.push({
  id: 'kingdomhearts',
  name: 'Kingdom Hearts',
  blurb: 'Keyblades, Nobodies and a plot nobody can explain.',
  wiki: 'kingdomhearts.fandom.com',
  items: [

    /* ── THE TRIO ── */
    {slug:'sora', name:'Sora', alt:[], note:'The trio', tier:'easy', clue:'Spiky hair, big shoes, Keyblade.'},
    {slug:'riku', name:'Riku', alt:[], note:'The trio', tier:'easy', clue:'Silver hair. Way to the Dawn.'},
    {slug:'kairi', name:'Kairi', alt:[], note:'The trio', tier:'easy', clue:'The one who waits on the island.'},

    /* ── DISNEY ── */
    {slug:'donald-duck-kh', name:'Donald Duck', alt:['Donald'], note:'Disney', tier:'easy', clue:'The court magician, and the temper.'},
    {slug:'goofy-kh', name:'Goofy', alt:[], note:'Disney', tier:'easy', clue:'Captain of the knights. The shield.'},
    {slug:'mickey-mouse-kh', name:'King Mickey', alt:['Mickey Mouse','Mickey'], note:'Disney', tier:'easy', clue:'The King.'},
    {slug:'jiminy-cricket-kh', name:'Jiminy Cricket', alt:['Jiminy'], note:'Disney', tier:'mid', clue:'Keeps the journal.'},
    {slug:'chip-and-dale', name:'Chip and Dale', alt:[], note:'Disney', tier:'deep', clue:'They fly the Gummi Ship.'},
    {slug:'yen-sid', name:'Yen Sid', alt:[], note:'Disney', tier:'mid', clue:'The tower. Read it backwards.'},
    {slug:'pete', name:'Pete', alt:[], note:'Disney', tier:'mid', clue:'Always in the way.'},
    {slug:'maleficent-kh', name:'Maleficent', alt:[], note:'Disney', tier:'easy', clue:'Green flame, and a raven.'},

    /* ── NOBODIES ── */
    {slug:'roxas', name:'Roxas', alt:[], note:'Nobodies', tier:'easy', clue:'Two Keyblades. Seven days.'},
    {slug:'namine', name:'Naminé', alt:['Namine'], note:'Nobodies', tier:'mid', clue:'Rearranges memories.'},
    {slug:'xion', name:'Xion', alt:[], note:'Nobodies', tier:'mid', clue:'Number fourteen.'},

    /* ── ORGANIZATION XIII ── */
    {slug:'axel', name:'Axel', alt:['Lea'], note:'Organization XIII', tier:'easy', clue:'Got it memorised?'},
    {slug:'xemnas', name:'Xemnas', alt:[], note:'Organization XIII', tier:'mid', clue:'Number one.'},
    {slug:'saix', name:'Saïx', alt:['Saix'], note:'Organization XIII', tier:'mid', clue:'The moon, and a claymore.'},
    {slug:'xigbar', name:'Xigbar', alt:[], note:'Organization XIII', tier:'mid', clue:'Two arrowguns, one eye.'},
    {slug:'xaldin', name:'Xaldin', alt:[], note:'Organization XIII', tier:'deep', clue:'Six lances.'},
    {slug:'vexen', name:'Vexen', alt:[], note:'Organization XIII', tier:'deep', clue:'Ice, and a shield.'},
    {slug:'lexaeus', name:'Lexaeus', alt:[], note:'Organization XIII', tier:'deep', clue:'The tomahawk.'},
    {slug:'zexion', name:'Zexion', alt:[], note:'Organization XIII', tier:'deep', clue:'The lexicon.'},
    {slug:'demyx', name:'Demyx', alt:[], note:'Organization XIII', tier:'mid', clue:'Sitar. Dance, water, dance.'},
    {slug:'luxord', name:'Luxord', alt:[], note:'Organization XIII', tier:'deep', clue:'Cards and time.'},
    {slug:'marluxia', name:'Marluxia', alt:[], note:'Organization XIII', tier:'mid', clue:'Scythe, and pink.'},
    {slug:'larxene', name:'Larxene', alt:[], note:'Organization XIII', tier:'mid', clue:'Knives, and lightning.'},

    /* ── DARKNESS ── */
    {slug:'master-xehanort', name:'Master Xehanort', alt:['Xehanort'], note:'Darkness', tier:'mid', clue:'The old man behind all of it.'},
    {slug:'young-xehanort', name:'Young Xehanort', alt:[], note:'Darkness', tier:'deep', clue:'The same man, earlier.'},
    {slug:'ansem-seeker', name:'Ansem, Seeker of Darkness', alt:['Ansem'], note:'Darkness', tier:'mid', clue:'The Heartless of Xehanort.'},
    {slug:'vanitas', name:'Vanitas', alt:[], note:'Darkness', tier:'mid', clue:'Sora’s face, in a mask.'},

    /* ── BIRTH BY SLEEP ── */
    {slug:'terra', name:'Terra', alt:[], note:'Birth by Sleep', tier:'mid', clue:'Earth. The heavy Keyblade.'},
    {slug:'aqua', name:'Aqua', alt:[], note:'Birth by Sleep', tier:'mid', clue:'Blue hair. Went into the dark.'},
    {slug:'ventus', name:'Ventus', alt:['Ven'], note:'Birth by Sleep', tier:'mid', clue:'Looks exactly like Roxas.'},
    {slug:'master-eraqus', name:'Master Eraqus', alt:['Eraqus'], note:'Birth by Sleep', tier:'deep', clue:'Their teacher.'},

    /* ── DARKNESS ── */
    {slug:'ansem-the-wise', name:'Ansem the Wise', alt:['DiZ'], note:'Darkness', tier:'deep', clue:'DiZ, in the red robe.'},

    /* ── ENEMIES ── */
    {slug:'heartless', name:'Heartless', alt:[], note:'Enemies', tier:'easy', clue:'Yellow eyes, and the emblem.'},
    {slug:'shadow', name:'Shadow', alt:[], note:'Enemies', tier:'easy', clue:'The little one with antennae.'},
    {slug:'darkside', name:'Darkside', alt:[], note:'Enemies', tier:'mid', clue:'The giant with the hole in its chest.'},
    {slug:'dusk', name:'Twilight Thorn', alt:[], note:'Enemies', tier:'deep', clue:'The one that fights Roxas.'},
    {slug:'unversed', name:'Unversed', alt:[], note:'Enemies', tier:'deep', clue:'Vanitas made them.'},
    {slug:'dream-eater', name:'Dream Eater', alt:[], note:'Enemies', tier:'deep', clue:'Spirits and Nightmares.'},

    /* ── WEAPONS ── */
    {slug:'keyblade', name:'Keyblade', alt:[], note:'Weapons', tier:'easy', clue:'The whole point.'},
    {slug:'kingdom-key', name:'Kingdom Key', alt:[], note:'Weapons', tier:'mid', clue:'The first one.'},
    {slug:'oathkeeper', name:'Oathkeeper', alt:[], note:'Weapons', tier:'mid', clue:'From Kairi’s charm.'},
    {slug:'oblivion', name:'Oblivion', alt:[], note:'Weapons', tier:'mid', clue:'The black one.'},
    {slug:'way-to-the-dawn', name:'Way to the Dawn', alt:[], note:'Weapons', tier:'mid', clue:'Riku’s.'},
    {slug:'ultima-weapon-kh', name:'Ultima Weapon', alt:[], note:'Weapons', tier:'deep', clue:'The one you synthesise.'},

    /* ── WORLDS ── */
    {slug:'destiny-islands', name:'Destiny Islands', alt:[], note:'Worlds', tier:'easy', clue:'Where it starts.'},
    {slug:'traverse-town', name:'Traverse Town', alt:[], note:'Worlds', tier:'mid', clue:'Where everyone ends up.'},
    {slug:'hollow-bastion', name:'Hollow Bastion', alt:[], note:'Worlds', tier:'mid', clue:'Later called Radiant Garden.'},
    {slug:'twilight-town', name:'Twilight Town', alt:[], note:'Worlds', tier:'mid', clue:'Sea-salt ice cream on the tower.'},
    {slug:'world-that-never-was', name:'The World That Never Was', alt:[], note:'Worlds', tier:'mid', clue:'The heart-shaped moon.'},
    {slug:'castle-oblivion', name:'Castle Oblivion', alt:[], note:'Worlds', tier:'deep', clue:'Forget as you climb.'},
    {slug:'keyblade-graveyard', name:'Keyblade Graveyard', alt:[], note:'Worlds', tier:'mid', clue:'A field of them, stuck in the ground.'},
    {slug:'disney-castle', name:'Disney Castle', alt:[], note:'Worlds', tier:'mid', clue:'Home.'},
    {slug:'halloween-town', name:'Halloween Town', alt:[], note:'Worlds', tier:'mid', clue:'Sora gets a costume.'},
    {slug:'agrabah', name:'Agrabah', alt:[], note:'Worlds', tier:'mid', clue:'Aladdin’s.'},
    {slug:'atlantica', name:'Atlantica', alt:[], note:'Worlds', tier:'mid', clue:'The one that became a rhythm game.'},
    {slug:'neverland', name:'Neverland', alt:[], note:'Worlds', tier:'mid', clue:'The clock tower.'},
    {slug:'wonderland', name:'Wonderland', alt:[], note:'Worlds', tier:'mid', clue:'The doorknob.'},
    {slug:'olympus-coliseum', name:'Olympus Coliseum', alt:[], note:'Worlds', tier:'mid', clue:'Phil, and the tournaments.'},
    {slug:'monstro', name:'Monstro', alt:[], note:'Worlds', tier:'deep', clue:'Inside the whale.'},
    {slug:'hundred-acre-wood', name:'100 Acre Wood', alt:[], note:'Worlds', tier:'mid', clue:'Inside a book.'},
    {slug:'port-royal', name:'Port Royal', alt:[], note:'Worlds', tier:'deep', clue:'Jack Sparrow.'},
    {slug:'pride-lands', name:'Pride Lands', alt:[], note:'Worlds', tier:'mid', clue:'Sora becomes a lion.'},
    {slug:'space-paranoids', name:'Space Paranoids', alt:[], note:'Worlds', tier:'deep', clue:'Inside the computer.'},

    /* ── FINAL FANTASY ── */
    {slug:'sephiroth-kh', name:'Sephiroth', alt:[], note:'Final Fantasy', tier:'mid', clue:'The optional boss everybody remembers.'},
    {slug:'cloud-strife', name:'Cloud Strife', alt:['Cloud'], note:'Final Fantasy', tier:'mid', clue:'One wing, one huge sword.'},
    {slug:'tifa-lockhart', name:'Tifa Lockhart', alt:['Tifa'], note:'Final Fantasy', tier:'deep', clue:'Looking for Cloud.'},
    {slug:'yuffie', name:'Yuffie Kisaragi', alt:['Yuffie'], note:'Final Fantasy', tier:'deep', clue:'The ninja.'},
    {slug:'setzer', name:'Setzer', alt:[], note:'Final Fantasy', tier:'deep', clue:'The Struggle champion.'},

    /* ── TWILIGHT TOWN ── */
    {slug:'hayner', name:'Hayner', alt:[], note:'Twilight Town', tier:'deep', clue:'One of the three friends.'},
    {slug:'pence', name:'Pence', alt:[], note:'Twilight Town', tier:'deep', clue:'The camera.'},
    {slug:'olette', name:'Olette', alt:[], note:'Twilight Town', tier:'deep', clue:'The third of them.'},
    {slug:'seifer', name:'Seifer', alt:[], note:'Twilight Town', tier:'deep', clue:'The rival with the beanie.'},

    /* ── OTHER ── */
    {slug:'moogle', name:'Moogle', alt:[], note:'Other', tier:'mid', clue:'Kupo.'},
    {slug:'chirithy', name:'Chirithy', alt:[], note:'Other', tier:'deep', clue:'From the mobile game.'},
    {slug:'yozora', name:'Yozora', alt:[], note:'Other', tier:'deep', clue:'The secret ending.'}
  ]
});
