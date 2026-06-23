import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>

      </header>
      <div className="contacts">
        <div>
        <a href="mailto:peggymailula@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:peggymailula@gmail.com">Peggymailula@gmail.com</a>
        </div>
        <div>
        <a href="tel:+27659228653"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+27659228653">(+27) 659228653</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}