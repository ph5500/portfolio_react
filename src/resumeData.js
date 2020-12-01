import { SocialIcon } from "react-social-icons";

let resumeData = {
  imagebaseurl: "https://ph5500.github.io/",
  name: "Phil Fives",
  role: "Full Stack Developer",
  linkedinId: <SocialIcon url="https://www.linkedin.com/in/phil-fives/" />,
  roleDescription:
    " I thoroughly enjoy the learning process and creating software applications. I have a deep interest in simplicity and decentralization",
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/phil-fives-85a17187/",
      className: "fa fa-linkedin",
    },
    {
      name: "github",
      url: "https://ph5500.github.io/",
      className: "fa fa-github",
    },
    {
      className: "fa fa-twitter",
    },
  ],

  aboutme:
    "I am currently a Student at LambdaSchool where I am studying Full Stack Web Development. Before this, I worked on the product team at a Machine Learning startup focused on financial Data. Previously played soccer professionally in Sweden. Love soccer and asymmetric returns.",

  address: "Denver, Colorado",

  website: "https://www.linkedin.com/in/phil-fives-85a17187/",

  email: "philfives@gmail.com",

  education: [
    {
      UniversityName: "Indiana University of Bloomington",
      Major: "Bachelors of Science in Public Affairs",
      MonthOfPassing: "December",
      YearOfPassing: "2016",
      Achievements: "Member of Division 1 IU Men's Soccer team",
    },
    {
      UniversityName: "University of Akron",
      Major: "Business",
      MonthOfPassing: "May",
      YearOfPassing: "2013",
      Achievements: "Member of Division 1 Akron Men's Soccer team",
    },
  ],

  work: [
    {
      CompanyName: "Parallel Laboratories",
      specialization: "Content Analyst",
      MonthOfLeaving: "June",
      YearOfLeaving: "2019",
    },
    {
      CompanyName: "Signpost",
      specialization: "Sale Representative",
      MonthOfLeaving: "January",
      YearOfLeaving: "2020",
    },
  ],
  skillsDescription: "Skills",

  skills: [
    {
      skillname: "React",
    },
    {
      skillname: "Javascript",
    },

    {
      skillname: "nodejs",
    },
    {
      skillname: "Styled-Components",
    },
    {
      skillname: "Ant-Design",
    },
    {
      skillname: "Firebase",
    },
    {
      skillname: "nextJS",
    },
    {
      skillname: "knex",
    },
    {
      skillname: "CSS",
    },
    {
      skillname: "MongoDb",
    },
  ],

  portfolio: [
    {
      name: "https://a.humanrightsfirst.dev/",
      description:
        "map and timeline visualization to view police violence occuring across the country. Accessed by using a 3rd party API.",
    },
    // {
    //   nametwo:
    //     'https://github.com/ph5500/nasa-photo-of-the-day/tree/phil-fives',
    //   descriptiontwo: 'NASA API that fetches the photo of the day'
    // }
  ],
};

export default resumeData;
