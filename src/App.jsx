import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  function handleStartAddProject() {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: null };
    });
  }

  function handleSelectedProject(id){
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId:id };
    });

  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectId = Math.random()
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return { ...prevState,
        selectedProjectId : undefined,
        projects: [...prevState.projects, newProject] };
    });
  }
 function handleDeleteProject(){
  setProjectState((prevState) => {
    return { ...prevState, selectedProjectId: undefined ,  projects: prevState.projects.filter((project) => project.id !=prevState.selectedProjectId ) };
  }); 
 }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId )
  let content = <SelectedProject project={selectedProject} onDelete = {handleDeleteProject}/>;


  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject}/>;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onSelectProject={handleSelectedProject} onStartAddProject={handleStartAddProject} projects={projectState.projects} />
      {content}
    </main>
  );
}

export default App;
