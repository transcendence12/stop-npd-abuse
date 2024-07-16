const SPECIALISTS = [
  {
    first_name: "Daria",
    last_name: "Żukowska",
    specialisation_type: ["psycholog kliniczny"],
    website: "https://dariazukowska.pl/",
    email: "psycholog.daria.zukowska@gmail.com",
    city: "Słupsk",
    online: true,
    accepts_nfz: false,
    accepts_private: true,
    socialMediaLinks: [
      { platform: "Facebook", url: "https://www.facebook.com/dariazukowskapsycholog/" },
      { platform: "Instagram", url: "https://www.instagram.com/zukowska.daria/" },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/channel/UCl_hm5r5Osb818eIB5t7j-g",
      },
    ],
  },
  {
    first_name: "Kamila",
    last_name: "Kazimierczak",
    specialisation_type: ["psychoterapeutka"],
    website: "https://kamilakazmierczak.pl/",
    email: "kamilaakazmierczak@gmail.com",
    whats_app: false,
    city: "Gdynia",
    online: true,
    accepts_nfz: false,
    accepts_private: true,
    socialMediaLinks: [
      { platform: "Facebook", url: "https://www.facebook.com/psychoterapiakamilakazmierczak" },
      { platform: "Instagram", url: "https://www.instagram.com/kam.kazmierczak/" },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/channel/UCvVr8ojhD2m2Dp2OTN-qUMg",
      },
    ],
  },
  {
    first_name: "Tatiana",
    last_name: "Mitkowa",
    specialisation_type: ["coach"],
    email: "wproject12@gmail.com",
    phone_number: "786 947 048",
    whats_app: true,
    city: "Kraków",
    online: true,
    accepts_nfz: false,
    accepts_private: true,
    socialMediaLinks: [
      { platform: "Instagram", url: "https://www.instagram.com/tatiana_mitkowa/" },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/channel/UC9iePzRAvpxryGq1YbzpcJw",
      },
    ],
  },
  {
    first_name: " dr Izabela",
    last_name: "Kopaniszyn",
    specialisation_type: ["psychoterapeutka", "coach"],
    website: "https://masteryourlife.pl/",
    email: "info@masteryourlife.pl",
    phone_number: "+351 912 901 170",
    whats_app: true,
    city: "",
    online: true,
    accepts_nfz: false,
    accepts_private: true,
    books: ["Antyczłowiek. Mroczna strona człowieka", "Ja, czyli kto?"],
    socialMediaLinks: [
      { platform: "Facebook", url: "https://www.facebook.com/108foundation" },
      { platform: "Instagram", url: "https://www.instagram.com/master.yourlife/" },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/@masteryourlifeizabela",
      },
    ],
  },
  {
    first_name: "Katarzyna",
    last_name: "Zboś",
    specialisation_type: ["prawnik", "mediator"],
    website: "https://prawnik-mediator.com.pl/",
    email: "zbos.katarzyna@gmail.com",
    phone_number: "509042226",
    whats_app: false,
    company: "Kancelaria Consensus",
    city: "Warszawa",
    online: true,
    accepts_nfz: false,
    accepts_private: true,
    socialMediaLinks: [
      {
        platform: "Facebook",
        url: "https://www.facebook.com/profile.php?id=100040988950059",
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/channel/UC1vaM_iNcTtAF8y8kbhByTw",
      },
    ],
  },
  {
    first_name: "Magdalena",
    last_name: "Bajsarowicz",
    specialisation_type: ["prawnik", "psycholożka", "psycholog sądowy"],
    website: "https://magdalenabajsarowicz.pl/",
    email: "biuro@centrumsprawrozwodowych.pl",
    phone_number: "785289888",
    whats_app: false,
    city: "Wrocław",
    online: false,
    accepts_nfz: false,
    accepts_private: true,
    books: ["Ebook Narcyz w sądzie. Jak ochronić siebie i dzieci."],
    socialMediaLinks: [
      {
        platform: "Facebook",
        url: "https://www.facebook.com/bajsarowiczmagdalena/",
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/magdalenabajsarowicz/",
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/c/MagdalenaBajsarowicz",
      },
    ],
  },
  {
    first_name: "Patryk",
    last_name: "Wójcik",
    specialisation_type: ["psycholog"],
    website: "https://www.psychologianawynos.pl/",
    email: "kontakt@psychologianawynos.pl",
    whats_app: false,
    city: null,
    online: true,
    accepts_nfz: false,
    accepts_private: true,
    socialMediaLinks: [
      {
        platform: "YouTube",
        url: "https://www.youtube.com/c/Psychologianawynos",
      },
    ],
  },
  {
    first_name: "Fundacja Liberos",
    last_name: "Fundacja Liberos",
    specialisation_type: [
      "psycholog",
      "psychoterapeuta",
      "prawnik",
      "coach",
      "mentor",
    ],
    website: "https://liberos.pl/",
    email: "kontakt@liberos.pl",
    phone_number: "+ 48 508 400 204",
    whats_app: false,
    company: "Fundacja Liberos",
    city: "Warszawa",
    accepts_nfz: true,
    accepts_private: true,
    socialMediaLinks: [
      {
        platform: "Facebook",
        url: "https://www.facebook.com/FundacjaLiberos/",
      },
    ],
  },
  {
    first_name: "Kancelaria Liberos",
    last_name: "Kancelaria Liberos",
    specialisation_type: ["prawnik"],
    website: "https://liberos.pl/",
    email: "kancelaria@liberos.pl",
    phone_number: "+ 48 798 420 629",
    whats_app: false,
    company: "Fundacja Liberos",
    city: "Warszawa",
    accepts_private: true,
    socialMediaLinks: [
      {
        platform: "Facebook",
        url: "https://www.facebook.com/FundacjaLiberos/",
      },
    ],
  },
  {
    first_name: "Ewa",
    last_name: "Skrzypczak",
    specialisation_type: ["psycholożka", "terapeutka", "coach"],
    email: "ewaskrzypczakcoach@gmail.com",
    phone_number: "+ 48 798 944 333",
    whats_app: true,
    online: true,
    website: "https://totwojczas.com.pl/",
    city: "Łódź",
    accepts_private: true,
    company: "To Twój Czas",
    socialMediaLinks: [
      { platform: "Facebook", url: "https://www.facebook.com/totwojczas" },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/ewaskrzypczak_totwojczas/",
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/channel/UCsjtQcwzl3Yby-kkY-fWnaA",
      },
    ],
  },
  {
    first_name: "Mirela",
    last_name: "Batog",
    specialisation_type: ["psycholog", "psychoterapeutka"],
    website: "https://mirelabatog.pl/",
    email: "kontakt@mirelabatog.pl",
    phone_number: "",
    whats_app: false,
    city: "Wrocław",
    accepts_private: true,
    socialMediaLinks: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/mirela_batog_psychoterapia",
      },
      { platform: "Facebook", url: "https://www.facebook.com/psychoija" },
    ],
  },
  {
    first_name: "Artur",
    last_name: "Ostrowski",
    specialisation_type: ["coach", "psychoterapeuta", "trener"],
    website: "https://www.egomastery.pl/",
    email: "https://www.egomastery.pl/kontakt",
    whats_app: false,
    accepts_private: true,
    socialMediaLinks: [
      { platform: "Instagram", url: "https://www.instagram.com/ego_mastery/" },
      { platform: "Facebook", url: "https://www.facebook.com/egomastery" },
      { platform: "YouTube", url: "https://www.youtube.com/@egomastery" },
      { platform: "TikTok", url: "https://www.tiktok.com/@egomastery" },
    ],
  },
  {
    first_name: "Izabela",
    last_name: "Porada",
    specialisation_type: ["psycholog", "psychoterapeutka"],
    website: "https://www.poradapsycholog.com/",
    email: "izabela.porada@wp.pl",
    phone_number: "+48 605220727",
    whats_app: true,
    city: "Poznań",
    accepts_private: true,
    socialMediaLinks: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/porada.psycholog/",
      },
      {
        platform: "Facebook",
        url: "https://www.facebook.com/izabelaporada.psychoterapia",
      },
      {
        platform: "ZnanyLekarz",
        url: "https://www.znanylekarz.pl/izabela-porada/psycholog/poznan",
      },
    ],
  },
  {
    first_name: "Marta",
    last_name: "Niedźwiecka",
    specialisation_type: ["psycholożka", "sex coach"],
    website: "https://niedzwiecka.net/",
    email: "https://niedzwiecka.net/kontakt/",
    phone_number: "+48 518 863 572",
    city: "Warszawa",
    accepts_private: true,
    books: ["Slow sex", "O zmierzchu"],
    socialMediaLinks: [
      { platform: "Instagram", url: "instagram.com/niedzwiecka_marta" },
      { platform: "Facebook", url: "facebook.com/niedzwieckaozmierzchu" },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/channel/UC9xo5aFzaFgT48GAvTO3hBQ",
      },
    ],
  },
  {
    first_name: "Izabela",
    last_name: "Banasiak",
    email: "kontakt@duluth.pl",
    phone_number: "693 063 903",
    specialisation_type: [
      "pedagożka",
      "trenerka",
      "kuratorka sądowa",
      "facylitatorka",
      "mediatorka",
      "specjalistka w zakresie pomocy ofiarom przemocy domowej",
    ],
    website: "https://duluth.pl/",
    company: "Ośrodek Wsparcia PO-MOC",
    city: "Warszawa",
    socialMediaLinks: [
      {
        platform: "Facebook",
        url: "https://www.facebook.com/InstytutPrewencjiPrzemocy/",
      },
    ],
  },
  {
    first_name: "Monika",
    last_name: "Śliz-Bryk",
    email: "m.sliz@poczta.fm",
    phone_number: "+48 504 223 969",
    specialisation_type: ["adwokat", "prawnik"],
    website: "www.msb-adwokat.pl",
    company: "MONIKA ŚLIZ-BRYK KANCELARIA ADWOKACKA",
    city: "Kraków",
  },
  {
    first_name: "Jarosław",
    last_name: "Gibas",
    email: "https://jaroslawgibas.com/contact/",
    specialisation_type: ["trener", "nauczyciel", "terapeuta transpersonalny"],
    website: "https://jaroslawgibas.com/",
    company: "",
    city: "Katowice",
    books: [
      "Narcyz. Jak nie dać się skrzywdzić i jak nie krzywdzić innych",
      "Psychopata w pracy, w rodzinie i wśród znajomych. Instrukcja obsługi",
      "Nie daj sobie spieprzyć życia. Sposoby na toksycznych ludzi",
    ],
    socialMediaLinks: [
      { platform: "Twitter", url: "twitter.com/JaroslawGibas" },
      { platform: "Facebook", url: "facebook.com/jaroslaw.gibas" },
      { platform: "YouTube", url: "https://www.youtube.com/gibascompl" },
    ],
  },
  {
    first_name: "Karolina",
    last_name: "Jewiarz",
    specialisation_type: ["adwokat", "prawnik"],
    email: "kancelaria@jewiarz.com",
    phone_number: "505 589 891",
    company: "Karolina Jewiarz Kancelaria Adwokacka",
    city: "Wrocław",
    socialMediaLinks: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/kobietawtodze/",
      },
      {
        platform: "Facebook",
        url: "https://www.facebook.com/kancelariajewiarz",
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/@kobietawtodze7016",
      },
    ],
  },
];

// const USERS = [
//   {
//     first_name: "John",
//     last_name: "Doe",
//     email: "john.doe@example.com",
//     password: "securepassword",
//   },
//   {
//     first_name: "Jane",
//     last_name: "Smith",
//     email: "jane.smith@example.com",
//     password: "anotherpassword",
//   },
// ];