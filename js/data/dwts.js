/* ══════════════════════════════════════════════════════════════
   CATEGORY: DANCING WITH THE STARS

   Judges, hosts, pros, winners and the contestants people remember.

   Most come from Wikipedia; the pros who don't have an article there
   are pinned to the show's own wiki, which is why `wiki` varies per
   entry rather than sitting on the category.

   Artwork: node tools/fetch-wiki-images.js dwts
   ══════════════════════════════════════════════════════════════ */
window.DHD_CATEGORIES = window.DHD_CATEGORIES || [];
window.DHD_CATEGORIES.push({
  id: 'dwts',
  name: 'Dancing with the Stars',
  blurb: 'Judges, pros and the stars who actually turned up.',
  items: [

    /* ── JUDGES ── */
    {slug:'len-goodman', name:'Len Goodman', alt:[], note:'Judges', tier:'mid', clue:'Seven! The ballroom purist.', wiki:'en.wikipedia.org'},
    {slug:'carrie-ann-inaba', name:'Carrie Ann Inaba', alt:[], note:'Judges', tier:'mid', clue:'Watches the lifts like a hawk.', wiki:'en.wikipedia.org'},
    {slug:'bruno-tonioli', name:'Bruno Tonioli', alt:[], note:'Judges', tier:'mid', clue:'Never once stayed in his chair.', wiki:'en.wikipedia.org'},
    {slug:'derek-hough', name:'Derek Hough', alt:[], note:'Judges', tier:'easy', clue:'Six mirrorballs as a pro, now on the panel.', wiki:'en.wikipedia.org'},
    {slug:'julianne-hough', name:'Julianne Hough', alt:[], note:'Judges', tier:'mid', clue:'Pro, then judge, then host.', wiki:'en.wikipedia.org'},

    /* ── HOSTS ── */
    {slug:'tom-bergeron', name:'Tom Bergeron', alt:[], note:'Hosts', tier:'mid', clue:'Fifteen years of it.', wiki:'en.wikipedia.org'},
    {slug:'erin-andrews', name:'Erin Andrews', alt:[], note:'Hosts', tier:'mid', clue:'Competed first, hosted after.', wiki:'en.wikipedia.org'},
    {slug:'tyra-banks', name:'Tyra Banks', alt:[], note:'Hosts', tier:'easy', clue:'Took over in 2020.', wiki:'en.wikipedia.org'},
    {slug:'alfonso-ribeiro', name:'Alfonso Ribeiro', alt:[], note:'Hosts', tier:'easy', clue:'Won season 19 doing the Carlton.', wiki:'en.wikipedia.org'},

    /* ── PROS ── */
    {slug:'mark-ballas', name:'Mark Ballas', alt:[], note:'Pros', tier:'mid', clue:'Two mirrorballs, plays guitar.', wiki:'en.wikipedia.org'},
    {slug:'cheryl-burke', name:'Cheryl Burke', alt:[], note:'Pros', tier:'mid', clue:'Back-to-back wins in her first two seasons.', wiki:'en.wikipedia.org'},
    {slug:'karina-smirnoff', name:'Karina Smirnoff', alt:[], note:'Pros', tier:'deep', clue:'Won with J.R. Martinez.', wiki:'en.wikipedia.org'},
    {slug:'maksim-chmerkovskiy', name:'Maksim Chmerkovskiy', alt:['Maks'], note:'Pros', tier:'mid', clue:'Won with Meryl Davis after seventeen tries.', wiki:'en.wikipedia.org'},
    {slug:'peta-murgatroyd', name:'Peta Murgatroyd', alt:[], note:'Pros', tier:'mid', clue:'Won with Donald Driver.', wiki:'en.wikipedia.org'},
    {slug:'sharna-burgess', name:'Sharna Burgess', alt:[], note:'Pros', tier:'mid', clue:'Won with Bobby Bones.', wiki:'en.wikipedia.org'},
    {slug:'witney-carson', name:'Witney Carson', alt:[], note:'Pros', tier:'mid', clue:'Won with Alfonso.', wiki:'en.wikipedia.org'},
    {slug:'lindsay-arnold', name:'Lindsay Arnold', alt:[], note:'Pros', tier:'deep', clue:'Won with Jordan Fisher.', wiki:'dancingwiththestars.fandom.com'},
    {slug:'jenna-johnson', name:'Jenna Johnson', alt:[], note:'Pros', tier:'mid', clue:'Won with Adam Rippon.', wiki:'dancingwiththestars.fandom.com'},
    {slug:'emma-slater', name:'Emma Slater', alt:[], note:'Pros', tier:'mid', clue:'Won with Rashad Jennings.', wiki:'en.wikipedia.org'},
    {slug:'artem-chigvintsev', name:'Artem Chigvintsev', alt:[], note:'Pros', tier:'deep', clue:'Won with Kaitlyn Bristowe.', wiki:'dancingwiththestars.fandom.com'},
    {slug:'gleb-savchenko', name:'Gleb Savchenko', alt:[], note:'Pros', tier:'deep', clue:'Never won, always there.', wiki:'en.wikipedia.org'},
    {slug:'brandon-armstrong', name:'Brandon Armstrong', alt:[], note:'Pros', tier:'deep', clue:'One of the newer bench.', wiki:'dancingwiththestars.fandom.com'},
    {slug:'britt-stewart', name:'Britt Stewart', alt:[], note:'Pros', tier:'deep', clue:'First Black female pro on the show.', wiki:'dancingwiththestars.fandom.com'},
    {slug:'daniella-karagach', name:'Daniella Karagach', alt:[], note:'Pros', tier:'deep', clue:'Won with Iman Shumpert.', wiki:'en.wikipedia.org'},
    {slug:'pasha-pashkov', name:'Pasha Pashkov', alt:[], note:'Pros', tier:'deep', clue:'Daniella’s husband, also a pro.', wiki:'en.wikipedia.org'},
    {slug:'rylee-arnold', name:'Rylee Arnold', alt:[], note:'Pros', tier:'deep', clue:'Lindsay’s younger sister.', wiki:'dancingwiththestars.fandom.com'},
    {slug:'tony-dovolani', name:'Tony Dovolani', alt:[], note:'Pros', tier:'deep', clue:'Won with Melissa Rycroft.', wiki:'en.wikipedia.org'},
    {slug:'louis-van-amstel', name:'Louis van Amstel', alt:[], note:'Pros', tier:'deep', clue:'Ballroom champion before the show.', wiki:'dancingwiththestars.fandom.com'},
    {slug:'kym-johnson', name:'Kym Johnson', alt:[], note:'Pros', tier:'deep', clue:'Won twice, married a contestant.', wiki:'en.wikipedia.org'},
    {slug:'anna-trebunskaya', name:'Anna Trebunskaya', alt:[], note:'Pros', tier:'deep', clue:'From the very early seasons.', wiki:'en.wikipedia.org'},
    {slug:'edyta-sliwinska', name:'Edyta Śliwińska', alt:['Edyta Sliwinska'], note:'Pros', tier:'deep', clue:'Danced in the first nine seasons.', wiki:'en.wikipedia.org'},
    {slug:'chelsie-hightower', name:'Chelsie Hightower', alt:[], note:'Pros', tier:'deep', clue:'Came from So You Think You Can Dance.', wiki:'en.wikipedia.org'},
    {slug:'lacey-schwimmer', name:'Lacey Schwimmer', alt:[], note:'Pros', tier:'deep', clue:'Also from SYTYCD.', wiki:'dancingwiththestars.fandom.com'},
    {slug:'ezra-sosa', name:'Ezra Sosa', alt:[], note:'Pros', tier:'deep', clue:'One of the newest.', wiki:'dancingwiththestars.fandom.com'},

    /* ── WINNERS ── */
    {slug:'drew-lachey', name:'Drew Lachey', alt:[], note:'Winners', tier:'deep', clue:'Season two.', wiki:'en.wikipedia.org'},
    {slug:'emmitt-smith', name:'Emmitt Smith', alt:[], note:'Winners', tier:'mid', clue:'The running back who could actually dance.', wiki:'en.wikipedia.org'},
    {slug:'apolo-ohno', name:'Apolo Ohno', alt:[], note:'Winners', tier:'mid', clue:'Speed skater. Season four.', wiki:'en.wikipedia.org'},
    {slug:'helio-castroneves', name:'Hélio Castroneves', alt:['Helio Castroneves'], note:'Winners', tier:'deep', clue:'Indy 500 winner, and this too.', wiki:'en.wikipedia.org'},
    {slug:'kristi-yamaguchi', name:'Kristi Yamaguchi', alt:[], note:'Winners', tier:'mid', clue:'Olympic figure skater.', wiki:'en.wikipedia.org'},
    {slug:'brooke-burke', name:'Brooke Burke', alt:[], note:'Winners', tier:'deep', clue:'Won, then co-hosted.', wiki:'en.wikipedia.org'},
    {slug:'shawn-johnson', name:'Shawn Johnson', alt:[], note:'Winners', tier:'mid', clue:'Olympic gymnast, season eight.', wiki:'en.wikipedia.org'},
    {slug:'nicole-scherzinger', name:'Nicole Scherzinger', alt:[], note:'Winners', tier:'mid', clue:'Pussycat Doll. Season ten.', wiki:'en.wikipedia.org'},
    {slug:'jennifer-grey', name:'Jennifer Grey', alt:[], note:'Winners', tier:'mid', clue:'Nobody puts Baby in a corner.', wiki:'en.wikipedia.org'},
    {slug:'hines-ward', name:'Hines Ward', alt:[], note:'Winners', tier:'deep', clue:'Steelers receiver.', wiki:'en.wikipedia.org'},
    {slug:'jr-martinez', name:'J.R. Martinez', alt:[], note:'Winners', tier:'deep', clue:'Army veteran and actor.', wiki:'en.wikipedia.org', page:'J. R. Martinez'},
    {slug:'donald-driver', name:'Donald Driver', alt:[], note:'Winners', tier:'deep', clue:'Packers receiver.', wiki:'en.wikipedia.org'},
    {slug:'kellie-pickler', name:'Kellie Pickler', alt:[], note:'Winners', tier:'deep', clue:'Country singer, season sixteen.', wiki:'en.wikipedia.org'},
    {slug:'amber-riley', name:'Amber Riley', alt:[], note:'Winners', tier:'mid', clue:'Glee. Perfect scores.', wiki:'en.wikipedia.org'},
    {slug:'meryl-davis', name:'Meryl Davis', alt:[], note:'Winners', tier:'mid', clue:'Ice dancer. Won with Maks.', wiki:'en.wikipedia.org'},
    {slug:'rumer-willis', name:'Rumer Willis', alt:[], note:'Winners', tier:'deep', clue:'Bruce and Demi’s daughter.', wiki:'en.wikipedia.org'},
    {slug:'nyle-dimarco', name:'Nyle DiMarco', alt:[], note:'Winners', tier:'mid', clue:'Won while deaf. Counted the vibrations.', wiki:'en.wikipedia.org'},
    {slug:'laurie-hernandez', name:'Laurie Hernandez', alt:[], note:'Winners', tier:'mid', clue:'Olympic gymnast, season twenty-three.', wiki:'en.wikipedia.org'},
    {slug:'jordan-fisher', name:'Jordan Fisher', alt:[], note:'Winners', tier:'mid', clue:'Broadway and Disney.', wiki:'en.wikipedia.org'},
    {slug:'adam-rippon', name:'Adam Rippon', alt:[], note:'Winners', tier:'mid', clue:'Figure skater. Won the athletes season.', wiki:'en.wikipedia.org'},
    {slug:'bindi-irwin', name:'Bindi Irwin', alt:[], note:'Winners', tier:'mid', clue:'Steve Irwin’s daughter.', wiki:'en.wikipedia.org'},
    {slug:'bobby-bones', name:'Bobby Bones', alt:[], note:'Winners', tier:'deep', clue:'Radio host. A contested win.', wiki:'en.wikipedia.org'},
    {slug:'iman-shumpert', name:'Iman Shumpert', alt:[], note:'Winners', tier:'mid', clue:'First NBA player to win it.', wiki:'en.wikipedia.org'},
    {slug:'amanda-kloots', name:'Amanda Kloots', alt:[], note:'Winners', tier:'deep', clue:'The Talk. Season thirty.', wiki:'dancingwiththestars.fandom.com'},
    {slug:'charli-damelio', name:'Charli D’Amelio', alt:['Charli DAmelio'], note:'Winners', tier:'mid', clue:'TikTok. Won season thirty-one.', wiki:'en.wikipedia.org', page:'Charli D\'Amelio'},
    {slug:'xochitl-gomez', name:'Xochitl Gomez', alt:[], note:'Winners', tier:'mid', clue:'Marvel’s America Chavez.', wiki:'en.wikipedia.org'},

    /* ── CONTESTANTS ── */
    {slug:'zendaya', name:'Zendaya', alt:[], note:'Contestants', tier:'easy', clue:'Sixteen years old, runner-up.', wiki:'en.wikipedia.org'},
    {slug:'normani', name:'Normani', alt:[], note:'Contestants', tier:'mid', clue:'Fifth Harmony.', wiki:'en.wikipedia.org'},
    {slug:'marlee-matlin', name:'Marlee Matlin', alt:[], note:'Contestants', tier:'deep', clue:'Oscar winner.', wiki:'en.wikipedia.org'},
    {slug:'mario-lopez', name:'Mario Lopez', alt:[], note:'Contestants', tier:'mid', clue:'Slater from Saved by the Bell.', wiki:'en.wikipedia.org'},
    {slug:'ricki-lake', name:'Ricki Lake', alt:[], note:'Contestants', tier:'deep', clue:'Talk show host.', wiki:'en.wikipedia.org'},
    {slug:'mel-b', name:'Mel B', alt:['Melanie Brown'], note:'Contestants', tier:'mid', clue:'Scary Spice.', wiki:'en.wikipedia.org'},
    {slug:'pamela-anderson', name:'Pamela Anderson', alt:[], note:'Contestants', tier:'mid', clue:'Baywatch.', wiki:'en.wikipedia.org'},
    {slug:'kirstie-alley', name:'Kirstie Alley', alt:[], note:'Contestants', tier:'deep', clue:'Cheers.', wiki:'en.wikipedia.org'},
    {slug:'bristol-palin', name:'Bristol Palin', alt:[], note:'Contestants', tier:'deep', clue:'Made the final, somehow.', wiki:'en.wikipedia.org'},
    {slug:'sean-spicer', name:'Sean Spicer', alt:[], note:'Contestants', tier:'deep', clue:'The green ruffled shirt.', wiki:'en.wikipedia.org'},
    {slug:'suni-lee', name:'Suni Lee', alt:[], note:'Contestants', tier:'mid', clue:'Olympic all-around champion.', wiki:'en.wikipedia.org'},
    {slug:'wayne-brady', name:'Wayne Brady', alt:[], note:'Contestants', tier:'mid', clue:'Whose Line Is It Anyway.', wiki:'en.wikipedia.org'},
    {slug:'bethany-mota', name:'Bethany Mota', alt:[], note:'Contestants', tier:'deep', clue:'One of the first YouTubers on it.', wiki:'en.wikipedia.org'},
    {slug:'sadie-robertson', name:'Sadie Robertson', alt:[], note:'Contestants', tier:'deep', clue:'Duck Dynasty.', wiki:'en.wikipedia.org'},
    {slug:'jamie-lynn-spears', name:'Jamie Lynn Spears', alt:[], note:'Contestants', tier:'deep', clue:'Zoey 101.', wiki:'en.wikipedia.org'},
    {slug:'ariana-madix', name:'Ariana Madix', alt:[], note:'Contestants', tier:'mid', clue:'Vanderpump Rules.', wiki:'en.wikipedia.org'},
    {slug:'alyson-hannigan', name:'Alyson Hannigan', alt:[], note:'Contestants', tier:'mid', clue:'Willow, and Lily.', wiki:'en.wikipedia.org'},
    {slug:'jason-mraz', name:'Jason Mraz', alt:[], note:'Contestants', tier:'deep', clue:'The singer.', wiki:'en.wikipedia.org'},
    {slug:'dwight-howard', name:'Dwight Howard', alt:[], note:'Contestants', tier:'mid', clue:'Eight-time NBA All-Star.', wiki:'en.wikipedia.org'},
    {slug:'ilona-maher', name:'Ilona Maher', alt:[], note:'Contestants', tier:'mid', clue:'Rugby sevens, and TikTok.', wiki:'en.wikipedia.org'},
    {slug:'stephen-nedoroscik', name:'Stephen Nedoroscik', alt:[], note:'Contestants', tier:'mid', clue:'The pommel horse guy.', wiki:'en.wikipedia.org'},
    {slug:'chandler-kinney', name:'Chandler Kinney', alt:[], note:'Contestants', tier:'deep', clue:'Pretty Little Liars.', wiki:'en.wikipedia.org'},
    {slug:'danielle-fishel', name:'Danielle Fishel', alt:[], note:'Contestants', tier:'mid', clue:'Topanga.', wiki:'en.wikipedia.org'},
    {slug:'selma-blair', name:'Selma Blair', alt:[], note:'Contestants', tier:'deep', clue:'Danced with MS, and withdrew.', wiki:'en.wikipedia.org'},
    {slug:'shangela', name:'Shangela', alt:[], note:'Contestants', tier:'deep', clue:'Drag Race.', wiki:'en.wikipedia.org'},
    {slug:'gabby-windey', name:'Gabby Windey', alt:[], note:'Contestants', tier:'deep', clue:'The Bachelorette.', wiki:'dancingwiththestars.fandom.com', page:'Gabby Windey'},
    {slug:'daniel-durant', name:'Daniel Durant', alt:[], note:'Contestants', tier:'deep', clue:'CODA.', wiki:'en.wikipedia.org'},
    {slug:'teresa-giudice', name:'Teresa Giudice', alt:[], note:'Contestants', tier:'deep', clue:'Real Housewives of New Jersey.', wiki:'en.wikipedia.org'},
    {slug:'vinny-guadagnino', name:'Vinny Guadagnino', alt:[], note:'Contestants', tier:'deep', clue:'Jersey Shore.', wiki:'en.wikipedia.org'},
    {slug:'tyson-beckford', name:'Tyson Beckford', alt:[], note:'Contestants', tier:'deep', clue:'The model.', wiki:'en.wikipedia.org'},
    {slug:'cheryl-ladd', name:'Cheryl Ladd', alt:[], note:'Contestants', tier:'deep', clue:'Charlie’s Angels.', wiki:'en.wikipedia.org'},
    {slug:'mira-sorvino', name:'Mira Sorvino', alt:[], note:'Contestants', tier:'deep', clue:'Oscar winner.', wiki:'en.wikipedia.org'},
    {slug:'joseph-baena', name:'Joseph Baena', alt:[], note:'Contestants', tier:'deep', clue:'Schwarzenegger’s son.', wiki:'dancingwiththestars.fandom.com', page:'Joseph Baena'},
    {slug:'jordin-sparks', name:'Jordin Sparks', alt:[], note:'Contestants', tier:'deep', clue:'American Idol winner.', wiki:'en.wikipedia.org'},
    {slug:'lele-pons', name:'Lele Pons', alt:[], note:'Contestants', tier:'deep', clue:'Vine, then everything else.', wiki:'en.wikipedia.org'},
    {slug:'adam-carolla', name:'Sam Champion', alt:[], note:'Contestants', tier:'deep', clue:'The weatherman.', wiki:'en.wikipedia.org', page:'Sam Champion'},
    {slug:'jessie-james-decker', name:'Jessie James Decker', alt:[], note:'Contestants', tier:'deep', clue:'Country singer.', wiki:'en.wikipedia.org'},
    {slug:'mauricio-umansky', name:'Mauricio Umansky', alt:[], note:'Contestants', tier:'deep', clue:'Real estate, and Real Housewives.', wiki:'en.wikipedia.org'},
    {slug:'heidi-damelio', name:'Heidi D’Amelio', alt:['Heidi DAmelio'], note:'Contestants', tier:'deep', clue:'Charli’s mother, same season.', wiki:'dancingwiththestars.fandom.com', page:'Heidi D\'Amelio'},
    {slug:'trevor-donovan', name:'Trevor Donovan', alt:[], note:'Contestants', tier:'deep', clue:'90210.', wiki:'en.wikipedia.org'},
    {slug:'wayne-newton', name:'Wayne Newton', alt:[], note:'Contestants', tier:'deep', clue:'Mr. Las Vegas.', wiki:'en.wikipedia.org'},
    {slug:'chaka-khan', name:'Chaka Khan', alt:[], note:'Contestants', tier:'deep', clue:'The singer.', wiki:'en.wikipedia.org'},
    {slug:'tommy-chong', name:'Tommy Chong', alt:[], note:'Contestants', tier:'deep', clue:'Half of Cheech and Chong.', wiki:'en.wikipedia.org'},
    {slug:'evan-lysacek', name:'Evan Lysacek', alt:[], note:'Contestants', tier:'deep', clue:'Olympic figure skating champion.', wiki:'en.wikipedia.org'},
    {slug:'nastia-liukin', name:'Nastia Liukin', alt:[], note:'Contestants', tier:'deep', clue:'Olympic gymnast.', wiki:'en.wikipedia.org'},
    {slug:'katherine-jenkins', name:'Katherine Jenkins', alt:[], note:'Contestants', tier:'deep', clue:'Welsh mezzo-soprano.', wiki:'en.wikipedia.org'}
  ]
});
