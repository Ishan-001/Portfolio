/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ishan . apk",
  title: "Hi, I'm Ishan",
  subTitle: emoji(
    "A passionate Full Stack Android Developer 🚀 having an experience of building Mobile applications with Kotlin / Java / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1R9CQyjWnjagjKAoMpDiR5mEq1dKHCFrD/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Ishan-001",
  linkedin: "https://www.linkedin.com/in/ishan-khandelwal-apk/",
  gmail: "axil.ishan3@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@ishan_",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  instagram: "https://www.instagram.com/ishan.apk/",
  twitter: "https://www.twitter.com/@_ishawn_",

  smallcase: "https://link.smallcase.com/RNfDPjs1hrb",
  spotify:
    "https://open.spotify.com/playlist/5XKU5UIaLOAmsbImnHrUNl?si=fTAOI_PmSeC6P5ywsTIEGw",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Android Developer specialising in Jetpack Compose",
  skills: [
    emoji(
      "⚡ Develop pixel perfect Front end / User Interfaces for mobile applications"
    ),
    emoji("⚡ Write efficient code using state of the art architectures"),
    emoji("⚡ Follow best coding practices and keep upskilling constantly")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "kotlin",
      fontAwesomeClassname: "fab fa-kotlin"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "ethereum",
      fontAwesomeClassname: "fab fa-ethereum"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Hartmann College",
      logo: require("./assets/images/hartmann.webp"),
      subHeader: "High School",
      duration: "March 2009 - April 2019",
      desc: "Graduated X with 94% and XII with 92%",
      descBullets: [
        "House Captain",
        "Music club",
        "House doubles badminton team",
        "House basketball team",
        "House quiz team"
      ]
    },
    {
      schoolName: "Vellore Institute of Technology",
      logo: require("./assets/images/vit.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "July 2019 - July 2023",
      desc: "Current CGPA of 8.45",
      descBullets: [
        "Technical Lead at IEEE-VIT",
        "Projects Lead at Codechef-VIT",
        "Event Host at VIT Techncial fest - Gravitas"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Android", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Java",
      progressPercentage: "80%"
    },
    {
      Stack: "Kotlin",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Android Developer",
      company: "Radius",
      companylogo: require("./assets/images/radius.png"),
      date: "July 2023 – July 2025",
      desc: "Worked on a CRM tool for brokerage teams in the US",
      descBullets: [
        "Worked on a 100% kotlin + compose codebase while following a multimodular CLEAN architecture",
        "Wrote complex UI features and animations in Jetpack Compose",
        "Worked with multiple third party tools like Mixpanel for analytics, Twilio for in-app calling, OneSignal, Rocket Chat, etc.",
        "Worked on our home-grown real estate AI agent - MEL",
      ]
    },
    {
      role: "Android Developer",
      company: "SuperShare",
      companylogo: require("./assets/images/supershare.png"),
      date: "Feb 2023 – July 2023",
      desc: "Worked on an app aiming to boost the creator economy and change the way people consume content on the internet.",
      descBullets: [
        "Worked on a 100% kotlin + compose codebase while following a multimodular CLEAN architecture",
        "Wrote complex UI features and animations in Jetpack Compose",
        "Worked extensively with Coroutines and Flows, along with Work Manager, Channels, etc.",
        "Wrote 50+ unit tests using Mockk and Junit.",
      ]
    },
    {
      role: "Android Developer",
      company: "Lokal",
      companylogo: require("./assets/images/lokal.png"),
      date: "Aug 2022 – Dec 2022",
      desc: "Worked on a hyperlocal social app with over 15 million downloads called Lokal. Lokal is a YC-S19 company with a total funding of more than $30M.",
      descBullets: [
        "Coordinated with the product and design team to come up with new features for the app.",
        "Worked with Kotlin, Java, MVVM, Retrofit, Coroutines, Hilt, Firebase, Room, etc.",
        "Got first hand experience with tools like Jira, Confluence, BitBucket, Slack, Trello, Mesh, etc."
      ]
    },
    {
      role: "Android Developer Intern",
      company: "Totality Corp",
      companylogo: require("./assets/images/totality.webp"),
      date: "Feb 2022 – May 2022",
      desc: "Worked on an NFT based web3 gaming ecosystem called Zionverse",
      descBullets: [
        "Worked on the Zionverse Android app",
        "Implemented face detection using tflite and android hardware layer",
        "Tested code for robustness",
        "Followed the CLEAN + MVVM pattern",
        "Worked with tools like Hilt, gRPC, Coroutines, etc."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Freelancing",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/daikin.png"),
      projectName: "Khandelwal Distributors",
      projectDesc:
        "Made an admin, customer and technician side of our online servicing software to handle customer queries and product repair services.",
      footerLink: [
        {
          name: "Visit website",
          url: "https://www.khandelwaldistributors.com"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nearcast.png"),
      projectName: "Nearcast",
      projectDesc:
        "Worked on CameraX api and ffmpeg to make a photo/video editor for the Nearcast app",
      footerLink: [
        {
          name: "Visit website",
          url: "https://www.nearcast.com/"
        }
      ]
    },
    {
      image: require("./assets/images/health.jpg"),
      projectName: "Health Byte",
      projectDesc:
        "Worked on a an app to detect sleep apnea from user's sleep data recorded using microphone and analysed on a background thread."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements🏆 "),
  subtitle:
    "Achievements, Hackathon wins, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Devspace - CSI VIT",
      subtitle: "Won the second runners up prize under the Ethereum track ",
      image: require("./assets/images/devspace.PNG"),
      footerLink: [
        {
          name: "View certificate",
          url: "https://www.linkedin.com/in/ishan-khandelwal-apk/details/featured/1635457281417/single-media-viewer/"
        }
      ]
    },
    {
      title: "Hacklipse - ACM Thapar",
      subtitle:
        "Won the overall second prize while representing VIT at Thapar University",
      image: require("./assets/images/hacklipse.PNG"),
      footerLink: [
        {
          name: "View certificate",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "VIT Hack",
      subtitle: "Won the design track of the pretigious VIT Hack",
      image: require("./assets/images/vithack.png"),
      footerLink: [
        {
          name: "View certificate",
          url: "https://www.linkedin.com/in/ishan-khandelwal-apk/details/featured/1635457283176/single-media-viewer/"
        }
      ]
    },

    {
      title: "Bookmarked",
      subtitle: "My first app that I published on Play Store",
      image: require("./assets/images/bookmarked.PNG"),
      footerLink: [
        {
          name: "View app",
          url: "https://play.google.com/store/apps/details?id=com.codechefvit.bookmarked"
        }
      ]
    },

    {
      title: "VIT Achiever's Award 2020-21",
      subtitle:
        "An acknowledgement by my university for representing VIT at a national level",
      image: require("./assets/images/achiever.PNG"),
      footerLink: [
        {
          name: "View certificate",
          url: "https://www.linkedin.com/in/ishan-khandelwal-apk/details/featured/1635483828688/single-media-viewer/"
        }
      ]
    },

    {
      title: "Jio Smart Glass developer",
      subtitle:
        "Worked on the Jio mixed reality sdk being a part of their developer's program",
      image: require("./assets/images/jio.webp"),
      footerLink: [
        {
          name: "Apply",
          url: "https://tesseract.in/developers"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/techloop/10-tools-and-widgets-every-android-developer-should-know-about-1a98c089c54e",
      title: "Essential Android libraries for beginners",
      description:
        "10 libraries and tools every Android developer should know about"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Talks/Podcasts",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
      {
      title: "My journey as an Android Dev",
      subtitle: "Hosted by theCommute - Hitesh Kohli",
      event_url: "https://www.youtube.com/watch?v=5MYH_0BlyYg"
    },
    {
      title: "Introduction to Blockchain",
      subtitle: "A webinar on blockchain technology organised by IEEE-VIT",
      event_url: "https://www.youtube.com/watch?v=jAfqgfhAJRI"
    },

    {
      title: "Hack the hackathon by IEEE-VIT",
      subtitle: "A webinar on tips and tricks to do well at hackathons",
      event_url: "https://www.youtube.com/watch?v=lM-0yUOWaPU"
    },

    {
      title: "Tech Talks by Codechef-VIT",
      subtitle: "A conversation with Naveen Reddy on blockchains",
      event_url: "https://www.youtube.com/watch?v=XSw14dsCU4k"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss am opportunity or just want to say hi? My Inbox is open for all.",
  number: "+91-7017497935",
  email_address: "ishanx.career@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "_ishawn_", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
