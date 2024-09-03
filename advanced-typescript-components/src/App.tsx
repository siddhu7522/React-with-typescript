import { useRef } from "react"
import Button from "./components/Button"
import Container from "./components/Container"
import Input from "./components/Input"
import Form from "./components/Form"


function App() {
  const input = useRef(null)
  const handleSave = (data: unknown) =>{
    const extractedData = data 
    console.log(extractedData)
  }

  return (
    <main>
      
      <p>
        <Button el="button" />
      </p>
      <p>
        <Button el="anchor" href="https:google.com">A link</Button>
      </p>
      <Container as={Button}>Click</Container>
      <Form onSave={handleSave}>
      <Input type="text" label="Your Name" id="name" name="name" ref={input} />
      <Input type="number" label="Your Age" id="age" name="age" />
      <p>
        <Button>Save</Button>
      </p>
      </Form>
    </main>
  )
}

export default App
