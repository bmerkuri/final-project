## day-one
- Project Description
Skill-Matrix is a project where the main goal is to collect data from the survey.This survey will contain many questions for a large amount of users in   different timestamps. The questions will be displayed in different types.

Project Objectives
- [ ] Building a survey app with haura and react
- [ ] Getting the questions and answers from the hasura backend
- [x] Getting the answer the user provides and sending it to the backend

Requirements
- Making the app responsive
- Building UX/UI
- Build the unit testing
--------
      
- Did Project BrainStorming with the team
- Distributed Roles
- Build datbase tables

##########################################################################################################################################

# day-two
- Discussed methods for implemeting template
We discussed different methods on how to implement the frontend.We had two main methods:
1.  using a library called surveyjs
2.  using routes and component to house the questions
Testing the first method

We decided to use the surveyjs method.
We build the frontend with the questions and answers.The web app became very responsive and we styled the app to have a better UX/UI.

- Creating the react template for the app

After we created the questions and answers ,we integrated the jwt login token to the app.Everything workout out fine.
There was a issue with this method and that was that the questions were hard coded which violates the project requierement to get the questions and answers from the backend.

############################################################################################################################################

# day-three
- testing the second method for the frontend
- 
-We decided to test the second method and that was building the component for the questions and then calling them.
-We stumbled upon some problems with these methods.

1. The app didn't allow us to configure the routing.After a lot of trail and error we decided to abandon the idea of routing.
2. We then discussed on how to implement the GET and POST methods.We stumbled in a lot of errors.
 
We started studying hasura functions and implementing the examples we saw.
The rest of the day was spent trying out different way to implement hasura actions.

############################################################################################################################################
# day-four
This day was a good day.
We started very good and finally managed to finish the react frontend.
We built the endpoints,fetched data from the database and fixed all the errors that came our way such as:
- hasura permission error
- react error
- undefined data fetch error
- etc
############################################################################################################################################
# day-five
This day progress was kind of slow.The objective of this day was to show all the questions and answers fetched from the database at once.
We stumbled on a lof of errors at this step.
The maain problem was how to loop through the json file to show all the questions and answers.
We tried different kinds of loops like a for loop,while loop etc.None of them worked.
I thought that one of the problems was that we had 2 endpoints.So i created an endpoint that contained both answers and questions but we still had problems
showing all the questions and answers.
We asked one of our mentors for help and he instructed us to use a map function.
With his help we finally managed to show all the questions.
We still have issues regarding the answers part but hopefully we will solve them these days.

############################################################################################################################################

# day-six and day-seven
I gathered the team on an online call to discuss about the project.
We had many ideas but most if not all of them were regarding the post method.
Ervis proposed the idea of adding a column to the table answers or just creating a new table all together.
We decided to give it a try since we didnt have another idea at that moment.
The rest of the day was spent searching and trying new methods for posting data.

############################################################################################################################################

# day-eight
Since it was a holiday,we didnt work as much so just a portion of the day was dedicated to the project.

############################################################################################################################################

# day-nine
Elvis showed us the sessions method he was working on.
The session method allows us to store the users responses.
We faced a couple of issues with these method:
      1.it kept showing data as [object,Object]
I searched up online and found the solution to this problem.
The code that Elvis did was fine ,we just needed to add a JSON.stringfy() method to the getAnswers method so that we would read the object data as a string JSON.
      2.We could't register the user response for each question.Everytime we tried to get the other question and answer,it deleted the previous question-answer and added the new one.
      We asked Rezart(one of our mentors) for help.He did come up with a solution to put the data in an array but the app itself has a probelm.That problem was that it kept rendering all the time so the array pof objects was always zero.






