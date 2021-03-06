import refs from "./refs.js";
import { resetHandelbars, checkboxHandler, sendHandler } from "./handlers.js";

refs.getSendBtn.addEventListener("click", sendHandler);
refs.getResetBtn.addEventListener("click", resetHandelbars);
refs.getTable.addEventListener("change", checkboxHandler);

// () =>
// 	console.log(JSON.parse({
//         [{"number":"1","web_pages":"http://www.academy.sumy.ua/","name":"Ukrainian Academy of Banking","country":"Ukraine","alpha_two_code":"UA"}]}))
