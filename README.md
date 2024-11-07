#DevTinder Frontend

-Created applocation vite+react
-install npm modules in the project
-install tailwind css


--Create A login page
cors issue in the frontend since the both domain name is different we have to use
-axios for frontend to interact with making backend call of post method
-cors middleware setup in the backend with origin and credentials
-- and in the axios we have to pass withcredentials true to get token 


--After login we have to store the user data in the store for uses of later

-useSelector hook is used to select anything from the store
-useDispatch is a function that is used to trigger action in the reducer according to the event called 

-while refereshing the page the store get refreshed suppose the user loged in and we are going to store his data in the store
and after that it refresh the page then again the store data will get lost and eventually it will create a problem user have 
to loged in again that is why 

