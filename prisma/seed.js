import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const SPECIALISTS = [
  {
    firstName: "Daria",
    lastName: "Żukowska",
    specialisationType: ["PSYCHOLOG_KLINICZNY"],
    website: "https://dariazukowska.pl/",
    email: "psycholog.daria.zukowska@gmail.com",
    city: "Słupsk",
    isOnline: true,
    isAcceptedNfz: false,
    isPaid: true,
    socialMediaLinks: [
      {
        platform: "Facebook",
        url: "https://www.facebook.com/dariazukowskapsycholog/",
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/zukowska.daria/",
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/channel/UCl_hm5r5Osb818eIB5t7j-g",
      },
    ],
  },
  {
    firstName: "Kamila",
    lastName: "Kazimierczak",
    specialisationType: ["PSYCHOTERAPEUTKA"],
    website: "https://kamilakazmierczak.pl/",
    email: "kamilaakazmierczak@gmail.com",
    isWhatsApp: false,
    city: "Gdynia",
    isOnline: true,
    isAcceptedNfz: false,
    isPaid: true,
    socialMediaLinks: [
      {
        platform: "Facebook",
        url: "https://www.facebook.com/psychoterapiakamilakazmierczak",
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/kam.kazmierczak/",
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/channel/UCvVr8ojhD2m2Dp2OTN-qUMg",
      },
    ],
  },
  {
    firstName: "Tatiana",
    lastName: "Mitkowa",
    specialisationType: ["COACH"],
    email: "wproject12@gmail.com",
    phoneNumber: "786 947 048",
    isWhatsApp: true,
    city: "Kraków",
    isOnline: true,
    isAcceptedNfz: false,
    isPaid: true,
    socialMediaLinks: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/tatiana_mitkowa/",
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/channel/UC9iePzRAvpxryGq1YbzpcJw",
      },
    ],
  },
  {
    firstName: " dr Izabela",
    lastName: "Kopaniszyn",
    specialisationType: ["PSYCHOTERAPEUTKA", "COACH"],
    website: "https://masteryourlife.pl/",
    email: "info@masteryourlife.pl",
    phoneNumber: "+351 912 901 170",
    isWhatsApp: true,
    city: "",
    isOnline: true,
    isAcceptedNfz: false,
    isPaid: true,
    books: ["Antyczłowiek. Mroczna strona człowieka", "Ja, czyli kto?"],
    socialMediaLinks: [
      { platform: "Facebook", url: "https://www.facebook.com/108foundation" },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/master.yourlife/",
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/@masteryourlifeizabela",
      },
    ],
  },
  {
    firstName: "Katarzyna",
    lastName: "Zboś",
    specialisationType: ["PRAWNIK", "MEDIATOR"],
    website: "https://prawnik-mediator.com.pl/",
    email: "zbos.katarzyna@gmail.com",
    phoneNumber: "509042226",
    isWhatsApp: false,
    company: "Kancelaria Consensus",
    city: "Warszawa",
    isOnline: true,
    isAcceptedNfz: false,
    isPaid: true,
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
    firstName: "Magdalena",
    lastName: "Bajsarowicz",
    specialisationType: ["PRAWNICZKA", "PSYCHOLOZKA", "PSYCHOLOG_SADOWY"],
    website: "https://magdalenabajsarowicz.pl/",
    email: "biuro@centrumsprawrozwodowych.pl",
    phoneNumber: "785289888",
    isWhatsApp: false,
    city: "Wrocław",
    isOnline: false,
    isAcceptedNfz: false,
    isPaid: true,
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
    firstName: "Patryk",
    lastName: "Wójcik",
    specialisationType: ["PSYCHOLOG"],
    website: "https://www.psychologianawynos.pl/",
    email: "kontakt@psychologianawynos.pl",
    isWhatsApp: false,
    city: null,
    isOnline: true,
    isAcceptedNfz: false,
    isPaid: true,
    socialMediaLinks: [
      {
        platform: "YouTube",
        url: "https://www.youtube.com/c/Psychologianawynos",
      },
    ],
  },
  {
    firstName: "Fundacja Liberos",
    lastName: "Fundacja Liberos",
    specialisationType: [
      "PSYCHOLOG",
      "PSYCHOTERAPEUTA",
      "PRAWNIK",
      "COACH",
      "MENTOR",
    ],
    website: "https://liberos.pl/",
    email: "kontakt@liberos.pl",
    phoneNumber: "+ 48 508 400 204",
    isWhatsApp: false,
    company: "Fundacja Liberos",
    city: "Warszawa",
    isAcceptedNfz: true,
    isPaid: true,
    socialMediaLinks: [
      {
        platform: "Facebook",
        url: "https://www.facebook.com/FundacjaLiberos/",
      },
    ],
  },
  {
    firstName: "Kancelaria Liberos",
    lastName: "Kancelaria Liberos",
    specialisationType: ["PRAWNIK"],
    website: "https://liberos.pl/",
    email: "kancelaria@liberos.pl",
    phoneNumber: "+ 48 798 420 629",
    isWhatsApp: false,
    company: "Fundacja Liberos",
    city: "Warszawa",
    isPaid: true,
    socialMediaLinks: [
      {
        platform: "Facebook",
        url: "https://www.facebook.com/FundacjaLiberos/",
      },
    ],
  },
  {
    firstName: "Ewa",
    lastName: "Skrzypczak",
    specialisationType: ["PSYCHOLOZKA", "TERAPEUTKA", "COACH"],
    email: "ewaskrzypczakcoach@gmail.com",
    phoneNumber: "+ 48 798 944 333",
    isWhatsApp: true,
    isOnline: true,
    website: "https://totwojczas.com.pl/",
    city: "Łódź",
    isPaid: true,
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
    firstName: "Mirela",
    lastName: "Batog",
    specialisationType: ["PSYCHOLOG", "PSYCHOTERAPEUTKA"],
    website: "https://mirelabatog.pl/",
    email: "kontakt@mirelabatog.pl",
    phoneNumber: "",
    isWhatsApp: false,
    city: "Wrocław",
    isPaid: true,
    socialMediaLinks: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/mirela_batog_psychoterapia",
      },
      { platform: "Facebook", url: "https://www.facebook.com/psychoija" },
    ],
  },
  {
    firstName: "Artur",
    lastName: "Ostrowski",
    specialisationType: ["COACH", "PSYCHOTERAPEUTA", "TRENER"],
    website: "https://www.egomastery.pl/",
    email: "https://www.egomastery.pl/kontakt",
    isWhatsApp: false,
    isPaid: true,
    socialMediaLinks: [
      { platform: "Instagram", url: "https://www.instagram.com/ego_mastery/" },
      { platform: "Facebook", url: "https://www.facebook.com/egomastery" },
      { platform: "YouTube", url: "https://www.youtube.com/@egomastery" },
      { platform: "TikTok", url: "https://www.tiktok.com/@egomastery" },
    ],
  },
  {
    firstName: "Izabela",
    lastName: "Porada",
    specialisationType: ["PSYCHOLOG", "PSYCHOTERAPEUTKA"],
    website: "https://www.poradapsycholog.com/",
    email: "izabela.porada@wp.pl",
    phoneNumber: "+48 605220727",
    isWhatsApp: true,
    city: "Poznań",
    isPaid: true,
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
    firstName: "Marta",
    lastName: "Niedźwiecka",
    specialisationType: ["PSYCHOLOZKA", "SEX_COACH"],
    website: "https://niedzwiecka.net/",
    email: "https://niedzwiecka.net/kontakt/",
    phoneNumber: "+48 518 863 572",
    city: "Warszawa",
    isPaid: true,
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
    firstName: "Izabela",
    lastName: "Banasiak",
    email: "kontakt@duluth.pl",
    phoneNumber: "693 063 903",
    specialisationType: [
      "PEDAGOZKA",
      "TRENERKA",
      "KURATORKA_SADOWA",
      "FACYLITATORKA",
      "MEDIATORKA",
      "SPECJALISTKA_W_ZAKRESIE_POMOCY_OFIAROM_PRZEMOCY_DOMOWEJ",
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
    firstName: "Monika",
    lastName: "Śliz-Bryk",
    email: "m.sliz@poczta.fm",
    phoneNumber: "+48 504 223 969",
    specialisationType: ["ADWOKAT", "PRAWNIK"],
    website: "www.msb-adwokat.pl",
    company: "MONIKA ŚLIZ-BRYK KANCELARIA ADWOKACKA",
    city: "Kraków",
  },
  {
    firstName: "Jarosław",
    lastName: "Gibas",
    email: "https://jaroslawgibas.com/contact/",
    specialisationType: ["TRENER", "NAUCZYCIEL", "TERAPEUTA_TRANSPERSONALNY"],
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
    firstName: "Karolina",
    lastName: "Jewiarz",
    specialisationType: ["ADWOKAT", "PRAWNIK"],
    email: "kancelaria@jewiarz.com",
    phoneNumber: "505 589 891",
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
  {
    firstName: "Magdalena",
    lastName: "Socha",
    specialisationType: ["COACH"],
    website: "https://magdalenasocha.pl/",
    email: "kontakt@magdalenasocha.pl",
    isWhatsApp: false,
    city: "",
    isOnline: true,
    isAcceptedNfz: false,
    isPaid: true,
    socialMediaLinks: [
      {
        platform: "Facebook",
        url: "https://www.facebook.com/profile.php?id=100086177704497",
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/p/ChpbV7ij71O/?utm_source",
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/@MagdalenaSocha",
      },
    ],
  },
];

async function main() {
  for (const specialistData of SPECIALISTS) {
    const { socialMediaLinks, specialisationTypes, books, ...specialist } =
      specialistData;

    await prisma.specialist.create({
      data: {
        ...specialist,
        specialisationType: specialisationTypes,
        socialMediaLinks: {
          create: socialMediaLinks,
        },
        books: {
          create: books?.map((title) => ({ title })) || [],
        },
      },
    });
  }
}

main()
  .then(() => {
    console.log("Seed data created successfully.");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
