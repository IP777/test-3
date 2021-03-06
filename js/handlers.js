import refs from "./refs.js";
import { getCountryApi } from "./api.js";
import { conrtyTemplate, delaultTemplate } from "./template.js";

export const sendHandler = async () => {
	refs.getTable.innerHTML = delaultTemplate();

	const responseCountry = await getCountryApi(refs.getTextArea.value);

	if (responseCountry.length > 0) {
		refs.getTable.style.visibility = "visible";
	}

	responseCountry.map((uners, i) => {
		// Ограничение по колличеству стран
		if (i > 19) {
			return;
		}

		refs.getTable.insertAdjacentHTML(
			"beforeend",
			conrtyTemplate(i, uners.web_pages, uners.name, uners.country)
		);
	});
};

export const resetHandelbars = () => {
	refs.getTable.innerHTML = "";
	refs.getTextArea.value = "";

	// console.log(JSON.parse({
	//      [{"number":"1","web_pages":"http://www.academy.sumy.ua/","name":"Ukrainian Academy of Banking","country":"Ukraine","alpha_two_code":"UA"}]}))
};

export const checkboxHandler = (e) => {
	if (e.target.tagName === "INPUT") {
		if (e.target.checked) {
			const parent = e.target.parentElement.parentElement.childNodes;
			const countryObj = JSON.stringify({
				number: parent[1].innerHTML,
				web_pages: parent[3].innerHTML,
				name: parent[5].innerHTML,
				country: parent[7].innerHTML,
				alpha_two_code: parent[9].innerHTML,
			});

			if (localStorage.countyArray) {
				localStorage.setItem("countyArray", [
					localStorage.countyArray,
					countryObj,
				]);
			} else {
				localStorage.setItem("countyArray", countryObj);
			}

			// console.log(JSON.stringify(countryObj));
		} else {
			console.log(JSON.parse(localStorage.countyArray));
		}
	}
};
