import React,{useState, useRef} from "react";
import { Container, Form, Button } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";

import ContactModal from "../components/contactModal";
import Layout from "../components/layout";
import SEO from "../components/seo";

const RECAPTCHA_KEY = "6LcaueofAAAAADjjuMh6uJCAXE5A9MWYvWdLANNf"

const Contact = () =>{
    const [serverState, setServerState] = useState({
        submitting: false,
        showModal:  false,
        msg: "",
        ok:null
    });
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const recaptchaRef = useRef(null);
    

    const handleServerResponse = (ok, msg, form) => {
        setButtonDisabled(true);
        recaptchaRef.current.reset();
        setServerState({
          submitting: false,
          showModal: true,
          ok:ok,
          msg:msg        
        });
        if (ok) {
          form.reset();
        }

        console.log(ok,msg,form)
    };

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        setServerState({ submitting: true });

        const formData = new FormData(form);

        const recaptchaValue = recaptchaRef.current.getValue();

        if (recaptchaValue){

            formData.append(
                "g-recaptcha-response",
                recaptchaValue
            )
            
            fetch("https://getform.io/f/ecf09f8c-aaf4-473a-a0aa-0b7b2d4eecbe", {
                method: "POST",
                body: formData
            })
            .then((r)=> {
                if(!r.ok){
                    handleServerResponse(false, "Sorry please try again later.", form);
                }
                else{
                    
                    handleServerResponse(true, "Thank you for your email, I look foward to working with you.", form);
                }
            })
            .catch((r)=>{
                handleServerResponse(false, "Sorry, there was an error please try again later.", form);
            })
        }


    }

    const verifyCallback =  res => {
        if (res){
            setButtonDisabled(false);
        }
        else {
            setButtonDisabled(true)
        }
                                                                                       
    }

    return (

        <Layout page={"contact"}>
            <SEO title="Contact"/>

            <Container fluid className="header">
                <h1>Get in Touch</h1>
                <p>Send me a message or details of the project you would like me to be a part of.</p>
            </Container>

            <Container fluid className="form">
                <Form
                    id="contact"
                    onSubmit={handleSubmit}
                >
                    <Form.Group className="fields">
                        <Form.Label>
                            Your Name
                            <span className="req">*</span>
                        </Form.Label>
                        <Form.Control required type="text" name="name" placeholder="Name"/>
                        
                        <Form.Label>
                            Your Email
                            <span className="req">*</span>
                        </Form.Label>
                        <Form.Control required type="email" name="email" placeholder="name@example.com"/>

                        <Form.Label>Your Website</Form.Label>
                        <Form.Control type="text" name="website" placeholder="domain.com"/>

                        <Form.Label>
                            Your Message
                            <span className="req">*</span>
                        </Form.Label>
                        <Form.Control required as="textarea" name="message" rows={4}/>
                        
                        <ReCAPTCHA
                            className="g-recaptcha"
                            ref={recaptchaRef}
                            sitekey={RECAPTCHA_KEY}
                            onChange={verifyCallback}
                            onExpired= {()=>{setButtonDisabled(true)}}
                        />
                    </Form.Group>

                    <Button type="submit" disabled={buttonDisabled | serverState.submitting}> Submit </Button>
                </Form>
            </Container>

            <ContactModal
                show={serverState.showModal}
                onHide={()=>setServerState({showModal:false})}
                msg = {serverState.msg}
            />

        </Layout>
    )
}

export default Contact