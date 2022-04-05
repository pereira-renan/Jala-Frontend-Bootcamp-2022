class Animal {
  constructor(
    species,
    name,
    gender,
    description,
    height,
    weight,
    age,
    bornDate,
    foodType
  ) {
    this.species = species;
    this.name = name;
    this.gender = gender;
    this.description = description;
    this.height = height;
    this.weight = weight;
    this.age = age;
    this.bornDate = bornDate;
    this.foodType = foodType;
  }

  distanceRan() {
    return 100;
  }
}

export default Animal;
