# HeroLevel

HeroLevel é um projeto baseado em um exercício da DIO (Digital Innovation One) que utiliza conceitos fundamentais de programação, como variáveis, operadores, laços de repetição e estruturas de decisão, para criar uma aplicação interativa que determina o nível de um herói com base em sua experiência (XP).

## Requisitos

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisão

## Funcionalidade

O usuário insere o nome e a quantidade de experiência (XP) de um herói. A aplicação então usa uma estrutura de decisão para determinar o nível do herói e apresenta uma das seguintes mensagens:

- Se XP for menor do que 1.000 = Ferro
- Se XP for entre 1.001 e 2.000 = Bronze
- Se XP for entre 2.001 e 5.000 = Prata
- Se XP for entre 6.001 e 7.000 = Ouro
- Se XP for entre 7.001 e 8.000 = Platina
- Se XP for entre 8.001 e 9.000 = Ascendente
- Se XP for entre 9.001 e 10.000= Imortal
- Se XP for maior ou igual a 10.001 = Radiante

A mensagem exibida será: "O Herói de nome **{nome}** está no nível de **{nivel}**"

## Implementação

Este projeto inclui uma interface de usuário onde o nome e a experiência do herói podem ser inseridos através de um formulário. A aplicação então manipula o DOM para mostrar a mensagem desejada.

## Uso

1. Insira o nome do herói no formulário.
2. A tela mudará para permitir que você insira a experiência do herói.
3. A aplicação calculará o nível do herói com base na experiência inserida e exibirá a mensagem apropriada.

