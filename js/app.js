/**
 * Biswas Digital Hub - Professional White Theme with Smooth Motion & Animation
 * Features: AOS Scroll Transitions, Vanilla Tilt, Stat Counters, Clean Flash Loader,
 * Real Google Rating (4.8 Stars, 5 Reviews), Bhabanipur Char Location.
 */

const WHATSAPP_NUMBER = "919547632355";
const GOOGLE_REVIEW_URL = "https://g.page/r/CfvINjZcHSllEBM/review";

// Document Checklist Data Store
const checklistData = {
  pan: {
    title: "New PAN Card Application (Individual)",
    subtitle: "Required documents for Indian citizens (Form 49A)",
    badge: "Income Tax Department / NSDL / UTI",
    items: [
      {
        title: "Proof of Identity & Address (Aadhaar Card)",
        desc: "Aadhaar card with full Date of Birth printed is standard. Ensure mobile number is active for OTP verification.",
        icon: "fa-id-card",
        required: true
      },
      {
        title: "2 Recent Passport Size Photos",
        desc: "White background, clear face without sunglasses or hats (3.5cm x 2.5cm). You can also send a clean mobile selfie on WhatsApp and we will format it!",
        icon: "fa-camera",
        required: true
      },
      {
        title: "Clear Signature on White Paper",
        desc: "Sign with black or blue ballpoint pen on plain white unruled paper and take a photo.",
        icon: "fa-signature",
        required: true
      },
      {
        title: "Active Mobile Number & Email Address",
        desc: "e-PAN PDF will be emailed directly within 24-48 hours. Physical PVC card will reach your address by speed post.",
        icon: "fa-phone",
        required: true
      }
    ],
    tips: "💡 Tip: If your mobile is not linked to Aadhaar, don't worry! We can process biometric or physical form submission.",
    waText: "Hello Biswas Digital Hub, I have the required documents ready for New PAN Card application. Please guide me."
  },

  voter: {
    title: "Voter ID Card (New Registration & Correction)",
    subtitle: "Form 6 (New) / Form 8 (Correction or Shifting) on ECI Portal",
    badge: "Election Commission of India",
    items: [
      {
        title: "Proof of Age / Date of Birth",
        desc: "Aadhaar Card, Madhyamik / 10th Admit Card, Birth Certificate, or School Leaving Certificate.",
        icon: "fa-calendar-check",
        required: true
      },
      {
        title: "Proof of Ordinary Residence (Address)",
        desc: "Aadhaar Card, Ration Card, Electricity Bill, Bank Passbook, or Father's Voter ID card.",
        icon: "fa-house",
        required: true
      },
      {
        title: "1 Color Passport Photo",
        desc: "Clear front-facing photo with plain background.",
        icon: "fa-user",
        required: true
      },
      {
        title: "Existing Epic Number (For Corrections)",
        desc: "If making corrections or shifting address, your existing 10-digit EPIC number (e.g., WB/...) is required.",
        icon: "fa-address-card",
        required: false
      }
    ],
    tips: "💡 Tip: Anyone who has reached 18 years of age is eligible to apply online. We provide official reference tracking number.",
    waText: "Hello Biswas Digital Hub, I need assistance with Voter ID card registration / correction."
  },

  scholarship: {
    title: "SVMCM & State Scholarships (Bikash Bhavan / Oasis)",
    subtitle: "Swami Vivekananda Merit-cum-Means & Oasis SC/ST/OBC Scheme",
    badge: "West Bengal Higher Education / Backward Classes",
    items: [
      {
        title: "Last Qualifying Examination Marksheet",
        desc: "Both sides of Madhyamik, HS, or Semester marksheets with minimum 60% marks (for SVMCM).",
        icon: "fa-file-lines",
        required: true
      },
      {
        title: "Current Admission Receipt / Fee Book",
        desc: "College, University, or School admission fee slip for the current academic session.",
        icon: "fa-receipt",
        required: true
      },
      {
        title: "Family Income Certificate (BDO / SDO / Gazetted)",
        desc: "Official income certificate issued by BDO / SDO / Municipal Commissioner for the current financial year.",
        icon: "fa-certificate",
        required: true
      },
      {
        title: "Student Bank Passbook First Page",
        desc: "Must clearly display Account Number, IFSC code, and branch name. Account must be single (not joint) and Aadhaar-seeded.",
        icon: "fa-building-columns",
        required: true
      },
      {
        title: "Aadhaar Card & Passport Photo",
        desc: "Student's Aadhaar card and recent color photo with signature.",
        icon: "fa-id-badge",
        required: true
      }
    ],
    tips: "💡 Warning: Ensure bank account is active and seeded with Aadhaar in NPCI to prevent scholarship payment failures.",
    waText: "Hello Biswas Digital Hub, I want to apply for Swami Vivekananda (SVMCM) / Oasis scholarship. Please check my documents."
  },

  job: {
    title: "Government Job & Recruitment Form Fill-up",
    subtitle: "SSC, Railway RRB, WB Police, Defense, PSC & Banking Forms",
    badge: "Recruitment Portals (SSC, WBPRB, etc.)",
    items: [
      {
        title: "Educational Marksheets & Certificates",
        desc: "10th / 12th / Degree certificates, Board names, Passing year, Roll number, and exact percentage/CGPA.",
        icon: "fa-graduation-cap",
        required: true
      },
      {
        title: "Aadhaar Card / Photo ID",
        desc: "Valid photo ID number and details matching educational marksheets exactly.",
        icon: "fa-id-card",
        required: true
      },
      {
        title: "Caste Certificate (OBC-A / OBC-B / SC / ST / EWS)",
        desc: "If claiming reservation, certificate issue date, sub-caste, issuing authority details.",
        icon: "fa-shield-halved",
        required: false
      },
      {
        title: "Passport Photo & Signature for Upload",
        desc: "Our system crops and compresses to exact server KB limits (e.g. 20-50KB JPG, 3.5cm x 4.5cm) with current date stamp if mandatory.",
        icon: "fa-image",
        required: true
      }
    ],
    tips: "💡 Error-Free Guarantee: We verify your application preview with you line-by-line on WhatsApp before paying the final fee.",
    waText: "Hello Biswas Digital Hub, I need to fill up a Govt job application form. Please help me with photo resizing and submission."
  },

  train: {
    title: "IRCTC Train & Flight Ticket Booking",
    subtitle: "Confirmed Berth & Fast Tatkal Assistance Desk",
    badge: "Authorized IRCTC Travel Booking",
    items: [
      {
        title: "Passenger Details",
        desc: "Full Name (as per Govt ID), Age, Gender, and Berth Preference (Lower, Middle, Upper, Side Lower).",
        icon: "fa-users",
        required: true
      },
      {
        title: "Travel Journey Details",
        desc: "From Station, To Station, Preferred Journey Date, and Travel Class (SL, 3A, 2A, CC).",
        icon: "fa-route",
        required: true
      },
      {
        title: "Contact Mobile Number",
        desc: "Mobile number for official IRCTC PNR status, coach/seat allocation SMS, and platform updates.",
        icon: "fa-mobile-screen",
        required: true
      }
    ],
    tips: "💡 For Tatkal tickets: Please send passenger details on WhatsApp 30 minutes before Tatkal opening time (10:00 AM for AC, 11:00 AM for Non-AC).",
    waText: "Hello Biswas Digital Hub, I want to book a Train ticket. Here are my travel details: From [__] to [__] on Date [__]."
  }
};

// State for Calculator
const calcState = {
  selectedItems: new Map(),
  bwPages: 0,
  colorPages: 0
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  initCleanFlashLoader();
  initAOS();
  initStatCounters();
  initShopHoursStatus();
  initServiceSearch();
  renderChecklist('pan');
  initPriceCalculator();
  initMobileMenu();
  initYear();
  initLanguageToggle();
});

// 1. CLEAN FLASH LOADER WITH ACCELERATED PROGRESS & SMOOTH FADE
function initCleanFlashLoader() {
  const loader = document.getElementById("cleanFlashLoader");
  const fill = document.getElementById("cleanLoaderFill");
  if (!loader || !fill) return;

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 20) + 20;
    if (progress >= 100) {
      fill.style.width = "100%";
      clearInterval(interval);
      setTimeout(() => {
        loader.classList.add("loader-done");
        setTimeout(() => loader.remove(), 450);
      }, 150);
    } else {
      fill.style.width = `${progress}%`;
    }
  }, 40);
}

// 2. AOS (ANIMATE ON SCROLL) INITIALIZATION
function initAOS() {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 650,
      easing: 'ease-out-cubic',
      once: true,
      offset: 40
    });
  }
}

// 3. STAT COUNTER ANIMATION
function initStatCounters() {
  const counters = document.querySelectorAll(".stat-counter");
  if (!counters.length) return;

  const runCounter = (el) => {
    const target = parseFloat(el.getAttribute("data-target") || 0);
    const duration = 1000; // 1s
    const startTime = performance.now();

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(ease * target);
      el.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target;
      }
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        runCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(counter => observer.observe(counter));
}

// 4. LIVE DESK SCHEDULE CHECKER
function initShopHoursStatus() {
  const statusText = document.getElementById("shopStatusText");
  if (!statusText) return;

  const now = new Date();
  const day = now.getDay(); // 0 = Sunday
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hour + minutes / 60;

  let isOpen = false;
  if (day === 0) {
    // Sunday: 9:00 AM to 2:00 PM
    isOpen = (currentTime >= 9.0 && currentTime <= 14.0);
  } else {
    // Mon - Sat: 8:00 AM to 9:30 PM
    isOpen = (currentTime >= 8.0 && currentTime <= 21.5);
  }

  if (isOpen) {
    statusText.textContent = "DESK OPEN NOW";
  } else {
    statusText.textContent = "DESK OPENS 8 AM • WHATSAPP ACTIVE";
  }
}

// 5. SEARCH & INSTANT FILTERING
function initServiceSearch() {
  const searchInput = document.getElementById("serviceSearchInput");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    filterServicesByQuery(query);
  });

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      triggerServiceSearch();
    }
  });
}

function triggerServiceSearch() {
  const searchInput = document.getElementById("serviceSearchInput");
  if (!searchInput) return;
  const query = searchInput.value.toLowerCase().trim();
  filterServicesByQuery(query);
  
  const servicesSec = document.getElementById("services");
  if (servicesSec) {
    servicesSec.scrollIntoView({ behavior: "smooth" });
  }
}

function quickFilter(keyword) {
  const searchInput = document.getElementById("serviceSearchInput");
  if (searchInput) {
    searchInput.value = keyword;
    triggerServiceSearch();
  }
}

function filterServicesByQuery(query) {
  const cards = document.querySelectorAll(".service-card");
  const noResults = document.getElementById("noResultsMsg");
  let visibleCount = 0;

  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    const keywords = (card.getAttribute("data-keywords") || "").toLowerCase();
    if (!query || text.includes(query) || keywords.includes(query)) {
      card.style.display = "flex";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  if (noResults) {
    noResults.style.display = visibleCount === 0 ? "block" : "none";
  }
}

// 6. SMART DOCUMENT CHECKLIST
function selectChecklist(key) {
  document.querySelectorAll(".checklist-selector-btn").forEach(btn => {
    btn.classList.remove("active", "bg-blue-50/80", "border-blue-500", "text-blue-950", "shadow-sm");
    btn.classList.add("border-slate-200", "text-slate-700");
    const icon = btn.querySelector(".fa-chevron-right");
    if (icon) {
      icon.classList.remove("text-blue-600");
      icon.classList.add("text-slate-400");
    }
  });

  const activeBtn = document.querySelector(`.checklist-selector-btn[data-target="${key}"]`);
  if (activeBtn) {
    activeBtn.classList.add("active", "bg-blue-50/80", "border-blue-500", "text-blue-950", "shadow-sm");
    activeBtn.classList.remove("border-slate-200", "text-slate-700");
    const icon = activeBtn.querySelector(".fa-chevron-right");
    if (icon) {
      icon.classList.add("text-blue-600");
      icon.classList.remove("text-slate-400");
    }
  }

  renderChecklist(key);
}

function renderChecklist(key) {
  const container = document.getElementById("checklistContent");
  if (!container) return;

  const data = checklistData[key] || checklistData.pan;

  const itemsHtml = data.items.map((item) => `
    <div class="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 transition hover:shadow-md">
      <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-base shrink-0 mt-0.5 border border-blue-100">
        <i class="fa-solid ${item.icon}"></i>
      </div>
      <div class="flex-1 font-sans">
        <div class="flex items-center justify-between gap-2">
          <h5 class="font-bold text-sm text-slate-900 font-heading">${item.title}</h5>
          ${item.required 
            ? '<span class="text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded uppercase">Mandatory</span>' 
            : '<span class="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">Optional</span>'}
        </div>
        <p class="text-xs text-slate-600 mt-1 leading-relaxed">${item.desc}</p>
      </div>
    </div>
  `).join("");

  const encodedWa = encodeURIComponent(data.waText);
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedWa}`;

  container.innerHTML = `
    <div class="font-heading">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
        <span class="inline-block text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded">
          ${data.badge}
        </span>
        <span class="text-xs text-slate-500 font-sans">Biswas Digital Hub Clearance Guide</span>
      </div>
      <h3 class="font-bold text-xl sm:text-2xl text-slate-900">${data.title}</h3>
      <p class="text-xs sm:text-sm text-slate-600 mt-1 font-sans">${data.subtitle}</p>
    </div>

    <div class="space-y-3">
      ${itemsHtml}
    </div>

    <div class="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed flex items-start gap-3 font-sans">
      <i class="fa-solid fa-circle-info text-amber-600 text-base shrink-0 mt-0.5"></i>
      <div>${data.tips}</div>
    </div>

    <div class="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 font-heading">
      <div class="text-xs text-slate-500 font-sans">
        <strong>No scanner needed:</strong> Take clear photos from phone and send on WhatsApp!
      </div>
      <a href="${waUrl}" target="_blank" rel="noopener noreferrer" 
         class="btn-shimmer-pro btn-wa-pro w-full sm:w-auto text-xs py-3 px-6 justify-center">
        <i class="fa-brands fa-whatsapp text-base"></i>
        <span>Send Documents on WhatsApp</span>
      </a>
    </div>
  `;
}

// 7. INTERACTIVE PRICE ESTIMATOR & CALCULATOR
function initPriceCalculator() {
  const checkboxes = document.querySelectorAll(".calc-check");
  checkboxes.forEach(chk => {
    chk.addEventListener("change", (e) => {
      const name = chk.getAttribute("data-name");
      const price = parseFloat(chk.getAttribute("data-price") || 0);

      if (e.target.checked) {
        calcState.selectedItems.set(name, price);
      } else {
        calcState.selectedItems.delete(name);
      }
      updateCalculatorDisplay();
    });
  });
}

function adjustPageCount(type, delta) {
  if (type === 'bw') {
    calcState.bwPages = Math.max(0, calcState.bwPages + delta);
    const countElem = document.getElementById("bwPageCount");
    if (countElem) countElem.textContent = calcState.bwPages;
  } else if (type === 'color') {
    calcState.colorPages = Math.max(0, calcState.colorPages + delta);
    const countElem = document.getElementById("colorPageCount");
    if (countElem) countElem.textContent = calcState.colorPages;
  }
  updateCalculatorDisplay();
}

function updateCalculatorDisplay() {
  const summaryList = document.getElementById("calcSummaryList");
  const grandTotalElem = document.getElementById("calcGrandTotal");

  let total = 0;
  const itemsArray = [];

  calcState.selectedItems.forEach((price, name) => {
    total += price;
    itemsArray.push({ name, price: `₹${price}` });
  });

  if (calcState.bwPages > 0) {
    const bwCost = calcState.bwPages * 2;
    total += bwCost;
    itemsArray.push({ name: `B/W Xerox / Print (${calcState.bwPages} pages)`, price: `₹${bwCost}` });
  }

  if (calcState.colorPages > 0) {
    const colorCost = calcState.colorPages * 10;
    total += colorCost;
    itemsArray.push({ name: `Color Laser Print (${calcState.colorPages} pages)`, price: `₹${colorCost}` });
  }

  if (grandTotalElem) {
    grandTotalElem.textContent = `₹${total}`;
  }

  if (summaryList) {
    if (itemsArray.length === 0) {
      summaryList.innerHTML = `<p class="text-slate-400 italic font-sans">No services selected yet. Pick items on the left to see instant pricing.</p>`;
    } else {
      summaryList.innerHTML = itemsArray.map(item => `
        <div class="flex items-center justify-between py-1 border-b border-slate-800 text-xs font-sans">
          <span class="truncate pr-2 text-slate-300">${item.name}</span>
          <span class="font-bold text-blue-400 shrink-0">${item.price}</span>
        </div>
      `).join("");
    }
  }
}

function sendCalculatedOrderWhatsApp() {
  let message = "Hello Biswas Digital Hub,\nI calculated my service requirement on your website:\n\n";
  let total = 0;
  let count = 0;

  calcState.selectedItems.forEach((price, name) => {
    total += price;
    count++;
    message += `• ${name}: ₹${price}\n`;
  });

  if (calcState.bwPages > 0) {
    const bwCost = calcState.bwPages * 2;
    total += bwCost;
    count++;
    message += `• B/W Xerox: ${calcState.bwPages} pages (₹${bwCost})\n`;
  }

  if (calcState.colorPages > 0) {
    const colorCost = calcState.colorPages * 10;
    total += colorCost;
    count++;
    message += `• Color Print: ${calcState.colorPages} pages (₹${colorCost})\n`;
  }

  if (count === 0) {
    message = "Hello Biswas Digital Hub, I want to inquire about your prices and services.";
  } else {
    message += `\nEstimated Total: ₹${total}\n\nPlease let me know how to proceed!`;
  }

  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
}

// 8. MOBILE DRAWER
function initMobileMenu() {
  const btn = document.getElementById("mobileMenuBtn");
  const menu = document.getElementById("mobileMenu");
  const icon = document.getElementById("menuIcon");

  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    if (menu.classList.contains("hidden")) {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    } else {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    }
  });

  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      if (icon) {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    });
  });
}

// 9. MODALS & DISPATCH
function openServiceModal() {
  const modal = document.getElementById("serviceModal");
  if (modal) {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

function closeServiceModal() {
  const modal = document.getElementById("serviceModal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeServiceModal();
});

document.addEventListener("click", (e) => {
  const modal = document.getElementById("serviceModal");
  if (modal && e.target === modal) closeServiceModal();
});

function handleModalSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("modalName")?.value || "";
  const phone = document.getElementById("modalPhone")?.value || "";
  const service = document.getElementById("modalService")?.value || "";
  const notes = document.getElementById("modalNotes")?.value || "";

  const text = `Hello Biswas Digital Hub,\n\n*Service Request*\n*Name:* ${name}\n*Phone:* ${phone}\n*Service:* ${service}\n${notes ? `*Instructions:* ${notes}\n` : ""}\nPlease assist me.`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

  closeServiceModal();
  window.open(url, "_blank");
}

function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("contactName")?.value || "";
  const phone = document.getElementById("contactPhone")?.value || "";
  const service = document.getElementById("contactService")?.value || "";
  const urgency = document.getElementById("contactUrgency")?.value || "";
  const notes = document.getElementById("contactNotes")?.value || "";

  const text = `Hello Biswas Digital Hub,\n\n*Service Inquiry*\n• *Customer:* ${name}\n• *Phone:* ${phone}\n• *Service Needed:* ${service}\n• *Urgency:* ${urgency}\n${notes ? `• *Notes:* ${notes}\n` : ""}\nPlease get back to me.`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
}

// 10. FOOTER YEAR
function initYear() {
  const yearElem = document.getElementById("currentYear");
  if (yearElem) yearElem.textContent = new Date().getFullYear();
}

// 11. LANGUAGE TOGGLE
let isBengaliMode = false;
function initLanguageToggle() {
  const btn = document.getElementById("langToggleBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    isBengaliMode = !isBengaliMode;
    const heroH1 = document.querySelector("#home h1");
    if (isBengaliMode) {
      btn.textContent = "বাংলা / Active";
      if (heroH1) {
        heroH1.innerHTML = `ভবানীপুর চরের বিশ্বস্ত অনলাইন ও <br class="hidden sm:inline"><span class="text-blue-600">সাইবার ক্যাফে সেন্টার</span>।`;
      }
    } else {
      btn.textContent = "বাংলা / EN";
      if (heroH1) {
        heroH1.innerHTML = `Your Trusted Online & <br class="hidden sm:inline"><span class="text-blue-600">Cyber Cafe Desk</span> in Bhabanipur Char.`;
      }
    }
  });
}
