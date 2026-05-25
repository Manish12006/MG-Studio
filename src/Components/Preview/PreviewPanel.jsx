import "./PreviewPanel.css"

function PreviewPanel() {

  return (
    <div className="preview-panel">

      <h2>
        Preview Modes
      </h2>

      <div className="preview-buttons">

        <button className="active">
          2D Mode
        </button>

        <button>
          3D Preview
        </button>

        <button>
          Real Person
        </button>

      </div>

    </div>
  )
}

export default PreviewPanel