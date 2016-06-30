export default function (options) {
	return new Nicetime(options)
}

class Nicetime {
	constructor (options) {
		this.lang = (options.lang || 'cn').toLowerCase()

		this.date = new Date(options.date)
		this.now = options.now ? new Date(options.now) : new Date

		this.diff = Math.floor((this.now.getTime() - this.date.getTime()) / 1000)
	}

	getTimeAgo () {

		const DIFF = {
			min: 60,
			hour: 60 * 60,
			day: 60 * 60 * 24,
			week: 60 * 60 * 24 * 7,
			month: 60 * 60 * 24 * 30
		}
		var unit
		var isAgo = true
		var retEN
		var retCN

		if (this.diff < 0) {
			this.diff = Math.abs(this.diff)
			isAgo = false
		}

		if (this.diff <= 59) {
			unit = 'just now'
		}

		for (let p in DIFF) {
			if (DIFF.hasOwnProperty(p)) {
				if (this.diff < DIFF[p]) {
					unit = p
					break
				}
			}
		}
		
		switch (unit) {
			case 'just now':
				if (isAgo) {
					retEN = 'just now'
					retCN = '刚刚'
				} else {
					retEN = 'in a while'
					retCN = '马上'
				}
				break
			case 'min':
				retEN = isAgo ? `${Math.floor(this.diff)} sec ago` : `in ${Math.floor(this.diff)} sec`
				retCN = isAgo ? `${Math.floor(this.diff)} 秒前` : `${Math.floor(this.diff)} 秒后`
				break
			case 'hour':
				retEN = isAgo ? `${Math.floor(this.diff / DIFF.min)} min ago` : `in ${Math.floor(this.diff / DIFF.min)} min`
				retCN = isAgo ? `${Math.floor(this.diff / DIFF.min)} 分钟前` : `${Math.floor(this.diff / DIFF.min)} 分钟后`
			case 'day':
				let hour = Math.floor(this.diff / DIFF.hour)
				if (isAgo) {
					retEN = hour > 1 ? `${hour} hours ago` : `${hour} hour ago`
					retCN = `${hour}小时前`
				} else {
					retEN = hour > 1 ? `in ${hour} hours` : `in ${hour} hour`
					retCN = `${hour}小时后`
				}

				break
			case 'week':
				let day = Math.floor(this.diff / DIFF.day)
				if (isAgo) {
					retEN = day > 1 ? `${day} days ago` : `${day} day ago`
					retCN = `${day}天前`
				} else {
					retEN = day > 1 ? `in ${day} days` : `in ${day} day`
					retCN = `${day}天后`
				}
				break
			default:
				return this.get()
		}

		return this.lang === 'cn' ? retCN : retEN

	}

	get (format) {
		const year = this.date.getFullYear()
    const month = ('0' + (this.date.getMonth() + 1)).slice(-2)
    const day = ('0' + this.date.getDate()).slice(-2)
    const hour = ('0' + this.date.getHours()).slice(-2)
    const min = ('0' + this.date.getMinutes()).slice(-2)
    const sec = ('0' + this.date.getSeconds()).slice(-2)
  	switch (format) {
  		case 'H:i':
  			return `${hour}:${min}`
  		case 'H:i:s':
  			return `${hour}:${min}:${sec}`
			case 'fullWithSec':
				return `${year}-${month}-${day} ${hour}:${min}:${sec}`
			case 'Y-M-d':
				return `${year}-${month}-${day}`
  		case 'full':
  		default:
  			return `${year}-${month}-${day} ${hour}:${min}`
  	}
	}
}
