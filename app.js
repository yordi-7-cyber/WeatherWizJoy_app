// ===== TRANSLATIONS =====
const i18n = {
  en: {
    tagline: "Your world. Your weather.",
    signIn: "Sign In", or: "or", guest: "Continue as Guest",
    note: 'By continuing, you agree to our <a href="#">Terms</a> &amp; <a href="#">Privacy</a>',
    langLabel: "EN", langFlag: "🇺🇸",
    tabLogin: "Sign In", tabRegister: "Register",
    lblEmail: "Email", lblPassword: "Password",
    lblName: "Full Name", lblRegEmail: "Email", lblRegPassword: "Password",
    loginSubmit: "Sign In", regSubmit: "Create Account",
    noAccount: "No account?", createOne: "Create one",
    haveAccount: "Have an account?", signInLink: "Sign in",
    errRequired: "This field is required",
    errEmail: "Enter a valid email",
    errPass: "Password must be at least 6 characters",
    errName: "Enter your name",
  },
  am: {
    tagline: "ዓለምዎ። የአየር ሁኔታዎ።",
    signIn: "ግባ", or: "ወይም", guest: "እንደ እንግዳ ቀጥል",
    note: 'በመቀጠልዎ፣ <a href="#">ውሎቻችንን</a> እና <a href="#">ግላዊነትን</a> ተቀብለዋል',
    langLabel: "አማ", langFlag: "🇪🇹",
    tabLogin: "ግባ", tabRegister: "ተመዝገብ",
    lblEmail: "ኢሜይል", lblPassword: "የይለፍ ቃል",
    lblName: "ሙሉ ስም", lblRegEmail: "ኢሜይል", lblRegPassword: "የይለፍ ቃል",
    loginSubmit: "ግባ", regSubmit: "መለያ ፍጠር",
    noAccount: "መለያ የለዎትም?", createOne: "ፍጠር",
    haveAccount: "መለያ አለዎት?", signInLink: "ግባ",
    errRequired: "ይህ መስክ ያስፈልጋል",
    errEmail: "ትክክለኛ ኢሜይል ያስገቡ",
    errPass: "የይለፍ ቃሉ ቢያንስ 6 ቁምፊዎች መሆን አለበት",
    errName: "ስምዎን ያስገቡ",
  },
  om: {
    tagline: "Addunyaa kee. Haala qilleensaa kee.",
    signIn: "Seeni", or: "ykn", guest: "Keessummaatti Itti Fufi",
    note: 'Itti fufuudhaan, <a href="#">Heeyyama</a> fi <a href="#">Iccitii</a> keenya fudhatte',
    langLabel: "OMO", langFlag: "🇪🇹",
    tabLogin: "Seeni", tabRegister: "Galmaa'i",
    lblEmail: "Imeelii", lblPassword: "Jecha Darbii",
    lblName: "Maqaa Guutuu", lblRegEmail: "Imeelii", lblRegPassword: "Jecha Darbii",
    loginSubmit: "Seeni", regSubmit: "Herrega Uumi",
    noAccount: "Herrega hin qabduu?", createOne: "Uumi",
    haveAccount: "Herrega qabdaa?", signInLink: "Seeni",
    errRequired: "Dirreen kun barbaachisaadha",
    errEmail: "Imeelii sirrii galchi",
    errPass: "Jecha darbii xiqqaatee qubee 6 ta'uu qaba",
    errName: "Maqaa kee galchi",
  },
  so: {
    tagline: "Addunyaadaada. Cimiligaaga.",
    signIn: "Gal", or: "ama", guest: "Sii Wad Martida",
    note: 'Sii wadida, waxaad aqbashay <a href="#">Shuruucda</a> iyo <a href="#">Asturnaanta</a>',
    langLabel: "SOM", langFlag: "🇸🇴",
    tabLogin: "Gal", tabRegister: "Diiwaan Geli",
    lblEmail: "Iimaylka", lblPassword: "Furaha Sirta",
    lblName: "Magaca Buuxa", lblRegEmail: "Iimaylka", lblRegPassword: "Furaha Sirta",
    loginSubmit: "Gal", regSubmit: "Abuur Xisaab",
    noAccount: "Xisaab ma lihid?", createOne: "Abuur",
    haveAccount: "Xisaab ma leedahay?", signInLink: "Gal",
    errRequired: "Goobtan waa loo baahan yahay",
    errEmail: "Geli iimaylka saxda ah",
    errPass: "Furaha sirta waa inuu ahaadaa ugu yaraan 6 xaraf",
    errName: "Geli magacaaga",
  },
};

// ===== STATE =====
let currentLang = "en";
let currentSlide = 0;
let slideTimer = null;

// ===== ELEMENTS =====
const html = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const langSelector = document.getElementById("langSelector");
const langBtn = document.getElementById("langBtn");
const langFlag = document.getElementById("langFlag");
const langLabel = document.getElementById("langLabel");
const slides = document.querySelectorAll(".bg-slide");
const slideDots = document.getElementById("slideDots");
const modalBackdrop = document.getElementById("modalBackdrop");

// ===== THEME =====
function setTheme(t) {
  html.setAttribute("data-theme", t);
  localStorage.setItem("skye-theme", t);
}
themeToggle.addEventListener("click", () => {
  setTheme(html.getAttribute("data-theme") === "dark" ? "light" : "dark");
});
const savedTheme = localStorage.getItem("skye-theme");
if (savedTheme) setTheme(savedTheme);

// ===== LANGUAGE =====
function applyLang(lang) {
  const t = i18n[lang];
  if (!t) return;
  currentLang = lang;
  document.getElementById("brandTagline").textContent = t.tagline;
  document.getElementById("signInText").textContent = t.signIn;
  document.getElementById("dividerText").textContent = t.or;
  document.getElementById("guestText").textContent = t.guest;
  document.getElementById("signinNote").innerHTML = t.note;
  langFlag.textContent = t.langFlag;
  langLabel.textContent = t.langLabel;
  // modal labels
  document.getElementById("tabLoginText").textContent = t.tabLogin;
  document.getElementById("tabRegisterText").textContent = t.tabRegister;
  document.getElementById("lblEmail").textContent = t.lblEmail;
  document.getElementById("lblPassword").textContent = t.lblPassword;
  document.getElementById("lblName").textContent = t.lblName;
  document.getElementById("lblRegEmail").textContent = t.lblRegEmail;
  document.getElementById("lblRegPassword").textContent = t.lblRegPassword;
  document.getElementById("loginSubmitText").textContent = t.loginSubmit;
  document.getElementById("regSubmitText").textContent = t.regSubmit;
  document.getElementById("noAccountText").textContent = t.noAccount;
  document.getElementById("createOneText").textContent = t.createOne;
  document.getElementById("haveAccountText").textContent = t.haveAccount;
  document.getElementById("signInLinkText").textContent = t.signInLink;
  document.querySelectorAll(".lang-option").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
  html.setAttribute("lang", lang);
  localStorage.setItem("skye-lang", lang);
}

langBtn.addEventListener("click", e => { e.stopPropagation(); langSelector.classList.toggle("open"); });
document.addEventListener("click", () => langSelector.classList.remove("open"));
document.querySelectorAll(".lang-option").forEach(btn => {
  btn.addEventListener("click", () => { applyLang(btn.dataset.lang); langSelector.classList.remove("open"); });
});
const savedLang = localStorage.getItem("skye-lang");
if (savedLang && i18n[savedLang]) applyLang(savedLang);

// ===== SLIDESHOW =====
function buildDots() {
  slideDots.innerHTML = "";
  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", `Slide ${i + 1}`);
    dot.addEventListener("click", () => goToSlide(i));
    slideDots.appendChild(dot);
  });
}

function goToSlide(index) {
  slides[currentSlide].classList.remove("active");
  document.querySelectorAll(".dot")[currentSlide]?.classList.remove("active");
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
  document.querySelectorAll(".dot")[currentSlide]?.classList.add("active");
}

function startSlideshow() { slideTimer = setInterval(() => goToSlide(currentSlide + 1), 5500); }
buildDots();
startSlideshow();

// ===== AUTH MODAL =====
function openModal(tab = "login") {
  modalBackdrop.classList.add("open");
  switchTab(tab);
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalBackdrop.classList.remove("open");
  document.body.style.overflow = "";
}

function switchTab(tab) {
  document.querySelectorAll(".auth-tab").forEach(t => t.classList.toggle("active", t.dataset.tab === tab));
  document.querySelectorAll(".auth-form").forEach(f => f.classList.toggle("active", f.id === `form${tab.charAt(0).toUpperCase() + tab.slice(1)}`));
}

document.getElementById("btnSignIn").addEventListener("click", () => openModal("login"));
document.getElementById("modalClose").addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", e => { if (e.target === modalBackdrop) closeModal(); });
document.getElementById("tabLogin").addEventListener("click", () => switchTab("login"));
document.getElementById("tabRegister").addEventListener("click", () => switchTab("register"));
document.getElementById("switchToRegister").addEventListener("click", () => switchTab("register"));
document.getElementById("switchToLogin").addEventListener("click", () => switchTab("login"));

// Password visibility toggles
function setupEye(eyeId, inputId) {
  document.getElementById(eyeId).addEventListener("click", () => {
    const inp = document.getElementById(inputId);
    inp.type = inp.type === "password" ? "text" : "password";
  });
}
setupEye("eyeLogin", "loginPassword");
setupEye("eyeReg", "regPassword");

// ===== VALIDATION =====
function validateEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

function setErr(id, msg) {
  const el = document.getElementById(id);
  if (el) el.textContent = msg;
  if (msg) {
    const inp = el?.previousElementSibling?.querySelector?.("input") || el?.previousElementSibling;
    inp?.classList?.add("error");
  }
}

function clearErrs(...ids) {
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = "";
  });
  document.querySelectorAll(".field-input.error").forEach(i => i.classList.remove("error"));
}

// ===== LOCAL AUTH (localStorage-based) =====
function getUsers() { return JSON.parse(localStorage.getItem("skye-users") || "[]"); }
function saveUsers(u) { localStorage.setItem("skye-users", JSON.stringify(u)); }
function setSession(user) { localStorage.setItem("skye-session", JSON.stringify({ name: user.name, email: user.email })); }

// Login form
document.getElementById("formLogin").addEventListener("submit", e => {
  e.preventDefault();
  const t = i18n[currentLang];
  const email = document.getElementById("loginEmail").value.trim();
  const pass = document.getElementById("loginPassword").value;
  clearErrs("loginEmailErr", "loginPassErr");
  let ok = true;
  if (!email) { setErr("loginEmailErr", t.errRequired); ok = false; }
  else if (!validateEmail(email)) { setErr("loginEmailErr", t.errEmail); ok = false; }
  if (!pass) { setErr("loginPassErr", t.errRequired); ok = false; }
  if (!ok) return;

  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === btoa(pass));
  if (!user) { setErr("loginPassErr", "Invalid email or password"); return; }
  setSession(user);
  closeModal();
  window.location.href = "dashboard.html";
});

// Register form
document.getElementById("formRegister").addEventListener("submit", e => {
  e.preventDefault();
  const t = i18n[currentLang];
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const pass = document.getElementById("regPassword").value;
  clearErrs("regNameErr", "regEmailErr", "regPassErr");
  let ok = true;
  if (!name) { setErr("regNameErr", t.errName); ok = false; }
  if (!email) { setErr("regEmailErr", t.errRequired); ok = false; }
  else if (!validateEmail(email)) { setErr("regEmailErr", t.errEmail); ok = false; }
  if (!pass || pass.length < 6) { setErr("regPassErr", t.errPass); ok = false; }
  if (!ok) return;

  const users = getUsers();
  if (users.find(u => u.email === email)) { setErr("regEmailErr", "Email already registered"); return; }
  const user = { name, email, password: btoa(pass) };
  users.push(user);
  saveUsers(users);
  setSession(user);
  closeModal();
  window.location.href = "dashboard.html";
});

// Guest
document.getElementById("btnGuest").addEventListener("click", () => {
  localStorage.setItem("skye-session", JSON.stringify({ name: "Guest", email: "guest@skye.app", guest: true }));
  window.location.href = "dashboard.html";
});

// ===== SERVICE WORKER =====
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch(() => {});
}
