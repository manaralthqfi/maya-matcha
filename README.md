# Maya Matcha Website Project

## Project Information

- **Project title:** Maya Matcha — Matcha Cafe and Shop
- **Course:** IT404 — Web Design
- **Project deadline:** November 30, 2026
- **Purpose:** A complete, responsive four-page website for a matcha cafe that introduces the brand, presents menu products, displays prices, and allows customers to add items to a cart or submit a booking/purchase form.

> [!IMPORTANT]
> The names and IDs below are fictional placeholders for report preparation only. Replace them with the real group members' information before submission.

## Group Members

| Member | Student ID | Primary Role |
|---|---:|---|
| Sara Ahmed | 440100001 | Page structure and navigation |
| Nora Khalid | 440100002 | CSS design and responsive layout |
| Lina Mohammed | 440100003 | JavaScript features and validation |
| Reem Ali | 440100004 | Content, images, tables, and project report |

## Project Description

Maya Matcha is an English-language website inspired by a natural, calm, and premium matcha brand. The design uses cream, soft green, peach, and dark forest-green colors to reflect freshness and relaxation.

The website works locally and is designed to be easy to use on desktop and mobile screens. It includes interlinked pages, a consistent header and navigation menu, product imagery, a meaningful price table, a complete booking and purchase form, and JavaScript interactivity.

## Website Pages

### 1. Home Page — `index.html`
Introduces Maya Matcha with a hero section, brand message, main calls to action, and three brand values.

### 2. Our Story — `about.html`
Explains the purpose and story of Maya Matcha and describes the matcha selection, preparation, and serving process.

### 3. Menu — `menu.html`
Displays drinks and matcha powder products, prices, a three-product grid, an interactive shopping cart, and a meaningful HTML table.

### 4. Booking & Shop — `booking.html`
Provides the cafe location, opening hours, and a complete order/reservation form. It includes text, email, telephone, date, time, selection, radio, checkbox, and text-area controls.

## Individual Technical Contributions

### Sara Ahmed — 440100001
- Created the complete semantic HTML structure.
- Built `index.html`, `about.html`, and the common navigation structure.
- Added headings, sections, articles, figures, address information, and HTML5 content elements.
- Connected all four pages using working navigation links.

### Nora Khalid — 440100002
- Created the external stylesheet `css/style.css`.
- Designed the Maya Matcha color palette, typography, spacing, cards, tables, forms, and footer.
- Implemented responsive layouts for tablets and mobile screens.
- Styled the navigation menu and the mobile menu button.

### Lina Mohammed — 440100003
- Developed `js/script.js`.
- Implemented the responsive navigation menu.
- Implemented the product cart and automatic cart total calculation.
- Used `localStorage` to keep selected products available between page visits.
- Added required-field validation, format validation, date handling, and booking confirmation behavior.

### Reem Ali — 440100004
- Prepared and organized the supplied matcha images in the `images/` folder.
- Added descriptive alternative text for important product and brand images.
- Created the menu table and the bookable tasting experience content.
- Prepared this report and reviewed page consistency and usability.

Every student should be able to explain and modify the code assigned to her contribution during the project demonstration.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Local Storage API
- Google Fonts
- Responsive Web Design

## HTML and HTML5 Features

- Semantic elements such as `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<aside>`, and `<footer>`
- Working hyperlinks between pages
- Images with alternative text
- A meaningful HTML table
- HTML5 form controls and input types
- Internal form validation attributes

## JavaScript Features

### Shopping Cart
The menu buttons read the product name and price from `data-*` attributes, add the selected product to a JavaScript array, store the array in `localStorage`, and update the cart and total on the page.

### Booking Form Validation
The form uses HTML5 validation plus JavaScript:
- Required fields must be completed.
- Email addresses must use a valid email format.
- Telephone numbers must contain 10 digits.
- The booking date cannot be earlier than the current date.
- The full name must contain at least three characters.
- The order type and time must be selected.
- The agreement checkbox must be selected.
- Each invalid field displays a specific message directly below that field.
- Invalid fields receive a red border and red validation styling.
- Field errors are cleared automatically when the user edits or changes the field.
- A general alert appears below the form: “Please correct the highlighted fields.”
- A successful submission displays a personalized confirmation message without clearing the submitted values.
- The booking validation logic is implemented in `js/booking-validation.js`.
- The booking page loads this script separately so validation updates can be published without affecting the menu cart script.

### Responsive Navigation
JavaScript opens and closes the navigation menu on small screens and updates the menu button's `aria-expanded` accessibility attribute.

## Design

- External CSS file shared by every page
- Consistent Maya Matcha branding
- Cream and natural-green color palette
- Clear text hierarchy and readable font sizes
- Spacious layouts and consistent card and button styles
- Responsive behavior for desktop, tablet, and mobile devices

## How to Run the Website Locally

1. Open the project folder.
2. Open `index.html` in a web browser.
3. Use the navigation menu to open the other pages.

To run with a local server using Windows PowerShell:

```powershell
py -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Project Resources

- `/index.html`
- `/about.html`
- `/menu.html`
- `/booking.html`
- `/css/style.css`
- `/js/script.js`
- `/images/`
