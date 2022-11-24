import { useLocation } from 'react-router-dom'

export default function Contact() {
  const queryString = useLocation().search
  console.log(queryString)

  // This parses the query param

  const queryParameters = new URLSearchParams(queryString)
  const name = queryParameters.get("name")
  // ?name=mario

  console.log(name)

    return (
      <div>
        <h2>Contact</h2>
        <p>lorem  impsum doloar sit amet</p>
      </div>
    )
  }
  