var dateNow = new Date()

export default () =>
        <div>
          {`Tänään on ${dateNow.getDate()}.${dateNow.getMonth()+1}.${dateNow.getFullYear()}.`}
        </div>
