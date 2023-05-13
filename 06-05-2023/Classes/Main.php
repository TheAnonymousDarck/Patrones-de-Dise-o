<?php

namespace Classes;

use Classes\Animal;
use Classes\Dog;
use Classes\Cat;



$tigre = new Animal("Tigre", 5);
$perro = new Dog("Fido", 3, "Labrador");

echo $tigre->getName() . "\n";
echo $perro->getName() . "\n";

echo $perro->getRaze() . "\n";

$tigre->makeSound();
$perro->makeSound();
