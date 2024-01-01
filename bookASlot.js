let selectedDate;

// JavaScript for creating a simple calendar with navigation for different months
const calendarContainer = document.getElementById('calendar');
let currentMonth = new Date().getMonth() + 1;
let currentYear = new Date().getFullYear();

function createCalendar(year, month) {
  const daysInMonth = new Date(year, month, 0).getDate();

  let calendarHTML = '<h2>Calendar</h2>';
  calendarHTML += `<p>${year}-${month}</p>`;
  calendarHTML += '<table class="calendar">';
  calendarHTML += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>';

  let dayCount = 1;
  const firstDay = new Date(year, month - 1, 1).getDay();

  for (let i = 0; i < 6; i++) {
    calendarHTML += '<tr>';
    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < firstDay) || dayCount > daysInMonth) {
        calendarHTML += '<td></td>';
      } else {
        calendarHTML += `<td class="calendar-day" onclick="selectDate(${dayCount})">${dayCount}</td>`;
        dayCount++;
      }
    }
    calendarHTML += '</tr>';
  }

  calendarHTML += '</table>';
  calendarContainer.innerHTML = calendarHTML;
}

function selectDate(day) {
  selectedDate = day;
  console.log(`Selected Date: ${selectedDate}`);
  // You can also add additional actions or logic here upon selecting a date
}

function bookDate() {
  if (selectedDate) {
    alert(`Date ${selectedDate} has been booked!`); // Alert indicating the selected date has been booked
  } else {
    alert('Please select a date first.'); // Notify if no date is selected
  }
}

function nextMonth() {
  currentMonth++;
  if (currentMonth === 13) {
    currentMonth = 1;
    currentYear++;
  }
  createCalendar(currentYear, currentMonth);
}

function previousMonth() {
  currentMonth--;
  if (currentMonth === 0) {
    currentMonth = 12;
    currentYear--;
  }
  createCalendar(currentYear, currentMonth);
}

createCalendar(currentYear, currentMonth);
