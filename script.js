document.addEventListener("DOMContentLoaded", function () {

    /* ================= LOADER ================= */

    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(function () {
            loader.classList.add("hide");
        }, 1800);
    }


    /* ================= CLOSE MODAL ================= */

    const modal = document.getElementById("surpriseModal");

    if (modal) {

        modal.addEventListener("click", function (event) {

            if (event.target === modal) {
                closeSurprise();
            }

        });

    }

});


/* ================= INSIDE JOKES ================= */

const jokes = [

    "Remember when we laughed at something that wasn't even funny? 😂",

    "Nobody: absolutely nobody. Us: let's make this unnecessarily chaotic. 💀",

    "Our conversations have absolutely no beginning, middle or end. 😭",

    "The fact that we understand each other's nonsense is concerning. 😂",

    "We should probably never let anyone read our chat history. 🤫",

    "One normal conversation challenge: FAILED. 💗",

    "We said we'd behave. We clearly lied. 😂",

    "2 bhondus + 1 idea = guaranteed chaos. 🫡",

    "Partner in crime mode: ALWAYS ON. 💗"

];


function showJoke() {

    const box = document.getElementById("jokeBox");

    if (!box) return;

    const random =
        jokes[Math.floor(Math.random() * jokes.length)];

    box.style.opacity = "0";

    setTimeout(function () {

        box.innerText = random;
        box.style.opacity = "1";

    }, 200);

}


/* ================= BUCKET LIST ================= */

function completeTask(button) {

    if (!button) return;

    button.classList.toggle("done");

    if (button.classList.contains("done")) {

        button.innerText = "♥";

        createMiniHeart(button);

    } else {

        button.innerText = "♡";

    }

}


function createMiniHeart(button) {

    const heart = document.createElement("span");

    heart.innerText = "💗";

    heart.style.position = "fixed";

    const rect = button.getBoundingClientRect();

    heart.style.left = rect.left + "px";
    heart.style.top = rect.top + "px";

    heart.style.fontSize = "25px";
    heart.style.zIndex = "9999";
    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    const animation = heart.animate(

        [
            {
                transform: "translateY(0) scale(1)",
                opacity: 1
            },

            {
                transform: "translateY(-80px) scale(1.5)",
                opacity: 0
            }
        ],

        {
            duration: 900,
            easing: "ease-out"
        }

    );

    animation.onfinish = function () {
        heart.remove();
    };

}


/* ================= SONG ================= */

function toggleMusic() {
    const song = document.querySelector('audio[src="/music/humraah_malang (1).mp3"]');
    const button = document.querySelector(".music-btn");

    if (!song || !button) return;

    if (song.paused) {
        song.play()
            .then(function () {
                button.innerText = "⏸ Pause Our Song";
            })
            .catch(function (error) {
                console.log("Song play nahi ho raha:", error);
                button.innerText = "🎵 Song not found";
            });
    } else {
        song.pause();
        button.innerText = "🎵 Play Our Song";
    }
}


/* ================= FINAL SURPRISE ================= */

function finalSurprise() {

    const modal =
        document.getElementById("surpriseModal");

    if (!modal) return;

    modal.classList.add("show");

    createConfetti();

}


function closeSurprise() {

    const modal =
        document.getElementById("surpriseModal");

    if (!modal) return;

    modal.classList.remove("show");

}


/* ================= CONFETTI ================= */

function createConfetti() {

    const emojis = [
        "💗",
        "💕",
        "💖",
        "✨",
        "🌸",
        "🎀",
        "🫶"
    ];


    for (let i = 0; i < 35; i++) {

        const item =
            document.createElement("div");

        item.innerText =
            emojis[
                Math.floor(
                    Math.random() * emojis.length
                )
            ];

        item.style.position = "fixed";

        item.style.left =
            Math.random() * 100 + "vw";

        item.style.top = "-30px";

        item.style.fontSize =
            Math.random() * 20 + 15 + "px";

        item.style.zIndex = "20000";

        item.style.pointerEvents = "none";


        document.body.appendChild(item);


        const duration =
            Math.random() * 2000 + 1500;


        const rotation =
            Math.random() * 720;


        const animation =
            item.animate(

                [
                    {
                        transform:
                            "translateY(0) rotate(0deg)",

                        opacity: 1
                    },

                    {
                        transform:
                            `translateY(110vh) rotate(${rotation}deg)`,

                        opacity: 0
                    }
                ],

                {
                    duration: duration,
                    easing: "ease-in"
                }

            );


        animation.onfinish = function () {
            item.remove();
        };

    }

}


/* ================= ESCAPE KEY ================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeSurprise();
    }

});
