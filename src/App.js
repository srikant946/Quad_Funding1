import './App.css';
import Card from './Cards/Cards';
import Footer from './Footer/foot';
import Form from './Form/Grant_Form';

function App() {
  return (
    <>
    {/* <div className = "page-container">
          <div className = "content-wrap">

    <div className="container-fluid px-0">
    <nav className="navbar navbar-expand-sm navbar-dark bg-black py-0 px-0"> <a className="navbar-brand" href="#"><img id="logo" src="https://i.imgur.com/K7Nwq4V.jpg"/> &nbsp;&nbsp;&nbsp;Acme Inc</a> <span className="v-line"></span> <button className="navbar-toggler mr-3" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active"> <a className="nav-link" href="#">Programs</a> </li>
                <li className="nav-item"> <a className="nav-link" href="#">Users</a> </li>
                <li className="nav-item"> <a className="nav-link" href="#">Coaching</a> </li>
                <li className="nav-item"> <a className="nav-link" href="#">Analytics</a> </li>
            </ul>
        </div>
    </nav>
</div>

    <Card/>
</div>
</div>
    <Footer/> */}

    <Form/>
    </>
  );
}

export default App;
