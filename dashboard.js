// ===== TRANSLATIONS =====
const i18n = {
  en: {
    langLabel:"EN", langFlag:"🇺🇸",
    loading:"Getting your weather…", locating:"Detecting location…",
    feelsLike:"Feels like", humidity:"Humidity", wind:"Wind", uv:"UV Index",
    hourly:"Hourly", weekly:"7-Day Forecast",
    sunrise:"Sunrise", sunset:"Sunset",
    outfitTitle:"What to Wear", outfitSub:"Based on today's weather",
    walkTitle:"Best Time to Walk", walkSub:"Today's recommendation",
    walkAlerts:"Enable Walk Alerts", walkAlertsOff:"Disable Walk Alerts",
    signOut:"Sign Out",
    days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
    months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    today:"Today", now:"Now",
    walkGood:"Conditions are great for a walk right now. UV is low and wind is calm.",
    walkOk:"Decent conditions for a short walk. Bring a light layer.",
    walkBad:"Not ideal for walking today. Stay comfortable indoors.",
    outfits:{
      hot:{emoji:"😎",text:"It's hot out there. Light and breathable clothing is your best bet.",tags:["T-shirt","Shorts","Sunglasses","Sunscreen","Cap"]},
      warm:{emoji:"🌤",text:"Warm and pleasant. A light outfit will keep you comfortable all day.",tags:["Light shirt","Chinos","Sneakers","Sunglasses"]},
      mild:{emoji:"🧥",text:"Mild temperatures — a light jacket or long sleeves will do the trick.",tags:["Light jacket","Jeans","Sneakers"]},
      cool:{emoji:"🧣",text:"It's cool outside. Layer up with a jacket and consider a scarf.",tags:["Jacket","Scarf","Jeans","Closed shoes"]},
      cold:{emoji:"🧤",text:"Cold weather today. Bundle up with a warm coat and layers.",tags:["Heavy coat","Sweater","Gloves","Warm boots","Scarf"]},
      rainy:{emoji:"☔",text:"Rain expected. Grab your umbrella and wear waterproof shoes.",tags:["Raincoat","Umbrella","Waterproof shoes","Dark colors"]},
      stormy:{emoji:"⛈",text:"Stormy conditions. Stay indoors if possible, or dress for heavy rain.",tags:["Heavy raincoat","Boots","Umbrella","Stay safe"]},
      snowy:{emoji:"❄️",text:"Snow on the ground. Dress warm and wear boots with good grip.",tags:["Heavy coat","Thermal layers","Snow boots","Gloves","Hat"]},
    },
    notifTitle:"Time for a Walk! 🚶",
    notifBody:"Conditions look great right now. Step outside and enjoy the weather.",
    searching:"Searching…", noResults:"No results found", searchFailed:"Search failed. Check your connection.",
  },
  am: {
    langLabel:"አማ", langFlag:"🇪🇹",
    loading:"የአየር ሁኔታዎን በማምጣት ላይ…", locating:"አካባቢ በማወቅ ላይ…",
    feelsLike:"የሚሰማው", humidity:"እርጥበት", wind:"ንፋስ", uv:"UV ጠቋሚ",
    hourly:"በሰዓት", weekly:"7 ቀን ትንበያ",
    sunrise:"ፀሐይ መውጣት", sunset:"ፀሐይ መጥለቅ",
    outfitTitle:"ምን ይልበሱ", outfitSub:"የዛሬ የአየር ሁኔታ ላይ ተመስርቶ",
    walkTitle:"ለእግር ጉዞ ምርጥ ጊዜ", walkSub:"የዛሬ ምክር",
    walkAlerts:"የእግር ጉዞ ማሳወቂያ አንቃ", walkAlertsOff:"ማሳወቂያ አጥፋ",
    signOut:"ውጣ",
    days:["እሁድ","ሰኞ","ማክሰኞ","ረቡዕ","ሐሙስ","አርብ","ቅዳሜ"],
    months:["ጃን","ፌብ","ማር","ኤፕ","ሜይ","ጁን","ጁላ","ኦገ","ሴፕ","ኦክ","ኖቭ","ዲሴ"],
    today:"ዛሬ", now:"አሁን",
    walkGood:"አሁን ለእግር ጉዞ ሁኔታዎች ጥሩ ናቸው።",
    walkOk:"ለአጭር እግር ጉዞ ተስማሚ ሁኔታዎች።",
    walkBad:"ዛሬ ለእግር ጉዞ ተስማሚ አይደለም።",
    outfits:{
      hot:{emoji:"😎",text:"ሙቀቱ ከፍ ያለ ነው። ቀላልና አየር የሚያስተላልፍ ልብስ ይልበሱ።",tags:["ቲሸርት","ሾርት","መነጽር","ፀሐይ መከላከያ"]},
      warm:{emoji:"🌤",text:"ሞቃትና ደስ የሚል ቀን። ቀላል ልብስ ይበቃዎታል።",tags:["ቀላል ሸሚዝ","ጂንስ","ስኒከር"]},
      mild:{emoji:"🧥",text:"መካከለኛ ሙቀት። ቀላል ጃኬት ወይም ረዥም እጅ ይሞክሩ።",tags:["ቀላል ጃኬት","ጂንስ","ጫማ"]},
      cool:{emoji:"🧣",text:"ቀዝቃዛ ነው። ጃኬትና ስካርፍ ይልበሱ።",tags:["ጃኬት","ስካርፍ","ጂንስ"]},
      cold:{emoji:"🧤",text:"ቀዝቃዛ ቀን። ሞቃት ካፖርት ይልበሱ።",tags:["ካፖርት","ሱዌተር","ጓንት","ሞቃት ጫማ"]},
      rainy:{emoji:"☔",text:"ዝናብ ይጠበቃል። ጃኬትና ጃንጥላ ይያዙ።",tags:["የዝናብ ካፖርት","ጃንጥላ","የውሃ መከላከያ ጫማ"]},
      stormy:{emoji:"⛈",text:"አውሎ ነፋስ። ቤት ውስጥ ቢቆዩ ይሻላል።",tags:["ካፖርት","ቦት","ጃንጥላ"]},
      snowy:{emoji:"❄️",text:"በረዶ አለ። ሞቅ ብለው ይልበሱ።",tags:["ካፖርት","ሙቀት ሰጪ ልብስ","ቦት","ጓንት"]},
    },
    notifTitle:"ለእግር ጉዞ ጊዜ ነው! 🚶",
    notifBody:"ሁኔታዎች አሁን ጥሩ ናቸው። ውጣ ተዝናና።",
    searching:"በመፈለግ ላይ…", noResults:"ምንም ውጤት አልተገኘም", searchFailed:"ፍለጋ አልተሳካም። ግንኙነትዎን ያረጋግጡ።",
  },
  om: {
    langLabel:"OMO", langFlag:"🇪🇹",
    loading:"Haala qilleensaa argachaa jira…", locating:"Bakka kee adda baasaa jira…",
    feelsLike:"Akka dhagahamu", humidity:"Jiidha", wind:"Qilleensa", uv:"Sadarkaa UV",
    hourly:"Sa'aatii", weekly:"Tilmaama Guyyaa 7",
    sunrise:"Bariituu", sunset:"Dhiibaa",
    outfitTitle:"Maal Uffadhu", outfitSub:"Haala qilleensaa har'aa irratti hundaa'uun",
    walkTitle:"Yeroo Gaarii Deemuu", walkSub:"Gorsa har'aa",
    walkAlerts:"Beeksisa Deemuu Dandeessisi", walkAlertsOff:"Beeksisa Dhabi",
    signOut:"Ba'i",
    days:["Dilb","Wiix","Qib","Roob","Kam","Jim","San"],
    months:["Amaj","Gur","Bit","Elb","Caam","Wax","Adol","Hag","Ful","Onk","Sad","Mud"],
    today:"Har'a", now:"Amma",
    walkGood:"Haalli amma deemuu gaariidha.",
    walkOk:"Haalli gabaabaa deemuu ni ta'a.",
    walkBad:"Har'a deemuu hin mijaa'u.",
    outfits:{
      hot:{emoji:"😎",text:"Ho'aa dha. Uffata salphaa fi qilleensa seensisu uffadhu.",tags:["T-shirt","Gaachana","Birbiqqoo","Sunscreen"]},
      warm:{emoji:"🌤",text:"Ho'aa fi gammachiisaa. Uffata salphaa ga'a.",tags:["Uffata salphaa","Jins","Kophee"]},
      mild:{emoji:"🧥",text:"Ho'i giddugaleessa. Jaakeetii salphaa yaalii.",tags:["Jaakeetii salphaa","Jins","Kophee"]},
      cool:{emoji:"🧣",text:"Qorraa dha. Jaakeetii fi iskaarfii uffadhu.",tags:["Jaakeetii","Iskaarfii","Jins"]},
      cold:{emoji:"🧤",text:"Qorra cimaa. Kootii ho'aa uffadhu.",tags:["Kootii","Sweeter","Harkaa","Kophee ho'aa"]},
      rainy:{emoji:"☔",text:"Rooba eegama. Jaakeetii fi umbrella fuudhu.",tags:["Jaakeetii roobaa","Umbrella","Kophee bishaanii"]},
      stormy:{emoji:"⛈",text:"Rooba cimaa. Mana turuu wayya.",tags:["Kootii","Boot","Umbrella"]},
      snowy:{emoji:"❄️",text:"Barafu jira. Ho'inaan uffadhu.",tags:["Kootii","Uffata ho'aa","Boot","Harkaa"]},
    },
    notifTitle:"Yeroo Deemuu! 🚶",
    notifBody:"Haalli amma gaariidha. Ba'ii qilleensa gammachu.",
    searching:"Barbaadaa jira…", noResults:"Bu'aa hin argamne", searchFailed:"Barbaaduu hin milkoofne. Walquunnamtii kee mirkaneeffadhu.",
  },
  so: {
    langLabel:"SOM", langFlag:"🇸🇴",
    loading:"Cimiligaaga la keenayaa…", locating:"Goobta la ogaanayaa…",
    feelsLike:"Sida u dareemaysa", humidity:"Qoyaan", wind:"Dabayl", uv:"Heerka UV",
    hourly:"Saacadlaha", weekly:"Saadaasha 7-Maalmood",
    sunrise:"Baxaanka qorraxda", sunset:"Dhacaanka qorraxda",
    outfitTitle:"Maxaad Xidhataa", outfitSub:"Ku saleysan cimiliga maanta",
    walkTitle:"Waqtiga Ugu Fiican ee Socodka", walkSub:"Talooyinka maanta",
    walkAlerts:"Ogeysiiska Socodka Fur", walkAlertsOff:"Ogeysiiska Xir",
    signOut:"Ka Bax",
    days:["Axd","Isn","Tal","Arb","Kha","Jim","Sab"],
    months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    today:"Maanta", now:"Hadda",
    walkGood:"Xaaladaha hadda waa fiican yihiin socodka. Bax oo raaxayso.",
    walkOk:"Xaaladaha waa ku filan yihiin socodka gaaban.",
    walkBad:"Maanta ma habboon socodka. Gudaha joog.",
    outfits:{
      hot:{emoji:"😎",text:"Kulaylku waa sareeya. Dharka fudud iyo hawada-mariya xidho.",tags:["T-shirt","Surwaal gaaban","Muraayadaha qorraxda","Sunscreen"]},
      warm:{emoji:"🌤",text:"Kulul oo faraxsan. Dharka fudud ayaa ku filan.",tags:["Shaati fudud","Jins","Kabo"]},
      mild:{emoji:"🧥",text:"Heer dhexdhexaad ah. Jaakad fudud isku day.",tags:["Jaakad fudud","Jins","Kabo"]},
      cool:{emoji:"🧣",text:"Qabow. Jaakad iyo iskaaraf xidho.",tags:["Jaakad","Iskaaraf","Jins"]},
      cold:{emoji:"🧤",text:"Qabow adag. Koodh kulul xidho.",tags:["Koodh","Sweater","Gacmo-gashi","Kabo kulul"]},
      rainy:{emoji:"☔",text:"Roob la filayaa. Jaakad roob iyo dallad qaado.",tags:["Jaakad roob","Dallad","Kabo biyo-diidan"]},
      stormy:{emoji:"⛈",text:"Duufaan. Gudaha joog haddii suurtogal.",tags:["Koodh","Boot","Dallad"]},
      snowy:{emoji:"❄️",text:"Baraf jira. Si kulul u xidho.",tags:["Koodh","Lakabyo kulul","Boot","Gacmo-gashi"]},
    },
    notifTitle:"Waqtiga Socodka! 🚶",
    notifBody:"Xaaladaha hadda waa fiican yihiin. Bax oo hawada raaxayso.",
    searching:"Raadinta…", noResults:"Natiijo lama helin", searchFailed:"Raadinta waa fashilantay. Xiriirkaaga hubi.",
  },
};


// ===== STATE =====
let currentLang = localStorage.getItem("skye-lang") || "en";
let unit = localStorage.getItem("skye-unit") || "C";
let weatherData = null;
let walkAlertsEnabled = localStorage.getItem("skye-walk-alerts") === "true";

// ===== INIT =====
(function init() {
  const session = JSON.parse(localStorage.getItem("skye-session") || "null");
  if (!session) { window.location.href = "index.html"; return; }

  const theme = localStorage.getItem("skye-theme") || "dark";
  document.documentElement.setAttribute("data-theme", theme);

  applyLang(currentLang);

  document.getElementById("userNameDisplay").textContent = session.name || "Guest";
  document.getElementById("userEmailDisplay").textContent = session.email || "";
  document.getElementById("userAvatar").textContent = (session.name || "G")[0].toUpperCase();

  updateWalkBtn();
  startClock();
  getLocation();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  }
})();

// ===== THEME =====
document.getElementById("themeToggle").addEventListener("click", () => {
  const html = document.documentElement;
  const t = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", t);
  localStorage.setItem("skye-theme", t);
});

// ===== LANGUAGE =====
function applyLang(lang) {
  const t = i18n[lang];
  if (!t) return;
  currentLang = lang;
  localStorage.setItem("skye-lang", lang);
  document.documentElement.setAttribute("lang", lang);
  document.getElementById("langFlag").textContent = t.langFlag;
  document.getElementById("langLabel").textContent = t.langLabel;
  document.getElementById("loadingText").textContent = t.loading;
  document.getElementById("locationName").textContent = t.locating;
  document.getElementById("feelsLikeLabel").textContent = t.feelsLike;
  document.getElementById("humidityLabel").textContent = t.humidity;
  document.getElementById("windLabel").textContent = t.wind;
  document.getElementById("uvLabel").textContent = t.uv;
  document.getElementById("hourlyTitle").textContent = t.hourly;
  document.getElementById("weeklyTitle").textContent = t.weekly;
  document.getElementById("sunriseLabel").textContent = t.sunrise;
  document.getElementById("sunsetLabel").textContent = t.sunset;
  document.getElementById("outfitTitle").textContent = t.outfitTitle;
  document.getElementById("outfitSubtitle").textContent = t.outfitSub;
  document.getElementById("walkTitle").textContent = t.walkTitle;
  document.getElementById("walkSubtitle").textContent = t.walkSub;
  document.getElementById("logoutText").textContent = t.signOut;
  document.querySelectorAll(".lang-option").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
  if (weatherData) renderAll(weatherData);
}

const langSelector = document.getElementById("langSelector");
document.getElementById("langBtn").addEventListener("click", e => {
  e.stopPropagation();
  langSelector.classList.toggle("open");
});
document.addEventListener("click", () => {
  langSelector.classList.remove("open");
  document.getElementById("userMenu").classList.remove("open");
});
document.querySelectorAll(".lang-option").forEach(btn => {
  btn.addEventListener("click", () => { applyLang(btn.dataset.lang); langSelector.classList.remove("open"); });
});

// ===== USER MENU =====
document.getElementById("userBtn").addEventListener("click", e => {
  e.stopPropagation();
  document.getElementById("userMenu").classList.toggle("open");
});
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("skye-session");
  window.location.href = "index.html";
});

// ===== WALK ALERTS =====
function updateWalkBtn() {
  const t = i18n[currentLang];
  document.getElementById("walkToggleText").textContent = walkAlertsEnabled ? t.walkAlertsOff : t.walkAlerts;
}

document.getElementById("walkToggleBtn").addEventListener("click", async () => {
  if (!walkAlertsEnabled) {
    const perm = await Notification.requestPermission().catch(() => "denied");
    if (perm !== "granted") { alert("Please allow notifications to enable walk alerts."); return; }
    walkAlertsEnabled = true;
    localStorage.setItem("skye-walk-alerts", "true");
    if (weatherData) scheduleWalkCheck();
  } else {
    walkAlertsEnabled = false;
    localStorage.setItem("skye-walk-alerts", "false");
  }
  updateWalkBtn();
  document.getElementById("userMenu").classList.remove("open");
});

document.getElementById("notifBtn").addEventListener("click", () => {
  document.getElementById("notifDot").classList.remove("show");
});

// ===== CLOCK =====
function startClock() {
  function tick() {
    const t = i18n[currentLang];
    const now = new Date();
    const h = now.getHours(), m = now.getMinutes();
    const ampm = h >= 12 ? "PM" : "AM";
    const h12 = h % 12 || 12;
    document.getElementById("localTime").textContent = `${h12}:${String(m).padStart(2,"0")} ${ampm}`;
    const day = t.days[now.getDay()];
    const mon = t.months[now.getMonth()];
    document.getElementById("localDate").textContent = `${day}, ${mon} ${now.getDate()} ${now.getFullYear()}`;
  }
  tick();
  setInterval(tick, 1000);
}

// ===== UNIT TOGGLE =====
document.getElementById("btnC").addEventListener("click", () => setUnit("C"));
document.getElementById("btnF").addEventListener("click", () => setUnit("F"));

function setUnit(u) {
  unit = u;
  localStorage.setItem("skye-unit", u);
  document.getElementById("btnC").classList.toggle("active", u === "C");
  document.getElementById("btnF").classList.toggle("active", u === "F");
  if (weatherData) renderAll(weatherData);
}

function toF(c) { return Math.round(c * 9 / 5 + 32); }
function displayTemp(c) { return unit === "C" ? Math.round(c) : toF(c); }
function tempUnit() { return unit === "C" ? "°C" : "°F"; }

// ===== LOCATION =====
function getLocation() {
  document.getElementById("refreshBtn").classList.add("spinning");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      pos => fetchWeather(pos.coords.latitude, pos.coords.longitude),
      () => fetchWeather(9.0054, 38.7636)
    );
  } else {
    fetchWeather(9.0054, 38.7636);
  }
}

document.getElementById("refreshBtn").addEventListener("click", getLocation);

// ===== WEATHER FETCH =====
async function fetchWeather(lat, lon) {
  try {
    const params = [
      "current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,uv_index",
      "hourly=temperature_2m,weather_code",
      "daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max",
      "timezone=auto",
      "forecast_days=7"
    ].join("&");

    const [weatherRes, geoRes] = await Promise.all([
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&${params}`),
      fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`)
    ]);

    const weather = await weatherRes.json();
    const geo = await geoRes.json();

    const city = geo.address?.city || geo.address?.town || geo.address?.village || geo.address?.county || "Your Location";
    const country = geo.address?.country_code?.toUpperCase() || "";
    document.getElementById("locationName").textContent = `${city}${country ? ", " + country : ""}`;

    weatherData = weather;
    renderAll(weather);
    setWeatherBg(weather.current.weather_code);
    scheduleWalkCheck();
  } catch (_) {
    document.getElementById("locationName").textContent = "Could not load weather";
  } finally {
    document.getElementById("loadingScreen").classList.add("hidden");
    document.getElementById("refreshBtn").classList.remove("spinning");
  }
}

// ===== WEATHER CODE HELPERS =====
function wIcon(code) {
  if (code === 0) return "☀️";
  if (code <= 2) return "⛅";
  if (code === 3) return "☁️";
  if (code <= 49) return "🌫️";
  if (code <= 59) return "🌦️";
  if (code <= 69) return "🌧️";
  if (code <= 79) return "❄️";
  if (code <= 84) return "🌨️";
  if (code <= 94) return "⛈️";
  return "🌩️";
}

function wDesc(code) {
  if (code === 0) return "Clear sky";
  if (code <= 2) return "Partly cloudy";
  if (code === 3) return "Overcast";
  if (code <= 49) return "Foggy";
  if (code <= 59) return "Drizzle";
  if (code <= 69) return "Rain";
  if (code <= 79) return "Snow";
  if (code <= 84) return "Snow showers";
  if (code <= 94) return "Thunderstorm";
  return "Heavy thunderstorm";
}

function isRainy(c) { return c >= 50 && c <= 69; }
function isSnowy(c) { return c >= 70 && c <= 79; }
function isStormy(c) { return c >= 80; }

// ===== BACKGROUND =====
const bgMap = {
  clear:  "https://images.unsplash.com/photo-1504608524841-42584120d693?w=1920&q=80",
  cloudy: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1920&q=80",
  rainy:  "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=1920&q=80",
  stormy: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80",
  snowy:  "https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?w=1920&q=80",
  foggy:  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80",
};

function setWeatherBg(code) {
  let key = "clear";
  if (isStormy(code)) key = "stormy";
  else if (isSnowy(code)) key = "snowy";
  else if (isRainy(code)) key = "rainy";
  else if (code === 3) key = "cloudy";
  else if (code >= 40 && code <= 49) key = "foggy";
  document.getElementById("weatherBg").style.backgroundImage = `url('${bgMap[key]}')`;
}

// ===== OUTFIT LOGIC =====
function outfitKey(tempC, code) {
  if (isStormy(code)) return "stormy";
  if (isSnowy(code)) return "snowy";
  if (isRainy(code)) return "rainy";
  if (tempC >= 30) return "hot";
  if (tempC >= 22) return "warm";
  if (tempC >= 15) return "mild";
  if (tempC >= 8) return "cool";
  return "cold";
}

// ===== WALK SCORE =====
function walkScore(tempC, code, wind, uv) {
  let s = 100;
  if (tempC < 5 || tempC > 38) s -= 40;
  else if (tempC < 10 || tempC > 33) s -= 20;
  if (isStormy(code)) s -= 50;
  else if (isRainy(code)) s -= 30;
  else if (isSnowy(code)) s -= 25;
  if (wind > 40) s -= 20;
  else if (wind > 25) s -= 10;
  if (uv > 8) s -= 15;
  return Math.max(0, Math.min(100, s));
}

// ===== RENDER =====
function renderAll(w) {
  const t = i18n[currentLang];
  const cur = w.current;
  const daily = w.daily;
  const hourly = w.hourly;
  const tempC = cur.temperature_2m;
  const feelsC = cur.apparent_temperature;
  const code = cur.weather_code;
  const wind = cur.wind_speed_10m;
  const uv = cur.uv_index;
  const hum = cur.relative_humidity_2m;

  // Main card
  document.getElementById("weatherIconBig").textContent = wIcon(code);
  document.getElementById("tempValue").textContent = displayTemp(tempC) + tempUnit();
  document.getElementById("weatherDesc").textContent = wDesc(code);
  document.getElementById("feelsLike").textContent = displayTemp(feelsC) + tempUnit();
  document.getElementById("humidity").textContent = hum + "%";
  document.getElementById("windSpeed").textContent = wind + " km/h";
  document.getElementById("uvIndex").textContent = uv;

  // Outfit
  const ok = outfitKey(tempC, code);
  const outfit = t.outfits[ok];
  document.getElementById("outfitEmoji").textContent = outfit.emoji;
  document.getElementById("outfitText").textContent = outfit.text;
  document.getElementById("outfitTags").innerHTML = outfit.tags.map(tag => `<span class="outfit-tag">${tag}</span>`).join("");

  // Walk
  const score = walkScore(tempC, code, wind, uv);
  const scoreEl = document.getElementById("walkScore");
  scoreEl.textContent = score + "%";
  scoreEl.style.color = score >= 70 ? "var(--safe)" : score >= 40 ? "#fbbf24" : "var(--danger)";
  document.getElementById("walkText").textContent = score >= 70 ? t.walkGood : score >= 40 ? t.walkOk : t.walkBad;

  // Hourly (24 slots)
  const hourlyEl = document.getElementById("hourlyScroll");
  hourlyEl.innerHTML = "";
  const nowIdx = new Date().getHours();
  hourly.time.slice(0, 24).forEach((timeStr, i) => {
    const h = new Date(timeStr).getHours();
    const isNow = i === nowIdx;
    const label = isNow ? t.now : `${h % 12 || 12}${h >= 12 ? "pm" : "am"}`;
    const item = document.createElement("div");
    item.className = "hourly-item" + (isNow ? " now" : "");
    item.innerHTML = `<span class="hourly-time">${label}</span><span class="hourly-icon">${wIcon(hourly.weather_code[i])}</span><span class="hourly-temp">${displayTemp(hourly.temperature_2m[i])}°</span>`;
    hourlyEl.appendChild(item);
  });

  // Weekly
  const weeklyEl = document.getElementById("weeklyList");
  weeklyEl.innerHTML = "";
  daily.time.forEach((dateStr, i) => {
    const d = new Date(dateStr);
    const dayName = i === 0 ? t.today : t.days[d.getDay()];
    const item = document.createElement("div");
    item.className = "weekly-item";
    item.innerHTML = `<span class="weekly-day">${dayName}</span><span class="weekly-icon">${wIcon(daily.weather_code[i])}</span><span class="weekly-desc">${wDesc(daily.weather_code[i])}</span><span class="weekly-temps">${displayTemp(daily.temperature_2m_max[i])}°<span class="low"> / ${displayTemp(daily.temperature_2m_min[i])}°</span></span>`;
    weeklyEl.appendChild(item);
  });

  // Sun times
  const fmt = d => { const dt = new Date(d); const h = dt.getHours(); return `${h % 12 || 12}:${String(dt.getMinutes()).padStart(2,"0")} ${h >= 12 ? "PM" : "AM"}`; };
  document.getElementById("sunriseTime").textContent = fmt(daily.sunrise[0]);
  document.getElementById("sunsetTime").textContent = fmt(daily.sunset[0]);
  const rise = new Date(daily.sunrise[0]);
  const set = new Date(daily.sunset[0]);
  const now = new Date();
  const pct = Math.max(0, Math.min(100, ((now - rise) / (set - rise)) * 100));
  document.getElementById("sunProgress").style.width = pct + "%";
}

// ===== WALK NOTIFICATION =====
function scheduleWalkCheck() {
  if (!walkAlertsEnabled || !weatherData) return;
  const cur = weatherData.current;
  const score = walkScore(cur.temperature_2m, cur.weather_code, cur.wind_speed_10m, cur.uv_index);
  if (score >= 70) showWalkNotif();
  setTimeout(scheduleWalkCheck, 2 * 60 * 60 * 1000);
}

function showWalkNotif() {
  const t = i18n[currentLang];
  document.getElementById("notifDot").classList.add("show");
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(t.notifTitle, { body: t.notifBody, icon: "/icons/icon.svg", tag: "walk-suggestion" });
  }
}

// ===== CITY SEARCH =====
const citySearchInput = document.getElementById("citySearch");
const searchResultsEl = document.getElementById("searchResults");
const searchClearBtn = document.getElementById("searchClear");
let searchDebounce = null;

citySearchInput.addEventListener("input", () => {
  const q = citySearchInput.value.trim();
  searchClearBtn.style.display = q ? "flex" : "none";
  clearTimeout(searchDebounce);
  if (q.length < 2) { searchResultsEl.innerHTML = ""; return; }
  searchDebounce = setTimeout(() => searchCity(q), 400);
});

citySearchInput.addEventListener("keydown", e => {
  if (e.key === "Escape") clearSearch();
});

searchClearBtn.addEventListener("click", clearSearch);

document.addEventListener("click", e => {
  if (!e.target.closest(".location-section")) clearSearch();
});

function clearSearch() {
  citySearchInput.value = "";
  searchResultsEl.innerHTML = "";
  searchClearBtn.style.display = "none";
}

async function searchCity(query) {
  const t = i18n[currentLang];
  searchResultsEl.innerHTML = `<div class="search-loading">${t.searching || "Searching…"}</div>`;

  // Try with current UI language first, then fall back to English
  // Open-Meteo geocoding supports: en, de, fr, es, pt, ru, tr, zh
  // For am/om/so we use English transliteration — the API matches on English names
  const langMap = { en: "en", am: "en", om: "en", so: "en" };
  const apiLang = langMap[currentLang] || "en";

  try {
    // Fetch with count=10 to get more results across countries
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=10&language=${apiLang}&format=json`;
    const res = await fetch(url);

    if (!res.ok) throw new Error("Network error");

    const data = await res.json();

    if (!data.results || data.results.length === 0) {
      searchResultsEl.innerHTML = `<div class="search-loading">${t.noResults || "No results found"}</div>`;
      return;
    }

    searchResultsEl.innerHTML = "";

    // Deduplicate by lat/lon to avoid showing same city twice
    const seen = new Set();
    data.results.forEach(place => {
      const key = `${place.latitude.toFixed(2)},${place.longitude.toFixed(2)}`;
      if (seen.has(key)) return;
      seen.add(key);

      const btn = document.createElement("button");
      btn.className = "search-result-item";

      // Build display label: City, Region, Country
      const parts = [place.name, place.admin1, place.country].filter(Boolean);
      const label = place.name + (place.admin1 ? `, ${place.admin1}` : "");
      const country = place.country || "";
      const countryCode = place.country_code ? place.country_code.toUpperCase() : "";

      btn.innerHTML = `
        <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <span class="result-label">${label}</span>
        <span class="search-result-country">${countryCode}</span>
      `;

      btn.addEventListener("click", () => {
        // Show full location name in the header
        const fullName = parts.join(", ");
        document.getElementById("locationName").textContent = fullName;
        clearSearch();
        document.getElementById("loadingScreen").classList.remove("hidden");
        fetchWeather(place.latitude, place.longitude);
      });

      searchResultsEl.appendChild(btn);
    });

  } catch (_) {
    searchResultsEl.innerHTML = `<div class="search-loading">${t.searchFailed || "Search failed. Check your connection."}</div>`;
  }
}
