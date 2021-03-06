export default function dateToday() {
	const dateNow = new Date();

	const dayNow =
		dateNow.getDay() < 10 ? `0${dateNow.getDay()}` : dateNow.getDay();
	const mounthNow =
		dateNow.getMonth() < 10 ? `0${dateNow.getMonth()}` : dateNow.getMonth();
	const yearNow = dateNow.getFullYear();

	const hoursNow =
		dateNow.getHours() < 10 ? `0${dateNow.getHours()}` : dateNow.getHours();
	const minutesNow =
		dateNow.getMinutes() < 10
			? `0${dateNow.getMinutes()}`
			: dateNow.getMinutes();

	return `Date now (${dayNow}:${mounthNow}:${yearNow})  Time now (${hoursNow}:${minutesNow})`;
}
