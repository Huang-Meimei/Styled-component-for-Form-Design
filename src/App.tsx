/*
    File name: StyledBreadCrumb
    Author:Yuying Huang
    Date: 2024-3-1
    Description: Create form element components, which are used to compose the designed UI panel
    Components: This is the project entry
    Others: To start the project, run 'npm install' first and 'npm run dev'
*/

import './App.scss'
import StyledBreadCrumb from './components/StyledBreadCrumb'
import { THEME } from './components/ThemeDetail'


function App() {

  const defaultTheme={
    type:THEME.dark
  }

  function handleFormChange(){

  }

  return (
    <main>
      <StyledBreadCrumb 
        theme={defaultTheme.type} 
        onClose={false} 
        onChange={handleFormChange} 
        id={1} 
      >
      </StyledBreadCrumb>

    </main>
  )
}

export default App
