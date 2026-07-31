// ==========================================
// Escape To Our Future ❤️
// Part 1
// ==========================================

const game = document.getElementById("game");

function showScreen(html) {
    game.innerHTML = `
        <div class="screen fadeIn">
            ${html}
        </div>
    `;
}

function startGame() {
    showIntro();
}

function showIntro() {

    showScreen(`
        <h1>Escape To Our Future ❤️</h1>

        <p id="introText"></p>

        <br><br>

        <button id="continueBtn" style="display:none;">
            Start Journey
        </button>
    `);

    const text =
`Hello Priyanna ❤️

Somewhere inside Krish's heart...

lies one final question.

But first...

You must escape.`;

    typeWriter(
        document.getElementById("introText"),
        text,
        35,
        () => {
            document.getElementById("continueBtn").style.display = "inline-block";

            document
                .getElementById("continueBtn")
                .addEventListener("click", roomOne);
        }
    );
}

function typeWriter(element, text, speed, callback) {

    element.textContent = "";

    let i = 0;

    function type() {

        if (i < text.length) {

            element.textContent += text.charAt(i);

            i++;

            setTimeout(type, speed);

        } else {

            if (callback) callback();

        }

    }

    type();

}

function roomOne() {

    showScreen(`
        <h1>🔐 Room 1</h1>

        <h2>The Love Lock</h2>

        <p>
            Krish has always called you something special.
            <br><br>
            What is your nickname?
        </p>

        <br>

        <input
            id="answer"
            type="text"
            placeholder="Type your answer..."
        >

        <br><br>

        <button onclick="checkRoomOne()">
            Unlock ❤️
        </button>
    `);

}

function checkRoomOne() {

    const answer =
        document
            .getElementById("answer")
            .value
            .trim()
            .toLowerCase();

    if (
        answer === "bubu bear" ||
        answer === "bubu"
    ) {

        showScreen(`
            <h1>❤️ Correct ❤️</h1>

            <p>
                You found the first Love Key!
            </p>

            <br>

            <button onclick="roomTwo()">
                Continue
            </button>
        `);

    } else {

        alert("Not quite... try again ❤️");

    }

}

function comingSoon() {

    showScreen(`
        <h1>🎉 Amazing!</h1>

        <p>
            Room 1 is complete.
            <br><br>
            Next we'll unlock Room 2.
        </p>
    `);

}

startGame();
// ==========================================
// ROOM 2 - Memory Chest
// ==========================================

function roomTwo() {

    showScreen(`

        <h1>🗝️ Room 2</h1>

        <h2>The Memory Chest</h2>

        <p>
            Three magical memory chests stand before you.
            <br><br>
            Only ONE hides the next Love Key.
        </p>

        <br>

        <div style="
            display:flex;
            justify-content:center;
            gap:20px;
            flex-wrap:wrap;
        ">

            <button onclick="chooseChest(1)">
                📦 Chest 1
            </button>

            <button onclick="chooseChest(2)">
                📦 Chest 2
            </button>

            <button onclick="chooseChest(3)">
                📦 Chest 3
            </button>

        </div>

    `);

}

function chooseChest(number){

    if(number===2){

        showScreen(`

            <h1>✨ Love Key Found! ✨</h1>

            <p>

                Hidden inside was another beautiful memory.

                <br><br>

                Every day with you is my favourite day ❤️

            </p>

            <br>

            <button onclick="roomThree()">

                Continue

            </button>

        `);

    }else{

        alert("❤️ This chest is empty. Try another one!");

    }

}

// ==========================================
// ROOM 3
// ==========================================

function roomThree(){

    showScreen(`

        <h1>🌙 Room 3</h1>

        <h2>Future Dreams</h2>

        <p>

            Complete this sentence...

            <br><br>

            One day I want us to...

        </p>

        <br>

        <input
            id="dreamAnswer"
            placeholder="Type your answer..."
        >

        <br><br>

        <button onclick="checkDream()">

            Unlock

        </button>

    `);

}

function checkDream(){

    const answer=document
        .getElementById("dreamAnswer")
        .value
        .toLowerCase();

    if(

        answer.includes("travel") ||

        answer.includes("cuddle") ||

        answer.includes("date")

    ){

        showScreen(`

            <h1>🎉 Success!</h1>

            <p>

                You escaped another room!

                <br><br>

                The final chapter is waiting...

            </p>
<br><br>

<button onclick="roomFour()">
    Continue ❤️
</button>
        `);

    }else{

        alert("Think about your future together ❤️");

    }

}
// ==========================================
// ROOM 4
// ==========================================

function roomFour(){

    showScreen(`

        <h1>❤️ Our Memory ❤️</h1>

        <br>

        <img
            src="1.jpg.jpeg"
            alt="Our Photo"
            style="
                width:350px;
                max-width:100%;
                border-radius:20px;
                box-shadow:0 0 30px rgba(255,95,162,.6);
            "
        >

        <br><br>

        <button onclick="finalLetter()">

            Continue ❤️

        </button>

    `);

}
// ==========================================
// FINAL LETTER
// ==========================================

function finalLetter(){

    showScreen(`

        <h1>💌 My Dearest Priyanna ❤️</h1>

        <p style="max-width:650px;margin:auto;line-height:2;">

            If you've made it this far...

            <br><br>

            You've unlocked every memory we've made together.

            <br><br>

            Every room was a reminder of how special you are to me.

            <br><br>

            Thank you for always being there for me.

            <br><br>

            I love every moment we spend together, and I can't wait to make thousands more memories with you.

            <br><br>

            No matter what happens...

            I'll always choose you.

            ❤️

            <br><br>

            — Love, Krish

        </p>

        <br><br>

        <button onclick="finalQuestion()">

            One Last Thing... ❤️

        </button>

    `);

}
// ==========================================
// FINAL QUESTION
// ==========================================

function finalQuestion(){

    showScreen(`

        <h1>💍 One Final Question...</h1>

        <p style="font-size:1.3rem;line-height:2;">

            Priyanna ❤️

            <br><br>

            You've escaped every room...

            <br><br>

            But there's one last question.

            <br><br>

            <strong>

            When we're older...

            <br><br>

            Will you marry me one day?

            </strong>

        </p>

        <br><br>

        <button onclick="yesForever()">

            ❤️ Yes, forever ❤️

        </button>

        <br><br>

        <button onclick="yesForever()">

            💖 Absolutely 💖

        </button>

    `);

}
function yesForever(){

    showScreen(`

        <h1>❤️ Forever ❤️</h1>

        <p style="font-size:1.3rem;line-height:2;">

            Thank you for playing.

            <br><br>

            I love you more than words can ever describe.

            <br><br>

            ❤️

        </p>

    `);

}
