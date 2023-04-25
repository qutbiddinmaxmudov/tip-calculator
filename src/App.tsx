import React from 'react'
import './styles/global.scss'
import styles from './styles/app.module.scss'
import TipCalculator from './components/TipCalculator'

function App() {
  return <div className={styles.app}>
    <TipCalculator/>
  </div>
}

export default App
