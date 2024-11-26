# Kovato Website

**Visit Kovato**  
[https://kovato.vercel.app](https://kovato.vercel.app)

**Author**: Hendrich Bührer

## Overview

The Kovato Website is built entirely from scratch using Nuxt 3 and TailwindCSS. It offers a subscription-based model for businesses to access high-quality, custom web and app solutions without a large upfront cost. The website integrates the Kovato brand's identity, emphasizing flexibility, and an affordable alternative to traditional web development.

The Kovato website is essential for launching the Kovato business, showcasing the integration of brand, design, and development. This fully functional platform includes features like CRUD operations, user authentication, database integration with row-level security (RLS), and functions for user sign-ins, bill payments, and account management.

## Project Goals

The main goals of this project, as laid out in my original proposal, are:

- **Custom Website Design**: Develop a custom-built website, based on the Kovato brand guide, that demonstrates my design capabilities and provides a cohesive user experience.
- **User Authentication and Payments**: Set up secure user accounts for sign-ins, billing, and plan management using Supabase for authentication and data security.
- **Database Integration**: Integrate with Supabase to manage user data, utilizing row-level security (RLS) to maintain privacy and control.
- **Portfolio and Contact Section**: Include a company portfolio and contact form that adheres to the brand's identity and user-friendly interface.
- **SEO and Optimization**: Ensure that the site is fast, responsive, secure, and optimized for search engines.

## Key Features and Commits

### feat: Implemented key features and refinements for Kovato project

- **Navigation Menu**:
  - Added a responsive navigation menu with a toggle function for mobile users.
  - Integrated sliding animation for dropdowns using Vue's `transition` component to improve user experience.
  - Corrected 'max-height' transitions for a smooth sliding effect.
  - Managed window resize events to automatically close the mobile menu on larger screens.

- **Plans Summary and Licensing Page**:
  - Developed the content for Regular and Premium plans, emphasizing each plan’s features.
  - Created a Licensing Terms page with specific clauses for Alberta, Canada.
  - Included important details about subscription requirements, buyout options, and jurisdiction coverage.

- **Thank You Page**:
  - Designed a responsive thank-you page with minimalist elements consistent with the Kovato branding.
  - Ensured that all components align well across different screen sizes.

- **General Improvements**:
  - Enhanced project structure to ensure proper responsiveness across the entire website.
  - Refined content for a clearer and more engaging experience for visitors.

### feat(navbar): Implemented and enhanced responsive hamburger menu for navigation

- **Mobile Menu Enhancements**:
  - Added a hamburger menu button for mobile views, with clear SVG icons indicating open/close states.
  - Implemented a sliding dropdown menu below the navbar, ensuring the correct width and adding shadow effects to enhance visual appeal.
  - Ensured the hamburger menu closes upon clicking a link by adding the `@click="closeMenu"` event.
  - Fixed the dropdown behavior to avoid stretching the navbar, maintaining consistency in width and overall styling.
  
- **JavaScript and Lifecycle Improvements**:
  - Added JavaScript to handle window resizing, automatically closing the dropdown on larger viewports.
  - Refactored toggle and close functions to make them more reusable.
  - Managed window event listeners through Vue lifecycle hooks for optimal performance.

## Project Features

### Regular Plan
- Custom Website Design
- Integration with Social Media
- Stock Images and Image Editing
- Scalability for Expansion
- Basic Search Engine Optimization (SEO)
- Website Hosting, Support, and Maintenance (Standard Business Hours)
- Content Management System (CMS) and Basic Training
- Mobile Responsive Design
- Domain Assistance (Does not include e-commerce or payment processing)

### Premium Plan
- All Features in the Regular Plan
- Advanced Search Engine Optimization
- E-commerce Capabilities and Payment Processing
- 24/7 Premium Customer Support with Proprietary Ticketing System
- Full Website Redesign Credit Every 2 Years
- Private Website Training Sessions
- Analytics Integration
- Support and Site Upgrades After Launch

### See All Features
The home page allows users to "See All" features of both Regular and Premium plans. The button navigates to the Pricing page, where users can explore all features and compare plans in detail.

## User Authentication and Billing

The Kovato website integrates with Supabase to provide secure user authentication and billing management. Users can sign in, manage their details, and view their subscription plan directly from the dashboard. Billing functionality is set up to include payment options, though the current release includes placeholders for upcoming payment gateways.

## File Structure

- **pages/index.vue**: Main landing page that explains the value of Kovato, with sections on features, plans, and about the founder.
- **pages/pricing.vue**: The pricing page, featuring detailed comparisons between the Regular and Premium plans, with expandable feature lists.
- **pages/dashboard.vue**: User dashboard where customers can manage their profile, view billing info, and upgrade their plan.
- **components/AuthModal.vue**: Handles user sign-in and sign-up processes with Supabase integration.
- **components/Navbar.vue**: The top navigation menu, responsive for both mobile and desktop views.
- **components/PlanCard.vue**: Displays individual plans on the pricing page with a "See More" expandable feature list.

## Challenges Addressed

### Responsive Navigation Menu
Creating a seamless navigation experience across different screen sizes took considerable refinement, particularly handling mobile toggle behavior and window resizing events. Addressed by leveraging Vue's lifecycle hooks and scoped CSS.

### Supabase Integration
Integrating Supabase for authentication, user profile creation, and billing data required implementing Row-Level Security (RLS) to ensure user data privacy. The SQL policies for RLS were implemented directly in Supabase to ensure each user could only access their information.

### User-Friendly Plan Comparison
The expandable "See More" sections for plan features were designed to be easy for users to understand and compare. Vue's reactivity was crucial in ensuring that expanding one plan's features did not affect the layout of the other plan.

## Time Estimate

The project wrapped up within the planned 25-30 hours:

- **UI and Design Implementation**: 8 hours.
- **Supabase Integration (Authentication & Database)**: 7 hours.
- **Feature Development for Plans and Billing**: 6 hours.
- **Navigation and Responsive Design**: 5 hours.
- **Testing and Bug Fixes**: 4 hours.

## Delivery

The Kovato website is live at [https://kovato.vercel.app](https://kovato.vercel.app). The source code is also available on GitHub, and I've included this detailed write-up as part of the submission for my portfolio.

## Portfolio Integration

The Kovato website is a key piece in my portfolio, demonstrating my ability to develop a full-scale web platform with modern technologies. It's included as a standalone project showcasing the integration of user experience, branding, and backend functionality.

