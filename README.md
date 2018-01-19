# Angular Ape App

#### Angular 2 & MVCs -- JavaScript, January 19, 2018

### _By Ginger Lee Kretschmer_

##  Description

**Angular 2 in Action:** An angular 2 application to track animals at the local Zoo.

## Installation

1. _`$ git clone`  [https://github.com/gingerlee/ape-app.git](https://github.com/gingerlee/ape-app.git)_

2. _`$ cd ape-app`_

3.  _`$ npm install -g angular-cli`_

4. _`$ ng serve --open`_


## User Stories

| User Interface   |      Application Notes      |  
|----------|:-------------:|
| Ability to add a newly-admitted animal by submitting a form with animal species, name, age, diet, zoo location, number of needed caretakers, sex, one like and one dislike. |  Creates New Animal Object |
| View a list of animals user has logged. | Displays dynamic list |
| Filter views by showing all animals, only young animals (less than 2 years of age), or only mature animals (2 years of age and older). | Uses custom pipe filter |
| Click an animal to edit its name, age or caretakers. | Uses ngModel in form to create a two-way data-binding |

##Future Additions
With more time, I would like to extend the functionality of this app to include more custom styling, more functions that allow the zoo keepers to log information about specific animals, like when and what they ate, when they sleep and for how long, and an activity log for the day. This would help monitor all animals daily activities to help the caretakers know what the animals needs are in real time.

## Technologies Used
* JavaScript (ES6)
* Angular 2
* Node
* HTML
* CSS
* SASS



## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.
