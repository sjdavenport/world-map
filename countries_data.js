// Country data with information and colors
const countryData = {
    Canada: {
        name: "Canada",
        capital: "Ottawa",
        population: "38.2 million",
        info: "Second-largest country by land area, known for natural resources, multiculturalism, and universal healthcare",
        color: "#D73027"
    },
    "United States": {
        name: "United States",
        capital: "Washington, D.C.",
        population: "331 million",
        info: "World's largest economy, federal republic with diverse geography and global cultural influence",
        color: "#4575B4"
    },
    Mexico: {
        name: "Mexico",
        capital: "Mexico City",
        population: "128 million",
        info: "Rich ancient civilizations heritage, major oil producer, and vibrant cultural traditions",
        color: "#74ADD1"
    },
    Greenland: {
        name: "Greenland",
        capital: "Nuuk",
        population: "56,000",
        info: "World's largest island, autonomous territory of Denmark, mostly covered by ice sheet",
        color: "#ABD9E9"
    },
    Iceland: {
        name: "Iceland",
        capital: "Reykjavik",
        population: "370,000",
        info: "Nordic island nation known for geothermal energy, glaciers, and volcanic activity",
        color: "#E0F3F8"
    },
    "United Kingdom": {
        name: "United Kingdom",
        capital: "London",
        population: "67 million",
        info: "Constitutional monarchy comprising England, Scotland, Wales, and Northern Ireland",
        color: "#313695"
    },
    Ireland: {
        name: "Ireland",
        capital: "Dublin",
        population: "5 million",
        info: "Island nation known for Celtic culture, literature, and the 'Emerald Isle' landscape",
        color: "#40004B"
    },
    France: {
        name: "France",
        capital: "Paris",
        population: "68 million",
        info: "Cultural powerhouse famous for art, cuisine, fashion, and historical landmarks",
        color: "#762A83"
    },
    Spain: {
        name: "Spain",
        capital: "Madrid",
        population: "47 million",
        info: "Iberian Peninsula nation known for flamenco, bullfighting, and diverse regional cultures",
        color: "#9970AB"
    },
    Portugal: {
        name: "Portugal",
        capital: "Lisbon",
        population: "10.3 million",
        info: "Maritime nation with rich exploration history and distinctive azulejo tile art",
        color: "#C2A5CF"
    },
    Belgium: {
        name: "Belgium",
        capital: "Brussels",
        population: "11.5 million",
        info: "EU headquarters location, famous for chocolate, waffles, and medieval architecture",
        color: "#E7D4E8"
    },
    Netherlands: {
        name: "Netherlands",
        capital: "Amsterdam",
        population: "17.4 million",
        info: "Low-lying country known for tulips, windmills, canals, and progressive social policies",
        color: "#F7F4F9"
    },
    Luxembourg: {
        name: "Luxembourg",
        capital: "Luxembourg City",
        population: "630,000",
        info: "Small wealthy nation and EU founding member with major financial sector",
        color: "#E7E1EF"
    },
    Germany: {
        name: "Germany",
        capital: "Berlin",
        population: "83 million",
        info: "Economic powerhouse in Europe, known for engineering, philosophy, and cultural contributions",
        color: "#D1C5E0"
    },
    Switzerland: {
        name: "Switzerland",
        capital: "Bern",
        population: "8.7 million",
        info: "Alpine nation famous for neutrality, banking, precision manufacturing, and scenic beauty",
        color: "#B8A9D1"
    },
    Italy: {
        name: "Italy",
        capital: "Rome",
        population: "60 million",
        info: "Boot-shaped peninsula rich in art, history, cuisine, and Renaissance heritage",
        color: "#998EC3"
    },
    Austria: {
        name: "Austria",
        capital: "Vienna",
        population: "9 million",
        info: "Alpine republic known for classical music, Habsburg history, and mountain landscapes",
        color: "#7B68EE"
    },
    Denmark: {
        name: "Denmark",
        capital: "Copenhagen",
        population: "5.8 million",
        info: "Scandinavian kingdom known for design, hygge lifestyle, and high quality of life",
        color: "#6A51A3"
    },
    Norway: {
        name: "Norway",
        capital: "Oslo",
        population: "5.4 million",
        info: "Nordic country famous for fjords, midnight sun, and sovereign wealth fund from oil",
        color: "#54278F"
    },
    Sweden: {
        name: "Sweden",
        capital: "Stockholm",
        population: "10.4 million",
        info: "Scandinavian nation known for innovation, welfare state, and IKEA",
        color: "#3F007D"
    },
    Finland: {
        name: "Finland",
        capital: "Helsinki",
        population: "5.5 million",
        info: "Nordic country known for education system, saunas, and Northern Lights",
        color: "#807DBA"
    },
    Estonia: {
        name: "Estonia",
        capital: "Tallinn",
        population: "1.3 million",
        info: "Baltic state known for digital innovation and well-preserved medieval old town",
        color: "#8C96C6"
    },
    Latvia: {
        name: "Latvia",
        capital: "Riga",
        population: "1.9 million",
        info: "Baltic nation with extensive forests and Art Nouveau architecture",
        color: "#9EBCDA"
    },
    Lithuania: {
        name: "Lithuania",
        capital: "Vilnius",
        population: "2.8 million",
        info: "Southernmost Baltic state with rich cultural heritage and basketball tradition",
        color: "#BFD3E6"
    },
    Poland: {
        name: "Poland",
        capital: "Warsaw",
        population: "38 million",
        info: "Central European nation with resilient history and strong Catholic traditions",
        color: "#E0ECF4"
    },
    "Czech Republic": {
        name: "Czech Republic",
        capital: "Prague",
        population: "10.7 million",
        info: "Central European country famous for beer, gothic architecture, and crystal",
        color: "#F7FBFF"
    },
    Slovakia: {
        name: "Slovakia",
        capital: "Bratislava",
        population: "5.5 million",
        info: "Landlocked nation in Central Europe known for castles and mountainous terrain",
        color: "#DEEBF7"
    },
    Hungary: {
        name: "Hungary",
        capital: "Budapest",
        population: "9.7 million",
        info: "Central European country known for thermal baths and unique Magyar language",
        color: "#C6DBEF"
    },
    Slovenia: {
        name: "Slovenia",
        capital: "Ljubljana",
        population: "2.1 million",
        info: "Alpine country known for Lake Bled and being one of the greenest countries",
        color: "#9ECAE1"
    },
    Croatia: {
        name: "Croatia",
        capital: "Zagreb",
        population: "3.9 million",
        info: "Adriatic coast nation famous for stunning coastline and Game of Thrones filming",
        color: "#6BAED6"
    },
    "Bosnia and Herzegovina": {
        name: "Bosnia and Herzegovina",
        capital: "Sarajevo",
        population: "3.3 million",
        info: "Balkan nation known for multicultural heritage and mountainous landscape",
        color: "#4292C6"
    },
    Serbia: {
        name: "Serbia",
        capital: "Belgrade",
        population: "7 million",
        info: "Balkan country with rich history and vibrant nightlife culture",
        color: "#2171B5"
    },
    Montenegro: {
        name: "Montenegro",
        capital: "Podgorica",
        population: "630,000",
        info: "Small Balkan nation known for dramatic mountains and Adriatic coastline",
        color: "#08519C"
    },
    Kosovo: {
        name: "Kosovo",
        capital: "Pristina",
        population: "1.9 million",
        info: "Young nation in the Balkans with complex recent history",
        color: "#08306B"
    },
    Albania: {
        name: "Albania",
        capital: "Tirana",
        population: "2.8 million",
        info: "Balkan nation emerging from isolation with beautiful coastline and mountains",
        color: "#0570B0"
    },
    "North Macedonia": {
        name: "North Macedonia",
        capital: "Skopje",
        population: "2.1 million",
        info: "Landlocked Balkan country with ancient Macedonian heritage",
        color: "#3690C0"
    },
    Greece: {
        name: "Greece",
        capital: "Athens",
        population: "10.7 million",
        info: "Birthplace of democracy and Western civilization with thousands of islands",
        color: "#74A9CF"
    },
    Bulgaria: {
        name: "Bulgaria",
        capital: "Sofia",
        population: "7 million",
        info: "Balkan nation known for rose oil production and ancient Thracian heritage",
        color: "#A6BDDB"
    },
    Romania: {
        name: "Romania",
        capital: "Bucharest",
        population: "19 million",
        info: "Eastern European country famous for Dracula legend and Carpathian Mountains",
        color: "#D0D1E6"
    },
    Moldova: {
        name: "Moldova",
        capital: "Chișinău",
        population: "2.6 million",
        info: "Small landlocked nation known for wine production and agricultural heritage",
        color: "#F2F0F7"
    },
    Ukraine: {
        name: "Ukraine",
        capital: "Kyiv",
        population: "44 million",
        info: "Largest country entirely in Europe, known for fertile farmland and rich culture",
        color: "#CBC9E2"
    },
    Belarus: {
        name: "Belarus",
        capital: "Minsk",
        population: "9.5 million",
        info: "Eastern European nation known as 'Europe's last dictatorship' with vast forests",
        color: "#9E9AC8"
    },
    Russia: {
        name: "Russia",
        capital: "Moscow",
        population: "146 million",
        info: "World's largest country spanning eleven time zones with rich cultural heritage",
        color: "#756BB1"
    },
    Turkey: {
        name: "Turkey",
        capital: "Ankara",
        population: "84 million",
        info: "Transcontinental nation bridging Europe and Asia with Ottoman heritage",
        color: "#54278F"
    },
    Cyprus: {
        name: "Cyprus",
        capital: "Nicosia",
        population: "1.2 million",
        info: "Mediterranean island nation divided between Greek and Turkish communities",
        color: "#FF6B6B"
    },
    Syria: {
        name: "Syria",
        capital: "Damascus",
        population: "18 million",
        info: "Ancient civilization cradle currently experiencing ongoing conflict",
        color: "#FF8E53"
    },
    Lebanon: {
        name: "Lebanon",
        capital: "Beirut",
        population: "6.8 million",
        info: "Small Mediterranean nation known as 'Paris of the Middle East'",
        color: "#FF6B35"
    },
    Israel: {
        name: "Israel",
        capital: "Jerusalem",
        population: "9.4 million",
        info: "Middle Eastern nation with significant religious importance for three major faiths",
        color: "#F7931E"
    },
    Palestine: {
        name: "Palestine",
        capital: "Ramallah",
        population: "5.1 million",
        info: "Partially recognized state with ongoing territorial disputes",
        color: "#FFB627"
    },
    Jordan: {
        name: "Jordan",
        capital: "Amman",
        population: "10.2 million",
        info: "Desert kingdom known for Petra and stability in a turbulent region",
        color: "#FFCC5C"
    },
    Iraq: {
        name: "Iraq",
        capital: "Baghdad",
        population: "40 million",
        info: "Mesopotamian cradle of civilization with significant oil reserves",
        color: "#FFE135"
    },
    "Saudi Arabia": {
        name: "Saudi Arabia",
        capital: "Riyadh",
        population: "35 million",
        info: "Desert kingdom and oil giant, home to Islam's holiest sites",
        color: "#B2DF8A"
    },
    Yemen: {
        name: "Yemen",
        capital: "Sana'a",
        population: "30 million",
        info: "Arabian Peninsula nation currently experiencing humanitarian crisis",
        color: "#33A02C"
    },
    Oman: {
        name: "Oman",
        capital: "Muscat",
        population: "5.1 million",
        info: "Sultanate known for maritime heritage and distinctive architecture",
        color: "#1F78B4"
    },
    "United Arab Emirates": {
        name: "United Arab Emirates",
        capital: "Abu Dhabi",
        population: "9.9 million",
        info: "Federation of emirates known for modern cities and business hub Dubai",
        color: "#A6CEE3"
    },
    Qatar: {
        name: "Qatar",
        capital: "Doha",
        population: "2.9 million",
        info: "Wealthy peninsula nation hosting 2022 FIFA World Cup",
        color: "#FB9A99"
    },
    Bahrain: {
        name: "Bahrain",
        capital: "Manama",
        population: "1.7 million",
        info: "Island nation and financial hub in the Persian Gulf",
        color: "#E31A1C"
    },
    Kuwait: {
        name: "Kuwait",
        capital: "Kuwait City",
        population: "4.3 million",
        info: "Small oil-rich nation with significant sovereign wealth",
        color: "#FDBF6F"
    },
    Iran: {
        name: "Iran",
        capital: "Tehran",
        population: "84 million",
        info: "Ancient Persia with rich cultural heritage and significant regional influence",
        color: "#FF7F00"
    },
    Afghanistan: {
        name: "Afghanistan",
        capital: "Kabul",
        population: "39 million",
        info: "Landlocked mountainous nation at the crossroads of civilizations",
        color: "#CAB2D6"
    },
    Pakistan: {
        name: "Pakistan",
        capital: "Islamabad",
        population: "225 million",
        info: "South Asian nation created during partition with nuclear capabilities",
        color: "#6A3D9A"
    },
    India: {
        name: "India",
        capital: "New Delhi",
        population: "1.38 billion",
        info: "World's largest democracy with incredible diversity and ancient civilization",
        color: "#FFFF99"
    },
    Nepal: {
        name: "Nepal",
        capital: "Kathmandu",
        population: "29 million",
        info: "Himalayan nation home to Mount Everest and birthplace of Buddha",
        color: "#B15928"
    },
    Bhutan: {
        name: "Bhutan",
        capital: "Thimphu",
        population: "770,000",
        info: "Himalayan kingdom measuring Gross National Happiness over GDP",
        color: "#FBB4AE"
    },
    Bangladesh: {
        name: "Bangladesh",
        capital: "Dhaka",
        population: "165 million",
        info: "Densely populated South Asian nation with rich textile industry",
        color: "#B3CDE3"
    },
    Myanmar: {
        name: "Myanmar",
        capital: "Naypyidaw",
        population: "54 million",
        info: "Southeast Asian nation also known as Burma with golden pagodas",
        color: "#CCEBC5"
    },
    Thailand: {
        name: "Thailand",
        capital: "Bangkok",
        population: "70 million",
        info: "Only Southeast Asian nation never colonized, known as 'Land of Smiles'",
        color: "#DECBE4"
    },
    Laos: {
        name: "Laos",
        capital: "Vientiane",
        population: "7.3 million",
        info: "Landlocked Southeast Asian nation with French colonial influence",
        color: "#FED9A6"
    },
    Cambodia: {
        name: "Cambodia",
        capital: "Phnom Penh",
        population: "16.7 million",
        info: "Southeast Asian nation home to magnificent Angkor Wat temple complex",
        color: "#FFFFCC"
    },
    Vietnam: {
        name: "Vietnam",
        capital: "Hanoi",
        population: "97 million",
        info: "Southeast Asian nation known for pho cuisine and recent rapid economic growth",
        color: "#E5D8BD"
    },
    Malaysia: {
        name: "Malaysia",
        capital: "Kuala Lumpur",
        population: "32 million",
        info: "Southeast Asian federation known for Petronas Towers and cultural diversity",
        color: "#FDDAEC"
    },
    Singapore: {
        name: "Singapore",
        capital: "Singapore",
        population: "5.9 million",
        info: "City-state and major financial hub known for efficiency and multiculturalism",
        color: "#F2F2F2"
    },
    Brunei: {
        name: "Brunei",
        capital: "Bandar Seri Begawan",
        population: "440,000",
        info: "Small wealthy sultanate on Borneo island with significant oil wealth",
        color: "#BF5B17"
    },
    Indonesia: {
        name: "Indonesia",
        capital: "Jakarta",
        population: "274 million",
        info: "World's largest archipelago and most populous Muslim-majority nation",
        color: "#F0027F"
    },
    Philippines: {
        name: "Philippines",
        capital: "Manila",
        population: "110 million",
        info: "Archipelago of over 7,000 islands with Spanish and American colonial history",
        color: "#BEAED4"
    },
    "Papua New Guinea": {
        name: "Papua New Guinea",
        capital: "Port Moresby",
        population: "9 million",
        info: "Oceanic nation with incredible linguistic diversity and tribal cultures",
        color: "#FDC086"
    },
    Australia: {
        name: "Australia",
        capital: "Canberra",
        population: "25.7 million",
        info: "Island continent known for unique wildlife and vast Outback",
        color: "#FFFF99"
    },
    "New Zealand": {
        name: "New Zealand",
        capital: "Wellington",
        population: "5.1 million",
        info: "Pacific island nation famous for dramatic landscapes and Maori culture",
        color: "#386CB0"
    },
    Morocco: {
        name: "Morocco",
        capital: "Rabat",
        population: "37 million",
        info: "North African kingdom blending Arab, Berber, and French influences",
        color: "#F0027F"
    },
    Algeria: {
        name: "Algeria",
        capital: "Algiers",
        population: "44 million",
        info: "Largest African country by land area with significant oil and gas reserves",
        color: "#BF5B17"
    },
    Tunisia: {
        name: "Tunisia",
        capital: "Tunis",
        population: "12 million",
        info: "North African nation where the Arab Spring began in 2010",
        color: "#F2F2F2"
    },
    Libya: {
        name: "Libya",
        capital: "Tripoli",
        population: "6.9 million",
        info: "North African oil-rich nation currently experiencing political instability",
        color: "#FDDAEC"
    },
    Egypt: {
        name: "Egypt",
        capital: "Cairo",
        population: "102 million",
        info: "Ancient civilization home to pyramids and crucial Suez Canal",
        color: "#E5D8BD"
    },
    Sudan: {
        name: "Sudan",
        capital: "Khartoum",
        population: "44 million",
        info: "Northeast African nation at the confluence of the Blue and White Nile",
        color: "#FFFFCC"
    },
    "South Sudan": {
        name: "South Sudan",
        capital: "Juba",
        population: "11 million",
        info: "World's newest nation, gained independence from Sudan in 2011",
        color: "#FED9A6"
    },
    Eritrea: {
        name: "Eritrea",
        capital: "Asmara",
        population: "3.5 million",
        info: "Horn of Africa nation known for Italian colonial architecture",
        color: "#DECBE4"
    },
    Djibouti: {
        name: "Djibouti",
        capital: "Djibouti City",
        population: "990,000",
        info: "Small Horn of Africa nation serving as important military base location",
        color: "#CCEBC5"
    },
    Somalia: {
        name: "Somalia",
        capital: "Mogadishu",
        population: "16 million",
        info: "Horn of Africa nation with long coastline and ongoing instability",
        color: "#B3CDE3"
    },
    Ethiopia: {
        name: "Ethiopia",
        capital: "Addis Ababa",
        population: "115 million",
        info: "Landlocked Horn of Africa nation, never fully colonized, and coffee's birthplace",
        color: "#FBB4AE"
    },
    Kenya: {
        name: "Kenya",
        capital: "Nairobi",
        population: "54 million",
        info: "East African nation famous for wildlife safaris and marathon runners",
        color: "#B15928"
    },
    Uganda: {
        name: "Uganda",
        capital: "Kampala",
        population: "46 million",
        info: "Landlocked East African nation known as the 'Pearl of Africa'",
        color: "#FFFF99"
    },
    Rwanda: {
        name: "Rwanda",
        capital: "Kigali",
        population: "13 million",
        info: "Small East African nation recovering remarkably from 1994 genocide",
        color: "#6A3D9A"
    },
    Burundi: {
        name: "Burundi",
        capital: "Gitega",
        population: "12 million",
        info: "Small landlocked East African nation with complex ethnic history",
        color: "#CAB2D6"
    },
    Tanzania: {
        name: "Tanzania",
        capital: "Dodoma",
        population: "60 million",
        info: "East African nation home to Serengeti, Kilimanjaro, and Zanzibar",
        color: "#FF7F00"
    },
    "Democratic Republic of the Congo": {
        name: "Democratic Republic of the Congo",
        capital: "Kinshasa",
        population: "90 million",
        info: "Central African nation rich in minerals but facing ongoing conflicts",
        color: "#FDBF6F"
    },
    "Republic of the Congo": {
        name: "Republic of the Congo",
        capital: "Brazzaville",
        population: "5.5 million",
        info: "Central African oil-producing nation, smaller than its eastern neighbor",
        color: "#E31A1C"
    },
    "Central African Republic": {
        name: "Central African Republic",
        capital: "Bangui",
        population: "4.8 million",
        info: "Landlocked Central African nation rich in diamonds and facing instability",
        color: "#FB9A99"
    },
    Cameroon: {
        name: "Cameroon",
        capital: "Yaoundé",
        population: "27 million",
        info: "Central African nation known as 'Africa in miniature' for its diversity",
        color: "#A6CEE3"
    },
    "Equatorial Guinea": {
        name: "Equatorial Guinea",
        capital: "Malabo",
        population: "1.4 million",
        info: "Small Central African oil-rich nation with Spanish as official language",
        color: "#1F78B4"
    },
    Gabon: {
        name: "Gabon",
        capital: "Libreville",
        population: "2.2 million",
        info: "Central African nation on the equator with significant oil wealth",
        color: "#33A02C"
    },
    Angola: {
        name: "Angola",
        capital: "Luanda",
        population: "33 million",
        info: "Southern African oil and diamond producer recovering from civil war",
        color: "#B2DF8A"
    },
    Zambia: {
        name: "Zambia",
        capital: "Lusaka",
        population: "18 million",
        info: "Landlocked Southern African nation known for copper mining and Victoria Falls",
        color: "#FFE135"
    },
    Malawi: {
        name: "Malawi",
        capital: "Lilongwe",
        population: "19 million",
        info: "Landlocked Southern African nation known as 'The Warm Heart of Africa'",
        color: "#FFCC5C"
    },
    Mozambique: {
        name: "Mozambique",
        capital: "Maputo",
        population: "32 million",
        info: "Southeast African nation with long Indian Ocean coastline",
        color: "#FFB627"
    },
    Zimbabwe: {
        name: "Zimbabwe",
        capital: "Harare",
        population: "15 million",
        info: "Landlocked Southern African nation home to Victoria Falls and Great Zimbabwe ruins",
        color: "#F7931E"
    },
    Botswana: {
        name: "Botswana",
        capital: "Gaborone",
        population: "2.4 million",
        info: "Landlocked Southern African nation known for diamonds and Okavango Delta",
        color: "#FF6B35"
    },
    Namibia: {
        name: "Namibia",
        capital: "Windhoek",
        population: "2.5 million",
        info: "Southwest African nation with the Namib Desert and diamond mining",
        color: "#FF8E53"
    },
    "South Africa": {
        name: "South Africa",
        capital: "Cape Town",
        population: "60 million",
        info: "Southern tip of Africa, known for apartheid history and Nelson Mandela",
        color: "#FF6B6B"
    },
    Lesotho: {
        name: "Lesotho",
        capital: "Maseru",
        population: "2.1 million",
        info: "Mountain kingdom completely surrounded by South Africa",
        color: "#54278F"
    },
    Eswatini: {
        name: "Eswatini",
        capital: "Mbabane",
        population: "1.2 million",
        info: "Small landlocked kingdom formerly known as Swaziland",
        color: "#756BB1"
    },
    Madagascar: {
        name: "Madagascar",
        capital: "Antananarivo",
        population: "28 million",
        info: "Large island nation off Africa's east coast with unique biodiversity",
        color: "#9E9AC8"
    },
    Mauritania: {
        name: "Mauritania",
        capital: "Nouakchott",
        population: "4.6 million",
        info: "Northwest African nation bridging the Maghreb and sub-Saharan Africa",
        color: "#CBC9E2"
    },
    Senegal: {
        name: "Senegal",
        capital: "Dakar",
        population: "17 million",
        info: "West African nation known for music, peanut production, and stable democracy",
        color: "#F2F0F7"
    },
    Gambia: {
        name: "Gambia",
        capital: "Banjul",
        population: "2.4 million",
        info: "Smallest mainland African country, completely surrounded by Senegal",
        color: "#D0D1E6"
    },
    "Guinea-Bissau": {
        name: "Guinea-Bissau",
        capital: "Bissau",
        population: "2 million",
        info: "Small West African nation known for cashew production",
        color: "#A6BDDB"
    },
    Guinea: {
        name: "Guinea",
        capital: "Conakry",
        population: "13 million",
        info: "West African nation rich in bauxite and other minerals",
        color: "#74A9CF"
    },
    "Sierra Leone": {
        name: "Sierra Leone",
        capital: "Freetown",
        population: "8 million",
        info: "West African nation known for diamonds and recovering from civil war",
        color: "#3690C0"
    },
    Liberia: {
        name: "Liberia",
        capital: "Monrovia",
        population: "5.1 million",
        info: "West African nation founded by freed American slaves",
        color: "#0570B0"
    },
    "Ivory Coast": {
        name: "Ivory Coast",
        capital: "Yamoussoukro",
        population: "26 million",
        info: "West African nation and world's largest cocoa producer",
        color: "#08306B"
    },
    "Burkina Faso": {
        name: "Burkina Faso",
        capital: "Ouagadougou",
        population: "21 million",
        info: "Landlocked West African nation known for cotton and gold mining",
        color: "#08519C"
    },
    Ghana: {
        name: "Ghana",
        capital: "Accra",
        population: "31 million",
        info: "West African nation, first to gain independence, known for gold and cocoa",
        color: "#2171B5"
    },
    Togo: {
        name: "Togo",
        capital: "Lomé",
        population: "8.3 million",
        info: "Small West African nation known for phosphate mining",
        color: "#4292C6"
    },
    Benin: {
        name: "Benin",
        capital: "Porto-Novo",
        population: "12 million",
        info: "West African nation, birthplace of the Vodoun religion",
        color: "#6BAED6"
    },
    Nigeria: {
        name: "Nigeria",
        capital: "Abuja",
        population: "218 million",
        info: "Most populous African country and major oil producer with Nollywood film industry",
        color: "#9ECAE1"
    },
    Niger: {
        name: "Niger",
        capital: "Niamey",
        population: "25 million",
        info: "Landlocked Sahel nation known for uranium mining and livestock",
        color: "#C6DBEF"
    },
    Mali: {
        name: "Mali",
        capital: "Bamako",
        population: "21 million",
        info: "Landlocked West African nation, former empire known for gold and salt trade",
        color: "#DEEBF7"
    },
    "Western Sahara": {
        name: "Western Sahara",
        capital: "El Aaiún",
        population: "600,000",
        info: "Disputed territory in Northwest Africa claimed by Morocco and Sahrawi Republic",
        color: "#F7FBFF"
    },
    Argentina: {
        name: "Argentina",
        capital: "Buenos Aires",
        population: "45 million",
        info: "South American nation famous for tango, beef, and Patagonian landscapes",
        color: "#E0ECF4"
    },
    Chile: {
        name: "Chile",
        capital: "Santiago",
        population: "19 million",
        info: "Long narrow country along Pacific coast known for wine and copper",
        color: "#BFD3E6"
    },
    Bolivia: {
        name: "Bolivia",
        capital: "La Paz",
        population: "12 million",
        info: "Landlocked South American nation with significant indigenous population",
        color: "#9EBCDA"
    },
    Peru: {
        name: "Peru",
        capital: "Lima",
        population: "33 million",
        info: "South American nation home to Machu Picchu and rich Inca heritage",
        color: "#8C96C6"
    },
    Ecuador: {
        name: "Ecuador",
        capital: "Quito",
        population: "18 million",
        info: "Small South American country straddling the equator with Galápagos Islands",
        color: "#807DBA"
    },
    Colombia: {
        name: "Colombia",
        capital: "Bogotá",
        population: "51 million",
        info: "South American nation known for coffee, emeralds, and biodiversity",
        color: "#6A51A3"
    },
    Venezuela: {
        name: "Venezuela",
        capital: "Caracas",
        population: "28 million",
        info: "South American oil-rich nation currently experiencing economic crisis",
        color: "#54278F"
    },
    Guyana: {
        name: "Guyana",
        capital: "Georgetown",
        population: "790,000",
        info: "Small South American nation with British colonial heritage and gold mining",
        color: "#3F007D"
    },
    Suriname: {
        name: "Suriname",
        capital: "Paramaribo",
        population: "590,000",
        info: "Small South American nation with Dutch colonial heritage",
        color: "#7B68EE"
    },
    "French Guiana": {
        name: "French Guiana",
        capital: "Cayenne",
        population: "300,000",
        info: "French overseas territory in South America, home to European Space Centre",
        color: "#998EC3"
    },
    Brazil: {
        name: "Brazil",
        capital: "Brasília",
        population: "215 million",
        info: "Largest South American country with Amazon rainforest and vibrant culture",
        color: "#B8A9D1"
    },
    Uruguay: {
        name: "Uruguay",
        capital: "Montevideo",
        population: "3.5 million",
        info: "Small South American nation known for progressive social policies",
        color: "#D1C5E0"
    },
    Paraguay: {
        name: "Paraguay",
        capital: "Asunción",
        population: "7.1 million",
        info: "Landlocked South American nation with Guaraní indigenous influence",
        color: "#E7E1EF"
    },
    Cuba: {
        name: "Cuba",
        capital: "Havana",
        population: "11.3 million",
        info: "Caribbean island nation known for cigars, rum, and socialist government",
        color: "#F7F4F9"
    },
    Haiti: {
        name: "Haiti",
        capital: "Port-au-Prince",
        population: "11.4 million",
        info: "Caribbean nation, first black republic, recovering from natural disasters",
        color: "#E7D4E8"
    },
    "Dominican Republic": {
        name: "Dominican Republic",
        capital: "Santo Domingo",
        population: "11 million",
        info: "Caribbean nation sharing Hispaniola island with Haiti",
        color: "#C2A5CF"
    },
    Jamaica: {
        name: "Jamaica",
        capital: "Kingston",
        population: "2.9 million",
        info: "Caribbean island nation famous for reggae music and Blue Mountain coffee",
        color: "#9970AB"
    },
    "Puerto Rico": {
        name: "Puerto Rico",
        capital: "San Juan",
        population: "3.2 million",
        info: "US territory in the Caribbean with rich Hispanic culture",
        color: "#762A83"
    },
    Bahamas: {
        name: "Bahamas",
        capital: "Nassau",
        population: "390,000",
        info: "Caribbean archipelago nation known for tourism and offshore banking",
        color: "#40004B"
    },
    Belize: {
        name: "Belize",
        capital: "Belmopan",
        population: "400,000",
        info: "Small Central American nation with English as official language",
        color: "#313695"
    },
    Guatemala: {
        name: "Guatemala",
        capital: "Guatemala City",
        population: "17 million",
        info: "Central American nation with significant Maya heritage and coffee production",
        color: "#E0F3F8"
    },
    "El Salvador": {
        name: "El Salvador",
        capital: "San Salvador",
        population: "6.5 million",
        info: "Smallest Central American country with significant emigration to US",
        color: "#ABD9E9"
    },
    Honduras: {
        name: "Honduras",
        capital: "Tegucigalpa",
        population: "10 million",
        info: "Central American nation known for Maya ruins and banana production",
        color: "#74ADD1"
    },
    Nicaragua: {
        name: "Nicaragua",
        capital: "Managua",
        population: "6.6 million",
        info: "Central American nation with Pacific and Caribbean coastlines",
        color: "#4575B4"
    },
    "Costa Rica": {
        name: "Costa Rica",
        capital: "San José",
        population: "5.1 million",
        info: "Central American nation known for biodiversity and eco-tourism",
        color: "#D73027"
    },
    Panama: {
        name: "Panama",
        capital: "Panama City",
        population: "4.3 million",
        info: "Central American nation famous for the Panama Canal connecting oceans",
        color: "#313695"
    },
    "Falkland Islands": {
        name: "Falkland Islands",
        capital: "Stanley",
        population: "3,500",
        info: "British overseas territory in South Atlantic, disputed with Argentina",
        color: "#E0F3F8"
    },
    "Sri Lanka": {
        name: "Sri Lanka",
        capital: "Colombo",
        population: "22 million",
        info: "Island nation off India known for tea, Buddhism, and ancient ruins",
        color: "#ABD9E9"
    },
    Maldives: {
        name: "Maldives",
        capital: "Malé",
        population: "540,000",
        info: "Low-lying Indian Ocean archipelago famous for luxury resorts",
        color: "#74ADD1"
    },
    Mongolia: {
        name: "Mongolia",
        capital: "Ulaanbaatar",
        population: "3.3 million",
        info: "Landlocked nation between China and Russia with nomadic heritage",
        color: "#4575B4"
    },
    China: {
        name: "China",
        capital: "Beijing",
        population: "1.44 billion",
        info: "World's most populous country and second-largest economy with ancient civilization",
        color: "#D73027"
    },
    "North Korea": {
        name: "North Korea",
        capital: "Pyongyang",
        population: "26 million",
        info: "Secretive communist state on Korean Peninsula with nuclear program",
        color: "#313695"
    },
    "South Korea": {
        name: "South Korea",
        capital: "Seoul",
        population: "52 million",
        info: "Developed East Asian nation known for technology and K-pop culture",
        color: "#E0F3F8"
    },
    Japan: {
        name: "Japan",
        capital: "Tokyo",
        population: "125 million",
        info: "Island nation known for technology, culture, and economic development",
        color: "#ABD9E9"
    },
    Taiwan: {
        name: "Taiwan",
        capital: "Taipei",
        population: "23 million",
        info: "Island democracy with disputed sovereignty, major technology producer",
        color: "#74ADD1"
    },
    "East Timor": {
        name: "East Timor",
        capital: "Dili",
        population: "1.3 million",
        info: "Young Southeast Asian nation that gained independence from Indonesia in 2002",
        color: "#4575B4"
    },
    Antarctica: {
        name: "Antarctica",
        capital: "No permanent capital",
        population: "1,000-5,000 (seasonal)",
        info: "Frozen continent dedicated to peaceful scientific research under Antarctic Treaty",
        color: "#FFFFFF"
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = countryData;
}