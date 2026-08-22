/* ════════════════════════════════════════════════════════════
   CATEGORY: STREAMERS

   Twitch and YouTube. The handle is the answer, not the legal name —
   nobody calls him Felix Lengyel — but the real names are alternates
   so a host marking by ear can accept either.

   Wikipedia only: a streamer's own wiki is usually a fan page with no
   photograph on it, and these articles carry a proper portrait.
   Artwork: node tools/fetch-wiki-images.js streamers
   ════════════════════════════════════════════════════════════ */
window.DHD_CATEGORIES = window.DHD_CATEGORIES || [];
window.DHD_CATEGORIES.push({
  id: 'streamers',
  name: 'Streamers',
  blurb: 'Twitch and YouTube. Name the handle.',
  wiki: 'en.wikipedia.org',
  items: [
    /* ── YOUTUBE ── */
    {slug:'mrbeast', name:'MrBeast', alt:['Jimmy Donaldson'], note:'YouTube', tier:'easy', clue:'Gives away absurd amounts of money.'},
    {slug:'pewdiepie', name:'PewDiePie', alt:['Felix Kjellberg'], note:'YouTube', tier:'easy', clue:'Held the subscriber crown for years.'},
    {slug:'markiplier', name:'Markiplier', alt:['Mark Fischbach'], note:'YouTube', tier:'easy', clue:'Horror games, at volume.'},
    {slug:'jacksepticeye', name:'Jacksepticeye', alt:['Sean McLoughlin'], note:'YouTube', tier:'mid', clue:'Top o’ the mornin’.'},

    /* ── TWITCH ── */
    {slug:'ninja', name:'Ninja', alt:['Tyler Blevins'], note:'Twitch', tier:'easy', clue:'Blue hair. Fortnite’s face.', page:'Ninja (gamer)'},
    {slug:'xqc', name:'xQc', alt:['Felix Lengyel'], note:'Twitch', tier:'easy', clue:'Talks faster than the stream can keep up.'},
    {slug:'kai-cenat', name:'Kai Cenat', alt:[], note:'Twitch', tier:'easy', clue:'Mafiathon. Broke the sub record twice.'},

    /* ── YOUTUBE ── */
    {slug:'ishowspeed', name:'IShowSpeed', alt:['Speed'], note:'YouTube', tier:'easy', clue:'Loudest man on the internet.'},

    /* ── TWITCH ── */
    {slug:'dr-disrespect', name:'Dr Disrespect', alt:['Doc','Guy Beahm'], note:'Twitch', tier:'mid', clue:'Moustache, mullet, sunglasses indoors.'},
    {slug:'shroud', name:'Shroud', alt:['Michael Grzesiek'], note:'Twitch', tier:'mid', clue:'The aim. Ex-CS pro.', page:'Shroud (gamer)'},

    /* ── YOUTUBE ── */
    {slug:'valkyrae', name:'Valkyrae', alt:['Rachell Hofstetter'], note:'YouTube', tier:'mid', clue:'YouTube’s queen of gaming.'},
    {slug:'ludwig', name:'Ludwig Ahgren', alt:['Ludwig'], note:'YouTube', tier:'mid', clue:'The subathon that would not end.'},

    /* ── TWITCH ── */
    {slug:'amouranth', name:'Amouranth', alt:[], note:'Twitch', tier:'mid', clue:'Built an empire off the stream.'},
    {slug:'sykkuno', name:'Sykkuno', alt:[], note:'Twitch', tier:'mid', clue:'The quiet, polite one.'},
    {slug:'timthetatman', name:'TimTheTatman', alt:[], note:'Twitch', tier:'mid', clue:'Bald, loud, endlessly memed.'},

    /* ── YOUTUBE ── */
    {slug:'courage', name:'CouRage', alt:['CouRageJD'], note:'YouTube', tier:'deep', clue:'Caster turned streamer.', page:'CouRageJD'},

    /* ── TWITCH ── */
    {slug:'myth', name:'Myth', alt:[], note:'Twitch', tier:'deep', clue:'Early Fortnite building god.', page:'Myth (gamer)'},
    {slug:'tfue', name:'Tfue', alt:[], note:'Twitch', tier:'mid', clue:'Fortnite’s most-watched, once.'},
    {slug:'sodapoppin', name:'Sodapoppin', alt:[], note:'Twitch', tier:'deep', clue:'Been there since the beginning.'},
    {slug:'asmongold', name:'Asmongold', alt:[], note:'Twitch', tier:'mid', clue:'WoW, and the room.'},
    {slug:'hasan-piker', name:'Hasan Piker', alt:['HasanAbi'], note:'Twitch', tier:'mid', clue:'Politics, at length.'},
    {slug:'jerma985', name:'Jerma985', alt:['Jerma'], note:'Twitch', tier:'deep', clue:'The chaos, and the Dollhouse.'},
    {slug:'vinesauce', name:'Vinesauce', alt:[], note:'Twitch', tier:'deep', clue:'Corruptions and obscure games.'},
    {slug:'summit1g', name:'Summit1g', alt:[], note:'Twitch', tier:'mid', clue:'CS, then GTA RP.'},
    {slug:'drlupo', name:'DrLupo', alt:[], note:'Twitch', tier:'deep', clue:'Raised millions for St. Jude.'},
    {slug:'mizkif', name:'Mizkif', alt:[], note:'Twitch', tier:'mid', clue:'One True King.'},
    {slug:'qtcinderella', name:'QTCinderella', alt:[], note:'Twitch', tier:'mid', clue:'Invented the Streamer Awards.'},
    {slug:'emiru', name:'Emiru', alt:[], note:'Twitch', tier:'mid', clue:'Cosplay and variety.'},
    {slug:'jynxzi', name:'Jynxzi', alt:[], note:'Twitch', tier:'mid', clue:'Siege. Grew faster than anyone in 2023.'},
    {slug:'adin-ross', name:'Adin Ross', alt:[], note:'Twitch', tier:'mid', clue:'Never far from a headline.'},

    /* ── YOUTUBE ── */
    {slug:'duke-dennis', name:'Duke Dennis', alt:[], note:'YouTube', tier:'mid', clue:'AMP. 2K.'},
    {slug:'dream', name:'Dream', alt:[], note:'YouTube', tier:'mid', clue:'Minecraft manhunt, and the mask.', page:'Dream (YouTuber)'},
    {slug:'sapnap', name:'Sapnap', alt:[], note:'YouTube', tier:'deep', clue:'The third of the trio.'},

    /* ── TWITCH ── */
    {slug:'disguised-toast', name:'Disguised Toast', alt:[], note:'Twitch', tier:'mid', clue:'Among Us big brain.'},
    {slug:'lilypichu', name:'LilyPichu', alt:[], note:'Twitch', tier:'deep', clue:'OfflineTV. The voice and the piano.'},
    {slug:'ibai', name:'Ibai Llanos', alt:['Ibai'], note:'Twitch', tier:'mid', clue:'Spain’s biggest. Fills stadiums.'},
    {slug:'auronplay', name:'AuronPlay', alt:[], note:'Twitch', tier:'deep', clue:'One of the Spanish-speaking giants.'},

    /* ── YOUTUBE ── */
    {slug:'elrubius', name:'El Rubius', alt:['Rubius','ElRubiusOMG'], note:'YouTube', tier:'deep', clue:'Spain’s original YouTube star.', page:'El Rubius'},

    /* ── TWITCH ── */
    {slug:'thegrefg', name:'TheGrefg', alt:[], note:'Twitch', tier:'deep', clue:'Held the concurrent-viewer record.'}
  ]
});
