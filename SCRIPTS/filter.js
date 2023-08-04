{/* <script>
function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
</script> */}

// code for filtering tables=====================================================================================================================================================================================================================
  var filterText, filter, table, tr, td, i, txtValue;
  filterText =document.getElementById('filter');

  function filterTable() {
    filter = filterText.value;
    table = document.getElementById('js-refresh-table');
    tr = table.getElementsByTagName('tr')
    
    for (i=0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[5];

      if (td) {
        txtValue = td.textContent || td.innerText;

        if(filter !== "None") {
          if (txtValue === filter) {
            tr[i].style.display = "";
          } else{
            tr[i].style.display = "none"
          }

          filterText.style.background = 'rgb(6, 6, 162)';
          filterText.style.color = 'white';

        } else {
          tr[i].style.display = "";

          filterText.style.background = 'white';
          filterText.style.color = 'black';
        }
      }

    }

  } 

const setSessionContainer = document.querySelector('.set-session-container')


// Code for displaying refreshments distribution===================================================================================================================================================
  filterText.addEventListener('change',filterTable)

  const closeBtn = document.getElementById('js-refreshment-distribution-button')

  const dstContainer = document.querySelector('.refreshments-distribution');

  const openBtn = document.getElementById('RefreshOpenBtn');

  const refreshFinishBtn = document.getElementById('refreshFinishBtn');



  closeBtn.addEventListener('click', () => {
    dstContainer.style.display = 'none'})

  openBtn.addEventListener('click', () => {
    dstContainer.style.display = 'block'
  })




// display Session Home Page by Clicking finish button===========================================================================================================================================================
  const newSessionContainer = document.getElementById('newSessionContainer')

  const sessionHomePage = document.querySelector('.sessions-home-page');

  refreshFinishBtn.addEventListener('click', () => {
    newSessionContainer.style.display = 'none';
    sessionHomePage.style.display = 'block'
    SessionHomeLoad();
    //openHtmlFile('/HTML/homePage.html');
  })




// showing set session popup and populating select options========================================================================================================================================================
  let setOptions = document.getElementById('setSessionDate')
  const nssSearchInput = document.getElementById('ns-SearchInput');

  const newSessionBtn = document.querySelector('.new-session-button').addEventListener('click',() => {


    let setOptionsString = `
    <option Selected Disabled>Select date...</option>`
    tcdDatabase.forEach(value => {
      setOptionsString += `
      <option value = "${value}">${value}</option>`
    });

    setOptions.innerHTML = setOptionsString;
    
    setSessionContainer.style.display = 'flex'

    for (const radio of setGuardian) {
        radio.checked = false;
    }
    /*   sessionHomePage.style.display = 'none'
    */
  })



// Set Options popup filling the form and validation=================================================================================================================================================================================================================
  const setCancel =document.getElementById('setCancel')
  const setCreate =document.getElementById('setCreate')
  const setGuardian = document.getElementsByName('setGuardian')


  setCancel.addEventListener('click', () => {
    setSessionContainer.style.display = 'none'
  })


  setCreate.addEventListener('click', () => {
    let setDate;
    let setOption

    setOptions = document.getElementById('setSessionDate')

    setDate = setOptions.value;

    for (const radio of setGuardian) {
      if (radio.checked) {
        setOption = radio.value
      }
    }

    if (setDate === 'Select date...' || setOption === undefined) {
      popMessage('Both Session Date and Guardian Session are required.') 

    } else {
      
      let createSessionStatus;
      let ddd;

      for (let index = 0; index < numberOfSessionDB.length; index++) {
        const value = numberOfSessionDB[index];
        ddd = value.date

        if (ddd == setDate) {
          createSessionStatus = 1
          break;
        }
      }

      if (createSessionStatus) {
        popMessage('Session already exists.')
      } else { 
        newSessionContainer.style.display = 'block';
        sessionHomePage.style.display = 'none'
        setSessionContainer.style.display = 'none'
        createNewSession(setDate,setOption) 
      }
      

      nssSearchInput.focus();
    }
  })
