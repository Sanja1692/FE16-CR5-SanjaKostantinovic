//empty array 
let animalShop: Array<Animal> = [];

//parent class
class Animal {  //1
    name: string;
    age: number;
    gender: string;
    size: string;
    img: string;    
    vaccine: boolean;
    
    constructor(name: string, age: number, gender: string, size: string, img:string, vaccine:boolean){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.size = size;
        this.img = img;        
        this.vaccine = vaccine;
        animalShop.push(this);
    }
    startDisplay() {
        return `<div class="col mx-0">
                    <div class="card shadow-lg mb-1" id="testtest" style="width: 18rem;">
                        <img src="${this.img}" class="card-img-top" alt="...">
                    <div class="card-body p-0">
                        <h5 class="card-title text-center bg-dark text-light p-1">${this.name}</h5>
                        <p class="card-text">Gender: ${this.gender}</p>
                        <p class="card-text">Age: ${this.age}</p>
                        <p class="card-text">Size: ${this.size}</p>
                        <p class="card-text text-center btn d-flex justify-content-center bg-${this.vaccine?"success":"danger"}">Vaccine ${this.vaccine}</p>`
    }
    endDisplay(){
        return `</div>
                </div>
                </div>`
    }
    display(){
        return this.startDisplay() + this.endDisplay();
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
    startDisplay() {
        return `${super.startDisplay()}
        <hr>
        <div class="card-text">
            <p>Breed: ${this.breed} <br> Fur color: ${this.furColor} <br></p>
            <a href="${this.URLbreed}" class="catlink">More info about the breed</a>
        </div>`;
    }   
}

new Cat ("Matta", 2, "Male", "medium",  "Images/rusianjpg.jpg", true, "Russian Blue", "Grey", "https://en.wikipedia.org/wiki/Russian_Blue");
new Cat ("Lilly", 7, "Female", "medium", "Images/mediumcat.jpg", false, "Siamese", "Beige-grey", "https://en.wikipedia.org/wiki/Siamese_cat");
new Cat ("Leo", 3, "Male", "medium", "Images/sphynx.jpg", true, "Sphynx", "White", "https://en.wikipedia.org/wiki/Sphynx_cat");

//child class Dog
class Dog extends Animal {
    dogBreed: string;
    training: string;

    constructor(name: string, age: number, gender: string, size: string, img:string, vaccine:boolean,dogBreed: string, training: string){
        super(name, age, gender, size, img,vaccine)
        this.dogBreed = dogBreed;
        this.training = training;
    }

    startDisplay() {
        return `${super.startDisplay()}
              <p class="card-text">Breed: ${this.dogBreed}</p>
              <p class="card-text">Training: ${this.training}</p>
            </div>
            </div>
            </div>`
    }
}

new Dog ("Rocky", 32, "Male", "big", "Images/samoyed.jpg", true, "Samoyed", "Yes");
new Dog ("Dobby", 5, "Female", "big", "Images/Labrador.jpg", false, "Labrador", "No");
new Dog ("Wuk", 3, "Male", "big", "Images/husky.jpg", true, "Husky", "Yes");