<?php

namespace Classes;

class Animal
{
    public function __construct(
        private string $name,
        private int $age,
    ) {
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getAge(): int
    {
        return $this->age;
    }

    public function makeSound(): void
    {
        echo 'Animal sound \n';
    }
}
