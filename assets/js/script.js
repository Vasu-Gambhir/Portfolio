/* AOS */
AOS.init({
  once: true,
});

/* Scroll to top on load */
$(document).ready(function () {
  $(this).scrollTop(0);
});

/* Hero loader */
$(window).on("load", function () {
  $("html").css({ "overflow-y": "scroll" });
  $("#loader").css({ right: "-150%" });
  $("#loader-extra-1").css({ right: "-150%" });
  $("#loader-extra-2").css({ right: "-150%" });
});

/* Hero type effect */
$(window).on("load", function () {
  setTimeout(function () {
    new Typed("#typed", {
      strings: [
        "A Web Developer",
        "A Software Developer",
        "A Roboticist",
        "An Engineering Student",
      ],
      typeSpeed: 75,
      backSpeed: 50,
      delaySpeed: 500,
      loop: true,
    });
  }, 1000);
});

/* Hero Particles */
particlesJS("particles-js", {
  particles: {
    number: { value: 100, density: { enable: !0, value_area: 1e3 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: !0,
      anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 },
    },
    size: {
      value: 3,
      random: !0,
      anim: { enable: !1, speed: 40, size_min: 0.1, sync: !1 },
    },
    line_linked: {
      enable: !1,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: !0,
      speed: 2,
      direction: "none",
      random: !1,
      straight: !1,
      out_mode: "out",
      attract: { enable: !1, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: !1, mode: "repulse" },
      onclick: { enable: !1, mode: "push" },
      resize: !0,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: !0,
  config_demo: {
    hide_card: !1,
    background_image: "../images/hero-bg.jpg",
    background_position: "50% 50%",
    background_repeat: "no-repeat",
    background_size: "cover",
  },
});

/* Navbar hamburger menu open */
$(".hamburger").on("click", function () {
  $(".hamburger").toggleClass("active");
  $(".menu-wrapper").toggleClass("visible");
  $(".menu").toggleClass("menu-active");
});

$(".menu li a").on("click", function () {
  $(".hamburger").removeClass("active");
  $(".menu-wrapper").removeClass("visible");
  $(".menu").removeClass("menu-active");
});

/* Navbar scrolled */
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-wrapper .menu-wrapper ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });
  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current + "-nav")) {
      li.classList.add("active");
    }
  });
};

/* Back to top button */
$(window).on("load", function () {
  if ($(window).scrollTop() > 100) {
    $(".back-to-top").addClass("active");
  } else {
    $(".back-to-top").removeClass("active");
  }
});
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 100) {
    $(".back-to-top").addClass("active");
  } else {
    $(".back-to-top").removeClass("active");
  }
});

/* Skill bar */
let isSetOnce = false;
$(window).on("load", function () {
  if (!isSetOnce && $(window).scrollTop() > $("#skillset").offset().top - 600) {
    isSetOnce = true;
    $("#skillset .skill-bars").addClass("active");

    $(".counting").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 2700,
          easing: "linear",
          step: function () {
            $this.text(Math.floor(this.countNum) + "%");
          },
          complete: function () {
            $this.text(this.countNum + "%");
          },
        }
      );
    });
  }
});

$(window).on("scroll", function () {
  if (!isSetOnce && $(window).scrollTop() > $("#skillset").offset().top - 600) {
    isSetOnce = true;
    $("#skillset .skill-bars").addClass("active");

    $(".counting").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 2700,
          easing: "linear",
          step: function () {
            $this.text(Math.floor(this.countNum) + "%");
          },
          complete: function () {
            $this.text(this.countNum + "%");
          },
        }
      );
    });
  }
});

/* Projects */
$(function () {
  $("#project-list > li").each(function () {
    $(this).hoverdir();
  });
});

/* Footer */
function validateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

$(".alert-danger button").click(function () {
  $(".alert-danger").hide();
});
$(".alert-warning button").click(function () {
  $(".alert-warning").hide();
});
$(".alert-success button").click(function () {
  $(".alert-success").hide();
});

function sendEmail() {
  let nameInput = $("#name");
  let emailInput = $("#email");
  let subjectInput = $("#subject");
  let messageInput = $("#message");
  let button = $(".submit");

  let name = nameInput.val();
  let email = emailInput.val();
  let title = subjectInput.val();
  let message = messageInput.val();

  if (name == "" || email == "" || title == "" || message == "") {
    $(".alert-danger").show();
    $(".alert-success").hide();
    $(".alert-warning").hide();
    return;
  }

  if (!validateEmail(email)) {
    $(".alert-danger").show();
    $(".alert-success").hide();
    $(".alert-warning").hide();
    return;
  }
  nameInput.prop("disabled", true);
  emailInput.prop("disabled", true);
  subjectInput.prop("disabled", true);
  messageInput.prop("disabled", true);
  button.prop("disabled", true).addClass("disabled");
  const templateParams = {
    name,
    email,
    title,
    message,
  };
  emailjs
    .send("service_w4izovm", "template_qc26yhp", templateParams)
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        if (response.status === 200) {
          $(".alert-success").show();
          $(".alert-danger").hide();
          $(".alert-warning").hide();

          nameInput.val("");
          emailInput.val("");
          subjectInput.val("");
          messageInput.val("");
        } else {
          $(".alert-warning").show();
          $(".alert-danger").hide();
          $(".alert-success").hide();
        }
      },
      (error) => {
        console.log("FAILED...", error);
      }
    )
    .finally(() => {
      // Re-enable inputs and button
      nameInput.prop("disabled", false);
      emailInput.prop("disabled", false);
      subjectInput.prop("disabled", false);
      messageInput.prop("disabled", false);
      button.prop("disabled", false).removeClass("disabled");
    });

  // Email.send({
  //   SecureToken: "c0d2eae6-34e2-4787-86f5-a6a0d78861e9",

  //   To: "vasugambhir15@gmail.com",
  //   From: "vasugambhir555@gmail.com",
  //   Subject: "Portfolio - new message from " + name,
  //   Body: body,
  // }).then((message) => {
  //   if (message == "OK") {
  //     $(".alert-success").show();
  //     $(".alert-danger").hide();
  //     $(".alert-warning").hide();
  //   } else {
  //     console.error(message);
  //     $(".alert-warning").show();
  //     $(".alert-danger").hide();
  //     $(".alert-success").hide();
  //   }
  // });
}

/* Getting year for footer */
document.getElementById("year").innerHTML = new Date().getFullYear();
