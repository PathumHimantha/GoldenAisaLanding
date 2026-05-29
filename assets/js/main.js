/**
* Template Name: Instant
* Template URL: https://bootstrapmade.com/newtemplate-bootstrap-website-template/
* Updated: Jul 07 2025 with Bootstrap v5.3.7
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
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
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  /* ─────────────────────────────────────────────────────────────
     # Dynamic Branch Hub Logic
     ───────────────────────────────────────────────────────────── */

  const branchesData = {
    kegalle: {
      title: "Kegalle",
      subtitle: "Golden Asia Micro Credit Head Office & Main Branch",
      badge: "<i class='bi bi-star-fill'></i> Head Office",
      address: "Annasigala, Molagoda, Kegalle",
      phone: "+94 35 222 1234",
      phoneLink: "tel:+94352221234",
      email: "kegalle@goldenasia.lk",
      emailLink: "mailto:kegalle@goldenasia.lk",
      hours: "Mon – Sat: 8:00 AM – 7:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63320.4182902641!2d80.32049102434079!3d7.252033061614073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3141656eb0d3d%3A0x868b449bdf536bf3!2sKegalle!5e0!3m2!1sen!2slk!4v1716980000000!5m2!1sen!2slk",
      directions: "https://maps.google.com/?q=Kegalle,+Sri+Lanka"
    },
    rikillagaskada: {
      title: "Rikillagaskada",
      subtitle: "Golden Asia Micro Credit Rikillagaskada Regional Branch",
      badge: "Regional Branch",
      address: "No. 45, Kandy Road, Rikillagaskada",
      phone: "+94 81 236 4567",
      phoneLink: "tel:+94812364567",
      email: "rikillagaskada@goldenasia.lk",
      emailLink: "mailto:rikillagaskada@goldenasia.lk",
      hours: "Mon – Sat: 8:00 AM – 5:30 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15832.062089201944!2d80.77123985541991!3d7.239088699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae37aa8a221f44d%3A0x7d6a5996cc51e52!2sRikillagaskada!5e0!3m2!1sen!2slk!4v1716980001000!5m2!1sen!2slk",
      directions: "https://maps.google.com/?q=Rikillagaskada,+Sri+Lanka"
    },
    peradeniya: {
      title: "Peradeniya",
      subtitle: "Golden Asia Micro Credit Peradeniya Regional Branch",
      badge: "Regional Branch",
      address: "No. 112, Galaha Road, Peradeniya",
      phone: "+94 81 238 9012",
      phoneLink: "tel:+94812389012",
      email: "peradeniya@goldenasia.lk",
      emailLink: "mailto:peradeniya@goldenasia.lk",
      hours: "Mon – Sat: 8:00 AM – 6:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15831.624792070383!2d80.58782355541991!3d7.251571599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae368d451cb8497%3A0x2a1768826723223f!2sPeradeniya!5e0!3m2!1sen!2slk!4v1716980002000!5m2!1sen!2slk",
      directions: "https://maps.google.com/?q=Peradeniya,+Sri+Lanka"
    },
    narammala: {
      title: "Narammala",
      subtitle: "Golden Asia Micro Credit Narammala Regional Branch",
      badge: "Regional Branch",
      address: "No. 88, Kurunegala Road, Narammala",
      phone: "+94 37 224 8901",
      phoneLink: "tel:+94372248901",
      email: "narammala@goldenasia.lk",
      emailLink: "mailto:narammala@goldenasia.lk",
      hours: "Mon – Sat: 8:00 AM – 5:30 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.513233816666!2d80.21356391477755!3d7.420846594646736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae32549a174092b%3A0x6b44a49688df74ba!2sNarammala!5e0!3m2!1sen!2slk!4v1716980003000!5m2!1sen!2slk",
      directions: "https://maps.google.com/?q=Narammala,+Sri+Lanka"
    },
    kurunegala: {
      title: "Kurunegala",
      subtitle: "Golden Asia Micro Credit Kurunegala Regional Branch",
      badge: "Regional Branch",
      address: "No. 14, Negombo Road, Kurunegala",
      phone: "+94 37 222 3456",
      phoneLink: "tel:+94372223456",
      email: "kurunegala@goldenasia.lk",
      emailLink: "mailto:kurunegala@goldenasia.lk",
      hours: "Mon – Sat: 8:00 AM – 6:30 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63259.08871630163!2d80.33469147578122!3d7.488056299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae33a25d233e50d%3A0xc3b8de4e073c6838!2sKurunegala!5e0!3m2!1sen!2slk!4v1716980004000!5m2!1sen!2slk",
      directions: "https://maps.google.com/?q=Kurunegala,+Sri+Lanka"
    },
    hatton: {
      title: "Hatton",
      subtitle: "Golden Asia Micro Credit Hatton Regional Branch",
      badge: "Regional Branch",
      address: "No. 56, Dunbar Road, Hatton",
      phone: "+94 51 222 4567",
      phoneLink: "tel:+94512224567",
      email: "hatton@goldenasia.lk",
      emailLink: "mailto:hatton@goldenasia.lk",
      hours: "Mon – Sat: 8:00 AM – 5:30 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15839.810574044154!2d80.58988455541991!3d6.989781699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae38392176d655f%3A0xe5a33c2a6321481d!2sHatton!5e0!3m2!1sen!2slk!4v1716980005000!5m2!1sen!2slk",
      directions: "https://maps.google.com/?q=Hatton,+Sri+Lanka"
    },
    matale: {
      title: "Matale",
      subtitle: "Golden Asia Micro Credit Matale Regional Branch",
      badge: "Regional Branch",
      address: "No. 74, Trincomalee Street, Matale",
      phone: "+94 66 222 3456",
      phoneLink: "tel:+94662223456",
      email: "matale@goldenasia.lk",
      emailLink: "mailto:matale@goldenasia.lk",
      hours: "Mon – Sat: 8:00 AM – 6:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.535626245946!2d80.62145951477894!3d7.469733494611599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae34237f3747d79%3A0xa64b8be92383be99!2sMatale!5e0!3m2!1sen!2slk!4v1716980006000!5m2!1sen!2slk",
      directions: "https://maps.google.com/?q=Matale,+Sri+Lanka"
    },
    walapane: {
      title: "Walapane",
      subtitle: "Golden Asia Micro Credit Walapane Regional Branch",
      badge: "Regional Branch",
      address: "No. 18, Keerthibandara Road, Walapane",
      phone: "+94 52 227 8901",
      phoneLink: "tel:+94522278901",
      email: "walapane@goldenasia.lk",
      emailLink: "mailto:walapane@goldenasia.lk",
      hours: "Mon – Sat: 8:00 AM – 5:30 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15836.435882655513!2d80.85244585541991!3d7.098254899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae37fb47a1ec6db%3A0xc66cd7e7c4f4b16!2sWalapane!5e0!3m2!1sen!2slk!4v1716980007000!5m2!1sen!2slk",
      directions: "https://maps.google.com/?q=Walapane,+Sri+Lanka"
    },
    welimada: {
      title: "Welimada",
      subtitle: "Golden Asia Micro Credit Welimada Regional Branch",
      badge: "Regional Branch",
      address: "No. 32, Badulla Road, Welimada",
      phone: "+94 57 224 5678",
      phoneLink: "tel:+94572245678",
      email: "welimada@goldenasia.lk",
      emailLink: "mailto:welimada@goldenasia.lk",
      hours: "Mon – Sat: 8:00 AM – 6:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15839.290886749976!2d80.89244585541991!3d7.0017548999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae38ec01b87612f%3A0x6b44a49688df74ba!2sWelimada!5e0!3m2!1sen!2slk!4v1716980008000!5m2!1sen!2slk",
      directions: "https://maps.google.com/?q=Welimada,+Sri+Lanka"
    },
    ruwanwella: {
      title: "Ruwanwella",
      subtitle: "Golden Asia Micro Credit Ruwanwella Regional Branch",
      badge: "Regional Branch",
      address: "No. 22, Kegalle Road, Ruwanwella",
      phone: "+94 36 226 7890",
      phoneLink: "tel:+94362267890",
      email: "ruwanwella@goldenasia.lk",
      emailLink: "mailto:ruwanwella@goldenasia.lk",
      hours: "Mon – Sat: 8:00 AM – 6:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15837.756265778848!2d80.25244585541991!3d7.098254899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae30e2f5f1fbcdb%3A0xe5a33c2a6321481d!2sRuwanwella!5e0!3m2!1sen!2slk!4v1716980009000!5m2!1sen!2slk",
      directions: "https://maps.google.com/?q=Ruwanwella,+Sri+Lanka"
    },
    nuwaraeliya: {
      title: "Nuwara Eliya",
      subtitle: "Golden Asia Micro Credit Nuwara Eliya Regional Branch",
      badge: "Regional Branch",
      address: "No. 94, Kandy Road, Nuwara Eliya",
      phone: "+94 52 222 3456",
      phoneLink: "tel:+94522223456",
      email: "nuwaraeliya@goldenasia.lk",
      emailLink: "mailto:nuwaraeliya@goldenasia.lk",
      hours: "Mon – Sat: 8:00 AM – 6:30 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15840.407981577457!2d80.7675685554199!3d6.974915699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae380e227ea6e73%3A0x6b44a49688df74ba!2sNuwara%20Eliya!5e0!3m2!1sen!2slk!4v1716980010000!5m2!1sen!2slk",
      directions: "https://maps.google.com/?q=Nuwara+Eliya,+Sri+Lanka"
    }
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
        branchBadge.innerHTML = data.badge === "Regional Branch" 
          ? "<i class='bi bi-geo-alt-fill'></i> Regional Office"
          : data.badge;
      }
      
      if (branchAddress) branchAddress.textContent = data.address;
      if (branchPhone) branchPhone.innerHTML = `<a href="${data.phoneLink}">${data.phone}</a>`;
      if (branchEmail) branchEmail.innerHTML = `<a href="${data.emailLink}">${data.email}</a>`;
      if (branchHours) branchHours.textContent = data.hours;
      if (branchDirections) branchDirections.href = data.directions;

      // Update Active Button Classes
      selectorButtons.forEach(btn => {
        const isTarget = btn.getAttribute("data-branch") === branchKey;
        btn.classList.toggle("active", isTarget);
        
        // Update button sub-icon
        const icon = btn.querySelector("i");
        if (icon) {
          icon.className = isTarget ? "bi bi-geo-alt-fill" : "bi bi-geo-alt";
        }
      });

      // Update Active Navigation classes (if matching)
      document.querySelectorAll(".branch-nav-link").forEach(link => {
        link.classList.toggle("active", link.getAttribute("data-branch") === branchKey);
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
  selectorButtons.forEach(button => {
    button.addEventListener("click", () => {
      const key = button.getAttribute("data-branch");
      switchBranch(key);
    });
  });

  // Hook navigation dropdown & footer links
  document.querySelectorAll(".branch-nav-link").forEach(link => {
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

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filterValue = button.getAttribute("data-filter");

      // Set active class
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter job cards
      jobCards.forEach(card => {
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
  const careerApplicationForm = document.getElementById("careerApplicationForm");
  
  const modalLoading = document.getElementById("modalLoading");
  const modalError = document.getElementById("modalError");
  const modalSuccess = document.getElementById("modalSuccess");

  const fileInput = document.getElementById("applicantResume");
  const cvUploader = document.getElementById("cvUploader");
  const uploadStatusText = document.getElementById("uploadStatusText");

  // Open modal
  document.querySelectorAll(".job-apply-btn").forEach(btn => {
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
          if (selectElement.options[i].value.toLowerCase() === primaryLoc.toLowerCase()) {
            selectElement.selectedIndex = i;
            break;
          }
        }
      }

      // Reset form states
      if (careerApplicationForm) careerApplicationForm.reset();
      if (uploadStatusText) uploadStatusText.textContent = "Click to select or drag your CV here";
      if (cvUploader) cvUploader.style.borderColor = "rgba(255, 255, 255, 0.15)";
      
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
        if (uploadStatusText) uploadStatusText.textContent = `Attached: ${filename}`;
        if (cvUploader) cvUploader.style.borderColor = "var(--accent-color)";
      } else {
        if (uploadStatusText) uploadStatusText.textContent = "Click to select or drag your CV here";
        if (cvUploader) cvUploader.style.borderColor = "rgba(255, 255, 255, 0.15)";
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