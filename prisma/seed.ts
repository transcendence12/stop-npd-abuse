import { PrismaClient, SpecialisationType } from "@prisma/client";

const prisma = new PrismaClient();

const SPECIALISTS = [
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
    phoneNumber: "+48508400204",
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
    firstName: "Ewa",
    lastName: "Skrzypczak",
    specialisationType: ["PSYCHOLOZKA", "TERAPEUTKA", "COACH"],
    email: "ewaskrzypczakcoach@gmail.com",
    phoneNumber: "+48798944333",
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
    firstName: "Artur",
    lastName: "Ostrowski",
    specialisationType: ["COACH", "PSYCHOTERAPEUTA", "TRENER"],
    website: "https://www.egomastery.pl/",
    email: "https://www.egomastery.pl/kontakt",
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
    lastName: "Banasiak",
    email: "kontakt@duluth.pl",
    phoneNumber: "+48693063903",
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
    phoneNumber: "+48504223969",
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
    phoneNumber: "+48505589891",
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

function mapToSpecialisationTypes(types: string[]): SpecialisationType[] {
  return types.map((type) => {
    if (
      Object.values(SpecialisationType).includes(type as SpecialisationType)
    ) {
      return type as SpecialisationType;
    } else {
      throw new Error(`Invalid specialisation type: ${type}`);
    }
  });
}

async function main() {
  for (const specialistData of SPECIALISTS) {
    const { socialMediaLinks, specialisationType, books, ...specialist } =
      specialistData;

    try {
      await prisma.specialist.create({
        data: {
          ...specialist,
          specialisationTypes: mapToSpecialisationTypes(specialisationType), // Przypisanie przekonwertowanej tablicy
          socialMediaLinks: {
            create: socialMediaLinks,
          },
          books: {
            create: books?.map((title) => ({ title })) || [],
          },
        },
      });
    } catch (error) {
      console.error(`Failed to create specialist ${specialist.email}:`, error);
    }
  }
}

main()
  .then(() => {
    console.log("Seed data created successfully.");
  })
  .catch((e) => {
    console.error("An error occurred:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
