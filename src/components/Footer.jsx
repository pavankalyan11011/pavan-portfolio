import { profile } from '../data/site'

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {profile.name}</p>
      <p>Java Full Stack · MERN · Hyderabad</p>
    </footer>
  )
}
