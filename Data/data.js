//system user database

const usersDatabase = [{
  idNumber: `1`,
  FirstName: `Josephy`,
  LastName: `Ng'omba`,
  Username: `Admin`,
  Password: `Malawian1995`,
  Type: `Administrator`
  },
  {
  idNumber: `2`,
  FirstName: `Gift`,
  LastName: `Laiva`,
  Username: `Gift`,
  Password: `1234`,
  Type: `Administrator`
  },
  {
  idNumber: `3`,
  FirstName: `Haroon`,
  LastName: `Chalimba`,
  Username: `Haroon`,
  Password: `1234`,
  Type: `Administrator`
  }
  ]

  const tcdDatabase = JSON.parse(localStorage.getItem('tcdDatabase')) || ['08/Mar/2023','29/Apr/2023']

  localStorage.setItem('tcdDataBase',JSON.stringify(tcdDatabase));
  
  const msgbox = function (message, title) {
    const confTitleElement = document.querySelector('.js-conf-title')
    const confMessageElement = document.querySelector('.js-conf-message')
    
    confMessageElement.innerHTML = message;
    confTitleElement.innerHTML =title;
  }

  const ShowHideContainer = function (DisplayHideElementID = '', displayStyle = '') {
    const elementToShow =  document.getElementById(DisplayHideElementID)
      if (DisplayHideElementID !== '' && displayStyle !== '') {
      // elementToShow.style.display = displayStyle;
      alert(1)
      }
    }

const gottenData = localStorage.getItem('teenDatabase')

// obtaining teenClub database
const tcDatabase = JSON.parse(gottenData) || [];


const numberOfSessionDB = JSON.parse(localStorage.getItem('numberOfSessionDB')) || [];

let sessionId = JSON.parse(localStorage.getItem('sessionID')) || 0

const signInDatabase = JSON.parse(localStorage.getItem('signInDatabase')) || [];




  const isthisGuardianSession = 'Yes'
  let checkAvailability = 1;
  let newSessionID;

  // here we define an array that contains object names for sign in fields and below it we create its objecte programmatically

  

 const createNewSession = function(sessionDate = '',isthisGuardianSession = '') {

    // checking if the session is available
     let vdate = new Date(sessionDate)
    for(let i = 0; i<numberOfSessionDB.length; i++) {
      value = numberOfSessionDB[i];
      if(value.date == sessionDate) {
        checkAvailability = undefined 
        break
      }
    }

    // creating session if not available
    if(checkAvailability) {
        sessionId++

      localStorage.setItem('sessionID', JSON.stringify(sessionId))

      newSessionID = numberOfSessionDB.length + 1
      numberOfSessionDB.push({id: sessionId,date: `${customDateFormat(vdate)}`,name: `Session${sessionId}`,GuardianSession: `${isthisGuardianSession}`})
    

      localStorage.setItem('numberOfSessionDB',JSON.stringify(numberOfSessionDB));

      TC.NewSession.valSessionID.innerHTML = sessionId
      TC.NewSession.valTeenClubDate.innerHTML = customDateFormat(sessionDate)

      // here we push sessions object into sign in database
      const sessionsobject = {};

      let sessionName = `Session${sessionId}`
          sessionsobject[sessionName] = []; 

      signInDatabase.push(sessionsobject)


      localStorage.setItem('signInDatabase',JSON.stringify(signInDatabase))

      localStorage.setItem('createSessionStatus','1')
    } else {
      // alert('Session Already Exists. do you want to open to open it instead?')
    }
 }



//  submitFormData();

