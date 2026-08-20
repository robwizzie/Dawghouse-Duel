/* ══════════════════════════════════════════════════════════════
   CATEGORY: FAST FOOD

   Name the restaurant. Sourcing is deliberately mixed, because fast
   food resists a single approach:

     · Best case — a signature item or mascot that identifies the chain
       without naming it (the Colonel, a Blizzard, curly fries).
     · Otherwise — the brand mark. Some of those carry the wordmark and
       give themselves away; that's a knowing trade for deck size.

   Plain food photos are deliberately NOT used where they identify
   nothing: a Shake Shack burger and a Culver's ButterBurger are the
   same picture, so those chains use their mark instead.
   Artwork: node tools/fetch-wiki-images.js fastfood
   ══════════════════════════════════════════════════════════════ */
window.DHD_CATEGORIES = window.DHD_CATEGORIES || [];
window.DHD_CATEGORIES.push({
  id: 'fastfood',
  name: 'Fast Food',
  blurb: 'Name the restaurant. Some of them are handing it to you.',
  wiki: 'en.wikipedia.org',
  items: [
    /* ── EASY: identified by something other than its own name ── */
    {slug:'mcdonalds',    name:"McDonald's",     alt:['McDonalds','Mickey D\'s'], note:'Big Mac',            tier:'easy', clue:'Two all-beef patties, special sauce.',            page:'Big Mac'},
    {slug:'burger-king',  name:'Burger King',    alt:['BK'],                  note:'Whopper',                tier:'easy', clue:'Flame-grilled, and you can have it your way.',    page:'Whopper'},
    {slug:'wendys',       name:"Wendy's",        alt:['Wendys'],              note:'Frosty',                 tier:'easy', clue:'Square patties and a frozen thing you eat with a spoon.', page:'Frosty (frozen dairy dessert)'},
    {slug:'taco-bell',    name:'Taco Bell',      alt:[],                      note:'Crunchwrap Supreme',     tier:'easy', clue:'Hexagonal, grilled, and available at 2am.',       page:'Crunchwrap'},
    {slug:'kfc',          name:'KFC',            alt:['Kentucky Fried Chicken'],note:'Colonel Sanders',      tier:'easy', clue:'White suit, string tie, eleven herbs and spices.', page:'Colonel Sanders'},
    {slug:'starbucks',    name:'Starbucks',      alt:[],                      note:'Frappuccino',            tier:'easy', clue:'Green straw, domed lid, whipped cream.',          page:'Frappuccino'},
    {slug:'tim-hortons',  name:'Tim Hortons',    alt:['Timmies'],             note:'Timbits',                tier:'easy', clue:'Canada runs on it. The holes come in a box.',     page:'Timbits'},
    {slug:'panda-express',name:'Panda Express',  alt:[],                      note:'Orange chicken',         tier:'easy', clue:'Mall food court, white takeout box, orange chicken.',
      image:'https://upload.wikimedia.org/wikipedia/commons/e/e4/Typical_Panda_Meal.jpg'},
    {slug:'dairy-queen',  name:'Dairy Queen',    alt:['DQ'],                  note:'Blizzard',               tier:'easy', clue:'They turn it upside down before handing it over.',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Dairy_Queen_ice_cream_Philippines.jpg/960px-Dairy_Queen_ice_cream_Philippines.jpg'},
    {slug:'krispy-kreme', name:'Krispy Kreme',   alt:[],                      note:'Original Glazed',        tier:'easy', clue:'Hot light on. Watch them come off the conveyor.',
      image:'https://upload.wikimedia.org/wikipedia/commons/1/1e/Doughnut_assembly_line_krispy_kreme_tallahassee_fl.jpg'},
    {slug:'arbys',        name:"Arby's",         alt:['Arbys'],               note:'Roast beef and curly fries',tier:'easy', clue:'They have the meat. And the curly fries.',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Arbysbeefandfries.JPG/960px-Arbysbeefandfries.JPG'},
    {slug:'in-n-out',     name:'In-N-Out Burger',alt:['In-N-Out','In N Out'], note:'Double-Double',          tier:'easy', clue:'West coast only. Animal style, if you know.',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/In-N-Out_Burger_-_wrapper.jpg/960px-In-N-Out_Burger_-_wrapper.jpg'},
    {slug:'chick-fil-a',  name:'Chick-fil-A',    alt:['Chick fil A'],         note:'Chicken sandwich',       tier:'easy', clue:'Two pickles, buttered bun, closed on Sundays.',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/ChickFilA-ChickenSandwich.jpg/960px-ChickFilA-ChickenSandwich.jpg'},
    {slug:'five-guys',    name:'Five Guys',      alt:[],                      note:'Burger in foil',         tier:'mid',  clue:'Free peanuts, and far more fries than you ordered.',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Five_Guys_cheeseburger.jpg/960px-Five_Guys_cheeseburger.jpg'},
    {slug:'white-castle', name:'White Castle',   alt:[],                      note:'Sliders',                tier:'mid',  clue:'Square, steamed, holes in the patty, sold by the sack.',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/White_Castle_foods.jpg/960px-White_Castle_foods.jpg'},
    {slug:'whataburger',  name:'Whataburger',    alt:[],                      note:'Burger and fries',       tier:'mid',  clue:'Texas. Orange and white stripes on everything.',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Whataburger_hamburger_and_fries.jpg/960px-Whataburger_hamburger_and_fries.jpg'},
    {slug:'raising-canes',name:"Raising Cane's", alt:['Raising Canes','Canes'],note:'The Box Combo',         tier:'mid',  clue:'Chicken fingers, Texas toast, one sauce, that is the menu.',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/The_Box_Combo.jpg/960px-The_Box_Combo.jpg'},
    {slug:'auntie-annes', name:"Auntie Anne's",  alt:['Auntie Annes'],        note:'Soft pretzel',           tier:'mid',  clue:'You smell it from the other end of the mall.',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Pretzel%2C_Auntie_Annes%2C_Kingston_MA.jpg/960px-Pretzel%2C_Auntie_Annes%2C_Kingston_MA.jpg'},
    {slug:'del-taco',     name:'Del Taco',       alt:[],                      note:'Soft taco',              tier:'mid',  clue:'Tacos and burgers on the same menu, which is unusual.',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Del_Taco_soft_taco_-_2.jpg/960px-Del_Taco_soft_taco_-_2.jpg'},
    {slug:'zaxbys',       name:"Zaxby's",        alt:['Zaxbys'],              note:'Chicken fingerz',        tier:'deep', clue:'Southern chicken chain that spells it with a Z.',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Zaxbyfood.jpg/960px-Zaxbyfood.jpg'},

    /* ── The rest go by their brand mark. Several carry the wordmark,
         which is the trade for having a deck worth playing. ── */
    {slug:'subway',       name:'Subway',         alt:[],                      note:'',                       tier:'easy', clue:'Footlongs, and the smell of the bread from three shops away.', page:'Subway (restaurant)'},
    {slug:'dominos',      name:"Domino's",       alt:['Dominos'],             note:'',                       tier:'easy', clue:'Thirty minutes or less, once upon a time.',        page:"Domino's"},
    {slug:'pizza-hut',    name:'Pizza Hut',      alt:[],                      note:'',                       tier:'easy', clue:'The red roof, and the pan pizza.',                 page:'Pizza Hut'},
    {slug:'papa-johns',   name:"Papa John's",    alt:['Papa Johns'],          note:'',                       tier:'easy', clue:'Better ingredients. And a pepperoncini in the box.', page:"Papa John's",
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Papa_John%27s_scooters.jpg/960px-Papa_John%27s_scooters.jpg'},
    {slug:'little-caesars',name:'Little Caesars',alt:[],                      note:'',                       tier:'easy', clue:'Pizza! Pizza! Hot and ready for five dollars.',    page:'Little Caesars'},
    {slug:'popeyes',      name:'Popeyes',        alt:[],                      note:'',                       tier:'easy', clue:'Louisiana kitchen. The chicken sandwich that broke the internet.', page:'Popeyes'},
    {slug:'chipotle',     name:'Chipotle',       alt:['Chipotle Mexican Grill'],note:'',                     tier:'easy', clue:'Burrito bowls and a queue that moves sideways.',   page:'Chipotle Mexican Grill'},
    {slug:'dunkin',       name:"Dunkin'",        alt:['Dunkin','Dunkin Donuts'],note:'',                     tier:'easy', clue:'America runs on it. Orange and pink.',            page:"Dunkin'"},
    {slug:'sonic',        name:'Sonic Drive-In', alt:['Sonic'],               note:'',                       tier:'easy', clue:'Park in a bay, order from a speaker, tots arrive.', page:'Sonic Drive-In'},
    {slug:'jack-in-the-box',name:'Jack in the Box',alt:[],                    note:'',                       tier:'easy', clue:'Antenna ball, and tacos nobody can explain liking.', page:'Jack in the Box'},
    {slug:'shake-shack',  name:'Shake Shack',    alt:[],                      note:'',                       tier:'mid',  clue:'Started as a hot dog cart in a New York park.',    page:'Shake Shack'},
    {slug:'culvers',      name:"Culver's",       alt:['Culvers'],             note:'',                       tier:'mid',  clue:'Wisconsin. ButterBurgers and frozen custard.',     page:"Culver's",
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Culver%27s_Butterburger.jpg/960px-Culver%27s_Butterburger.jpg'},
    {slug:'carls-jr',     name:"Carl's Jr.",     alt:['Carls Jr'],            note:'',                       tier:'mid',  clue:'Smiling star. Called Hardee\'s if you live east.',  page:"Carl's Jr."},
    {slug:'hardees',      name:"Hardee's",       alt:['Hardees'],             note:'',                       tier:'mid',  clue:'Same star, eastern half of the country.',          page:"Hardee's"},
    {slug:'wingstop',     name:'Wingstop',       alt:[],                      note:'',                       tier:'mid',  clue:'Wings, a dozen flavours, and fries with the seasoning.', page:'Wingstop',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Wingstop_wings.jpg/960px-Wingstop_wings.jpg'},
    {slug:'bojangles',    name:'Bojangles',      alt:["Bojangles'"],          note:'',                       tier:'mid',  clue:'Southern chicken and a Cajun filet biscuit.',      page:"Bojangles'"},
    {slug:'churchs',      name:"Church's Chicken",alt:['Churchs'],            note:'',                       tier:'deep', clue:'Fried chicken and honey-butter biscuits.',         page:'Church\'s Texas Chicken'},
    {slug:'long-john-silvers',name:"Long John Silver's",alt:['Long John Silvers'],note:'',                   tier:'mid',  clue:'Fast food fish, and the crunchies on top.',        page:"Long John Silver's"},
    {slug:'panera',       name:'Panera Bread',   alt:['Panera'],              note:'',                       tier:'mid',  clue:'Soup in a bread bowl and a mother who suggested it.', page:'Panera Bread'},
    {slug:'jimmy-johns',  name:"Jimmy John's",   alt:['Jimmy Johns'],         note:'',                       tier:'mid',  clue:'Freaky fast. Subs delivered before you hang up.',  page:"Jimmy John's"},
    {slug:'jersey-mikes', name:"Jersey Mike's",  alt:['Jersey Mikes'],        note:'',                       tier:'mid',  clue:'Subs sliced in front of you. Mike\'s Way.',        page:"Jersey Mike's Subs"},
    {slug:'firehouse-subs',name:'Firehouse Subs',alt:[],                      note:'',                       tier:'deep', clue:'Steamed subs, and a fire-service theme throughout.', page:'Firehouse Subs'},
    {slug:'quiznos',      name:'Quiznos',        alt:[],                      note:'',                       tier:'deep', clue:'Toasted subs, and those unsettling singing rodents.', page:'Quiznos',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Quiznos_Sub_franchise_Pittsburgh_Craig_02.JPG/960px-Quiznos_Sub_franchise_Pittsburgh_Craig_02.JPG'},
    {slug:'qdoba',        name:'Qdoba',          alt:[],                      note:'',                       tier:'deep', clue:'The other burrito place. Queso is free.',          page:'Qdoba'},
    {slug:'steak-n-shake',name:"Steak 'n Shake", alt:['Steak n Shake'],       note:'',                       tier:'mid',  clue:'Steakburgers and hand-dipped milkshakes since 1934.', page:"Steak 'n Shake"},
    {slug:'checkers',     name:'Checkers',       alt:["Rally's",'Checkers and Rallys'],note:'',               tier:'deep', clue:'Black and white chequerboard, double drive-thru, seasoned fries.', page:'Checkers and Rally\'s'},
    {slug:'a-and-w',      name:'A&W',            alt:['A and W','A&W Restaurants'],note:'',                  tier:'mid',  clue:'Root beer in a frosted mug, and a bear.',          page:'A&W Restaurants'},
    {slug:'wienerschnitzel',name:'Wienerschnitzel',alt:[],                    note:'',                       tier:'deep', clue:'Chili dogs, and the A-frame roof.',                page:'Wienerschnitzel'},
    {slug:'nathans',      name:"Nathan's Famous",alt:['Nathans'],             note:'',                       tier:'mid',  clue:'Coney Island hot dogs, and a contest every July 4th.', page:'Nathan\'s Famous'},
    {slug:'portillos',    name:"Portillo's",     alt:['Portillos'],           note:'',                       tier:'deep', clue:'Chicago. Italian beef, dipped, and chocolate cake shake.', page:"Portillo's"},
    {slug:'cinnabon',     name:'Cinnabon',       alt:[],                      note:'',                       tier:'mid',  clue:'Airport and mall staple. You smell it before you see it.', page:'Cinnabon',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/The_Mills_-_Cinnabon.png/960px-The_Mills_-_Cinnabon.png'},
    {slug:'baskin-robbins',name:'Baskin-Robbins',alt:['Baskin Robbins'],      note:'',                       tier:'mid',  clue:'Thirty-one flavours, one for each day.',           page:'Baskin-Robbins'},
    {slug:'cold-stone',   name:'Cold Stone Creamery',alt:['Cold Stone'],      note:'',                       tier:'deep', clue:'They mix it on a frozen slab and sing if you tip.', page:'Cold Stone Creamery'},
    {slug:'jamba',        name:'Jamba Juice',    alt:['Jamba'],               note:'',                       tier:'deep', clue:'Smoothies, and a boost you did not need.',         page:'Jamba Juice'},
    {slug:'dutch-bros',   name:'Dutch Bros',     alt:['Dutch Brothers'],      note:'',                       tier:'deep', clue:'Drive-thru coffee, blue cups, alarmingly cheerful staff.', page:'Dutch Bros'},
    {slug:'waffle-house', name:'Waffle House',   alt:[],                      note:'',                       tier:'mid',  clue:'Yellow sign, open through hurricanes, hashbrowns scattered.', page:'Waffle House',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Closed_Waffle_House_in_Bowling_Green%2C_Ohio.jpg/960px-Closed_Waffle_House_in_Bowling_Green%2C_Ohio.jpg'},
    {slug:'ihop',         name:'IHOP',           alt:['International House of Pancakes'],note:'',             tier:'mid',  clue:'Blue roof. Pancakes, and four syrups on the table.', page:'IHOP'},
    {slug:'dennys',       name:"Denny's",        alt:['Dennys'],              note:'',                       tier:'mid',  clue:'Open all night. The Grand Slam.',                  page:"Denny's"},
    {slug:'buffalo-wild-wings',name:'Buffalo Wild Wings',alt:['BWW','B-Dubs'],note:'',                       tier:'mid',  clue:'Wings, and every screen showing a different game.', page:'Buffalo Wild Wings',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Buffalo_Wild_Wings%2C_Lake_City.JPG/960px-Buffalo_Wild_Wings%2C_Lake_City.JPG'},
    {slug:'chuck-e-cheese',name:'Chuck E. Cheese',alt:['Chuck E Cheese'],     note:'',                       tier:'mid',  clue:'Where a kid can be a kid. Animatronic band.',      page:'Chuck E. Cheese',
      image:'https://upload.wikimedia.org/wikipedia/commons/2/2d/Chuck_E_Cheese%27s_Pizza_%28crop%29.jpg'},
    {slug:'moes',         name:"Moe's Southwest Grill",alt:['Moes'],          note:'',                       tier:'deep', clue:'The whole shop shouts a greeting when you walk in.', page:"Moe's Southwest Grill"},
    {slug:'wetzels',      name:"Wetzel's Pretzels",alt:['Wetzels'],           note:'',                       tier:'deep', clue:'The other mall pretzel.',                          page:"Wetzel's Pretzels"},
    {slug:'captain-ds',   name:"Captain D's",    alt:['Captain Ds'],          note:'',                       tier:'deep', clue:'The other fast food fish place.',                  page:"Captain D's"},
    {slug:'papa-murphys', name:"Papa Murphy's",  alt:['Papa Murphys'],        note:'',                       tier:'deep', clue:'They hand you the pizza raw and you bake it.',     page:"Papa Murphy's"},
    {slug:'smoothie-king',name:'Smoothie King',  alt:[],                      note:'',                       tier:'deep', clue:'Smoothies, and an arena in New Orleans.',          page:'Smoothie King'},
    {slug:'krystal',      name:'Krystal',        alt:[],                      note:'',                       tier:'deep', clue:'The southern answer to White Castle.',             page:'Krystal (restaurant)'},
    {slug:'potbelly',     name:'Potbelly',       alt:['Potbelly Sandwich Shop'],note:'',                     tier:'deep', clue:'Toasted sandwiches and a stove in the corner.',    page:'Potbelly Sandwich Shop'},
    {slug:'boston-market',name:'Boston Market',  alt:[],                      note:'',                       tier:'deep', clue:'Rotisserie chicken and cornbread, like a roast dinner to go.', page:'Boston Market'},
    {slug:'el-pollo-loco',name:'El Pollo Loco',  alt:[],                      note:'',                       tier:'deep', clue:'Flame-grilled citrus-marinated chicken.',           page:'El Pollo Loco'}
  ]
});
