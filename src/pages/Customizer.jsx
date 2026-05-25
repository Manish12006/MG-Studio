import Toolbar from "../Components/Toolbar/Toolbar"
import EditorCanvas from "../Components/Editor/EditorCanvas"
import PreviewPanel from "../Components/Preview/PreviewPanel"

import "./Customizer.css"

function Customizer() {

  return (
    <div className="customizer">

      {/* LEFT TOOLBAR */}
      <Toolbar />

      {/* MAIN EDITOR */}
      <EditorCanvas />

      {/* RIGHT PANEL */}
      <PreviewPanel />

    </div>
  )
}

export default Customizer