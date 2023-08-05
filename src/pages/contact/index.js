import React from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "./content_option";
import Button from 'react-bootstrap/Button';

const ContactUs = () => {
  

  return (
      <Container>
     
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4" font-family="sans-sarif" >İletişim</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Bize Ulaşın</h3>
            <address>
              <strong>E-posta:</strong>{" "}
              <a href={`mailto:${contactConfig.EMAIL}`}>
                {contactConfig.EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("PHONE") ? (
                <p>
                  <strong>Telefon:</strong> {contactConfig.PHONE}
                </p>
              ) : (
                ""
              )}
            </address>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form  className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Adınız" 
                    type="text"
                    required 
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="E-posta "
                    type="email" 
                    required 
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Mesajınız"
                rows="5" 
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                <Button variant="success" type="submit">Gönder</Button>{' '}
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
  );
};

export default ContactUs;