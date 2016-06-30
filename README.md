# nicetime

## Usage

Download from npm

````
  $ npm install @grepug/nicetime --save
````

Import nicetime in your js file

````
  import nicetime from '@grepug/nicetime'

  nicetime({
    date: '2016-06-30 13:08', // except any String that can be taken by new Date() or UNIX timestamp number(in millisecond)
    lang: 'en' // default to 'cn'
  })

````

## APIs

- nicetime().getTimeAgo()

  returns nicetime format like '1 day ago', '一天前'

- nicetime().get(format)

  format can be `'H:i'`, `'H:i:s'`, `'fullWithSec'`, `'Y-M-d'`, `'full'`

  default `'full'`
