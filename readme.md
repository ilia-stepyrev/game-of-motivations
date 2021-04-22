# What is it?
_Game of Motivations_ is a game you can play with the members of your team in order to understand their motivations as well as to know more about each of them. 
- Which team is good for your employee? 
- Is he or she willing to be a team lead? 
- Are the current tasks fit him or her? 

and many more questions.

The initial code inside this repository was moved from the private one. And half of the success of the game is on Natalia Novikova - https://github.com/nanov94. Natalia is a contributor to the source code and the designer of the game.

Initially, the game was created as a board game, but it was ported online, and everybody can play here: https://ilia-stepyrev.github.io/game-of-motivations-output/

I'm going to translate guides from Russian to English and share them, but I need to find a time :)

## How to play (briefly)
The game is for 2 players - you and your employee. 

For the online version, you need to use any messenger like Skype or Slack, where you are able to share your screen and let your employee sees the cards.

### The steps
1. The deck is on the table (online version: on the screen)
2. Employee picks up the card from the deck (it doesn't matter who clicks on the deck to pick up the next card)
3. You ask him some questions related to the card (e.g. for 'Leadership' it might be: please describe the leader)
4. Employee picks up the next card and answers your questions based on the card
5. Then the employee finds the right place for the card within the cards already located on your table using the rule: any card to the right is less important. (It doesn't matter who moves the card by drag-and-drop)
6. Once there are no cards in the deck, the game is over.

During the game, you can make some notes which might be more important than the result.

# How to run
You can use the online version of the game and don't run it locally (please find a link above). The local run is for the people who want to contribute to the source code.

## Install dependencies

- Install Node
- `npm install` - install the dependencies

## Running
There are 2 options to run the game.

### Run with reloading
`npm start`

### Run without reloading
Build it with one of the following commands:
- `npm run build` - build an application for the development
- `npm run build:prod` - build an application for the production

Run locally:
- `npm run server` - run a development server (open http://localhost:3000 for a testing)