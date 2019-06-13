Project 1 - Poke'dex

Name: pOKE something.. I dont really have a name but its going to essentially be a pokedex of sorts.

*Primarily GEN 1
*pokemon  #1-151 (Specifically RED, BLUE AND YELLOW)
*Using "pok'e api

Home (index.html)                ---->      Weakness Chart    (weakness.html)
Search -> By name
or 
Search -> By Type
 Weakness chart done with css grid                         


----- Featured List -----
Search bar
|
V
Display Pkmn Information
Image of Pkmn selected.
Name: 
Type:
Attack Stat:
Defense Stat:
Sp. Atk Stat:
Sp. Def Stat:
Speed Stat:




Who is this app geared towards?
What does this app do?

APP geared towards users already familiar with the PKMN game franchise and may want a quick reference when playing their game.

Instructions: 


"Click" the search bar to search for your favorite Pokemon. Once the search bar is clicked input your favorite pokemon's name followed by the magnifying glass to input. The input would be registed as result then add the parameters to the search for the API. Once that input is read it will display "result.sprites.front_default". Followed by the "result.name" displaying name then "result.height" and "result.weight" which pulls from the API. All results would be added into the various <p> elements.

Under that information would be a table that is displayed that shows the various stats "stat.stat.name"  grabs the name of the stats while "stat.base_stat" grabse the actual base stats and puts them in the table.

There is 2 different pages Home)->Weakness Chart.
Both pages allow you to search for your favorite pokemon.  The Weakness chart is displayed on the weaknesss chart page. The chart consists of a (3x3) color coded grid that shows the various PKMN types and weaknesses. Within that there is what other typings that specific type is "Super Effective to" x2 against and "Not very effective" 1/2 from.


Features: 

When hovering over Home and Weakness Chart in the nav the color of the text changes to white. 
Text on the page is changed to a google font "Press Player 2, cursive" which tries to mimic the old school gameboy text. When you hover over the pkmn that was searched they do a little dance.

Struggles:
The hardest part was getting the specific information that I wanted to with the api. It is very dense with tons of arrays and strings, choosing the set of information to go through was tough. Once you get how everything is categorized it becomes a little easier. 


Stretch goals:
- Adding a footer
- Adding an evolution effect (If the specific pkmn has   an evolution maybe have an animation transition)
- Adding specific screech for each pkmn when you hover over them.
- Showing the weakness of each PKMN (going through the types.type array) **It was display [object Object]**




6/10/19 
- Testing with recieving input from API and console logging responding output **
- Setting parameters to get image to display from search
- Working with UI elements to get search bar to function properly.

6/11/19
- Information is now displayed when inputting in search bar.
  (Name,Picture, HP, Atk, Def, Sp.Def,Sp.Atk and Speed stats)
- UI elements tweaked


6/12/19
- Ordered UI better
- Centered nav li
- Centered information gathered from the API
- changed font on app to free google font
- Google Font "Press Start 2p, Cursive"
- Hover on nav-bar li change color to white
- Animation transition for pokemon picture "shake" 
- CSS grid weakness chart
- Fix & Add more UI elements

6/13/19
- Media Query
- UI elements fixed



