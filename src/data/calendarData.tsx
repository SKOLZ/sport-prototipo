type Race = {
  date: string,
  track: string,
  circuit: string,
  resultUrl: React.ReactNode | string,
}

type Calendar = {
  year: number;
  races: Array<Race>;
};

export const calendars: Array<Calendar> = [
  {
    year: 2013,
    races: [
      {
        date: "07-04-2013",
        track: "Autódromo Juan y Oscar Gálvez",
        circuit: "--",
        resultUrl: "No disponible"
      }, {
        date: "20-05-2013",
        track: "Autódromo de Dolores",
        circuit: "--",
        resultUrl: "No disponible"
      }, {
        date: "21-06-2013",
        track: "Autódromo Roberto Jose Mouras, La Plata",
        circuit: "--",
        resultUrl: "No disponible"
      }, {
        date: "30-07-2013",
        track: "Autódromo Roberto Jose Mouras, La Plata",
        circuit: "--",
        resultUrl: "No disponible"
      }, {
        date: "18-08-2013",
        track: "Autódromo Roberto Jose Mouras, La Plata",
        circuit: "--",
        resultUrl: "No disponible"
      }, {
        date: "15-09-2013",
        track: "Autódromo Juan y Oscar Gálvez",
        circuit: "--",
        resultUrl: "No disponible"
      }, {
        date: "06-10-2013",
        track: "Autódromo Roberto Jose Mouras, La Plata",
        circuit: "--",
        resultUrl: "No disponible"
      }, {
        date: "03-11-2013",
        track: "Autódromo de Dolores",
        circuit: "--",
        resultUrl: "No disponible"
      }, {
        date: "01-12-2013",
        track: "Autódromo Juan y Oscar Gálvez",
        circuit: "--",
        resultUrl: "No disponible"
      }
    ]
  }, {
    year: 2014,
    races: [
      {
        date: "09-03-2014",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: "No disponible"
      }, {
        date: "06-04-2014",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: "No disponible"
      }, {
        date: "11-05-2014",
        track: "Autódromo Oscar y Juan Galvez",
        circuit: "5",
        resultUrl: "No disponible"
      }, {
        date: "08-06-2014",
        track: "Autódromo de Dolores",
        circuit: "--",
        resultUrl: (<a href="http://www.mylaps.com/en/events/1031958">VER</a>)
      }, {
        date: "13-07-2014",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: "No disponible"
      }, {
        date: "24-08-2014",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: "No disponible"
      }, {
        date: "14-09-2014",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: "No disponible"
      }, {
        date: "05-10-2014",
        track: "Autódromo de Dolores",
        circuit: "--",
        resultUrl: "No disponible"
      }, {
        date: "02-11-2014",
        track: "Autódromo Oscar y Juan Galvez",
        circuit: "8",
        resultUrl: "No disponible"
      }, {
        date: "14-12-2014",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: "No disponible"
      }
    ]
  }, {
    year: 2015,
    races: [
      {
        date: "22-03-2015",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: "No disponible"
      }, {
        date: "19-04-2015",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: "No disponible"
      }, {
        date: "10-05-2015",
        track: "Autódromo de Dolores",
        circuit: "--",
        resultUrl: "No disponible"
      }, {
        date: "14-06-2015",
        track: "Autódromo Oscar y Juan Galvez",
        circuit: "8",
        resultUrl: (<a href="http://www.mylaps.com/en/events/1153426">VER</a>)
      }, {
        date: "19-07-2015",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: "No disponible"
      }, {
        date: "16-08-2015",
        track: "Autódromo Oscar y Juan Galvez",
        circuit: "5",
        resultUrl: "No disponible"
      }, {
        date: "06-09-2015",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: (<a href="http://www.mylaps.com/en/events/1187084">VER</a>)
      }, {
        date: "04-10-2015",
        track: "Autódromo de Dolores",
        circuit: "--",
        resultUrl: "No disponible"
      }, {
        date: "01-11-2015",
        track: "Autódromo Oscar y Juan Galvez",
        circuit: "9",
        resultUrl: "No disponible"
      }, {
        date: "06-12-2015",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: "No disponible"
      }
    ]
  }, {
    year: 2016,
    races: [
      {
        date: "06-03-2016",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: "No disponible"
      }, {
        date: "02-04-2016",
        track: "Autódromo Oscar y Juan Galvez",
        circuit: "8",
        resultUrl: (<a href="http://www.mylaps.com/en/events/1246621">VER</a>)
      }, {
        date: "22-05-2016",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: "No disponible"
      }, {
        date: "12-06-2016",
        track: "Autódromo de Dolores",
        circuit: "--",
        resultUrl: (<a href="http://www.mylaps.com/en/events/1280596">VER</a>)
      }, {
        date: "03-07-2016",
        track: "Autódromo Oscar y Juan Galvez",
        circuit: "5",
        resultUrl: (<a href="https://speedhive.mylaps.com/en/Events/1291974#_ga=1.85233305.144292042.1465784610">VER</a>)
      }, {
        date: "14-08-2016",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: "No disponible"
      }, {
        date: "11-09-2016",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: "No disponible"
      }, {
        date: "09-10-2016",
        track: "Autódromo de Dolores",
        circuit: "--",
        resultUrl: (<a href="https://speedhive.mylaps.com/en/Events/1339691#_ga=1.215474839.144292042.1465784610">VER</a>)
      }, {
        date: "13-11-2016",
        track: "Autódromo Oscar y Juan Galvez",
        circuit: "5",
        resultUrl: (<a href="https://speedhive.mylaps.com/en/Events/1348978#_ga=1.206642704.2079572113.1479142542">VER</a>)
      }, {
        date: "11-12-2016",
        track: "Autódromo Oscar y Juan Galvez",
        circuit: "5",
        resultUrl: (<a href="https://speedhive.mylaps.com/en/Events/1354430#_ga=1.214030868.2079572113.1479142542">VER</a>)
      }
    ]
  }, {
    year: 2017,
    races: [
      {
        date: "12-03-2017",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: (<a href="https://speedhive.mylaps.com/Events/1365969">VER</a>)
      }, {
        date: "02-04-2017",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: (<a href="https://speedhive.mylaps.com/Events/1373570">VER</a>)
      }, {
        date: "14-05-2017",
        track: "Autódromo de Dolores",
        circuit: "--",
        resultUrl: (<a href="https://speedhive.mylaps.com/Events/1391828">VER</a>)
      }, {
        date: "14-05-2017",
        track: "Autódromo de Dolores",
        circuit: "--",
        resultUrl: (<a href="https://speedhive.mylaps.com/Events/1391828">VER</a>)
      }, {
        date: "04-06-2017",
        track: "Autódromo Oscar y Juan Galvez",
        circuit: "5",
        resultUrl: (<a href="https://speedhive.mylaps.com/Events/1403886">VER</a>)
      }, {
        date: "09-07-2017",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: (<a href="https://speedhive.mylaps.com/Events/1422755">VER</a>)
      }, {
        date: "06-08-2017",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: (<a href="https://speedhive.mylaps.com/Events/1437853">VER</a>)
      }, {
        date: "10-09-2017",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: (<a href="https://speedhive.mylaps.com/Events/1455781">VER</a>)
      }, {
        date: "08-10-2017",
        track: "Autódromo de Dolores",
        circuit: "--",
        resultUrl: (<a href="https://speedhive.mylaps.com/Events/1469678">VER</a>)
      }, {
        date: "08-10-2017",
        track: "Autódromo de Dolores",
        circuit: "--",
        resultUrl: (<a href="https://speedhive.mylaps.com/Events/1469678">VER</a>)
      }, {
        date: "5-11-2017",
        track: "Autódromo Oscar y Juan Galvez",
        circuit: "5",
        resultUrl: (<a href="https://speedhive.mylaps.com/Sessions/4678200">VER</a>)
      }, {
        date: "26-11-2017",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: "No disponible"
      }
    ]
  }, {
    year: 2018,
    races: [
      {
        date: "11-03-2018",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: (<a href="https://speedhive.mylaps.com/Events/1498431">VER</a>)
      }, {
        date: "08-04-2018",
        track: "Autódromo Oscar y Juan Galvez",
        circuit: "5",
        resultUrl: (<a href="https://speedhive.mylaps.com/Events/1507183">VER</a>)
      }, {
        date: "13-05-2018",
        track: "Autódromo de Dolores",
        circuit: "--",
        resultUrl: (<a href="https://speedhive.mylaps.com/Events/1507183">VER</a>)
      }, {
        date: "13-05-2018",
        track: "Autódromo de Dolores",
        circuit: "--",
        resultUrl: (<a href="https://speedhive.mylaps.com/Events/1507183">VER</a>)
      }, {
        date: "17-06-2018",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: (<a href="https://speedhive.mylaps.com/Events/1544024">VER</a>)
      }, {
        date: "15-07-2018",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: (<a href="https://speedhive.mylaps.com/Sessions/4979378">VER</a>)
      }, {
        date: "15-07-2018",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: (<a href="https://speedhive.mylaps.com/Sessions/4979377">VER</a>)
      }, {
        date: "05-08-2018",
        track: "Autódromo Oscar y Juan Galvez",
        circuit: "5",
        resultUrl: (<a href="https://speedhive.mylaps.com/Sessions/5016814">VER</a>)
      }, {
        date: "16-09-2018",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: (<a href="https://speedhive.mylaps.com/Sessions/5101033">VER</a>)
      }, {
        date: "21-10-2018",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: (<a href="https://speedhive.mylaps.com/Sessions/5153880">VER</a>)
      }, {
        date: "18-11-2018",
        track: "Autódromo de Dolores",
        circuit: "--",
        resultUrl: (<a href="https://speedhive.mylaps.com/Sessions/5186219">VER</a>)
      }, {
        date: "08-12-2018",
        track: "Autódromo Oscar y Juan Galvez",
        circuit: "5",
        resultUrl: (<a href="https://speedhive.mylaps.com/Sessions/5201477">VER</a>)
      }
    ]
  }, {
    year: 2019,
    races: [
      {
        date: "24-03-2019",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: (<a href="https://speedhive.mylaps.com/Sessions/5266217">VER</a>)
      }, {
        date: "24-03-2019",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: (<a href="https://speedhive.mylaps.com/Sessions/5266218">VER</a>)
      }, {
        date: "05-05-2019",
        track: "Autódromo Oscar y Juan Galvez",
        circuit: "5",
        resultUrl: (<a href="https://speedhive.mylaps.com/Sessions/5332621">VER</a>)
      }, {
        date: "05-05-2019",
        track: "Autódromo Oscar y Juan Galvez",
        circuit: "5",
        resultUrl: (<a href="https://speedhive.mylaps.com/Sessions/5332622">VER</a>)
      }, {
        date: "02-06-2019",
        track: "Autódromo Oscar y Juan Galvez",
        circuit: "5",
        resultUrl: (<a href="https://speedhive.mylaps.com/Sessions/5393652">VER</a>)
      }, {
        date: "02-06-2019",
        track: "Autódromo Oscar y Juan Galvez",
        circuit: "5",
        resultUrl: (<a href="https://speedhive.mylaps.com/Sessions/5393653">VER</a>)
      }, {
        date: "23-06-2019",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: (<a href="https://speedhive.mylaps.com/Sessions/5434583">VER</a>)
      }, {
        date: "23-06-2019",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: (<a href="https://speedhive.mylaps.com/Sessions/5435727">VER</a>)
      }, {
        date: "14-07-2019",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: (<a href="https://speedhive.mylaps.com/Sessions/5477418">VER</a>)
      }, {
        date: "14-07-2019",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: (<a href="https://speedhive.mylaps.com/Sessions/5477419">VER</a>)
      }, {
        date: "18-08-2019",
        track: "Autódromo Oscar y Juan Galvez",
        circuit: "5",
        resultUrl: (<a href="https://speedhive.mylaps.com/Sessions/5542404">VER</a>)
      }, {
        date: "18-08-2019",
        track: "Autódromo Oscar y Juan Galvez",
        circuit: "5",
        resultUrl: (<a href="https://speedhive.mylaps.com/Sessions/5542405">VER</a>)
      }, {
        date: "08-09-2019",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: (<a href="https://speedhive.mylaps.com/Sessions/5585950">VER</a>)
      }, {
        date: "08-09-2019",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: (<a href="https://speedhive.mylaps.com/Sessions/5585951">VER</a>)
      }, {
        date: "13-10-2019",
        track: "Autódromo de Dolores",
        circuit: "--",
        resultUrl: (<a href="https://speedhive.mylaps.com/Sessions/5643783">VER</a>)
      }, {
        date: "13-10-2019",
        track: "Autódromo de Dolores",
        circuit: "--",
        resultUrl: (<a href="https://speedhive.mylaps.com/Sessions/5643784">VER</a>)
      }, {
        date: "03-11-2019",
        track: "Autódromo Oscar y Juan Galvez",
        circuit: "5",
        resultUrl: (<a href="https://speedhive.mylaps.com/Sessions/5664363">VER</a>)
      }, {
        date: "03-11-2019",
        track: "Autódromo Oscar y Juan Galvez",
        circuit: "5",
        resultUrl: (<a href="https://speedhive.mylaps.com/Sessions/5664364">VER</a>)
      }, {
        date: "01-12-2019",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: (<a href="https://speedhive.mylaps.com/Sessions/5685364">VER</a>)
      }, {
        date: "01-12-2019",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: (<a href="https://speedhive.mylaps.com/Sessions/5685365">VER</a>)
      }
    ]
  }, {
    year: 2021,
    races: [
      {
        date: "14-03-2021",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: (<a href="https://speedhive.mylaps.com/Events/1841149">VER</a>)
      }, {
        date: "18-04-2021",
        track: "Autódromo Oscar y Juan Galvez",
        circuit: "5",
        resultUrl: (<a href="https://speedhive.mylaps.com/Events/1848765">VER</a>)
      }, {
        date: "16-05-2021",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: (<a href="https://speedhive.mylaps.com/Events/1858264">VER</a>)
      }, {
        date: "25-07-2021",
        track: "Autódromo Oscar y Juan Galvez",
        circuit: "5",
        resultUrl: "No disponible"
      }, {
        date: "17-10-2021",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: (<a href="https://speedhive.mylaps.com/Events/1927438">VER</a>)
      }
    ]
  }
];
