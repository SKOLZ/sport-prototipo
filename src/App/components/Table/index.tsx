import styles from './styles.module.scss';

interface Props {
  headers: Array<string>
  elements: Array<{[key: string]: any}>
  className?: string
}

export const Table: React.FC<Props> = ({headers, elements, className}) => {
  return (
    <table className={`${styles.table} ${className}`}>
      <thead className={styles.tableHeader}>
        <tr>
          {headers.map(header => (
            <th key={header} className={styles.tableHeaderItem}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {
          elements.map((element, index) => (
            <tr key={index} className={styles.tableRow}>
              {
                Object.keys(element).map(key => <td className={styles.tableRowItem}>{element[key]}</td>)
              }
             </tr>
          ))
        }
      </tbody>
    </table>
  );
} 
