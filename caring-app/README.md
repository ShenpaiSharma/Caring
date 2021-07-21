# To Develop and run the code

```
npm install
```
```
npm start
```

<<<<<<< HEAD
# Face Detections Application :

- It detects facial emotion while Video communication and it analyses every second of the emotion data of the user, then the user can see their analyzed result on the dashboard.
- It uses Face API to detect the emotion of the data, speechSynthesisUtterance to function the voice recognition. MongoDB database to store the user information and act as a helper for the main API.
- Users can register through this application and it will start detecting the emotion. It will start with Day 1 and push every second of emotion data in the expression array.
- Sign In: It validates the user with email and password and currently each time the user signin it creates the new Day and pushes the new day emotion data into the existing expression array. 
(Note: It could be made better by integrating with the zoom API such that day will only change when meeting_id and the day time stamp used in zoom will change or else it will push the emotion data in the same day expression array).

- Voice Recognition: I also added a voice recognition which interacts with the user creating a feeling of complete zoom experience. 
Press ‘Talk’ to start interacting with voice recognition.
(Note: Currently, Voice Recognition only responds to messages containing words like ‘Hi’, ’Hello’, ‘Weather’,  ‘football’ and ‘soccer’ as I still need to add more data to it see the code here( ). 

=======
# Caring-Dashboard

- Sign In with the same email ID and password used in Face Detection App.
- Card and Pie Chart: It shows the average emotion data of the last day i.e, the last interaction with the Face detection creates the average emotion of every second.

![image](https://user-images.githubusercontent.com/47415702/126533510-e0127069-0384-4314-80e8-ba4ad4d845b5.png)

                                              Fig: Last Day Average Emotion Data

![image](https://user-images.githubusercontent.com/47415702/126533712-61072bac-ce4b-4a28-b9fe-784896517b3f.png)

                                         Fig: Pie Chart for Last Day Average Emotion data

- Line-Chart: It shows the emotion of every second of the last day, i.e, the last interaction with the Face detection App. 
We can filter to create an average with respect to filter seconds. So, data rendering on the dashboard will be entirely dependent on the user. For example, in an hour-long zoom meeting, if the user will filter according to 5 min, it will be much less load on the dashboard as compared to if the user wishes to see his every second emotion data, and it will also help us from the avoiding of such clutter form of the chart by showing every second detail.


![image](https://user-images.githubusercontent.com/47415702/126533808-59e60eae-224c-455c-b4ca-bc64ddaa1d73.png)

                                     Fig: Clutter Data after recording every second of emotion data

![image](https://user-images.githubusercontent.com/47415702/126533918-b8554913-c50a-4f24-88f3-cebe868a51e6.png)

                                     Fig: Filtering with 10 sec to make the graph much clear

- Line Chart: Average Emotion data of each day. It will average all the emotion data on a daily basis, and users can filter to see from which day to what day they wanna see their average emotion data.

![image](https://user-images.githubusercontent.com/47415702/126534041-c78055fb-2b34-4181-b056-4553724b8678.png)

                                            Fig: Average emotion Data of each Day

- Line Chart: Average Valence Score data of each day. It will average all the Valence data on a daily basis, and users can filter to see from which day to what day they wanna see their average Valence data.

![image](https://user-images.githubusercontent.com/47415702/126534135-cfc5927e-2431-4803-bd54-efe6acf075cd.png)

                                            Fig: Average Valence Score Data of each Day

>>>>>>> 8c0e254c18dd3bfee8c36af974edf11185c3e76c
