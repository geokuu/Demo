import img1 from "../assets/images/img-1.png";
import img2 from "../assets/images/img-2.png";
import img3 from "../assets/images/img-3.png";
import img4 from "../assets/images/img-4.png";

const data = {
  projects: [
    {
      type: "Civic initiative",
      image: img1,
      title: "Opening of Planetarium in Tallinn",
      creator: "Vladimir Goman",
      pledged: "12 600€",
      percentage: "67%",
      daysLeft: 32,
    },
    {
      type: "Events",
      image: img2,
      title: "Q-Space LGBTQ+ Cultural Festival in Tallinn",
      creator: "Q-Space MTÜ",
      pledged: "560€",
      percentage: "12%",
      daysLeft: 20,
    },
    {
      type: "Music",
      image: img3,
      title: 'The making of Cú’s debut album "Voolamine"',
      creator: "Jaan Eerik Priks",
      pledged: "2 432€",
      percentage: "43%",
      daysLeft: 55,
    },
    {
      type: "Food & Drink",
      image: img4,
      title: "Wine Advent Calendar by Sommelier",
      creator: "Securetech",
      pledged: "1 484€",
      percentage: "84%",
      daysLeft: 4,
    },
  ],
  sectionNames: ["Most momentum", "Recently launched", "Closing soon"],
  categories: [
    "Design",
    "Education",
    "Environment",
    "Civic initiative",
    "Film & Photo",
    "Cultural ambassadors",
    "Art",
    "Media",
    "Music",
    "Games",
    "Sport",
    "Food & Drink",
    "Events",
    "Theatre",
    "Technology",
    "Print",
  ],
};

export default data;
