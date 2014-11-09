// Chargement du module express

var express = require('express')
var app = express()

// Répertoire contenant les données statiques

app.use(express.static(__dirname + '/statique'));

// La classe Boisson

function Boisson(fabriquant, logo, type, description) {
	
	if (Boisson.numero === undefined) {
		Boisson.numero = 0;
	}
	Boisson.numero++;

	var id = Boisson.numero;
	this.fabriquant = fabriquant;
	this.logo = logo;
	this.type = type;
	this.description = description;

	this.getId = function (){
		return id;
	};
}

// La classe Fut

function Fut(volume, boisson) {
	
	if (Fut.numero === undefined) {
		Fut.numero = 0;
	}
	Fut.numero++;

	var id = Fut.numero;
	this.volume = volume;
	this.boisson = boisson;

	this.getId = function (){
		return id;
	}
}

// La classe Lieu

function Lieu(nom, position, prix) {
	
	if (Lieu.numero === undefined) {
		Lieu.numero = 0;
	}
	Lieu.numero++;

	var id = Lieu.numero;
	this.nom = nom;
	this.position = position;
	this.prix = prix;

	this.getId = function (){
		return id;
	}
}

var etat = ["DISCONECT", "OFF", "TAG", "FREE"];

// La classe Table

function Table(nom, mac, etat, lieu, fut, image) {
	
	if (Table.numero === undefined) {
		Table.numero = 0;
	}
	Table.numero++;

	var id = Table.numero;
	this.nom = nom;
	this.mac = mac;
	this.etat = etat;
	this.lieu = lieu;
	this.fut=fut;
	this.image=image;

	this.getId = function (){
		return id;
	}
}

// Création des boissons

var b1 = new Boisson('Stork', './logo/Stork.jpg', 'bière', 'Stork est une bière produite au Maroc'); 
var b2 = new Boisson('Hawai', './logo/hawai.jpg', 'Boisson Gazeuse', 'Hawai est une boisson tropicale rafraichissante'); 
var b3 = new Boisson('Oasis', './logo/oasis.jpg', 'Gamme Fruits', 'Oasis est une boisson plate aux fruits et à l’eau de source');

// Création des Futs

var f1 = new Fut(50, b1);
var f2 = new Fut(50, b3);
var f3 = new Fut(50, b2);

// Création des Lieu

var l1 = new Lieu('Brest', 'Latitude : 48.390394 / Longitude : -4.4860760000000255', '60€');
var l2 = new Lieu('Guipavas', 'Latitude : 48.4434969 / Longitude : -4.420151199999964', '52€');
var l3 = new Lieu('Brest', 'Latitude : 48.390394 / Longitude : -4.4860760000000255', '60');

// Création des Tables nom, mac, etat, lieu, fut, image

var t1 = new Table('Maxroyo', '01:23:45:67:89:AB', etat[0], l1, f1, './photo/table.png');
var t2 = new Table('Onakhwiga', '12-34-56-78-9A-BC', etat[1], l2, f2, './photo/table.png');
var t3 = new Table('Palabra', '48-2C-6A-1E-59-3D', etat[2], l3, f3, './photo/table.png');

// La préparation des mes elements pour la conversion en JSON 

var b = [b1,b2,b3];
var f = [f1,f2,f3];
var l = [l1,l2,l3];
var t = [t1,t2,t3];


app.get('/modelBoisson', function(req, res){
console.log('Transmission des boissons');
res.json(b);
});

app.get('/modelFut', function(req, res){
console.log('Transmission des futs');
res.json(f);
});

app.get('/modelLieu', function(req, res){
console.log('Transmission des Lieux');
res.json(l);
});

app.get('/modelTable', function(req, res){
console.log('Transmission des Tables');
res.json(t);
});

// Démarage du serveur

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Serveur écoute http://localhost:%s', port);
});