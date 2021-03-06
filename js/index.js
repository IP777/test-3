import DateToday from "./date.js";
import {
	reloadBtnHandler,
	imgDelHandler,
	closeModalHandler,
	imageHandler,
} from "./handler.js";
import refs from "./refs.js";

refs.getDateElement.innerHTML = DateToday();
if (localStorage.imageArray) {
	localStorage.imageArray
		.split(",")
		.map((iter) => (refs.geteImageItems[iter].style.visibility = "hidden"));
}

refs.getModalClose.addEventListener("click", closeModalHandler);
refs.getImageList.addEventListener("click", imageHandler);
refs.getImageList.addEventListener("click", imgDelHandler);
refs.getReloadBtn.addEventListener("click", reloadBtnHandler);
