import refs from "./refs.js";
import { resetHandelbars, checkboxHandler, sendHandler } from "./handlers.js";
import { getAllStorage } from "./storage.js";
import { conrtyTemplate, delaultTemplate } from "./template.js";

refs.getSendBtn.addEventListener("click", sendHandler);
refs.getResetBtn.addEventListener("click", resetHandelbars);
refs.getTable.addEventListener("change", checkboxHandler);

//Load default state
if (localStorage.countyArray) {
	refs.getTable.innerHTML = delaultTemplate();
	refs.getTable.style.visibility = "visible";

	getAllStorage().map((uners, i) => {
		console.log(uners.web_pages);
		refs.getTable.insertAdjacentHTML(
			"beforeend",
			conrtyTemplate(i, uners.web_pages, uners.name, uners.country)
		);
	});

	refs.getTable.querySelectorAll(".checkBox").forEach((iter) => {
		iter.checked = true;
	});

	refs.getCounter.innerHTML =
		"Выбраных елементов: " + JSON.parse(localStorage.countyArray).length;
}
