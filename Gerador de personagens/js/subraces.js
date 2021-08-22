//Halfling
function choiceRobust(){
    let robustB = document.getElementById('Bt-robust');
    let robust = document.getElementById('robust');
    let light = document.getElementById('light');
    light.style.display = 'none';
    robust.style.opacity = '1';
    robustB.innerHTML = '<h1 id="Bt-choice">Você escolheu essa Sub-raça!</h1>'
}
function choiceLight(){
    let lightB = document.getElementById('Bt-light');
    let light = document.getElementById('light');
    let robust = document.getElementById('robust');
    robust.style.display = 'none';
    light.style.opacity= '1';
    lightB.innerHTML = '<h1 id="Bt-choice">Você escolheu essa Sub-raça!</h1>'
}
//Gnome
function choiceRock(){
    let rockB = document.getElementById('Bt-rock');
    let rock = document.getElementById('rock');
    let forest = document.getElementById('forest');
    forest.style.display = 'none';
    rock.style.opacity= '1';
    rockB.innerHTML = '<h1 id="Bt-choice">Você escolheu essa Sub-raça!</h1>'
}
function choiceForest(){
    let forestB = document.getElementById('Bt-rock');
    let rock = document.getElementById('rock');
    let forest = document.getElementById('forest');
    rock.style.display = 'none';
    forest.style.opacity= '1';
    forestB.innerHTML = '<h1 id="Bt-choice">Você escolheu essa Sub-raça!</h1>'
}
//DragonBorn
function dragonChoice(){
    let dragonType = document.getElementsByName('type');
    if(dragonType[0].checked){
        alert('Dragão Azul');
        for (let index = 0; index < 10; index++) {
            if(index == 0){
                index++
            }
            let del = document.getElementById(`${index}`)
            del.style.display = 'none';
        }    
        var submitDragon = document.getElementById('submitDragon');
        submitDragon.style.display = 'none';
    }else if(dragonType[1].checked){
        alert('Dragão Branco');    
        for (let index = 0; index < 10; index++) {
            if(index == 1){
                index++
            }
            let del = document.getElementById(`${index}`)
            del.style.display = 'none';
        }    
        var submitDragon = document.getElementById('submitDragon');
        submitDragon.style.display = 'none';  
    }else if(dragonType[2].checked){
    alert('Dragão de Bronze');    
    for (let index = 0; index < 10; index++) {
        if(index == 2){
            index++
        }
        let del = document.getElementById(`${index}`)
        del.style.display = 'none';
    }    
    var submitDragon = document.getElementById('submitDragon');
    submitDragon.style.display = 'none';  
    }else if(dragonType[3].checked){
        alert('Dragão de Cobre');    
        for (let index = 0; index < 10; index++) {
            if(index == 3){
                index++
            }
            let del = document.getElementById(`${index}`)
            del.style.display = 'none';
        }    
        var submitDragon = document.getElementById('submitDragon');
        submitDragon.style.display = 'none';  
    }else if(dragonType[3].checked){
        alert('Dragão de Cobre');    
        for (let index = 0; index < 10; index++) {
            if(index == 3){
                index++
            }
            let del = document.getElementById(`${index}`)
            del.style.display = 'none';
        }    
        var submitDragon = document.getElementById('submitDragon');
        submitDragon.style.display = 'none';  
    }else if(dragonType[4].checked){
        alert('Dragão de Latão');    
        for (let index = 0; index < 10; index++) {
            if(index == 4){
                index++
            }
            let del = document.getElementById(`${index}`)
            del.style.display = 'none';
        }    
        var submitDragon = document.getElementById('submitDragon');
        submitDragon.style.display = 'none';  
    }else if(dragonType[5].checked){
        alert('Dragão Negro');    
        for (let index = 0; index < 10; index++) {
            if(index == 5){
                index++
            }
            let del = document.getElementById(`${index}`)
            del.style.display = 'none';
        }    
        var submitDragon = document.getElementById('submitDragon');
        submitDragon.style.display = 'none';  
    }else if(dragonType[6].checked){
        alert('Dragão de Ouro');    
        for (let index = 0; index < 10; index++) {
            if(index == 6){
                index++
            }
            let del = document.getElementById(`${index}`)
            del.style.display = 'none';
        }    
        var submitDragon = document.getElementById('submitDragon');
        submitDragon.style.display = 'none';  
    }else if(dragonType[7].checked){
        alert('Dragão de Prata');    
        for (let index = 0; index < 10; index++) {
            if(index == 7){
                index++
            }
            let del = document.getElementById(`${index}`)
            del.style.display = 'none';
        }    
        var submitDragon = document.getElementById('submitDragon');
        submitDragon.style.display = 'none';  
    }else if(dragonType[8].checked){
        alert('Dragão Verde');    
        for (let index = 0; index < 10; index++) {
            if(index == 8){
                index++
            }
            let del = document.getElementById(`${index}`)
            del.style.display = 'none';
        }    
        var submitDragon = document.getElementById('submitDragon');
        submitDragon.style.display = 'none';  
    }else if(dragonType[9].checked){
        alert('Dragão Vermelho');    
        for (let index = 0; index < 10; index++) {
            if(index == 9){
                break
            }
            let del = document.getElementById(`${index}`)
            del.style.display = 'none';
        }    
        var submitDragon = document.getElementById('submitDragon');
        submitDragon.style.display = 'none';  
    }
}
//Human
function choiceVar(){
    let humankB = document.getElementById('Bt-varHu');
    let varHu = document.getElementById('varHu');
    let deHu = document.getElementById('deHu');
    deHu.style.display = 'none';
    varHu.style.opacity= '1';
    humankB.innerHTML = '<h1 id="Bt-choice">Você escolheu essa Sub-raça!</h1>'
}
function choiceDef(){
    let humankB = document.getElementById('Bt-defHu');
    let varHu = document.getElementById('varHu');
    let deHu = document.getElementById('deHu');
    varHu.style.display = 'none';
    deHu.style.opacity= '1';
    humankB.innerHTML = '<h1 id="Bt-choice">Você escolheu essa Sub-raça!</h1>'
}
//Dwarf
function choiceHill(){
    let hillB = document.getElementById('Bt-HillDwarf');
    let hill = document.getElementById('hill');
    let mount = document.getElementById('mountain');
    mount.style.display = 'none';
    hill.style.opacity= '1';
    hillB.innerHTML = '<h1 id="Bt-choice">Você escolheu essa Sub-raça!</h1>'
}
function choiceMount(){
    let mountB = document.getElementById('Bt-Mountdwarf');
    let hill = document.getElementById('hill');
    let mount = document.getElementById('mountain');
    hill.style.display = 'none';
    mount.style.opacity= '1';
    mountB.innerHTML = '<h1 id="Bt-choice">Você escolheu essa Sub-raça!</h1>'
}
//elf
function choiceDrow(){
    let drowB = document.getElementById('Bt-Drow');
    let drow = document.getElementById('drow');
    let forest = document.getElementById('forest');
    let high = document.getElementById('high');
    high.style.display = 'none';
    forest.style.display = 'none';
    drow.style.opacity= '1';
    drowB.innerHTML = '<h1 id="Bt-choice">Você escolheu essa Sub-raça!</h1>'
}
function choiceForest(){
    let forestB = document.getElementById('Bt-ForestElf');
    let drow = document.getElementById('drow');
    let forest = document.getElementById('forest');
    let high = document.getElementById('high');
    high.style.display = 'none';
    forest.style.opacity = '1';
    drow.style.display = 'none';
    forestB.innerHTML = '<h1 id="Bt-choice">Você escolheu essa Sub-raça!</h1>'
}
function choiceHigh(){
    let highB = document.getElementById('Bt-HighElf');
    let drow = document.getElementById('drow');
    let forest = document.getElementById('forest');
    let high = document.getElementById('high');
    high.style.opacity = '1';
    forest.style.display = 'none';
    drow.style.display = 'none';
    highB.innerHTML = '<h1 id="Bt-choice">Você escolheu essa Sub-raça!</h1>'
}