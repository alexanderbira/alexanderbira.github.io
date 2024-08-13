import attributionStyles from "./Attribution.module.css"

function Attribution() {
  return (
    <div className={attributionStyles.attributionContainer}>
      <span className={attributionStyles.attribution}>
        Designed by <a href="https://github.com/alexanderbira/alexanderbira.github.io">Alex BR</a>
      </span>
    </div>
  )
}

export default Attribution
