// ==========================================
// RAAJBHOG STHAAN (राजभोग स्थान)
// Luxury Royal Indian & Indo-Chinese Culinary Portal
// JavaScript Engine
// ==========================================

// FOOD DATABASE WITH ACCURATE DISH NAMES & MATCHING HIGH-RES PHOTOGRAPHY
const foods = [
    // ------------------------------------------
    // ROYAL INDIAN SPECIALITIES (WEST INDIA)
    // ------------------------------------------
    {
        id: 1,
        name: "Dal Baati Churma",
        state: "Rajasthan",
        region: "West India",
        price: 189,
        rating: 4.9,
        isVeg: true,
        description: "Authentic Rajasthani hard wheat rolls baked over cow dung cakes, dunked in pure desi ghee, served with panchmel dal and sweet jaggery churma.",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Pyaaz Kachori",
        state: "Rajasthan",
        region: "West India",
        price: 79,
        rating: 4.8,
        isVeg: true,
        description: "Crisp, flaky golden Rajasthani pastry bursting with spiced caramelized onions, fennel seeds, and tangy tamarind chutney.",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "Dhokla (Khaman)",
        state: "Gujarat",
        region: "West India",
        price: 79,
        rating: 4.8,
        isVeg: true,
        description: "Ultra-soft and spongy steamed fermented gram flour cakes tempered with crackling mustard seeds, curry leaves, and green chillies.",
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "Khandvi Rolls",
        state: "Gujarat",
        region: "West India",
        price: 99,
        rating: 4.8,
        isVeg: true,
        description: "Melt-in-mouth delicate rolls of spiced gram flour and curd, garnished with fresh grated coconut, toasted sesame, and coriander.",
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        name: "Fafda Jalebi",
        state: "Gujarat",
        region: "West India",
        price: 119,
        rating: 4.8,
        isVeg: true,
        description: "The royal Gujarati festive pairing of crunchy carom-spiced gram flour crisps and piping hot, saffron-syrup soaked jalebis.",
        image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        name: "Mumbai Pav Bhaji",
        state: "Maharashtra",
        region: "West India",
        price: 119,
        rating: 4.9,
        isVeg: true,
        description: "Slow-mashed spiced vegetable curry cooked on a giant iron tawa with generous slabs of Amul butter, paired with golden toasted ladi pav.",
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        name: "Mumbai Vada Pav",
        state: "Maharashtra",
        region: "West India",
        price: 69,
        rating: 4.8,
        isVeg: true,
        description: "Golden-fried spiced mashed potato fritter nestled inside soft pav with spicy dry garlic peanut chutney and fried salted green chillies.",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 8,
        name: "Kolhapuri Misal Pav",
        state: "Maharashtra",
        region: "West India",
        price: 129,
        rating: 4.8,
        isVeg: true,
        description: "Spicy and fiery sprouted moth bean curry with crunchy farsan topping, chopped red onions, fresh lime, and buttered pav.",
        image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 9,
        name: "Puran Poli with Ghee",
        state: "Maharashtra",
        region: "West India",
        price: 99,
        rating: 4.7,
        isVeg: true,
        description: "Traditional sweet artisanal flatbread stuffed with cooked chana dal, organic jaggery, cardamom, and nutmeg, drenched in hot ghee.",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 10,
        name: "Goan Coastal Fish Curry",
        state: "Goa",
        region: "West India",
        price: 219,
        rating: 4.8,
        isVeg: false,
        description: "Tender fresh kingfish steaks simmered in a velvet coconut milk curry infused with tart kokum, Kashmiri chilies, and coriander.",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 11,
        name: "Indori Poha Jalebi",
        state: "Madhya Pradesh",
        region: "West India",
        price: 99,
        rating: 4.7,
        isVeg: true,
        description: "Steamed flattened rice tossed with mustard seeds, fennel, pomegranate arils, and Jeeravan masala, served with hot golden jalebi.",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
    },

    // ------------------------------------------
    // ROYAL NORTH INDIAN DELICACIES
    // ------------------------------------------
    {
        id: 12,
        name: "Amritsari Stuffed Kulcha",
        state: "Punjab",
        region: "North India",
        price: 129,
        rating: 4.9,
        isVeg: true,
        description: "Flaky, layered tandoor-baked flatbread stuffed with spiced potato and crushed anardana, topped with desi makhan and spicy chole.",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 13,
        name: "Punjabi Chole Bhature",
        state: "Punjab",
        region: "North India",
        price: 139,
        rating: 4.9,
        isVeg: true,
        description: "Giant fluffy golden puffed bhature paired with dark, tangy, tea-infused slow-cooked Kabuli chana, pickled ginger, and onions.",
        image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 14,
        name: "Shahi Butter Chicken (Makhani)",
        state: "Punjab",
        region: "North India",
        price: 249,
        rating: 4.9,
        isVeg: false,
        description: "Charcoal-tandoored tender chicken chunks simmered in a velvety satin gravy of ripe tomatoes, butter, cashew cream, and dried fenugreek.",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 15,
        name: "Tandoori Paneer Tikka",
        state: "Punjab",
        region: "North India",
        price: 189,
        rating: 4.8,
        isVeg: true,
        description: "Succulent cubes of malai paneer marinated in hung yoghurt, mustard oil, Kashmiri mirch, and ajwain, chargrilled on royal skewers.",
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 16,
        name: "Awadhi Dum Biryani",
        state: "Uttar Pradesh",
        region: "North India",
        price: 219,
        rating: 4.8,
        isVeg: false,
        description: "Royal Lucknowi mutton biryani cooked dum pukht style with aged basmati rice, ittar, saffron milk, and aromatic whole spices.",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 17,
        name: "Awadhi Galouti Kebab",
        state: "Uttar Pradesh",
        region: "North India",
        price: 229,
        rating: 4.9,
        isVeg: false,
        description: "Silky, melt-in-mouth nawabi mince patties infused with raw papaya, rose petals, and 32 hand-pounded royal imperial spices.",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 18,
        name: "Banarasi Urad Dal Kachori",
        state: "Uttar Pradesh",
        region: "North India",
        price: 89,
        rating: 4.7,
        isVeg: true,
        description: "Crispy fried golden puri stuffed with spiced urad lentils, served with the famous Banaras hing aloo subzi and sweet pumpkin chutney.",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 19,
        name: "Kashmiri Rogan Josh",
        state: "Jammu & Kashmir",
        region: "North India",
        price: 249,
        rating: 4.9,
        isVeg: false,
        description: "Signature Kashmiri lamb braised in a crimson gravy of Kashmiri deggi mirch, fennel, dried ginger (soonth), and ratan jot root.",
        image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 20,
        name: "Sarson Saag & Makki Di Roti",
        state: "Punjab",
        region: "North India",
        price: 179,
        rating: 4.8,
        isVeg: true,
        description: "Fresh winter mustard greens slow-simmered in earthen pots, paired with rustic golden maize flour rotis and fresh white butter.",
        image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 21,
        name: "Himachali Kangra Dham",
        state: "Himachal Pradesh",
        region: "North India",
        price: 229,
        rating: 4.8,
        isVeg: true,
        description: "Temple celebration feast prepared by hereditary Boti chefs without onion or garlic: Madra, Mah Dal, and sweet-tart Khatta.",
        image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 22,
        name: "Kumaoni Aloo Ke Gutke",
        state: "Uttarakhand",
        region: "North India",
        price: 99,
        rating: 4.7,
        isVeg: true,
        description: "Pahadi baby potatoes boiled and tossed with pungent mustard oil, Himalayan aromatic herb Jamboo, and coarse mountain coriander.",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
    },

    // ------------------------------------------
    // ROYAL SOUTH INDIAN FEASTS
    // ------------------------------------------
    {
        id: 23,
        name: "Hyderabadi Dum Biryani",
        state: "Telangana",
        region: "South India",
        price: 229,
        rating: 4.9,
        isVeg: false,
        description: "World-famed Nizami kacchi biryani cooked with marinated meat, long-grain basmati, golden fried onions (birista), and mint.",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 24,
        name: "Crispy Masala Dosa",
        state: "Karnataka",
        region: "South India",
        price: 119,
        rating: 4.9,
        isVeg: true,
        description: "Paper-thin, golden roasted fermented crepe spread with spicy red garlic chutney, filled with tempered potato palya, served with coconut chutney.",
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 25,
        name: "Steamed Idli Sambar",
        state: "Tamil Nadu",
        region: "South India",
        price: 89,
        rating: 4.8,
        isVeg: true,
        description: "Pillow-soft steamed rice and urad lentil cakes bathed in hot, drumstick and shallot sambar with fresh coconut and tomato chutney.",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 26,
        name: "Chettinad Pepper Chicken",
        state: "Tamil Nadu",
        region: "South India",
        price: 219,
        rating: 4.9,
        isVeg: false,
        description: "Spicy aromatic chicken curry cooked with freshly stone-roasted kalpasi (stone flower), star anise, fennel seeds, and Malabar black pepper.",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 27,
        name: "Grand Kerala Onam Sadya",
        state: "Kerala",
        region: "South India",
        price: 249,
        rating: 4.9,
        isVeg: true,
        description: "Spectacular banana leaf banquet of 18 delicacies: Avial, Thoran, Olan, Erissery, Kalan, Rasam, and rich Ada Pradhaman payasam.",
        image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 28,
        name: "Kerala Appam with Stew",
        state: "Kerala",
        region: "South India",
        price: 169,
        rating: 4.7,
        isVeg: true,
        description: "Bowl-shaped fermented rice hoppers with crispy lacy borders and soft pillowy centers, served with aromatic coconut milk vegetable ishtu.",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
    },

    // ------------------------------------------
    // ROYAL EAST & NORTHEAST DELICACIES
    // ------------------------------------------
    {
        id: 29,
        name: "Bihari Litti Chokha",
        state: "Bihar",
        region: "East India",
        price: 119,
        rating: 4.8,
        isVeg: true,
        description: "Roasted whole-wheat dough balls packed with spicy spiced sattu, submerged in fragrant desi cow ghee, served with roasted eggplant and tomato chokha.",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 30,
        name: "Champaran Ahuna Mutton",
        state: "Bihar",
        region: "East India",
        price: 239,
        rating: 4.8,
        isVeg: false,
        description: "World-famous Ahuna handi mutton slow-cooked in charcoal-sealed earthenware pots with whole garlic bulbs and cold-pressed mustard oil.",
        image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 31,
        name: "Kolkata Spongy Rasgulla",
        state: "West Bengal",
        region: "East India",
        price: 89,
        rating: 4.8,
        isVeg: true,
        description: "Classic melt-in-mouth cottage cheese (chhena) spheres simmered to airy perfection in light cardamom sugar syrup.",
        image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 32,
        name: "Bengali Mishti Doi",
        state: "West Bengal",
        region: "East India",
        price: 89,
        rating: 4.8,
        isVeg: true,
        description: "Thick, creamy caramelized sweet yoghurt set in porous red clay matkis, infused with natural palm date jaggery (nolen gur).",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 33,
        name: "Bengali Macher Jhol",
        state: "West Bengal",
        region: "East India",
        price: 199,
        rating: 4.7,
        isVeg: false,
        description: "Golden river fish simmered in light turmeric broth tempered with five-spice (panch phoron), green chillies, and fried potato wedges.",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 34,
        name: "Odisha Temple Dalma",
        state: "Odisha",
        region: "East India",
        price: 139,
        rating: 4.7,
        isVeg: true,
        description: "Revered temple recipe of toor dal boiled with raw banana, pumpkin, and taro root, tempered with roasted cumin-dry chilli desi ghee.",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 35,
        name: "Puri Jagannath Chhena Poda",
        state: "Odisha",
        region: "East India",
        price: 99,
        rating: 4.8,
        isVeg: true,
        description: "The Indian roasted cheesecake baked in sal leaves until caramelized dark brown, rich with cardamom, cashews, and fresh chhena.",
        image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 36,
        name: "Sikkimese Steamed Momos",
        state: "Sikkim",
        region: "Northeast India",
        price: 109,
        rating: 4.8,
        isVeg: true,
        description: "Delicately pleated Himalayan dumplings filled with garden vegetables and mountain herbs, served with fiery roasted Dalle chilli chutney.",
        image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 37,
        name: "Himalayan Chicken Thukpa",
        state: "Sikkim",
        region: "Northeast India",
        price: 149,
        rating: 4.8,
        isVeg: false,
        description: "Soul-warming Tibetan noodle soup simmered in fragrant clear chicken broth with bok choy, carrots, spring onions, and garlic.",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 38,
        name: "Naga Smoked Pork with Bamboo Shoots",
        state: "Nagaland",
        region: "Northeast India",
        price: 219,
        rating: 4.7,
        isVeg: false,
        description: "Traditional tribal delicacy of smoked pork braised with pungent fermented bamboo shoots and fiery Raja Mircha (Bhut Jolokia).",
        image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80"
    },

    // ------------------------------------------
    // ROYAL GRAND THALIS
    // ------------------------------------------
    {
        id: 39,
        name: "Mewari Rajasthani Royal Thali",
        state: "Royal Specials",
        region: "Royal Specials",
        price: 279,
        rating: 4.9,
        isVeg: true,
        description: "Maharaja's grand banquet: Dal Baati Churma, Gatte ki Sabzi, Ker Sangri, Bajre ki Roti, Boondi Raita, Malpua, and Shahi Pulao.",
        image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 40,
        name: "Nawabi Awadhi Royal Thali",
        state: "Royal Specials",
        region: "Royal Specials",
        price: 299,
        rating: 4.9,
        isVeg: false,
        description: "Imperial Feast of Awadh: Galouti Kebab, Murg Awadhi Biryani, Sheermal Naan, Rogan Josh, Shahi Tukda, and Saffron Kheer.",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80"
    },

    // ------------------------------------------
    // CHINESE & INDO-CHINESE SPECIALITIES (NEW!)
    // ------------------------------------------
    {
        id: 41,
        name: "Veg Hakka Noodles",
        state: "Indo-Chinese",
        region: "Chinese Specials",
        price: 149,
        rating: 4.8,
        isVeg: true,
        description: "High flame wok-tossed yellow noodles with shredded cabbage, bell peppers, crunchy carrots, garlic, and dark aged soya sauce.",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 42,
        name: "Chilli Paneer (Dry)",
        state: "Indo-Chinese",
        region: "Chinese Specials",
        price: 189,
        rating: 4.9,
        isVeg: true,
        description: "Crispy wok-tossed cottage cheese cubes coated in spicy garlic-chilli glaze, crunchy onions, diced capsicum, and spring greens.",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 43,
        name: "Veg Manchurian Gravy",
        state: "Indo-Chinese",
        region: "Chinese Specials",
        price: 169,
        rating: 4.8,
        isVeg: true,
        description: "Golden fried vegetable dumplings simmered in rich, aromatic garlic, ginger, and coriander-soya gravy.",
        image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 44,
        name: "Chicken Manchurian",
        state: "Indo-Chinese",
        region: "Chinese Specials",
        price: 219,
        rating: 4.9,
        isVeg: false,
        description: "Succulent chicken meatballs wok-tossed with ginger, garlic, chopped scallions, and glossy dark Chinese sauce.",
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 45,
        name: "Crispy Chilli Chicken",
        state: "Indo-Chinese",
        region: "Chinese Specials",
        price: 229,
        rating: 4.9,
        isVeg: false,
        description: "Wok-seared marinated chicken bites tossed with fresh green chillies, garlic slices, onions, and spicy dark seasoning.",
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 46,
        name: "Schezwan Fried Rice",
        state: "Indo-Chinese",
        region: "Chinese Specials",
        price: 169,
        rating: 4.8,
        isVeg: true,
        description: "Wok-fried long-grain rice tossed with vibrant vegetables and fiery house-made Schezwan chili paste with Sichuan peppers.",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 47,
        name: "Crispy Veg Spring Rolls",
        state: "Cantonese",
        region: "Chinese Specials",
        price: 139,
        rating: 4.7,
        isVeg: true,
        description: "Golden flaky pastry sheets rolled with spiced julienned vegetables and glass noodles, served with sweet chilli dip.",
        image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 48,
        name: "Honey Chilli Potato",
        state: "Indo-Chinese",
        region: "Chinese Specials",
        price: 139,
        rating: 4.8,
        isVeg: true,
        description: "Crispy fried potato fingers caramelized in sticky honey, red chili garlic sauce, and toasted white sesame seeds.",
        image: "https://images.unsplash.com/photo-1518013034458-30b0ee243591?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 49,
        name: "Steamed Dim Sum Dumplings",
        state: "Cantonese",
        region: "Chinese Specials",
        price: 159,
        rating: 4.9,
        isVeg: true,
        description: "Translucent bamboo-steamed dumplings stuffed with finely minced vegetables, water chestnuts, and served with spicy chili garlic oil.",
        image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 50,
        name: "Kung Pao Chicken",
        state: "Sichuan",
        region: "Chinese Specials",
        price: 239,
        rating: 4.8,
        isVeg: false,
        description: "Classic spicy Sichuan stir-fry with diced chicken, roasted crunchy peanuts, charred red chillies, and a savory-sweet glaze.",
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 51,
        name: "Hot & Sour Soup",
        state: "Beijing",
        region: "Chinese Specials",
        price: 119,
        rating: 4.7,
        isVeg: true,
        description: "Peppery and tangy authentic broth loaded with mushrooms, bamboo shoots, tofu strips, and finished with fresh coriander.",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 52,
        name: "Crispy Chilli Baby Corn",
        state: "Indo-Chinese",
        region: "Chinese Specials",
        price: 149,
        rating: 4.8,
        isVeg: true,
        description: "Crispy batter-fried tender baby corn fingers tossed in wok with garlic, ginger, and aromatic soya-chilli sauce.",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 53,
        name: "Chicken Schezwan Hakka Noodles",
        state: "Indo-Chinese",
        region: "Chinese Specials",
        price: 189,
        rating: 4.9,
        isVeg: false,
        description: "Spicy wok-tossed noodles with tender shredded chicken, scrambled egg, crunchy veggies, and aromatic fiery Schezwan glaze.",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 54,
        name: "Dragon Chicken",
        state: "Indo-Chinese",
        region: "Chinese Specials",
        price: 239,
        rating: 4.8,
        isVeg: false,
        description: "Batter-fried crunchy chicken strips coated in a fiery sweet-spicy Dragon sauce with roasted cashew nuts and capsicum strips.",
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80"
    }
];

// STATE VARIABLES
let selectedRegion = "All";
let selectedDiet = "All"; // All, Veg, Non-Veg
let sortBy = "featured"; // featured, price-asc, price-desc, rating
let cart = [];

// DOM ELEMENTS
const foodContainer = document.getElementById("foodContainer");
const searchInput = document.getElementById("searchInput");
const cartCount = document.getElementById("cartCount");
const cartModal = document.getElementById("cartModal");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const loginModal = document.getElementById("loginModal");
const loginButton = document.getElementById("loginButton");
const foodCountIndicator = document.getElementById("foodCountIndicator");

// IMAGE ERROR FALLBACK HANDLER
function handleImageError(imgElement) {
    if (imgElement.dataset.fallbackTried) return;
    imgElement.dataset.fallbackTried = "true";
    imgElement.src = "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80";
}

// TOAST NOTIFICATION ENGINE
function showToast(message, type = "success") {
    let toastContainer = document.getElementById("toastContainer");
    if (!toastContainer) {
        toastContainer = document.createElement("div");
        toastContainer.id = "toastContainer";
        toastContainer.className = "toast-container";
        document.body.appendChild(toastContainer);
    }

    const toast = document.createElement("div");
    toast.className = `toast-item ${type}`;
    const icon = type === "success" ? "✨" : (type === "warning" ? "⚠️" : "👑");
    toast.innerHTML = `
        <span class="toast-icon">${icon}</span>
        <span class="toast-text">${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("fade-out");
        setTimeout(() => toast.remove(), 400);
    }, 2800);
}

// DISPLAY FOODS
function displayFoods(list) {
    if (!foodContainer) return;
    foodContainer.innerHTML = "";

    if (foodCountIndicator) {
        foodCountIndicator.innerText = `${list.length} Delicac${list.length === 1 ? 'y' : 'ies'} Available`;
    }

    if (list.length === 0) {
        foodContainer.innerHTML = `
            <div class="no-food-found">
                <div class="empty-icon">🥘</div>
                <h3>No Delicacies Found</h3>
                <p>We couldn't find any dish matching your preference. Try adjusting your search or region filters.</p>
                <button class="reset-btn" onclick="resetFilters()">Reset All Filters</button>
            </div>
        `;
        return;
    }

    list.forEach(function (food) {
        const card = document.createElement("div");
        card.className = "food-card";
        card.setAttribute("data-id", food.id);

        const dietBadge = food.isVeg 
            ? `<span class="diet-badge veg" title="Pure Vegetarian"><span class="diet-dot"></span>Veg</span>`
            : `<span class="diet-badge non-veg" title="Non-Vegetarian"><span class="diet-dot"></span>Non-Veg</span>`;

        card.innerHTML = `
            <div class="food-image">
                <img
                    src="${food.image}"
                    alt="${food.name}"
                    loading="lazy"
                    onerror="handleImageError(this)"
                >
                <div class="image-overlay-badges">
                    <span class="state-pill">${food.state}</span>
                    ${dietBadge}
                </div>
            </div>

            <div class="food-content">
                <div class="food-header-row">
                    <h3 class="food-name">${food.name}</h3>
                    <span class="rating">
                        <svg class="star-icon" viewBox="0 0 24 24" width="14" height="14" fill="#D4AF37"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.784 1.399 8.168-7.333-3.856-7.333 3.856 1.399-8.168-5.934-5.784 8.2-1.192zm0 5.701l-2.232 4.523-4.991.726 3.612 3.521-.852 4.972 4.463-2.347 4.463 2.347-.852-4.972 3.612-3.521-4.991-.726z"/></svg>
                        ${food.rating}
                    </span>
                </div>

                <div class="food-region-tag">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    ${food.region} • ${food.state}
                </div>

                <div class="food-description">
                    ${food.description}
                </div>

                <div class="food-bottom">
                    <div class="price-container">
                        <span class="currency">₹</span>
                        <span class="price">${food.price}</span>
                    </div>

                    <button
                        class="add-button"
                        onclick="addToCart(${food.id})"
                        aria-label="Add ${food.name} to cart"
                    >
                        <span class="plus-icon">+</span> Add
                    </button>
                </div>
            </div>
        `;

        foodContainer.appendChild(card);
    });
}

// FILTER BY REGION
function filterRegion(region) {
    selectedRegion = region;

    document.querySelectorAll(".region").forEach(function (button) {
        button.classList.remove("active");
    });

    document.querySelectorAll(".region").forEach(function (button) {
        if (button.innerText.trim().toLowerCase().includes(region.trim().toLowerCase()) ||
            region.trim().toLowerCase().includes(button.innerText.trim().toLowerCase())) {
            button.classList.add("active");
        }
    });

    renderFood();
}

// FILTER BY DIETARY (VEG / NON-VEG / ALL)
function filterDiet(diet) {
    selectedDiet = diet;

    document.querySelectorAll(".diet-btn").forEach(function (button) {
        button.classList.remove("active");
        if (button.dataset.diet === diet) {
            button.classList.add("active");
        }
    });

    renderFood();
}

// SORT FOODS
function sortFoodsBy(sortType) {
    sortBy = sortType;
    renderFood();
}

// SEARCH FOOD
function searchFood() {
    renderFood();
}

// CLEAR SEARCH
function clearSearch() {
    if (searchInput) {
        searchInput.value = "";
        renderFood();
    }
}

// RESET ALL FILTERS
function resetFilters() {
    selectedRegion = "All";
    selectedDiet = "All";
    sortBy = "featured";
    if (searchInput) searchInput.value = "";

    document.querySelectorAll(".region").forEach(function (button) {
        button.classList.remove("active");
        if (button.innerText.trim() === "All" || button.innerText.trim() === "All Delicacies") button.classList.add("active");
    });

    document.querySelectorAll(".diet-btn").forEach(function (button) {
        button.classList.remove("active");
        if (button.dataset.diet === "All") button.classList.add("active");
    });

    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect) sortSelect.value = "featured";

    renderFood();
}

// RENDER FOOD LIST WITH SEARCH, REGION, DIET & SORT
function renderFood() {
    const searchText = searchInput ? searchInput.value.toLowerCase().trim() : "";

    let filteredFoods = foods.filter(function (food) {
        const regionMatch =
            selectedRegion === "All" ||
            food.region.toLowerCase().includes(selectedRegion.toLowerCase()) ||
            selectedRegion.toLowerCase().includes(food.region.toLowerCase());

        const dietMatch =
            selectedDiet === "All" ||
            (selectedDiet === "Veg" && food.isVeg) ||
            (selectedDiet === "Non-Veg" && !food.isVeg);

        const searchMatch =
            food.name.toLowerCase().includes(searchText) ||
            food.state.toLowerCase().includes(searchText) ||
            food.region.toLowerCase().includes(searchText) ||
            food.description.toLowerCase().includes(searchText);

        return regionMatch && dietMatch && searchMatch;
    });

    if (sortBy === "price-asc") {
        filteredFoods.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
        filteredFoods.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
        filteredFoods.sort((a, b) => b.rating - a.rating);
    }

    displayFoods(filteredFoods);
}

// ADD TO CART (Reliable ID-based lookup, avoiding filter mismatch)
function addToCart(foodIdOrIndex) {
    let food = foods.find(f => f.id === foodIdOrIndex);

    if (!food && typeof foodIdOrIndex === "number" && foodIdOrIndex >= 0 && foodIdOrIndex < foods.length) {
        food = foods[foodIdOrIndex];
    }

    if (!food) {
        console.error("Dish not found:", foodIdOrIndex);
        return;
    }

    const existingItem = cart.find(item => item.id === food.id || item.name === food.name);
    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
        cart.push({
            id: food.id,
            name: food.name,
            price: food.price,
            image: food.image,
            state: food.state,
            isVeg: food.isVeg,
            quantity: 1
        });
    }

    updateCart();
    showToast(`Added ${food.name} to your feast!`);
    animateCartIcon();
}

// CHANGE CART QUANTITY (+ / -)
function changeQuantity(foodId, delta) {
    const itemIndex = cart.findIndex(item => item.id === foodId);
    if (itemIndex > -1) {
        cart[itemIndex].quantity = (cart[itemIndex].quantity || 1) + delta;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
    }
    updateCart();
    renderCart();
}

// REMOVE ITEM FROM CART
function removeFromCart(foodId) {
    cart = cart.filter(item => item.id !== foodId);
    updateCart();
    renderCart();
}

// CLEAR CART
function clearCart() {
    if (cart.length === 0) return;
    if (confirm("Are you sure you want to empty your royal cart?")) {
        cart = [];
        updateCart();
        renderCart();
        showToast("Cart has been cleared", "warning");
    }
}

// ANIMATE CART BADGE ON ADD
function animateCartIcon() {
    const badge = document.getElementById("cartCount");
    if (badge) {
        badge.classList.remove("bump");
        void badge.offsetWidth;
        badge.classList.add("bump");
    }
}

// UPDATE CART BADGE
function updateCart() {
    const totalCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    if (cartCount) {
        cartCount.innerText = totalCount;
        cartCount.style.display = totalCount > 0 ? "inline-flex" : "none";
    }
}

// OPEN CART MODAL
function openCart() {
    if (!cartModal) return;
    cartModal.classList.add("show");
    document.body.style.overflow = "hidden";
    renderCart();
}

// CLOSE CART MODAL
function closeCart() {
    if (!cartModal) return;
    cartModal.classList.remove("show");
    document.body.style.overflow = "auto";
}

// RENDER CART MODAL ITEMS
function renderCart() {
    if (!cartItems) return;
    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart-view">
                <div class="empty-cart-icon">🛒</div>
                <h4>Your Feast is Empty</h4>
                <p>Indulge your palate by adding delicious delicacies from our regal menu.</p>
                <button class="return-menu-btn" onclick="closeCart(); scrollToMenu();">
                    Explore Menu
                </button>
            </div>
        `;
        if (cartTotal) cartTotal.innerText = "Total: ₹0";
        const checkoutBtn = document.getElementById("checkoutBtn");
        if (checkoutBtn) checkoutBtn.disabled = true;
        return;
    }

    let subtotal = 0;

    cart.forEach(function (food) {
        const qty = food.quantity || 1;
        const itemTotal = food.price * qty;
        subtotal += itemTotal;

        const item = document.createElement("div");
        item.className = "cart-item";

        item.innerHTML = `
            <div class="cart-item-img">
                <img src="${food.image}" alt="${food.name}" onerror="handleImageError(this)">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-title-row">
                    <span class="cart-item-name">${food.name}</span>
                    <button class="cart-item-del" onclick="removeFromCart(${food.id})" title="Remove item">&times;</button>
                </div>
                <div class="cart-item-state">${food.state || ''}</div>
                <div class="cart-item-price-row">
                    <span class="cart-item-price">₹${food.price} each</span>
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="changeQuantity(${food.id}, -1)">-</button>
                        <span class="qty-num">${qty}</span>
                        <button class="qty-btn" onclick="changeQuantity(${food.id}, 1)">+</button>
                    </div>
                    <strong class="cart-item-subtotal">₹${itemTotal}</strong>
                </div>
            </div>
        `;

        cartItems.appendChild(item);
    });

    if (cartTotal) {
        cartTotal.innerHTML = `
            <div class="bill-breakdown">
                <div class="bill-row">
                    <span>Subtotal:</span>
                    <span>₹${subtotal}</span>
                </div>
                <div class="bill-row">
                    <span>Royal Packaging & Presentation:</span>
                    <span class="free-text">COMPLIMENTARY</span>
                </div>
                <div class="bill-row">
                    <span>Delivery:</span>
                    <span class="free-text">${subtotal >= 299 ? 'FREE' : '₹40'}</span>
                </div>
                <div class="bill-row total-highlight">
                    <span>Grand Total:</span>
                    <span>₹${subtotal >= 299 ? subtotal : subtotal + 40}</span>
                </div>
            </div>
        `;
    }

    const checkoutBtn = document.getElementById("checkoutBtn");
    if (checkoutBtn) checkoutBtn.disabled = false;
}

// LOGIN MODAL CONTROLS
function openLogin() {
    if (!loginModal) return;
    loginModal.classList.add("show");
    document.body.style.overflow = "hidden";
    const msg = document.getElementById("loginMessage");
    if (msg) {
        msg.innerText = "";
        msg.style.display = "none";
    }
}

function closeLogin() {
    if (!loginModal) return;
    loginModal.classList.remove("show");
    document.body.style.overflow = "auto";
}

// SAVE USER (LOGIN)
function loginUser() {
    const nameEl = document.getElementById("userName");
    const emailEl = document.getElementById("userEmail");
    const passEl = document.getElementById("userPassword");
    const message = document.getElementById("loginMessage");

    const name = nameEl ? nameEl.value.trim() : "";
    const email = emailEl ? emailEl.value.trim() : "";
    const password = passEl ? passEl.value.trim() : "";

    if (name === "" || email === "" || password === "") {
        if (message) {
            message.style.display = "block";
            message.className = "auth-message error";
            message.innerText = "Please fill in all the required credentials.";
        }
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        if (message) {
            message.style.display = "block";
            message.className = "auth-message error";
            message.innerText = "Please enter a valid email address.";
        }
        return;
    }

    const user = {
        name: name,
        email: email
    };

    localStorage.setItem("raajBhogUser", JSON.stringify(user));

    if (message) {
        message.style.display = "block";
        message.className = "auth-message success";
        message.innerText = `Welcome to Raajbhog Sthaan, ${name}!`;
    }

    setTimeout(function () {
        closeLogin();
        showUser();
        showToast(`Welcome back, ${name}!`);
    }, 700);
}

// SHOW USER ON HEADER
function showUser() {
    const savedUser = localStorage.getItem("raajBhogUser");

    if (savedUser && loginButton) {
        try {
            const user = JSON.parse(savedUser);
            loginButton.innerHTML = `
                <span class="user-avatar">👑</span>
                <span>Hi, ${user.name.split(" ")[0]}</span>
            `;
            loginButton.className = "login-btn logged-in";
            loginButton.onclick = showUserMenu;
        } catch (e) {
            console.error("Invalid user in localStorage", e);
        }
    } else if (loginButton) {
        loginButton.innerHTML = `
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            <span>Login</span>
        `;
        loginButton.className = "login-btn";
        loginButton.onclick = openLogin;
    }
}

// SHOW USER MENU / LOGOUT MODAL
function showUserMenu() {
    const savedUser = localStorage.getItem("raajBhogUser");
    const user = savedUser ? JSON.parse(savedUser) : null;
    const name = user ? user.name : "Guest";

    if (confirm(`Logged in as ${name}.\nWould you like to log out of Raajbhog Sthaan?`)) {
        logout();
    }
}

// LOGOUT
function logout() {
    localStorage.removeItem("raajBhogUser");
    loginButton.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
        <span>Login</span>
    `;
    loginButton.className = "login-btn";
    loginButton.onclick = openLogin;
    showToast("You have been safely logged out.", "warning");
}

// CHECKOUT
function checkout() {
    if (cart.length === 0) {
        showToast("Your cart is empty.", "warning");
        return;
    }

    const user = localStorage.getItem("raajBhogUser");

    if (!user) {
        closeCart();
        openLogin();
        const msg = document.getElementById("loginMessage");
        if (msg) {
            msg.style.display = "block";
            msg.className = "auth-message warning";
            msg.innerText = "Please authenticate as our guest before checkout.";
        }
        return;
    }

    const userData = JSON.parse(user);
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

    closeCart();
    showToast(`Order confirmed! 35-min Shahi Delivery dispatched for ${userData.name}!`);

    alert(
        `👑 RAAJBHOG STHAAN - ORDER CONFIRMED! 👑\n\n` +
        `Thank you, ${userData.name}!\n` +
        `Your grand feast of ${totalItems} delicacy items has been accepted by our Royal Khansamas & Wok Masters.\n\n` +
        `A confirmation message has been dispatched to ${userData.email}.\n` +
        `Estimated arrival: 30-35 minutes in royal insulated copper packaging.`
    );

    cart = [];
    updateCart();
}

// SCROLL TO MENU
function scrollToMenu() {
    const menuEl = document.getElementById("menu");
    if (menuEl) {
        menuEl.scrollIntoView({
            behavior: "smooth"
        });
    }
}

// CLOSE MODAL WHEN CLICKING OUTSIDE
window.onclick = function (event) {
    if (event.target === cartModal) {
        closeCart();
    }
    if (event.target === loginModal) {
        closeLogin();
    }
};

// KEYBOARD ACCESSIBILITY (ESC key to close modals)
window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeCart();
        closeLogin();
    }
});

// INITIAL LOAD ON DOM READY
document.addEventListener("DOMContentLoaded", function () {
    renderFood();
    showUser();
    updateCart();
});

if (document.readyState === "complete" || document.readyState === "interactive") {
    renderFood();
    showUser();
    updateCart();
}