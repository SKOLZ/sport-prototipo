import { Table } from "../../components/Table";
import { calendars } from "../../../data/calendarData";
import styles from './styles.module.scss';

export const Calendar: React.FC = () => {
  return (
    <section className={`page-container ${styles.calendarSection}`}>
      {
        calendars.reverse().map((calendar) => (
          <>
            <h5 className={styles.calendarTitle}>Calendario {calendar.year}</h5>
            <Table className={styles.calendarTable} headers={["Fecha", "Autodromo", "Circuito", "Resultado"]} elements={calendar.races} />
          </>
        ))
      }
    </section>
  );
} 
