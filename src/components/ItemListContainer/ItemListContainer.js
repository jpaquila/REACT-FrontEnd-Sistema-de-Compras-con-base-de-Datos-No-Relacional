import Accordion from 'react-bootstrap/Accordion';

export const ItemListContainer = (props) => {
    return (
        <div style={{ marginTop: "40px" }}>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{props.greeting}</Accordion.Header>
                    <Accordion.Body>
                        En esta lista auto desplegable, pronto irán distintos elementos para poder interactuar y
                        probar nuevas funcionalidades. <br></br>
                        Agradecemos su paciencia.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}