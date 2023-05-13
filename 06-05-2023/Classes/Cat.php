<?php

namespace Classes;

class Cat extends Animal
{
    private string $raze;

    public function __construct(string $name, int $age, string $raze)
    {
        parent::__construct($name, $age);
        $this->raze = $raze;
    }

    public function getRaze(): string
    {
        return $this->raze;
    }


    public function makeSound(): void
    {
        echo 'Woof';
    }
}
