/* ══════════════════════════════════════════════════════════════
   CATEGORY: FOOD

   Dishes from everywhere, and nothing but the dish. Every picture
   was checked by eye for writing in the frame — a menu board, a
   wrapper, a label — because a photo with the name printed on it
   is not a question, it is a gift.

   Artwork: node tools/fetch-wiki-images.js food
   ══════════════════════════════════════════════════════════════ */
window.DHD_CATEGORIES = window.DHD_CATEGORIES || [];
window.DHD_CATEGORIES.push({
  id: 'food',
  name: 'Food',
  blurb: 'Name the dish. Everything from every kitchen.',
  wiki: 'en.wikipedia.org',
  items: [

    /* ── ITALIAN ── */
    {slug:'pizza', name:'Pizza', alt:[], note:'Italian', tier:'easy', clue:'Round, sliced, argued about.'},
    {slug:'lasagne', name:'Lasagne', alt:['Lasagna'], note:'Italian', tier:'easy', clue:'Layers, all the way down.'},
    {slug:'carbonara', name:'Carbonara', alt:[], note:'Italian', tier:'mid', clue:'Egg, cheese, pork. No cream, ever.'},
    {slug:'gnocchi', name:'Gnocchi', alt:[], note:'Italian', tier:'mid', clue:'Little potato pillows.'},
    {slug:'ravioli', name:'Ravioli', alt:[], note:'Italian', tier:'mid', clue:'Stuffed and sealed.'},
    {slug:'risotto', name:'Risotto', alt:[], note:'Italian', tier:'mid', clue:'Stirred until it gives up.'},
    {slug:'tiramisu', name:'Tiramisu', alt:[], note:'Italian', tier:'mid', clue:'Coffee, mascarpone, cocoa on top.'},
    {slug:'cannoli', name:'Cannoli', alt:[], note:'Italian', tier:'mid', clue:'Leave the gun.'},
    {slug:'panna-cotta', name:'Panna cotta', alt:[], note:'Italian', tier:'deep', clue:'Set cream, wobbles.'},
    {slug:'gelato', name:'Gelato', alt:[], note:'Italian', tier:'mid', clue:'Denser than ice cream, and prouder.'},

    /* ── JAPANESE ── */
    {slug:'sushi', name:'Sushi', alt:[], note:'Japanese', tier:'easy', clue:'Rice, fish, seaweed.'},
    {slug:'sashimi', name:'Sashimi', alt:[], note:'Japanese', tier:'mid', clue:'The fish, without the rice.'},
    {slug:'ramen', name:'Ramen', alt:[], note:'Japanese', tier:'easy', clue:'Broth people queue for.'},
    {slug:'udon', name:'Udon', alt:[], note:'Japanese', tier:'mid', clue:'Thick white noodles.'},
    {slug:'soba', name:'Soba', alt:[], note:'Japanese', tier:'deep', clue:'Buckwheat, often cold.'},
    {slug:'tempura', name:'Tempura', alt:[], note:'Japanese', tier:'mid', clue:'Batter so light it barely counts.'},
    {slug:'tonkatsu', name:'Tonkatsu', alt:['Katsu'], note:'Japanese', tier:'mid', clue:'Breaded pork cutlet.'},
    {slug:'gyoza', name:'Gyoza', alt:[], note:'Japanese', tier:'mid', clue:'Pan-fried, crimped along one edge.'},
    {slug:'onigiri', name:'Onigiri', alt:['Rice ball'], note:'Japanese', tier:'mid', clue:'Triangle of rice in a nori belt.'},
    {slug:'mochi', name:'Mochi', alt:[], note:'Japanese', tier:'mid', clue:'Pounded rice. Chewy.'},
    {slug:'takoyaki', name:'Takoyaki', alt:[], note:'Japanese', tier:'deep', clue:'Octopus balls with dancing flakes.'},
    {slug:'okonomiyaki', name:'Okonomiyaki', alt:[], note:'Japanese', tier:'deep', clue:'Savoury pancake, whatever you like in it.'},
    {slug:'miso-soup', name:'Miso soup', alt:[], note:'Japanese', tier:'mid', clue:'Tofu and seaweed in cloudy broth.'},
    {slug:'taiyaki', name:'Taiyaki', alt:[], note:'Japanese', tier:'deep', clue:'Fish-shaped, filled with sweet bean.'},

    /* ── KOREAN ── */
    {slug:'bibimbap', name:'Bibimbap', alt:[], note:'Korean', tier:'mid', clue:'Everything in a bowl, then mixed.'},
    {slug:'kimchi', name:'Kimchi', alt:[], note:'Korean', tier:'easy', clue:'Fermented, red, unmistakable.'},
    {slug:'bulgogi', name:'Bulgogi', alt:[], note:'Korean', tier:'mid', clue:'Marinated beef off the grill.'},
    {slug:'tteokbokki', name:'Tteokbokki', alt:[], note:'Korean', tier:'deep', clue:'Rice cakes in red sauce.'},

    /* ── VIETNAMESE ── */
    {slug:'pho', name:'Pho', alt:[], note:'Vietnamese', tier:'mid', clue:'Clear broth, herbs on the side.'},
    {slug:'banh-mi', name:'Bánh mì', alt:['Banh mi'], note:'Vietnamese', tier:'mid', clue:'A baguette, colonised right back.'},

    /* ── THAI ── */
    {slug:'pad-thai', name:'Pad thai', alt:[], note:'Thai', tier:'easy', clue:'Peanuts and a wedge of lime.'},
    {slug:'tom-yum', name:'Tom yum', alt:[], note:'Thai', tier:'mid', clue:'Hot and sour at once.'},
    {slug:'som-tam', name:'Som tam', alt:['Papaya salad'], note:'Thai', tier:'deep', clue:'Green papaya, pounded.'},
    {slug:'massaman', name:'Massaman curry', alt:[], note:'Thai', tier:'deep', clue:'The mild one with potato.'},

    /* ── SOUTHEAST ASIAN ── */
    {slug:'satay', name:'Satay', alt:[], note:'Southeast Asian', tier:'mid', clue:'Skewers and peanut sauce.'},
    {slug:'rendang', name:'Rendang', alt:[], note:'Southeast Asian', tier:'deep', clue:'Slow-cooked until dry and dark.'},
    {slug:'nasi-goreng', name:'Nasi goreng', alt:[], note:'Southeast Asian', tier:'deep', clue:'Fried rice with a fried egg on top.'},
    {slug:'laksa', name:'Laksa', alt:[], note:'Southeast Asian', tier:'deep', clue:'Coconut noodle soup.'},

    /* ── CHINESE ── */
    {slug:'dim-sum', name:'Dim sum', alt:[], note:'Chinese', tier:'mid', clue:'Small plates, bamboo steamers.'},
    {slug:'dumpling', name:'Dumpling', alt:[], note:'Chinese', tier:'easy', clue:'Wrapped and pleated.'},
    {slug:'peking-duck', name:'Peking duck', alt:[], note:'Chinese', tier:'mid', clue:'Lacquered skin, thin pancakes.'},
    {slug:'char-siu', name:'Char siu', alt:[], note:'Chinese', tier:'deep', clue:'Red-edged barbecue pork.'},
    {slug:'mapo-tofu', name:'Mapo tofu', alt:[], note:'Chinese', tier:'deep', clue:'Numbing, oily, red.'},
    {slug:'hot-pot', name:'Hot pot', alt:[], note:'Chinese', tier:'mid', clue:'Cook it yourself, at the table.'},
    {slug:'congee', name:'Congee', alt:[], note:'Chinese', tier:'deep', clue:'Rice porridge.'},
    {slug:'spring-roll', name:'Spring roll', alt:[], note:'Chinese', tier:'easy', clue:'Rolled and fried.'},

    /* ── INDIAN ── */
    {slug:'samosa', name:'Samosa', alt:[], note:'Indian', tier:'easy', clue:'Triangular, filled, fried.'},
    {slug:'curry', name:'Curry', alt:[], note:'Indian', tier:'easy', clue:'A word doing a lot of work.'},
    {slug:'biryani', name:'Biryani', alt:[], note:'Indian', tier:'mid', clue:'Layered rice, whole spices.'},

    /* ── MIDDLE EASTERN ── */
    {slug:'falafel', name:'Falafel', alt:[], note:'Middle Eastern', tier:'mid', clue:'Chickpeas, fried in balls.'},
    {slug:'hummus', name:'Hummus', alt:[], note:'Middle Eastern', tier:'easy', clue:'Swirled, with a pool of oil.'},
    {slug:'shawarma', name:'Shawarma', alt:[], note:'Middle Eastern', tier:'mid', clue:'Off the vertical spit.'},
    {slug:'kebab', name:'Kebab', alt:[], note:'Middle Eastern', tier:'easy', clue:'Skewered and grilled.'},
    {slug:'baklava', name:'Baklava', alt:[], note:'Middle Eastern', tier:'mid', clue:'Filo, nuts, syrup.'},

    /* ── NORTH AFRICAN ── */
    {slug:'tagine', name:'Tagine', alt:[], note:'North African', tier:'deep', clue:'Named for the pot it comes in.'},
    {slug:'couscous', name:'Couscous', alt:[], note:'North African', tier:'mid', clue:'Tiny steamed semolina.'},

    /* ── AFRICAN ── */
    {slug:'injera', name:'Injera', alt:[], note:'African', tier:'deep', clue:'Sour flatbread that is also the plate.'},
    {slug:'jollof', name:'Jollof rice', alt:[], note:'African', tier:'deep', clue:'A rice dish, and a national argument.'},

    /* ── GREEK ── */
    {slug:'gyros', name:'Gyros', alt:[], note:'Greek', tier:'mid', clue:'Wrapped, with chips inside.'},
    {slug:'moussaka', name:'Moussaka', alt:[], note:'Greek', tier:'deep', clue:'Aubergine and béchamel.'},

    /* ── SPANISH ── */
    {slug:'paella', name:'Paella', alt:[], note:'Spanish', tier:'mid', clue:'Flat pan, saffron, crust on the bottom.'},
    {slug:'churro', name:'Churro', alt:[], note:'Spanish', tier:'easy', clue:'Ridged, fried, dipped in chocolate.'},

    /* ── PORTUGUESE ── */
    {slug:'pastel-de-nata', name:'Pastel de nata', alt:[], note:'Portuguese', tier:'mid', clue:'Scorched custard tart.'},

    /* ── FRENCH ── */
    {slug:'croissant', name:'Croissant', alt:[], note:'French', tier:'easy', clue:'Laminated and crescent-shaped.'},
    {slug:'baguette', name:'Baguette', alt:[], note:'French', tier:'easy', clue:'Long, and legally defined.'},
    {slug:'creme-brulee', name:'Crème brûlée', alt:['Creme brulee'], note:'French', tier:'mid', clue:'Crack the top with a spoon.'},
    {slug:'eclair', name:'Éclair', alt:['Eclair'], note:'French', tier:'mid', clue:'Choux, cream, chocolate on top.'},
    {slug:'profiterole', name:'Profiterole', alt:[], note:'French', tier:'deep', clue:'Choux buns under chocolate sauce.'},
    {slug:'beignet', name:'Beignet', alt:[], note:'French', tier:'deep', clue:'Square, and buried in icing sugar.'},

    /* ── GERMAN ── */
    {slug:'pretzel', name:'Pretzel', alt:[], note:'German', tier:'easy', clue:'Knotted and salted.'},
    {slug:'schnitzel', name:'Schnitzel', alt:[], note:'German', tier:'mid', clue:'Hammered flat, breaded, fried.'},
    {slug:'bratwurst', name:'Bratwurst', alt:[], note:'German', tier:'mid', clue:'The sausage in the roll.'},

    /* ── HUNGARIAN ── */
    {slug:'goulash', name:'Goulash', alt:[], note:'Hungarian', tier:'deep', clue:'Paprika stew.'},

    /* ── POLISH ── */
    {slug:'pierogi', name:'Pierogi', alt:[], note:'Polish', tier:'mid', clue:'Half-moons, boiled then fried.'},

    /* ── EASTERN EUROPEAN ── */
    {slug:'borscht', name:'Borscht', alt:[], note:'Eastern European', tier:'mid', clue:'Beetroot, and a swirl of sour cream.'},
    {slug:'blini', name:'Blini', alt:[], note:'Eastern European', tier:'deep', clue:'Small pancakes, usually with something salty.'},

    /* ── BRITISH ── */
    {slug:'fish-and-chips', name:'Fish and chips', alt:[], note:'British', tier:'easy', clue:'Battered, with vinegar.'},
    {slug:'shepherds-pie', name:'Shepherd’s pie', alt:['Shepherds pie','Cottage pie'], note:'British', tier:'mid', clue:'Mince under mashed potato.'},
    {slug:'full-breakfast', name:'Full English breakfast', alt:['Full breakfast','Fry up'], note:'British', tier:'mid', clue:'Everything on one plate.', page:'Full breakfast'},
    {slug:'scone', name:'Scone', alt:[], note:'British', tier:'mid', clue:'Jam and cream, in a contested order.'},
    {slug:'trifle', name:'Trifle', alt:[], note:'British', tier:'deep', clue:'Layers in a glass bowl.'},
    {slug:'sticky-toffee', name:'Sticky toffee pudding', alt:[], note:'British', tier:'deep', clue:'Dates, sponge, toffee sauce.'},
    {slug:'banoffee', name:'Banoffee pie', alt:[], note:'British', tier:'deep', clue:'Banana and toffee. The clue is in the name.'},

    /* ── SCOTTISH ── */
    {slug:'haggis', name:'Haggis', alt:[], note:'Scottish', tier:'deep', clue:'Do not ask. Just eat it.'},

    /* ── ANTIPODEAN ── */
    {slug:'pavlova', name:'Pavlova', alt:[], note:'Antipodean', tier:'mid', clue:'Meringue, cream, fruit. Ownership disputed.', page:'Pavlova (food)'},

    /* ── CANADIAN ── */
    {slug:'poutine', name:'Poutine', alt:[], note:'Canadian', tier:'mid', clue:'Chips, curds, gravy.'},

    /* ── AMERICAN ── */
    {slug:'hamburger', name:'Hamburger', alt:[], note:'American', tier:'easy', clue:'The obvious one.'},
    {slug:'hot-dog', name:'Hot dog', alt:[], note:'American', tier:'easy', clue:'Is it a sandwich? No.'},
    {slug:'fried-chicken', name:'Fried chicken', alt:[], note:'American', tier:'easy', clue:'Craggy crust.'},
    {slug:'mac-and-cheese', name:'Macaroni and cheese', alt:['Mac and cheese'], note:'American', tier:'easy', clue:'Baked, with a crust on top.'},
    {slug:'cornbread', name:'Cornbread', alt:[], note:'American', tier:'mid', clue:'Yellow, crumbly, in a skillet.'},
    {slug:'gumbo', name:'Gumbo', alt:[], note:'American', tier:'deep', clue:'Starts with a dark roux.'},
    {slug:'jambalaya', name:'Jambalaya', alt:[], note:'American', tier:'deep', clue:'Rice, sausage, everything.'},
    {slug:'clam-chowder', name:'Clam chowder', alt:[], note:'American', tier:'mid', clue:'White, and served in bread if you are lucky.'},
    {slug:'lobster-roll', name:'Lobster roll', alt:[], note:'American', tier:'mid', clue:'Split-top bun, cold or buttered.'},
    {slug:'philly-cheesesteak', name:'Philly cheesesteak', alt:['Cheesesteak'], note:'American', tier:'mid', clue:'Chopped steak, melted cheese, long roll.', page:'Philly cheesesteak'},
    {slug:'reuben', name:'Reuben sandwich', alt:['Reuben'], note:'American', tier:'deep', clue:'Corned beef, kraut, rye.'},
    {slug:'club-sandwich', name:'Club sandwich', alt:[], note:'American', tier:'mid', clue:'Three slices, cocktail stick.'},
    {slug:'caesar-salad', name:'Caesar salad', alt:[], note:'American', tier:'easy', clue:'Anchovy in the dressing, whether you like it or not.'},
    {slug:'cobb-salad', name:'Cobb salad', alt:[], note:'American', tier:'deep', clue:'Everything in stripes.'},
    {slug:'biscuits-and-gravy', name:'Biscuits and gravy', alt:[], note:'American', tier:'deep', clue:'Not the biscuits you are thinking of.'},
    {slug:'chicken-and-waffles', name:'Chicken and waffles', alt:[], note:'American', tier:'mid', clue:'Savoury and sweet, at once.'},
    {slug:'grits', name:'Grits', alt:[], note:'American', tier:'deep', clue:'Ground corn, buttered.'},
    {slug:'smore', name:'S’more', alt:['Smore'], note:'American', tier:'mid', clue:'Campfire, marshmallow, two crackers.', page:'S\'more'},
    {slug:'apple-pie', name:'Apple pie', alt:[], note:'American', tier:'easy', clue:'Lattice on top.'},
    {slug:'pumpkin-pie', name:'Pumpkin pie', alt:[], note:'American', tier:'mid', clue:'Orange, spiced, one crust.'},
    {slug:'key-lime-pie', name:'Key lime pie', alt:[], note:'American', tier:'deep', clue:'Pale green, graham crust.'},
    {slug:'banana-split', name:'Banana split', alt:[], note:'American', tier:'mid', clue:'Three scoops in a long dish.'},
    {slug:'sundae', name:'Sundae', alt:[], note:'American', tier:'easy', clue:'Sauce, nuts, cherry.'},
    {slug:'milkshake', name:'Milkshake', alt:[], note:'American', tier:'easy', clue:'Thick enough to fight the straw.'},

    /* ── SWEET ── */
    {slug:'doughnut', name:'Doughnut', alt:['Donut'], note:'Sweet', tier:'easy', clue:'Glazed, with a hole.'},
    {slug:'cupcake', name:'Cupcake', alt:[], note:'Sweet', tier:'easy', clue:'Swirled on top.'},
    {slug:'macaron', name:'Macaron', alt:[], note:'Sweet', tier:'mid', clue:'Two shells, one filling. Not a macaroon.'},
    {slug:'cheesecake', name:'Cheesecake', alt:[], note:'Sweet', tier:'easy', clue:'Biscuit base.'},
    {slug:'brownie', name:'Chocolate brownie', alt:['Brownie'], note:'Sweet', tier:'easy', clue:'Fudgy or cakey, pick a side.'},
    {slug:'waffle', name:'Waffle', alt:[], note:'Sweet', tier:'easy', clue:'Grid of squares.'},
    {slug:'pancake', name:'Pancake', alt:[], note:'Sweet', tier:'easy', clue:'Stacked, with syrup.'},

    /* ── BREAD ── */
    {slug:'bagel', name:'Bagel', alt:[], note:'Bread', tier:'easy', clue:'Boiled before it is baked.'},

    /* ── SWEET ── */
    {slug:'cotton-candy', name:'Cotton candy', alt:['Candy floss'], note:'Sweet', tier:'easy', clue:'Spun sugar on a stick.'},
    {slug:'candy-apple', name:'Candy apple', alt:['Toffee apple'], note:'Sweet', tier:'mid', clue:'Lacquered red shell.'},

    /* ── SNACK ── */
    {slug:'popcorn', name:'Popcorn', alt:[], note:'Snack', tier:'easy', clue:'Exploded corn.'},

    /* ── MEXICAN ── */
    {slug:'nachos', name:'Nachos', alt:[], note:'Mexican', tier:'easy', clue:'Loaded and shared.'},
    {slug:'taco', name:'Taco', alt:[], note:'Mexican', tier:'easy', clue:'Folded, and never neat.'},
    {slug:'burrito', name:'Burrito', alt:[], note:'Mexican', tier:'easy', clue:'Wrapped tight in foil.'},
    {slug:'quesadilla', name:'Quesadilla', alt:[], note:'Mexican', tier:'easy', clue:'Folded, griddled, cut in wedges.'},
    {slug:'guacamole', name:'Guacamole', alt:[], note:'Mexican', tier:'easy', clue:'Extra, obviously.'},
    {slug:'tamale', name:'Tamale', alt:[], note:'Mexican', tier:'mid', clue:'Steamed in a husk.'},

    /* ── LATIN AMERICAN ── */
    {slug:'empanada', name:'Empanada', alt:[], note:'Latin American', tier:'mid', clue:'Crimped along the curve.'},
    {slug:'arepa', name:'Arepa', alt:[], note:'Latin American', tier:'deep', clue:'Split and filled corn cake.'},
    {slug:'ceviche', name:'Ceviche', alt:[], note:'Latin American', tier:'mid', clue:'Cooked by citrus, not heat.'},
    {slug:'feijoada', name:'Feijoada', alt:[], note:'Latin American', tier:'deep', clue:'Black beans and pork, all afternoon.'},
    {slug:'churrasco', name:'Churrasco', alt:[], note:'Latin American', tier:'mid', clue:'Off the skewer, at the table.'},
    {slug:'chimichurri', name:'Chimichurri', alt:[], note:'Latin American', tier:'deep', clue:'Green, sharp, on everything.'},

    /* ── HAWAIIAN ── */
    {slug:'poke', name:'Poke', alt:[], note:'Hawaiian', tier:'mid', clue:'Cubed raw fish in a bowl.', page:'Poke (Hawaiian dish)'},
    {slug:'loco-moco', name:'Loco moco', alt:[], note:'Hawaiian', tier:'deep', clue:'Rice, patty, egg, gravy.'},
    {slug:'spam-musubi', name:'Spam musubi', alt:[], note:'Hawaiian', tier:'deep', clue:'Exactly what it says, wrapped in nori.'},

    /* ── SIDES ── */
    {slug:'french-fries', name:'French fries', alt:['Chips','Fries'], note:'Sides', tier:'easy', clue:'The universal one.'},
    {slug:'onion-ring', name:'Onion ring', alt:[], note:'Sides', tier:'easy', clue:'Battered circles.'},
    {slug:'mashed-potato', name:'Mashed potato', alt:[], note:'Sides', tier:'easy', clue:'A well for the gravy.'},
    {slug:'baked-potato', name:'Baked potato', alt:['Jacket potato'], note:'Sides', tier:'easy', clue:'Split and loaded.'},
    {slug:'hash-browns', name:'Hash browns', alt:[], note:'Sides', tier:'easy', clue:'Shredded and pressed.'},
    {slug:'coleslaw', name:'Coleslaw', alt:[], note:'Sides', tier:'mid', clue:'Shredded and dressed.'},
    {slug:'deviled-egg', name:'Deviled egg', alt:[], note:'Sides', tier:'mid', clue:'Piped back into the white.'},

    /* ── BREAKFAST ── */
    {slug:'omelette', name:'Omelette', alt:[], note:'Breakfast', tier:'easy', clue:'Folded, ideally still soft.'},
    {slug:'eggs-benedict', name:'Eggs Benedict', alt:[], note:'Breakfast', tier:'mid', clue:'Poached, on a muffin, under hollandaise.'},
    {slug:'avocado-toast', name:'Avocado toast', alt:[], note:'Breakfast', tier:'easy', clue:'The one blamed for everything.'},
    {slug:'granola', name:'Granola', alt:[], note:'Breakfast', tier:'mid', clue:'Baked clusters.'},
    {slug:'porridge', name:'Porridge', alt:['Oatmeal'], note:'Breakfast', tier:'mid', clue:'Oats, and strong opinions about salt.'},
    {slug:'smoothie', name:'Smoothie', alt:[], note:'Breakfast', tier:'easy', clue:'Blended, in a tall glass.'}
  ]
});
