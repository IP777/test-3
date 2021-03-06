import refs from "./refs.js";

export const imageHandler = (e) => {
	if (e.target.tagName === "IMG") {
		refs.getImagInModal.src = e.target.src;
		refs.getModal.style.display = "block";
	}
};

export const closeModalHandler = () => (refs.getModal.style.display = "none");

export const imgDelHandler = (e) => {
	if (e.target.tagName === "INPUT") {
		const parentElement = e.target.parentElement;
		parentElement.style.visibility = "hidden";

		if (localStorage.imageArray) {
			localStorage.setItem("imageArray", [
				localStorage.imageArray,
				parentElement.id,
			]);
		} else {
			localStorage.setItem("imageArray", parentElement.id);
		}
	}
};

export const reloadBtnHandler = () => {
	refs.geteImageItems.forEach((iter) => (iter.style.visibility = "visible"));
	localStorage.clear();
};
