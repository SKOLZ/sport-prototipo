import { racers } from "../../../data/racerData";
import { Table } from "../../components/Table";

export const Ranking: React.FC = () => {
  return (
    <section className="page-container">
      <Table headers={["Numero", "Nombre", "Equipo"]} elements={racers}/>
    </section>
  );
} 
