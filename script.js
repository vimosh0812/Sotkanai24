

const groupAData = [
  { school: 'BT\\Vivekandha Ladies College', W: 0, L: 0, PTS: 0, ZScore: 0, G: 'A' },
  { school: 'BT\\St.Michael\'s College', W: 0, L: 0, PTS: 0, ZScore: 0, G: 'A' },
  { school: 'BT\\BT\\Methodist Central College', W: 0, L: 0, PTS: 0, ZScore: 0, G: 'A' },
  { school: 'BT\\PD\\Kaluthavalai Maha Vidyalayam', W: 0, L: 0, PTS: 0, ZScore: 0, G: 'A' },
  { school: 'BT\\PD\\Periyakallar Central College', W: 0, L: 0, PTS: 0, ZScore: 0, G: 'B' },
  { school: 'BT\\Valachenai Hindu College', W: 0, L: 0, PTS: 0, ZScore: 0, G: 'B' },
  { school: 'BT\\KK\\Vanthaaromulai Vishnu Maha Vidyalayam', W: 0, L: 0, PTS: 0, ZScore: 0, G: 'B' },
  { school: 'BT\\Mahajana College', W: 0, L: 0, PTS: 0, ZScore: 0, G: 'B' },
  { school: 'BT\\KK\\Karuwakerny Vigneswara College', W: 0, L: 0, PTS: 0, ZScore: 0, G: 'C' },
  { school: 'BT\\KK\\Chenkalady Central College', W: 0, L: 0, PTS: 0, ZScore: 0, G: 'C' },
  { school: 'BT\\St.Cecilia\'s Girls\' College', W: 0, L: 0, PTS: 0, ZScore: 0, G: 'C' },
];

const groupBData = [
  { school: 'SMC', W: 4, L: 4, PTS: 2 * 4, ZScore: 0.782 },
  { school: 'MMC', W: 4, L: 4, PTS: 2 * 4, ZScore: 0.682 },
  { school: 'ABC', W: 4, L: 4, PTS: 2 * 4, ZScore: 0.712 },
  { school: 'XYZ', W: 6, L: 2, PTS: 2 * 6, ZScore: 0.312 }
];

const sortedGroupA = groupAData.sort((a, b) => b.ZScore - a.ZScore);

const sortedGroupB = groupBData.sort((a, b) => {
  if (a.W === b.W) {
      if (a.PTS === b.PTS) {
          return b.ZScore - a.ZScore;
      }
      return b.PTS - a.PTS;
  }
  return b.W - a.W;
});

window.onload = function () {
  renderTable('groupATable', sortedGroupA);
  renderTable('groupBTable', sortedGroupB);
};

function renderTable(tableId, data) {
  const tableBody = document.getElementById(tableId).getElementsByTagName('tbody')[0];
  tableBody.innerHTML = '';
  data.forEach((item, index) => {
      const row = tableBody.insertRow();
      row.insertCell().textContent = index + 1;
      row.insertCell().textContent = item.G;
      row.insertCell().textContent = item.school;
      row.insertCell().textContent = item.W;
      row.insertCell().textContent = item.L;
      row.insertCell().textContent = item.PTS;
      row.insertCell().textContent = item.ZScore;
  });
}

// 'BT\\Valachenai Hindu College'
// 'BT\\KK\\Karuwakerny Vigneswara College'
// 'BT\\KK\\Chenkalady Central College'
// 'BT\\PD\\Kaluthavalai Maha Vidyalayam'
// 'BT\\Vivekandha Ladies College'
// 'BT\\Mahajana College'
// 'BT\\St.Michael\'s College'
// 'BT\\PD\\Periyakallar Central College'
// 'BT\\KK\\Vanthaaromulai Vishnu Maha Vidyalayam'
// 'BT\\St.Cecilia\'s Girls\' College'
// 'BT\\Valachenai Hindu College'
// 'BT\\BT\\Methodist Central College'

const matchData = [

  ['St.Michael\'s College', 'BT\\Vivekandha Ladies College', '', 'A', '10.15-11.15', '1'],
  ['BT\\PD\\Periyakallar Central College', 'BT\\Valachenai Hindu College', '', 'B', '10.15-11.15', '2'],
  ['BT\\KK\\Karuwakerny Vigneswara College', 'BT\\KK\\Chenkalady Central College', '', 'C', '10.15-11.15', '3'],
  ['BT\\Valachenai Hindu College', 'BT\\KK\\Vanthaaromulai Vishnu Maha Vidyalayam', '', 'A', '10.15-11.15', '4'],

  ['BT\\Valachenai Hindu College', 'BT\\KK\\Vanthaaromulai Vishnu Maha Vidyalayam', '', 'B', '11.30-12.30', '1'],
  ['BT\\St.Michael\'s College', 'BT\\BT\\Methodist Central College', '', 'A', '11.30-12.30', '2'],
  ['BT\\PD\\Periyakallar Central College', 'BT\\Mahajana College', '', 'B', '11.30-12.30', '3'],
  ['BT\\St.Cecilia\'s Girls\' College', 'BT\\St.Cecilia\'s Girls\' College', '', 'C', '11.30-12.30', '4'],

  ['BT\\KK\\Karuwakerny Vigneswara College', 'BT\\St.Cecilia\'s Girls\' College', '', 'C', '13.30-14.30', '1'],
  ['BT\\Vivekandha Ladies College', 'BT\\PD\\Kaluthavalai Maha Vidyalayam', '', 'A', '13.30-14.30', '3'],
  ['BT\\KK\\Vanthaaromulai Vishnu Maha Vidyalayam', 'BT\\Mahajana College', '', 'B', '13.30-14.30', '4'],

  ['BT\\PD\\Periyakallar Central College', 'BT\\KK\\Vanthaaromulai Vishnu Maha Vidyalayam', '', 'B', '14.45-15.45', '1'],
  ['BT\\Vivekandha Ladies College', 'BT\\BT\\Methodist Central College', '', 'A', '14.45-15.45', '2'],
  ['BT\\Valachenai Hindu College', 'BT\\Mahajana College', '', 'B','14.45-15.45', '3'],
  ['BT\\St.Michael\'s College', 'BT\\PD\\Kaluthavalai Maha Vidyalayam', '', 'A', '14.45-15.45', '4'],
];

const summaryContainer = document.getElementById('summaryContainer');
const groupFilter = document.getElementById('groupFilter');

function updateSummary() {
  const selectedGroup = groupFilter.value;
  summaryContainer.innerHTML = '';

  matchData.forEach((match, index) => {
      if (selectedGroup === 'all' || selectedGroup === match[3]) {
          const container = document.createElement('div');
          container.classList.add('container');

          const matchNumber = document.createElement('p');
          matchNumber.classList.add('match-number');
          matchNumber.textContent = `Match ${index + 1}`;
          container.appendChild(matchNumber);

          const matchInfo = document.createElement('p');
          matchInfo.classList.add('match-info');

          const school1 = document.createElement('span');
          school1.textContent = match[0];
          school1.style.marginRight = '5px';
          matchInfo.appendChild(school1);

          matchInfo.appendChild(document.createTextNode(' vs '));

          const school2 = document.createElement('span');
          school2.textContent = match[1];
          school2.style.marginLeft = '5px';
          matchInfo.appendChild(school2);

          const matchTime = document.createElement('p');
          matchTime.textContent = `Match Time: ${match[4]}`;
          container.appendChild(matchTime);

          const panelNumber = document.createElement('p');
          panelNumber.textContent = `Panel: ${match[5]}`;
          container.appendChild(panelNumber);

          container.appendChild(matchInfo);

          const winner = document.createElement('p');
          winner.textContent = `Winner: ${match[2]}`;
          container.appendChild(winner);

          summaryContainer.appendChild(container);
      }
  });
}

groupFilter.addEventListener('change', updateSummary);
updateSummary(); // Initial update
