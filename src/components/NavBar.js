const NavBar = () =>{
    return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">ICS2608</a>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" href="/myfirstreact">Home</a>
        <a className="nav-link" href="/employees">Employees</a>
        <a className="nav-link" href="/add">Add employee</a>
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>

            </div>
            )
}

export default NavBar;