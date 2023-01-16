const root = document.getElementById("root");
const daysOfTheWeek = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

const daysToHighlight = {
  0: [{ date: 1, class: "public-holiday" }],
  3: [{ date: 16, class: "birthday"}],
  4: [{ date: 1, class: "public-holiday" }, { date: 27, class: "public-holiday" },],
  5: [{ date: 12, class: "public-holiday" }],
  7: [{ date: 17, class: "birthday-dad"}],
  9: [{ date: 1, class: "public-holiday" },],
  10: [{ date: 17, class: "birthday-mum" },],
  11:[{ date: 25, class: "public-holiday" }, { date: 26, class: "public-holiday" }],

};

const months = [
  ["January", 31],
  ["February", 28],
  ["March", 31],
  ["April", 30],
  ["May", 31],
  ["June", 31],
  ["July", 31],
  ["August", 31],
  ["September", 30],
  ["October", 31],
  ["November", 30],
  ["December", 31],
];
const calendar = document.createElement("div");
calendar.className = "calendar";

months.forEach(function ([month, numOfDays], monthIndex) {
  const monthTitle = document.createElement("h2");
  monthTitle.className = "month-title";

  const monthHeading = getHeading();

  const monthBody = getBody(numOfDays, monthIndex);

  const monthdiv = document.createElement("div");
  monthdiv.className = "month";

  monthTitle.innerText = month;
  monthdiv.append(monthTitle, monthHeading, monthBody);
  calendar.append(monthdiv);
});
function getHeading() {
  const monthHeading = document.createElement("div");
  monthHeading.className = "month-heading month-grid";

  daysOfTheWeek.forEach((day) => {
    const dayElement = document.createElement("h3");
    dayElement.innerText = day;
    dayElement.className = "month-col";
    monthHeading.append(dayElement);
  });
  return monthHeading;
}
function getBody(numOfDays, monthIndex) {
  const monthBody = document.createElement("div");
  monthBody.className = "month-body month-grid";
  addBlanks(monthIndex, monthBody);

  const specialDay = daysToHighlight[monthIndex] || [];
  for (i = 1; i <= numOfDays; i++) {
    const p = document.createElement("p");
    p.innerText = i;
    const highlight = specialDay.find((d) => d.date === i);
    p.className = "month-col "

    if (highlight) {
      p.className += highlight.class;
    }

    monthBody.append(p);
  }
  return monthBody;
}
function addBlanks(monthIndex, monthBody) {
  const date = new Date(2023, monthIndex, 1);
  const firstDay = (date.getDay() + 6) % 7;

  for (let i = 0; i < firstDay; i++) {
    const blank = document.createElement("p");
    blank.className = "month-col";
    monthBody.append(blank);
  }
}
root.appendChild(calendar);
