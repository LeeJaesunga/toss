document.addEventListener("DOMContentLoaded", function () {
  const main3Target = document.querySelector("#main_3 .cons_stat");
  const main4Target = document.querySelector("#main_4 .kimtos");
  const main5Target = document.querySelector("#main_5 .Loans_star");
  const main6Target = document.querySelector("#main_6 .cred");
  const main7Target = document.querySelector("#main_7 .inves_star");
  const main9Target = document.querySelector("#main_9 .payment_text");
  const main10Target = document.querySelector("#main_10 .business_top");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const selectorMap = {
        "cons_stat": () => {
          document.querySelector("#main_3 .cons_stat h1").classList.add("show");
          document.querySelector("#main_3 .cons_stat h2").classList.add("show");
          document.querySelector("#main_3 .dadami2_text").classList.add("show");
          document.querySelector("#main_3 .pons").classList.add("show");
          document.querySelector("#main_3 .ponss").classList.add("show");
        },
        "kimtos": () => {
          document.querySelector("#main_4 .rem")?.classList.add("show");
          document.querySelector("#main_4 .kimtos")?.classList.add("show");
          document.querySelector("#main_4 .kimtos .kim")?.classList.add("show");
          document.querySelector("#main_4 .Kim_Sa_gi")?.classList.add("show");
        },
        "Loans_star": () => {
          document.querySelector("#main_5 .Loans_star")?.classList.add("show");
          document.querySelector("#main_5 .low_less p")?.classList.add("show");
          document.querySelectorAll("#main_5 .low_less .step").forEach(el => el.classList.add("show"));
        },
        "cred": () => {
          document.querySelector("#main_6 .cred")?.classList.add("show");
          document.querySelectorAll("#main_6 .full_credit").forEach(el => el.classList.add("show"));
        },
        "inves_star": () => {
          document.querySelector("#main_7 .inves_star")?.classList.add("show");
          document.querySelector("#main_7 .inv_text")?.classList.add("show");
          document.querySelector("#main_7 .inv_text1")?.classList.add("show");
        },
        "payment_text": () => {
          document.querySelector("#main_9 .payment_text")?.classList.add("show");

          document.querySelectorAll(".pornn2.fade-in, .pornn_text2.fade-in").forEach(el => el.classList.add("show"));
          document.querySelectorAll(".pornn1.fade-in2, .pornn_text1.fade-in2").forEach(el => el.classList.add("show"));

          document.querySelectorAll("#main_9 .pornn_inner").forEach(inner => {
            inner.querySelector(".pornn_inner2")?.classList.add("show");
            inner.querySelector("span")?.classList.add("show");
          });
        },
        "business_top": () => {
          document.querySelector("#main_10 .business_top")?.classList.add("show");
          document.querySelector("#main_10 .business_bottom")?.classList.add("show");
          document.querySelector("#main_10 .business_menus")?.classList.add("show");
        }
      };

      const targetClass = entry.target.classList[0];
      if (selectorMap[targetClass]) selectorMap[targetClass]();

      observer.unobserve(entry.target);
    });
  }, { threshold: 0.6 });

  [main3Target, main4Target, main5Target, main6Target, main7Target, main9Target, main10Target].forEach(el => observer.observe(el));

  // ✅ woman
  const woman = document.getElementById("woman");
  if (woman && window.innerWidth > 640) {
    const leftCover = woman.querySelector(".wtransform");
    const rightCover = woman.querySelector(".wtransform2");

    function updateWomanTransform() {
      const rect = woman.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const centerOffset = Math.abs((rect.top + rect.height / 2) - windowHeight / 2);
      let progress = 1 - centerOffset / windowHeight;
      progress = Math.max(0, Math.min(1, progress));

      const coverPercent = progress * 100;

      leftCover.style.transform = `translateX(-${coverPercent}%)`;
      rightCover.style.transform = `translateX(${coverPercent}%)`;

    }

    window.addEventListener("scroll", updateWomanTransform);
    window.addEventListener("resize", updateWomanTransform);
    updateWomanTransform();
  }

  // fade-in-up
  const fadeElements = document.querySelectorAll(".fade-in-up");
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, { threshold: 0.6 });

  fadeElements.forEach(el => fadeObserver.observe(el));
});