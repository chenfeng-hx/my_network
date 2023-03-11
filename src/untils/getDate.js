export default function (timer){
	let year = timer.getFullYear()
	let month = timer.getMonth() + 1
	let day = timer.getDate()
	let hour = timer.getHours()
	let minute = timer.getMinutes()
	let second = timer.getSeconds()
	month = month > 9 ? month : '0' + month
	day = day > 9 ? day : '0' + day
	hour = hour > 9 ? hour : '0' + hour
	minute = minute > 9 ? minute : '0' + minute
	second = second > 9 ? second : '0' + second
	return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}
