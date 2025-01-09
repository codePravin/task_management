import { CgNotes } from "react-icons/cg";
import { FaTasks } from "react-icons/fa";
import { GrTask } from "react-icons/gr";
import { BsListTask } from "react-icons/bs";
import { Link } from "react-router-dom";
function SideBar() {
  const data = [
    {
      title: "All Tasks",
      icon: <CgNotes />,
      link:"/"
    },
    {
      title: "Important Tasks",
      icon: <BsListTask />,
      link:"importantTasks"
    },
    {
      title: "Completed Tasks",
      icon: <GrTask />,
      link:"completedTasks"
    },
    {
      title: "Incomplete Tasks",
      icon: <FaTasks />,
      link:"incompleteTasks"
    },
  ];
  return (
    <>
      <div>
        <h2 className="text-xl font-bold">The code Master</h2>
        <h4 className="text-gray-700">Email</h4>
        <hr className="border border-gray-400" />
      </div>
      <div className="space-y-3">
        {data.map((ele, key) => (
          <Link to={ele.link} className="flex items-center hover:bg-gray-500 p-2 rounded-xl transition-all duration-150" key={key}>{ele.icon}&nbsp;&nbsp;{ele.title}</Link>
        ))}
      </div>
      <div className="">
        <button className="bg-gray-500 w-full p-2 rounded-xl">Logout</button>
      </div>
    </>
  );
}
export default SideBar;
