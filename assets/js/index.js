 /*for(let counter = 25;counter >= 0;counter--){
  console.log(counter);
};*/

/*for(let number=10;number<=50;number+=5) {
  console.log(number);
};*/

function summ () {
  for(let number=1,num=0;number<=100;number++){
        console.log(num+=number);
  }
}

function number (){
do {num= +prompt('2+2*2');
} while (num <6 || num >6);
};
function number1 (){
for(let num= +prompt('2+2*2');num <6 || num >6;num= +prompt('2+2*2')) {
 
};
};

const car = {
  firstname : 'reno',
  lastname: 'kengoo',
  horsepower: 100,
  speed: 140,
  weight:1200,
};
const person = car.firstname+' '+ car.lastname;
function great (person) {
  return 'hello '+ person
}
function Car(manufacturer,model,color,releaseYear,fuelConsumption,volume) {
this.drive = function() {
  return 'drive';
};
 this.manufacturer = manufacturer;
 this.model = model;
 this.color = color;
 this.releaseYear;
 this.fuelConsumption;
 this.volume;
}
const car1 = new Car('bmw','320i','red',2021,5,300);
