var config = {

  style: "mapbox://styles/slashinsky/ckg2nqo9s0w5p19muw9au2uco",
  /* style: "mapbox://styles/mapbox/streets-v11",*/

  accessToken:
    "pk.eyJ1Ijoic2xhc2hpbnNreSIsImEiOiJjajgzZ3lmaXcydm9mMzJvMGhnZDV5dzY0In0.EPHCQX6kQANsHdJueUZLmQ",
  showMarkers: true,
  theme: "light",
  alignment: "left",
  title: "Diary of a Georgia Voter",
  subtitle: "Follow me on my four-hour wait to vote in the June primaries.",
  byline: "🍑 Interactive map by Sarah Lashinsky",
  footer: "Built with Mapbox ♥ With thanks to Lo Bénichou for their scrollytelling guide, and Brenton Strine & Brian Sanders for pair sessions. ♥ Photos by Finch & Anna Bryant Zietz",
  chapters: [
    {
      id: "full-path",
      title: "6:45 AM",
      image: "",
      description: "2 hours, 15 minutes until work. // I arrived at my polling place, a nearby elementary school, 15 minutes before voting starts. Because of COVID-19, I'd planned to vote by mail, but when my partner's mail-in ballot never arrived, we decided to vote in-person.",
      location: {
        center: [-84.36670, 33.73551],
        zoom: 16.03,
        pitch: 0.00,
        bearing: 0.00,
      },
      onChapterEnter: [
        {
        
        }
      ],
      onChapterExit: [
        {
        }
      ],
    },

    {
      id: "card-1",
      title: "7:03 AM",
      image: "./images/voting-1.png",
      description: "1 hour, 57 munutes until work. // I quickly learn that 15 minutes early to is not early enough. We are the 113th and 114th voters to get in line.",
      location: {
        center: [-84.3667, 33.736],
        zoom: 19,
        pitch: 0.00,
        bearing: 0.00,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "card-2",
      title: "8:34 AM",
      image: "./images/voting-2.png",
      description: "26 minutes until work. // I am grateful for my habit of keeping a few folding chairs in the trunk. I have been waiting in line for nearly 2 hours at this point, and have moved a few feet.",
      location: {
        center: [-84.3660, 33.7355],
        zoom: 18.5,
        pitch: 60,
        bearing: 0,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "card-3",
      title: "8:40 AM",
      image: "./images/voting-3.png",
      description: "20 minutes until work. // The sky starts to look a bit ominous, and it begins to drizzle shortly afterwards.",
      location: {
        center: [-84.36582684516907, 33.73537158396234],
        zoom: 18,
        pitch: 65,
        bearing: 0,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "card-4",
      title: "9:35 AM",
      image: "./images/voting-4.png",
      description: "35 minutes late to work. // At nearly three hours of waiting, we crest the halfway point on our way to the ballot.",
      location: {
        center: [-84.36464801430701, 33.73534258673366],
        zoom: 19,
        pitch: 60,
        bearing: 0,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "card-5",
      title: "10:24 AM",
      image: "./images/voting-5.png",
      description: "1 hour, 24 minutes late to work.",
      location: {
        center: [-84.36393454670906, 33.735360710002716],
        zoom: 19,
        pitch: 60,
        bearing: 0,
      },
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "card-6",
      title: "11:00 AM",
      image: "./images/voting-6.png",
      description: "2 hours late to work. // I am finally able to cast my vote.",
      location: {
        center: [-84.36389431357384, 33.73526117138539],
        zoom: 19,
        pitch: 60,
        bearing: 0,
      },
      onChapterEnter: [],
      onChapterExit: [],
    }
  ],
};
