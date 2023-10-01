# Phonebook

## STATUS: WIP

## 1. Summary
This project is a full-stack website that models a simple phonebook. It allows a user to log in and then create and delete phonebook
entries and filter entries. The goal of this project was to understand how to create a back-end to a website and then link it to the front-end. As a result, there is currently no styling work done.

The project is built using the MERN stack. It is still a work in progress but it has been a massive learning opportunity for me on how websites are built from the front-end and all the way to deploying it on the web on Fly.io.

This project is interesting to me because I've always wanted to learn how to build my own website from the ground up. It's also exciting to see how user authentication, specifically through JSON web tokens, works. I've been able to learn a lot about the many different choices one may face when deciding how to implement different features of a website. I've also been able to learn how to create a front-end and a back-end separately and then merge the two together.

## 2. Technologies used
- React : React was used to build a simple front-end UI. It was chosen in order to understand how to build single page applications.
- Axios.js : Axios was used to easily make API requests from the front-end. Axios was chosen over alternatives like Fetch due to its ease of use
- Json-server : This node package was used to model a fake back-end to initially test the front-end's HTTP requests.
- Node.js : I chose to use Node.js due to its ubiquity in modern day web development. There were also more learning resources available for Node.js than compared to alternatives such as Spring.
- Express : Express was used to build RESTful APIs with Node.js. This was also chosen due to the availability of learning resources.
- MongoDB Atlas: This no SQL option was chosen due to its ease of use, without requiring knowledge of relational databases and SQL. It was also the perfect choice to create a website using the MERN stack. In addition, Atlas is free to use.
- Bcrypt : Bcrypt was used for encryption in user authentication. Bcrypt was chosen due to its ease of use, following of NIST standards, and recommendation by professionals
- JSON web tokens : JSON web tokens were used to create Bearer tokens and implement token-based authentication. This allowed me to associate users with certain phone numbers. JSON web tokens was chosen to be used because it would be too difficult to implement server-side sessioning.
- Jest : Jest was used to write tests for the back-end.
- Fly.IO : This website was deployed using fly.io. Fly.io was selected because it is free to use and has an easy user interface.


## 3. Images
Login
<img width="1440" alt="Screenshot 2023-07-09 at 2 15 13 AM" src="https://github.com/Jona-Han/PasswordManager/assets/87393036/321ad3d2-f511-4aac-9759-edbea9bc8d0e">

Incorrect credentials
<img width="1440" alt="Screenshot 2023-07-09 at 2 24 41 AM" src="https://github.com/Jona-Han/Phonebook/assets/87393036/9641030b-5c1d-4ddb-a570-d5d29bf76b08">

Adding a user
<img width="1440" alt="Screenshot 2023-07-09 at 2 17 05 AM" src="https://github.com/Jona-Han/Phonebook/assets/87393036/a2805d5d-91a0-42c3-a5d3-e387f10fb51f">

<img width="1440" alt="Screenshot 2023-07-09 at 2 17 13 AM" src="https://github.com/Jona-Han/Phonebook/assets/87393036/53539e29-aece-48fb-a86c-caf96662dda2">

Filtering data
<img width="1440" alt="Screenshot 2023-07-09 at 2 18 23 AM" src="https://github.com/Jona-Han/Phonebook/assets/87393036/bcae535c-8089-42ee-8339-c972d7150e5d">




