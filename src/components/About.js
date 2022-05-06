import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
    return (
        <div className='about-container'>
            <h1>Questions?</h1>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Tools Used?</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>React</li>
                            <li>Javascript</li>
                            <li>Css</li>
                            <li>Bootstrap</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Created By?</Accordion.Header>
                    <Accordion.Body>
                        <p>Ji Park's - <a href="https://github.com/norfkorean/react-calculator-app" target="_blank" rel="noreferrer">Calculator GitHub Source</a></p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}