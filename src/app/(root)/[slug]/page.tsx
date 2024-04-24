import { Button } from "@/components/button";
import { Banner } from "../_components";
import { InfoDetails } from "./_components/infoDetails";
import { ListDetails } from "./_components/listDetails";


const data = [
  { id: 1, value: 'Skill 1' },
  { id: 2, value: 'Skill 2' },
  { id: 3, value: 'Skill 3' },
  { id: 4, value: 'Skill 4' },
]

export default function Detail() {
  return(
    <main className="flex min-h-screen flex-col items-center">
      <Banner />
      <div className="container mx-auto flex">
        <div className="w-4/6 px-2 bg-green-200">
          <div className="flex justify-between">
            <div>
              <h2>Logo goes here</h2>
              <h3>Company Name</h3>
              <h3>Location Location Valuses</h3>
            </div>
            <div className="flex flex-col items-end">
              <Button>Apply Now</Button>
              <h3>End date: 13.04.2024</h3>
              <h3>Cash $300-$400/week</h3>
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-xl font-bold">Job Description</h2>
              <p>
              Cras porta quam eu magna iaculis, non viverra nisl dictum. Curabitur viverra, nulla vitae fermentum dignissim, nisi ante imperdiet justo, nec lobortis enim augue quis turpis. Nullam commodo, diam eu congue pharetra, purus justo rutrum augue, in elementum elit magna ut neque. Proin facilisis, velit at dignissim accumsan, purus erat tristique odio, vel rutrum tortor justo in leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et velit gravida mi tristique pellentesque. 
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold">Responsibilities:</h2>
              <ul className="list-disc pl-5">
                <li>Clean Coding</li>
                <li>Teamplay</li>
                <li>Create great products</li>
                <li>ETC...</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold">Required Skills:</h2>
              <ul className="list-disc pl-5">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Git</li>
              </ul>
            </div>
            <ListDetails title="Skills" list={data} />
          </div>
        </div>
        <div className="w-2/6">
          <div className="bg-slate-200 px-3">
            <h2 className="font-bold text-xl mb-2">Information</h2>
            <InfoDetails name="Date Posted" value="June 20, 2023" />
            <InfoDetails name="Location" value="Warsaw" />
            <InfoDetails name="Category" value="IT & Networking" />
            <InfoDetails name="Offered Salary" value="$400-$500/monthly"/>
            <InfoDetails name="Expiration Date" value="May 12, 2023"/>
            <InfoDetails name="Experience" value="1 Year" />
          </div>
        </div>
      </div>
    </main>
  )
}