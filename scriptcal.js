const calarr=[["2021/07/15","FC Botoșani"],
              ['2021/07/25','Universitatea Craiova'],
              ['2021/08/01','UTA Arad'],
              ['2021/08/08','Gaz Metan Mediaș'],
              ['2021/08/15','FC Rapid 1923'],
              ['2021/08/23','Sepsi OSK'],
              ['2021/08/29','CFR 1907 Cluj'],
              ['2021/09/12','SC Dinamo 1948'],
              ['2021/09/18','FC U Craiova 1948'],
              ['2021/09/25','FC Academica Clinceni'],
              ['2021/10/01','FC Chindia Târgoviște'],
              ['2021/10/16','CS Mioveni'],
              ['2021/10/31','FC Argeș'],
              ['2021/11/04','FCV Farul Constanța'],
              ['2021/11/07','FC Voluntari'],
              ['2021/11/21','FC Botoșani'],
              ['2021/11/28','Universitatea Craiova'],
              ['2021/12/05','UTA Arad'],
              ['2021/12/11','Gaz Metan Mediaș'],
              ['2021/12/15','FC Rapid 1923'],
              ['2021/12/19','Sepsi OSK'],
              ['2022/01/23','CFR 1907 Cluj'],
              ['2022/01/30','SC Dinamo 1948'],
              ['2022/02/06','FC U Craiova 1948'],
              ['2022/02/09','FC Chindia Târgoviște'],
              ['2022/02/19','CS Mioveni'],
              ['2022/02/27','FCV Farul Constanța'],
              ['2022/03/03','FC Argeș'],
              ['2022/03/06','FC Voluntari'],
              ['2022/03/14','FCV Farul Constanța'],
              ['2022/03/20','FC Argeș'],
              ['2022/03/20','FC Argeș'],
              ['2022/04/20','Universitatea Craiova'],
              ['2022/04/11','FC Voluntari'],
              ['2022/04/17','CFR 1907 Cluj'],
              ['2022/04/25','FCV Farul Constanța'],
              ['2022/05/02','FC Argeș'],
              ['2022/05/08','Universitatea Craiova'],
              ['2022/05/15','FC Voluntari'],
              ['2022/05/22','CFR 1907 Cluj']];

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

document.write('<section><div class="cal-class"><div>')
for(var i=calarr.length-1;i>=0;i--)
{
  if(isinpast(new Date(calarr[i][0])))
  {
    if(i%2==0)
    {
      document.write('<div><p id=datecal_past><strong><span>', convtorom(calarr[i][0]),'</span> - <span>',calarr[i][1],'</span></strong></p></div>');
    }
    else
    {
      document.write('<div><p id=datecal_past><span>', convtorom(calarr[i][0]),'</span> - <span>',calarr[i][1],'</span></p></div>');
    }
  }
  else
  {
    if(i%2==0)
    {
      document.write('<div><p id=datecal_upcoming><strong><span>', convtorom(calarr[i][0]),'</span> - <span>',calarr[i][1],'</span></strong></p></div>');
    }
    else
    {
      document.write('<div><p id=datecal_upcoming><span>', convtorom(calarr[i][0]),'</span> - <span>',calarr[i][1],'</span></p></div>');
    }
  }
}
document.write('</div></section>')