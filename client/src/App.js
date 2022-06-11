import './styles/index.scss';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {Portfolio} from "./components/portfolio/Portfolio";
import {Company} from "./components/company/Company";
import {Contact} from "./components/contact/Contact";
import {Footer} from "./components/footer/Footer";
// import ScrollableAnchor from 'react-scrollable-anchor';


function App() {
    return (
        <div className="App">
            <Header />
            <div id={"section1"}>
                <Main />
            </div>
            <div id={"section2"}>
                <Skills />
            </div>
            <div id={"section3"}>
                <Portfolio />
            </div>
            <div id={"section4"}>
                <Company />
            </div>
            <div id={"section5"}>
                <Contact />
            </div>
            <Footer />
        </div>
    );
}

export default App;
