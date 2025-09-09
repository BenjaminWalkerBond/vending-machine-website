export default function FooterSection() {
  return (
    <footer className="section section--tight">
      <div style={{display:'flex',flexWrap:'wrap',gap:16,justifyContent:'space-between',alignItems:'center'}}>
        <p className="muted">© {new Date().getFullYear()} Tributary Market LLC • San Marcos, TX</p>
        <a href="#top" className="link">Back to top ↑</a>
      </div>
    </footer>
  )
}
