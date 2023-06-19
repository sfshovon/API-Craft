# API-Craft

## Description

API-Craft is a project built using Next.js and React.js. It is a private project with version 0.1.0.

## Installation

Use the package manager [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) to install API-Craft.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Used Tech Stack and Libraries
- Tech Stack: Next.js and React.js
- CSS Framework: TailwindCSS with DaisyUI for the user interface
- Icons: React Icons
- Toast: React Hot Toast

## Features
- Task 1: The landing page and all other sections have been designed in accordance with the Figma design.
- Task 2: Using the given API, all product categories are shown below the navbar in the landing page via API. Clicking on any category will scroll down to the **Shop By Category** section, where products from the selected category will be shown.
- Task 3: Integrated the products API from the given API and executed **CRUD** operation. I have added a button called CRUD in the navbar to perform the operations. Clicking on **CRUD** redirects to a page where all products are displayed.

### CRUD
- **Create:** A button is added on top of the page to add a product. Clicking on the **Add Product** button opens a modal with a form. By filling out the form and clicking on the **Add** button, adds a product, which is displayed along with the existing products.
- **Read:** Clicking on the **CRUD** button displays all products.
- **Update:** Each product has an **Edit** button. Clicking on this button opens a modal with a form filled with the details of the selected product. After changing any value, clicking on the **Update** button shows the updated details of that product.
- **Delete:** Each product has a **Delete** button. Clicking on this button opens a modal for confirmation of deletion with two button options. Clicking on **No** does nothing but close the modal. Clicking on **Yes** deletes the product.
