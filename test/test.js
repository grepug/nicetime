var test = require('tape')
var nicetime = require('../dev/nicetime')

test('nicetime.js show be tested', (t) => {

	t.equal(nicetime({
		date: '2016-06-29 11:10:01'
	}).getTimeAgo(), '1天前')
	t.equal(nicetime({
		date: '2016-06-29 11:10:01',
		lang: 'en'
	}).getTimeAgo(), '1 day ago')
	t.equal(nicetime({
		date: '2016-06-30 11:10:01',
		lang: 'en'
	}).getTimeAgo(), '1 hour ago')
	t.equal(nicetime({
		date: '2016-07-01 13:10:01',
		lang: 'en'
	}).getTimeAgo(), 'in 1 day')
	t.equal(nicetime({
		date: '2016-07-6 13:10:01',
		lang: 'en'
	}).getTimeAgo(), 'in 6 days')
	t.equal(nicetime({
		date: '2016-07-10 13:10:01',
		lang: 'en'
	}).getTimeAgo(), '2016-07-10 13:10')
	t.equal(nicetime({
		date: '2016-06-24 13:10:01'
	}).getTimeAgo(), '5天前')
	t.equal(nicetime({
		date: '2016-06-24 13:10:01'
	}).get('Y-M-d'), '2016-06-24')
	t.equal(nicetime({
		date: '2016-06-24 13:10:01'
	}).get('H:i:s'), '13:10:01')
	t.equal(nicetime({
		date: '2016-06-24 13:10:01'
	}).get('M-d H:i'), '06-24 13:10')

	t.end()

})
