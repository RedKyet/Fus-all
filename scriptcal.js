const calarr=[["2021/07/01","Concordia Chiajna"],["2021/07/03","FC Chindia Târgoviște"],['2021/07/07','CS Mioveni'],['2022/05/06','test']];

document.open();

//check if a date is in the past
function isinpast(date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
}

//convert from american date to rom
function convtorom(date)
  {
    const date_arr = date.split('/');
    date_rom = date_arr[2]+'-'+date_arr[1]+'-'+date_arr[0];
    return date_rom;
  }
//american format is yyyy/mm/dd

//past matches are formatted red
for(var i=calarr.length-1;i>=0;i--)
{
  if(isinpast(new Date(calarr[i][0])))
  {
    if(i%2==0)
    {
      document.write('<p id=datecal_past><strong>', convtorom(calarr[i][0]),' - ',calarr[i][1],'</strong></p>');
    }
    else
    {
      document.write('<p id=datecal_past>', convtorom(calarr[i][0]),' - ',calarr[i][1],'</p>');
    }
  }
  else
  {
    if(i%2==0)
    {
      document.write('<p id=datecal_upcoming><strong>', convtorom(calarr[i][0]),' - ',calarr[i][1],'</strong></p>');
    }
    else
    {
      document.write('<p id=datecal_upcoming>', convtorom(calarr[i][0]),' - ',calarr[i][1],'</p>');
    }
  }
}