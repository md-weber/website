import React from 'react'
import PropTypes from 'prop-types'
import { Box, Label, Input, Textarea, Button, Message, Spinner } from 'theme-ui'

/**
 * How to enable form integration:
 *
 * 1) Shadow this component ✅
 * 2) Remove the demo attribute from the form tag. ✅
 * 3) Add your action end-point to the form tag. ✅
 * 4) If required by your form API provider, add the hidden input(s). ✅
 *
 * Some recommended serverless form providers:
 * Getform (https://www.gatsbyjs.com/docs/building-a-contact-form/#getform)
 * Formspree (https://www.gatsbyjs.com/docs/building-a-contact-form/#formspree)
 * Netlify Form (https://www.gatsbyjs.com/docs/building-a-contact-form/#netlify) ✅
 */

const ContactForm = ({ handleSubmit, submitting, success }) => (
  <form action="https://getform.io/f/4c7d67af-6bca-4a91-9e8b-474f06b8a49a" method="POST">
    <input type="hidden" name="form-name" value="contact" />

    {success === true && (
      <Message variant='success'>
        Thank you for contacting us. We'll get back to you soon!
      </Message>
    )}
    {success === false && (
      <Message variant='error'>
        Something went wrong. Please try again later!
      </Message>
    )}
    <Box variant='forms.row'>
      <Box variant='forms.column'>
        <Label htmlFor='contact-form-name'>Name</Label>
        <Input type='text' id='contact-form-name' name='name' required />
      </Box>
      <Box variant='forms.column'>
        <Label htmlFor='contact-form-company'>Company Name</Label>
        <Input type='text' id='contact-form-company' name='company' />
      </Box>
    </Box>
    <Box variant='forms.row'>
      <Box variant='forms.column'>
        <Label htmlFor='contact-form-email'>Email</Label>
        <Input
          type='email'
          placeholder='email@example.com'
          id='contact-form-email'
          name='email'
          required
        />
      </Box>
    </Box>
    <Box variant='forms.row'>
      <Label htmlFor='contact-form-subject'>Subject</Label>
      <Input type='text' id='contact-form-subject' name='subject' required />
    </Box>
    <Box variant='forms.row'>
      <Label htmlFor='contact-form-message'>Your Message</Label>
      <Textarea name='message' id='contact-form-message' />
    </Box>
    <Box variant='forms.row'>
      <input type="checkbox" id="consent" name="consent" value="no" required />
      <input type="hidden" id="consent" name="consent" value="yes" required />
      <p>I agree to the handling of my personal information in accordance with the  <a href="./privacy-policy"> Flutter Explained privacy policy.</a></p>
    </Box>
    <Button
      variant={success || submitting ? 'disabled' : 'primary'}
      disabled={success || submitting}
      type='submit'
      required
    >
      Submit {submitting && <Spinner size='20' />}
    </Button>
  </form>
)

export default ContactForm

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  success: PropTypes.bool
}
