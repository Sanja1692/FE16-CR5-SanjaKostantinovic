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
    Animal.prototype.displayAnimal = function () {
        return "Hello there, My name is ".concat(this.name, " and I am  ").concat(this.age, "years old, and I am a ").concat(this.gender);
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
    return Cat;
}(Animal));
new Cat("Matta", 2, "Male", "medium", "Images/rusianjpg.jpg", true, "Russian Blue", "Grey", "https://en.wikipedia.org/wiki/Russian_Blue");
new Cat("Lilly", 7, "Female", "medium", "Images/mediumcat.jpg", false, "Siamese", "Beige-grey", "https://en.wikipedia.org/wiki/Siamese_cat");
new Cat("Leo", 3, "Male", "medium", "Images/sphynx.jpg", true, "Sphynx", "White", "https://en.wikipedia.org/wiki/Sphynx_cat");
//child class Dog
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, gender, size, img, vaccine, family, training) {
        var _this = _super.call(this, name, age, gender, size, img, vaccine) || this;
        _this.family = family;
        _this.training = training;
        return _this;
    }
    return Dog;
}(Animal));
new Dog("Rocky", 32, "Male", "big", "Images/samoyed.jpg", true, "Samoyed", "Yes");
new Dog("Dobby", 5, "Female", "big", "Images/Labrador.jpg", false, "Labrador", "No");
new Dog("Wuk", 3, "Male", "big", "Images/husky.jpg", true, "Husky", "Yes");
