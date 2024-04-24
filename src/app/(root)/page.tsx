 "use client"
import { fetcher } from "@/utils/fetch";
import React from "react";
import { useQuery } from "react-query";
import { Banner, Filters, Job } from "./_components";
import { useSession } from "next-auth/react";

type User = {
  _id: string;
  name: string;
  email: string;
  role?: string;
}


// const fetchAllJobs = () => {
//   return {
//     queryKey: ['users'],
//     queryFn: async () => {
//       const response = await fetcher.get('/user');
//       const data = await response.data
//       return data;
//     }
//   }
// }


export default function Home() {

 
  // const [user, setUser] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const resp = await axios.get('http://localhost:5000/api/user');
  //     const data = await resp.data;
  //     console.log(resp);
  //     console.log(data);
  //     //setUser(data);
  //   })();
  // }, [])



  // const { isLoading, data } = useQuery(fetchAllJobs());
  // console.log(data)
  // console.log(isLoading)


  // if(isLoading) {
  //   return(
  //     <div>loading...</div>
  //   )
  // }

  const { data } = useSession();

  console.log(data);
  
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Banner />
      <div className="w-full pt-[96px]">
        <div className="container mx-auto flex">
          <Filters />
          <div className="w-3/4 px-2">
            <div className="flex justify-between">
              <h2>All 142 jobs</h2>
              <div>Sort</div>
            </div>
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
          </div>
        </div>
      </div>
      {/* {data.map((user: User) => (
        <div key={user._id} style={{ marginBottom: 24, width: '100%' }}>
          <h2>User name: {user.name}</h2>
          <h2>User email: {user.email}</h2>
          <p>User role: {user.role}</p>
        </div>
      ))} */}
      {/* <El className="font-black text-3xl text-white p-10 cursor-pointer" onClick={() => alert('clicked el')} /> */}
    </main>
  );
}


// interface ElProps extends React.ComponentPropsWithoutRef<"div">{}

// type ElProps = React.ComponentPropsWithoutRef<"div">

// const El = (props: ElProps) => {

//   const { className, ...restProps } = props;

//   return(
//     <div
//       className={`bg-black ${className}`}
//       { ...restProps}
//     >
//       hello el
//     </div>
//   )
// }
