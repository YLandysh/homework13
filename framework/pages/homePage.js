import app from "./index";
import SelectTicket from "../elements/selectTicket";

const Home = {
    getTicket: async () => {
        const btnChoose = await app().SelectTicket().getTicket();
        return btnChoose;
    }
};

export default Home;
