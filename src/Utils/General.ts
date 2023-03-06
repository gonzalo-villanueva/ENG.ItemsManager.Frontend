export const FormatterCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export const getLSData = (item:string) => {
  const data:any = localStorage.getItem(item);
  return JSON.parse(data);
}

export const setLSData = (item:string, data:any) => {
  localStorage.setItem(item, JSON.stringify(data));
  return data;
}

export const addLSData = (item:string, data:any) => {
  const olddata:any = localStorage.getItem(item);
  const parsedata:any = olddata?JSON.parse(olddata):[];
  parsedata.push(data)
  localStorage.setItem(item, JSON.stringify(parsedata));
}