//empty array 
let animalShop: Array<Animal> = [];

//parent class
class Animal {  //1
    name: string;
    age: number;
    gender: string;
    size: string;
    img: string;    
    vaccine?: boolean;
    
    constructor(name: string, age: number, gender: string, size: string, img:string, vaccine:boolean){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.size = size;
        this.img = img;        
        this.vaccine = vaccine;
        animalShop.push(this);
    }
    displayAnimal() {
        return `Hello there, My name is ${this.name} and I am  ${this.age}years old, and I am a ${this.gender}`
    }
}
new Animal("Koko", 1, "male", "small", "Images/cocktoo.jpg", false);
new Animal("Rayan", 5, "female", "medium", "Images/R_Boa.jpg", true);
new Animal("Hamy", 1, "male", "small", "Images/Syrian Hamster.jpg", false);
// console.log(Animal1.name);
// (document.getElementById("info") as HTMLElement).innerHTML = Animal2.displayAnimal();

//child class Cat
class Cat extends Animal {  //2
    breed: string;
    furColor: string;
    URLbreed: string;

    constructor(name: string, age: number, gender: string, size: string, img:string, vaccine:boolean, breed: string, furColor: string, URLbreed: string){
        super(name, age, gender, size, img, vaccine)
        this.breed = breed;
        this.furColor = furColor;
        this.URLbreed = URLbreed;
    }
    
}

new Cat ("Matta", 2, "Male", "medium",  "Images/rusianjpg.jpg", true, "Russian Blue", "Grey", "https://en.wikipedia.org/wiki/Russian_Blue");
new Cat ("Lilly", 7, "Female", "medium", "Images/mediumcat.jpg", false, "Siamese", "Beige-grey", "https://en.wikipedia.org/wiki/Siamese_cat");
new Cat ("Leo", 3, "Male", "medium", "Images/sphynx.jpg", true, "Sphynx", "White", "https://en.wikipedia.org/wiki/Sphynx_cat");

//child class Dog
class Dog extends Animal {
    family: string;
    training: string;

    constructor(name: string, age: number, gender: string, size: string, img:string, vaccine:boolean,family: string, training: string){
        super(name, age, gender, size, img,vaccine)
        this.family = family;
        this.training = training;
    }
}

new Dog ("Rocky", 32, "Male", "big", "Images/samoyed.jpg", true, "Samoyed", "Yes");
new Dog ("Dobby", 5, "Female", "big", "Images/Labrador.jpg", false, "Labrador", "No");
new Dog ("Wuk", 3, "Male", "big", "Images/husky.jpg", true, "Husky", "Yes");