# To Dos App with React!

## Table of Contents

1. [Purpose, tools and Languages:](#purpose-tools-and-languages)
2. [Instructions](#instructions)
3. [Desktop view](#desktop-view)
4. [Responsive view](#responsive-view)

<a name="purpose"></a>

## Purpose, tools and Languages

This is a simple task manager app where users are able to create, delete and update a task. It won't allow you to create or edit an empty task. Instead, it will show you an alert, created with sweetalert library. It was developed using vanilla javascript, Bootstrap and sweetalert2 for the styles.

The app also connects with the jsonplaceholder's API "/todos", a free and fake API available for tests which allowed me to implement the CRUD operations (Create/Post Method, Read/Get Method, Update/Put Method and Delete/Delete Method) in my app, meaning that when you run the code, the first thing you'll see is a list of tasks defined by the API used and by the GET method.

As I'm working in the development of my portfolio, this is my third created app. It looks exactly the same as the toDos Javascript and the toDosJQuery apps available in my repositories but the interactivity was made with react. It consists of six components that, combined with the store and the todoSlice where the reducers go, create the app. I choosed to make a to dos app beacuse i think it is a simple way of showing my skills and understanding of html, css, bootstrap, RESTful APIs and in this case React.

## Instructions

1. Go to the project directory in your terminal
2. Run npm start
3. You can now open http://localhost:3000 in your browser
4. You should see the app running now

As clarification if you want to update a new task that you added , it wont't work and that is because as it uses a fake API it won't update a new task that doesn't exist on the API. It is the only case but otherwise than that it works fine.

## Desktop view

This is a screenshot of the app desktop visualization:

![Screenshot of how the desktop image looks](/views/desktop.png?raw=true "Desktop design")

## Responsive view

This is a screenshot of the app responsive visualization:

![Screenshot of how the desktop image looks](/views/responsive.png?raw=true "Desktop design")

Hope you like it!
