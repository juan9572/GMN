const SectionMetodos = ({icon, title, className}) => {
  return (
    <div className={`section__head ${className}`}>
      <span>
        {icon}
      </span>
      <h1>
        {title}
      </h1>
    </div>
  )
}

export default SectionMetodos
