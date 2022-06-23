import Mainpage from "./mainPage";
import Home from "./homePage";
import SelectTicket from "../elements/selectTicket";

const app = () => ({
    Main: () => ({ ...Mainpage }),
    Home: () => ({ ...Home }),
    SelectTicket: () => ({ ...SelectTicket })
});

export default app;
