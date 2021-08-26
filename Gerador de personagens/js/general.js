var raca = [''];
//Elfos
function BEchoiceHE(){
    raca[0] = `Elfo`;
    raca[1] = `Alto Elfo`;
    alert(raca);
}
function BEchoiceFE(){
    raca[0] = `Elfo`;
    raca[1] = `Elfo da Floresta`;
    alert(raca);
}
function BEchoiceDE(){
    raca[0] = `Elfo`;
    raca[1] = `Elfo Negro`;
    alert(raca);
}
//Anões
function BEchoiceMD(){
    raca[0] = `Anão`;
    raca[1] = `Anão da Montanha`;
    alert(raca);
}
function BEchoiceHD(){
    raca[0] = `Anão`;
    raca[1] = `Anão da colina`;
    alert(raca);
}
//Humanos
function BEchoiceVH(){
    raca[0] = `Humano`;
    raca[1] = `Humano Variante`;
    alert(raca);
}
function BEchoiceDH(){
    raca[0] = `Humano`;
    raca[1] = `Humano Padrão`;
    alert(raca);
}
//Draconata
function BEchoiceDraconata(){
    raca[0] = `Draconata`;
    let dragonType = document.getElementsByName('type');
    if(dragonType[0].checked){
        raca[1] = 'Dragão Azul';
    }else if(dragonType[1].checked){
        raca[1] = 'Dragão Branco';
    }else if(dragonType[2].checked){
        raca[1] = 'Dragão de Bronze';
    }else if(dragonType[3].checked){
        raca[1] = 'Dragão de Cobre';
    }else if(dragonType[4].checked){
        raca[1] = 'Dragão de Latão';
    }else if(dragonType[5].checked){
        raca[1] = 'Dragão Negro';
    }else if(dragonType[6].checked){
        raca[1] = 'Dragão de Ouro';
    }else if(dragonType[7].checked){
        raca[1] = 'Dragão de Prata';
    }else if(dragonType[8].checked){
        raca[1] = 'Dragão Verde';
    }else if(dragonType[9].checked){
        raca[1] = 'Dragão Vermelho';
    }
    alert(raca);
}
//Gnomos
function BEchoiceFG(){
    raca[0] = `Gnomo`;
    raca[1] = `Gnomo da Floresta`;
    alert(raca);
}
function BEchoiceRG(){
    raca[0] = `Gnomo`;
    raca[1] = `Gnomo das Rochas`;
    alert(raca);
}
//Halflings
function BEchoiceLH(){
    raca[0] = `Halfling`;
    raca[1] = `Halfling Pés Leves`;
    alert(raca);
}
function BEchoiceRHf(){
    raca[0] = `Halfling`;
    raca[1] = `Halfling Robusto`;
    alert(raca);
}
//Meio elfo
function BEchoiceME(){
    raca[0] = `Meio Elfo`;
    raca[1] = `-`;
    alert(raca);
}
//Meio Orc
function BEchoiceMO(){
    raca[0] = `Meio Orc`;
    raca[1] = `-`;
    alert(raca);
}
//Tiefling
function BEchoiceT(){
    raca[0] = `Tiefling`;
    raca[1] = `-`;
    alert(raca);
}