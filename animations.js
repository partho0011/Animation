

function animation1(parent) {
  const button = document.createElement("button");
  button.innerHTML = "Button";
  button.style.border = "2px solid black";
  button.style.zIndex = "1";
  button.style.position = "relative";
  button.style.overflow = "hidden";
  button.style.transition = "0.5s all ease";
  
  const beforeEl = document.createElement("div");
  beforeEl.style.width = "100%";
  beforeEl.style.height = "100%";
  beforeEl.style.position = "absolute";
  beforeEl.style.top = "0%";
  beforeEl.style.left = "0%";
  beforeEl.style.backgroundColor = "black";
  beforeEl.style.transition = "0.5s all ease";
  beforeEl.style.opacity = "0";
  beforeEl.style.zIndex = "-1";
  
  button.addEventListener("touchstart", () => {
      button.style.border = "2px solid white"
      button.style.color = "white"
      beforeEl.style.opacity = "1"
  })
  
  button.addEventListener("touchend", () => {
      button.style.border = "2px solid black"
      button.style.color = "black"
      beforeEl.style.opacity = "0"
    })
  
  button.appendChild(beforeEl)
  parent.appendChild(button);
}

function animation2(parent) {
  const button = document.createElement("button");
  button.innerHTML = "Button";
  button.style.border = "2px solid black";
  button.style.position = "relative";
  button.style.overflow = "hidden";
  button.style.zIndex = "1";
  button.style.transition = "0.5s all ease";
  
  const beforeEl = document.createElement("div");
  beforeEl.style.width = "0%";
  beforeEl.style.height = "100%";
  beforeEl.style.position = "absolute";
  beforeEl.style.top = "0";
  beforeEl.style.left = "0";
  beforeEl.style.backgroundColor = "red";
  beforeEl.style.transition = "0.5s all ease";
  beforeEl.style.borderRadius = "20px";
  beforeEl.style.zIndex = "-1";
  
  
  button.addEventListener("touchstart", () => {
    button.style.border = "2px solid white"
    button.style.color = "white"
    beforeEl.style.width = "100%"
  })
  
  button.addEventListener("touchend", () => {
    button.style.border = "2px solid black"
    button.style.color = "black"
    beforeEl.style.width = "0%"
  })
  
  button.appendChild(beforeEl)
  parent.appendChild(button);
}

function animation3(parent) {
  const button = document.createElement("button");
  button.innerHTML = "Button";
  button.style.border = "2px solid black";
  button.style.position = "relative";
  button.style.overflow = "hidden";
  button.style.zIndex = "1";
  button.style.transition = "0.5s all ease";
  
  const beforeEl = document.createElement("div");
  beforeEl.style.width = "0%";
  beforeEl.style.height = "100%";
  beforeEl.style.position = "absolute";
  beforeEl.style.top = "0";
  beforeEl.style.right = "0";
  beforeEl.style.backgroundColor = "red";
  beforeEl.style.transition = "0.5s all ease";
  beforeEl.style.borderRadius = "20px";
  beforeEl.style.zIndex = "-1";
  
  
  button.addEventListener("touchstart", () => {
    button.style.border = "2px solid white"
    button.style.color = "white"
    beforeEl.style.width = "100%"
  })
  
  button.addEventListener("touchend", () => {
    button.style.border = "2px solid black"
    button.style.color = "black"
    beforeEl.style.width = "0%"
  })
  
  button.appendChild(beforeEl)
  parent.appendChild(button);
}

function animation4(parent) {
  const button = document.createElement("button");
  button.innerHTML = "Button";
  button.style.border = "2px solid black";
  button.style.position = "relative";
  button.style.overflow = "hidden";
  button.style.zIndex = "1";
  button.style.transition = "0.5s all ease";
  
  const beforeEl = document.createElement("div");
  beforeEl.style.width = "0%";
  beforeEl.style.height = "100%";
  beforeEl.style.position = "absolute";
  beforeEl.style.top = "0";
  beforeEl.style.left = "0";
  beforeEl.style.backgroundColor = "red";
  beforeEl.style.transition = "0.5s all ease";
  beforeEl.style.zIndex = "-1";
  
  const afterEl = document.createElement("div");
  afterEl.style.width = "0%";
  afterEl.style.height = "100%";
  afterEl.style.position = "absolute";
  afterEl.style.top = "0";
  afterEl.style.right = "0";
  afterEl.style.backgroundColor = "red";
  afterEl.style.transition = "0.5s all ease";
  afterEl.style.zIndex = "-1";
  
  button.addEventListener("touchstart", () => {
    button.style.border = "2px solid white"
    button.style.color = "white"
    beforeEl.style.width = "50%"
    afterEl.style.width = "50%"
  })
  
  button.addEventListener("touchend", () => {
    button.style.border = "2px solid black"
    button.style.color = "black"
    beforeEl.style.width = "0%"
    afterEl.style.width = "0%"
  })
  
  button.appendChild(beforeEl);
  button.appendChild(afterEl);
  parent.appendChild(button);
}

function animation5(parent) {
  const button = document.createElement("button");
  button.innerHTML = "Button";
  button.style.border = "2px solid yellow";
  button.style.color = "yellow";
  button.style.position = "relative";
  button.style.overflow = "hidden";
  button.style.zIndex = "1";
  button.style.transition = "0.5s all ease";
  
  const beforeEl = document.createElement("div");
  beforeEl.style.width = "50%";
  beforeEl.style.height = "100%";
  beforeEl.style.position = "absolute";
  beforeEl.style.top = "0";
  beforeEl.style.left = "0";
  beforeEl.style.backgroundColor = "blue";
  beforeEl.style.transition = "0.5s all ease";
  beforeEl.style.zIndex = "-1";
  
  const afterEl = document.createElement("div");
  afterEl.style.width = "50%";
  afterEl.style.height = "100%";
  afterEl.style.position = "absolute";
  afterEl.style.top = "0";
  afterEl.style.right = "0";
  afterEl.style.backgroundColor = "blue";
  afterEl.style.transition = "0.5s all ease";
  afterEl.style.zIndex = "-1";
  
  button.addEventListener("touchstart", () => {
    button.style.border = "2px solid black"
    button.style.color = "black"
    beforeEl.style.width = "0%"
    afterEl.style.width = "0%"
  })
  
  button.addEventListener("touchend", () => {
    button.style.border = "2px solid yellow"
    button.style.color = "yellow"
    beforeEl.style.width = "50%"
    afterEl.style.width = "50%"
  })
  
  button.appendChild(beforeEl);
  button.appendChild(afterEl);
  parent.appendChild(button);
}

function animation6(parent) {
  const button = document.createElement("button");
  button.innerHTML = "Button";
  button.style.border = "2px solid black";
  button.style.position = "relative";
  button.style.overflow = "hidden";
  button.style.zIndex = "1";
  button.style.transition = "0.5s all ease";
  
  const beforeEl = document.createElement("div");
  beforeEl.style.width = "100%";
  beforeEl.style.height = "0%";
  beforeEl.style.position = "absolute";
  beforeEl.style.top = "0";
  beforeEl.style.left = "0";
  beforeEl.style.backgroundColor = "red";
  beforeEl.style.transition = "0.5s all ease";
  beforeEl.style.borderRadius = "20px";
  beforeEl.style.zIndex = "-1";
  
  
  button.addEventListener("touchstart", () => {
    button.style.border = "2px solid white"
    button.style.color = "white"
    beforeEl.style.height = "100%"
  })
  
  button.addEventListener("touchend", () => {
    button.style.border = "2px solid black"
    button.style.color = "black"
    beforeEl.style.height = "0%"
  })
  
  button.appendChild(beforeEl)
  parent.appendChild(button);
}

function animation7(parent) {
  const button = document.createElement("button");
  button.innerHTML = "Button";
  button.style.border = "2px solid black";
  button.style.position = "relative";
  button.style.overflow = "hidden";
  button.style.zIndex = "1";
  button.style.transition = "0.5s all ease";
  
  const beforeEl = document.createElement("div");
  beforeEl.style.width = "100%";
  beforeEl.style.height = "0%";
  beforeEl.style.position = "absolute";
  beforeEl.style.bottom = "0";
  beforeEl.style.left = "0";
  beforeEl.style.backgroundColor = "red";
  beforeEl.style.transition = "0.5s all ease";
  beforeEl.style.borderRadius = "20px";
  beforeEl.style.zIndex = "-1";
  
  
  button.addEventListener("touchstart", () => {
    button.style.border = "2px solid white"
    button.style.color = "white"
    beforeEl.style.height = "100%"
  })
  
  button.addEventListener("touchend", () => {
    button.style.border = "2px solid black"
    button.style.color = "black"
    beforeEl.style.height = "0%"
  })
  
  button.appendChild(beforeEl)
  parent.appendChild(button);
}

function animation8(parent) {
  const button = document.createElement("button");
  button.innerHTML = "Button";
  button.style.border = "2px solid black";
  button.style.position = "relative";
  button.style.overflow = "hidden";
  button.style.zIndex = "1";
  button.style.transition = "0.5s all ease";
  
  const beforeEl = document.createElement("div");
  beforeEl.style.width = "100%";
  beforeEl.style.height = "0%";
  beforeEl.style.position = "absolute";
  beforeEl.style.top = "0";
  beforeEl.style.left = "0";
  beforeEl.style.backgroundColor = "blue";
  beforeEl.style.transition = "0.5s all ease";
  beforeEl.style.zIndex = "-1";
  
  const afterEl = document.createElement("div");
  afterEl.style.width = "100%";
  afterEl.style.height = "0%";
  afterEl.style.position = "absolute";
  afterEl.style.bottom = "0";
  afterEl.style.right = "0";
  afterEl.style.backgroundColor = "blue";
  afterEl.style.transition = "0.5s all ease";
  afterEl.style.zIndex = "-1";
  
  button.addEventListener("touchstart", () => {
    button.style.border = "2px solid yellow"
    button.style.color = "yellow"
    beforeEl.style.height = "50%"
    afterEl.style.height = "50%"
  })
  
  button.addEventListener("touchend", () => {
    button.style.border = "2px solid black"
    button.style.color = "black"
    beforeEl.style.height = "0%"
    afterEl.style.height = "0%"
  })
  
  button.appendChild(beforeEl);
  button.appendChild(afterEl);
  parent.appendChild(button);
}

function animation9(parent) {
  const button = document.createElement("button");
  button.innerHTML = "Button";
  button.style.border = "2px solid yellow";
  button.style.color = "yellow";
  button.style.position = "relative";
  button.style.overflow = "hidden";
  button.style.zIndex = "1";
  button.style.transition = "0.5s all ease";
  
  const beforeEl = document.createElement("div");
  beforeEl.style.width = "100%";
  beforeEl.style.height = "50%";
  beforeEl.style.position = "absolute";
  beforeEl.style.top = "0";
  beforeEl.style.left = "0";
  beforeEl.style.backgroundColor = "blue";
  beforeEl.style.transition = "0.5s all ease";
  beforeEl.style.zIndex = "-1";
  
  const afterEl = document.createElement("div");
  afterEl.style.width = "100%";
  afterEl.style.height = "50%";
  afterEl.style.position = "absolute";
  afterEl.style.bottom = "0";
  afterEl.style.right = "0";
  afterEl.style.backgroundColor = "blue";
  afterEl.style.transition = "0.5s all ease";
  afterEl.style.zIndex = "-1";
  
  button.addEventListener("touchstart", () => {
    button.style.border = "2px solid black"
    button.style.color = "black"
    beforeEl.style.height = "0%"
    afterEl.style.height = "0%"
  })
  
  button.addEventListener("touchend", () => {
    button.style.border = "2px solid yellow"
    button.style.color = "yellow"
    beforeEl.style.height = "50%"
    afterEl.style.height = "50%"
  })
  
  button.appendChild(beforeEl);
  button.appendChild(afterEl);
  parent.appendChild(button);
}

function animation10(parent) {
  const button = document.createElement("button");
  button.innerHTML = "Button";
  button.style.border = "2px solid black";
  button.style.color = "black";
  button.style.position = "relative";
  button.style.overflow = "hidden";
  button.style.zIndex = "1";
  button.style.transition = "0.5s all ease";
  
  const beforeEl = document.createElement("div");
  beforeEl.style.width = "50%";
  beforeEl.style.height = "100%";
  beforeEl.style.position = "absolute";
  beforeEl.style.top = "0";
  beforeEl.style.left = "0";
  beforeEl.style.backgroundColor = "red";
  beforeEl.style.transition = "0.5s all ease";
  beforeEl.style.transform = "translate(-100%)";
  beforeEl.style.zIndex = "-1";
  
  const afterEl = document.createElement("div");
  afterEl.style.width = "50%";
  afterEl.style.height = "100%";
  afterEl.style.position = "absolute";
  afterEl.style.bottom = "0";
  afterEl.style.right = "0";
  afterEl.style.backgroundColor = "red";
  afterEl.style.transition = "0.5s all ease";
  afterEl.style.transform = "translate(100%)";
  afterEl.style.zIndex = "-1";
  
  button.addEventListener("touchstart", () => {
    button.style.border = "2px solid white"
    button.style.color = "white"
    beforeEl.style.transform = "translate(0%) rotate(180deg)";
    afterEl.style.transform = "translate(0%) rotate(-180deg)";
  })
  
  button.addEventListener("touchend", () => {
    button.style.border = "2px solid black"
    button.style.color = "black"
    beforeEl.style.transform = "translate(-100%) rotate(-180deg)";
    afterEl.style.transform = "translate(100%) rotate(180deg)";
  })
  
  button.appendChild(beforeEl);
  button.appendChild(afterEl);
  parent.appendChild(button);
}

function animation11(parent) {
  const button = document.createElement("button");
  button.innerHTML = "Button";
  button.style.border = "2px solid yellow";
  button.style.color = "yellow";
  button.style.position = "relative";
  button.style.overflow = "hidden";
  button.style.zIndex = "1";
  button.style.transition = "0.5s all ease";
  
  const beforeEl = document.createElement("div");
  beforeEl.style.width = "50%";
  beforeEl.style.height = "100%";
  beforeEl.style.position = "absolute";
  beforeEl.style.top = "0";
  beforeEl.style.left = "0";
  beforeEl.style.backgroundColor = "blue";
  beforeEl.style.transition = "0.5s all ease";
  beforeEl.style.transform = "translate(0%)";
  beforeEl.style.zIndex = "-1";
  
  const afterEl = document.createElement("div");
  afterEl.style.width = "50%";
  afterEl.style.height = "100%";
  afterEl.style.position = "absolute";
  afterEl.style.bottom = "0";
  afterEl.style.right = "0";
  afterEl.style.backgroundColor = "blue";
  afterEl.style.transition = "0.5s all ease";
  afterEl.style.transform = "translate(0%)";
  afterEl.style.zIndex = "-1";
  
  button.addEventListener("touchstart", () => {
    button.style.border = "2px solid black"
    button.style.color = "black"
    beforeEl.style.transform = "translate(-100%) rotate(-180deg)";
    afterEl.style.transform = "translate(100%) rotate(180deg)";
  })
  
  button.addEventListener("touchend", () => {
    button.style.border = "2px solid yellow"
    button.style.color = "yellow"
    beforeEl.style.transform = "translate(0%) rotate(180deg)";
    afterEl.style.transform = "translate(0%) rotate(-180deg)";
  })
  
  button.appendChild(beforeEl);
  button.appendChild(afterEl);
  parent.appendChild(button);
}

function animation12(parent) {
  const button = document.createElement("button");
  button.innerHTML = "Button";
  button.style.border = "2px solid black";
  button.style.position = "relative";
  button.style.overflow = "hidden";
  button.style.zIndex = "1";
  button.style.transition = "0.5s all ease";
  
  const beforeEl = document.createElement("div");
  beforeEl.style.width = "100%";
  beforeEl.style.height = "100%";
  beforeEl.style.position = "absolute";
  beforeEl.style.top = "0%";
  beforeEl.style.left = "0%";
  beforeEl.style.backgroundColor = "red";
  beforeEl.style.transition = "0.5s all ease";
  beforeEl.style.borderRadius = "20px";
  beforeEl.style.transform = "scale(0)";
  beforeEl.style.borderRadius = "50%";
  beforeEl.style.zIndex = "-1";
  
  
  button.addEventListener("touchstart", () => {
    button.style.border = "2px solid white"
    button.style.color = "white"
    beforeEl.style.borderRadius = "0%"
    beforeEl.style.transform = "scale(1)"
  })
  
  button.addEventListener("touchend", () => {
    button.style.border = "2px solid black"
    button.style.color = "black"
    beforeEl.style.borderRadius = "50%";
    beforeEl.style.transform = "scale(0)";
  })
  
  button.appendChild(beforeEl)
  parent.appendChild(button);
}

function animation13(parent) {
  const button = document.createElement("button");
  button.innerHTML = "Button";
  button.style.border = "2px solid black";
  button.style.position = "relative";
  button.style.overflow = "hidden";
  button.style.zIndex = "1";
  button.style.transition = "0.5s all ease";
  
  const beforeEl = document.createElement("div");
  beforeEl.style.width = "100%";
  beforeEl.style.height = "100%";
  beforeEl.style.position = "absolute";
  beforeEl.style.top = "0%";
  beforeEl.style.left = "0%";
  beforeEl.style.backgroundColor = "red";
  beforeEl.style.transition = "0.5s all ease";
  beforeEl.style.transform = "scale(0)";
  beforeEl.style.zIndex = "-1";
  
  
  button.addEventListener("touchstart", () => {
    button.style.border = "2px solid white"
    button.style.color = "white"
    beforeEl.style.transform = "scale(1) rotate(180deg)";
  })
  
  button.addEventListener("touchend", () => {
    button.style.border = "2px solid black"
    button.style.color = "black"
    beforeEl.style.transform = "scale(0) rotate(-180deg)";
  })
  
  button.appendChild(beforeEl)
  parent.appendChild(button);
}

function animation14(parent) {
  const button = document.createElement("button");
  button.innerHTML = "Button";
  button.style.border = "2px solid white";
  button.style.color = "white";
  button.style.position = "relative";
  button.style.overflow = "hidden";
  button.style.zIndex = "1";
  button.style.transition = "0.5s all ease";
  
  const beforeEl = document.createElement("div");
  beforeEl.style.width = "100%";
  beforeEl.style.height = "100%";
  beforeEl.style.position = "absolute";
  beforeEl.style.top = "0%";
  beforeEl.style.left = "0%";
  beforeEl.style.background = "red";
  beforeEl.style.borderRadius = "20px";
  beforeEl.style.transition = "0.5s all ease";
  beforeEl.style.zIndex = "-1";
  
  
  button.addEventListener("touchstart", () => {
    button.style.border = "2px solid black";
    button.style.color = "black";
    beforeEl.style.transform = "scale(0)"
  })
  
  button.addEventListener("touchend", () => {
    button.style.border = "2px solid white";
    button.style.color = "white";
    beforeEl.style.transform = "scale(1)"
  })
  
  button.appendChild(beforeEl)
  parent.appendChild(button);
}

function animation15(parent) {
  const button = document.createElement("button");
  button.innerHTML = "Button";
  button.style.border = "2px solid white";
  button.style.color = "white";
  button.style.position = "relative";
  button.style.overflow = "hidden";
  button.style.zIndex = "1";
  button.style.transition = "0.5s all ease";
  
  const beforeEl = document.createElement("div");
  beforeEl.style.width = "100%";
  beforeEl.style.height = "100%";
  beforeEl.style.position = "absolute";
  beforeEl.style.top = "0%";
  beforeEl.style.left = "0%";
  beforeEl.style.backgroundColor = "red";
  beforeEl.style.transition = "0.5s all ease";
  beforeEl.style.transform = "scale(1)";
  beforeEl.style.zIndex = "-1";
  
  
  button.addEventListener("touchstart", () => {
    button.style.border = "2px solid black"
    button.style.color = "black"
    beforeEl.style.transform = "scale(0) rotate(-180deg)";
  })
  
  button.addEventListener("touchend", () => {
    button.style.border = "2px solid white"
    button.style.color = "white"
    beforeEl.style.transform = "scale(1) rotate(180deg)";
  })
  
  button.appendChild(beforeEl)
  parent.appendChild(button);
}

function animation16(parent) {
  const button = document.createElement("button");
  button.innerHTML = "Button";
  button.style.border = "2px solid black";
  button.style.color = "black";
  button.style.position = "relative";
  button.style.overflow = "hidden";
  button.style.zIndex = "1";
  button.style.transition = "0.5s all ease";

  const beforeEl = document.createElement("div");
  beforeEl.style.width = "0%";
  beforeEl.style.height = "100%";
  beforeEl.style.position = "absolute";
  beforeEl.style.top = "0%";
  beforeEl.style.left = "50%";
  beforeEl.style.transition = "0.3s all ease";
  beforeEl.style.backgroundColor = "red";
  beforeEl.style.zIndex = "-1";
  
  const afterEl = document.createElement("div");
  afterEl.style.width = "0%";
  afterEl.style.height = "100%";
  afterEl.style.position = "absolute";
  afterEl.style.top = "0%";
  afterEl.style.right = "50%";
  afterEl.style.transition = "0.3s all ease";
  afterEl.style.backgroundColor = "red";
  afterEl.style.zIndex = "-1";


  button.addEventListener("touchstart", () => {
    button.style.border = "2px solid yellow";
    button.style.color = "yellow";
    beforeEl.style.width = "50%";
    beforeEl.style.left = "0%";
    afterEl.style.width = "50%";
    afterEl.style.right = "0%";
  })

  button.addEventListener("touchend", () => {
    button.style.border = "2px solid black";
    button.style.color = "black";
    beforeEl.style.width = "0%";
    beforeEl.style.left = "50%";
    afterEl.style.width = "0%";
    afterEl.style.right = "50%";
  })

  button.appendChild(beforeEl)
  button.appendChild(afterEl);
  parent.appendChild(button);
}

export default function animations(parent){
  animation1(parent);
  animation2(parent);
  animation3(parent);
  animation4(parent);
  animation5(parent);
  animation6(parent);
  animation7(parent);
  animation8(parent);
  animation9(parent);
  animation10(parent);
  animation11(parent);
  animation12(parent);
  animation13(parent);
  animation14(parent);
  animation15(parent);
  animation16(parent);
}