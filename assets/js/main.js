/**
 * Template Name: Instant
 * Template URL: https://bootstrapmade.com/newtemplate-bootstrap-website-template/
 * Updated: Jul 07 2025 with Bootstrap v5.3.7
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector("body");
    const selectHeader = document.querySelector("#header");
    if (
      !selectHeader.classList.contains("scroll-up-sticky") &&
      !selectHeader.classList.contains("sticky-top") &&
      !selectHeader.classList.contains("fixed-top")
    )
      return;
    window.scrollY > 100
      ? selectBody.classList.add("scrolled")
      : selectBody.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener("click", mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  }
  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector(".typed");
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute("data-typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim(),
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Frequently Asked Questions Toggle
   */
  document
    .querySelectorAll(
      ".faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header",
    )
    .forEach((faqItem) => {
      faqItem.addEventListener("click", () => {
        faqItem.parentNode.classList.toggle("faq-active");
      });
    });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener("load", function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: "smooth",
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll(".navmenu a");

  function navmenuScrollspy() {
    navmenulinks.forEach((navmenulink) => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        document
          .querySelectorAll(".navmenu a.active")
          .forEach((link) => link.classList.remove("active"));
        navmenulink.classList.add("active");
      } else {
        navmenulink.classList.remove("active");
      }
    });
  }
  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);

  /* ─────────────────────────────────────────────────────────────
     # Dynamic Branch Hub Logic
     ───────────────────────────────────────────────────────────── */

  const branchData = {
    kegalle: {
      name: "Kegalle",
      badge: "Head Office",
      subtitle: "Golden Asia Micro Credit Main Branch",
      address: "Kandy Road, Annasigala, Molagoda, Kegalle",
      manager: "-",
      phone: "+94 70 662 4676",
      phoneRaw: "+94706624676",
      hours: "Mon – Sat: 8:00 AM – 7:00 PM",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63320.4182902641!2d80.32049102434079!3d7.252033061614073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3141656eb0d3d%3A0x868b449bdf536bf3!2sKegalle!5e0!3m2!1sen!2slk!4v1716980000000!5m2!1sen!2slk",
      directions: "https://maps.google.com/?q=Kegalle,+Sri+Lanka",
    },
    rikillagaskada: {
      name: "Rikillagaskada",
      badge: "Branch",
      subtitle: "Golden Asia Micro Credit Branch",
      address: "18 Kanuwa, Mailapitiya",
      manager: "SANJAYA BANDARA",
      phone: "+94 71 185 6652",
      phoneRaw: "+94711856652",
      hours: "Mon – Sat: 8:00 AM – 7:00 PM",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15839.759724975178!2d80.596383!3d7.020503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3630d0b432e6d%3A0x0!2sRikillagaskada!5e0!3m2!1sen!2slk!4v1716980000000!5m2!1sen!2slk",
      directions: "https://maps.google.com/?q=Rikillagaskada,+Sri+Lanka",
    },
    peradeniya: {
      name: "Peradeniya",
      badge: "Branch",
      subtitle: "Golden Asia Micro Credit Branch",
      address: "64/A3/C Guhagoda RD, Katugasthota",
      manager: "SAMEERA MANTHILAKA",
      phone: "+94 70 662 4677",
      phoneRaw: "+94706624677",
      hours: "Mon – Sat: 8:00 AM – 7:00 PM",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15834.337895213918!2d80.620000!3d7.290000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366218eeccd23%3A0x0!2sPeradeniya!5e0!3m2!1sen!2slk!4v1716980000000!5m2!1sen!2slk",
      directions: "https://maps.google.com/?q=Peradeniya,+Sri+Lanka",
    },
    narammala: {
      name: "Narammala",
      badge: "Branch",
      subtitle: "Golden Asia Micro Credit Branch",
      address: "Kandy Road, Annasigala, Molagoda, Kegalle",
      manager: "-",
      phone: "+94 70 662 4676",
      phoneRaw: "+94706624676",
      hours: "Mon – Sat: 8:00 AM – 7:00 PM",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15839.759724975178!2d80.596383!3d7.020503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3640f9b8a51a5%3A0x0!2sNarammala!5e0!3m2!1sen!2slk!4v1716980000000!5m2!1sen!2slk",
      directions: "https://maps.google.com/?q=Narammala,+Sri+Lanka",
    },
    kurunegala: {
      name: "Kurunegala",
      badge: "Branch",
      subtitle: "Golden Asia Micro Credit Branch",
      address: "No 599, Negambo Road, Malkaduwawa, Kurunegala",
      manager: "THARAKA ABEYWARDHANA",
      phone: "+94 71 034 0147",
      phoneRaw: "+94710340147",
      hours: "Mon – Sat: 8:00 AM – 7:00 PM",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15827.47865392763!2d80.350000!3d7.480000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae33cc206082e01%3A0x0!2sKurunegala!5e0!3m2!1sen!2slk!4v1716980000000!5m2!1sen!2slk",
      directions: "https://maps.google.com/?q=Kurunegala,+Sri+Lanka",
    },
    hatton: {
      name: "Hatton",
      badge: "Branch",
      subtitle: "Golden Asia Micro Credit Branch",
      address: "152/3 Jayasripura, Nuwara Eliya road Pathana, Kotagala",
      manager: "AMILA JAYASINGHA",
      phone: "+94 70 772 4677",
      phoneRaw: "+94707724677",
      hours: "Mon – Sat: 8:00 AM – 7:00 PM",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15847.976345330344!2d80.630000!3d6.910000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae37d5b8fd1b2d3%3A0x0!2sHatton!5e0!3m2!1sen!2slk!4v1716980000000!5m2!1sen!2slk",
      directions: "https://maps.google.com/?q=Hatton,+Sri+Lanka",
    },
    matale: {
      name: "Matale",
      badge: "Branch",
      subtitle: "Golden Asia Micro Credit Branch",
      address: "50/91, KANDY ROAD, KOHOBILIVELA, MATALE",
      manager: "PALITHA BANDARA",
      phone: "+94 70 772 4088",
      phoneRaw: "+94707724088",
      hours: "Mon – Sat: 8:00 AM – 7:00 PM",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15822.938454608178!2d80.620000!3d7.470000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae36c6fa0827537%3A0x0!2sMatale!5e0!3m2!1sen!2slk!4v1716980000000!5m2!1sen!2slk",
      directions: "https://maps.google.com/?q=Matale,+Sri+Lanka",
    },
    walapane: {
      name: "Walapane",
      badge: "Branch",
      subtitle: "Golden Asia Micro Credit Branch",
      address: "Address not available",
      manager: "N/A",
      phone: "N/A",
      phoneRaw: "",
      hours: "Mon – Sat: 8:00 AM – 7:00 PM",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15857.134957588823!2d80.700000!3d6.930000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae36e6eaf02b271%3A0x0!2sWalapane!5e0!3m2!1sen!2slk!4v1716980000000!5m2!1sen!2slk",
      directions: "https://maps.google.com/?q=Walapane,+Sri+Lanka",
    },
    welimada: {
      name: "Welimada",
      badge: "Branch",
      subtitle: "Golden Asia Micro Credit Branch",
      address: "Boralanda Road, Keppetipola",
      manager: "N/A",
      phone: "N/A",
      phoneRaw: "",
      hours: "Mon – Sat: 8:00 AM – 7:00 PM",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15847.976345330344!2d80.900000!3d6.900000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae36c9d7b1c6f3d%3A0x0!2sWelimada!5e0!3m2!1sen!2slk!4v1716980000000!5m2!1sen!2slk",
      directions: "https://maps.google.com/?q=Welimada,+Sri+Lanka",
    },
    ruwanwella: {
      name: "Ruwanwella",
      badge: "Branch",
      subtitle: "Golden Asia Micro Credit Branch",
      address: "Near the school, Mudugamuwa, Ruwanwella",
      manager: "SANJAYA NALIN KUMARA",
      phone: "+94 70 771 6399",
      phoneRaw: "+94707716399",
      hours: "Mon – Sat: 8:00 AM – 7:00 PM",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15840.759724975178!2d80.240000!3d7.050000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae34f5fbe2f6b61%3A0x0!2sRuwanwella!5e0!3m2!1sen!2slk!4v1716980000000!5m2!1sen!2slk",
      directions: "https://maps.google.com/?q=Ruwanwella,+Sri+Lanka",
    },
    nuwaraeliya: {
      name: "Nuwara Eliya",
      badge: "Branch",
      subtitle: "Golden Asia Micro Credit Branch",
      address: "No1, Ambewela Road, Ruwan Eliya, Nuwara Eliya",
      manager: "N/A",
      phone: "N/A",
      phoneRaw: "",
      hours: "Mon – Sat: 8:00 AM – 7:00 PM",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15847.976345330344!2d80.760000!3d6.970000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae380dd0a66c4f9%3A0x0!2sNuwara%20Eliya!5e0!3m2!1sen!2slk!4v1716980000000!5m2!1sen!2slk",
      directions: "https://maps.google.com/?q=Nuwara+Eliya,+Sri+Lanka",
    },
  };

  const branchTitle = document.getElementById("branch-title");
  const branchSubtitle = document.getElementById("branch-subtitle");
  const branchBadge = document.getElementById("branch-badge");
  const branchAddress = document.getElementById("branch-address");
  const branchPhone = document.getElementById("branch-phone");
  const branchEmail = document.getElementById("branch-email");
  const branchHours = document.getElementById("branch-hours");
  const branchDirections = document.getElementById("branch-directions-link");
  const branchMap = document.getElementById("branch-map");
  const mapLoading = document.getElementById("map-loading");
  const selectorButtons = document.querySelectorAll(".branch-select-btn");

  // Function to switch branch details dynamically
  function switchBranch(branchKey) {
    const data = branchesData[branchKey];
    if (!data) return;

    // Show dynamic map loading screen
    if (mapLoading) mapLoading.classList.add("active");

    // Fade effect logic for text details
    const infoCard = document.querySelector(".branch-info-card");
    if (infoCard) {
      infoCard.style.opacity = "0.3";
      infoCard.style.transform = "translateY(5px)";
      infoCard.style.transition = "all 0.3s ease";
    }

    setTimeout(() => {
      // Update Texts
      if (branchTitle) branchTitle.textContent = data.title;
      if (branchSubtitle) branchSubtitle.textContent = data.subtitle;

      if (branchBadge) {
        branchBadge.innerHTML =
          data.badge === "Regional Branch"
            ? "<i class='bi bi-geo-alt-fill'></i> Regional Office"
            : data.badge;
      }

      if (branchAddress) branchAddress.textContent = data.address;
      if (branchPhone)
        branchPhone.innerHTML = `<a href="${data.phoneLink}">${data.phone}</a>`;
      if (branchEmail)
        branchEmail.innerHTML = `<a href="${data.emailLink}">${data.email}</a>`;
      if (branchHours) branchHours.textContent = data.hours;
      if (branchDirections) branchDirections.href = data.directions;

      // Update Active Button Classes
      selectorButtons.forEach((btn) => {
        const isTarget = btn.getAttribute("data-branch") === branchKey;
        btn.classList.toggle("active", isTarget);

        // Update button sub-icon
        const icon = btn.querySelector("i");
        if (icon) {
          icon.className = isTarget ? "bi bi-geo-alt-fill" : "bi bi-geo-alt";
        }
      });

      // Update Active Navigation classes (if matching)
      document.querySelectorAll(".branch-nav-link").forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("data-branch") === branchKey,
        );
      });

      // Update Map Iframe src
      if (branchMap) {
        branchMap.src = data.mapUrl;
      }

      // Fade back in
      if (infoCard) {
        infoCard.style.opacity = "1";
        infoCard.style.transform = "translateY(0px)";
      }
    }, 250);
  }

  // Remove map loading overlay when iframe loads
  if (branchMap) {
    branchMap.addEventListener("load", () => {
      if (mapLoading) mapLoading.classList.remove("active");
    });
  }

  // Hook selector buttons in Grid
  selectorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.getAttribute("data-branch");
      switchBranch(key);
    });
  });

  // Hook navigation dropdown & footer links
  document.querySelectorAll(".branch-nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const key = link.getAttribute("data-branch");
      switchBranch(key);

      // Close mobile navigation if active
      if (document.body.classList.contains("mobile-nav-active")) {
        const mobileToggle = document.querySelector(".mobile-nav-toggle");
        if (mobileToggle) mobileToggle.click();
      }
    });
  });

  /* ─────────────────────────────────────────────────────────────
     # Careers Job Vacancy Filtering
     ───────────────────────────────────────────────────────────── */

  const filterButtons = document.querySelectorAll(".career-filter-btn");
  const jobCards = document.querySelectorAll(".job-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filterValue = button.getAttribute("data-filter");

      // Set active class
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter job cards
      jobCards.forEach((card) => {
        const dept = card.getAttribute("data-dept");
        card.style.transition = "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)";

        if (filterValue === "all" || dept === filterValue) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 50);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.95)";
          setTimeout(() => {
            card.style.display = "none";
          }, 300);
        }
      });
    });
  });

  /* ─────────────────────────────────────────────────────────────
     # Career Apply Modal Logic
     ───────────────────────────────────────────────────────────── */

  const careerModalBackdrop = document.getElementById("careerModalBackdrop");
  const careerModalClose = document.getElementById("careerModalClose");
  const modalJobTitle = document.getElementById("modalJobTitle");
  const modalAppliedPosition = document.getElementById("modalAppliedPosition");
  const careerApplicationForm = document.getElementById(
    "careerApplicationForm",
  );

  const modalLoading = document.getElementById("modalLoading");
  const modalError = document.getElementById("modalError");
  const modalSuccess = document.getElementById("modalSuccess");

  const fileInput = document.getElementById("applicantResume");
  const cvUploader = document.getElementById("cvUploader");
  const uploadStatusText = document.getElementById("uploadStatusText");

  // Open modal
  document.querySelectorAll(".job-apply-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const position = btn.getAttribute("data-job");
      const location = btn.getAttribute("data-location");

      if (modalJobTitle) modalJobTitle.textContent = position;
      if (modalAppliedPosition) modalAppliedPosition.value = position;

      // Select matching option in preferred location dropdown automatically
      const selectElement = document.getElementById("applicantLocation");
      if (selectElement) {
        const primaryLoc = location.split(" / ")[0].trim();
        for (let i = 0; i < selectElement.options.length; i++) {
          if (
            selectElement.options[i].value.toLowerCase() ===
            primaryLoc.toLowerCase()
          ) {
            selectElement.selectedIndex = i;
            break;
          }
        }
      }

      // Reset form states
      if (careerApplicationForm) careerApplicationForm.reset();
      if (uploadStatusText)
        uploadStatusText.textContent = "Click to select or drag your CV here";
      if (cvUploader)
        cvUploader.style.borderColor = "rgba(255, 255, 255, 0.15)";

      if (modalLoading) modalLoading.style.display = "none";
      if (modalError) modalError.style.display = "none";
      if (modalSuccess) modalSuccess.style.display = "none";

      if (careerModalBackdrop) {
        careerModalBackdrop.classList.add("active");
        document.body.style.overflow = "hidden"; // Prevent background scroll
      }
    });
  });

  // Close modal functions
  function closeModal() {
    if (careerModalBackdrop) {
      careerModalBackdrop.classList.remove("active");
      document.body.style.overflow = ""; // Re-enable scroll
    }
  }

  if (careerModalClose) {
    careerModalClose.addEventListener("click", closeModal);
  }

  if (careerModalBackdrop) {
    careerModalBackdrop.addEventListener("click", (e) => {
      if (e.target === careerModalBackdrop) {
        closeModal();
      }
    });
  }

  // CV File input styling handler
  if (fileInput) {
    fileInput.addEventListener("change", () => {
      if (fileInput.files.length > 0) {
        const filename = fileInput.files[0].name;
        if (uploadStatusText)
          uploadStatusText.textContent = `Attached: ${filename}`;
        if (cvUploader) cvUploader.style.borderColor = "var(--accent-color)";
      } else {
        if (uploadStatusText)
          uploadStatusText.textContent = "Click to select or drag your CV here";
        if (cvUploader)
          cvUploader.style.borderColor = "rgba(255, 255, 255, 0.15)";
      }
    });
  }

  // Handle Form Submission Interceptor (simulate dynamic upload)
  if (careerApplicationForm) {
    careerApplicationForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Show spinner state
      if (modalLoading) modalLoading.style.display = "block";
      if (modalError) modalError.style.display = "none";
      if (modalSuccess) modalSuccess.style.display = "none";

      // Simulate network request
      setTimeout(() => {
        if (modalLoading) modalLoading.style.display = "none";
        if (modalSuccess) modalSuccess.style.display = "block";

        // Clear inputs after success
        setTimeout(() => {
          closeModal();
        }, 2000);
      }, 1500);
    });
  }
})();
