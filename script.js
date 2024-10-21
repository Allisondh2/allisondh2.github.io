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
          <td>${item.date || 'N/A'}</td>
          <td>${item.time || 'N/A'}</td>
          <td>${item.batter || 'N/A'}</td>
          <td>${item.balls || 'N/A'}</td>
          <td>${item.strikes || 'N/A'}</td>
          <td>${item.outs || 'N/A'}</td>
          <td>${item.pitchcall || 'N/A'}</td>
          <td>${item.kobb || 'N/A'}</td>
          <td>${item.relSpeed || 'N/A'}</td>
          <td>${item.spinRate || 'N/A'}</td>
          <td>${item.spinAxis || 'N/A'}</td>
      `;
      tableBody.appendChild(row);
  });
}

// Fetch data when the page loads
window.onload = fetchData;