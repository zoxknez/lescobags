# Lescobags - FIBC Packaging Solutions Website

Complete professional website for Lescobags d.o.o., a leading FIBC (Flexible Intermediate Bulk Container) manufacturer based in Leskovac, Serbia.

## 🌟 Features

### Complete Multi-Page Website
- **Homepage** - Full featured landing page with hero, products preview, certifications, about section, and customer satisfaction
- **Products Page** - Detailed information about Standard Bags, Baffle Bags, Conductive Bags, and Food Grade Bags
- **About Page** - Company history, values, and mission since 1919
- **Team Page** - Meet the dedicated team members with contact information
- **Facility Page** - 2000m² production facility with expansion capabilities
- **Quality Page** - ISO 9001, ISO 14001, and HACCP certifications
- **Contact Page** - Functional contact form with business hours and location

### Design & UX
- Clean, modern, professional design
- Fully responsive (mobile, tablet, desktop)
- Smooth animations and transitions
- Professional color scheme (blue, green, white)
- Accessible and SEO-friendly

### Content from lescobags.com
All content has been extracted and implemented from the original website:
- Product descriptions and specifications
- Quality management system details
- Certification information
- Team member details
- Company history and values
- Contact information

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository** (if applicable):
```bash
git clone https://github.com/zoxknez/lescobags.git
cd lescobags
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run the development server**:
```bash
npm run dev
```

4. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
lescobags/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx     # Main navigation component
│   │   └── Footer.tsx          # Footer component
│   ├── about/
│   │   └── page.tsx            # About Us page
│   ├── contact/
│   │   └── page.tsx            # Contact page with form
│   ├── facility/
│   │   └── page.tsx            # Facility & Infrastructure page
│   ├── products/
│   │   └── page.tsx            # Products page
│   ├── quality/
│   │   └── page.tsx            # Quality & Certifications page
│   ├── team/
│   │   └── page.tsx            # Meet the Team page
│   ├── layout.tsx              # Root layout with Navigation & Footer
│   ├── page.tsx                # Homepage
│   └── globals.css             # Global styles
├── public/
│   └── images/                 # Image assets (placeholders)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── postcss.config.js
```

## 🛠️ Technologies Used

- **Framework**: Next.js 15.0.3 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.1
- **UI**: React 18.3.1
- **PostCSS**: Autoprefixer

## 📝 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🎨 Pages Overview

### Homepage (/)
- Hero section with company introduction
- Products preview with 4 main product categories
- Quality & Certifications section (ISO 9001, ISO 14001, HACCP)
- About preview section
- Customer satisfaction testimonial
- Call-to-action section

### Products (/products)
- Detailed product information
- Standard Big Bags specifications
- Quality management system
- Pre-production, in-process, and final inspection details

### About (/about)
- Company history since 1919
- Values and mission
- Statistics (100+ years, 2000m² facility, 500-2000kg capacity)
- Call-to-action

### Team (/team)
- Team members with roles:
  - Natalija Cvetković - Client relations and HR
  - Milena Stojanović - Customer relations
  - Marijana Jovanović - Production manager
  - Miloš Stanković - Purchasing manager
  - Boban Savić - Production manager
- Email contact for each member

### Facility (/facility)
- 2000m² active production area
- 2000m² expansion-ready hall
- 5000m² future capacity available
- Climate-controlled environment
- Modern machinery and equipment
- Facility gallery

### Quality (/quality)
- Quality philosophy and approach
- ISO 9001:2008 certification
- ISO 14001:2004 certification
- HACCP certification
- Quality process (Pre-production, In-process, Final inspection)
- Customer satisfaction commitment

### Contact (/contact)
- Functional contact form with:
  - Name, Email, Subject, Message fields
  - Captcha validation
  - Send copy option
  - Success message
- Contact information:
  - Address: Tekstilna 40, 16000 Leskovac, Serbia
  - Phone: 016/640 202
  - Email: info@lescobags.com
- Business hours
- Map placeholder
- Social media links

## 🌐 Company Information

**Lescobags d.o.o.**
- **Founded**: 1919
- **Location**: Leskovac, Serbia
- **Address**: Tekstilna 40, 16000 Leskovac
- **Phone**: 016/640 202
- **Email**: info@lescobags.com
- **Products**: FIBC, Bulk Bags, Big Bags
- **Certifications**: ISO 9001, ISO 14001, HACCP
- **Capacity**: 500kg - 2000kg bags
- **Facility**: 2000m² (with 7000m² expansion potential)

## 📦 Products

1. **Standard Big Bags**
   - For dry non-hazardous materials
   - Powder, flake, and granular forms
   - Customizable sizes and colors
   - UV-treated polypropylene fabric
   - Optional dustproof seams and liners
   - Capacity: 500-2000 Kg

2. **Baffle Bags**
   - Optimal space usage
   - Efficient stacking and storage

3. **Conductive Bags**
   - For sensitive materials
   - Special environments

4. **Food Grade Bags**
   - HACCP certified
   - Food safety standards

## 🔜 Future Enhancements

- [ ] Add real product images (currently using placeholders)
- [ ] Implement Google Maps integration for location
- [ ] Add backend for contact form (email sending)
- [ ] Multi-language support (English/Serbian)
- [ ] Product catalog with PDF download
- [ ] Blog/News section
- [ ] Customer testimonials page
- [ ] Photo gallery of facility and products

## 📄 License

Copyright © 2016-2025 Lescobags d.o.o. All rights reserved.

## 👨‍💻 Development

Built with Next.js and deployed on Vercel. Based on content from [lescobags.com](https://lescobags.com).

---

**Note**: This website contains all content extracted from the original lescobags.com website, including company information, product details, team members, certifications, and contact information. Image placeholders should be replaced with actual company images for production use.
