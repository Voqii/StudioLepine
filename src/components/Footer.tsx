export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-black/60">
            © {currentYear} Studio Lepine. Saskatchewan, Canada.
          </div>

          <div className="flex gap-6">
            <a
              href="mailto:cody@lepine.biz"
              className="text-sm hover:opacity-70 transition-opacity"
            >
              cody@lepine.biz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
