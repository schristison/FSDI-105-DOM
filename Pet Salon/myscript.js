//object literal as it's one salon

const salon = {
    name:"The Fashion Pets",
    phone:"5567893",
    address:{
        street:"Boughton Rd",
        number:"135-A"
    },
    workingHours:{
        days:"Mon-Fri",
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[],
    count:function(){
        alert("We have: " + salon.pets.length + "pets registered.");
    }
}

//object destructuring

let {name,phone,address:{street,number},workingHours:{days,open,close}}=salon;

console.log(name,phone,street);

document.querySelector(".info").innerHTML=`<p> ${name} <br> ${street},${number} <br> ${days} from ${open} to ${close} <br> ${phone}`;

document.querySelector("footer .info").innerHTML=`<p> ${name} <br> ${street},${number} <br> ${days} from ${open} to ${close} <br> ${phone}`;


//object constructor
var petc = 0;

class Pet{
    constructor(name,age,breed,gender,service,ownerName,phoneContact){
        this.name=name;
        this.age=age;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.ownerName=ownerName;
        this.phoneContact=phoneContact;
        this.id="pet"+petc;
        petc+=1;
        this.hunger=10;
        this.happiness=5;
    }
    ownerInfo = function(){
        console.log("Owner Name: " + this.ownerName + "\n" + "Contact Phone: " + this.phoneContact);
    }
    feed = function(){
        this.hunger-=10;
        this.happiness+=10;
        console.log("Feeding ...");
        
    }
    status = function(){
        console.log("Hunger: " + this.hunger + "\n" + "Happiness: " + this.happiness);
    }
    
}

const pet1 = new Pet("Shaggy",2,"Boxer","Male","Shower","Sandie","32968");
const pet2 = new Pet("Gentle",5,"Terrier","Male","Clipping","Mr Harris","365271");
const pet3 = new Pet("Bonnie",8,"Yorkie","Female","Spa","Emma","478378"); 

salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);


displayPet(pet1);
displayPet(pet2);
displayPet(pet3);

var textname = document.getElementById('petName');
var textage = document.getElementById('petAge');
var textbreed = document.getElementById('petBreed');
var textgender = document.getElementById('petGender');
var textservice = document.getElementById('petService');
var textowner = document.getElementById('ownerName');
var textcontact = document.getElementById('contactPhone');

function register(){
    const thePet = new Pet(textname.value,textage.value,textbreed.value,textgender.value,textservice.value,textowner.value,textcontact.value);
    salon.pets.push(thePet);
    //console.log(thePet);
    alert("Your pet has now been registered.");
    clean();
    displayPet(thePet);
}

function clean(){
    textname.value="";
    textage.value="";
    textbreed.value="";
    textgender.value="";
    textservice.value="";
    textowner.value="";
    textcontact.value="";
}

function displayPet(aPet){
    var tBody = document.getElementById('rowPet');
    var row = `<tr id="${aPet.id}">
                <td> ${aPet.name}</td>
                <td> ${aPet.age}</td>
                <td> ${aPet.breed}</td>
                <td> ${aPet.gender}</td>
                <td> ${aPet.service}</td>
                <td> ${aPet.ownerName}</td>
                <td> ${aPet.phoneContact}</td>
                <td> 
                    <button class="btn btn-outline-danger" onclick='remove("${aPet.id}");'>Delete</button>
                </td>`;
    tBody.innerHTML +=row;          
}
function remove(petId){

    var tr = document.getElementById(petId);
    //this will only delete from HTML tr.remove();
    var indexDelete;
    
    //searching the pet using the id
    for(var i=0;i<salon.pets.length;i++){
        var selectedPet = salon.pets[i];
        if(selectedPet.id == petId)
        {
            indexDelete=i;
        }
    }
    //delete in the array
    salon.pets.splice(indexDelete,1);
    //delete in the html
    tr.remove();
}

function Search(){
    
    var ss=document.getElementById('petSearch').value;
    var searchString = ss.toLowerCase();
    //console.log(searchString);

    //searching the pet
    var flag=false;
    for(var i=0;i<salon.pets.length;i++){
        var theFoundPet = salon.pets[i];

        if((theFoundPet.id.toLowerCase() == searchString) || (theFoundPet.name.toLowerCase() == searchString)) 
        {  
            index=i;
            flag=true;
            document.getElementById('pet' + index).setAttribute('class','found');
            /*document.getElementById("result").innerHTML = `<h3>${salon.pets[i].name} was found.</h3>`;
            console.log(i);*/

            $('#pet'+i).show();           
        }
        else{
            $("#pet"+i).hide();
        }
        
       }
      
    if(flag==false){
      document.getElementById("result").innerHTML="It doesn't exist";
    }
    //deleting the text in the input search
    document.getElementById("petSearch").value="";
}

