const cityFrom = "#origin";
const cityIn = "#destination";
const dateWhen = ".avia-form > .avia-form__field > .trip-duration > .trip-duration__field:nth-child(1) > .trip-duration__input-wrapper";
const definedDateWhen = ".calendar__weeks-body > .calendar__week > .today > div > .calendar-day";
const dateBack = ".avia-form > .avia-form__field > .trip-duration > .trip-duration__field:nth-child(2) > .trip-duration__input-wrapper";
const definedDateBack = ".calendar__weeks-body > .calendar__week > .estimated:nth-child(7) > .calendar-day > .calendar-day__date";
const additional = ".forms-resolver__forms-wrap > .avia-form > .avia-form__field > .container_cdbece0 > .additional-fields";
const countPassangers = ".additional-fields__passenger-row:nth-child(1) > .additional-fields__passenger-control-wrap > div > .\\--increment > svg";
const tripClass = ".additional-fields__inner-wrap > .additional-fields__trip-class > div > .\\--economy > .custom-radio__caption";
const findButton = ".forms-resolver__forms-wrap > .avia-form > .avia-form__submit > .avia-form-submit > .button_70e8ad4";

const Mainpage = {
    findTickets: async (from, to) => {
        await page.click(cityFrom);
        await page.fill(cityFrom); // , "Казань"
        await page.click(cityIn);
        await page.fill(cityIn); // , "Венеция"
        await page.click(dateWhen);
        await page.click(definedDateWhen);
        await page.click(dateBack);
        await page.click(definedDateBack);
        await page.click(additional);
        await page.click(countPassangers);
        await page.click(countPassangers);
        await page.click(tripClass);
        await page.click(findButton);
    }
};
export default Mainpage;
