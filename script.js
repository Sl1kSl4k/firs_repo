// Cache the DOM
var buton = document.getElementById("button");
var nume = document.getElementById("Nume");
var prenume = document.getElementById("Prenume");
var img = document.getElementById("image");
var asteptari1 = document.getElementById("asteptari1");
var asteptari2 = document.getElementById("asteptari2");
var asteptari3 = document.getElementById("asteptari3");
var asteptari = document.getElementById("asteptari");
var an1= document.getElementById("an1");
var an2 = document.getElementById("an2");
var an3 = document.getElementById("an3");
var anNastere = document.getElementById("anNastere");

const d = new Date();
var anCurent = d.getFullYear();

//Add eventListeners
buton.addEventListener("click", altaViata);
anNastere.addEventListener("mouseover", displayAge);



function altaViata ()
{
	nume.innerHTML = "Functie: Senior Java Dev";
	prenume.innerHTML = "Professional Penetration Tester and Ethical Hacker";
	img.src = "hacker.jpg";
	asteptari1.innerHTML = "M-a ajutat mult, am facut un cod ce ii deregleza semnalul de la televizor al vecinului meu";
	asteptari2.innerHTML = "Am desprins multa experienta, astfel mi-am deshis in sfarsit un site pentru vanzari de date personale";
	asteptari3.innerHTML = "Am invatat foarte multe, am reusit sa fac un EMP Grenade care opreste muzica vecinilor de la etajul 2";
	asteptari.innerHTML = "Experinta acumulata";
	an1.innerHTML = "Gata";
	an2.innerHTML = "Gata";
	an3.innerHTML = "Gata";
	body.style.backgroundColor = "darkgreen";
	body.style.color = "black";
	img.style.opacity = "100%";
	img.style.borderWidth = "20px";
	

}	

function displayAge ()
{
	anNastere.innerHTML = "19 ani"; 
	
	
	
	
}	