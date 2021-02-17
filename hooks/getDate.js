//

export default function getDate(timestamp) {
	if (timestamp) {
		const date = new Date(timestamp.seconds * 1000);
		const getDay = date.getDate();
		const getMonth =
			date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth;
		const getYear = date.getFullYear();
		return getDay + '/' + getMonth + '/' + getYear;
	}
}
