## Journals

3/20/23:
Got together as a group for the first day and developed an idea for our project. Initially we wanted to implement Diana's idea of a meal plan app, using  chatGPT api to generate meals and the USDA api. However, we realized that we had to pay for chatGPT so scratched the idea and converted the project into a meal tracking app similar to myfitnesspal. We are still going to use the USDA api and found a free recipe api to recommend recipes when the user is inputting their meal. We would like to keep track of the calories for each meal and then hopefully show those stats.

3/21/23:
During the afternoon we worked on the wireframe for our main page when a user is logged in and when the user is not logged in using excalidraw.

3/22/23:
Finished up our wireframe and have all of our pages set up.

3/23/23:
Finished up our code of conduct and set up roles. Along with getting feedback on our wireframe.

3/24/23:
We finished diagramming out our api endpoints and included the documentation in our code.

3/27/23:
Set up our mongo data base along with mongo express in our docker compose file. We ran into some issues but were able to talk it through and get it resolved. After that we were able to get our fastAPI running and set up our first routes for the entries.

3/28/23:
Set up authentication using jwtdown fastapi. Along with setting up authentication for our accounts we also included that only logged in users can access the functionality of our meal entries. Additionally, we were able to only show meal entries that are associated with that user.

3/29/23:
Set up our final endpoint for our third party api and established the logic behind fetching the data for our third party api and creating a new meal from that data.

3/30/23:
recieved feedback from Riley on our implementation of our third party api and updated our documentation for the endpoints.

4/3/23:
Began working on our front end and created the footer, main page, and navbar using react and tailwind css.

4/4/23:
Implemented redux into our app.

4/5/23:
Took the day to review what we did in implementing redux.

4/6/23:
Spent the day brainstorming ideas for our design.

4/17/23:
Implemented our third party api to the frontend.

4/18/23:
Implemented the rest of our backend into the frontend by creating a method to allow users to add meals. Integrated the ability for users to autofill calorie data with information loaded from our third party api.

4/19/23:
Implemented a method to filter meal history by category.

4/20/23:
Implemented a way to filter methods by date as well and created a basic layout for our authenticated main page.

4/24/23:
Started working on our auth main page by using our get entries query to show our entries on the cards for each category through using a filter method in components for each card. We also added a method to show total calories using the same method as in the log a meal page for our table.

4/25/23:
Implemented react charts into our main page to include the calorie goals for the user by using get account query. Also included the total calories to be displayed by date.
The chart goes back as far as 7 days.

4/26/23:
Cleaned up our code by removing any commented out code, console.logs, and formatting our js file. We also worked on our readme and added all necessary materials including a description of our project, initialization, and wireframe. Additionally, also made some small styling changes.

4/27/23:
Implemented some style changes made by diana and double checked for any errors.

4/28/23:
Final journal! Just merging all of our journals into main and we are good to go!
