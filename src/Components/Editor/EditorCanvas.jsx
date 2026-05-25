import "./EditorCanvas.css"

function EditorCanvas() {

  return (
    <div className="editor">

      <div className="editor-topbar">

        <h2>
          Customize Your Design
        </h2>

      </div>

      <div className="editor-area">

        <div className="tshirt-container">

          {/* TSHIRT MOCKUP */}
          <div className="tshirt">

            {/* SAFE PRINT AREA */}
            <div className="safe-area">

              <p>
                PRINT AREA
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default EditorCanvas