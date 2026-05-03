const burger = document.querySelector(".burger");
const navUL = document.querySelector(".nav-ul");

burger.addEventListener("click", (event) => {
  navUL.classList.toggle("active");
});

const info = {
  more1: {
    "modal-title": `Fig. 1 (plant)`,
    "modal-img": `./images/Layer 3.png`,
    "modal-description": `
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Incidunt, mollitia. Sapiente velit impedit minima ipsa
                    aperiam placeat doloremque voluptatibus quo, dolorem
                    eligendi, mollitia repellat molestiae. Perferendis inventore
                    excepturi iste minus.</p>
                  
                
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Incidunt, mollitia. Sapiente velit impedit minima ipsa
                    aperiam placeat doloremque voluptatibus quo, dolorem
                    eligendi, mollitia repellat molestiae. Perferendis inventore
                    excepturi iste minus.</p>
                  `,
    "modal-table-body": [
      {
        name: "Skibidi",
        price: "$20",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Incidunt, mollitia. Sapiente velit impedit minima
                        ipsa aperiam placeat
`,
      },
      {
        name: "Skibidi",
        price: "$20",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Incidunt, mollitia. Sapiente velit impedit minima
                        ipsa aperiam placeat
`,
      },
      {
        name: "Skibidi",
        price: "$20",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Incidunt, mollitia. Sapiente velit impedit minima
                        ipsa aperiam placeat
`,
      },
    ],
  },
  more2: {
    "modal-title": `Fig. 2 (plant)`,
    "modal-img": `./images/Layer 3.png`,
    "modal-description": `
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Incidunt, mollitia. Sapiente velit impedit minima ipsa
                    aperiam placeat doloremque voluptatibus quo, dolorem
                    eligendi, mollitia repellat molestiae. Perferendis inventore
                    excepturi iste minus.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Incidunt, mollitia. Sapiente velit impedit minima ipsa
                    aperiam placeat doloremque voluptatibus quo, dolorem
                    eligendi, mollitia repellat molestiae. Perferendis inventore
                    excepturi iste minus.</p>
                  `,
    "modal-table-body": [
      {
        name: "Skibidi",
        price: "$20",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Incidunt, mollitia. Sapiente velit impedit minima
                        ipsa aperiam placeat
`,
      },
      {
        name: "Skibidi",
        price: "$20",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Incidunt, mollitia. Sapiente velit impedit minima
                        ipsa aperiam placeat
`,
      },
      {
        name: "Skibidi",
        price: "$20",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Incidunt, mollitia. Sapiente velit impedit minima
                        ipsa aperiam placeat
`,
      },
    ],
  },
  more3: {
    "modal-title": `Fig. 3 (plant)`,
    "modal-img": `./images/Layer 3.png`,
    "modal-description": `
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Incidunt, mollitia. Sapiente velit impedit minima ipsa
                    aperiam placeat doloremque voluptatibus quo, dolorem
                    eligendi, mollitia repellat molestiae. Perferendis inventore
                    excepturi iste minus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Incidunt, mollitia. Sapiente velit impedit minima ipsa
                    aperiam placeat doloremque voluptatibus quo, dolorem
                    eligendi, mollitia repellat molestiae. Perferendis inventore
                    excepturi iste minus.</p>
                  `,
    "modal-table-body": [
      {
        name: "Skibidi",
        price: "$20",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Incidunt, mollitia. Sapiente velit impedit minima
                        ipsa aperiam placeat
`,
      },
      {
        name: "Skibidi",
        price: "$20",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Incidunt, mollitia. Sapiente velit impedit minima
                        ipsa aperiam placeat
`,
      },
      {
        name: "Skibidi",
        price: "$20",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Incidunt, mollitia. Sapiente velit impedit minima
                        ipsa aperiam placeat
`,
      },
    ],
  },
  more4: {
    "modal-title": `Fig. 3 (plant)`,
    "modal-img": `./images/Layer 3.png`,
    "modal-description": `
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Incidunt, mollitia. Sapiente velit impedit minima ipsa
                    aperiam placeat doloremque voluptatibus quo, dolorem
                    eligendi, mollitia repellat molestiae. Perferendis inventore
                    excepturi iste minus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Incidunt, mollitia. Sapiente velit impedit minima ipsa
                    aperiam placeat doloremque voluptatibus quo, dolorem
                    eligendi, mollitia repellat molestiae. Perferendis inventore
                    excepturi iste minus.</p>
                  `,
    "modal-table-body": [
      {
        name: "Skibidi",
        price: "$20",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Incidunt, mollitia. Sapiente velit impedit minima
                        ipsa aperiam placeat
`,
      },
      {
        name: "Skibidi",
        price: "$20",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Incidunt, mollitia. Sapiente velit impedit minima
                        ipsa aperiam placeat
`,
      },
      {
        name: "Skibidi",
        price: "$20",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Incidunt, mollitia. Sapiente velit impedit minima
                        ipsa aperiam placeat
`,
      },
    ],
  },
};

function createTableRow(data) {
  return `
    <tr>
      <td>${data.name}</td>
      <td>${data.price}</td>
      <td colspan="2">${data.desc}</td>
    </tr>`;
}
function fillModal(data) {
  document.getElementById("modal-title").innerText = data["modal-title"];
  document.getElementById("modal-img").src = data["modal-img"];
  document.getElementById("modal-description").innerHTML =
    data["modal-description"];

  const rows = data["modal-table-body"].map(createTableRow).join("");
  document.getElementById("modal-table-body").innerHTML = rows;
}

const infoContainer = document.querySelector(".more-info");
const buttonsMore = document.querySelectorAll("a.more");
buttonsMore.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    const dataId = element.id;
    fillModal(info[dataId]);
    infoContainer.classList.add("active");
  });
});

function closeModal() {
  if (!infoContainer.classList.contains("active")) return;
  infoContainer.classList.remove("active");
}
const close = document.querySelector("#close");
close.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    closeModal();
  }
});
window.addEventListener("click", (event) => {
  if (event.target === infoContainer) {
    closeModal();
  }
});

function throttle(func, ms) {
  let isThrottled = false;
  let savedArgs, savedThis;
  return function wrap(...args) {
    if (isThrottled) {
      savedArgs = args;
      savedThis = this;
      return;
    }

    func.apply(savedThis, args);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (savedArgs) {
        wrap.apply(savedThis, savedArgs);

        savedArgs = savedThis = null;
      }
    }, ms);
  };
}

function onScroll() {
  const sections = document.querySelectorAll("section");
  const windowBottom = window.scrollY + window.innerHeight;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop; // Координата верха секции

    // Если низ экрана перешагнул через верх секции (с небольшим запасом в 100px)
    if (windowBottom > sectionTop + 100) {
      section.classList.add("element-show");
    }
  });
}

// Оборачиваем в твой throttle
const throttledScroll = throttle(onScroll, 100);

document.addEventListener("scroll", throttledScroll);
// Запустим один раз сразу, чтобы проверить секции на первом экране
onScroll();
