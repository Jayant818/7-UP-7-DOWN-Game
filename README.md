## 7 UP 7 DOWN Game

![alt text](/assests/image.png)

### Flow

- Page loads, Player has 5000 points
- Player selects a bet amount out of 100, 200, 500
- Player chooses 1 of the 3 options – 7 up, 7 Down, Lucky 7.
- When confident, player presses the roll die button
- API call is made to provide a result for the dice roll. (2 dice)
- Show the result of both the dice on the UI
- Make an API call to check whether the player wins or looses based on the dice roll generated and the option selected
- Show the result on the UI
- Make an API call, to get the new amount of the user, based on the bet and result
- Update the amount on the UI.
- The game continues.

### Technologies Used

**Frontend**

- React.js
- Typescript
- Redux
- Axios

**Backend**

- Express.js
- CORS
- Node.js
- REST API
