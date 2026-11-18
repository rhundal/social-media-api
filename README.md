### Reflection

1. Why is it important to whitelist IP addresses in a real-world production environment? What are the risks of allowing connections from anywhere (0.0.0.0/0)?
2. What is the purpose of the dotenv package? What other methods could you use to manage environment variables in a production environment (e.g., in a cloud hosting service)?
3. If your application failed to connect, what are the first few steps you would take to debug the issue?
   - check for errors in console, postman or terminal
   - if i found connection string errors, i would go to the mongodb atlas to get the proper connection string including my db username and password and use that as my conneciton string
