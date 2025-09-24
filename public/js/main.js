document.getElementById('currentYear').textContent = new Date().getFullYear();

// PARTIALS

// header.ejs - subscribe btns, newsletter input
document.addEventListener("DOMContentLoaded", () => {
  // Subscribe - nav
  const navSubscribeBtn = document.querySelector('[data-action="subscribe-nav"]');
  if (navSubscribeBtn) {
    navSubscribeBtn.addEventListener("click", () => {
      console.log("Nav Subscribe clicked");
      // TODO: Logic for nav subscribe modal / redirect
    });
  }

  // Subscribe - newsletter
  const newsletterBtn = document.querySelector('[data-action="subscribe-newsletter"]');
  const newsletterInput = document.getElementById("newsletterEmail");

  if (newsletterBtn && newsletterInput) {
    newsletterBtn.addEventListener("click", () => {
      const email = newsletterInput.value.trim();
      console.log("Newsletter Subscribe clicked:", email);
      // TODO: Logic for subscribing with email
    });
  }
});

// sidepane.ejs - 
// learn button
document.getElementById("btn-learn-more")?.addEventListener("click", () => {
  // TODO: navigate to teh about page
});

// Popular tags
document.querySelectorAll("[data-tag]").forEach(tag => {
  tag.addEventListener("click", () => {
    const topic = tag.dataset.tag;
    // TODO: filter articles by clicked topic and present on all-articles.ejs page
  });
});


// MAIN VIEWS
// HOME.EJS - herosection
document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("btn-start-reading");
  if (startBtn) {
    startBtn.addEventListener("click", (e) => {
      // TODO: add logic to scroll to #home-content-grid or all-artciles.ejs
    });
  }

  const learnBtn = document.getElementById("btn-learn-more");
  if (learnBtn) {
    learnBtn.addEventListener("click", (e) => {
      // TODO: add logic to open about.ejs
    });
  }
});

// main content
document.addEventListener("DOMContentLoaded", () => {
  // Handle article clicks
  document.querySelectorAll("[data-action='view-article']").forEach(article => {
    article.addEventListener("click", () => {
      const slug = article.dataset.slug;
      // TODO: Fetch view-article.ejs and inject article's content based on slug   
      // mapping below:
      /* 
        // Article Slug → Route/Object mapping
        const articleMap = {
        a8f9c3d1: "/articles/minimalist-design",         // The Art of Minimalist Design in Digital Products
        b7e4f2a9: "/articles/typography-that-speaks",    // Typography That Speaks Louder Than Words
        c3d9e1b7: "/articles/future-of-web-interfaces",  // The Future of Web Interfaces: Beyond the Screen
        d6f1a4c2: "/articles/digital-minimalism",        // Digital Minimalism: Finding Focus in a Noisy World
        e9b2f5d8: "/articles/color-psychology",          // Color Psychology in Design
        };
      */  
     
      // Then inside your existing event listeners, replace the console.log with lookups like this:
      /* 
        // Handle article clicks
        document.querySelectorAll("[data-action='view-article']").forEach(article => {
        article.addEventListener("click", () => {
            const slug = article.dataset.slug;
            const route = articleMap[slug];

            if (route) {
            // Example: redirect to article page
            window.location.href = route;

            // Or if you want to fetch data via API:
            // fetch(`/api${route}`)
            //   .then(res => res.json())
            //   .then(data => console.log(data));
            }
        });
        });

      */
      console.log("View article:", slug);
    });
  });

  // Handle bookmarks
  document.querySelectorAll("[data-action='bookmark']").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent triggering parent article click
      const slug = btn.dataset.slug;
      // TODO: Handle bookmark logic
      console.log("Bookmark article:", slug);
    });
  });

  // Handle "View More Articles"
  const viewMoreBtn = document.querySelector("[data-action='view-more']");
  if (viewMoreBtn) {
    viewMoreBtn.addEventListener("click", () => {
      // TODO: Redirect or fetch more
      // oniclck="window.location='/all-articles'"
      console.log("View more articles");
    });
  }
});