var date = new Date()
var day = date.getDay()
var month = date.getMonth()
var year = date.getFullYear()

export default () =>
  <div>
    Tänään on{' '}{day}.{month}.{year}
  </div>
