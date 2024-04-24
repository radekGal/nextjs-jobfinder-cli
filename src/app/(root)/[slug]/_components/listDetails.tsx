import { ListDetailsProps, ListType } from "@/types"

export const ListDetails = ({ title, list }: ListDetailsProps) => {
  return(
    <div>
      <h2 className="text-xl font-bold">{title}:</h2>
      <ul className="list-disc pl-5">
        {list.map((el: ListType) => (
          <li key={el.id}>{el.value}</li>
        ))}
      </ul>  
    </div>
  )
}