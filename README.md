### Reflection

1. Why is it important to whitelist IP addresses in a real-world production environment? What are the risks of allowing connections from anywhere (0.0.0.0/0)?
   - Whitelisting is about maintaining control over who gets access to our application, servers, and ultimately, our database. We shouldnt give access to everyone. So we whitelist specific, trusted IP addresses and keep access restricted to legit users.

2. What is the purpose of the dotenv package? What other methods could you use to manage environment variables in a production environment (e.g., in a cloud hosting service)?
   - env files are a place to keep our api keys and db connection urls separate from our application. instead of hardcoding them in our application, .env files become a layer between the two. we do the same thing when setting up variables in cloud.

3. If your application failed to connect, what are the first few steps you would take to debug the issue?
   - check for errors in console, postman, terminal
   - check mongodb atlas to get the proper connection string including my db username and password if thats the problem.
