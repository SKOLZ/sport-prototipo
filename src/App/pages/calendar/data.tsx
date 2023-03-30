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
        resultUrl: (<a href="http://www.sportprototipo.com/?page_id=354">VER</a>)
      }, {
        date: "20-05-2013",
        track: "Autódromo de Dolores",
        circuit: "--",
        resultUrl: "No disponible"
      }
    ]
  }, {
    year: 2014,
    races: [
      {
        date: "09-03-2014	",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: (<a href="http://www.sportprototipo.com/?page_id=605">VER</a>)
      }, {
        date: "06-04-2014",
        track: "Autódromo Roberto Mouras",
        circuit: "Chico",
        resultUrl: (<a href="http://www.sportprototipo.com/?page_id=607">VER</a>)
      }
    ]
  }
];
