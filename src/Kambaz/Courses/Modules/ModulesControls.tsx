import { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import ModuleEditor from "./ModuleEditor";
export default function ModulesControls(
  { moduleName, setModuleName, addModule }:
    { moduleName: string; setModuleName: (title: string) => void; addModule: () => void; }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <Button variant="danger" onClick={handleShow} size="lg" className="me-1 float-end" id="wd-add-module-btn">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </Button>
      <Dropdown className="float-end me-2">
        <Dropdown.Toggle variant="secondary" size="lg" id="wd-publish-all-btn">
          <GreenCheckmark /> Publish All
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item id="wd-publish-all">
            <GreenCheckmark /> Publish All
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-all-modules-and-items">
            <GreenCheckmark /> Publish all modules and items
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-modules-only"></Dropdown.Item>
          <GreenCheckmark /> Publish modules only
        </Dropdown.Menu>
      </Dropdown>
      <ModuleEditor show={show} handleClose={handleClose} dialogTitle="Add Module"
       moduleName={moduleName} setModuleName={setModuleName} addModule={addModule} />
      {/* Implement the View Progress and Collapse All buttons with IDs wd-view-progress and wd-collapse-all */}
    </div>
  );
}
