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