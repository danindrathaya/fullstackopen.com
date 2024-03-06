# fullstackopen.com
fullstackopen.com exercises

    Muhammad Danindra Athaya - 120510233010

# 0.4
Create a similar diagram depicting the situation where the user creates a new note on the page https://studies.cs.helsinki.fi/exampleapp/notes by writing something into the text field and clicking the Save button.
 
    sequenceDiagram

    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: HTTP status code 302 Found
    diactivate server

    Note right of browser: 'It is an HTTP POST request to the server address new_note. <br> The server responds with HTTP status code 302. This is a URL redirect, with which the server asks the browser to do a new <br> HTTP GET request to the address defined in the header's Location - the address notes.'

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTTP status code 304 Not Modified (HTML document)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: HTTP status code 304 Not Modified (CSS file)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: HTTP status code 304 Not Modified (JavaScript file)
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{content: "", date: "2024-03-04T15:22:17.893Z"}, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes

# 0.5
Create a diagram depicting the situation where the user goes to the single-page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa.
    
    sequenceDiagram
    
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTTP status code 304 Not Modified (HTML Document)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: HTTP status code 304 Not Modified (CSS file)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: HTTP status code 304 Not Modified (JavaScript file)
    deactivate server
    
    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{content: "testtt", date: "2024-03-04T17:00:21.856Z"}, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes

# 0.6
Create a diagram depicting the situation where the user creates a new note using the single-page version of the app.

    sequenceDiagram
    
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: HTTP status code 201 Created
    deactivate server

    Note right of browser: 'It is an HTTP POST request to the server address new_note_spa. <br> The server responds with HTTP status code 201. This is a URL redirect, with which the server asks the browser to do a new <br> HTTP GET request to the address defined in the header's Location - the address notes.'

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTTP status code 304 Not Modified (HTML Document)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: HTTP status code 304 Not Modified (CSS file)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: HTTP status code 304 Not Modified (JavaScript file)
    deactivate server
    
    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{content: "testtt", date: "2024-03-04T17:00:21.856Z"}, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes

# 1.1 and 1.2
App.jsx

    const Header = (props) => {
      return (
    <div>
      <h1>{props.course}</h1>
    </div>
      )
    }

    const Part = (props) => {
      return (
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
      )
    }
    const Content = (props) => {
      return (
      <div>
        <Part part={props.part1} exercise={props.exercises1}/>
        <Part part={props.part2} exercise={props.exercises2}/>
        <Part part={props.part3} exercise={props.exercises3}/>
      </div>
    )
    }

    const Total = (props) => {
      return (
    <div>
      <p> Number of exercises {props.total}</p>
    </div>
      )
    }

    const App = () => {
      const course = 'Half Stack application development'
      const part1 = 'Fundamentals of React'
      const exercises1 = 10
      const part2 = 'Using props to pass data'
      const exercises2 = 7
      const part3 = 'State of a component'
      const exercises3 = 14
      console.log('danindra')

      return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
      )
    }

    export default App

Main.jsx

    import ReactDOM from 'react-dom/client'

    import App from './App'

    ReactDOM.createRoot(document.getElementById('root')).render(<App />)
