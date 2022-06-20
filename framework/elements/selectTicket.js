// const profileNameField =
//     ".navbar-end > .user > .dropdown > .base-button > .username";
//
// const btnSelectTicket = {
//     selectTicket: async (page, username, password) => {
//         const profileNameText = await page.textContent(getTicket);
//         return profileNameText;
//     }
// };
// export default selectTicket;

const btnSelectTicket =
    ".product-list__item:nth-child(2) > div > .ticket-desktop > .ticket-desktop__side-content > .ticket-desktop__side-container > .ticket-desktop__buy-button-wrap > .buy-button > div > .button_70e8ad4";

const SelectTicket = {
    getTicket: async () => {
        const selectTicketText = await page.textContent(btnSelectTicket);
        return selectTicketText;
    }
};
export default SelectTicket;

