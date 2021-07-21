# To Develop and run the code

```
npm install
```
```
npm start
```

# Face Detections Application :

- It detects facial emotion while Video communication and it analyses every second of the emotion data of the user, then the user can see their analyzed result on the dashboard.
- It uses Face API to detect the emotion of the data, speechSynthesisUtterance to function the voice recognition. MongoDB database to store the user information and act as a helper for the main API.
- Users can register through this application and it will start detecting the emotion. It will start with Day 1 and push every second of emotion data in the expression array.
- Sign In: It validates the user with email and password and currently each time the user signin it creates the new Day and pushes the new day emotion data into the existing expression array. 
(Note: It could be made better by integrating with the zoom API such that day will only change when meeting_id and the day time stamp used in zoom will change or else it will push the emotion data in the same day expression array).

- Voice Recognition: I also added a voice recognition which interacts with the user creating a feeling of complete zoom experience. 
Press ‘Talk’ to start interacting with voice recognition.
(Note: Currently, Voice Recognition only responds to messages containing words like ‘Hi’, ’Hello’, ‘Weather’,  ‘football’ and ‘soccer’ as I still need to add more data to it see the code here( ). 

