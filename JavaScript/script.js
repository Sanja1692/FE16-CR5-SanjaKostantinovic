var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//empty array 
var animalShop = [];
//parent class
var Animal = /** @class */ (function () {
    function Animal(name, age, gender, size, img, vaccine) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.size = size;
        this.img = img;
        this.vaccine = vaccine;
        animalShop.push(this);
    }
    Animal.prototype.display = function () {
        return "<div class=\"col mx-0 mt-3\">\n                    <div class=\"card shadow-lg mb-1\" id=\"testtest\"\">\n                        <img src=\"".concat(this.img, "\" class=\"card-img-top\" alt=\"...\">\n                    <div class=\"card-body p-0\">\n                        <h5 class=\"card-title text-center bg-dark text-light p-1\">").concat(this.name, "</h5>\n                        <p class=\"card-text ps-2\">Gender: ").concat(this.gender, "</p>\n                        <p class=\"card-text ps-2\">Age: ").concat(this.age, "</p>\n                        <p class=\"card-text ps-2\">Size: ").concat(this.size, "</p>\n                        <p class=\"card-text text-center mb-2 text-light btn rounded-pill d-flex vaccine justify-content-center bg-").concat(this.vaccine ? "success" : "danger", "\">Vaccine ").concat(this.vaccine, "</p>\n     </div>\n                </div>\n                </div>");
    };
    return Animal;
}());
new Animal("Koko", 1, "male", "small", "Images/cocktoo.jpg", false);
new Animal("Rayan", 5, "female", "medium", "Images/R_Boa.jpg", true);
new Animal("Hamy", 1, "male", "small", "Images/Syrian Hamster.jpg", false);
// console.log(Animal1.name);
// (document.getElementById("info") as HTMLElement).innerHTML = Animal2.displayAnimal();
//child class Cat
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age, gender, size, img, vaccine, breed, furColor, URLbreed) {
        var _this = _super.call(this, name, age, gender, size, img, vaccine) || this;
        _this.breed = breed;
        _this.furColor = furColor;
        _this.URLbreed = URLbreed;
        return _this;
    }
    Cat.prototype.display = function () {
        return "<div class=\"col mx-0 mt-3\">\n        <div class=\"card shadow-lg mb-1\" id=\"testtest\"\">\n            <img src=\"".concat(this.img, "\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body p-0\">\n            <h5 class=\"card-title text-center bg-dark text-light p-1\">").concat(this.name, "</h5>\n            <p class=\"card-text ps-2\">Gender: ").concat(this.gender, "</p>\n            <p class=\"card-text ps-2\">Age: ").concat(this.age, "</p>\n            <p class=\"card-text ps-2\">Size: ").concat(this.size, "</p>\n            <p class=\"card-text text-center mb-2 text-light btn rounded-pill d-flex vaccine justify-content-center bg-").concat(this.vaccine ? "success" : "danger", "\">Vaccine ").concat(this.vaccine, "</p>\n                <div class=\"card-text ps-2\">\n            <p>Breed: ").concat(this.breed, " <br> Fur color: ").concat(this.furColor, " <br></p>\n            <a href=\"").concat(this.URLbreed, "\" class=\"infoLink\">More info about the breed</a>\n        </div></div>\n        </div>");
    };
    return Cat;
}(Animal));
new Cat("Matta", 2, "Male", "medium", "Images/rusianjpg.jpg", true, "Russian Blue", "Grey", "https://en.wikipedia.org/wiki/Russian_Blue");
new Cat("Lilly", 7, "Female", "medium", "Images/siamese.jpg", false, "Siamese", "Beige-grey", "https://en.wikipedia.org/wiki/Siamese_cat");
new Cat("Leo", 3, "Male", "medium", "Images/sphynx0.jpg", true, "Sphynx", "White", "https://en.wikipedia.org/wiki/Sphynx_cat");
//child class Dog
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, gender, size, img, vaccine, dogBreed, training) {
        var _this = _super.call(this, name, age, gender, size, img, vaccine) || this;
        _this.dogBreed = dogBreed;
        _this.training = training;
        return _this;
    }
    Dog.prototype.display = function () {
        return "<div class=\"col mx-0 mt-3\">\n        <div class=\"card shadow-lg mb-1\" id=\"testtest\"\">\n            <img src=\"".concat(this.img, "\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body p-0\">\n            <h5 class=\"card-title text-center bg-dark text-light p-1\">").concat(this.name, "</h5>\n            <p class=\"card-text ps-2\">Gender: ").concat(this.gender, "</p>\n            <p class=\"card-text ps-2\">Age: ").concat(this.age, "</p>\n            <p class=\"card-text ps-2\">Size: ").concat(this.size, "</p>\n            <p class=\"card-text text-center mb-2 text-light btn rounded-pill d-flex vaccine justify-content-center bg-").concat(this.vaccine ? "success" : "danger", "\">Vaccine ").concat(this.vaccine, "</p>\n              <p class=\"card-text ps-2\">Breed: ").concat(this.dogBreed, "</p>\n              <p class=\"card-text ps-2\">Training: ").concat(this.training, "</p>\n            </div>\n            </div>\n            </div>");
    };
    return Dog;
}(Animal));
new Dog("Rocky", 8, "Male", "big", "Images/samoyed.jpg", true, "Samoyed", "Yes");
new Dog("Dobby", 5, "Female", "big", "Images/Labrador.jpg", false, "Labrador", "No");
new Dog("Wuk", 3, "Male", "big", "Images/husky.jpg", true, "Husky", "Yes");
document.getElementById("sortOld").addEventListener("click", sortAge);
function sortAge() {
    animalShop.sort(function (a, b) {
        return a.age - b.age;
    });
    document.getElementById("row").innerHTML = "";
    allCard();
}
;
document.getElementById("sortJung").addEventListener("click", sortAgeJung);
function sortAgeJung() {
    animalShop.sort(function (a, b) {
        return b.age - a.age;
    });
    document.getElementById("row").innerHTML = "";
    allCard();
}
;
// (document.getElementById("vaccine") as HTMLElement).addEventListener("click", vaccineTorF);
// function vaccineTorF(){
//     (document.getElementById("vaccine") as HTMLElement).classList.add("bg-success");
// }
function allCard() {
    animalShop.forEach(function (value) {
        document.getElementById("row").innerHTML += value.display();
    });
}
// vaccineTorF();
allCard();
