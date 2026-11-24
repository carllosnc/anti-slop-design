(function () {
  "use strict";

  var status = document.getElementById("copy-status");
  var resetTimers = new WeakMap();

  function announce(message) {
    if (!status) return;
    status.textContent = "";
    window.setTimeout(function () {
      status.textContent = message;
    }, 40);
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }

    return new Promise(function (resolve, reject) {
      var field = document.createElement("textarea");
      field.value = text;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();

      try {
        var ok = document.execCommand("copy");
        document.body.removeChild(field);
        ok ? resolve() : reject(new Error("Copy failed"));
      } catch (error) {
        document.body.removeChild(field);
        reject(error);
      }
    });
  }

  document.querySelectorAll("[data-copy]").forEach(function (button) {
    button.addEventListener("click", function () {
      var text = button.getAttribute("data-copy");
      var original = button.dataset.label || button.textContent;
      var cmd = button.closest(".cmd");
      button.dataset.label = original;

      copyText(text)
        .then(function () {
          button.textContent = "Copied";
          button.dataset.copied = "true";
          if (cmd) cmd.dataset.copied = "true";
          announce("Command copied to clipboard");
        })
        .catch(function () {
          button.textContent = "Select and copy";
          announce("Copy failed. Select the command and copy it manually.");
        })
        .finally(function () {
          window.clearTimeout(resetTimers.get(button));
          resetTimers.set(
            button,
            window.setTimeout(function () {
              button.textContent = original;
              delete button.dataset.copied;
              if (cmd) delete cmd.dataset.copied;
            }, 2000)
          );
        });
    });
  });

  document.querySelectorAll(".cmd code").forEach(function (codeEl) {
    codeEl.addEventListener("click", function () {
      var selection = window.getSelection();
      if (!selection || !selection.isCollapsed) return;
      var range = document.createRange();
      range.selectNodeContents(codeEl);
      selection.removeAllRanges();
      selection.addRange(range);
    });
  });

  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll('.site-nav a[href^="#"]')
  );
  var sections = navLinks
    .map(function (link) {
      var target = document.querySelector(link.getAttribute("href"));
      return target ? { id: target.id, el: target, link: link } : null;
    })
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    var visible = new Map();

    function updateCurrent() {
      var activeId = null;
      sections.forEach(function (item) {
        if (!activeId && visible.get(item.id)) {
          activeId = item.id;
        }
      });

      navLinks.forEach(function (link) {
        if (activeId && link.getAttribute("href") === "#" + activeId) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          visible.set(entry.target.id, entry.isIntersecting);
        });
        updateCurrent();
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );

    sections.forEach(function (item) {
      observer.observe(item.el);
    });
  }
})();
