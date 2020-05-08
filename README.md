## Online Tutorial Api

**User**
*GET* *POST* *PUT* *DELETE*
- **Connection: User**

GET ALL USER
GET/api/v1/users
  - id: -string - unique ID of the user
  - firstName: -String - user's first name
  - lastName: -String- user's last name
  - email: -String- user's email address
  - category: -String- can only be either; primary, jss or sss
  - userType: -String- can only be student or tutor.
  - isAdmin: -Boolean- select if user is an admin or not. *

Find A Tutor
GET/api/v1/users/tutors/:name
  - 
