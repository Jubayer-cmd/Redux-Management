# Redux-Content-Management

Description:

In this task, you will build a simple content management application. The type of content doesn't matter. It could be a technical blog, tutorial, post, or personal blog. A user should be able to post, modify or remove that content. All the content will be displayed on the home page as a card with a short description. A reader can click on the content and read it in detail.

Tech Stack (Required) :

React

Redux + React Redux (Old Redux)

Redux Thunk

Redux Dev Tools

Tasks:

Admin Part

Admin should be able to post, update and delete content.

User Part

Home Page:

Users can sort the contents based on date/time.

There would be 2 options 1. Sort by last upload, 2. Sort by the first upload.

Each content card should have multiple tags related to that topic, by clicking that tag the content card should rearrange (Get filtered).

Reading history

After clicking on each content, a reading history should be generated on the "Reading History" page.

Previously read content should be on this page, however, if a user clicks on already read content, then that particular content should move to the top of the page. (same content cannot be repeated on this list).

Note:

You do not need to implement user authentication as we have yet to cover this topic.

All data must be loaded from the server. You can use the Moon-tech server (Modify it if you need.) You have to host the server and connect the live link to your application.

You do not need to save the "Reading History" page's data locally or on the server. There is no problem if the data goes away after reloading the page.

You need to use the specific action names mention below for thunk-actions

You must integrate Redux Dev Tool. (This is important for cross-checking your assignment.)

Thunk Actions

ADD_CONTENT

GET_CONTENT

UPDATE_CONTENT

DELETE_CONTENT
