import { champions } from "../../../data/champions";
import { Table } from "../../components/Table";

export const Champions: React.FC = () => {
  return (
    <section className="page-container">
      <Table headers={["Año", "Piloto"]} elements={champions}/>
    </section>
  );
}
