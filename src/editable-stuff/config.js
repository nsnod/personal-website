// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#000000, #0a0a0a, #141414, #1e1e1e, #282828, #323232, #3c3c3c, #464646, #505050, #5a5a5a",
  firstName: "Noah",
  middleName: "",
  lastName: "Snodgrass",
  message: " Passionate about building, hacking, and learning.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/nsnod",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/noah-snodgrass-502a6a253/",
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
  resume: "https://drive.google.com/file/d/1iW6KrPmjH6Axcp3-0NXkCeOUda5xDvoY/view?usp=sharing",
};

// Experience
const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'CTE Instructor', // Add Company Name
      companylogo: require('../assets/img/Updated-Give-Back.png'),
      date: 'September 2024 – Present',
      message: "Developing and delivering cybersecurity workshops for high school students facing adverse childhood experiences, with a focus on practical skills to spark interest in the CSUSB cyber pathway and other post-secondary education opportunities in Cybersecurity."
    }
  ]
}
// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "While in UCR, I hold key leadership positions as President of Career Cipher and Treasurer of ACM. I founded Career Cipher, assembling a team of 7 board members. We host sessions for DSA problems and logical puzzles, mock interviews, and resume reviews with industry professionals. As president, I delegate tasks and lead our open source projects. As treasurer of ACM, I manage budgets, organize fundraisers, and plan purchases for events. I also run a club bank account and maintain open communication with ASUCR and BCOE faculty.",
  images: [
    { 
      img: require("../assets/img/acm.png"), 
      label: "", 
      paragraph: "" 
    },
    { 
      img: require("../assets/img/careercipher.png"), 
      label: "", 
      paragraph: "" 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// PROJECTS SECTION
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
      specificRepos: ["CTorch", "TaskPlusPlus", "PacketPigeon", "prodclueless", "sarahs-website", "mistcreepsite", "crypto-watchlist-bots"],
      images: [
        require("../assets/img/CTorch.png"),
        require("../assets/img/taskplusplus.png"),
        require("../assets/img/pp.png"),
        require("../assets/img/prodclueless.png"),
        require("../assets/img/sarah-website.png"),
        require("../assets/img/mistcreep.png"),
        require("../assets/img/crypto.png"),
      ]
    },
  ],
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


// Blog SECTION
const blog = {
  show: false,
};

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
