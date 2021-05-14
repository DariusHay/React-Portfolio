// import React from "react";
import news from "../pics/news.png";
import med from "../pics/medstocks.png";
import tech from "../pics/techblog.png";
import weather from "../pics/Weather-Dashboard.png";
import Employee from "../pics/home.png";
import budget from "../pics/budget.png";

const apps = [
    {
        id: 1,
        title: "We The People (Collaboration)",
        image: news,
        text: "This is a site where a User can enter their State, County, City, or Address and view the government officials for that location. This site was created using HTML, CSS, JQuery, Materialize, Google Civic API, and Bing News API.",
        site: "https://raquellee.github.io/we_the_people/",
        github: "https://github.com/RaquelLee/we_the_people"

    },
    {
        id: 2,
        title: "MED Stocks (Collaboration)",
        image: med,
        text: "This is a site where the User can find information on Stocks. They also can find links to websites where they can begin investing. This site was created using HTML, CSS, JavaScript, Handlebars, MySQL, Axios, Sequelize, Node.js, and more.",
        site: "https://medstocks.herokuapp.com/",
        github: "https://github.com/02Dade12/projectMED"

    },
    {
        id: 3,
        title: "Tech Blog",
        image: tech,
        text: "This is a site where a User can create an account, and begin blogging about their favorite Coding Languages. This site was created using HTML, CSS, JavaScript, Handlebars, MySQL, Express, Sequelize, Node.js, and more.",
        site: "https://techblogcreate.herokuapp.com/",
        github: "https://github.com/DariusHay/Tech_Blog"

    },
    {
        id: 4,
        title: "Weather Dashboard",
        image: weather,
        text: "This is an app where the User can enter any city into the search bar and view the current weather and a five day forecast for that city. The OpenWeatherMap API, JQuery, HTML, CSS, LocalStorage, and Bootstrap was used to create this app.",
        site: "https://dariushay.github.io/weather-dashboard/",
        github: "https://github.com/DariusHay/weather-dashboard"

    },
    {
        id: 5,
        title: "Employee Directory",
        image: Employee,
        text: "This is an application that was created to portray a real life Employee Directory. The User can search employees by name, filter by gender, and view the profile of each employee. React.js, and the Random-User API was used to create this application.",
        site: "https://dariushay.github.io/EmployeeDirectory/",
        github: "https://github.com/DariusHay/EmployeeDirectory"

    },
    {
        id: 6,
        title: "Budget Tracker",
        image: budget,
        text: "This is an application that allows the user to budget transactions and generates a graph of detailed results. IndexDB, Service-Worker.js, and manifest.json was used to give this app the ability to be used offline and/or downloaded.",
        site: "https://desolate-tundra-56837.herokuapp.com/",
        github: "https://github.com/DariusHay/Budget-Tracker"

    }

]

export default apps;
