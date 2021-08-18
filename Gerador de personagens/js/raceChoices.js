var elfChoice = document.getElementById('elf-choice');
var dwarfChoice = document.getElementById('dwarf-choice');
var humanChoice = document.getElementById('human-choice');
var dragonbornChoice = document.getElementById('dragonborn-choice');
var gnomeChoice = document.getElementById('gnome-choice');
var halflingChoice = document.getElementById('halfling-choice');
var halfElfChoice = document.getElementById('halfElf-choice');
var halfOrcChoice = document.getElementById('halfOrc-choice');
var tieflingChoice = document.getElementById('tiefling-choice');

//Elf choice.
function raceElfChoice(){
    alert('Raça escolhida com sucesso!');
    elfChoice.style.opacity = '1';
    dwarfChoice.style.display = 'none';
    humanChoice.style.display = 'none';
    dragonbornChoice.style.display = 'none';
    gnomeChoice.style.display = 'none';
    halflingChoice.style.display = 'none';
    halfElfChoice.style.display = 'none';
    halfOrcChoice.style.display = 'none'; 
    tieflingChoice.style.display = 'none';
    let buttonChoice = document.getElementById('Bt-elf');
    buttonChoice.innerHTML = '<h1 id="Bt-choice">Você escolheu essa raça!</h1>';
    //img subraces
        let highElfIMG = '<abbr title="Alto Elfo"><img src="img/elf/alto.png" alt="alto elfo" onclick="openModalHighElf()"/></abbr>'
        let forestElfIMG = '<abbr title="Elfo da Floresta"><img src="img/elf/floresta.png" alt="Elfo da floresta" onclick="openModalForestElf()"/></abbr>'
        let drowIMG = '<abbr title="Elfo Negro"><img src="img/elf/Drow.png" alt="Elfo Drow" onclick="openModalDrow()"/></abbr>'
    //dynamic information of subraces
    let sectionMain = document.getElementById('sectionMain');

    let subraceInfo = document.createElement('div');
    subraceInfo.setAttribute('class', 'textInfo');
    sectionMain.appendChild(subraceInfo);
    subraceInfo.innerHTML = `<h1>Sub-raça</h1>
    <p>Antigas divisões entre os povos élficos
    resultaram em três sub-raças principais: os altos elfos, os
    elfos da floresta, e os elfos negros, que são comumente
    chamados de drow. Escolha uma dessas sub-raças. Em
    alguns mundos, essas sub-raças são ainda mais divididas
    (como os elfos do sol e elfos da lua nos Reinos Esquecidos)</p>`

    let subRaceDiv = document.createElement('div');
    subRaceDiv.setAttribute('class', 'subRace');
    sectionMain.appendChild(subRaceDiv);   
    subRaceDiv.innerHTML = `${highElfIMG} ${forestElfIMG} ${drowIMG}`
}
// Dwarf choice
function raceDwarfChoice(){
    alert('Raça escolhida com sucesso!');
    elfChoice.style.display = 'none';
    dwarfChoice.style.opacity = '1';
    dwarfChoice.style.display = '1';
    humanChoice.style.display = 'none';
    dragonbornChoice.style.display = 'none';
    gnomeChoice.style.display = 'none';
    halflingChoice.style.display = 'none';
    halfElfChoice.style.display = 'none';
    halfOrcChoice.style.display = 'none'; 
    tieflingChoice.style.display = 'none';
    let buttonChoice = document.getElementById('Bt-dwarf');
    buttonChoice.innerHTML = '<h1 id="Bt-choice">Você escolheu essa raça!</h1>';
    //img subraces
        let mountainDwarfMG = '<abbr title="Anão da montanha"><img src="img/dwarf/Mont-dwarf.png" alt="anão da montanha" onclick="openModalMountainDwarf()"/></abbr>'
        let hillDwarfIMG = '<abbr title="Anão da colina"><img src="img/dwarf/dwarf-col.png" alt="Anão da colina" onclick="openModalHillDwarf()"/></abbr>'
    //dynamic information of subraces
    let sectionMain = document.getElementById('sectionMain');

    let subraceInfo = document.createElement('div');
    subraceInfo.setAttribute('class', 'textInfo');
    sectionMain.appendChild(subraceInfo);
    subraceInfo.innerHTML = `<h1>Sub-raça</h1>
    <p>Existem duas sub-raças principais de
    anões nos mundos de D&D: anões da colina e anões da
    montanha. Você deve escolher uma dessas sub-raças.</p>`

    let subRaceDiv = document.createElement('div');
    subRaceDiv.setAttribute('class', 'subRace');
    sectionMain.appendChild(subRaceDiv);   
    subRaceDiv.innerHTML = `${mountainDwarfMG} ${hillDwarfIMG}`
}
// Human Choice
function raceHumanChoice(){
    alert('Raça escolhida com sucesso!');
    elfChoice.style.display = 'none';
    dwarfChoice.style.display = 'none';
    humanChoice.style.opacity = '1';
    humanChoice.style.display = '1';
    dragonbornChoice.style.display = 'none';
    gnomeChoice.style.display = 'none';
    halflingChoice.style.display = 'none';
    halfElfChoice.style.display = 'none';
    halfOrcChoice.style.display = 'none'; 
    tieflingChoice.style.display = 'none';
    let buttonChoice = document.getElementById('Bt-human');
    buttonChoice.innerHTML = '<h1 id="Bt-choice">Você escolheu essa raça!</h1>';
    //img subraces
        let deafultHumanIMG = '<abbr title="Humano Padrão"><img src="img/human/defaultHuman.png" alt="Humano Padrão" onclick="openModalDefaultHuman()"/></abbr>'
        let varHumanIMG = '<abbr title="Humano Variante"><img src="img/human/humanVariant.png" alt="Humano Variante" onclick="openModalVarHuman()"/></abbr>'
    //dynamic information of subraces
    let sectionMain = document.getElementById('sectionMain');

    let subraceInfo = document.createElement('div');
    subraceInfo.setAttribute('class', 'textInfo');
    sectionMain.appendChild(subraceInfo);
    subraceInfo.innerHTML = `<h1>TRAÇOS RACIAIS ALTERNATIVOS</h1>
    <p>Se sua campanha usa as regras opcionais de talentos do capítulo
    6, seu Mestre pode permitir que você utilize os traços raciais
    alternativos que substituem as características Aumento no Valor
    de Habilidade e Perícias.</p>`

    let subRaceDiv = document.createElement('div');
    subRaceDiv.setAttribute('class', 'subRace');
    sectionMain.appendChild(subRaceDiv);   
    subRaceDiv.innerHTML = `${deafultHumanIMG} ${varHumanIMG}`
}
// DragonBorn Choice
function raceDragonChoice(){
    alert('Raça escolhida com sucesso!');
    elfChoice.style.display = 'none';
    dwarfChoice.style.display = 'none';
    humanChoice.style.display = 'none';
    dragonbornChoice.style.opacity = '1';
    dragonbornChoice.style.display = '1';
    gnomeChoice.style.display = 'none';
    halflingChoice.style.display = 'none';
    halfElfChoice.style.display = 'none';
    halfOrcChoice.style.display = 'none'; 
    tieflingChoice.style.display = 'none';
    let buttonChoice = document.getElementById('Bt-dragonborn');
    buttonChoice.innerHTML = '<h1 id="Bt-choice">Você escolheu essa raça!</h1>';

    //dynamic information of subraces
    let sectionMain = document.getElementById('sectionMain');

    let subraceInfo = document.createElement('div');
    subraceInfo.setAttribute('class', 'textInfo');
    sectionMain.appendChild(subraceInfo);
    subraceInfo.innerHTML = `<h1>ANCESTRAL DRACÔNICO</h1>
    <p>Você possui um ancestral
    dracônico. Escolha um tipo de dragão da tabela Ancestral
    Dracônico. Sua arma de sopro e resistência a dano são
    determinadas pelo tipo de dragão, como mostrado na
    tabela</p>`

    let subRaceDiv = document.createElement('div');
    subRaceDiv.setAttribute('class', 'subRace');
    sectionMain.appendChild(subRaceDiv);   
    subRaceDiv.innerHTML = `
    <form>
        <div class="dragonType">
            <div class="set" style="background-color: rgb(98, 98, 187);">
                <label for="azul">Dragão Azul</label>
                <input type="radio" name="type"id="azul" checked>
            </div>
            <div class="set" style="background-color: rgba(238, 236, 234, 0.849);">
                <label for="branco">Dragão Branco</label>
                <input type="radio" name="type" id="Branco">
            </div>
            <div class="set" style="background-color: rgba(184, 135, 11, 0.897);">
                <label for="Bronze">Dragão de Bronze</label>
                <input type="radio" name="type" id="Bronze">
            </div>
            <div class="set" style="background-color: rgb(204, 125, 7);">
                <label for="Cobre">Dragão de Cobre</label>
                <input type="radio" name="type" id="Cobre">
            </div>
            <div class="set" style="background-color: goldenrod;">
                <label for="Latao">Dragão de Latão</label>
                <input type="radio" name="type" id="Latao">
            </div>
            <div class="set" style="background-color: rgb(8, 8, 8);">
                <label for="Negro" style="color: white;">Dragão Negro</label>
                <input type="radio" name="type" id="Negro">
            </div>
            <div class="set" style="background-color: gold;">
                <label for="Ouro">Dragão de Ouro</label>
                <input type="radio" name="type" id="Ouro">
            </div>
            <div class="set" style="background-color: silver;">
                <label for="Prata">Dragão de Prata</label>
                <input type="radio" name="type" id="Prata">
            </div>
            <div class="set" style="background-color: green;">
                <label for="Verde" style="color: white;">Dragão Verde</label>
                <input type="radio" name="type" id="Verde">
            </div>
            <div class="set" style="background-color: crimson;">
                <label for="Vermelho">Dragão Vermelho</label>
                <input type="radio" name="type" id="Vermelho">
            </div>
        </div>
        <div class="submitDragon">
            <input type="button" value="Escolher Dragão!">
        </div>
    </form>
    `

}
// Gnome Choice
function raceGnomeChoice(){
    alert('Raça escolhida com sucesso!');
    elfChoice.style.display = 'none';
    dwarfChoice.style.display = 'none';
    humanChoice.style.display = 'none';
    dragonbornChoice.style.display = 'none';
    gnomeChoice.style.display = '1';
    gnomeChoice.style.opacity = '1';
    halflingChoice.style.display = 'none';
    halfElfChoice.style.display = 'none';
    halfOrcChoice.style.display = 'none'; 
    tieflingChoice.style.display = 'none';
    let buttonChoice = document.getElementById('Bt-gnome');
    buttonChoice.innerHTML = '<h1 id="Bt-choice">Você escolheu essa raça!</h1>';
    //img subraces
        let forestGnomeIMG = '<abbr title="Gnomo da Floresta"><img src="img/gnome/forestGnome.png" alt="Gnomo da Floresta" onclick="openModalForestGnome()"/></abbr>'
        let rockGnomeIMG = '<abbr title="Gnomo das Rochas"><img src="img/gnome/rockGnome.png" alt="Gnomo das Rochas" onclick="openModalRockGnome()"/></abbr>'
    //dynamic information of subraces
    let sectionMain = document.getElementById('sectionMain');

    let subraceInfo = document.createElement('div');
    subraceInfo.setAttribute('class', 'textInfo');
    sectionMain.appendChild(subraceInfo);
    subraceInfo.innerHTML = `<h1>Sub-raças.</h1>
    <p>Duas sub-raças de gnomos são
    encontradas ao redor dos mundos de D&D: os gnomos da
    floresta e os gnomos das rochas. Escolha uma dessas subraças.</p>`

    let subRaceDiv = document.createElement('div');
    subRaceDiv.setAttribute('class', 'subRace');
    sectionMain.appendChild(subRaceDiv);   
    subRaceDiv.innerHTML = `${forestGnomeIMG} ${rockGnomeIMG}`
}
//Halfling
function raceHalflingChoice(){
    alert('Raça escolhida com sucesso!');
    elfChoice.style.display = 'none';
    dwarfChoice.style.display = 'none';
    humanChoice.style.display = 'none';
    dragonbornChoice.style.display = 'none';
    gnomeChoice.style.display = 'none';
    halflingChoice.style.opacity = '1';
    halflingChoice.style.display = '1';
    halfElfChoice.style.display = 'none';
    halfOrcChoice.style.display = 'none'; 
    tieflingChoice.style.display = 'none';
    let buttonChoice = document.getElementById('Bt-Halfling');
    buttonChoice.innerHTML = '<h1 id="Bt-choice">Você escolheu essa raça!</h1>';
    //img subraces
        let lightHalflingIMG = '<abbr title="Halfling Pés Leves"><img src="img/halfling/pesleves.png" alt="Halfling pés leves" onclick="openModalLightHalfling()"/></abbr>'
        let robustHalflingIMG = '<abbr title="Halfling Robusto"><img src="img/halfling/robusto.png" alt="Halfling Robusto" onclick="openModalRobustHalfling()"/></abbr>'
    //dynamic information of subraces
    let sectionMain = document.getElementById('sectionMain');

    let subraceInfo = document.createElement('div');
    subraceInfo.setAttribute('class', 'textInfo');
    sectionMain.appendChild(subraceInfo);
    subraceInfo.innerHTML = `<h1>Sub-raças.</h1>
    <p>Os dois tipos principais de halflings, PésLeves e Robustos, são mais como famílias bem próximas
    do que verdadeiras sub-raças. Escolha uma destas subraças.</p>`

    let subRaceDiv = document.createElement('div');
    subRaceDiv.setAttribute('class', 'subRace');
    sectionMain.appendChild(subRaceDiv);   
    subRaceDiv.innerHTML = `${lightHalflingIMG} ${robustHalflingIMG}`
}
//half-elf
function raceHalfElfChoice(){
    alert('Raça escolhida com sucesso!');
    elfChoice.style.display = 'none';
    dwarfChoice.style.display = 'none';
    humanChoice.style.display = 'none';
    dragonbornChoice.style.display = 'none';
    gnomeChoice.style.display = 'none';
    halflingChoice.style.display = 'none';
    halfElfChoice.style.display = '1';
    halfElfChoice.style.opacity = '1';
    halfOrcChoice.style.display = 'none'; 
    tieflingChoice.style.display = 'none';
    let buttonChoice = document.getElementById('Bt-half-elf');
    buttonChoice.innerHTML = '<h1 id="Bt-choice">Você escolheu essa raça!</h1>';

}
//half-orc
function raceHalfOrcChoice(){
    alert('Raça escolhida com sucesso!');
    elfChoice.style.display = 'none';
    dwarfChoice.style.display = 'none';
    humanChoice.style.display = 'none';
    dragonbornChoice.style.display = 'none';
    gnomeChoice.style.display = 'none';
    halflingChoice.style.display = 'none';
    halfElfChoice.style.display = 'none';
    halfOrcChoice.style.opacity = '1';
    halfOrcChoice.style.display = '1'; 
    tieflingChoice.style.display = 'none';
    let buttonChoice = document.getElementById('Bt-half-orc');
    buttonChoice.innerHTML = '<h1 id="Bt-choice">Você escolheu essa raça!</h1>';
}
//tiefling
function raceTieflingChoice(){
    alert('Raça escolhida com sucesso!');
    elfChoice.style.display = 'none';
    dwarfChoice.style.display = 'none';
    humanChoice.style.display = 'none';
    dragonbornChoice.style.display = 'none';
    gnomeChoice.style.display = 'none';
    halflingChoice.style.display = 'none';
    halfElfChoice.style.display = 'none';
    halfOrcChoice.style.display = 'none'; 
    tieflingChoice.style.display = '1';
    tieflingChoice.style.opacity = '1';
    let buttonChoice = document.getElementById('Bt-tiefling');
    buttonChoice.innerHTML = '<h1 id="Bt-choice">Você escolheu essa raça!</h1>';
}