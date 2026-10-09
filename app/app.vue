<template>
  <div class="site_wrapper">
    <!-- ================= FIXED LEFT VERTICAL SIDEBAR ================= -->
    <aside class="side_menu_v1">
      <div class="top">
        <div class="side_navbar_togglers" @click="isDrawerOpen = true" title="Open Navigation Menu">
          <svg width="34" height="24" viewBox="0 0 38 25" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M0 1.56C0 0.7 0.7 0 1.56 0H31.94C32.8 0 33.5 0.7 33.5 1.56C33.5 2.42 32.8 3.12 31.94 3.12H1.56C0.7 3.12 0 2.42 0 1.56ZM0 12.5C0 11.64 0.7 10.94 1.56 10.94H35.94C36.8 10.94 37.5 11.64 37.5 12.5C37.5 13.36 36.8 14.06 35.94 14.06H1.56C0.7 14.06 0 13.36 0 12.5ZM0 23.44C0 22.58 0.7 21.88 1.56 21.88H25.94C26.8 21.88 27.5 22.58 27.5 23.44C27.5 24.3 26.8 25 25.94 25H1.56C0.7 25 0 24.3 0 23.44Z"
              fill="#e5a922" />
          </svg>
          <span>Menu</span>
        </div>

        <button class="side_icon_btn" @click="isSearchOpen = true" title="Search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>

        <button class="side_icon_btn" @click="isDrawerOpen = true" title="Quick Contact">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
        </button>
      </div>

      <div class="social-icons">
        <ul>
          <li>
            <a href="https://web.facebook.com/profile.php?id=100078070537853" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://instagram.com/solareclipse_360" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </li>
          <li>
            <a href="tel:+27796245378" aria-label="Phone">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="mailto:info@solar-eclipse.co.za" aria-label="Email">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div class="button_box">
        <a href="#calculator" class="vertical_quote_btn">
          <span class="vertical_text_1">Get A Quote</span>
          <svg width="10" height="38" viewBox="0 0 8 41" fill="none">
            <path d="M3.65 40.35C3.85 40.55 4.15 40.55 4.35 40.35L7.54 37.17C7.73 36.98 7.73 36.66 7.54 36.46C7.34 36.27 7.02 36.27 6.83 36.46L4 39.29L1.17 36.46C0.98 36.27 0.66 36.27 0.46 36.46C0.27 36.66 0.27 36.98 0.46 37.17L3.65 40.35ZM3.5 0L3.5 40H4.5L4.5 0H3.5Z" fill="#e5a922" />
          </svg>
        </a>
      </div>
    </aside>

    <!-- ================= SLIDE-OUT DRAWER MENU ================= -->
    <div :class="['sdmenu_overlay', { active: isDrawerOpen }]" @click="isDrawerOpen = false"></div>
    <div :class="['menu_open_sidely', { active: isDrawerOpen }]">
      <div class="side_navbar_togglers_close" @click="isDrawerOpen = false" title="Close Menu">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>

      <div class="logo_box" style="margin-bottom: 24px;">
        <a href="#" style="color: #ffffff; display: flex; align-items: center; gap: 12px;">
          <img :src="img('/images/solar_eclipse_icon.png')" alt="Solar Eclipse" width="44" height="44" class="logo_eclipse_img" />
          <div class="logo_text_brand">
            <span class="logo_title" style="color: #fff; font-size: 24px;">Solar <span style="color: #ffc600;">Eclipse</span></span>
            <span class="logo_sub" style="color: #ffc600; display: block; font-size: 11px; letter-spacing: 1px;">Reliable Green Power</span>
          </div>
        </a>
      </div>

      <ul class="drawer_nav_list">
        <li><a href="#home" @click="isDrawerOpen = false">Home</a></li>
        <li><a href="#about" @click="isDrawerOpen = false">About Solar Eclipse</a></li>
        <li><a href="#features" @click="isDrawerOpen = false">Key Features</a></li>
        <li><a href="#services" @click="isDrawerOpen = false">Our Services</a></li>
        <li><a href="#why-us" @click="isDrawerOpen = false">Why Choose Us</a></li>
        <li><a href="#calculator" @click="isDrawerOpen = false">Solar Calculator</a></li>
        <li><a href="#brands" @click="isDrawerOpen = false">Solar Brands</a></li>
        <li><a href="#footer" @click="isDrawerOpen = false">Contact Us</a></li>
      </ul>

      <div class="drawer_quick_form">
        <h3>Request Solar Assessment</h3>
        <p style="color: rgba(255,255,255,0.7); font-size: 13px; margin-bottom: 16px;">
          Speak with our certified engineers to evaluate your property's load requirements.
        </p>
        <form @submit.prevent="handleQuickContact">
          <input type="text" v-model="quickForm.name" placeholder="Full Name (*)" required />
          <input type="tel" v-model="quickForm.phone" placeholder="Phone Number (*)" required />
          <input type="email" v-model="quickForm.email" placeholder="Email Address (*)" required />
          <textarea v-model="quickForm.message" rows="3" placeholder="Describe your power needs (e.g. 8kW hybrid system, load shedding backup)"></textarea>
          <button type="submit" class="theme_btn" style="width: 100%; border: none;">
            Send Inquiry
          </button>
        </form>
      </div>
    </div>

    <!-- ================= TOP HEADER AREA ================= -->
    <header class="header_area" id="home">
      <div class="header_content_wrapper">
        <!-- Logo -->
        <div class="logo_box">
          <a href="#" title="Solar Eclipse - Reliable Green Power">
            <img :src="img('/images/solar_eclipse_logo_blue.png')" alt="Solar Eclipse" class="logo_eclipse_full_img" />
          </a>
        </div>

        <!-- Contact group -->
        <div class="header_contact_group">
          <div class="contact_header_one">
            <div class="icon_s">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div class="content">
              <span class="tite">Our Location</span>
              <div class="title_val">Gauteng & Nationwide, SA</div>
            </div>
          </div>

          <div class="contact_header_one">
            <div class="icon_s">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div class="content">
              <span class="tite">Email Us</span>
              <div class="title_val">info@solar-eclipse.co.za</div>
            </div>
          </div>

          <div class="contact_header_one">
            <div class="icon_s">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div class="content">
              <span class="tite">Call Us Today</span>
              <div class="title_val">+27 79 624 5378</div>
            </div>
          </div>
        </div>

        <!-- Header Right Action -->
        <div class="header_right_actions">
          <a href="#calculator" class="theme_btn header_contact_btn">
            Get A Quote
            <span class="arrow-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </span>
          </a>

          <button class="mobile_nav_btn" @click="isDrawerOpen = true" aria-label="Toggle Navigation">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- ================= HERO SLIDER SECTION ================= -->
    <section
      class="hero_slider_section"
      @mouseenter="pauseAutoplay"
      @mouseleave="resumeAutoplay"
      tabindex="0"
      @keydown.left="prevSlide"
      @keydown.right="nextSlide"
    >
      <div class="hero_slides_wrapper">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          :class="['hero_slide', { active: currentSlide === index }]"
        >
          <div class="hero_slide_bg" :style="{ backgroundImage: `url(${img(slide.image)})` }"></div>
          <div class="hero_slide_overlay"></div>
          <div class="container hero_slide_container">
            <div class="hero_slide_content">
              <span class="hero_subtitle">{{ slide.subtitle }}</span>
              <h1 class="hero_title">{{ slide.title }}</h1>
              <p class="hero_desc" v-if="slide.desc">{{ slide.desc }}</p>
              <div class="hero_btn_wrapper">
                <a :href="slide.link" class="theme_btn hero_cta_btn">
                  {{ slide.btnText }}
                  <span class="arrow-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Slider Arrows -->
      <button class="slider_arrow prev" @click="prevSlide" aria-label="Previous Slide">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button class="slider_arrow next" @click="nextSlide" aria-label="Next Slide">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      <!-- Slider Dots -->
      <div class="slider_dots">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          :class="['slider_dot', { active: currentSlide === index }]"
          @click="goToSlide(index)"
          :aria-label="`Go to slide ${index + 1}`"
        ></button>
      </div>

      <!-- Slide Timer Progress Bar -->
      <div class="slider_progress_bar">
        <div class="slider_progress_fill" :key="currentSlide" :class="{ paused: isPaused }"></div>
      </div>
    </section>

    <!-- ================= ABOUT SECTION ================= -->
    <section class="about_section" id="about">
      <div class="container">
        <div class="about_grid">
          <!-- Col 1: Text & Checklist -->
          <div class="about_content">
            <div class="section_title">
              <h6 class="sm_title">Welcome to Solar Eclipse</h6>
              <h2 class="title">Solutions & Specialists in Reliable Green Power</h2>
            </div>
            <p>
              At <strong>Solar Eclipse</strong> we offer a full range of solutions in backup, hybrid, grid-tied or off-grid systems. Our team of highly skilled Engineers and Electricians will ensure that your solar investment meets all your residential or commercial energy needs.
            </p>
            <p style="margin-top: 12px; color: var(--text-muted); font-size: 15px;">
              Solar power is becoming increasingly essential across South Africa where access to the electricity grid is unstable. With escalating Eskom electricity tariffs and load shedding, our sustainable installations grant you complete energy independence.
            </p>
            <ul class="about_checklist">
              <li>
                <span class="check_icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Customizable & Sustainable Clean Power Systems</span>
              </li>
              <li>
                <span class="check_icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Highly Skilled Engineers & Electricians (Full SANS COC Compliance)</span>
              </li>
              <li>
                <span class="check_icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>Complete Protection from Load Shedding & Grid Instability</span>
              </li>
            </ul>
            <a href="#services" class="theme_btn">
              Explore Our Solutions
              <span class="arrow-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </a>
          </div>

          <!-- Col 2: Video Card with badge -->
          <div class="about_video_card">
            <img :src="img('/images/solutions-specialists-reliable-green-power.jpg')" alt="Solutions Specialists in Reliable Green Power" />
            <button class="video_play_btn" @click="openVideo('RN81h85V6D4')" aria-label="Play Video">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="6 4 20 12 6 20 6 4"></polygon>
              </svg>
            </button>
            <div class="about_exp_badge">
              <div class="years">10+</div>
              <div class="text">Years Of Solar Expertise</div>
            </div>
          </div>

          <!-- Col 3: Fun Facts -->
          <div class="fun_facts_column">
            <div class="fun_fact_item">
              <h4>1,250+</h4>
              <div class="title_fact">Completed Solar Installations</div>
            </div>
            <div class="fun_fact_item">
              <h4>100%</h4>
              <div class="title_fact">Load Shedding Protection</div>
            </div>
            <div class="fun_fact_item">
              <h4>14+</h4>
              <div class="title_fact">Tier-1 Global Solar Brands</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= WHAT WE OFFER (FEATURES CAROUSEL) ================= -->
    <section class="features_section" id="features">
      <div class="container">
        <div class="features_header_row">
          <div class="section_title" style="margin-bottom: 0;">
            <h6 class="sm_title">What We Offer</h6>
            <h2 class="title">Key Features Of Our Solar Power Solutions</h2>
          </div>
          <p style="color: var(--text-muted); font-size: 17px;">
            We deliver our solar value proposition through practical and innovative techniques whilst ensuring clean, affordable energy through professional and seamless installations.
          </p>
        </div>

        <div class="features_grid">
          <div
            v-for="(feature, idx) in features"
            :key="idx"
            class="feature_card"
          >
            <div class="feature_image_wrap">
              <img :src="img(feature.image)" :alt="feature.title" />
              <div class="feature_icon_badge">
                <svg v-if="feature.iconType === 'bolt'" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
                <svg v-else-if="feature.iconType === 'shield'" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <svg v-else width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
            </div>
            <div class="feature_body">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.desc }}</p>
              <a href="#services" class="feature_arrow_link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= POPULAR SERVICES (DARK SECTION) ================= -->
    <section class="services_dark_section" id="services">
      <div class="services_bg_overlay" :style="{ backgroundImage: `url(${img('/images/service-bg.jpg')})` }"></div>
      <div class="container" style="position: relative; z-index: 3;">
        <div class="section_title light center">
          <h6 class="sm_title">Our Services</h6>
          <h2 class="title">Solutions &gt; Installations &gt; Audits</h2>
        </div>

        <div class="services_grid">
          <div
            v-for="service in filteredServices"
            :key="service.id"
            class="service_dark_card"
          >
            <div>
              <div class="service_card_top">
                <div class="service_icon_wrap">
                  <!-- 01: Load Shedding / Inverter Backup -->
                  <svg v-if="service.id === 1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect>
                    <line x1="22" y1="11" x2="22" y2="13"></line>
                    <polygon points="10 9 7 13 10 13 9 16 13 12 10 12 10 9" fill="currentColor"></polygon>
                  </svg>
                  <!-- 02: Hybrid Solar Installations -->
                  <svg v-else-if="service.id === 2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
                  </svg>
                  <!-- 03: Residential Solar Systems -->
                  <svg v-else-if="service.id === 3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  <!-- 04: Commercial Grid-Tied Systems -->
                  <svg v-else-if="service.id === 4" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                    <line x1="9" y1="6" x2="9" y2="6.01"></line>
                    <line x1="15" y1="6" x2="15" y2="6.01"></line>
                    <line x1="9" y1="10" x2="9" y2="10.01"></line>
                    <line x1="15" y1="10" x2="15" y2="10.01"></line>
                    <line x1="9" y1="14" x2="9" y2="14.01"></line>
                    <line x1="15" y1="14" x2="15" y2="14.01"></line>
                    <path d="M10 22v-4h4v4"></path>
                  </svg>
                  <!-- 05: Off-Grid Solar Installations -->
                  <svg v-else-if="service.id === 5" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                  </svg>
                  <!-- 06: Energy Analysis & Audits -->
                  <svg v-else-if="service.id === 6" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                  <!-- 07: Battery Storage Upgrades -->
                  <svg v-else-if="service.id === 7" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect>
                    <line x1="22" y1="11" x2="22" y2="13"></line>
                    <line x1="6" y1="12" x2="10" y2="12"></line>
                    <line x1="12" y1="12" x2="14" y2="12"></line>
                  </svg>
                  <!-- 08: Maintenance & COC Certification -->
                  <svg v-else width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <span class="service_step_num">0{{ service.id }}</span>
              </div>
              <h4>{{ service.title }}</h4>
              <div class="service_divider"></div>
              <p>{{ service.desc }}</p>
            </div>
            <div>
              <a href="#calculator" class="service_read_more">
                Request Sizing
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div style="text-align: center; margin-top: 50px;">
          <button
            class="theme_btn btn-white-outline"
            @click="showAllServices = !showAllServices"
          >
            {{ showAllServices ? 'Show Fewer Services' : 'Explore All Services' }}
          </button>
        </div>
      </div>
    </section>

    <!-- ================= CALLOUT ACTION BAR ================= -->
    <section class="claim_cta_section">
      <div class="container">
        <div class="claim_cta_wrap">
          <div class="claim_cta_content">
            <img :src="img('/images/call-1.png')" alt="Solar Specialist" class="claim_cta_thumb" />
            <h2 class="claim_cta_title">
              Ready to eliminate load shedding and slash rising electricity tariffs?
            </h2>
          </div>
          <a href="tel:+27796245378" class="theme_btn btn-white-outline">
            Speak to a Solar Engineer
            <span class="arrow-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>



    <!-- ================= WHY CHOOSE US ================= -->
    <section class="choose_us_section" id="why-us">
      <div class="container">
        <div class="choose_grid">
          <!-- Left Promo Banner -->
          <div class="choose_banner_box">
            <img :src="img('/images/choose-us.jpg')" alt="Solar Eclipse South Africa" />
            <div class="choose_banner_overlay">
              <h3>Reliable Green Power for South African Homes & Businesses</h3>
              <p style="margin-bottom: 20px; font-size: 15px; opacity: 0.9;">
                At Solar Eclipse we are passionate about our clients' needs and our primary objective is to offer renewable energy solutions that are customizable, sustainable, and reliable.
              </p>
              <a href="#calculator" class="theme_btn">
                Discover Solutions
                <span class="arrow-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </span>
              </a>
            </div>
          </div>

          <!-- Right Feature Cards -->
          <div>
            <div class="section_title">
              <h6 class="sm_title">Our Mission & Values</h6>
              <h2 class="title">Why Clients Trust Solar Eclipse</h2>
            </div>
            <div class="choose_features_list">
              <div class="choose_feat_item">
                <div class="choose_feat_icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <div class="choose_feat_info">
                  <h4>Tailored To Your Exact Needs</h4>
                  <p>We listen closely to our clients and engineer our offerings based on your actual consumption profiles, roof orientation, and future power plans.</p>
                </div>
              </div>

              <div class="choose_feat_item">
                <div class="choose_feat_icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                  </svg>
                </div>
                <div class="choose_feat_info">
                  <h4>Passionate About Renewable Energy</h4>
                  <p>Dedicated to providing superior service and support while helping South Africans save money, gain energy independence, and go green.</p>
                </div>
              </div>

              <div class="choose_feat_item">
                <div class="choose_feat_icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="8" r="6"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <div class="choose_feat_info">
                  <h4>Cutting-Edge Tier-1 Hardware</h4>
                  <p>We only supply and install globally proven inverters, Tier-1 solar panels, and lithium batteries from top certified manufacturers with full warranties.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= QUOTE CALCULATOR & SIZING ================= -->
    <section class="quote_calculator_section" id="calculator" :style="{ backgroundImage: `url(${img('/images/form-bg.jpg')})` }">
      <div class="container">
        <div class="quote_calc_grid">
          <!-- Left Form Box -->
          <div class="quote_box_wrapper">
            <div class="section_title" style="margin-bottom: 25px;">
              <h6 class="sm_title">Solar System Sizing</h6>
              <h2 class="title" style="font-size: 34px;">Calculate Your Solar & Battery System</h2>
            </div>

            <!-- Tab Buttons -->
            <div class="calc_tabs_nav">
              <button
                v-for="tab in quoteTabs"
                :key="tab"
                :class="['calc_tab_btn', { active: activeQuoteTab === tab }]"
                @click="activeQuoteTab = tab"
              >
                {{ tab }}
              </button>
            </div>

            <!-- Form -->
            <form @submit.prevent="submitQuoteForm">
              <div class="quote_form_fields">
                <div class="form_group">
                  <label>First Name *</label>
                  <input type="text" v-model="quoteForm.firstName" placeholder="e.g. Johan" required />
                </div>
                <div class="form_group">
                  <label>Last Name *</label>
                  <input type="text" v-model="quoteForm.lastName" placeholder="e.g. Van der Merwe" required />
                </div>
                <div class="form_group">
                  <label>Phone Number *</label>
                  <input type="tel" v-model="quoteForm.phone" placeholder="+27 82 123 4567" required />
                </div>
                <div class="form_group">
                  <label>Email Address *</label>
                  <input type="email" v-model="quoteForm.email" placeholder="client@example.co.za" required />
                </div>

                <!-- Slider Calculator -->
                <div class="form_group full_width">
                  <div class="slider_calc_box">
                    <div class="slider_calc_header">
                      <label style="margin-bottom: 0;">Inverter & Solar Capacity:</label>
                      <span class="slider_calc_val">{{ systemCapacity }} kW System</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="30"
                      step="1"
                      v-model="systemCapacity"
                    />
                    <div class="estimated_premium_badge">
                      <span>Recommended Battery Storage:</span>
                      <strong>{{ batteryStorageKwh }} kWh LiFePO4</strong>
                    </div>
                    <div class="estimated_premium_badge" style="border-top: none; margin-top: 6px; padding-top: 0;">
                      <span>Estimated Monthly Tariff Savings:</span>
                      <strong style="color: #223d65;">Up to R{{ formatNumber(estimatedMonthlySavings) }} / mo</strong>
                    </div>
                  </div>
                </div>

                <div class="form_group full_width" style="margin-top: 10px;">
                  <button type="submit" class="theme_btn" style="width: 100%;">
                    Request Custom Solar Quote
                    <span class="arrow-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    



    

        <!-- ================= SOLAR BRANDS PARTNER SECTION ================= -->
    <section class="clients_section" id="brands">
      <div class="container">
        <div class="section_title center" style="margin-bottom: 40px;">
          <h6 class="sm_title">Tier-1 Hardware</h6>
          <h2 class="title" style="font-size: 32px;">We Supply & Install The Best Solar Brands</h2>
          <p style="color: var(--text-muted); max-width: 700px; margin: 12px auto 0;">
            We partner with industry-leading manufacturers of hybrid inverters, Tier-1 solar panels, and high-cycle lithium batteries for maximum reliability.
          </p>
        </div>

        <div class="solar_brands_grid">
          <div v-for="(brand, bIdx) in solarBrands" :key="bIdx" class="solar_brand_card">
            <div class="brand_logo_wrap">
              <img :src="img(brand.logo)" :alt="brand.name" class="brand_logo_img" />
            </div>
            <div class="brand_name">{{ brand.name }}</div>
            <div class="brand_type">{{ brand.category }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= PRE-FOOTER CTA BOX ================= -->
    <div class="prefooter_cta_container">
      <div class="prefooter_cta_box">
        <div class="prefooter_cta_left">
          <h4>Stop Suffering Through Load Shedding</h4>
          <h2>Get a Free Energy Audit and System Recommendation Today</h2>
          <a href="#calculator" class="theme_btn prefooter_quote_btn">
            Request A Free Quote
            <span class="arrow-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </span>
          </a>
        </div>
        <div class="prefooter_cta_right">
          <div class="prefooter_call_box">
            <div class="prefooter_call_icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div class="prefooter_call_info">
              <span>Call Us Now:</span>
              <a href="tel:+27796245378" class="prefooter_call_num">+27 79 624 5378</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ================= FOOTER ================= -->
    <footer class="footer_area" id="footer" :style="{ backgroundImage: `url(${img('/images/footer-map.png')})` }">
      <div class="container">
        <div class="footer_main_grid">
          <!-- Col 1: Brand & Newsletter -->
          <div class="footer_col_brand">
            <a href="#" class="footer_logo" style="display: flex; align-items: center; gap: 12px;">
              <img :src="img('/images/solar_eclipse_icon.png')" alt="Solar Eclipse" width="38" height="38" />
              <span style="color: #fff; font-size: 24px; font-weight: 800;">Solar <span style="color: #ffc600;">Eclipse</span></span>
            </a>
            <p>
              At Solar Eclipse we offer a full range of solutions in backup, hybrid, grid-tied or off-grid systems and our team of highly skilled Engineers and Electricians will ensure that the system meets all your needs.
            </p>
            <form class="newsletter_form" @submit.prevent="handleNewsletter">
              <input type="email" v-model="newsletterEmail" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
            <div class="footer_social_links">
              <a href="https://web.facebook.com/profile.php?id=100078070537853" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://instagram.com/solareclipse_360" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="tel:+27796245378" aria-label="Call">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
              <a href="mailto:info@solar-eclipse.co.za" aria-label="Email">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>

          <!-- Col 2: Services Links -->
          <div>
            <h4 class="footer_widget_title">Our Solutions</h4>
            <div class="footer_services_list">
              <a href="#services"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><polyline points="9 18 15 12 9 6"></polyline></svg>Load Shedding Solutions</a>
              <a href="#services"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><polyline points="9 18 15 12 9 6"></polyline></svg>Hybrid Solar Installations</a>
              <a href="#services"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><polyline points="9 18 15 12 9 6"></polyline></svg>Off-Grid Solar Plants</a>
              <a href="#services"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><polyline points="9 18 15 12 9 6"></polyline></svg>Commercial Grid-Tied Systems</a>
              <a href="#services"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><polyline points="9 18 15 12 9 6"></polyline></svg>Energy Analysis & Audits</a>
              <a href="#services"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><polyline points="9 18 15 12 9 6"></polyline></svg>LiFePO4 Battery Storage</a>
              <a href="#services"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><polyline points="9 18 15 12 9 6"></polyline></svg>Maintenance & COC Sign-off</a>
            </div>
          </div>

          <!-- Col 3: Contact Details & Hours -->
          <div>
            <h4 class="footer_widget_title">Contact Information</h4>
            <div style="color: rgba(255,255,255,0.8); font-size: 14px; display: flex; flex-direction: column; gap: 14px; margin-top: 10px;">
              <div style="display: flex; gap: 12px; align-items: center;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffc600" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Gauteng & Nationwide, South Africa</span>
              </div>
              <div style="display: flex; gap: 12px; align-items: center;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffc600" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+27796245378" style="color: #fff; font-weight: 700;">+27 79 624 5378</a>
              </div>
              <div style="display: flex; gap: 12px; align-items: center;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffc600" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:info@solar-eclipse.co.za" style="color: #fff;">info@solar-eclipse.co.za</a>
              </div>
              <div style="display: flex; gap: 12px; align-items: center;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffc600" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>Mon - Fri: 08:00 - 17:00 | Sat: By Appt</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sub-Footer -->
      <div class="sub_footer">
        <div class="container">
          <div class="sub_footer_content">
            <div style="display: flex; align-items: center; gap: 8px;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffc600" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
              <span>Copyright © {{ new Date().getFullYear() }} Solar Eclipse. All Rights Reserved.</span>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffc600" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
              <span>Reliable Green Power for South Africa</span>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- ================= SEARCH MODAL ================= -->
    <div v-if="isSearchOpen" class="modal_backdrop" @click.self="isSearchOpen = false">
      <div class="modal_dialog search_modal_box">
        <button class="modal_close_btn" @click="isSearchOpen = false" aria-label="Close search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <h3>Search Solar Eclipse</h3>
        <p style="color: var(--text-muted); margin-bottom: 24px;">
          Find solar services, battery specs, audit calculators, and load shedding solutions.
        </p>
        <div class="search_input_wrap">
          <input type="text" v-model="searchQuery" placeholder="What are you searching for? (e.g. Sunsynk, 8kW Hybrid)" />
          <button class="theme_btn" @click="isSearchOpen = false">Search</button>
        </div>
      </div>
    </div>

    <!-- ================= VIDEO LIGHTBOX MODAL ================= -->
    <div v-if="activeVideoId" class="modal_backdrop" @click.self="activeVideoId = null">
      <div class="modal_dialog video_modal_dialog">
        <button class="modal_close_btn" style="color: #fff; background: rgba(0,0,0,0.5);" @click="activeVideoId = null" aria-label="Close video">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="video_wrapper">
          <iframe
            :src="`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const config = useRuntimeConfig();
const base = computed(() => (config.app?.baseURL || '/').replace(/\/$/, ''));
const img = (path) => `${base.value}${path.startsWith('/') ? path : '/' + path}`;

// Drawer & Modal States
const isDrawerOpen = ref(false);
const isSearchOpen = ref(false);
const activeVideoId = ref(null);
const searchQuery = ref('');
const newsletterEmail = ref('');

// Hero Slides using user-provided s1.jpg, s2.jpg, s3.jpg and authentic copy from solar-eclipse.co.za
const currentSlide = ref(0);
const isPaused = ref(false);
let autoplayTimer = null;

const slides = [
  {
    image: '/images/s1.jpg',
    subtitle: 'Reliable Green Power',
    title: 'Solutions & Specialists',
    desc: 'Turnkey solar installations designed and certified by expert engineers to power homes and commercial enterprises across South Africa.',
    btnText: 'Explore Solutions',
    link: '#services'
  },
  {
    image: '/images/s2.jpg',
    subtitle: 'Solar Eclipse South Africa',
    title: 'Load Shedding & Hybrid Solar Systems',
    desc: 'Uninterrupted power supply with high-efficiency hybrid inverters and premium lithium battery storage, keeping your essential power running 24/7.',
    btnText: 'Get A Quote',
    link: '#calculator'
  },
  {
    image: '/images/s3.jpg',
    subtitle: 'Customizable & Sustainable',
    title: 'Backup, Grid-Tied & Off-Grid Installations',
    desc: 'Slash escalating electricity tariffs and take full control of your energy with customized solar engineering and full SANS COC compliance.',
    btnText: 'Our Services',
    link: '#about'
  }
];

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
};

const goToSlide = (index) => {
  currentSlide.value = index;
  startAutoplay();
};

const startAutoplay = () => {
  stopAutoplay();
  autoplayTimer = setInterval(() => {
    if (!isPaused.value) {
      nextSlide();
    }
  }, 5500);
};

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
};

const pauseAutoplay = () => {
  isPaused.value = true;
};

const resumeAutoplay = () => {
  isPaused.value = false;
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});

// Features Carousel
const features = [
  {
    image: '/images/feat-1.jpg',
    iconType: 'bolt',
    title: 'Beat Load Shedding & Grid Instability',
    desc: 'Seamless backup power with ultra-fast switchover so your home appliances, internet, and business operations stay powered 24/7.'
  },
  {
    image: '/images/feat-2.jpg',
    iconType: 'shield',
    title: 'Engineered By Certified Electricians',
    desc: 'Every installation is executed by skilled engineers adhering strictly to SANS electrical regulations with full Certificate of Compliance (COC).'
  },
  {
    image: '/images/feat-3.jpg',
    iconType: 'savings',
    title: 'Slash Rising Electricity Tariffs',
    desc: 'Generate your own daytime energy and store excess solar power, dramatically lowering your monthly Eskom and municipal bills.'
  }
];

// Popular Services (from solar-eclipse.co.za)
const showAllServices = ref(false);
const servicesList = [
  {
    id: 1,
    title: 'Load Shedding Solutions',
    desc: 'Dedicated battery and inverter backup systems configured to power essential circuits and protect sensitive appliances during load shedding.'
  },
  {
    id: 2,
    title: 'Hybrid Solar Installations',
    desc: 'The gold standard in renewable power: combining high-efficiency solar panels, lithium battery storage, and smart hybrid inverters.'
  },
  {
    id: 3,
    title: 'Residential Solar Systems',
    desc: 'Turnkey home solar installations designed to keep families comfortable, secure, and immune to rising electricity tariffs.'
  },
  {
    id: 4,
    title: 'Commercial Grid-Tied Systems',
    desc: 'Engineered commercial solar arrays that slash operational overheads, offset peak daytime demand, and boost corporate sustainability.'
  },
  {
    id: 5,
    title: 'Off-Grid Solar Installations',
    desc: 'Complete standalone solar and energy storage systems designed for game farms, rural lodges, and off-grid agricultural operations.'
  },
  {
    id: 6,
    title: 'Energy Analysis & Audits',
    desc: 'Professional data-logging and comprehensive load profiling by our engineers to determine precise system sizing and maximum ROI.'
  },
  {
    id: 7,
    title: 'Battery Energy Storage Upgrades',
    desc: 'High-cycle LiFePO4 lithium battery expansions for existing inverter systems to extend runtime through extended outages.'
  },
  {
    id: 8,
    title: 'Maintenance & COC Certification',
    desc: 'Health inspections, solar panel cleaning, thermal imaging, warranty support, and authorized electrical Certificate of Compliance issuance.'
  }
];

const filteredServices = computed(() => {
  return showAllServices.value ? servicesList : servicesList.slice(0, 6);
});



// Solar System Sizing Calculator
const quoteTabs = ['Hybrid Solar', 'Backup Inverter', 'Commercial Grid-Tied', 'Off-Grid Farm'];
const activeQuoteTab = ref('Hybrid Solar');
const systemCapacity = ref(8); // in kW

const quoteForm = ref({
  firstName: '',
  lastName: '',
  phone: '',
  email: ''
});

const batteryStorageKwh = computed(() => {
  return Math.round(systemCapacity.value * 1.5);
});

const estimatedMonthlySavings = computed(() => {
  // Average SA tariff ~ R3.50/kWh, daily production ~ 4.8 sun hours/kW
  const monthlyUnits = systemCapacity.value * 4.8 * 30 * 0.8;
  return Math.round(monthlyUnits * 3.4);
});

const formatNumber = (num) => {
  return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const submitQuoteForm = () => {
  alert(`Thank you, ${quoteForm.value.firstName}! Your inquiry for an ${systemCapacity.value}kW system has been received. Our solar engineers will contact you at ${quoteForm.value.phone} / ${quoteForm.value.email} with a customized design.`);
  quoteForm.value.firstName = '';
  quoteForm.value.lastName = '';
  quoteForm.value.phone = '';
  quoteForm.value.email = '';
};

// Drawer Quick Form
const quickForm = ref({
  name: '',
  phone: '',
  email: '',
  message: ''
});

const handleQuickContact = () => {
  alert(`Thank you, ${quickForm.value.name}! Your request has been sent to Solar Eclipse. An engineer will reach out shortly.`);
  isDrawerOpen.value = false;
  quickForm.value = { name: '', phone: '', email: '', message: '' };
};

const handleNewsletter = () => {
  alert(`Thank you for subscribing with ${newsletterEmail.value}! You will receive our latest solar insights and tariff updates.`);
  newsletterEmail.value = '';
};

// Solar Brands from solar-eclipse.co.za
const solarBrands = [
  { name: 'Victron Energy', category: 'Inverters & Monitoring', logo: '/images/victron-logo1.jpg' },
  { name: 'Sunsynk', category: 'Smart Hybrid Inverters', logo: '/images/sun-logo1.jpg' },
  { name: 'Deye', category: 'Hybrid Inverters & Storage', logo: '/images/Deye-logo1.jpg' },
  { name: 'Freedom Won', category: 'LiFePO4 Energy Storage', logo: '/images/freedom-logo1.jpg' },
  { name: 'Pylontech', category: 'Lithium Battery Modules', logo: '/images/pylon-logo1.jpg' },
  { name: 'Canadian Solar', category: 'Tier-1 Solar Panels', logo: '/images/canadian-logo1.jpg' },
  { name: 'JA Solar', category: 'High-Efficiency PV', logo: '/images/ja-solar-logo1.jpg' },
  { name: 'Longi Solar', category: 'Monocrystalline Modules', logo: '/images/logni-logo1.jpg' },
  { name: 'GoodWe', category: 'Hybrid Inverter Solutions', logo: '/images/goodwe-logo1.jpg' },
  { name: 'Solax Power', category: 'Energy Storage Systems', logo: '/images/solax-logo1.jpg' },
  { name: 'Sofar Solar', category: 'Inverters & Storage', logo: '/images/sofar-logo.jpg' },
  { name: 'Shoto', category: 'Lithium & Gel Batteries', logo: '/images/shoto-logo1.jpg' },
  { name: 'Dyness', category: 'Lithium Battery Systems', logo: '/images/Dyness-logo1.jpg' },
  { name: 'Luxpower', category: 'Solar Inverters', logo: '/images/luxpower-logo1.jpg' }
];



const openVideo = (id) => {
  activeVideoId.value = id;
};
</script>

<style>
@import './assets/css/main.css';

/* Explicit mobile stacking for Solar Calculator Navigation Tabs */
@media screen and (max-width: 850px) {
  .calc_tabs_nav {
    flex-direction: column !important;
    border-radius: 14px !important;
    gap: 8px !important;
    padding: 8px !important;
    margin-bottom: 24px !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }

  .calc_tab_btn {
    width: 100% !important;
    flex: none !important;
    display: block !important;
    border-radius: 8px !important;
    padding: 13px 18px !important;
    font-size: 15px !important;
    text-align: center !important;
    line-height: 1.3 !important;
    white-space: normal !important;
    box-sizing: border-box !important;
  }
}
</style>
