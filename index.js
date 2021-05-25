function generateName(){
    const superhero = document.getElementById("superHeroName");
    const petsName = document.getElementById("petsName");
    let teamName = "";
    if(superhero.value && petsName.value){
        teamName = `Warrior ${superhero.value} & Sergeant ${petsName.value}`
        document.getElementById("nameContent").innerHTML = teamName;
    }
}