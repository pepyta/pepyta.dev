"use client";

import { I18nextProvider, initReactI18next } from "react-i18next";
import i18n from "i18next";
import ThemeProvider from "@/components/providers/ThemeProvider";

const translations = {
  title: `Hi, I am <gradient>Gál Péter</gradient>.`,
  description:
    "Aspiring software developer with a passion for cutting-edge technology. Leveraging my skills in open-source development to drive innovation and make an impact. Balancing university studies with small-scale projects, continuously expanding my skill set and expertise.",

  works: {
    "motivapp-family": {
      title: "MotivApp Family",
      description: "I am currently building an application, which is designed for team managers to reward their team members based on diligence through a coin system. Team members can redeem these coins for tangible rewards, such as gifts (e.g: a new phone), from associated webshops. The app also features a wishlist functionality to make it easier for ordinary team members to show the desired rewards to their team.",
    },
    "motivapp-school": {
      title: "MotivApp School",
      description: "Developed Motivapp, a cutting-edge educational tool designed to support teachers in their efforts to motivate and engage their students. Utilized React Native to build a cross-platform mobile application and NextJS for the accompanying website. Implemented a bonus point system for teachers to reward student diligence and hard work during classes, resulting in a seamless user experience. Contributed to the success of the project as a software developer.", 
    },
  },

  awards: {
    "zero-to-hero-2022": {
      title: "Zero to Hero 2022",
      subtitle: "1st place",
      description: "In 2022's summer, I participated in the \"Zero to Hero\" competition, and in the finals, I achieved 1st place by using Javascript/Typescript as my chosen programming language.",
    },
    "zero-to-hero-2021": {
      title: "Zero to Hero 2021",
      subtitle: "3rd place",
      description: "",
    },
    "kodolj-hatarok-nelkul": {
      title: "Kódolj határok nélkül! (team)",
      subtitle: "1st place",
      description: "As a team with my former classmates, we won the national competition of \"Kódolj határok nélkül!\"."
    },
    "szechenyi-award": {
      title: "Széchenyi Award",
      description: "Recipient of the \"Széchenyi-díj\" award in high school for exceptional performance in IT and programming. This recognition reflects my passion for these fields and my commitment to achieving excellence.",
    }
  }
};

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translations,
    },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>

      <html lang="en">
        <head>
          <title>
            Gál Péter (pepyta)
          </title>
          <style>
            {`html, body { height: 100% }`}
          </style>
        </head>
          <body>
            {children}
          </body>
        </html>
      </ThemeProvider>
    </I18nextProvider>
  );
}
