
import './App.css'
import { Box, styled } from '@mui/material'
import Header from './components/Header'
import InfoHeader from './components/InfoHeader'
import Articles from './components/Articles'


const Container = styled(Box)`
  width: 59%;
  margin: 110px auto 0 auto;

`


function App() {


  return (
    <Box>
    <Header/>
    <Container>
    <InfoHeader/>
    <Articles/>
    </Container>
    </Box>
  )
}

export default App
