import { Link } from "react-router-dom"
import pageNotFoundImage from"../assets/images/pagenotfound.png"
import {Button} from "../components";

export const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col font-bold items-center my-4">
           <p className="dark:text-white text-7xl my-10">404, oops!</p>
           <div className="max-w-lg">
            <img className="rounded" src={pageNotFoundImage} alt="page not found" />
           </div>
        </div>
        <div className="flex justify-center  my-4">
          <Link to="/">
            <Button>Back To Home</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
