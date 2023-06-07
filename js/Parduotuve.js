export class Parduotuve {
    constructor(valiuta, inventorius, name){
    this.valiuta = valiuta
    this.inventorius = inventorius
    this.name = name
}
sveikinimas(){
    return 'Sveiki atvyke i' + this.name;
}
papildymas(preke){
    const naujasInventorius = [...this.inventorius, preke]
    return naujasInventorius
}
pelnoSuvestine(){
console.log('======================');
console.log('Parduotuves ' + this.name + 'ataskaita')
console.log('======================');
this.inventorius.map(preke =>{
    
})
}

}
