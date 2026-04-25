// ===== TRANSLATIONS =====
const i18n = {
  en: {
    langLabel:"EN",langFlag:"🇺🇸",
    loading:"Getting your weather…",locating:"Detecting location…",
    feelsLike:"Feels like",humidity:"Humidity",wind:"Wind",uv:"UV Index",
    hourly:"Hourly",weekly:"7-Day Forecast",
    sunrise:"Sunrise",sunset:"Sunset",
    outfitTitle:"What to Wear",outfitSub:"Based on today's weather",
    walkTitle:"Best Time to Walk",walkSub:"Today's recommendation",
    walkAlerts:"Enable Walk Alerts",walkAlertsOff:"Disable Walk Alerts",
    signOut:"Sign Out",
    days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
    months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    today:"Today",now:"Now",
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
    notifTitle:"Time for a Walk! 🚶",notifBody:"Conditions look great right now. Step outside and enjoy the weather.",
    searching:"Searching…",noResults:"No results found",searchFailed:"Search failed. Check your connection.",
  },
  am: {
    langLabel:"አማ",langFlag:"🇪🇹",
    loading:"የአየር ሁኔታዎን በማምጣት ላይ…",locating:"አካባቢ በማወቅ ላይ…",
    feelsLike:"የሚሰማው",humidity:"እርጥበት",wind:"ንፋስ",uv:"UV ጠቋሚ",
    hourly:"በሰዓት",weekly:"7 ቀን ትንበያ",
    sunrise:"ፀሐይ መውጣት",sunset:"ፀሐይ መጥለቅ",
    outfitTitle:"ምን ይልበሱ",outfitSub:"የዛሬ የአየር ሁኔታ ላይ ተመስርቶ",
    walkTitle:"ለእግር ጉዞ ምርጥ ጊዜ",walkSub:"የዛሬ ምክር",
    walkAlerts:"የእግር ጉዞ ማሳወቂያ አንቃ",walkAlertsOff:"ማሳወቂያ አጥፋ",
    signOut:"ውጣ",
    days:["እሁድ","ሰኞ","ማክሰኞ","ረቡዕ","ሐሙስ","አርብ","ቅዳሜ"],
    months:["ጃን","ፌብ","ማር","ኤፕ","ሜይ","ጁን","ጁላ","ኦገ","ሴፕ","ኦክ","ኖቭ","ዲሴ"],
    today:"ዛሬ",now:"አሁን",
    walkGood:"አሁን ለእግር ጉዞ ሁኔታዎች ጥሩ ናቸው።",walkOk:"ለአጭር እግር ጉዞ ተስማሚ ሁኔታዎች።",walkBad:"ዛሬ ለእግር ጉዞ ተስማሚ አይደለም።",
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
    notifTitle:"ለእግር ጉዞ ጊዜ ነው! 🚶",notifBody:"ሁኔታዎች አሁን ጥሩ ናቸው። ውጣ ተዝናና።",
    searching:"በመፈለግ ላይ…",noResults:"ምንም ውጤት አልተገኘም",searchFailed:"ፍለጋ አልተሳካም። ግንኙነትዎን ያረጋግጡ።",
  },
  om: {
    langLabel:"OMO",langFlag:"🇪🇹",
    loading:"Haala qilleensaa argachaa jira…",locating:"Bakka kee adda baasaa jira…",
    feelsLike:"Akka dhagahamu",humidity:"Jiidha",wind:"Qilleensa",uv:"Sadarkaa UV",
    hourly:"Sa'aatii",weekly:"Tilmaama Guyyaa 7",
    sunrise:"Bariituu",sunset:"Dhiibaa",
    outfitTitle:"Maal Uffadhu",outfitSub:"Haala qilleensaa har'aa irratti hundaa'uun",
    walkTitle:"Yeroo Gaarii Deemuu",walkSub:"Gorsa har'aa",
    walkAlerts:"Beeksisa Deemuu Dandeessisi",walkAlertsOff:"Beeksisa Dhabi",
    signOut:"Ba'i",
    days:["Dilb","Wiix","Qib","Roob","Kam","Jim","San"],
    months:["Amaj","Gur","Bit","Elb","Caam","Wax","Adol","Hag","Ful","Onk","Sad","Mud"],
    today:"Har'a",now:"Amma",
    walkGood:"Haalli amma deemuu gaariidha.",walkOk:"Haalli gabaabaa deemuu ni ta'a.",walkBad:"Har'a deemuu hin mijaa'u.",
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
    notifTitle:"Yeroo Deemuu! 🚶",notifBody:"Haalli amma gaariidha. Ba'ii qilleensa gammachu.",
    searching:"Barbaadaa jira…",noResults:"Bu'aa hin argamne",searchFailed:"Barbaaduu hin milkoofne. Walquunnamtii kee mirkaneeffadhu.",
  },
  so: {
    langLabel:"SOM",langFlag:"🇸🇴",
    loading:"Cimiligaaga la keenayaa…",locating:"Goobta la ogaanayaa…",
    feelsLike:"Sida u dareemaysa",humidity:"Qoyaan",wind:"Dabayl",uv:"Heerka UV",
    hourly:"Saacadlaha",weekly:"Saadaasha 7-Maalmood",
    sunrise:"Baxaanka qorraxda",sunset:"Dhacaanka qorraxda",
    outfitTitle:"Maxaad Xidhataa",outfitSub:"Ku saleysan cimiliga maanta",
    walkTitle:"Waqtiga Ugu Fiican ee Socodka",walkSub:"Talooyinka maanta",
    walkAlerts:"Ogeysiiska Socodka Fur",walkAlertsOff:"Ogeysiiska Xir",
    signOut:"Ka Bax",
    days:["Axd","Isn","Tal","Arb","Kha","Jim","Sab"],
    months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    today:"Maanta",now:"Hadda",
    walkGood:"Xaaladaha hadda waa fiican yihiin socodka. Bax oo raaxayso.",walkOk:"Xaaladaha waa ku filan yihiin socodka gaaban.",walkBad:"Maanta ma habboon socodka. Gudaha joog.",
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
    notifTitle:"Waqtiga Socodka! 🚶",notifBody:"Xaaladaha hadda waa fiican yihiin. Bax oo hawada raaxayso.",
    searching:"Raadinta…",noResults:"Natiijo lama helin",searchFailed:"Raadinta waa fashilantay. Xiriirkaaga hubi.",
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
  document.documentElement.setAttribute("data-theme", localStorage.getItem("skye-theme") || "dark");
  applyLang(currentLang);
  document.getElementById("userNameDisplay").textContent = session.name || "Guest";
  document.getElementById("userEmailDisplay").textContent = session.email || "";
  document.getElementById("userAvatar").textContent = (session.name || "G")[0].toUpperCase();
  updateWalkBtn();
  startClock();
  getLocation();
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("/sw.js").catch(() => {});
})();

// ===== THEME =====
document.getElementById("themeToggle").addEventListener("click", () => {
  const t = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", t);
  localStorage.setItem("skye-theme", t);
});

// ===== LANGUAGE =====
function applyLang(lang) {
  const t = i18n[lang]; if (!t) return;
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
document.getElementById("langBtn").addEventListener("click", e => { e.stopPropagation(); langSelector.classList.toggle("open"); });
document.addEventListener("click", () => {
  langSelector.classList.remove("open");
  document.getElementById("userMenu").classList.remove("open");
});
document.querySelectorAll(".lang-option").forEach(btn => {
  btn.addEventListener("click", () => { applyLang(btn.dataset.lang); langSelector.classList.remove("open"); });
});

// ===== USER MENU =====
document.getElementById("userBtn").addEventListener("click", e => { e.stopPropagation(); document.getElementById("userMenu").classList.toggle("open"); });
document.getElementById("logoutBtn").addEventListener("click", () => { localStorage.removeItem("skye-session"); window.location.href = "index.html"; });

// ===== WALK ALERTS =====
function updateWalkBtn() {
  document.getElementById("walkToggleText").textContent = walkAlertsEnabled ? i18n[currentLang].walkAlertsOff : i18n[currentLang].walkAlerts;
}
document.getElementById("walkToggleBtn").addEventListener("click", async () => {
  if (!walkAlertsEnabled) {
    const perm = await Notification.requestPermission().catch(() => "denied");
    if (perm !== "granted") { alert("Please allow notifications to enable walk alerts."); return; }
    walkAlertsEnabled = true; localStorage.setItem("skye-walk-alerts", "true");
    if (weatherData) scheduleWalkCheck();
  } else { walkAlertsEnabled = false; localStorage.setItem("skye-walk-alerts", "false"); }
  updateWalkBtn(); document.getElementById("userMenu").classList.remove("open");
});
document.getElementById("notifBtn").addEventListener("click", e => {
  e.stopPropagation();
  document.getElementById("notifDot").classList.remove("show");
  document.getElementById("notifPanel").classList.toggle("open");
  document.getElementById("userMenu").classList.remove("open");
});
document.getElementById("notifClear").addEventListener("click", () => {
  document.getElementById("notifList").innerHTML = '<div class="notif-empty">No notifications yet. Enable walk alerts to get notified!</div>';
  document.getElementById("notifDot").classList.remove("show");
});
document.addEventListener("click", e => {
  if (!e.target.closest("#notifBtn") && !e.target.closest("#notifPanel")) {
    document.getElementById("notifPanel").classList.remove("open");
  }
});

// ===== CLOCK =====
function startClock() {
  function tick() {
    const t = i18n[currentLang]; const now = new Date();
    const h = now.getHours(), m = now.getMinutes();
    document.getElementById("localTime").textContent = `${h % 12 || 12}:${String(m).padStart(2,"0")} ${h >= 12 ? "PM" : "AM"}`;
    document.getElementById("localDate").textContent = `${t.days[now.getDay()]}, ${t.months[now.getMonth()]} ${now.getDate()} ${now.getFullYear()}`;
  }
  tick(); setInterval(tick, 1000);
}

// ===== UNIT TOGGLE =====
document.getElementById("btnC").addEventListener("click", () => setUnit("C"));
document.getElementById("btnF").addEventListener("click", () => setUnit("F"));
function setUnit(u) {
  unit = u; localStorage.setItem("skye-unit", u);
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
  } else fetchWeather(9.0054, 38.7636);
}
document.getElementById("refreshBtn").addEventListener("click", getLocation);

// ===== WEATHER FETCH =====
async function fetchWeather(lat, lon) {
  try {
    const params = ["current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,uv_index","hourly=temperature_2m,weather_code","daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max","timezone=auto","forecast_days=7"].join("&");
    const [wRes, gRes] = await Promise.all([
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&${params}`),
      fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`)
    ]);
    const weather = await wRes.json(); const geo = await gRes.json();
    const city = geo.address?.city || geo.address?.town || geo.address?.village || geo.address?.county || "Your Location";
    const cc = geo.address?.country_code?.toUpperCase() || "";
    document.getElementById("locationName").textContent = `${city}${cc ? ", " + cc : ""}`;
    weatherData = weather; renderAll(weather); setWeatherBg(weather.current.weather_code); scheduleWalkCheck();
  } catch (_) { document.getElementById("locationName").textContent = "Could not load weather"; }
  finally { document.getElementById("loadingScreen").classList.add("hidden"); document.getElementById("refreshBtn").classList.remove("spinning"); }
}

// ===== WEATHER HELPERS =====
function wIcon(c) {
  if (c===0) return "☀️"; if (c<=2) return "⛅"; if (c===3) return "☁️";
  if (c<=49) return "🌫️"; if (c<=59) return "🌦️"; if (c<=69) return "🌧️";
  if (c<=79) return "❄️"; if (c<=84) return "🌨️"; if (c<=94) return "⛈️"; return "🌩️";
}
function wDesc(c) {
  if (c===0) return "Clear sky"; if (c<=2) return "Partly cloudy"; if (c===3) return "Overcast";
  if (c<=49) return "Foggy"; if (c<=59) return "Drizzle"; if (c<=69) return "Rain";
  if (c<=79) return "Snow"; if (c<=84) return "Snow showers"; if (c<=94) return "Thunderstorm"; return "Heavy thunderstorm";
}
function isRainy(c) { return c>=50&&c<=69; }
function isSnowy(c) { return c>=70&&c<=79; }
function isStormy(c) { return c>=80; }

const bgMap = {
  clear:"https://images.unsplash.com/photo-1504608524841-42584120d693?w=1920&q=80",
  cloudy:"https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1920&q=80",
  rainy:"https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=1920&q=80",
  stormy:"https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80",
  snowy:"https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?w=1920&q=80",
  foggy:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80",
};
function setWeatherBg(code) {
  let k="clear";
  if (isStormy(code)) k="stormy"; else if (isSnowy(code)) k="snowy"; else if (isRainy(code)) k="rainy";
  else if (code===3) k="cloudy"; else if (code>=40&&code<=49) k="foggy";
  document.getElementById("weatherBg").style.backgroundImage = `url('${bgMap[k]}')`;
}

function outfitKey(tempC, code) {
  if (isStormy(code)) return "stormy"; if (isSnowy(code)) return "snowy"; if (isRainy(code)) return "rainy";
  if (tempC>=30) return "hot"; if (tempC>=22) return "warm"; if (tempC>=15) return "mild"; if (tempC>=8) return "cool"; return "cold";
}
function walkScore(tempC, code, wind, uv) {
  let s=100;
  if (tempC<5||tempC>38) s-=40; else if (tempC<10||tempC>33) s-=20;
  if (isStormy(code)) s-=50; else if (isRainy(code)) s-=30; else if (isSnowy(code)) s-=25;
  if (wind>40) s-=20; else if (wind>25) s-=10;
  if (uv>8) s-=15;
  return Math.max(0,Math.min(100,s));
}

// ===== RENDER =====
function renderAll(w) {
  const t = i18n[currentLang]; const cur = w.current; const daily = w.daily; const hourly = w.hourly;
  const tempC=cur.temperature_2m, feelsC=cur.apparent_temperature, code=cur.weather_code;
  const wind=cur.wind_speed_10m, uv=cur.uv_index, hum=cur.relative_humidity_2m;
  document.getElementById("weatherIconBig").textContent = wIcon(code);
  document.getElementById("tempValue").textContent = displayTemp(tempC)+tempUnit();
  document.getElementById("weatherDesc").textContent = wDesc(code);
  document.getElementById("feelsLike").textContent = displayTemp(feelsC)+tempUnit();
  document.getElementById("humidity").textContent = hum+"%";
  document.getElementById("windSpeed").textContent = wind+" km/h";
  document.getElementById("uvIndex").textContent = uv;
  const ok=outfitKey(tempC,code); const outfit=t.outfits[ok];
  document.getElementById("outfitEmoji").textContent = outfit.emoji;
  document.getElementById("outfitText").textContent = outfit.text;
  document.getElementById("outfitTags").innerHTML = outfit.tags.map(tag=>`<span class="outfit-tag">${tag}</span>`).join("");
  const score=walkScore(tempC,code,wind,uv); const scoreEl=document.getElementById("walkScore");
  scoreEl.textContent = score+"%";
  scoreEl.style.color = score>=70?"var(--safe)":score>=40?"#fbbf24":"var(--danger)";
  document.getElementById("walkText").textContent = score>=70?t.walkGood:score>=40?t.walkOk:t.walkBad;
  const hourlyEl=document.getElementById("hourlyScroll"); hourlyEl.innerHTML="";
  const nowIdx=new Date().getHours();
  hourly.time.slice(0,24).forEach((ts,i)=>{
    const h=new Date(ts).getHours(); const isNow=i===nowIdx;
    const label=isNow?t.now:`${h%12||12}${h>=12?"pm":"am"}`;
    const item=document.createElement("div"); item.className="hourly-item"+(isNow?" now":"");
    item.innerHTML=`<span class="hourly-time">${label}</span><span class="hourly-icon">${wIcon(hourly.weather_code[i])}</span><span class="hourly-temp">${displayTemp(hourly.temperature_2m[i])}°</span>`;
    hourlyEl.appendChild(item);
  });
  const weeklyEl=document.getElementById("weeklyList"); weeklyEl.innerHTML="";
  daily.time.forEach((ds,i)=>{
    const d=new Date(ds); const dayName=i===0?t.today:t.days[d.getDay()];
    const item=document.createElement("div"); item.className="weekly-item";
    item.innerHTML=`<span class="weekly-day">${dayName}</span><span class="weekly-icon">${wIcon(daily.weather_code[i])}</span><span class="weekly-desc">${wDesc(daily.weather_code[i])}</span><span class="weekly-temps">${displayTemp(daily.temperature_2m_max[i])}°<span class="low"> / ${displayTemp(daily.temperature_2m_min[i])}°</span></span>`;
    weeklyEl.appendChild(item);
  });
  const fmt=d=>{const dt=new Date(d);const h=dt.getHours();return `${h%12||12}:${String(dt.getMinutes()).padStart(2,"0")} ${h>=12?"PM":"AM"}`;};
  document.getElementById("sunriseTime").textContent = fmt(daily.sunrise[0]);
  document.getElementById("sunsetTime").textContent = fmt(daily.sunset[0]);
  const rise=new Date(daily.sunrise[0]),set=new Date(daily.sunset[0]),now=new Date();
  document.getElementById("sunProgress").style.width = Math.max(0,Math.min(100,((now-rise)/(set-rise))*100))+"%";
}

// ===== WALK NOTIFICATION =====
function scheduleWalkCheck() {
  if (!walkAlertsEnabled||!weatherData) return;
  const cur=weatherData.current;
  if (walkScore(cur.temperature_2m,cur.weather_code,cur.wind_speed_10m,cur.uv_index)>=70) showWalkNotif();
  setTimeout(scheduleWalkCheck,2*60*60*1000);
}
function showWalkNotif() {
  const t=i18n[currentLang]; document.getElementById("notifDot").classList.add("show");
  const list = document.getElementById("notifList");
  const empty = list.querySelector(".notif-empty");
  if (empty) empty.remove();
  const item = document.createElement("div"); item.className = "notif-item";
  const now = new Date(); const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2,"0")}`;
  item.innerHTML = `<span class="notif-item-icon">🚶</span><div><div class="notif-item-text">${t.notifTitle} ${t.notifBody}</div><div class="notif-item-time">${time}</div></div>`;
  list.prepend(item);
  if ("Notification" in window&&Notification.permission==="granted")
    new Notification(t.notifTitle,{body:t.notifBody,icon:"/icons/icon.svg",tag:"walk-suggestion"});
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
citySearchInput.addEventListener("keydown", e => { if (e.key==="Escape") clearCitySearch(); });
searchClearBtn.addEventListener("click", clearCitySearch);
document.addEventListener("click", e => { if (!e.target.closest(".location-section")) clearCitySearch(); });

function clearCitySearch() {
  citySearchInput.value = ""; searchResultsEl.innerHTML = ""; searchClearBtn.style.display = "none";
}

async function searchCity(query) {
  const t = i18n[currentLang];
  searchResultsEl.innerHTML = `<div class="search-loading">${t.searching}</div>`;
  try {
    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=10&language=en&format=json`);
    if (!res.ok) throw new Error();
    const data = await res.json();
    if (!data.results?.length) { searchResultsEl.innerHTML = `<div class="search-loading">${t.noResults}</div>`; return; }
    searchResultsEl.innerHTML = "";
    const seen = new Set();
    data.results.forEach(place => {
      const key = `${place.latitude.toFixed(2)},${place.longitude.toFixed(2)}`;
      if (seen.has(key)) return; seen.add(key);
      const btn = document.createElement("button"); btn.className = "search-result-item";
      const label = place.name + (place.admin1 ? `, ${place.admin1}` : "");
      const parts = [place.name, place.admin1, place.country].filter(Boolean);
      btn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><span class="result-label">${label}</span><span class="search-result-country">${place.country_code?.toUpperCase()||""}</span>`;
      btn.addEventListener("click", () => {
        document.getElementById("locationName").textContent = parts.join(", ");
        clearCitySearch(); document.getElementById("loadingScreen").classList.remove("hidden");
        fetchWeather(place.latitude, place.longitude);
      });
      searchResultsEl.appendChild(btn);
    });
  } catch (_) { searchResultsEl.innerHTML = `<div class="search-loading">${t.searchFailed}</div>`; }
}

// ===== COUNTRY EXPLORER =====
const exploreInput = document.getElementById("exploreInput");
const exploreResults = document.getElementById("exploreResults");
const exploreClear = document.getElementById("exploreClear");
const cmodalBackdrop = document.getElementById("cmodalBackdrop");
const cmodalClose = document.getElementById("cmodalClose");
const cmodalInner = document.getElementById("cmodalInner");
let exploreDebounce = null;

exploreInput.addEventListener("input", () => {
  const q = exploreInput.value.trim();
  exploreClear.style.display = q ? "flex" : "none";
  clearTimeout(exploreDebounce);
  if (q.length < 2) { exploreResults.innerHTML = ""; return; }
  exploreDebounce = setTimeout(() => searchCountry(q), 350);
});
exploreClear.addEventListener("click", () => { exploreInput.value=""; exploreResults.innerHTML=""; exploreClear.style.display="none"; });
document.addEventListener("click", e => { if (!e.target.closest(".explore-section")) exploreResults.innerHTML=""; });
cmodalClose.addEventListener("click", closeCountryModal);
cmodalBackdrop.addEventListener("click", e => { if (e.target===cmodalBackdrop) closeCountryModal(); });

function closeCountryModal() { cmodalBackdrop.classList.remove("open"); document.body.style.overflow=""; }

async function searchCountry(query) {
  exploreResults.innerHTML = `<div class="explore-loading">Searching countries…</div>`;
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(query)}?fields=name,flags,capital,region,subregion,population,area,languages,currencies,cca2,latlng`);
    if (!res.ok) throw new Error();
    const data = await res.json();
    exploreResults.innerHTML = "";
    data.slice(0,8).forEach(c => {
      const btn = document.createElement("button"); btn.className = "explore-result-item";
      const flag = c.flags?.emoji || "🏳";
      const capital = c.capital?.[0] || "—";
      btn.innerHTML = `<span class="explore-flag">${flag}</span><span class="explore-name">${c.name.common}</span><span class="explore-capital">${capital}</span>`;
      btn.addEventListener("click", () => {
        exploreResults.innerHTML=""; exploreInput.value=""; exploreClear.style.display="none";
        openCountryModal(c);
      });
      exploreResults.appendChild(btn);
    });
  } catch (_) { exploreResults.innerHTML = `<div class="explore-loading">No countries found. Try another name.</div>`; }
}

async function openCountryModal(country) {
  cmodalBackdrop.classList.add("open"); document.body.style.overflow="hidden";
  cmodalInner.innerHTML = `<div class="c-loading"><div class="c-loading-icon">🌍</div><div class="c-loading-text">Loading ${country.name.common}…</div></div>`;

  const flag = country.flags?.emoji || "🏳";
  const capital = country.capital?.[0] || "Unknown";
  const lat = country.latlng?.[0] || 0, lon = country.latlng?.[1] || 0;
  const pop = fmtNum(country.population);
  const area = country.area ? fmtNum(Math.round(country.area))+" km²" : "—";
  const langs = country.languages ? Object.values(country.languages).slice(0,3).join(", ") : "—";
  const currencies = country.currencies ? Object.values(country.currencies).map(x=>x.name).slice(0,2).join(", ") : "—";

  const [cWeather, photos] = await Promise.all([fetchCountryWeather(lat,lon), getCountryPhotos(country.name.common)]);

  const heroImg = photos[0];
  const intro = buildIntro(country);

  let weatherHTML = `<div class="c-loading-text" style="padding:10px 0">Weather unavailable</div>`;
  if (cWeather) {
    const cur = cWeather.current; const daily = cWeather.daily;
    const tc = Math.round(cur.temperature_2m);
    const disp = unit==="C" ? tc : toF(tc);
    weatherHTML = `
      <div class="c-weather-main">
        <div class="c-weather-icon">${wIcon(cur.weather_code)}</div>
        <div><div class="c-weather-temp">${disp}${tempUnit()}</div><div class="c-weather-desc">${wDesc(cur.weather_code)}</div></div>
      </div>
      <div class="c-weather-chips">
        <div class="c-chip"><div class="c-chip-val">${cur.relative_humidity_2m}%</div><div class="c-chip-lbl">Humidity</div></div>
        <div class="c-chip"><div class="c-chip-val">${cur.wind_speed_10m} km/h</div><div class="c-chip-lbl">Wind</div></div>
        <div class="c-chip"><div class="c-chip-val">${cur.uv_index??'—'}</div><div class="c-chip-lbl">UV Index</div></div>
      </div>
      <div style="margin-top:14px">
        <div class="c-section-title">7-Day Forecast</div>
        <div class="c-forecast">
          ${daily.time.map((d,i)=>{
            const date=new Date(d);
            const dn=i===0?"Today":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][date.getDay()];
            const hi=unit==="C"?Math.round(daily.temperature_2m_max[i]):toF(daily.temperature_2m_max[i]);
            const lo=unit==="C"?Math.round(daily.temperature_2m_min[i]):toF(daily.temperature_2m_min[i]);
            return `<div class="c-forecast-row"><span class="c-forecast-day">${dn}</span><span class="c-forecast-icon">${wIcon(daily.weather_code[i])}</span><span class="c-forecast-desc">${wDesc(daily.weather_code[i])}</span><span class="c-forecast-temps">${hi}°<span class="lo"> / ${lo}°</span></span></div>`;
          }).join("")}
        </div>
      </div>`;
  }

  const photosHTML = photos.slice(0,6).map((url,i)=>`
    <div class="c-photo">
      <img src="${url}" alt="${country.name.common} ${i+1}" loading="lazy" onerror="this.parentElement.style.display='none'" />
      <div class="c-photo-cap">${country.name.common}</div>
    </div>`).join("");

  cmodalInner.innerHTML = `
    <div class="c-hero">
      <img src="${heroImg}" alt="${country.name.common}" onerror="this.src='https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80'" />
      <div class="c-hero-overlay"></div>
      <div class="c-hero-info">
        <div class="c-hero-flag">${flag}</div>
        <div class="c-hero-name">${country.name.common}</div>
        <div class="c-hero-region">${country.subregion||country.region||""}</div>
      </div>
    </div>
    <div class="c-body">
      <div class="c-intro">${intro}</div>
      <div class="c-stats">
        <div class="c-stat"><div class="c-stat-icon">🏙</div><div class="c-stat-val">${capital}</div><div class="c-stat-lbl">Capital</div></div>
        <div class="c-stat"><div class="c-stat-icon">👥</div><div class="c-stat-val">${pop}</div><div class="c-stat-lbl">Population</div></div>
        <div class="c-stat"><div class="c-stat-icon">📐</div><div class="c-stat-val">${area}</div><div class="c-stat-lbl">Area</div></div>
        <div class="c-stat"><div class="c-stat-icon">💰</div><div class="c-stat-val">${currencies}</div><div class="c-stat-lbl">Currency</div></div>
      </div>
      <div class="c-weather-box">
        <div class="c-section-title">☁ Current Weather in ${capital}</div>
        ${weatherHTML}
      </div>
      ${photosHTML ? `<div class="c-photos-title">📸 Photos of ${country.name.common}</div><div class="c-photos-grid">${photosHTML}</div>` : ""}
    </div>`;
}

async function fetchCountryWeather(lat, lon) {
  try {
    const params = ["current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,uv_index","daily=weather_code,temperature_2m_max,temperature_2m_min","timezone=auto","forecast_days=7"].join("&");
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&${params}`);
    return await res.json();
  } catch (_) { return null; }
}

function getCountryPhotos(name) {
  const queries = ["landmark","city","nature","culture","architecture","travel"];
  return queries.map((q,i) => `https://source.unsplash.com/featured/800x600/?${encodeURIComponent(name+","+q)}&sig=${Date.now()+i}`);
}

function buildIntro(c) {
  const name=c.name.common, region=c.region||"the world", sub=c.subregion?` in ${c.subregion}`:"";
  const capital=c.capital?.[0]||"an unknown city", pop=fmtNum(c.population);
  const langs=c.languages?Object.values(c.languages).slice(0,2).join(" and "):"local languages";
  const area=c.area?fmtNum(Math.round(c.area))+" km²":"a vast area";
  return `${name} is a captivating country located in ${region}${sub}, with its capital in ${capital}. Home to approximately ${pop} people, it is a vibrant place where ${langs} ${Object.values(c.languages||{}).length>1?"are":"is"} spoken. Spanning ${area}, ${name} offers a rich tapestry of culture, history, and breathtaking landscapes. From its iconic landmarks to its warm-hearted people, ${name} has something truly unique to offer every traveler and explorer.`;
}

function fmtNum(n) {
  if (!n) return "—";
  if (n>=1e9) return (n/1e9).toFixed(1)+"B";
  if (n>=1e6) return (n/1e6).toFixed(1)+"M";
  if (n>=1e3) return (n/1e3).toFixed(0)+"K";
  return String(n);
}

// ===== AI CHATBOT =====
const chatFab = document.getElementById("chatFab");
const chatPanel = document.getElementById("chatPanel");
const chatPanelClose = document.getElementById("chatPanelClose");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const chatSend = document.getElementById("chatSend");
const chatChips = document.getElementById("chatChips");

chatFab.addEventListener("click", () => {
  chatPanel.classList.toggle("open");
  if (chatPanel.classList.contains("open")) setTimeout(() => chatInput.focus(), 300);
});
chatPanelClose.addEventListener("click", () => chatPanel.classList.remove("open"));
chatSend.addEventListener("click", sendChat);
chatInput.addEventListener("keydown", e => { if (e.key==="Enter") sendChat(); });
document.querySelectorAll(".chat-chip").forEach(btn => {
  btn.addEventListener("click", () => { chatInput.value=btn.textContent; sendChat(); });
});

function sendChat() {
  const text = chatInput.value.trim(); if (!text) return;
  chatInput.value = ""; chatChips.style.display = "none";
  addMsg("user", text);
  const typing = addTyping();
  setTimeout(() => { typing.remove(); addMsg("bot", botReply(text.toLowerCase())); chatMessages.scrollTop=chatMessages.scrollHeight; }, 800+Math.random()*500);
}

function addMsg(role, text) {
  const div = document.createElement("div"); div.className=`chat-msg ${role}`;
  div.innerHTML = role==="bot"
    ? `<span class="chat-msg-avatar">🤖</span><div class="chat-bubble">${text}</div>`
    : `<div class="chat-bubble">${text}</div><span class="chat-msg-avatar">🙂</span>`;
  chatMessages.appendChild(div); chatMessages.scrollTop=chatMessages.scrollHeight; return div;
}

function addTyping() {
  const div = document.createElement("div"); div.className="chat-msg bot chat-typing";
  div.innerHTML=`<span class="chat-msg-avatar">🤖</span><div class="chat-bubble"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div>`;
  chatMessages.appendChild(div); chatMessages.scrollTop=chatMessages.scrollHeight; return div;
}

function botReply(q) {
  const cur = weatherData?.current;
  const tc = cur ? Math.round(cur.temperature_2m) : null;
  const disp = tc!==null ? (unit==="C"?tc:toF(tc))+tempUnit() : null;

  if ((q.includes("weather")||q.includes("outside")) && disp)
    return `Right now it's ${disp} and ${wDesc(cur.weather_code).toLowerCase()} where you are. Humidity ${cur.relative_humidity_2m}%, wind ${cur.wind_speed_10m} km/h. ${wIcon(cur.weather_code)}`;

  if (q.includes("temp") || q.includes("hot") || q.includes("cold") || q.includes("degree")) {
    if (disp) return `Current temperature is ${disp}. ${tc>28?"It's quite warm — stay hydrated! ☀️":tc<10?"Bundle up, it's chilly! 🧥":"Pretty comfortable today! 🌤"}`;
    return "Refresh your location to get the current temperature!";
  }
  if (q.includes("rain") || q.includes("umbrella")) {
    if (cur) return isRainy(cur.weather_code)?"Yes, it's rainy right now! Grab your umbrella ☔ and wear waterproof shoes.":"No rain right now. You're safe to go out without an umbrella! 🌤";
    return "Load your location first to check for rain!";
  }
  if (q.includes("uv") || q.includes("sunscreen") || q.includes("sun")) {
    if (cur) {
      const uv=cur.uv_index;
      return `UV Index is ${uv}. ${uv>=8?"Very high — wear SPF 50+ and avoid midday sun! 🕶":uv>=5?"Moderate — sunscreen is a good idea ☀️":"Low UV today, you're good! 😊"}`;
    }
    return "UV Index measures ultraviolet radiation strength. Above 6 = wear sunscreen. Above 8 = stay in the shade!";
  }
  if (q.includes("walk") || q.includes("stroll") || q.includes("go out")) {
    if (cur) {
      const score=walkScore(cur.temperature_2m,cur.weather_code,cur.wind_speed_10m,cur.uv_index);
      return `Walk score right now: ${score}%. ${score>=70?"Great conditions — go enjoy the outdoors! 🚶‍♂️":score>=40?"Decent for a short walk, bring a layer.":"Not ideal today. Maybe wait for better conditions! 🏠"}`;
    }
    return "Walk alerts notify you when conditions are perfect for a walk. Enable them from the user menu (top right)!";
  }
  if (q.includes("alert") || q.includes("notification")) {
    return "Walk alerts are push notifications for when the weather is perfect for a walk 🚶. Tap the user icon (top right) → 'Enable Walk Alerts'. Your browser will ask for permission.";
  }
  if (q.includes("country") || q.includes("explore") || q.includes("search country")) {
    return "Use the '🌍 Explore Any Country' search bar at the top of the dashboard! Type any country name — you'll get a full profile with weather, 7-day forecast, key facts, and beautiful photos! 🗺";
  }
  if (q.includes("city") || q.includes("search city") || q.includes("location")) {
    return "Use the 'Search city…' bar below the country explorer to get weather for any city in the world. Just type and pick from the results! 🏙";
  }
  if (q.includes("how") && q.includes("use")) {
    return "Quick guide to JOYE:\n🌍 Top bar — explore any country\n🏙 Second bar — search any city\n🌡 Toggle °C/°F on the weather card\n🚶 Walk score shows if it's good to go out\n🔔 Enable walk alerts from the user menu\n🌙 Toggle dark/light mode top right\n\nWhat else can I help with?";
  }
  if (q.includes("outfit") || q.includes("wear") || q.includes("clothes")) {
    if (cur) {
      const ok=outfitKey(cur.temperature_2m,cur.weather_code);
      const outfit=i18n[currentLang].outfits[ok];
      return `${outfit.emoji} ${outfit.text} Suggested: ${outfit.tags.join(", ")}.`;
    }
    return "The outfit card below the weather tells you exactly what to wear based on current conditions!";
  }
  if (q.includes("humidity")) {
    if (cur) return `Humidity is ${cur.relative_humidity_2m}%. ${cur.relative_humidity_2m>70?"Quite humid — might feel sticky 💧":cur.relative_humidity_2m<30?"Dry air today — stay hydrated! 🥤":"Comfortable humidity levels 😊"}`;
    return "Humidity measures water vapor in the air. High (>70%) feels sticky. Low (<30%) can dry out your skin.";
  }
  if (q.includes("wind")) {
    if (cur) return `Wind speed is ${cur.wind_speed_10m} km/h. ${cur.wind_speed_10m>40?"Very windy — hold onto your hat! 🌬":cur.wind_speed_10m>20?"A moderate breeze today.":"Calm winds — perfect for outdoors! 🌿"}`;
    return "Wind speed is shown on the main weather card. Above 40 km/h can make it feel colder.";
  }
  if (q.includes("forecast") || q.includes("tomorrow") || q.includes("week")) {
    return "Scroll down to see the hourly forecast (next 24 hours) and the 7-day forecast! 📅";
  }
  if (q.includes("language") || q.includes("translate")) {
    return "JOYE supports 4 languages: English 🇺🇸, Amharic 🇪🇹, Afaan Oromoo 🇪🇹, and Somali 🇸🇴. Tap the language button in the top right to switch!";
  }
  if (q.includes("theme") || q.includes("dark") || q.includes("light") || q.includes("mode")) {
    return "Toggle dark/light mode using the sun/moon switch in the top right. Your preference is saved! 🌙☀️";
  }
  if (q.includes("hello")||q.includes("hi")||q.includes("hey")||q.includes("hola")||q.includes("salam")) {
    return "Hey there! 👋 I'm Joye AI. Ask me about the weather, how to use the app, or explore any country in the world!";
  }
  if (q.includes("thank")) return "You're welcome! 😊 Let me know if there's anything else!";
  if (q.includes("sunrise")||q.includes("sunset")) return "Sunrise and sunset times are at the bottom of the dashboard with a progress bar showing where the sun is right now! 🌅";
  if (q.includes("install")||q.includes("pwa")||q.includes("app")) return "JOYE is a PWA — install it on your phone! On mobile tap 'Add to Home Screen' from your browser menu. On desktop look for the install icon in the address bar! 📱";

  const fallbacks = [
    "I'm best at weather, country exploration, and app guidance! Try asking 'What's the weather?', 'How do I search a country?', or 'What should I wear today?' ☁️",
    "Hmm, that's a bit outside my expertise! Ask me about weather conditions, forecasts, country info, or how to use any feature. 🌍",
    "Great question! I can help with current weather, UV index, walk score, outfit suggestions, country explorer, and more. What would you like to know? 😊",
  ];
  return fallbacks[Math.floor(Math.random()*fallbacks.length)];
}
