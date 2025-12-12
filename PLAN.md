## Plan: Build Personal Portfolio Site with Next.js

Set up a static Next.js portfolio site showcasing your skills and experience, optimized for SEO with sections for About, Portfolio, Resume, and Contact. Deploy to Google Cloud Run with your custom domain.

### Steps

1. **Initialize Next.js project** with TypeScript and modern tooling in `/home/martin/projects/ml.com`
2. **Configure static export settings** in next.config.js for static site generation
3. **Create page structure** — build About, Portfolio, Resume, and Contact pages under `app/` directory
4. **Implement SEO optimization** — add metadata, Open Graph tags, and structured data for search visibility
5. **Design and style components** — create reusable components with Tailwind CSS for consistent styling
6. **Build contact form** — implement form UI with stub backend for later integration
7. **Integrate Google Analytics** — add GA tracking for visitor insights
8. **Set up Google Cloud Run deployment** — create Dockerfile and GitHub Actions workflow for auto-deployment
9. **Configure custom domain** — link martinlefebvre.com to Cloud Run service and set up HTTPS

### Implementation Details

- **Resume**: Include your existing resume as a PDF download and/or formatted page view
- **Portfolio**: Start with this site as your first project; structure for adding more projects as you build them
- **Contact Form**: Create form UI with stub handlers (e.g., console logging) until backend service is determined
- **Styling**: Use Tailwind CSS for rapid component development and consistent design
- **Analytics**: Implement Google Analytics 4 tracking for visitor behavior insights
- **Deployment**: Configure GitHub Actions to auto-deploy to Cloud Run on push to main branch
- **Domain**: DNS configuration to point martinlefebvre.com to Cloud Run service with automatic HTTPS via managed certificates

### Technical Stack

- **Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Google Cloud Run (container-based)
- **CI/CD**: GitHub Actions (auto-deploy)
- **Analytics**: Google Analytics 4
- **Hosting**: Google Cloud Run with custom domain