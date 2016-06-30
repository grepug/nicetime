export default function (date, now, format) {
    var dateObj
    var day
    var diff
    var hour
    var min
    var month
    var p
    var sec
    var seconds
    var timeLevel
    var timestamp
    var year

    now = now ? new Date(now) : new Date()

    dateObj = new Date(date)
    if (isNaN(dateObj.getTime())) {
      var arr = date.split(/[- :]/)
      dateObj = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5])
    }

    timestamp = Math.floor(dateObj.getTime() / 1000)
    diff = Math.floor(now.getTime() / 1000) - timestamp
    seconds = {
      min: 60,
      hour: 60 * 60,
      day: 60 * 60 * 24,
      week: 60 * 60 * 24 * 7
    }
    if (diff <= 59) {
      timeLevel = 'just now'
    }
    for (p in seconds) {
      if (diff < seconds[p]) {
        timeLevel = p
        break
      }
    }
    timeLevel = timeLevel || 'full'
    if (format) {
      timeLevel = format
    }
    switch (timeLevel) {
      case 'just now':
        return '刚刚'
      case 'min':
        return Math.round(diff) + '秒前'
      case 'hour':
        return Math.round(diff / seconds.min) + '分钟前'
      case 'day':
        return Math.round(diff / seconds.hour) + '小时前'
      case 'week':
        return Math.round(diff / seconds.day) + '天前'
      case 'Y-M-d':
        year = dateObj.getFullYear()
        month = ('0' + (dateObj.getMonth() + 1)).slice(-2)
        day = ('0' + dateObj.getDate()).slice(-2)
        hour = ('0' + dateObj.getHours()).slice(-2)
        min = ('0' + dateObj.getMinutes()).slice(-2)
        return year + '-' + month + '-' + day
      case 'full':
        year = dateObj.getFullYear()
        month = ('0' + (dateObj.getMonth() + 1)).slice(-2)
        day = ('0' + dateObj.getDate()).slice(-2)
        hour = ('0' + dateObj.getHours()).slice(-2)
        min = ('0' + dateObj.getMinutes()).slice(-2)
        return year + '-' + month + '-' + day + ' ' + hour + ':' + min
      case 'fullWithSec':
        year = dateObj.getFullYear()
        month = ('0' + (dateObj.getMonth() + 1)).slice(-2)
        day = ('0' + dateObj.getDate()).slice(-2)
        hour = ('0' + dateObj.getHours()).slice(-2)
        min = ('0' + dateObj.getMinutes()).slice(-2)
        sec = ('0' + dateObj.getSeconds()).slice(-2)
        return year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec
      case 'H:i':
        hour = ('0' + dateObj.getHours()).slice(-2)
        min = ('0' + dateObj.getMinutes()).slice(-2)
        return hour + ':' + min
      case 'H:i:s':
        hour = ('0' + dateObj.getHours()).slice(-2)
        min = ('0' + dateObj.getMinutes()).slice(-2)
        sec = ('0' + dateObj.getSeconds()).slice(-2)
        return `${hour}:${min}:${sec}`
    }
  }
