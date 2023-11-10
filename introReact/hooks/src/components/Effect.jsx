import { useState } from 'react'
import Text from './Text'


function Effect() {
  const [showText, setShowText] = useState(false)

  return (
    <div>
      <button
        onClick={() => {
          setShowText(!showText)
        }}
      >
        Show Text
      </button>

      {showText && <Text />}
    </div>
  )
}

export default Effect

// PARA ENTENDER EL useEffect, HAY QUE CONOCER EL
// CICLO DE VIDA DE UN COMPONENTE EN REACT
//   - mounting stage
//   - updating
//   - unmounting