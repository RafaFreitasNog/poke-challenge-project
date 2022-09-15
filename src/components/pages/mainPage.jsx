import { Fragment } from "react";
import CardsSection from '../components/cardsSection'
import Header from "../components/header";

function MainPage(props) {
    return ( 
        <Fragment>
            <div>
                <Header/>
                <CardsSection/>
            </div>
        </Fragment>
     );
}

export default MainPage;