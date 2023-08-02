let ssHomeSessionId;

function SessionHomeLoad() {
  let total = 0
  let cont =
  numberOfSessionDB.forEach((element,index) => {

    const btns = TC.SessionHome.ctnSessionListDates.getElementsByTagName('button')

    const button = document.createElement('button');
    button.textContent = element.date;

    if(index === 0) {
      button.style.backgroundColor = 'blue';
      button.style.color = 'white';
      ssHomeSessionId = numberOfSessionDB[index].id
      TC.SessionHome.valIdStore.innerHTML = ssHomeSessionId
    }

    button.style.fontSize = '18px'

    button.addEventListener('click', () => {
      handleClick(index);
      button.style.backgroundColor = 'blue'
      button.style.color = 'white'
      //alert(numberOfSessionDB[index].name)
    });

    TC.SessionHome.ctnSessionListDates.appendChild(button);
    total++
  });

  TC.SessionHome.ctnTotalSessions.innerHTML = `${total} Sessions`

  // TC.SessionHome.valIdStore.style.display = 'none'
}

function handleClick(index) {
  const buttons = TC.SessionHome.ctnSessionListDates.getElementsByTagName('button')
  ssHomeSessionId = numberOfSessionDB[index].id

  for (const button of buttons) {
    button.style.backgroundColor = 'white'
    button.style.color = 'black' 
  }

  TC.SessionHome.valIdStore.innerHTML = ssHomeSessionId
  refreshHomePage() 
}

SessionHomeLoad();

TC.SessionHome.btnOpenSession.addEventListener('click', () => {
  const id = TC.SessionHome.valIdStore.innerHTML

  for (let index = 0; index < numberOfSessionDB.length; index++) {
    const element = numberOfSessionDB[index];
    
    if(element.id === Number(id)) {
      TC.NewSession.valSessionID.innerHTML = element.id;
      TC.NewSession.valTeenClubDate.innerHTML = customDateFormat(element.date);

      TC.Pages.Sessions.HomePage.style.display = 'none'
      TC.Pages.Sessions.NewSession.style.display = 'block'
      break;
    }
  }

  disableEnableFormInputs('signInForm','disable');
  refreshTable2();
})

let sessionNamee;
let SessionIndexx;

const getSessionName2 = function() {
  //const getId = TC.NewSession.valSessionID.innerHTML
 const getId = TC.SessionHome.valIdStore.innerHTML

  for (let index = 0; index < numberOfSessionDB.length; index++) {
    const value = numberOfSessionDB[index];
    if (getId == value.id) {
      sessionNamee = value.name
    } 
  }

  let Checking;

  for (let index = 0; index < signInDatabase.length; index++) {
    const value = signInDatabase[index];
    Checking = (value[sessionNamee])

    if (Checking) {
      SessionIndexx = index
      break;
    }
  }
}

const refreshHomePage = function() {
  

    let teenAttended;
    let newlyEnrolled = 0;
    let guardianSession = 0;
    let mocPhone = 0;
    let mocText = 0;
    let mocWhatsapp = 0;
    let mocHome = 0;
    let mocNone = 0;
    let roaSupport = 0;
    let roaClinic = 0;
    let asMale1014 = 0;
    let asFemale1014 = 0;
    let asMale1518 = 0;
    let asFemale1518 = 0;
    let asMale19p = 0;
    let asFemale19p = 0;

    getSessionName2()

  ckDB =   signInDatabase[SessionIndexx][sessionNamee]

  // getting values;
  teenAttended = ckDB.length
  
  ckDB.forEach((value) => {
    // newly enrolled
    if (value.newInTeenClub == 'Yes') {
      newlyEnrolled++
    }

    // Phone
    if (value.sbyPhone == 'Phone') {
      mocPhone++
    }

    // Text
    if (value.sbyText == 'Text') {
      mocText++
    }

    // Whatsapp
    if (value.sbyWhatsapp == 'Whatsapp') {
      mocWhatsapp++
    }

    // Home
    if (value.sbyHome == 'Home') {
      mocHome++
    }

    // None
    if (value.sbyNone == 'None') {
      mocNone++
    }

    // None
    if (value.reasonOfAttendance == 'Support') {
      roaSupport++
    } else {
      roaClinic++
    }
  })

  // Assigning values to innerHTML
  TC.SessionHome.valTeensAttended.innerHTML =`Teens Attended: ${teenAttended}`
  TC.SessionHome.valNewlyEnrolled.innerHTML = `Newly Enrolled: ${newlyEnrolled}`

  TC.SessionHome.ModeOfContact.valPhone.innerHTML = mocPhone

  TC.SessionHome.ModeOfContact.valText.innerHTML = mocText

  TC.SessionHome.ModeOfContact.valWhatsapp.innerHTML = mocWhatsapp

  TC.SessionHome.ModeOfContact.valHome.innerHTML = mocHome

  TC.SessionHome.ModeOfContact.valNone.innerHTML = mocNone

  TC.SessionHome.ReasonOfAtt.valSupport.innerHTML = roaSupport
  TC.SessionHome.ReasonOfAtt.valClinic.innerHTML = roaClinic
}

refreshHomePage();
