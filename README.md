This project has frontend,backend and database
For frontend -developed using REACTJS ,backend -NODEJS ,database-MONGODB
BACKEND
The server will start after running node index.js in the localhost:5000 and it also get connected to database.
In backend the person can able to(get) fetch the data without any authorization.
To post and put (to add and update)the data the person must have to be authorized i.e he must have created the account by giving the details of username,email,password.
Here i have maken the email has unique property (already registered email can't be used to create new account).
After creating the account the person are provided with jsonwebtoken.By using the token he can able to make the change.
To delete the data the person want to be both authorized user and admin.
If the person has already created the account their email and password are checked and the token is provided.If either one is wrong the server will throw invalid username or password and the token will not be provided.
UNIT TESTING
Here created the unit test to check wheater the generated auth token is correct ot wrong



