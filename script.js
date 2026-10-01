// ==========================================
// RAAJBHOG STHAAN (राजभोग स्थान)
// Luxury Royal Indian Culinary Portal
// JavaScript Engine
// ==========================================

// FOOD DATABASE WITH 40 ROYAL HERITAGE DELICACIES
const foods = [
    {
        id: 1,
        name: "Dal Baati Churma",
        state: "Rajasthan",
        region: "West India",
        price: 189,
        rating: 4.9,
        isVeg: true,
        description: "Traditional Rajasthani royal delicacy baked in earthen ovens with pure desi ghee and sweet churma.",
        image: "https://loremflickr.com/700/480/dal,baati?lock=1",
        fallback: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 2,
        name: "Pyaaz Kachori",
        state: "Rajasthan",
        region: "West India",
        price: 79,
        rating: 4.8,
        isVeg: true,
        description: "Crispy, flaky and spicy Jaipur speciality stuffed with caramelized onions and royal spices.",
        image: "https://loremflickr.com/700/480/kachori?lock=2",
        fallback: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 3,
        name: "Amritsari Kulcha",
        state: "Punjab",
        region: "North India",
        price: 129,
        rating: 4.9,
        isVeg: true,
        description: "Stuffed crispy Punjabi tandoor bread layered with herbs, served with spicy chole and tamarind chutney.",
        image: "https://loremflickr.com/700/480/kulcha?lock=3",
        fallback: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 4,
        name: "Chole Bhature",
        state: "Punjab",
        region: "North India",
        price: 139,
        rating: 4.9,
        isVeg: true,
        description: "Classic Punjabi comfort food featuring fluffy puffed bhaturas with slow-simmered spiced chickpeas.",
        image: "https://loremflickr.com/700/480/chole,bhature?lock=4",
        fallback: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 5,
        name: "Butter Chicken",
        state: "Punjab",
        region: "North India",
        price: 249,
        rating: 4.9,
        isVeg: false,
        description: "Creamy and rich Punjabi curry with succulent tandoori chicken cooked in a velvety makhani gravy.",
        image: "https://loremflickr.com/700/480/butter,chicken?lock=5",
        fallback: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 6,
        name: "Paneer Tikka",
        state: "Punjab",
        region: "North India",
        price: 189,
        rating: 4.8,
        isVeg: true,
        description: "Smoky tandoori paneer marinated in Kashmiri chili, hung curd, and stone-ground spices with bell peppers.",
        image: "https://loremflickr.com/700/480/paneer,tikka?lock=6",
        fallback: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 7,
        name: "Awadhi Biryani",
        state: "Uttar Pradesh",
        region: "North India",
        price: 219,
        rating: 4.8,
        isVeg: false,
        description: "Slow-cooked Lucknowi dum biryani infused with saffron, rose water, kewra, and melt-in-mouth tender cuts.",
        image: "https://loremflickr.com/700/480/biryani?lock=7",
        fallback: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 8,
        name: "Galouti Kebab",
        state: "Uttar Pradesh",
        region: "North India",
        price: 229,
        rating: 4.9,
        isVeg: false,
        description: "Legendary melt-in-the-mouth Awadhi delicacy crafted with over 32 royal spices and smoked clarifying ghee.",
        image: "https://loremflickr.com/700/480/kebab?lock=8",
        fallback: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 9,
        name: "Banarasi Kachori",
        state: "Uttar Pradesh",
        region: "North India",
        price: 89,
        rating: 4.7,
        description: "Crispy deep-fried pastry filled with spiced urad dal served with tangy hing aloo subzi.",
        isVeg: true,
        image: "https://loremflickr.com/700/480/indian,street,food?lock=9",
        fallback: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 10,
        name: "Kashmiri Rogan Josh",
        state: "Jammu & Kashmir",
        region: "North India",
        price: 249,
        rating: 4.9,
        isVeg: false,
        description: "Aromatic Kashmiri meat curry braised with alkanet root (ratan jot), whole cardamom, and dried cockscomb flower.",
        image: "https://loremflickr.com/700/480/rogan,josh?lock=10",
        fallback: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 11,
        name: "Sarson Saag & Makki Roti",
        state: "Punjab",
        region: "North India",
        price: 179,
        rating: 4.8,
        isVeg: true,
        description: "Traditional Punjabi winter meal of slow-cooked mustard greens topped with white butter and golden maize flatbread.",
        image: "https://loremflickr.com/700/480/sarson,saag?lock=11",
        fallback: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 12,
        name: "Dhokla",
        state: "Gujarat",
        region: "West India",
        price: 79,
        rating: 4.8,
        isVeg: true,
        description: "Spongy, soft steamed fermented besan cakes tempered with mustard seeds, fresh curry leaves, and green chilies.",
        image: "https://loremflickr.com/700/480/dhokla?lock=12",
        fallback: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 13,
        name: "Khandvi",
        state: "Gujarat",
        region: "West India",
        price: 99,
        rating: 4.8,
        isVeg: true,
        description: "Silky, delicate gram flour and spiced buttermilk rolls garnished with fresh grated coconut and fragrant coriander.",
        image: "https://loremflickr.com/700/480/khandvi?lock=13",
        fallback: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 14,
        name: "Fafda Jalebi",
        state: "Gujarat",
        region: "West India",
        price: 119,
        rating: 4.8,
        isVeg: true,
        description: "Iconic Gujarati combo of crispy gram flour strips paired with hot, saffron-syrup soaked golden spirals.",
        image: "https://loremflickr.com/700/480/jalebi?lock=14",
        fallback: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 15,
        name: "Pav Bhaji",
        state: "Maharashtra",
        region: "West India",
        price: 119,
        rating: 4.9,
        isVeg: true,
        description: "Famous Mumbai street meal of spiced mashed vegetable gravy cooked on a hot tawa with buttery toasted ladi pav.",
        image: "https://loremflickr.com/700/480/pav,bhaji?lock=15",
        fallback: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 16,
        name: "Vada Pav",
        state: "Maharashtra",
        region: "West India",
        price: 69,
        rating: 4.8,
        isVeg: true,
        description: "The heartbeat of Mumbai: spiced golden potato fritter in soft pav with fiery garlic podi and green chutney.",
        image: "https://loremflickr.com/700/480/vada,pav?lock=16",
        fallback: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 17,
        name: "Misal Pav",
        state: "Maharashtra",
        region: "West India",
        price: 129,
        rating: 4.8,
        isVeg: true,
        description: "Zesty Maharashtrian sprouted moth bean curry served with crunchy farsan, fresh onions, lime, and pav.",
        image: "https://loremflickr.com/700/480/misal,pav?lock=17",
        fallback: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 18,
        name: "Puran Poli",
        state: "Maharashtra",
        region: "West India",
        price: 99,
        rating: 4.7,
        isVeg: true,
        description: "Festive sweet flatbread stuffed with fragrant chana dal, jaggery, cardamom, and drizzled with warm melted ghee.",
        image: "https://loremflickr.com/700/480/puran,poli?lock=18",
        fallback: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 19,
        name: "Hyderabadi Biryani",
        state: "Telangana",
        region: "South India",
        price: 229,
        rating: 4.9,
        isVeg: false,
        description: "World-renowned Nizami dum biryani cooked in sealed handis with saffron rice, roasted spices, and tender cuts.",
        image: "https://loremflickr.com/700/480/hyderabadi,biryani?lock=19",
        fallback: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 20,
        name: "Masala Dosa",
        state: "Karnataka",
        region: "South India",
        price: 119,
        rating: 4.9,
        isVeg: true,
        description: "Crispy golden fermented crepe roasted with pure ghee, filled with spiced potato palya and fresh coconut chutneys.",
        image: "https://loremflickr.com/700/480/masala,dosa?lock=20",
        fallback: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 21,
        name: "Idli Sambar",
        state: "Tamil Nadu",
        region: "South India",
        price: 89,
        rating: 4.8,
        isVeg: true,
        description: "Pillow-soft steamed rice cakes paired with steaming vegetable lentil stew and freshly ground coconut chutneys.",
        image: "https://loremflickr.com/700/480/idli,sambar?lock=21",
        fallback: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 22,
        name: "Chettinad Chicken",
        state: "Tamil Nadu",
        region: "South India",
        price: 219,
        rating: 4.9,
        isVeg: false,
        description: "Aromatic Tamil curry with freshly roasted star anise, kalpasi (black stone flower), and peppercorns.",
        image: "https://loremflickr.com/700/480/chettinad,chicken?lock=22",
        fallback: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 23,
        name: "Kerala Sadya",
        state: "Kerala",
        region: "South India",
        price: 249,
        rating: 4.9,
        isVeg: true,
        description: "Traditional royal feast served on a fresh banana leaf featuring avial, thoran, olan, sambar, and payasam.",
        image: "https://loremflickr.com/700/480/kerala,sadya?lock=23",
        fallback: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 24,
        name: "Appam & Stew",
        state: "Kerala",
        region: "South India",
        price: 169,
        rating: 4.7,
        isVeg: true,
        description: "Lacy fermented rice hoppers with soft spongy centers, served alongside mild, aromatic coconut milk vegetable stew.",
        image: "https://loremflickr.com/700/480/appam?lock=24",
        fallback: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 25,
        name: "Litti Chokha",
        state: "Bihar",
        region: "East India",
        price: 119,
        rating: 4.8,
        isVeg: true,
        description: "Whole wheat dough balls filled with spicy sattu (roasted gram flour), roasted over coals and soaked in desi ghee.",
        image: "https://loremflickr.com/700/480/litti,chokha?lock=25",
        fallback: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 26,
        name: "Champaran Mutton",
        state: "Bihar",
        region: "East India",
        price: 239,
        rating: 4.8,
        isVeg: false,
        description: "Famous Ahuna handi meat slow-cooked in sealed earthen pots with whole garlic pods and cold-pressed mustard oil.",
        image: "https://loremflickr.com/700/480/mutton,curry?lock=26",
        fallback: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 27,
        name: "Rasgulla",
        state: "West Bengal",
        region: "East India",
        price: 89,
        rating: 4.8,
        isVeg: true,
        description: "Spongy, melt-in-mouth cottage cheese dumplings soaked in clear, fragrant rose and cardamom syrup.",
        image: "https://loremflickr.com/700/480/rasgulla?lock=27",
        fallback: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 28,
        name: "Mishti Doi",
        state: "West Bengal",
        region: "East India",
        price: 89,
        rating: 4.8,
        isVeg: true,
        description: "Traditional Bengali fermented sweet yogurt set in earthen clay pots with rich caramelized palm jaggery.",
        image: "https://loremflickr.com/700/480/mishti,doi?lock=28",
        fallback: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 29,
        name: "Macher Jhol",
        state: "West Bengal",
        region: "East India",
        price: 199,
        rating: 4.7,
        isVeg: false,
        description: "Homestyle Bengali freshwater fish curry prepared with panch phoron, turmeric, green chilies, and tender potatoes.",
        image: "https://loremflickr.com/700/480/fish,curry?lock=29",
        fallback: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 30,
        name: "Dalma",
        state: "Odisha",
        region: "East India",
        price: 139,
        rating: 4.7,
        isVeg: true,
        description: "Holy temple preparation of toor dal cooked with raw papaya, pumpkin, brinjal, tempered with roasted cumin-chili ghee.",
        image: "https://loremflickr.com/700/480/indian,dal?lock=30",
        fallback: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 31,
        name: "Chhena Poda",
        state: "Odisha",
        region: "East India",
        price: 99,
        rating: 4.8,
        isVeg: true,
        description: "Lord Jagannath's favourite baked dessert made with fresh cottage cheese, caramelized sugar, and cardamom in sal leaves.",
        image: "https://loremflickr.com/700/480/indian,dessert?lock=31",
        fallback: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 32,
        name: "Momos",
        state: "Sikkim",
        region: "Northeast India",
        price: 109,
        rating: 4.8,
        isVeg: true,
        description: "Hand-pleated Himalayan steamed dumplings stuffed with mountain greens and spices, served with pungent Dalle chilli dip.",
        image: "https://loremflickr.com/700/480/momos?lock=32",
        fallback: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 33,
        name: "Thukpa",
        state: "Sikkim",
        region: "Northeast India",
        price: 149,
        rating: 4.8,
        isVeg: false,
        description: "Soul-warming Himalayan noodle soup simmered in fragrant spiced broth with seasonal mountain herbs and chicken.",
        image: "https://loremflickr.com/700/480/thukpa?lock=33",
        fallback: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 34,
        name: "Naga Pork Curry",
        state: "Nagaland",
        region: "Northeast India",
        price: 219,
        rating: 4.7,
        isVeg: false,
        description: "Authentic Naga delicacy cooked with smoked pork, fermented bamboo shoots, and legendary Raja Mircha (Ghost Pepper).",
        image: "https://loremflickr.com/700/480/pork,curry?lock=34",
        fallback: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 35,
        name: "Goan Fish Curry",
        state: "Goa",
        region: "West India",
        price: 219,
        rating: 4.8,
        isVeg: false,
        description: "Tangy and spicy coastal curry infused with fresh coconut milk, Kashmiri chilies, and tart kokum berries.",
        image: "https://loremflickr.com/700/480/goan,fish,curry?lock=35",
        fallback: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 36,
        name: "Poha Jalebi",
        state: "Madhya Pradesh",
        region: "West India",
        price: 99,
        rating: 4.7,
        isVeg: true,
        description: "Famous Indori breakfast of fragrant steamed flattened rice sprinkled with spicy Jeeravan masala and warm jalebis.",
        image: "https://loremflickr.com/700/480/poha,jalebi?lock=36",
        fallback: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 37,
        name: "Himachali Dham",
        state: "Himachal Pradesh",
        region: "North India",
        price: 229,
        rating: 4.8,
        isVeg: true,
        description: "Sacred festive feast cooked in brass vessels without onion or garlic, featuring Madra, Mah Dal, and sweet Khatta.",
        image: "https://loremflickr.com/700/480/himachali,food?lock=37",
        fallback: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 38,
        name: "Aloo Ke Gutke",
        state: "Uttarakhand",
        region: "North India",
        price: 99,
        rating: 4.7,
        isVeg: true,
        description: "Pahadi style boiled potatoes tossed in aromatic mustard oil, Himalayan jamboo herb, and crushed mountain coriander.",
        image: "https://loremflickr.com/700/480/aloo?lock=38",
        fallback: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 39,
        name: "Rajasthani Royal Thali",
        state: "Royal Specials",
        region: "Royal Specials",
        price: 279,
        rating: 4.9,
        isVeg: true,
        description: "Grand imperial feast: Dal Baati Churma, Gatte ki Subzi, Ker Sangri, Bajre ki Roti, Boondi Raita, and Malpua.",
        image: "https://loremflickr.com/700/480/rajasthani,thali?lock=39",
        fallback: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 40,
        name: "Awadhi Royal Thali",
        state: "Royal Specials",
        region: "Royal Specials",
        price: 299,
        rating: 4.9,
        isVeg: false,
        description: "Fit for Nawabs: Galouti Kebab, Awadhi Murg Biryani, Sheermal, Rogan Josh, Shahi Tukda, and saffron firni.",
        image: "https://loremflickr.com/700/480/indian,thali?lock=40",
        fallback: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=700&q=80"
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
function handleImageError(imgElement, fallbackUrl) {
    if (imgElement.dataset.fallbackTried) return;
    imgElement.dataset.fallbackTried = "true";
    imgElement.src = fallbackUrl || "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=700&q=80";
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
        foodCountIndicator.innerText = `${list.length} Imperial Delicac${list.length === 1 ? 'y' : 'ies'}`;
    }

    if (list.length === 0) {
        foodContainer.innerHTML = `
            <div class="no-food-found">
                <div class="empty-icon">🥘</div>
                <h3>No Royal Delicacies Found</h3>
                <p>We couldn't find any dishes matching your royal preference. Try adjusting your search or region filters.</p>
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
                    onerror="handleImageError(this, '${food.fallback}')"
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
        if (button.innerText.trim().toLowerCase() === region.trim().toLowerCase()) {
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
        if (button.innerText.trim() === "All") button.classList.add("active");
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
            food.region.toLowerCase() === selectedRegion.toLowerCase();

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

// ADD TO CART (Accepts either Food ID or index, completely resolving the filter indexing bug)
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
            fallback: food.fallback,
            state: food.state,
            isVeg: food.isVeg,
            quantity: 1
        });
    }

    updateCart();
    showToast(`Added ${food.name} to your Royal Thali!`);
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
        showToast("Royal cart has been cleared", "warning");
    }
}

// ANIMATE CART ICON ON ADD
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
                <h4>Your Royal Feast is Empty</h4>
                <p>Indulge your palate by adding royal delicacies from our regal menu.</p>
                <button class="return-menu-btn" onclick="closeCart(); scrollToMenu();">
                    Explore Royal Menu
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
                <img src="${food.image}" alt="${food.name}" onerror="handleImageError(this, '${food.fallback}')">
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
                    <span>Royal Packaging & Shahi Presentation:</span>
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
            message.innerText = "Please fill in all the required royal credentials.";
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
        showToast("Your royal cart is empty.", "warning");
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
            msg.innerText = "Please authenticate as our royal guest before checkout.";
        }
        return;
    }

    const userData = JSON.parse(user);
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

    closeCart();
    showToast(`Order confirmed! 40-min Shahi Delivery dispatched for ${userData.name}!`);

    alert(
        `👑 RAAJBHOG STHAAN - ORDER CONFIRMED! 👑\n\n` +
        `Thank you, ${userData.name}!\n` +
        `Your grand feast of ${totalItems} delicacy items has been accepted by our Royal Khansamas.\n\n` +
        `A confirmation pigeon (and SMS) has been dispatched to ${userData.email}.\n` +
        `Estimated arrival: 35-40 minutes in royal insulated copper packaging.`
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