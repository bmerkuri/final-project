# Day-one 
- Project Description
Skill-Matrix is a project where the main goal is to collect data from the survey.This survey will contain many questions for a large amount of users in   different timestamps. The questions will be displayed in different types.

Project Objectives
- [ ] Building a survey app with haura and react 
- [x] Getting the questions and answers from the hasura backend
- [x] Getting the answer the user provides and sending it to the backend

Requirements
- Making the app responsive
- Building UX/UI
- Build the unit testing

As it was the first day we wanted to understand the project better and also figure out each individual's abilities and distributing roles
The list below containes the activities we followed that day:
- Did Project BrainStorming with the team
   - We started research the topic,We looked thorugh the references that marco sent us etc.
- Distributed Roles
   - When we started discussing our areas of expertise we found out that we had pretty much the same skills.
   - I personally had more experience in java than Elvis and Frajdi and those two had more experience in react than me. 
- Build database tables
    - We created the tables based on the information that marco sent us.We made sure that everything was up and running. 

---

# Day-two
We started the day with a lot of motivation.We came together and started to discuss methods of implementing the template.
We brainstormed different methods also googling some too and came to two methods which we thought were the best:
1.  using a library called surveyjs
2.  using routes and component to house the questions

We decided to test the first method a.k.a surveyjs.
Building a form with surveyjs was fairly easy and simple.We basically had to go to the surveyjs website,create the question there by filling the missing places and copy the JSON format of those question.
To implement the question in out code we had to do some coding.
We built 3 files.
The first file contained the JSON format
The second file contained the Question component which dictated how the question would appear to the user.
The third and final file called the Question component.

We did two tests with these methods.
The first test was just trying out the surveyjs and see if it worked,gave any erros etc.
The second test was most important.We had to add this form we just created to the jwt token login.We were worried on how to implement it at first.
I then saw a youtube video and realised it was fairly  simple.:joy:

Everything was going great but we seemed to have forgetten something.:thinking:
What we forgot was was that the questions were hard coded which violates the project requierement to get the questions and answers from the backend.
:expressionless:

We basically had to start from scratch again but at least now we had a better idea about the project.


---

# Day-three
As discussed in the previous day we decided to test out the second method that was proposed.
The second method was about building a component for the Questions and then calling them
We stumbled on a lot of errors with this method .
The list below shows the erros :

1. The app didn't allow us to configure the routing.After a lot of trail and error we decided to abandon the idea of routing.
   - We didn't even read the requierement proparly and wasted some time on a dumb idea :neutral_face:.
3. We then discussed on how to implement the GET and POST methods.We stumbled in a lot of errors.
   - The errors were mainly with the endpoints and the get methods.
   - We were instructed to use either queries,hasura actions or axios.
We tested out the hasura actions but unfortunately we couldnt show the question on screen.


---
# Day-four
This day was a good day.
We started very good and finally managed to finish the react frontend.

We built the endpoints,fetched data from the database and fixed all the errors that came our way such as:
- hasura permission error
- react error
- undefined data fetch error
- etc
We decided to use axios.After building the get methods and calling these methods on the Question component ,the app was up and running.

---

# Day-five
This day progress was kind of slow.The objective of this day was to show all the questions and answers fetched from the database at once.
We stumbled on a lof of errors at this step.
The maain problem was how to loop through the json file to show all the questions and answers.
We tried different kinds of loops like a for loop,while loop etc.None of them worked.
I thought that one of the problems was that we had 2 endpoints.So i created an endpoint that contained both answers and questions but we still had problems
showing all the questions and answers.
We asked one of our mentors for help and he instructed us to use a map function.
With his help we finally managed to show all the questions.
We still have issues regarding the answers part but hopefully we will solve them these days.

---

# Day-six and Day-seven
I gathered the team on an online call to discuss about the project.
We had many ideas but most if not all of them were regarding the post method.
Ervis proposed the idea of adding a column to the table answers or just creating a new table all together.
We decided to give it a try since we didnt have another idea at that moment.
The rest of the day was spent searching and trying new methods for posting data.

---

# Day-eight
Since it was a holiday,we didnt work as much so just a portion of the day was dedicated to the project.

---

# Day-nine
Elvis showed us the sessions method he was working on.
The session method allows us to store the users responses.
We faced a couple of issues with these method:
      1.it kept showing data as [object,Object]
I searched up online and found the solution to this problem.
The code that Elvis did was fine ,we just needed to add a JSON.stringfy() method to the getAnswers method so that we would read the object data as a string JSON.
      2.We could't register the user response for each question.Everytime we tried to get the other question and answer,it deleted the previous question-answer and added the new one.
      We asked Rezart(one of our mentors) for help.He did come up with a solution to put the data in an array but the app itself has a probelm.That problem was that it kept rendering all the time so the array pof objects was always zero.



---
# References
[Survey Example](https://miro.com/app/board/uXjVOscQiDU=/?moveToWidget=3458764528700140377&cot=14)
[Starter Project](https://miro.com/app/board/uXjVOscQiDU=/?moveToWidget=3458764528700092659&cot=14)
[React Query](https://miro.com/app/board/uXjVOscQiDU=/?moveToWidget=3458764528706769978&cot=14)
[Mui React](https://miro.com/app/board/uXjVOscQiDU=/?moveToWidget=3458764528706770248&cot=14)
[LocalStroage,Session Storage](https://www.robinwieruch.de/local-storage-react/)



