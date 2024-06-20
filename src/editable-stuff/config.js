// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Noah",
  middleName: "",
  lastName: "Snodgrass",
  message: " Passionate about building. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/nsnod",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/noah-snodgrass-502a6a253/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/sixfourinstem/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/noahsnodgrass.png"),
  imageSize: 375,
  message:
    "My name is Noah Snodgrass. I am a third year pursuing my Bachelor's Degree in Computer Science at the Univeristy of Riverside California. I'm passionate about Machine Learning, Cyber Security, and the intersection between these two fields.",
  resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsers: [
    {
      username: "Jeli04",
      reposLength: 0,
      specificRepos: ["DividedWeFallV2"],
      images: [
        require("../assets/img/dwf.png")
      ]
    },
    {
      username: "nsnod",
      reposLength: 0,
      specificRepos: ["TaskPlusPlus", "sarahs-website", "PacketPigeon", "crypto-watchlist-bots"],
      images: [
        require("../assets/img/taskplusplus.png"),
        require("../assets/img/sarah-website.png"),
        require("../assets/img/pp.png"),
        require("../assets/img/crypto.png")
      ]
    },
  ],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "During my time at UCR, I held two key leadership positions. I founded Career Cipher, assembling a team of 7 board members. We host sessions for DSA problems and logical puzzles, mock interviews, and resume reviews with industry professionals. As president, I delegate tasks and lead our open source projects. As treasurer of ACM, I manage budgets, organize fundraisers, and plan purchases for events. I also run a club bank account and maintain open communication with ASUCR and BCOE faculty.",
  images: [
    { 
      img: require("../assets/img/acm.png"), 
      label: "ACM Treasurer", 
      paragraph: "March 2023 - Present" 
    },
    { 
      img: require("../assets/img/careercipher.png"), 
      label: "Career Cipher President", 
      paragraph: "August 2023 - Present" 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 100 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Machine Learning and Cyber Security internships or jobs! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "noahsnodgrass1@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Open Source Developer',// Here Add Company Name
      companylogo: require('../assets/img/pytorch.png'),
      date: 'June 2024 – Present',
    }
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
