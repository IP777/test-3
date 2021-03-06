// http://universities.hipolabs.com/search?country=Ukraine
const API_URL = "http://universities.hipolabs.com";

export const getCountryApi = (country) => {
	return fetch(`${API_URL}/search?country=${country}`, {
		method: "GET",
	}).then((res) => {
		if (res.ok) {
			return res.json();
		}
		return res.json();
	});
};
