// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data

const users = [
    {
      id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'User',
      email: 'user@nextmail.com',
      password: '123456',
    },
  ];

const specialists = [
    {
        id:'',
        first_name: "Daria",
        last_name: "Żukowska",
        specialisation_type: "psycholog kliniczny",
        website: "https://dariazukowska.pl/",
        email: "psycholog.daria.zukowska@gmail.com",
        phone_number: "",
        whats_app: false,
        youtube_channel: "https://www.youtube.com/channel/UCl_hm5r5Osb818eIB5t7j-g",
        city: "Słupsk",
        online: true,
        accepts_nfz: false,
        accepts_private: true,
        comments: [],
        articles: [],
        favorite: true,
      },
      {
        id:'',
        first_name: "Kamila",
        last_name: "Kazimierczak",
        specialisation_type: "psychoterapeutka",
        website: "https://kamilakazmierczak.pl/",
        email: "kamilaakazmierczak@gmail.com",
        phone_number: "",
        whats_app: false,
        youtube_channel: "https://www.youtube.com/channel/UCvVr8ojhD2m2Dp2OTN-qUMg",
        city: "Gdynia",
        online: true,
        accepts_nfz: false,
        accepts_private: true,
        comments: [],
        articles: []
      },
      {
        id:'',
        first_name: "Tatiana",
        last_name: "Mitkowa",
        specialisation_type: "coach",
        website: "",
        email: "wproject12@gmail.com",
        phone_number: "786 947 048",
        whats_app: true,
        youtube_channel: "https://www.youtube.com/channel/UC9iePzRAvpxryGq1YbzpcJw",
        city: "Kraków",
        online: true,
        accepts_nfz: false,
        accepts_private: true,
        comments: [],
        articles: []
      },
      {
        id:'',
        first_name: "Izabela",
        last_name: "Kopaniszyn",
        specialisation_type: ["psychoterapeutka", "coach"],
        website: "https://masteryourlife.pl/",
        email: "info@masteryourlife.pl",
        phone_number: "+351 912 901 170",
        whats_app: true,
        youtube_channel: "https://www.youtube.com/@masteryourlifeizabela",
        city: "",
        online: true,
        accepts_nfz: false,
        accepts_private: true,
        comments: [],
        articles: []
      },
      {
        id:'',
        first_name: "Katarzyna",
        last_name: "Zboś",
        specialisation_type: ["prawnik", "mediator"],
        website: "https://prawnik-mediator.com.pl/",
        email: "biuro@prawnik-mediator.com.pl",
        phone_number: "509042226",
        whats_app: "",
        youtube_channel: "https://www.youtube.com/channel/UC1vaM_iNcTtAF8y8kbhByTw",
        city: "Warszawa",
        online: true,
        accepts_nfz: false,
        accepts_private: true,
        comments: [],
        articles: []
      },
      {
        id:'',
        first_name: "Patryk",
        last_name: "Wójcik",
        specialisation_type: "psycholog",
        website: "https://www.psychologianawynos.pl/",
        email: "kontakt@psychologianawynos.pl",
        phone_number: "",
        whats_app: "",
        youtube_channel: "https://www.youtube.com/c/Psychologianawynos",
        city: null,
        online: true,
        accepts_nfz: false,
        accepts_private: true,
        comments: [],
        articles: []
      },
      {
        id:'',
        first_name: "",
        last_name: "",
        specialisation_type: "",
        website: "",
        email: "",
        phone_number: "",
        whats_app: "",
        youtube_channel: "",
        city: "",
        online: true,
        accepts_nfz: false,
        accepts_private: true,
        comments: [],
        article: []
      },
      {
        id:'',
        first_name: "",
        last_name: "",
        specialisation_type: "",
        website: "",
        email: "",
        phone_number: "",
        whats_app: "",
        youtube_channel: "",
        city: "",
        online: true,
        accepts_nfz: false,
        accepts_private: true,
        comments: [],
        article: []
      }
];

module.exports = {
    users,
    specialists
};