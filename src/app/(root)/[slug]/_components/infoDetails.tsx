type InfoDetailsTypes = {
  name: string;
  value: string;
}

export const InfoDetails = ({ name, value }: InfoDetailsTypes) => {
  return(
    <div className="flex justify-between mb-2">
      <h3>{name}</h3>
      <h3 className="font-medium">{value}</h3>
    </div>
  )
}