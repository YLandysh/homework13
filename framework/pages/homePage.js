import app from "./index";

const Home = {
    getPrifileName: async (page) => {
        const btnChoose = await app().selectTicket().buyTicket(page);
        return btnChoose;
    }
};

export default Home;
