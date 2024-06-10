import React from "react"
import { Modal, Button } from "react-bootstrap"

const ContactModal = props => {
  const { show, onHide, msg } = props

  return (
    <Modal show={show} size="lg" aria-labelledby="contact-email-modal" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contact-email-modal">Contact Email</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{msg}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ContactModal
