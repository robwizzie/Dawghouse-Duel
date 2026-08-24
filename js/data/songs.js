/* ══════════════════════════════════════════════════════════════
   CATEGORY: NAME THE ARTIST

   A song goes on the board. Say who sang it.

   Deliberately NOT a finish-the-lyric deck. That would mean shipping
   the lyrics themselves, both as the prompt and as the answer, and
   song lyrics are somebody's copyrighted text — not ours to reproduce.
   Titles and performer names are facts, and they carry the same game:
   you either know it or you don't. The host clue is our own writing,
   never a quoted line.

   `prompt` is what goes on the board. `name` is the answer.
   No artwork to fetch — this deck is text and stays that way.
   ══════════════════════════════════════════════════════════════ */
window.DHD_CATEGORIES = window.DHD_CATEGORIES || [];
window.DHD_CATEGORIES.push({
  id: 'songs',
  name: 'Name the Artist',
  blurb: 'The song goes up. Say who sang it.',
  text: true,
  promptLabel: 'SONG',
  items: [

    /* ── 80s ── */
    {slug:'billie-jean', prompt:'Billie Jean', name:'Michael Jackson', alt:[], tier:'easy', clue:'The lit-up pavement.'},
    {slug:'like-a-prayer', prompt:'Like a Prayer', name:'Madonna', alt:[], tier:'easy', clue:'1989.'},
    {slug:'sweet-child', prompt:'Sweet Child o’ Mine', name:'Guns N’ Roses', alt:['Guns N Roses','GNR'], tier:'easy', clue:'That opening riff.'},
    {slug:'livin-on-a-prayer', prompt:'Livin’ on a Prayer', name:'Bon Jovi', alt:[], tier:'easy', clue:'Tommy and Gina.'},
    {slug:'every-breath', prompt:'Every Breath You Take', name:'The Police', alt:['Police'], tier:'easy', clue:'Not actually a love song.'},
    {slug:'purple-rain', prompt:'Purple Rain', name:'Prince', alt:[], tier:'easy', clue:'1984.'},
    {slug:'take-on-me', prompt:'Take On Me', name:'a-ha', alt:['aha'], tier:'easy', clue:'The pencil-sketch video.'},
    {slug:'dont-stop-believin', prompt:'Don’t Stop Believin’', name:'Journey', alt:[], tier:'easy', clue:'Small town girl.'},
    {slug:'africa', prompt:'Africa', name:'Toto', alt:[], tier:'easy', clue:'Blessing the rains.'},
    {slug:'tainted-love', prompt:'Tainted Love', name:'Soft Cell', alt:[], tier:'mid', clue:'That two-note hook.'},
    {slug:'walking-on-sunshine', prompt:'Walking on Sunshine', name:'Katrina and the Waves', alt:[], tier:'mid', clue:'Relentlessly cheerful.'},
    {slug:'99-luftballons', prompt:'99 Luftballons', name:'Nena', alt:[], tier:'deep', clue:'German, and about the apocalypse.'},

    /* ── 70s ── */
    {slug:'bohemian-rhapsody', prompt:'Bohemian Rhapsody', name:'Queen', alt:[], tier:'easy', clue:'Six minutes, no chorus.'},
    {slug:'stairway', prompt:'Stairway to Heaven', name:'Led Zeppelin', alt:[], tier:'easy', clue:'Banned in guitar shops.'},
    {slug:'imagine', prompt:'Imagine', name:'John Lennon', alt:[], tier:'easy', clue:'The white piano.'},
    {slug:'hotel-california', prompt:'Hotel California', name:'Eagles', alt:['The Eagles'], tier:'easy', clue:'You can check out any time.'},
    {slug:'stayin-alive', prompt:'Stayin’ Alive', name:'Bee Gees', alt:['The Bee Gees'], tier:'easy', clue:'The walk, the white suit.'},
    {slug:'dancing-queen', prompt:'Dancing Queen', name:'ABBA', alt:[], tier:'easy', clue:'Seventeen.'},
    {slug:'superstition', prompt:'Superstition', name:'Stevie Wonder', alt:[], tier:'mid', clue:'That clavinet.'},

    /* ── 60s ── */
    {slug:'let-it-be', prompt:'Let It Be', name:'The Beatles', alt:['Beatles'], tier:'easy', clue:'Mother Mary.'},
    {slug:'hey-jude', prompt:'Hey Jude', name:'The Beatles', alt:['Beatles'], tier:'easy', clue:'Four minutes of na-na-na.'},
    {slug:'respect', prompt:'Respect', name:'Aretha Franklin', alt:[], tier:'easy', clue:'She spelled it out.'},
    {slug:'good-vibrations', prompt:'Good Vibrations', name:'The Beach Boys', alt:['Beach Boys'], tier:'mid', clue:'The theremin-ish thing.'},
    {slug:'satisfaction', prompt:'(I Can’t Get No) Satisfaction', name:'The Rolling Stones', alt:['Rolling Stones','The Stones'], tier:'easy', clue:'The fuzz riff.'},
    {slug:'like-a-rolling-stone', prompt:'Like a Rolling Stone', name:'Bob Dylan', alt:[], tier:'mid', clue:'Six minutes, and he went electric.'},
    {slug:'what-a-wonderful-world', prompt:'What a Wonderful World', name:'Louis Armstrong', alt:[], tier:'mid', clue:'Trees of green.'},

    /* ── 90s ── */
    {slug:'smells-like-teen-spirit', prompt:'Smells Like Teen Spirit', name:'Nirvana', alt:[], tier:'easy', clue:'The pep rally from hell.'},
    {slug:'wonderwall', prompt:'Wonderwall', name:'Oasis', alt:[], tier:'easy', clue:'Every student flat, 2003.'},
    {slug:'no-scrubs', prompt:'No Scrubs', name:'TLC', alt:[], tier:'mid', clue:'1999.'},
    {slug:'wannabe', prompt:'Wannabe', name:'Spice Girls', alt:['The Spice Girls'], tier:'easy', clue:'Zig-a-zig-ah.'},
    {slug:'baby-one-more-time', prompt:'...Baby One More Time', name:'Britney Spears', alt:[], tier:'easy', clue:'The school corridor.'},
    {slug:'losing-my-religion', prompt:'Losing My Religion', name:'R.E.M.', alt:['REM'], tier:'mid', clue:'A mandolin, of all things.'},
    {slug:'creep', prompt:'Creep', name:'Radiohead', alt:[], tier:'mid', clue:'The two crunches before the chorus.'},
    {slug:'california-love', prompt:'California Love', name:'2Pac', alt:['Tupac','2 Pac'], tier:'mid', clue:'With Dr. Dre.'},
    {slug:'juicy', prompt:'Juicy', name:'The Notorious B.I.G.', alt:['Biggie','Notorious BIG','Biggie Smalls'], tier:'mid', clue:'It was all a dream.'},
    {slug:'gangstas-paradise', prompt:'Gangsta’s Paradise', name:'Coolio', alt:[], tier:'mid', clue:'From Dangerous Minds.'},
    {slug:'i-will-always-love-you', prompt:'I Will Always Love You', name:'Whitney Houston', alt:[], tier:'easy', clue:'Written by Dolly Parton.'},
    {slug:'torn', prompt:'Torn', name:'Natalie Imbruglia', alt:[], tier:'deep', clue:'Also a cover.'},

    /* ── 2000s ── */
    {slug:'crazy-in-love', prompt:'Crazy in Love', name:'Beyoncé', alt:['Beyonce'], tier:'easy', clue:'That horn sample.'},
    {slug:'hey-ya', prompt:'Hey Ya!', name:'OutKast', alt:['Outkast'], tier:'easy', clue:'Shake it like a Polaroid.'},
    {slug:'in-da-club', prompt:'In da Club', name:'50 Cent', alt:[], tier:'easy', clue:'Go shorty.'},
    {slug:'mr-brightside', prompt:'Mr. Brightside', name:'The Killers', alt:['Killers'], tier:'easy', clue:'Never leaves a setlist.'},
    {slug:'seven-nation-army', prompt:'Seven Nation Army', name:'The White Stripes', alt:['White Stripes'], tier:'easy', clue:'Every stadium, everywhere.'},
    {slug:'toxic', prompt:'Toxic', name:'Britney Spears', alt:[], tier:'easy', clue:'The strings.'},
    {slug:'lose-yourself', prompt:'Lose Yourself', name:'Eminem', alt:[], tier:'easy', clue:'Mom’s spaghetti.'},
    {slug:'umbrella', prompt:'Umbrella', name:'Rihanna', alt:[], tier:'easy', clue:'Ella, ella.'},
    {slug:'viva-la-vida', prompt:'Viva la Vida', name:'Coldplay', alt:[], tier:'mid', clue:'I used to rule the world.'},
    {slug:'poker-face', prompt:'Poker Face', name:'Lady Gaga', alt:[], tier:'easy', clue:'2008.'},
    {slug:'single-ladies', prompt:'Single Ladies', name:'Beyoncé', alt:['Beyonce'], tier:'easy', clue:'The hand.'},

    /* ── 2010s ── */
    {slug:'rolling-in-the-deep', prompt:'Rolling in the Deep', name:'Adele', alt:[], tier:'easy', clue:'2011.'},
    {slug:'somebody-that-i-used-to-know', prompt:'Somebody That I Used to Know', name:'Gotye', alt:[], tier:'mid', clue:'The body paint video.'},
    {slug:'get-lucky', prompt:'Get Lucky', name:'Daft Punk', alt:[], tier:'mid', clue:'With Pharrell.'},
    {slug:'happy', prompt:'Happy', name:'Pharrell Williams', alt:['Pharrell'], tier:'easy', clue:'The hat.'},
    {slug:'uptown-funk', prompt:'Uptown Funk', name:'Mark Ronson', alt:['Bruno Mars'], tier:'easy', clue:'Featuring Bruno Mars.'},
    {slug:'shake-it-off', prompt:'Shake It Off', name:'Taylor Swift', alt:[], tier:'easy', clue:'2014.'},
    {slug:'blinding-lights', prompt:'Blinding Lights', name:'The Weeknd', alt:['Weeknd'], tier:'easy', clue:'The 80s synth revival, single-handed.'},
    {slug:'old-town-road', prompt:'Old Town Road', name:'Lil Nas X', alt:[], tier:'easy', clue:'Nineteen weeks at number one.'},
    {slug:'bad-guy', prompt:'Bad Guy', name:'Billie Eilish', alt:[], tier:'easy', clue:'Duh.'},
    {slug:'shape-of-you', prompt:'Shape of You', name:'Ed Sheeran', alt:[], tier:'easy', clue:'The marimba.'},
    {slug:'despacito', prompt:'Despacito', name:'Luis Fonsi', alt:[], tier:'mid', clue:'With Daddy Yankee.'},
    {slug:'hotline-bling', prompt:'Hotline Bling', name:'Drake', alt:[], tier:'easy', clue:'The dancing.'},
    {slug:'thrift-shop', prompt:'Thrift Shop', name:'Macklemore', alt:[], tier:'mid', clue:'Twenty dollars in my pocket.'},
    {slug:'royals', prompt:'Royals', name:'Lorde', alt:[], tier:'mid', clue:'She was sixteen.'},

    /* ── 60s ── */
    {slug:'rolling-stones-paint', prompt:'Paint It Black', name:'The Rolling Stones', alt:['Rolling Stones'], tier:'mid', clue:'The sitar.'},

    /* ── 2020s ── */
    {slug:'as-it-was', prompt:'As It Was', name:'Harry Styles', alt:[], tier:'easy', clue:'2022.'},
    {slug:'flowers', prompt:'Flowers', name:'Miley Cyrus', alt:[], tier:'easy', clue:'I can buy myself flowers.'},
    {slug:'anti-hero', prompt:'Anti-Hero', name:'Taylor Swift', alt:[], tier:'easy', clue:'It’s me, hi.'},
    {slug:'espresso', prompt:'Espresso', name:'Sabrina Carpenter', alt:[], tier:'easy', clue:'That me espresso.'},
    {slug:'good-4-u', prompt:'good 4 u', name:'Olivia Rodrigo', alt:[], tier:'easy', clue:'2021.'},
    {slug:'levitating', prompt:'Levitating', name:'Dua Lipa', alt:[], tier:'easy', clue:'Disco, revived.'},
    {slug:'unholy', prompt:'Unholy', name:'Sam Smith', alt:[], tier:'mid', clue:'With Kim Petras.'},
    {slug:'industry-baby', prompt:'Industry Baby', name:'Lil Nas X', alt:[], tier:'mid', clue:'The horns.'},

    /* ── 2010s ── */
    {slug:'sicko-mode', prompt:'Sicko Mode', name:'Travis Scott', alt:[], tier:'mid', clue:'Three songs in one.'},
    {slug:'sunflower', prompt:'Sunflower', name:'Post Malone', alt:[], tier:'easy', clue:'From Spider-Verse.'},
    {slug:'humble', prompt:'HUMBLE.', name:'Kendrick Lamar', alt:[], tier:'easy', clue:'Sit down.'},
    {slug:'god-is-a-woman', prompt:'God Is a Woman', name:'Ariana Grande', alt:[], tier:'mid', clue:'2018.'},

    /* ── 2020s ── */
    {slug:'dynamite', prompt:'Dynamite', name:'BTS', alt:[], tier:'mid', clue:'Their first all-English one.'},

    /* ── 70s ── */
    {slug:'mr-blue-sky', prompt:'Mr. Blue Sky', name:'Electric Light Orchestra', alt:['ELO'], tier:'mid', clue:'In every film trailer since.'},
    {slug:'september', prompt:'September', name:'Earth, Wind & Fire', alt:['Earth Wind and Fire'], tier:'easy', clue:'The 21st night.'},

    /* ── 90s ── */
    {slug:'i-want-it-that-way', prompt:'I Want It That Way', name:'Backstreet Boys', alt:['The Backstreet Boys'], tier:'easy', clue:'Nobody knows what it means.'},

    /* ── 2000s ── */
    {slug:'bye-bye-bye', prompt:'Bye Bye Bye', name:'NSYNC', alt:['*NSYNC','N Sync'], tier:'easy', clue:'The puppet strings.'},

    /* ── 90s ── */
    {slug:'all-star', prompt:'All Star', name:'Smash Mouth', alt:[], tier:'easy', clue:'Somebody once told me.'},

    /* ── 60s ── */
    {slug:'sweet-caroline', prompt:'Sweet Caroline', name:'Neil Diamond', alt:[], tier:'easy', clue:'Bah bah bah.'},

    /* ── 70s ── */
    {slug:'dont-stop-me-now', prompt:'Don’t Stop Me Now', name:'Queen', alt:[], tier:'easy', clue:'A shooting star.'},

    /* ── 80s ── */
    {slug:'under-pressure', prompt:'Under Pressure', name:'Queen', alt:['David Bowie'], tier:'mid', clue:'With Bowie. And that bassline.'},

    /* ── 70s ── */
    {slug:'heroes', prompt:'"Heroes"', name:'David Bowie', alt:[], tier:'mid', clue:'Just for one day.'},
    {slug:'life-on-mars', prompt:'Life on Mars?', name:'David Bowie', alt:[], tier:'deep', clue:'The blue eyeshadow.'},

    /* ── 90s ── */
    {slug:'nothing-compares', prompt:'Nothing Compares 2 U', name:'Sinéad O’Connor', alt:['Sinead OConnor'], tier:'mid', clue:'Written by Prince.'},
    {slug:'zombie', prompt:'Zombie', name:'The Cranberries', alt:['Cranberries'], tier:'mid', clue:'1994.'},
    {slug:'killing-in-the-name', prompt:'Killing in the Name', name:'Rage Against the Machine', alt:['RATM','Rage'], tier:'mid', clue:'The Christmas number one, once.'},
    {slug:'enter-sandman', prompt:'Enter Sandman', name:'Metallica', alt:[], tier:'mid', clue:'Off Never Sandman... off the black album.'},

    /* ── 80s ── */
    {slug:'back-in-black', prompt:'Back in Black', name:'AC/DC', alt:['ACDC'], tier:'easy', clue:'The riff.'},
    {slug:'welcome-to-the-jungle', prompt:'Welcome to the Jungle', name:'Guns N’ Roses', alt:['Guns N Roses','GNR'], tier:'mid', clue:'You know where you are?'},

    /* ── 70s ── */
    {slug:'smoke-on-the-water', prompt:'Smoke on the Water', name:'Deep Purple', alt:[], tier:'mid', clue:'The first riff anyone learns.'},
    {slug:'born-to-run', prompt:'Born to Run', name:'Bruce Springsteen', alt:['Springsteen'], tier:'mid', clue:'Tramps like us.'},
    {slug:'jolene', prompt:'Jolene', name:'Dolly Parton', alt:[], tier:'easy', clue:'Begging.'},

    /* ── 60s ── */
    {slug:'ring-of-fire', prompt:'Ring of Fire', name:'Johnny Cash', alt:[], tier:'mid', clue:'The mariachi horns.'},
    {slug:'folsom-prison', prompt:'Folsom Prison Blues', name:'Johnny Cash', alt:[], tier:'deep', clue:'Shot a man in Reno.'},
    {slug:'i-walk-the-line', prompt:'I Walk the Line', name:'Johnny Cash', alt:[], tier:'deep', clue:'He hums to find the key.'},

    /* ── 90s ── */
    {slug:'nothing-else-matters', prompt:'Nothing Else Matters', name:'Metallica', alt:[], tier:'deep', clue:'The soft one.'},

    /* ── 70s ── */
    {slug:'wish-you-were-here', prompt:'Wish You Were Here', name:'Pink Floyd', alt:[], tier:'mid', clue:'Two lost souls.'},
    {slug:'another-brick', prompt:'Another Brick in the Wall', name:'Pink Floyd', alt:[], tier:'mid', clue:'The children’s choir.'},
    {slug:'comfortably-numb', prompt:'Comfortably Numb', name:'Pink Floyd', alt:[], tier:'deep', clue:'The second solo.'},

    /* ── 80s ── */
    {slug:'boys-of-summer', prompt:'The Boys of Summer', name:'Don Henley', alt:[], tier:'deep', clue:'A Deadhead sticker on a Cadillac.'},
    {slug:'girls-just-want', prompt:'Girls Just Want to Have Fun', name:'Cyndi Lauper', alt:[], tier:'easy', clue:'1983.'},
    {slug:'time-after-time', prompt:'Time After Time', name:'Cyndi Lauper', alt:[], tier:'mid', clue:'The slow one.'},
    {slug:'i-wanna-dance', prompt:'I Wanna Dance with Somebody', name:'Whitney Houston', alt:[], tier:'easy', clue:'That feeling.'},
    {slug:'when-doves-cry', prompt:'When Doves Cry', name:'Prince', alt:[], tier:'mid', clue:'No bassline at all.'},
    {slug:'beat-it', prompt:'Beat It', name:'Michael Jackson', alt:[], tier:'easy', clue:'Eddie Van Halen’s solo.'},
    {slug:'thriller', prompt:'Thriller', name:'Michael Jackson', alt:[], tier:'easy', clue:'Fourteen minutes of video.'},

    /* ── 90s ── */
    {slug:'vogue', prompt:'Vogue', name:'Madonna', alt:[], tier:'mid', clue:'Strike a pose.'},

    /* ── 2000s ── */
    {slug:'halo', prompt:'Halo', name:'Beyoncé', alt:['Beyonce'], tier:'mid', clue:'2008.'},
    {slug:'empire-state', prompt:'Empire State of Mind', name:'Jay-Z', alt:['Jay Z','JayZ'], tier:'mid', clue:'With Alicia Keys.'},
    {slug:'rehab', prompt:'Rehab', name:'Amy Winehouse', alt:[], tier:'mid', clue:'No, no, no.'},
    {slug:'valerie', prompt:'Valerie', name:'Amy Winehouse', alt:['Mark Ronson'], tier:'deep', clue:'With Mark Ronson. Also a cover.'},
    {slug:'chasing-cars', prompt:'Chasing Cars', name:'Snow Patrol', alt:[], tier:'mid', clue:'Every sad TV montage.'},
    {slug:'use-somebody', prompt:'Use Somebody', name:'Kings of Leon', alt:[], tier:'mid', clue:'2008.'},
    {slug:'feel-good-inc', prompt:'Feel Good Inc.', name:'Gorillaz', alt:[], tier:'mid', clue:'The laugh.'},
    {slug:'take-me-out', prompt:'Take Me Out', name:'Franz Ferdinand', alt:[], tier:'deep', clue:'It changes tempo.'},
    {slug:'last-nite', prompt:'Last Nite', name:'The Strokes', alt:['Strokes'], tier:'deep', clue:'2001.'}
  ]
});
