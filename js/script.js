const tl = gsap.timeline({
  id: "Timeline",
});

const colors = ["#9C9C9C", "#88ae52", "#FFFFFF"];

function tween(node) {
  let path = node;
  const delay = Math.random() * 1;
  const length = path.getTotalLength();
  colors.forEach((color, index) => {
    if (index !== 0) {
      path = path.cloneNode();
      node.parentNode.appendChild(path);
    }
    path.setAttribute("stroke", color);
    tl.set(
      path,
      {
        strokeDasharray: length + 0.5,
        strokeDashoffset: length + 0.6,
        autoRound: false,
      },
      0
    );
    tl.to(
      path,
      {
        strokeDashoffset: 0,
        autoRound: false,
        duration: 8,
        ease: "power3.out",
      },
      index * 0.25 + delay
    );
  });
}

document
  .querySelectorAll(".motion path, .motion line")
  .forEach((p) => tween(p));
