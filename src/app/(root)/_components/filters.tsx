import { InputForm } from "@/components"

export const Filters = () => {
  return(
    <div className="w-1/4 bg-[#fafafa] rounded-[12px] mr-4">
      <h2 className="text-2xl font-medium">Filter</h2>
      <div>
        <h2>Search</h2>
        <InputForm type="text" placeholder="Job Name, Title" />
      </div>
      <div>
        <h2>Location</h2>
        <select>
          {/* <InputForm type="search" placeholder="Search" /> */}
          <option value="all">All</option>
          <option value="warsaw">Warsaw</option>
          <option value="berlin">Berlin</option>
        </select>
      </div>
    </div>
  )
}

