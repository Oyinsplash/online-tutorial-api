## Online Tutorial Api

**User**
*GET* *POST* *PUT* *DELETE*
- **Connection: User**
  - id: unique ID of the user.
  - firstName: user's first name
  - lastName:  user's last name
  - email: user's email address
  - category:  can only be either; primary, jss or sss
  - userType: can only be student or tutor.
  - isAdmin: select if user is an admin or not. *

- REGISTER A USER
  - POST/api/v1/signup
  {
  firstName: String, 
  lastName:  String,
  email: String,
  password: String,
  category: String,
  userType: String
  isAdmin: Boolean 
  }
  
- USER LOGIN
  - POST/api/v1//login
  {
  email: String,
  password: String
  }
  
- GET ALL USER
  - GET/api/v1/users
  
- GET ALL TUTORS  
  - GET/api/v1/users/tutors

- Find A Tutor
  - GET/api/v1/users/tutors/:firstName

- GET ALL STUDENTS  
  - GET/api/v1/users/students
  

