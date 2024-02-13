import { logEvent } from "firebase/analytics";
import { analytics } from "../services/firebase";

const navigateAndLog = (target, label) => {
    window.location.href = target;
    console.log(`${label} clicked!`);
    logEvent(analytics, `landing-page_click_${label}`);
};

export default navigateAndLog;
