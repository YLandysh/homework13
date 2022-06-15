import Mainpage from "./mainPage";
//import Home from "./homePage";
//import RightMenu from "../elements/rightMenu";

const app = () => ({
    Main: () => ({ ...Mainpage }),
    Home: () => ({ ...Home }),
    selectTicket: () => ({ ...selectTicket })
});

export default app;
