import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

export default function Terms() {
  return (
    <PageTransition>
      <SEO
        title="Terms of Service - Studio Lepine"
        description="Terms of Service for Studio Lepine (lepine.biz). Information about using this website and engaging with our services."
        url="https://lepine.biz/terms"
        keywords="terms of service, terms and conditions, legal"
      />
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-sm text-black/60">Effective Date: October 12, 2025</p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="prose prose-lg max-w-none space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <section>
            <h2 className="text-2xl font-bold mb-3">1. Acceptance of Terms</h2>
            <p className="text-lg leading-relaxed text-black/80">
              By accessing and using lepine.biz (the "Site"), you agree to these Terms of Service. If you do not agree, please do not use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">2. Use of Site</h2>
            <p className="text-lg leading-relaxed text-black/80">
              This Site is provided for informational purposes to showcase the work and services of Studio Lepine. You may view, download, and print content from the Site for personal, non-commercial use only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">3. Intellectual Property</h2>
            <p className="text-lg leading-relaxed text-black/80 mb-4">
              All content on this Site, including text, images, logos, and code, is the property of Studio Lepine (Cody Lepine) unless otherwise noted. You may not reproduce, distribute, or create derivative works without explicit written permission.
            </p>
            <p className="text-lg leading-relaxed text-black/80">
              The Studio Lepine logo and branding are proprietary and may not be used without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">4. Third-Party Links</h2>
            <p className="text-lg leading-relaxed text-black/80">
              This Site may contain links to third-party websites. Studio Lepine is not responsible for the content, accuracy, or practices of external sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">5. No Warranties</h2>
            <p className="text-lg leading-relaxed text-black/80">
              This Site and its content are provided "as is" without warranties of any kind, express or implied. Studio Lepine does not guarantee that the Site will be error-free, secure, or uninterrupted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">6. Limitation of Liability</h2>
            <p className="text-lg leading-relaxed text-black/80">
              Studio Lepine (Cody Lepine) shall not be liable for any damages arising from your use of this Site, including but not limited to direct, indirect, incidental, or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">7. Services and Client Work</h2>
            <p className="text-lg leading-relaxed text-black/80">
              Information about services offered on this Site is for general informational purposes. Any formal engagement for design, development, security, or woodworking services requires a separate written agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">8. User Conduct</h2>
            <p className="text-lg leading-relaxed text-black/80 mb-3">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-lg text-black/80">
              <li>Use the Site for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to the Site or its systems</li>
              <li>Interfere with the proper functioning of the Site</li>
              <li>Scrape, copy, or harvest content in violation of these Terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">9. Contact Information</h2>
            <p className="text-lg leading-relaxed text-black/80 mb-3">
              For questions about these Terms of Service, contact:
            </p>
            <div className="text-lg text-black/80">
              <p className="font-semibold">Cody Lepine</p>
              <p>Email: <a href="mailto:cody@lepine.biz" className="text-accent hover:text-accent-dark transition-colors">cody@lepine.biz</a></p>
              <p>Location: Saskatchewan, Canada</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">10. Changes to Terms</h2>
            <p className="text-lg leading-relaxed text-black/80">
              Studio Lepine reserves the right to modify these Terms at any time. Changes will be effective immediately upon posting to this page. Continued use of the Site after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">11. Governing Law</h2>
            <p className="text-lg leading-relaxed text-black/80">
              These Terms are governed by the laws of Saskatchewan, Canada. Any disputes shall be resolved in the courts of Saskatchewan.
            </p>
          </section>

          <div className="border-t border-black/10 pt-8 mt-12">
            <p className="text-sm text-black/60">Last Updated: October 12, 2025</p>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
