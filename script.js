function filterData () {
event. preventDefault();
  var startdate = document.getElementById("startdate").value;
  var enddate = document.getElementById("enddate").value;
  console.log(startdate);
  console.log(enddate);
}

async function fetchData() {
  const url = 'https://compute.samford.edu/zohauth/clients/datajson/1';
  
  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      populateTable(data);
  } catch (error) {
      console.error('Fetch error:', error);
  }
}

function populateTable(data) {
  const tableBody = document.getElementById('pitchTable').querySelector('tbody');
  tableBody.innerHTML = ''; // Clear any existing data

  data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td><a href="details.html?id=${item.pitchNo}">Pitch ${item.pitchNo}</a></td>
          <td>${item.Date || 'N/A'}</td>
          <td>${item.Time || 'N/A'}</td>
          <td>${item.Batter || 'N/A'}</td>
          <td>${item.Balls || 'N/A'}</td>
          <td>${item.Strikes || 'N/A'}</td>
          <td>${item.Outs || 'N/A'}</td>
          <td>${item.Pitchcall || 'N/A'}</td>
          <td>${item.Kobb || 'N/A'}</td>
          <td>${item.RelSpeed || 'N/A'}</td>
          <td>${item.SpinRate || 'N/A'}</td>
          <td>${item.SpinAxis || 'N/A'}</td>
      `;
      tableBody.appendChild(row);
  });
}

// Fetch data when the page loads
window.onload = fetchData;