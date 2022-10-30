
materials = ["energy", "gold"]

energy = 0;
gold = 0;
energy_element = document.getElementById("energy_counter");
gold_element = document.getElementById("gold_counter");

function change_energy(value) {
    energy += value;
    energy_element.innerHTML = "energy: "+energy;
}
function change_gold(value) {
    gold += value;
    gold_element.innerHTML = "gold: "+gold;
}

purchase_multiplier = 1

function buy_miners(){
    if (energy >= 10 * purchase_multiplier){
        change_energy(-10 * purchase_multiplier);
        miners += purchase_multiplier;
    }
}

function next_tick(){
    change_gold(miners);
}

miners = 0;


document.getElementById("main_button").addEventListener("click", () => change_energy(1))
document.getElementById("buy_miner").addEventListener("click", () => buy_miners())

setInterval(next_tick, 1000);