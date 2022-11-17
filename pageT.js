const manager = managerData => {
    return `<div id="${managerData.getRole()}" class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Name:${managerData.getName()}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${managerData.getRole()}</h6>
      <p class="card-text">ID:${managerData.getId()}</p>
      <a href="#" class="card-link">Email:${managerData.getEmail()}</a>
      <a href="#" class="card-link">Number:${managerData.getOfficeNumber()}</a>
    </div>
  </div>`
}



const intern = internData => {
    return `<div id="${internData.getRole()}" class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Name${internData.getName()}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Role:${internData.getRole()}</h6>
      <p class="card-text">ID:${internData.getId()}</p>
      <a href="#" class="card-link">Email:${internData.getEmail()}</a>
      <a href="#" class="card-link">School:${internData.getSchool()}</a>
    </div>
  </div>`
}



const engneer = engneerData => {
    return `<div id="${engneerData.getRole()}" class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Name:${engneerData.getName()}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Role:${engneerData.getRole()}</h6>
      <p class="card-text">ID:${engneerData.getId()}</p>
      <a href="#" class="card-link">Email:${engneerData.getEmail()}</a>
      <a href="#" class="card-link">Github:${engneerData.getGithub()}</a>
    </div>
  </div>`
}

const eMaker = employeeA => {
  let Html = ''

  for ( i = 0; i < employeeA.length; i++ ) {
    if (employeeA[i].getRole() === "manager"){
      Html = Html + manager(employeeA[i])
    }
    if (employeeA[i].getRole() === "egneer"){
      Html = Html + engneer(employeeA[i])
    }
    if (employeeA[i].getRole() === "intern"){
      Html = Html + intern(employeeA[i])
    }
  } return Html
}

const build = data => {
  return `
  <!DOCTYPE html>
  <html>
  <link rel="stylesheet" href="style.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    <head>
    <h1>My team</h1>
    </head>
    <body>
      <div class = "box">
      ${eMaker(data)}
      </div>
    </body>
  </html>
`
}

module.exports = build;