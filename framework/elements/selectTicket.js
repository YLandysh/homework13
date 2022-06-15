const profileNameField =
    ".navbar-end > .user > .dropdown > .base-button > .username";

const btnSelectTicket = {
    selectTicket: async (page, username, password) => {
        const profileNameText = await page.textContent(profileNameField);
        return profileNameText;
    }
};
export default selectTicket;

