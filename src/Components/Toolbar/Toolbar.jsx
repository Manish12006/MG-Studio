import "./Toolbar.css"

function Toolbar() {

  return (
    <div className="toolbar">

      <div className="toolbar-logo">
        MG
      </div>

      <div className="toolbar-tools">

        <button>
          Upload
        </button>

        <button>
          Text
        </button>

        <button>
          AI
        </button>

        <button>
          Color
        </button>

      </div>

    </div>
  )
}

export default Toolbar