// Site content, kept separate from index.html so updates (a new
// announcement, a changed stat) don't require touching markup.

const siteContent = {
  stats: [
    { value: "1,200+", label: "Students enrolled" },
    { value: "45", label: "Teaching staff" },
    { value: "4", label: "Grade levels" },
  ],

  announcements: [
    {
      date: "Sep 1, 2026",
      title: "New academic year begins",
      body: "Classes resume for all grade levels. Please check your grade's schedule at the main office.",
    },
    {
      date: "Aug 20, 2026",
      title: "Registration deadline extended",
      body: "New and returning student registration has been extended by one week.",
    },
    {
      date: "Aug 10, 2026",
      title: "Sports club tryouts",
      body: "Tryouts for the football and athletics clubs will be held on the school grounds.",
    },
  ],

  academicPrograms: [
    {
      icon: "science",
      title: "Natural Science",
      body: "Mathematics, Physics, Chemistry, and Biology tracks for students pursuing STEM fields.",
    },
    {
      icon: "social",
      title: "Social Science",
      body: "History, Geography, Economics, and Civics for students pursuing humanities and social studies.",
    },
    {
      icon: "language",
      title: "Languages",
      body: "Amharic, English, and additional language instruction to build strong communication skills.",
    },
  ],

  universityPlacements: {
    worldwide: [
      { name: "Harvard University" },
      { name: "Yale University" },
      { name: "Princeton University" },
      { name: "University of Pennsylvania" },
      { name: "Columbia University" },
      { name: "Brown University" },
      { name: "Dartmouth College" },
      { name: "Cornell University" },
      { name: "MIT" },
      { name: "KAIST" },
      { name: "Vassar College" },
    ],
    ethiopia: [
      { name: "Addis Ababa University" },
      { name: "Bahir Dar University" },
      { name: "Saint Paul University", location: "Addis Ababa" },
      { name: "Addis Ababa Science and Technology University" },
    ],
  },
};
