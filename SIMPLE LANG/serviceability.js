const section = document.querySelector(".sec1"),
              overlay = document.querySelector(".overlay"),
              showBtn = document.querySelector("#showmodal"),
              showBtn2 = document.querySelector("#showmodal2"),
              showBtn3 = document.querySelector("#showmodal3"),
              closeBtn = document.querySelector(".close-btn");
            showBtn.addEventListener("click", () => section.classList.add("active"));
            overlay.addEventListener("click", () =>
              section.classList.remove("active")
            );
            closeBtn.addEventListener("click", () =>
              section.classList.remove("active")
            );
