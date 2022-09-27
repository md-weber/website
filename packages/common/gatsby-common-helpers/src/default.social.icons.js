import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaFacebook,
  FaEnvelope,
  FaLink,
  FaGlobe,
  FaYoutube,
  FaCodeBranch
} from 'react-icons/fa'
import {BsChatSquareText} from "react-icons/bs";

export default {
  default: {
    Icon: FaLink,
    color: '#718096'
  },
  youtube: {
    Icon: FaYoutube,
  },
  matrix: {
    Icon: BsChatSquareText,
  },
  codeberg: {
    Icon: FaCodeBranch
  },
  github: {
    Icon: FaGithub,
    color: 'darkslategray'
  },
  twitter: {
    Icon: FaTwitter,
  },
  instagram: {
    Icon: FaInstagram,
    color: '#C13584'
  },
  linkedin: {
    Icon: FaLinkedinIn,
    color: '#2867B2'
  },
  facebook: {
    Icon: FaFacebook,
    color: '#4267B2'
  },
  email: {
    Icon: FaEnvelope,
    color: '#718096'
  },
  website: {
    Icon: FaGlobe,
    color: 'darkslategray'
  }
}
