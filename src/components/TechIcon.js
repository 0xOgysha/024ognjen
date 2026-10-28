export default function TechIcon({ name }) {
  const common = { viewBox: "0 0 32 32", width: 32, height: 32, "aria-hidden": true };
  switch (name) {
    case "Next.js": return <svg {...common}><circle cx="16" cy="16" r="14" fill="#05090e" stroke="#66717b" /><path d="M10 24V8l16 23M22 8v15" fill="none" stroke="white" strokeWidth="1.8" /></svg>;
    case "React": return <svg {...common} fill="none" stroke="#00d9ff" strokeWidth="1.3"><ellipse cx="16" cy="16" rx="15" ry="5.5" /><ellipse cx="16" cy="16" rx="15" ry="5.5" transform="rotate(60 16 16)" /><ellipse cx="16" cy="16" rx="15" ry="5.5" transform="rotate(120 16 16)" /><circle cx="16" cy="16" r="2.5" fill="#00d9ff" /></svg>;
    case "JavaScript": return <svg {...common}><rect x="2" y="2" width="28" height="28" rx="3" fill="#f5d843" /><text x="7" y="25" fill="#151b20" fontSize="18" fontWeight="700">JS</text></svg>;
    case "HTML5":
    case "CSS3": return <svg {...common}><path d="M3 2h26l-2.5 25L16 30 5.5 27Z" fill={name === "HTML5" ? "#f35325" : "#168bf0"} /><path d="M16 5h10l-2 20-8 2Z" fill="white" opacity=".12" /><text x="8" y="24" fill="white" fontSize="23" fontWeight="700">{name === "HTML5" ? "5" : "3"}</text></svg>;
    case "Supabase": return <svg {...common}><path d="M18 1 3 19h12l-1 12 15-18H17Z" fill="#38cda3" /><path d="m17 13-3 18 15-18Z" fill="#27a788" /></svg>;
    case "Bootstrap": return <svg {...common}><rect x="1" y="3" width="30" height="26" rx="6" fill="#8650e8" /><text x="7" y="25" fill="white" fontSize="25" fontWeight="600">B</text></svg>;
    case "SQL": return <svg {...common} fill="none" stroke="#40b5e9" strokeWidth="1.5"><ellipse cx="16" cy="7" rx="11" ry="4" /><path d="M5 7v18c0 5 22 5 22 0V7M5 15c0 5 22 5 22 0M5 22c0 5 22 5 22 0" /></svg>;
    case "Git": return <svg {...common}><rect x="5" y="5" width="22" height="22" rx="2" fill="#ef5b3e" transform="rotate(45 16 16)" /><path d="m12 6 8 8v9M12 6v13" fill="none" stroke="#06111a" strokeWidth="2" /><g fill="#06111a"><circle cx="12" cy="9" r="2.3" /><circle cx="12" cy="20" r="2.3" /><circle cx="20" cy="23" r="2.3" /></g></svg>;
    default: return <i className="bi bi-github" aria-hidden="true" />;
  }
}
