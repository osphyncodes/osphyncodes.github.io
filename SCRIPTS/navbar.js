 const side = document.querySelector('.sidebar')
  fetch('/HTML/sidebar.html')
  .then(res=>res.text())
  .then(data=>{
    side.innerHTML=data
  })

/* side.innerHTML =`  <div class="sidebar">
<div class="logoTitle">
  <div class="logo">
    <div>
      <h6 class="hh">TC</h6>
    </div>
    <div>
      <h6>DMS</h6>
    </div>
  </div>
    <h4>Teen Club DMS</h4>
</div>

<button class="js-close-button">x</button>

<ul class="nav-list">
  <li>
    <a href="#">
      <span class="link-name">Dashboard</span>
    </a>
  </li>
  <li>
    <a href="#"><span class="link-name">Members</span>
    </a>
  </li>

  <li>
    <a href="#">
      <span class="link-name">Sessions</span>
    </a>
  </li>
  <li>
  <li>
    <a href="#">
      <span class="link-name">Reports</span>
    </a>
  </li>
  <li>
    <a href="#">
      <span class="link-name">User Management</span>
    </a>
  </li>
  <li>
    <a href="#">
      <span class="link-name">Sessions</span>
    </a>
  </li>
</ul>

</div> `  */