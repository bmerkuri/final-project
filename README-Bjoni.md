# day-one
- Project Description
Skill-Matrix is a project where the main goal is to collect data from the survey.This survey will contain many questions for a large amount of users in   different timestamps. The questions will be displayed in different types.

 Project Objectives
      - Building a survey app with haura and react
      - Getting the questions and answers from the hasura backned
      - Getting the answer the user provides and sending it to the backend
Requirements
      -Making the app responsive
      -Building UX/UI
      -Build the unit testing
      
- Did Project BrainStorming with the team
- Distributed Roles
- Build datbase tables
###################################################################################################################################################################

# day-two
- Discussed methods for implemeting template
We discussed different methods on how to implement the frontend.We had two main methods:
- a. using a library called surveyjs
- b. using routes and component to house the questions
Testing the first method

We decided to use the surveyjs method.We build the frontend with the questions and answers.The web app became very responsive and we styled the app to have a better UX/UI.

- Creating the react template for the app

After we created the questions and answers ,we integrated the jwt login token to the app.Everything workout out fine.
There was a issue with this method and that was that the questions were hard coded which violates the project requierement to get the questions and answers from the backend.

####################################################################################################################################################################

# day-three
- testing the second method for the frontend
-We decided to test the second method and that was building the component for the questions and then calling them.
-We stumbled upon some problems with these methods.
- 1.The app didn't allow us to configure the routing.After a lot of trail and error we decided to abandon the idea of routing.
- 2.We then discussed on how to implement the GET and POST methods.We stumbled in a lot of errors. 
We started studying hasura functions and implementing the examples we saw.
The rest of the day was spent traying out different way to implement hasura actions.

####################################################################################################################################################################
# day-four
This day was a good day.
We started very good and finally managed to finish the react frontend.
We built the endpoints,fetched data from the database and fixed all the errors that came our way such as:
- hasura permission error
- react error
- undified data fetch erro
- etc







