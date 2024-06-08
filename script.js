const titles = document.querySelectorAll("span");
const down = document.getElementById("down");
const loader = document.getElementById("loader");
const loaderTitle = document.querySelectorAll(".p-title");

function animate() {
  let tl = gsap.timeline({
    defaults: {
      ease: "expo.inOut", // Smoother easing
      duration: 1,
    },
  });

  tl.to(titles, {
    y: 0,
    stagger: 0.3,
    opacity: 1,
    scale: 1,
  })
    .to(down, {
      y: 0,
    })
    .to(
      loader,
      {
        height: "20vh",
        backgroundColor: "#F1F1F1",
      },
      "-=.5"
    )
    .to(titles, {
      y: 100,
    })
    .to(
      down,
      {
        y: -100,
      },
      "-=1"
    )
    .to(
      loader,
      {
        width: "100%",
      },
      "-=.5"
    )
    .to(
      loaderTitle,
      {
        y: 0,
        stagger: 0.3,
        opacity: 1,
      },
      "-=.5"
    )
    .to(loaderTitle, {
      delay: 1,
      y: -100,
      stagger: 0.3,
      opacity: 0,
    })
    .to(loader, {
      width: "100%",
    })
    .to(
      loader,
      {
        height: "100%",
      },
      "-=.9"
    );
}

document.addEventListener("DOMContentLoaded", animate);
