const elixTroops = [
    { name: "Barbarian", src: "assets/img/Avatar_Barbarian.webp", modalSrc: "assets/img/Barbarian_info.webp", dps: "150.0", hitpoints: "800.0", target: "ANY", damageType: "Single Target", targets: "Ground", speed: "18"},
    { name: "Archer", src: "assets/img/Avatar_Archer.webp", modalSrc: "assets/img/Archer_info.webp", dps: "140.0", hitpoints: "450.0", target: "ANY", damageType: "Single Target", targets: "Ground & Air", speed: "24"},
    { name: "Giant", src: "assets/img/Avatar_Giant.webp", modalSrc: "assets/img/Giant_info.webp", dps: "80.0", hitpoints: "1,500.0", target: "Defenses", damageType: "Single Target", targets: "Ground", speed: "12"},
    { name: "Goblin", src: "assets/img/Avatar_Goblin.webp", modalSrc: "assets/img/Goblin_info.webp", dps: "62.0", hitpoints: "250.0", target: "Resources (Damage x2)", damageType: "Single Target", targets: "Ground", speed: "32"},
    { name: "Wall Breaker", src: "assets/img/Avatar_Wall_Breaker.webp", modalSrc: "assets/img/Wall_Breaker_info.webp", dps: "86.0", hitpoints: "150.0", target: "Walls (Damage x40)", damageType: "Area Splash", targets: "Ground", speed: "24"},
    { name: "Balloon", src: "assets/img/Avatar_Balloon.webp", modalSrc: "assets/img/Balloon_info.webp", dps: "250.0", hitpoints: "900.0", target: "Defenses", damageType: "Area Splash", targets: "Ground", speed: "10"},
    { name: "Wizard", src: "assets/img/Avatar_Wizard.webp", modalSrc: "assets/img/Wizard_info.webp", dps: "200.0", hitpoints: "350.0", target: "ANY", damageType: "Area Splash", targets: "Ground & Air", speed: "16"},
    { name: "Healer", src: "assets/img/Avatar_Healer.webp", modalSrc: "assets/img/Healer_info.webp", dps: "0.0", hitpoints: "1,800.0", target: "Any Troop", damageType: "Healing", targets: "Air", speed: "16"},
    { name: "Dragon", src: "assets/img/Avatar_Dragon.webp", modalSrc: "assets/img/Dragon_info.webp", dps: "280.0", hitpoints: "2,600.0", target: "ANY", damageType: "Area Splash", targets: "Ground & Air", speed: "16"},
    { name: "P.E.K.K.A", src: "assets/img/Avatar_P.E.K.K.A.webp", modalSrc: "assets/img/P.E.K.K.A_info.webp", dps: "450.0", hitpoints: "4,500.0", target: "ANY", damageType: "Single Target", targets: "Ground", speed: "16"}
];

function renderTroopCards(data) {
    const gridContainer = document.getElementById("troop-grid");
    if (!gridContainer) return;

    gridContainer.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        const troop = data[i];

        const col = document.createElement("div");
        col.className = "col";

        col.innerHTML = `
            <div class="inner-troop-card" data-name="${troop.name}">
                <img src="${troop.src}" alt="${troop.name}" class="troop-img" />
                <div class="troop-name text-center fw-bold text-white">${troop.name}</div>
            </div>
        `;

        const cardElement = col.querySelector(".inner-troop-card");
        cardElement.addEventListener("click", () => onCardClick(troop));

        gridContainer.appendChild(col);
    }
}

function onCardClick(troop) {
    document.getElementById("info-title").innerText = troop.name;
    document.getElementById("info-img").src = troop.modalSrc;
    document.getElementById("info-dps").innerText = troop.dps;
    document.getElementById("info-hp").innerText = troop.hitpoints;
    document.getElementById("info-target").innerText = troop.target;
    document.getElementById("info-damage-type").innerText = troop.damageType;
    document.getElementById("info-targets").innerText = troop.targets;
    document.getElementById("info-speed").innerText = troop.speed;

    const myModal = new bootstrap.Modal(document.getElementById('troopModal'));
    myModal.show();
}

document.addEventListener("DOMContentLoaded", () => {
    renderTroopCards(elixTroops);
});