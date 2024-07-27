# Phaser Pong Game

A classic Pong game built with Phaser 3, showcasing a basic implementation of 2D game physics, player controls, and AI opponent mechanics. This game features a player-controlled paddle, an AI-controlled paddle, a bouncing ball, and a scoring system.

## Table of Contents

- [Project Description](#project-description)
- [Hosted Link](#link)
- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

## Project Description

This Pong game is implemented using Phaser 3, a popular framework for creating HTML5 games. It includes a player paddle controlled by the arrow keys, a computer paddle with simple AI, and a ball that bounces off the paddles and screen edges. The game tracks scores and determines a winner when a player reaches a maximum score. This game uses Phaser 3(a library of javascript) for development.

## Hosted Link
[Score if you Can!](https://score-if-you-can.netlify.app/)

## Demo
Watch the video demo of the game:

[![Watch the video](assets/Demo-video.mp4)]

## Features

- **Player Controls**: Use the up and down arrow keys to move the player's paddle.
- **AI Opponent**: A basic AI-controlled paddle that follows the ball.
- **Scoring System**: Keeps track of scores for both the player and the computer.
- **Sound Effects**: Includes sound effects for ball and paddle interactions.
- **Game States**: Handles different game states such as running, paused, and game over.

## Installation

To get started with this project, follow these steps:

1. **Clone the Repository**

    ```bash
    git clone https://github.com/manu31shukla/Phaser-game.git
    cd Phaser-game
    ```

2. **Install Dependencies**

    Make sure you have [Node.js](https://nodejs.org/) installed. Then, install the project dependencies:

    ```bash
    npm install
    ```

3. **Setup Project**

    Ensure that the assets (images, sounds) are in the correct directory (`./assets`). You can add or modify assets as needed.

## Usage

To run the game locally, use the following command:

    ```bash
    npm run start
    ```
This command will start a local development server and open the game in your default web browser.

### Game Controls
- Up Arrow: Move the player's paddle up.
- Down Arrow: Move the player's paddle down.

### Game Mechanics
- Ball Movement: The ball moves in random directions with a bounce effect upon hitting paddles or screen edges.
- Paddle Collision: When the ball hits a paddle, it bounces back with a different angle.
- Scoring: Scores are updated when the ball crosses the left or right screen boundary.