 function rollDice(): void 
 {
    const overlay: HTMLElement = document.getElementById("diceOverlay")!;
    const dice: HTMLElement = document.getElementById("dice")!;

    overlay.classList.add("active");

    const result: number = Math.floor(Math.random() * 6);

    const rotations: Record<number, string> = {
      0: "rotateX(0deg) rotateY(0deg)",
      1: "rotateX(-90deg) rotateY(0deg)",
      2: "rotateX(0deg) rotateY(90deg)",
      3: "rotateX(0deg) rotateY(-90deg)",
      4: "rotateX(90deg) rotateY(0deg)",
      5: "rotateX(180deg) rotateY(0deg)"
    };

    const randomSpin =
      `rotateX(${720 + Math.random() * 360}deg) rotateY(${720 + Math.random() * 360}deg)`;

    dice.style.transform = randomSpin;

    setTimeout(() => {
      dice.style.transform = rotations[result];
    }, 1000);

    setTimeout(() => {
      overlay.classList.remove("active");

        switch(result)
        {
            case 0: productionPhase("oxygen"); break;
            case 1: console.log("THIEF PHASE"); break;
            case 2: discoveryPhase(); break;
            case 3: productionPhase("resource"); break;
            case 4: console.log("YOUR TURN IS GONE"); break;
            case 5: productionPhase("food"); break;
        }

    }, 2800);
  }