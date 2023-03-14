import { Outlet, Link } from "react-router-dom";



function Layout() {
  return (
    <>
      
        <header>
            
            <nav sx={{ display: 'flex' }}>

                <ul >
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/player">Player</Link>
                    </li>
                    <li>
                        <Link to="/favs">Favourites</Link>
                    </li>
                </ul>
            </nav>
        </header>

      <Outlet/>

        <footer >
            <h3>This is Footer</h3>
        </footer>
    </>
  );
}

export default Layout;