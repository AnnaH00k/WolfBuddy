import Header from "./components/Header";
import ActivityCard, { Activity } from "./components/ActivityCard";

// Sample activities data - replace with your actual activities
const activities: Activity[] = [
  {
    id: "1",
    title: "Fitklusiv Leverkusen",
    message:
      "Ich finde das Studio richtig schön. Sauber hell und freundlich mit Massageliegen. Das wollte ich Papa immer mal zeigen. Wie wär’s mit Yogilates an einem Samstag?",
    links: [
      {
        type: "urbanSports",
        url: "https://urbansportsclub.com/de/venues/29440?date=2025-11-24&service_type=1",
      },
      {
        type: "course",
        url: "https://fitklusiv.de/wp-content/uploads/2024/02/Leverkusen-kursplan-1.pdf",
      },
    ],
    images: [
      "/FitklusivLeverkusen/1.png",
      "/FitklusivLeverkusen/2.png",
      "/FitklusivLeverkusen/3.png",
      "/FitklusivLeverkusen/4.png",
      "/FitklusivLeverkusen/5.png",
    ],
    suggestedBy: [
      {
        name: "Heike",
        avatar: "/Avatars/Heike.jpg",
      },
    ],
  },
  {
    id: "2",
    title: "Holmesplace Köln am Gürzenich",
    message:
      "Ich würde mich freuen wenn Papa mal in meinen Lieblings-Aquakurs Sonntag bei Arnon mitkommt",
    links: [
      {
        type: "urbanSports",
        url: "https://www.urbansportsclub.com/de/venues/1510",
      },
      {
        type: "studioWebsite",
        url: "https://www.holmesplace.de/clubs/koln-am-gurzenich",
      },
    ],
    images: [
      "/HolmesplaceCologne/a.jpeg",
      "/HolmesplaceCologne/b.jpeg",
      "/HolmesplaceCologne/c.jpeg",
      "/HolmesplaceCologne/d.jpeg",
      "/HolmesplaceCologne/e.jpeg",
    ],
    suggestedBy: [
      {
        name: "Heike",
        avatar: "/Avatars/Heike.jpg",
      },
    ],
  },
  {
    id: "3",
    title: "Just fit 18 am Mediapark in Köln",
    message:
      "Der Link ist zur Kursüberprüfung. Dort sieht man ob Kurse auch stattfinden. Beispiel Aqua Samstag 14:00 Uhr.",
    links: [
      {
        type: "urbanSports",
        url: "https://www.urbansportsclub.com/de/venues/4991",
      },
      {
        type: "course",
        url: "https://www.justfit-clubs.de/kurse/kursplan/just-fit-18-premium.html",
      },
    ],
    images: [
      "/JustFit18/18a.png",
      "/JustFit18/18b.png",
      "/JustFit18/18c.png",
      "/JustFit18/18d.png",
      "/JustFit18/18e.png",
      "/JustFit18/18f.png",
    ],
    suggestedBy: [
      {
        name: "Heike",
        avatar: "/Avatars/Heike.jpg",
      },
    ],
  },
  {
    id: "4",
    title: "Mauritius Therme",
    message:
      "Würde ich demnächst mal ausprobieren, gerne mit Papa wenn er Lust hat. Auch Massage möglich.",
    links: [
      {
        type: "urbanSports",
        url: "https://www.urbansportsclub.com/de/venues/26752",
      },
      {
        type: "studioWebsite",
        url: "https://therme-mauritius.de/",
      },
    ],
    images: ["/MauritiusTherme/mauritius1.png"],
    suggestedBy: [
      {
        name: "Heike",
        avatar: "/Avatars/Heike.jpg",
      },
    ],
  },
  {
    id: "5",
    title: "Kraftraum Stark & Mobil",
    message: "Auch in Leichlingen könnte man mal ausprobieren.",
    links: [
      {
        type: "urbanSports",
        url: "https://www.urbansportsclub.com/de/venues/22506",
      },
    ],
    images: [
      "/Stark&Mobil/s&m0.jpg",
      "/Stark&Mobil/s&m1.png",
      "/Stark&Mobil/s&m2.png",
      "/Stark&Mobil/s&m3.png",
      "/Stark&Mobil/s&m4.jpg",
    ],
    suggestedBy: [
      {
        name: "Heike",
        avatar: "/Avatars/Heike.jpg",
      },
    ],
  },
  {
    id: "6",
    title: "Just Fit 07",
    message:
      "Hier gibt es auch tolle Bodypump Kurse die wir gemeinsam angehen könnten. Oder Samstags ein Pilates Kurs.",
    links: [
      {
        type: "urbanSports",
        url: "https://www.urbansportsclub.com/de/venues/4979",
      },
      {
        type: "course",
        url: "https://www.justfit-clubs.de/kurse/kursplan/just-fit-07-classic.html",
      },
    ],
    images: [
      "/JustFit07/1.png",
      "/JustFit07/2.png",
      "/JustFit07/3.png",
      "/JustFit07/4.png",
      "/JustFit07/5.png",
      "/JustFit07/6.png",
      "/JustFit07/7.png",
    ],
    suggestedBy: [
      {
        name: "Heike",
        avatar: "/Avatars/Heike.jpg",
      },
      {
        name: "Anna",
        avatar: "/Avatars/Anna.jpg",
      },
    ],
  },
  {
    id: "7",
    title: "Sport Palast",
    message:
      "Bloß ein katzensprung von zuhause entfernt für die spontane Workout session.",
    links: [
      {
        type: "urbanSports",
        url: "https://www.urbansportsclub.com/de/venues/9337",
      },
      {
        type: "course",
        url: "https://www.sportpalast-leichlingen.de/kursbereich.html",
      },
    ],
    images: [
      "/Sportpalast/sportpalast0.jpg",
      "/Sportpalast/sportpalast1.webp",
      "/Sportpalast/sportpalast2.webp",
      "/Sportpalast/sportpalast3.jpg",
    ],
    suggestedBy: [
      {
        name: "Heike",
        avatar: "/Avatars/Heike.jpg",
      },
      {
        name: "Anna",
        avatar: "/Avatars/Anna.jpg",
      },
    ],
  },
  {
    id: "8",
    title: "Fitklusiv Solingen",
    message:
      "Fit und Vital in Solingen ist super und wenn man nicht genug hat kann man gleich danach noch Yoga mitmachen. Aber auch Rückenfit ist klasse",
    links: [
      {
        type: "urbanSports",
        url: "https://www.urbansportsclub.com/de/venues/29442",
      },
    ],
    images: [
      "/FitklusivSolingen/FitklusivS1.png",
      "/FitklusivSolingen/FitklusivS2.png",
      "/FitklusivSolingen/FitklusivS3.png",
      "/FitklusivSolingen/FitklusivS4.png",
      "/FitklusivSolingen/FitklusivS5.png",
    ],
    suggestedBy: [
      {
        name: "Heike",
        avatar: "/Avatars/Heike.jpg",
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] cursor-default">
      {/* Hero Section */}
      <section className="relative w-full sm:min-h-[40vh] flex items-center justify-center overflow-hidden">
        {/* Professional gradient using color scheme */}
        <div className="absolute inset-0 bg-linear-to-br from-[#191E24] via-[#2E3742] to-[#191E24]"></div>

        <div className="relative container mx-auto px-6 text-center z-10">
          <div className="mb-6"></div>
          <h1 className="hero-title text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 leading-tight tracking-tight">
            WolfBuddy
          </h1>
          <p className="text-white/95 text-xl md:text-2xl max-w-3xl mx-auto mb-8 font-light leading-relaxed">
            Gemeinsam sportlich Zeit verbringen
          </p>
        </div>
      </section>

      <main className="container mx-auto px-6 py-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#191E24] mb-4">
            Unsere Aktivitätsvorschläge
          </h2>
          <p className="text-[#636E7D] text-lg max-w-2xl mx-auto">
            Was wir zusammen mit Urban Sports machen können
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </main>
    </div>
  );
}
