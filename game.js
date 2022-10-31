var click_sound = document.getElementById("click_sound");

const materials = ["energy", "gold"];
materials_count = new Array(materials.length);
materials_element = new Array(materials.length);

const miners = ["Miner", "Fans"];
miners_count = new Array(miners.length);
miners_cost = new Array(miners.length);

for(let i = 0; i < materials.length; ++i) {
    materials_count[i] = 0;
    materials_element[i] = document.getElementById(materials[i]+"_element");
}

miners_shop_element = document.getElementById("miners_shop");
for(let i = 0; i < miners.length; ++i) {
    miners_count[i] = 0;
    miners_cost[i] = 10;
    let simple_element = document.createElement('div');
    simple_element.className = "button";
    simple_element.id = "buy_"+miners[i];
    simple_element.innerHTML = miners[i];
    miners_shop_element.appendChild(simple_element);
    document.getElementById("buy_"+miners[i]).addEventListener("mouseover", function(){
        document.getElementById("buy_"+miners[i]).innerHTML = miners[i]+" ("+miners_cost[i]+" "+materials[i]+")";
    });
    document.getElementById("buy_"+miners[i]).addEventListener("mouseout", function(){
        document.getElementById("buy_"+miners[i]).innerHTML = miners[i];
    });    
}

function change_material(id, value) {
    materials_count[id] += value;
    materials_element[id].innerHTML = materials[id]+": "+materials_count[id];
}

purchase_multiplier = 1

function buy_miners(){
    if (materials_count[0] >= miners_cost[0] * purchase_multiplier){
        change_material(0, -1 * miners_cost[0] * purchase_multiplier);
        miners_count[0] += purchase_multiplier;
    }
}

function next_tick(){
    change_material(1, miners_count[0]);
}


document.getElementById("main_button").addEventListener("click", function(){
    change_material(0, 1);
    click_sound.play();
});
document.getElementById("buy_Miner").addEventListener("click", () => buy_miners());


setInterval(next_tick, 1000);