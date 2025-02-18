import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  ///////////////////////////////////////////////////////////
  function backToHome() {
    navigate("/");
  }
  ///////////////////////////////////////////////////////////
  return (
    <div className="h-screen w-screen bg-slate-500 p-6 items-center flex flex-col space-y-6">
      <p>{navigate}</p>
      <div className="w-[500px] space-y-3">
        <div className=" flex justify-center relative">
          <button
            onClick={backToHome}
            className="absolute left-0 top-0 bottom-0"
          >
            <ChevronLeftIcon />
          </button>
          <Title>TASK DESCRIPTION</Title>
        </div>

        <div className="bg-slate-300 p-4 rounded-md shadow">
          <h2 className="text-xl font-bold text-slate-800">{title}</h2>
          <p className="text-slate-700">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
