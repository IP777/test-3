import refs from "./refs.js";

export const addToStorage = (obj) => {
	const countryObj = JSON.stringify(obj);

	if (localStorage.countyArray) {
		const modArr = localStorage.countyArray
			.replace("[", "")
			.replace("]", "");

		localStorage.setItem("countyArray", `[${modArr},${countryObj}]`);
	} else {
		localStorage.setItem("countyArray", `[${countryObj}]`);
	}

	refs.getCounter.innerHTML =
		"Выбраных елементов: " + JSON.parse(localStorage.countyArray).length;
};

export const removeFromStorage = (id) => {
	let arr = [];

	if (localStorage.countyArray.includes("[")) {
		arr = JSON.parse(localStorage.countyArray);
	} else {
		arr = JSON.parse(`[${localStorage.countyArray}]`);
	}

	if (arr.length > 1) {
		const modArr = arr.filter((iter) => {
			if (iter.name !== id) {
				return iter;
			}
		});
		localStorage.setItem("countyArray", JSON.stringify(modArr));

		refs.getCounter.innerHTML =
			"Выбраных елементов: " +
			JSON.parse(localStorage.countyArray).length;
	} else {
		localStorage.clear();
		refs.getCounter.innerHTML = "Не выбрано не одного елемента";
	}
};

export const getAllStorage = () => {
	return JSON.parse(localStorage.countyArray);
};

export const clearStorage = () => {
	localStorage.clear();
	refs.getCounter.innerHTML = "Не выбрано не одного елемента";
};
