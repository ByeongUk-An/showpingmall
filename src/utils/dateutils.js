
function leftPad(value) {
   if (value >= 10) {
      return value;
   }

   return `0${value}`;
}


export const datetimeFormat = (source, delimiter = `-`) => {
   const year = source.getFullYear();
   const month = leftPad(source.getMonth() + 1);
   const day = leftPad(source.getDate());


   const hours = ('0' + source.getHours()).slice(-2);
   const minutes = ('0' + source.getMinutes()).slice(-2);
   const seconds = ('0' + source.getSeconds()).slice(-2);

   const timeString = hours + ':' + minutes  + ':' + seconds;

   return [year, month, day, timeString].join(delimiter);
}

export const dateFormat = (source, delimiter = `-`) => {
   const year = source.getFullYear();
   const month = leftPad(source.getMonth() + 1);
   const day = leftPad(source.getDate());

   return [year, month, day].join(delimiter);
}