# CONNECT4
By Thomas VATE

---

## Introduction

This document describes the project "CONNECT4" which is a game of connect4. The game is played on a 7x6 grid. The goal is to align 4 pieces of the same color in a row, column or diagonal.

## Requirements

### Required

    ✅ HTML5(BEM syntax) + SCSS integration  
    ✅ Responsive and animation management: users must be able to play on their mobile.  
    ✅ Implementation of components, services, directives related to the logic of the game.  
    ✅ The use of store(s) via ngxs is also required.  
    ✅  Code documentation.  

### Bonus

    ✅ User preferences: management of themes (dark / light mode) according to material design logic.  
    ✅ Use CSS variables. 
    ❌ Implementation of unit and / or end to end (cypress) tests.  
    ❌ SVG animation(s).
    ✅ i18n / a11y friendly.

## Installation

To install the game, you just need to clone the repository and run the following command:

```npm install ```

It will install all the dependencies needed to run the game ( I know you already know that but I'm just trying to make it look like a real README.md file).

## Usage

To run the game, you just need to run the following command:

```npm start```

When the app is running, you can play the game by going to the following url:

```http://localhost:4200```

## Tests

To run the tests, you just need to run the following command:

```npm test```

I took advantage of this exercise to learn unit testing. And I found it very interesting !

I don't think I done testing on all the project but It deserve a look.

## Code

---
### Style

The scss part is divided in 3 parts:

1. the variables ( "_variables.scss" )
2. the theming ( "_mixins.scss", "_theme.scss" and "_palette.scss")
3. the components

The theme part was a big part. How can I have a coherent structure against Angular Material and the project ?

In the _theme page I declared the light and dark theme, this is for Angular Material. And with the mixins and the map I have in variables I can switch and change the variables of color for each theme.

For the palette, I found help with a website to generate the 3 palettes of colors ( red, blue and yellow). Theses bases colors was found in Adobe Color.

The variables are in majority for colors.

For the style, i choose a neumorphism style, because it's modern, simple and can return a nice render easily.

---
### Components

My components are organized on different modules :

📦app  
 ┣ 📂core   
 ┃ ┣ 🗂️header  
 ┃ ┗ 📜core.module.ts  
 ┣ 📂game  
 ┃ ┣ 🗂️cell  
 ┃ ┣ 🗂️dialog-end-game  
 ┃ ┣ 🗂️grid  
 ┃ ┣ 🗂️pawn-zone  
 ┃ ┗ 📜game.module.ts  
 ┣ 🗂️app  
 ┗ 📜app.module.ts

**app.module** is the main module  
**game.module** is the components linked to the game itself  
**core.module** is the components for differents usages  

For more details about theses components I let you discover them. I put somes comments.

---
### Services

In this project there is 3 services

#### Game Service

It will serve to managing the game:
- the grid
- the players

#### Dialog Service

A little service for the end-Dialog component. 

For more details about theses services I let you discover them. I put somes comments.

---
### Models

In this project I have 2 classes:

#### Game

It's the center of all the app

#### Player

Simple dict with the name and the score

### Store

In this project I use a store for the Game state. Very usefull for updating a part of the data without changing all of It. I guess it's not optimal but I'm very happy to understand It.