/* ════════════════════════════════════════════════════════════
   CATEGORY: CELEBRITIES

   Faces, from a straight photograph. Wikipedia leads these articles
   with an infobox portrait, which is exactly the picture we want and
   never has a name printed on it.

   Athletes live in the NBA decks and streamers have their own, so
   neither is repeated here.
   Artwork: node tools/fetch-wiki-images.js celebrities
   ════════════════════════════════════════════════════════════ */
window.DHD_CATEGORIES = window.DHD_CATEGORIES || [];
window.DHD_CATEGORIES.push({
  id: 'celebrities',
  name: 'Celebrities',
  blurb: 'Actors, singers and the famous. Name the face.',
  wiki: 'en.wikipedia.org',
  items: [
    /* ── ACTOR ── */
    {slug:'tom-hanks', name:'Tom Hanks', alt:[], note:'Actor', tier:'easy', clue:'Forrest, Woody, and the man on the volleyball island.'},
    {slug:'denzel-washington', name:'Denzel Washington', alt:['Denzel'], note:'Actor', tier:'easy', clue:'Training Day, Malcolm X, that voice.'},
    {slug:'meryl-streep', name:'Meryl Streep', alt:['Meryl'], note:'Actor', tier:'easy', clue:'More Oscar nominations than anyone alive.'},
    {slug:'leonardo-dicaprio', name:'Leonardo DiCaprio', alt:['Leo DiCaprio','Leo'], note:'Actor', tier:'easy', clue:'Titanic, then two decades chasing the statue.'},
    {slug:'brad-pitt', name:'Brad Pitt', alt:[], note:'Actor', tier:'easy', clue:'Fight Club, Ocean’s Eleven, always eating in scenes.'},
    {slug:'angelina-jolie', name:'Angelina Jolie', alt:[], note:'Actor', tier:'easy', clue:'Lara Croft, and Maleficent.'},
    {slug:'will-smith', name:'Will Smith', alt:[], note:'Actor', tier:'easy', clue:'Fresh Prince to Men in Black.'},
    {slug:'johnny-depp', name:'Johnny Depp', alt:[], note:'Actor', tier:'easy', clue:'Jack Sparrow, Edward Scissorhands.'},
    {slug:'robert-downey-jr', name:'Robert Downey Jr.', alt:['RDJ'], note:'Actor', tier:'easy', clue:'Iron Man. Also Sherlock.'},
    {slug:'scarlett-johansson', name:'Scarlett Johansson', alt:['ScarJo'], note:'Actor', tier:'easy', clue:'Black Widow, Lost in Translation.'},
    {slug:'chris-hemsworth', name:'Chris Hemsworth', alt:[], note:'Actor', tier:'easy', clue:'The Australian one with the hammer.'},
    {slug:'chris-evans', name:'Chris Evans', alt:[], note:'Actor', tier:'easy', clue:'Captain America, and Knives Out.', page:'Chris Evans (actor)'},
    {slug:'ryan-reynolds', name:'Ryan Reynolds', alt:[], note:'Actor', tier:'easy', clue:'Deadpool, and the gin adverts.'},
    {slug:'dwayne-johnson', name:'Dwayne Johnson', alt:['The Rock'], note:'Actor', tier:'easy', clue:'The Rock. Eyebrow included.'},
    {slug:'jennifer-lawrence', name:'Jennifer Lawrence', alt:['J-Law'], note:'Actor', tier:'easy', clue:'Katniss, and falling up the Oscar stairs.'},
    {slug:'emma-stone', name:'Emma Stone', alt:[], note:'Actor', tier:'easy', clue:'La La Land, Poor Things.'},
    {slug:'margot-robbie', name:'Margot Robbie', alt:[], note:'Actor', tier:'easy', clue:'Harley Quinn, then Barbie.'},
    {slug:'zendaya', name:'Zendaya', alt:[], note:'Actor', tier:'easy', clue:'Euphoria, Dune, Spider-Man.'},
    {slug:'timothee-chalamet', name:'Timothée Chalamet', alt:['Timothee Chalamet'], note:'Actor', tier:'mid', clue:'Dune, Wonka, the hair.'},
    {slug:'florence-pugh', name:'Florence Pugh', alt:[], note:'Actor', tier:'mid', clue:'Midsommar, Little Women, Oppenheimer.'},
    {slug:'ryan-gosling', name:'Ryan Gosling', alt:[], note:'Actor', tier:'easy', clue:'Drive, La La Land, and Ken.'},
    {slug:'keanu-reeves', name:'Keanu Reeves', alt:['Keanu'], note:'Actor', tier:'easy', clue:'Neo, and John Wick.'},
    {slug:'tom-cruise', name:'Tom Cruise', alt:[], note:'Actor', tier:'easy', clue:'Does his own stunts, loudly.'},
    {slug:'morgan-freeman', name:'Morgan Freeman', alt:[], note:'Actor', tier:'easy', clue:'Narrates everything. Shawshank.'},
    {slug:'samuel-l-jackson', name:'Samuel L. Jackson', alt:['Sam Jackson'], note:'Actor', tier:'easy', clue:'Pulp Fiction, Nick Fury.'},
    {slug:'viola-davis', name:'Viola Davis', alt:[], note:'Actor', tier:'mid', clue:'Fences, The Woman King.'},
    {slug:'idris-elba', name:'Idris Elba', alt:[], note:'Actor', tier:'mid', clue:'Stringer Bell, Luther.'},
    {slug:'michael-b-jordan', name:'Michael B. Jordan', alt:[], note:'Actor', tier:'mid', clue:'Creed, Killmonger.'},
    {slug:'chadwick-boseman', name:'Chadwick Boseman', alt:[], note:'Actor', tier:'mid', clue:'Black Panther. Wakanda forever.'},
    {slug:'anne-hathaway', name:'Anne Hathaway', alt:[], note:'Actor', tier:'mid', clue:'The Devil Wears Prada, Les Misérables.'},
    {slug:'natalie-portman', name:'Natalie Portman', alt:[], note:'Actor', tier:'mid', clue:'Black Swan, and Padmé.'},
    {slug:'nicole-kidman', name:'Nicole Kidman', alt:[], note:'Actor', tier:'mid', clue:'Moulin Rouge, Big Little Lies.'},
    {slug:'julia-roberts', name:'Julia Roberts', alt:[], note:'Actor', tier:'mid', clue:'Pretty Woman, Erin Brockovich.'},
    {slug:'sandra-bullock', name:'Sandra Bullock', alt:[], note:'Actor', tier:'mid', clue:'Speed, Gravity, The Blind Side.'},
    {slug:'reese-witherspoon', name:'Reese Witherspoon', alt:[], note:'Actor', tier:'mid', clue:'Legally Blonde, Walk the Line.'},
    {slug:'charlize-theron', name:'Charlize Theron', alt:[], note:'Actor', tier:'mid', clue:'Monster, Mad Max: Fury Road.'},
    {slug:'cate-blanchett', name:'Cate Blanchett', alt:[], note:'Actor', tier:'mid', clue:'Galadriel, Tár.'},
    {slug:'kate-winslet', name:'Kate Winslet', alt:[], note:'Actor', tier:'mid', clue:'Rose, and Mare of Easttown.'},
    {slug:'hugh-jackman', name:'Hugh Jackman', alt:[], note:'Actor', tier:'easy', clue:'Wolverine, and The Greatest Showman.'},
    {slug:'christian-bale', name:'Christian Bale', alt:[], note:'Actor', tier:'mid', clue:'Batman, American Psycho, changes weight constantly.'},
    {slug:'matt-damon', name:'Matt Damon', alt:[], note:'Actor', tier:'mid', clue:'Bourne, and left on Mars.'},
    {slug:'ben-affleck', name:'Ben Affleck', alt:[], note:'Actor', tier:'mid', clue:'Argo, Batman, the Dunkin’ photos.'},
    {slug:'george-clooney', name:'George Clooney', alt:[], note:'Actor', tier:'easy', clue:'ER, Ocean’s Eleven, the coffee.'},

    /* ── TV ── */
    {slug:'jennifer-aniston', name:'Jennifer Aniston', alt:[], note:'TV', tier:'easy', clue:'Rachel. The haircut.'},
    {slug:'courteney-cox', name:'Courteney Cox', alt:[], note:'TV', tier:'mid', clue:'Monica. The tidy one.'},

    /* ── COMEDY ── */
    {slug:'jim-carrey', name:'Jim Carrey', alt:[], note:'Comedy', tier:'easy', clue:'Ace Ventura, The Mask, rubber face.'},
    {slug:'adam-sandler', name:'Adam Sandler', alt:[], note:'Comedy', tier:'easy', clue:'Happy Gilmore, and the shorts.'},
    {slug:'steve-carell', name:'Steve Carell', alt:[], note:'Comedy', tier:'easy', clue:'Michael Scott.'},
    {slug:'tina-fey', name:'Tina Fey', alt:[], note:'Comedy', tier:'mid', clue:'30 Rock, Mean Girls.'},
    {slug:'amy-poehler', name:'Amy Poehler', alt:[], note:'Comedy', tier:'mid', clue:'Leslie Knope.'},
    {slug:'kevin-hart', name:'Kevin Hart', alt:[], note:'Comedy', tier:'easy', clue:'Short, loud, everywhere.'},
    {slug:'eddie-murphy', name:'Eddie Murphy', alt:[], note:'Comedy', tier:'easy', clue:'Beverly Hills Cop, Shrek.'},
    {slug:'chris-rock', name:'Chris Rock', alt:[], note:'Comedy', tier:'mid', clue:'Stand-up, and that Oscars night.'},
    {slug:'dave-chappelle', name:'Dave Chappelle', alt:[], note:'Comedy', tier:'mid', clue:'Chappelle’s Show.'},
    {slug:'jerry-seinfeld', name:'Jerry Seinfeld', alt:[], note:'Comedy', tier:'mid', clue:'The show about nothing.'},

    /* ── TV ── */
    {slug:'oprah-winfrey', name:'Oprah Winfrey', alt:['Oprah'], note:'TV', tier:'easy', clue:'You get a car.'},
    {slug:'ellen-degeneres', name:'Ellen DeGeneres', alt:['Ellen'], note:'TV', tier:'mid', clue:'The dancing, and Dory.'},
    {slug:'jimmy-fallon', name:'Jimmy Fallon', alt:[], note:'TV', tier:'mid', clue:'The Tonight Show. Laughs at everything.'},
    {slug:'jimmy-kimmel', name:'Jimmy Kimmel', alt:[], note:'TV', tier:'mid', clue:'Late night, and the Halloween candy bit.'},
    {slug:'conan-obrien', name:'Conan O’Brien', alt:['Conan'], note:'TV', tier:'mid', clue:'The tall ginger one.'},
    {slug:'stephen-colbert', name:'Stephen Colbert', alt:[], note:'TV', tier:'mid', clue:'The Late Show.'},
    {slug:'john-oliver', name:'John Oliver', alt:[], note:'TV', tier:'mid', clue:'Last Week Tonight.'},
    {slug:'trevor-noah', name:'Trevor Noah', alt:[], note:'TV', tier:'deep', clue:'The Daily Show, after Stewart.'},

    /* ── MUSIC ── */
    {slug:'beyonce', name:'Beyoncé', alt:['Beyonce'], note:'Music', tier:'easy', clue:'Destiny’s Child, then everything.'},
    {slug:'taylor-swift', name:'Taylor Swift', alt:['Taylor'], note:'Music', tier:'easy', clue:'The Eras Tour.'},
    {slug:'rihanna', name:'Rihanna', alt:[], note:'Music', tier:'easy', clue:'Umbrella, Fenty, the Super Bowl.'},
    {slug:'adele', name:'Adele', alt:[], note:'Music', tier:'easy', clue:'21, 25, 30.'},
    {slug:'lady-gaga', name:'Lady Gaga', alt:['Gaga'], note:'Music', tier:'easy', clue:'The meat dress, and A Star Is Born.'},
    {slug:'ariana-grande', name:'Ariana Grande', alt:[], note:'Music', tier:'easy', clue:'The ponytail, and Wicked.'},
    {slug:'billie-eilish', name:'Billie Eilish', alt:[], note:'Music', tier:'easy', clue:'Bad Guy, and two Bond-adjacent Oscars.'},
    {slug:'dua-lipa', name:'Dua Lipa', alt:[], note:'Music', tier:'mid', clue:'Future Nostalgia.'},
    {slug:'bruno-mars', name:'Bruno Mars', alt:[], note:'Music', tier:'easy', clue:'Uptown Funk.'},
    {slug:'ed-sheeran', name:'Ed Sheeran', alt:[], note:'Music', tier:'easy', clue:'Ginger, loop pedal, stadiums.'},
    {slug:'justin-bieber', name:'Justin Bieber', alt:['Bieber'], note:'Music', tier:'easy', clue:'Baby. Then everything after.'},
    {slug:'drake', name:'Drake', alt:[], note:'Music', tier:'easy', clue:'Started from the bottom.', page:'Drake (musician)'},
    {slug:'kendrick-lamar', name:'Kendrick Lamar', alt:['Kendrick'], note:'Music', tier:'mid', clue:'Pulitzer, and the Super Bowl.'},
    {slug:'jay-z', name:'Jay-Z', alt:[], note:'Music', tier:'mid', clue:'Roc-A-Fella, and the billion.'},
    {slug:'eminem', name:'Eminem', alt:['Slim Shady'], note:'Music', tier:'easy', clue:'Detroit. Mom’s spaghetti.'},
    {slug:'snoop-dogg', name:'Snoop Dogg', alt:['Snoop'], note:'Music', tier:'easy', clue:'Doggystyle, and the Olympics coverage.'},
    {slug:'post-malone', name:'Post Malone', alt:['Posty'], note:'Music', tier:'mid', clue:'Face tattoos and country now.'},
    {slug:'the-weeknd', name:'The Weeknd', alt:[], note:'Music', tier:'mid', clue:'Blinding Lights.'},
    {slug:'harry-styles', name:'Harry Styles', alt:[], note:'Music', tier:'easy', clue:'One Direction, then the feather boa.'},
    {slug:'olivia-rodrigo', name:'Olivia Rodrigo', alt:[], note:'Music', tier:'mid', clue:'Sour, and Drivers License.'},
    {slug:'doja-cat', name:'Doja Cat', alt:[], note:'Music', tier:'mid', clue:'Say So, Planet Her.'},
    {slug:'sza', name:'SZA', alt:[], note:'Music', tier:'mid', clue:'Ctrl, SOS.'},
    {slug:'bad-bunny', name:'Bad Bunny', alt:[], note:'Music', tier:'mid', clue:'The biggest artist on the planet, in Spanish.'},
    {slug:'shakira', name:'Shakira', alt:[], note:'Music', tier:'mid', clue:'Hips don’t lie.'},
    {slug:'jennifer-lopez', name:'Jennifer Lopez', alt:['J.Lo','JLo'], note:'Music', tier:'mid', clue:'Jenny from the block.'},
    {slug:'madonna', name:'Madonna', alt:[], note:'Music', tier:'mid', clue:'The one everyone after her copied.'},
    {slug:'elton-john', name:'Elton John', alt:[], note:'Music', tier:'easy', clue:'The glasses, the piano, the knighthood.'},
    {slug:'paul-mccartney', name:'Paul McCartney', alt:[], note:'Music', tier:'easy', clue:'Left-handed bass. One of four.'},
    {slug:'mick-jagger', name:'Mick Jagger', alt:[], note:'Music', tier:'mid', clue:'Still moving like that.'},
    {slug:'bruce-springsteen', name:'Bruce Springsteen', alt:['The Boss'], note:'Music', tier:'mid', clue:'Born to Run.'},
    {slug:'stevie-wonder', name:'Stevie Wonder', alt:[], note:'Music', tier:'mid', clue:'Superstition.'},
    {slug:'dolly-parton', name:'Dolly Parton', alt:['Dolly'], note:'Music', tier:'easy', clue:'Jolene, and the library.'},
    {slug:'willie-nelson', name:'Willie Nelson', alt:[], note:'Music', tier:'deep', clue:'Braids, bandana, on the road again.'},
    {slug:'kanye-west', name:'Kanye West', alt:['Ye'], note:'Music', tier:'mid', clue:'College Dropout, and the headlines.'}
  ]
});
