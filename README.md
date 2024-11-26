# Kovato Website

## Project Overview
Kovato is the future of web design and development, offering a subscription-based model for businesses to access high-quality, customized web and app solutions without the need for large upfront costs. This project involves building the Kovato website from scratch using Nuxt3 and TailwindCSS, following a brand guide to deliver a cohesive and professional online presence.

The Kovato website is essential to launching the business. It showcases a full integration of brand, design, and development, demonstrating my ability to build a fully functional platform. This includes CRUD operations, user authentication, database integration with row-level security (RLS), and features like sign-ins, bill payments, and account management. The website aims to be user-friendly, responsive, and secure.

## Technologies Used
- **Nuxt3**: A modern framework for building web applications with Vue.js, used to create the structure and logic for the website.
- **TailwindCSS**: A utility-first CSS framework used for responsive styling and ensuring a mobile-friendly user experience.
- **Supabase**: Used for backend services, including user authentication, database integration, and RLS to ensure data security.

## Project Goals
- **Custom Website Design**: Build a website that aligns with the Kovato brand guide, emphasizing custom design over templates or pre-built themes.
- **User Authentication and Payments**: Implement a user account system for managing personal details, signing up for plans, and making bill payments. Supabase is used for authentication, ensuring security throughout the process.
- **Database Integration**: Integrate with Supabase for data management, utilizing row-level security to protect user data. The implementation of RLS ensures each user only accesses their data.
- **Company Portfolio and Contact**: Create sections for the company portfolio and a contact form, maintaining consistency with the brand guide.
- **Performance and Optimization**: Ensure the site is fast, secure, and optimized for SEO to improve visibility.

## Key Features and Commits
### feat: Implemented key features and refinements for Kovato project
- **Navigation Menu**:
  - Added a responsive navigation menu with toggle functionality for mobile devices.
  - Integrated sliding animation for the dropdown menu using Vue's 'transition' component for a smooth user experience.
  - Fixed issues with 'max-height' transitions to achieve smooth sliding effects.
  - Added event handling for window resize to automatically close the mobile menu when switching to larger screens.

- **Plans Summary and Legal Page**:
  - Developed content for Regular and Premium plans, highlighting each plan's features.
  - Drafted a Licensing Terms page with detailed clauses, tailored to the requirements in Alberta, Canada.
  - Included provisions for subscription terms, buyout options, and jurisdiction.

- **Thank You Page**:
  - Designed a simple thank-you page with responsive elements.
  - Maintained a minimalist and clean layout consistent with the Kovato branding.

- **General Refinements**:
  - Enhanced project structure to improve responsiveness across all components.
  - Refined content for clarity, ensuring a better overall user experience.

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
The Kovato website integrates with Supabase to provide secure user authentication and database management. Users can sign up, log in, manage their details, and subscribe to website plans. The billing system is designed to accommodate recurring payments, allowing users to access services without needing large initial payments. Plans can be upgraded or canceled based on the user's requirements, with options for subscription buyout or transferring ownership at the end of the contract.

## Author
This project was developed by me (Hendrich Bührer) as part of the second portfolio piece assignment. It showcases the ability to design, develop, and integrate a cohesive web solution while following branding guidelines. All commits and feature implementations were aimed at delivering a full-fledged functional platform for Kovato, suitable for launching the business and serving as a portfolio highlight.