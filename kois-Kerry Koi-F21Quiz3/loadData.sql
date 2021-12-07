

CREATE TABLE `project`(
  `id` varchar(100) NOT NULL,
  `abbr` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `web` varchar(100) NOT NULL,
  `desc` varchar(100) NOT NULL,
  `time` varchar(100) NOT NULL,
  `loc` varchar(100) NOT NULL,
  `cat` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  PRIMARY KEY(`id`)
);

INSERT INTO project VALUES
  ("1","RAS", "Astrophysical Society", "https://astro.union.rpi.edu/", "The Rensselaer Astrophysical Society (RAS) allows students to pursue their interest in astronomy. The society works in conjunction with the physics department to maintain the Hirsch Observatory atop the Science Center. Students are trained in the use of observatory and the Society's various telescopes, then placed on the observatory key list. Once on the key list, members can use the observatory at any time. The club also helps run Saturday night public observing sessions between February and November of each year.","Mondays at 9 pm", "Library", "Science", "images/Astro.jpg"),
  ("2","RDI", "Dance Team", "https://astro.union.rpi.edu/","RPI Dance Team is a group of students who share a love for dance and performance. We promote school spirit by performing jazz, pom, and hip hop numbers at home football games, home basketball games, and other school events. We also compete annually in the spring.","Wednesdays at 7pm","Mueller Center","Dance", "images/dance.jpg"),
  ("3","RDI", "Super Smash Bros Club", "https://www.facebook.com/groups/RPISmash/","A club for the enjoyment of Super Smash Bros, from both the competitive and the casual side. For more information PLEASE CONTACT our club officers: ssb@union.lists.rpi.edu","Sundays at 2pm","Union", "Gaming","images/smashbros.jpg")
