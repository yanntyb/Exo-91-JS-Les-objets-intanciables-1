let Personne = function(nom,age,taille){
    this.nom = nom;
    this.age = age;
    this.taille = taille;
    this.getName = function(){
        console.log("nom : " + this.nom, "age : " + this.age);
    }
    this.setAge = function (add){
        this.age += add;
    }
}

let yann = new Personne("tyburczy",19,192)
yann.getName();
yann.setAge(10);
yann.getName();