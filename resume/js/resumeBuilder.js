//**BIO SECTION**

var bio = {
  "name" : "Laurel Hechanova",
  "role" : "Designer, Developer",
  "contact" : {
    "mobile" : "+1 773 319 2325",
    "email" : "laurel@thisisaok.com",
    "twitter" : "twitter.com/hechanova",
    "github" : "github.com/hechanova",
    "blog" : "thisisaok.com/blog",
    "location" : "SF"
  },
  "bioPic" : "images/fry.jpg",
  "welcomeMsg" : "Hello. Thanks for stopping by.",
  "skills" : ["Design", "Development", "Illustration"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedBlog = HTMLblog.replace("%data%", bio.contact.blog);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedBlog);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcome);

// var formattedSkills = HTMLskills.replace("%data%", bio.skills);
// $("#header").append(HTMLskillsStart);
// $("#header").append(formattedSkills);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (var i = 0; i < bio.skills.length; i++) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
  }
}


//**WORK SECTION**

var work =
{
  "jobs" :
    [
      {
        "employer" : "Findery",
        "title" : "Product Designer",
        "dates" : "2013 - Present",
        "location" : "San Francisco, CA",
        "description" : "UI and UX design for iOS, Android and web apps",
        "url" : "http://www.findery.com"
      },
      {
        "employer" : "Freelance",
        "title" : "Designer",
        "dates" : "2011 - 2013",
        "location" : "Chicago, IL",
        "description" : "UI and graphic design for small businesses and non-profits",
        "url" : "http://www.thisisaok.com"
      },
      {
        "employer" : "mStoner",
        "title" : "Designer",
        "dates" : "2007 - 2011",
        "location" : "Chicago, IL",
        "description" : "UI and graphic design for colleges and universities",
        "url" : "http://www.mstoner.com"
      }
    ]
}

// var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
// var formattedTitle = HTMLworkTitle.replace("%data%", work.title);
// var formattedDates = HTMLworkDates.replace("%data%", work.dates);
// var formattedLocation = HTMLworkLocation.replace("%data%", work.location);
// var formattedDescription = HTMLworkDescription.replace("%data%", work.description);
//
// $("#workExperience").append(HTMLworkStart);
// $("#workExperience").append(formattedEmployer);
// $("#workExperience").append(formattedTitle);
// $("#workExperience").append(formattedDates);
// $("#workExperience").append(formattedLocation);
// $("#workExperience").append(formattedDescription);

function displayWork(){
  for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var EmployerName = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedEmployer = EmployerName.replace("#",work.jobs[job].url);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDate = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    $(".work-entry:last").append(formattedDate);
    var formattedDesc = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $(".work-entry:last").append(formattedDesc);
  }
}
displayWork();


//**PROJECTS SECTION**

var projects =
{
  "projects" :
  [
    {
      "title" : "Findery iOS app",
      "dates" : "2013 - 2014",
      "description" : "iOS application that allows people to attach content to geographic coordinates",
      "images" : ["images/findery1.jpg", "images/findery2.jpg", "images/findery3.jpg"]
    },
    {
      "title" : "Findery Android app",
      "dates" : "2014",
      "description" : "Android application utilizing Findery's platform",
      "images" : ["images/android1.jpg", "images/android2.jpg", "images/android3.jpg"]
    },
    {
      "title" : "Threadflip iOS app",
      "dates" : "2012",
      "description" : "iOS application that allows users to buy and sell designer clothing",
      "images" : ["images/tf1.jpg", "images/tf2.jpg", "images/tf3.jpg"]
    }
  ]
}

//**EDUCATION SECTION**

var education =
{
  "schools" :
  [
    {
      "name" : "Columbia College Chicago",
      "city" : "Chicago, IL",
      "degree" : ["BFA"],
      "major" : "Graphic Design"
    },
    {
      "name" : "University of Guam",
      "city" : "Mangilao, GU",
      "major" : ["Fine Arts"]
    }
  ],
  "onlineCourses" :
  [
    {
      "title" : "Front-End Web Dev Nanodegree",
      "school" : "Udacity",
      "dates" : "2014",
      "url" : "http://www.udacity.com/course/ud804"
    }
  ]
}
