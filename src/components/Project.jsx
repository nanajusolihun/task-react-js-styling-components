import CardProjects from "./CardProjects";
import Project1 from "../images/project_1.jpg";
import Project2 from "../images/project_2.jpg";
import Project3 from "../images/project_3.jpg";

const Projects = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 my-5 text-center">
          <h1>My Projects</h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-4 col-md-6 my-3">
            <CardProjects image={Project1} title="Lifestyle Medicine" />
          </div>
          <div className="col-sm-12 col-lg-4 col-md-6 my-3">
            <CardProjects image={Project2} title="Banking Technology" />
          </div>
          <div className="col-sm-12 col-lg-4 col-md-6 my-3">
            <CardProjects image={Project3} title="Marketplace Website" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
