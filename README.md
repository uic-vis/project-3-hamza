# Project 3
In this project I'm using the red light violations data from the Chicago portal to visualize the data in a visual and interactive way. I've used JavaScript, D3, and Observable to import, transform, visualize and interactively analyze this dataset. Then I built a complete web-based visualization system leveraging outcomes from the previous projects. I used React.js and D3 to visualize and interactively analyze a dataset. The visualization is hosted on a publicly available website.

link: [https://redlightviolations.herokuapp.com/]

# About the Dataset
The red light violations dataset reflects the daily volume of violations created by the City of Chicago Red Light Program for each camera in the city of Chicago. The reported violations are those that have been collected by the camera system and reviewed by two separate city contractors. In some instances, due to the inability of the registered owner of the offending vehicle, the violation may not be issued as a citation. However, this dataset contains all violations regardless of whether a citation was actually issued.

For this project, I decided to just go with one month's (July 2022) data. Also, red color was chosen for the charts and map because it goes with the theme of red light violations.

# Columns in the dataset
- Intersection
- Camera ID
- Address
- Violation Date
- Violations
- Longitude
- Latitude

![unnamed](https://user-images.githubusercontent.com/89727658/200224654-6018cb2e-bd14-4399-a052-f0c43626ac82.png)

# Data Questions
- How many violations for every intersection?
- How many violations for each day?
- For a given date, where do the most violations occur?
- For a given date, where do the most violations occur and how many of them occur for a given location?

# Intersections vs. Violations
To answer this first question, I first plotted the violations vs intersections to see which interscetions have the most violations. However, one of the problems was that it was hard to estimate which one had the highest. Because it looked like this:

![unnamed](https://user-images.githubusercontent.com/89727658/200224731-a7dc23b4-ce5d-4bf4-aa1d-a0cabe5bf465.png)

So I decided to sort in an ascending order by the number of violations and found out that Lakeshore and Belmont was the intersection with the most red light violations. 

![unnamed](https://user-images.githubusercontent.com/89727658/200224838-44ae65da-d83d-4f3c-a919-06d96ae4d541.png)

There was still one more problem which was that since the intersection names were very big and it was not possible to abbreviate them, so I decided to rotate them and made the chart zoomable. This way it was easier to see the intersection name and the exact number of violations for that intersection.

(Can't upload a video. See the website to check it out!)

# Date vs. Violations
This one was more straightforward. After plotting the chart in an ascending order by the number of violations, it was clear that there was no special trend and relationship between these two attributes.

![unnamed](https://user-images.githubusercontent.com/89727658/200224963-dee028d4-9af7-45f5-be67-e7ff2ee3c1fd.png)

# Date, Violations, Lon & Lat
Now, since there weren't that many attributes in my dataset and the only main one left was the longitude and latitude. I decided to use these two attributes and plot them on a map of chicago. In this first interactive visualization the user can chose a specific date from the slider and the map will update the points representing the locations where the violation occured. This combines both the aspect of date and intersections by giving the user the choice to chose the date and then visually representing the locations of violations on a map. This map is also a good way to see the concentrations of red light violations in the city of Chicago.

(Can't upload a video. See the website to check it out!)

# Date, Violations, Intersection, Longitude & Latitude
Now, there was still a problem with the previous interactive visualization which was that when the user chose a date, it would plot the points of violations but there was no way of knowing which point represented which intersection and how many violations occured was also not being shown. This is why I added an onClick for the points on the map and linked that onClick with the barChart function. Now anytime a user clicks on a particular point, that intersection would be added to the barChart of selected intersections and the number of violations for all the selected intersections is then displayed in a linked bar chart. 

(Can't upload a video. See the website to check it out!)

# New Interactive Visualization
The new interactive visualization builds on the previous visualization. I noticed that once the point was clicked and the bar chart appeared / was updated, it was hard to read specific intersection's violations. So I made it such that when the user hovers over a specific rectangle, the violation number appears at the top right of the chart.

(Can't upload a video. See the website to check it out!)
