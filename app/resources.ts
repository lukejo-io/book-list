type Work = {
  author: string;
  era: "BCE" | "ACE";
  date_is_certain: boolean;
  begin_date: number;
  end_date: number | null;
  titles: string[];
};

export const works = [
  {
    author: "Homer",
    era: "BCE",
    date_is_certain: false,
    begin_date: 900,
    end_date: null,
    titles: ["Iliad", "Odyssey"],
  },
  {
    author: "The Old Testament",
    era: "BCE",
    date_is_certain: false,
    begin_date: 800,
    end_date: 200,
    titles: [
      "Genesis",
      "Exodus",
      "Leviticus",
      "Numbers",
      "Deuteronomy",
      "Joshua",
      "Judges",
      "Ruth",
      "1 Samuel",
      "2 Samuel",
      "1 Kings",
      "2 Kings",
      "1 Chronicles",
      "2 Chronicles",
      "Ezra",
      "Nehemiah",
      "Esther",
      "Job",
      "Psalms",
      "Proverbs",
      "Ecclesiastes",
      "Song of Solomon",
      "Isaiah",
      "Jeremiah",
      "Lamentations",
      "Ezekiel",
      "Daniel",
      "Hosea",
      "Joel",
      "Amos",
      "Obadiah",
      "Jonah",
      "Micah",
      "Nahum",
      "Habakkuk",
      "Zephaniah",
      "Haggai",
      "Zechariah",
      "Malachi",
    ],
  },
  {
    author: "Aeschylus",
    era: "BCE",
    date_is_certain: false,
    begin_date: 525,
    end_date: 456,
    titles: ["Tragedies"],
  },
  {
    author: "Sophocles",
    era: "BCE",
    date_is_certain: false,
    begin_date: 495,
    end_date: 406,
    titles: ["Tragedies"],
  },
  {
    author: "Herodotus",
    era: "BCE",
    date_is_certain: false,
    begin_date: 484,
    end_date: 425,
    titles: ["History (of the Persian Wars)"],
  },
] satisfies Work[];