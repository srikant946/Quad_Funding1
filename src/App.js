import './App.css';
import Card from './Cards/Cards';
import Footer from './Footer/foot';
import Form from './Form/Grant_Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch, faShoppingCart, faWallet } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
    <div className = "page-container">
          <div className = "content-wrap">

    <div className="container-fluid px-0">
    <nav className="navbar navbar-expand-sm navbar-dark bg-black py-0 px-0"> <a className="navbar-brand" href="#"><img id="logo" src="https://i.imgur.com/K7Nwq4V.jpg"/> &nbsp;&nbsp;&nbsp;EthQF</a> <span className="v-line"></span> <button className="navbar-toggler mr-3" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active"> <a className="nav-link ms-auto" href="#">What's Possible</a> </li>
                <li className="nav-item"> <a className="nav-link" href="#">Products</a> </li>
                <li className="nav-item"> <a className="nav-link" href="#">Community</a> </li>
                <li className="nav-item"> <a className="nav-link" href="#">Organization</a> </li>
            </ul>
            <ul class="nav navbar-nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link" href="#"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></a> 
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></a> 
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><FontAwesomeIcon icon={faBell}></FontAwesomeIcon></a> 
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><FontAwesomeIcon icon={faWallet}></FontAwesomeIcon></a> 
                </li>
                <ul class="nav header-navbar-rht">
                    <li class="nav-item dropdown has-arrow logged-item">
                    <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                        <span class="user-img">
                            <img class="rounded-circle" src="https://i.imgur.com/K7Nwq4V.jpg" width="31" alt="Img"/>&nbsp; ABCD
                        </span>
                    </a>                
                    </li>
                </ul>
            </ul>
        </div>
    </nav>
    </div>

    <Card/>
    
    </div>
    </div>
    
    <Footer/>

    {/* <Form/> */}
    </>
  );
}

export default App;
