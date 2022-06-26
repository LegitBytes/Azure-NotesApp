# Azure-NotesApp

DB Name : crud

Collection Name : wishlist


Initialize List : [GET] https://functions-notes.azurewebsites.net/api/wishlist-init

Create a Item : [POST] https://functions-notes.azurewebsites.net/api/wishlist

              Body: {"name":"Hello",
                      "description" : "Hello World",
                      "url":"WelcometoEarth.com"}
                      
Get List : [GET] https://functions-notes.azurewebsites.net/api/wishlist

Get a List : [GET] https://functions-notes.azurewebsites.net/api/wishlist/{id}

Update a Item : [PUT] https://functions-notes.azurewebsites.net/api/wishlist/{id}

Delete a Item : [DELETE] https://functions-notes.azurewebsites.net/api/wishlist/{id}

Delete List : [DELETE] https://functions-notes.azurewebsites.net/api/wishlist

